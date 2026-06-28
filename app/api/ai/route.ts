import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { currentAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = process.env.AI_MODEL || "claude-opus-4-8";

const SYSTEM = `You are Professor Photon, a warm, encouraging physics tutor for a Year 11 student studying Edexcel IGCSE Physics. You teach in the Art of Problem Solving style.

Rules:
- NEVER give the full final answer to a problem the student is working on, unless they explicitly say they give up. Instead respond with ONE guiding question or the single NEXT hint.
- Always nudge them to try the next step themselves.
- Praise good reasoning specifically; treat mistakes as useful, not failures.
- Explain WHY things work, not just what the rule is. When elegant, mention a neat alternative way to see it.
- Keep it short and age-appropriate (they are ~15). Use simple language and a friendly tone. Use correct units and physics.
- If asked something off-topic or inappropriate, gently redirect to physics.
- You may use plain-text maths like v = u + a*t and units like m/s². Do not use LaTeX.`;

export async function POST(req: Request) {
  const acc = await currentAccount();
  if (!acc)
    return NextResponse.json(
      { error: "Please sign in to ask Professor Photon." },
      { status: 401 }
    );

  if (!process.env.ANTHROPIC_API_KEY)
    return NextResponse.json(
      {
        error:
          "The AI tutor isn't switched on yet — ask a grown-up to add an Anthropic API key.",
      },
      { status: 503 }
    );

  const { message, context, history } = await req.json();
  if (!message || typeof message !== "string")
    return NextResponse.json({ error: "Empty message." }, { status: 400 });

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const msgs: Anthropic.MessageParam[] = [];
  if (Array.isArray(history)) {
    for (const h of history.slice(-8)) {
      if (h?.role && h?.content)
        msgs.push({ role: h.role === "assistant" ? "assistant" : "user", content: String(h.content).slice(0, 2000) });
    }
  }
  const ctx = context ? `\n\n[Topic context: ${String(context).slice(0, 400)}]` : "";
  msgs.push({ role: "user", content: String(message).slice(0, 2000) + ctx });

  try {
    const resp = await client.messages.create({
      model: MODEL,
      max_tokens: 800,
      system: SYSTEM,
      messages: msgs,
    });
    const text = resp.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return NextResponse.json({ reply: text || "Let's think about this together — what have you tried so far?" });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError)
      return NextResponse.json(
        { error: "Professor Photon is a bit busy — try again in a moment!" },
        { status: 429 }
      );
    return NextResponse.json(
      { error: "Professor Photon couldn't reply right now. Try again soon." },
      { status: 500 }
    );
  }
}
