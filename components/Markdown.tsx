import React from "react";

// Minimal markdown-lite renderer: **bold**, *italic*, `code`, - bullets, 1. lists,
// and blank-line paragraphs. Safe (no raw HTML injection).
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) nodes.push(<strong key={`${keyPrefix}-${i}`}>{tok.slice(2, -2)}</strong>);
    else if (tok.startsWith("`")) nodes.push(<code key={`${keyPrefix}-${i}`}>{tok.slice(1, -1)}</code>);
    else nodes.push(<em key={`${keyPrefix}-${i}`}>{tok.slice(1, -1)}</em>);
    last = m.index + tok.length;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function Markdown({ text, className = "" }: { text: string; className?: string }) {
  const blocks = text.split(/\n{2,}/);
  return (
    <div className={`prose-lite ${className}`}>
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isUl = lines.every((l) => l.trim().startsWith("- "));
        const isOl = lines.every((l) => /^\d+\.\s/.test(l.trim()));
        if (isUl) {
          return (
            <ul key={bi}>
              {lines.map((l, li) => (
                <li key={li}>{renderInline(l.trim().slice(2), `${bi}-${li}`)}</li>
              ))}
            </ul>
          );
        }
        if (isOl) {
          return (
            <ol key={bi}>
              {lines.map((l, li) => (
                <li key={li}>{renderInline(l.trim().replace(/^\d+\.\s/, ""), `${bi}-${li}`)}</li>
              ))}
            </ol>
          );
        }
        return <p key={bi}>{renderInline(block, `${bi}`)}</p>;
      })}
    </div>
  );
}
