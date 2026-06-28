import type { Topic } from "../types";

// TOPIC 9 — Electromagnetism (Edexcel IGCSE Physics 4PH1).
// Magnetism, the motor effect (F = B I L), electromagnetic induction,
// the a.c. generator and transformers / the National Grid.

export const em: Topic = {
  id: "em",
  code: "EM",
  number: 9,
  title: "Electromagnetism",
  subject: "Physics",
  icon: "🧲",
  color: "#ec4899",
  intro:
    "Electricity and magnetism are two faces of the same force. In this topic you'll discover how magnets behave, how an electric current creates a magnetic field, how a current in a field feels a force (the idea behind every electric motor), and how moving magnets generate electricity. You'll finish with transformers and why the National Grid sends power at very high voltage to save energy.",
  guide: [
    {
      heading: "Magnets, poles and magnetic fields",
      discovery: {
        problem:
          "Two bar magnets are pushed together. Sometimes they snap together, sometimes they shove each other apart — even though nothing about the magnets has changed. What decides which?",
        idea:
          "Every magnet has two poles, north and south. Like poles (N–N or S–S) repel; unlike poles (N–S) attract. Which way you turn a magnet decides which poles face each other, so it decides whether you feel attraction or repulsion.",
      },
      body:
        "A **permanent magnet** produces a magnetic field all the time. Every magnet has two **poles**: a **north-seeking pole (N)** and a **south-seeking pole (S)**.\n\nThe basic rule of magnetic forces:\n\n- **Like poles repel** (N–N or S–S push apart).\n- **Unlike poles attract** (N–S pull together).\n\nMagnetism is a **non-contact force**: the magnets push or pull on each other without ever touching.\n\nA **magnetic field** is the region around a magnet (or a current) where another magnet or a magnetic material feels a force. We draw it with **field lines** that:\n\n1. point **from N to S** *outside* the magnet,\n2. never cross, and\n3. are **closer together where the field is stronger** (strongest at the poles).\n\nOnly a few materials are **magnetic** (can be magnetised or attracted): **iron, steel, cobalt and nickel**.\n\n**Plotting the field.** You can reveal the field two ways:\n\n- **Iron filings** — sprinkle them over paper on top of the magnet and tap gently; each tiny filing becomes a mini-magnet and lines up, showing the *shape* of the field (but not its direction).\n- **A plotting compass** — the compass needle points along the field at each point, so it shows both the *shape and the direction* (build a line of dots and join them).\n\n**Field patterns** to know: a single bar magnet (lines curving N to S); two unlike poles facing (lines run straight across — a roughly **uniform** field — and the magnets attract); two like poles facing (lines bend away from each other with a **neutral point** of zero field between them — the magnets repel).\n\n**Earth's magnetic field.** The Earth behaves as if it contains a giant bar magnet, which is why a compass works. A compass needle is a small magnet whose **north-seeking pole** points toward **geographic north**. That means a magnetic **south** pole of the Earth's field lies near the geographic North Pole (unlike poles attract). The needle settles along the Earth's field lines, letting us navigate.",
      diagrams: [
        {
          caption: "Field lines of a bar magnet run from N to S; closely spaced at the poles = stronger field.",
          svg:
            '<svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Magnetic field lines around a bar magnet curving from the north pole to the south pole">\n<rect x="100" y="60" width="60" height="20" fill="#cbd5e1" stroke="#475569"/>\n<rect x="100" y="60" width="30" height="20" fill="#ef4444"/>\n<rect x="130" y="60" width="30" height="20" fill="#3b82f6"/>\n<text x="115" y="74" font-size="11" text-anchor="middle" fill="#ffffff">N</text>\n<text x="145" y="74" font-size="11" text-anchor="middle" fill="#ffffff">S</text>\n<path d="M130 60 C150 20 200 20 160 60" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fa)"/>\n<path d="M130 80 C150 120 200 120 160 80" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fa)"/>\n<path d="M126 60 C90 10 230 10 164 60" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fa)"/>\n<path d="M126 80 C90 130 230 130 164 80" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fa)"/>\n<defs><marker id="fa" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#1e293b"/></marker></defs>\n<text x="130" y="135" font-size="9" text-anchor="middle" fill="#334155">field lines: N to S (outside)</text>\n</svg>',
        },
        {
          caption: "Between two unlike poles (attraction) the field lines run straight across from N to S; between two like poles (repulsion) the lines push apart with a neutral point between them.",
          svg:
            '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top: uniform field lines from a north pole to a facing south pole showing attraction. Bottom: two facing north poles whose field lines bend away from each other with a neutral point between them showing repulsion">\n<rect x="20" y="20" width="40" height="40" fill="#ef4444" stroke="#475569"/>\n<text x="40" y="45" font-size="12" text-anchor="middle" fill="#ffffff">N</text>\n<rect x="200" y="20" width="40" height="40" fill="#3b82f6" stroke="#475569"/>\n<text x="220" y="45" font-size="12" text-anchor="middle" fill="#ffffff">S</text>\n<path d="M60 30 H200" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fb)"/>\n<path d="M60 40 H200" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fb)"/>\n<path d="M60 50 H200" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fb)"/>\n<text x="130" y="72" font-size="9" text-anchor="middle" fill="#334155">unlike poles: attract (uniform field)</text>\n<rect x="20" y="110" width="40" height="40" fill="#ef4444" stroke="#475569"/>\n<text x="40" y="135" font-size="12" text-anchor="middle" fill="#ffffff">N</text>\n<rect x="200" y="110" width="40" height="40" fill="#ef4444" stroke="#475569"/>\n<text x="220" y="135" font-size="12" text-anchor="middle" fill="#ffffff">N</text>\n<path d="M60 120 C100 100 100 100 120 95" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fb)"/>\n<path d="M60 140 C100 160 100 160 120 165" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fb)"/>\n<path d="M200 120 C160 100 160 100 140 95" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fb)"/>\n<path d="M200 140 C160 160 160 160 140 165" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#fb)"/>\n<circle cx="130" cy="130" r="3" fill="#16a34a"/>\n<text x="130" y="178" font-size="9" text-anchor="middle" fill="#334155">like poles: repel (neutral point in green)</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Like poles repel; unlike poles attract; magnetism is a non-contact force (it acts without touching).",
        "Field lines go from N to S outside the magnet and never cross.",
        "Closer lines = stronger field (strongest at the poles).",
        "Between unlike poles the field is roughly uniform; between like poles the lines repel and there is a neutral point (zero field) between them.",
        "Magnetic materials (can be magnetised / attracted): iron, steel, cobalt, nickel.",
      ],
      whyItWorks:
        "Field lines are just a map of the force direction on a tiny test north pole. A north pole is pushed away from N and pulled toward S, so the arrows point from N to S outside the magnet.",
      strategies: ["Draw the field before reasoning", "Use a test north pole to find arrow direction"],
      formulae: [],
    },
    {
      heading: "Permanent vs induced magnets",
      body:
        "A **permanent magnet** keeps its magnetism (it is made from a *magnetically hard* material such as **steel**).\n\n**Induced magnetism** happens when an *unmagnetised* magnetic material (e.g. iron) is placed in a magnetic field: it becomes a magnet itself while it is in the field. The induced pole nearest the magnet is always the *opposite* type, so the force between them is **always attraction** — this is why a magnet picks up paper clips even though the clips are not magnets.\n\n- **Magnetically soft** materials (e.g. **iron**) magnetise easily but *lose* their magnetism easily — ideal for electromagnet cores.\n- **Magnetically hard** materials (e.g. **steel**) are harder to magnetise but *keep* their magnetism — ideal for permanent magnets.",
      keyPoints: [
        "Induced magnetism: a magnetic material becomes a temporary magnet in a field.",
        "The induced force is always attraction.",
        "Soft iron magnetises and demagnetises easily (good cores).",
        "Hard steel keeps magnetism (good permanent magnets).",
      ],
      whyItWorks:
        "A magnetic material contains tiny magnetic regions (domains). An external field lines them up so the material itself becomes magnetic; in soft iron they spring back out of line when the field is removed.",
      strategies: ["Link 'soft vs hard' to the job (core vs permanent magnet)"],
      formulae: [],
    },
    {
      heading: "Magnetic field of a current: wires and solenoids",
      discovery: {
        problem:
          "A compass sits quietly on a bench. You switch on a current in a nearby wire and the compass needle suddenly swings. There is no magnet anywhere — so what deflected it?",
        idea:
          "An electric current makes its own magnetic field. A current is moving charge, and moving charge produces magnetism. Switch the current on and a field appears; switch it off and the field vanishes.",
      },
      body:
        "**A current in a wire creates a magnetic field around it.** For a straight wire the field lines are **concentric circles** around the wire. Their direction is given by the **right-hand grip rule**: point your right thumb along the (conventional) current and your curled fingers show the field direction. **Reversing the current reverses the field direction** (the circles point the other way round).\n\nThe field is **stronger** if the current is **larger** or you are **closer** to the wire.\n\nA **solenoid** is a coil of wire. The fields from each turn add up to give a field that looks exactly like a **bar magnet's**: uniform inside, with a clear N and S pole at the ends. The field is stronger if you:\n\n- increase the **current**,\n- add **more turns**, or\n- put an **iron core** inside (this makes an **electromagnet**).",
      diagrams: [
        {
          caption: "Concentric circular field around a straight current-carrying wire (right-hand grip rule).",
          svg:
            '<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concentric circular magnetic field lines around a vertical current-carrying wire">\n<line x1="100" y1="10" x2="100" y2="150" stroke="#b91c1c" stroke-width="3"/>\n<text x="112" y="20" font-size="10" fill="#b91c1c">I</text>\n<circle cx="100" cy="80" r="20" fill="none" stroke="#1e293b" stroke-width="1.5"/>\n<circle cx="100" cy="80" r="38" fill="none" stroke="#1e293b" stroke-width="1.5"/>\n<circle cx="100" cy="80" r="56" fill="none" stroke="#1e293b" stroke-width="1.5"/>\n<path d="M120 80 l-4 -5 m4 5 l-4 5" stroke="#1e293b" stroke-width="1.5" fill="none"/>\n<text x="100" y="158" font-size="9" text-anchor="middle" fill="#334155">field circles the wire</text>\n</svg>',
        },
        {
          caption: "A solenoid produces a bar-magnet-shaped field with N and S poles at its ends.",
          svg:
            '<svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A coil of wire (solenoid) with a magnetic field like a bar magnet, north pole at one end and south pole at the other">\n<g stroke="#b91c1c" stroke-width="2" fill="none">\n<circle cx="90" cy="55" r="14"/><circle cx="110" cy="55" r="14"/><circle cx="130" cy="55" r="14"/><circle cx="150" cy="55" r="14"/><circle cx="170" cy="55" r="14"/>\n</g>\n<text x="70" y="59" font-size="12" text-anchor="middle" fill="#3b82f6">S</text>\n<text x="190" y="59" font-size="12" text-anchor="middle" fill="#ef4444">N</text>\n<path d="M70 55 H10" stroke="#1e293b" stroke-width="1.5" marker-end="url(#sa)"/>\n<path d="M190 55 H250" stroke="#1e293b" stroke-width="1.5" marker-end="url(#sa)"/>\n<path d="M130 41 C130 10 250 10 196 50" fill="none" stroke="#1e293b" stroke-width="1.2" marker-end="url(#sa)"/>\n<defs><marker id="sa" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#1e293b"/></marker></defs>\n<text x="130" y="100" font-size="9" text-anchor="middle" fill="#334155">field like a bar magnet</text>\n</svg>',
        },
      ],
      keyPoints: [
        "A current always creates a magnetic field around it.",
        "Straight wire: concentric circular field lines (right-hand grip rule).",
        "Reversing the current reverses the field direction.",
        "Flat coil / solenoid: bar-magnet field, uniform inside, N and S at the ends.",
        "Stronger field: more current, more turns, or an iron core.",
      ],
      whyItWorks:
        "Each tiny length of current makes a circular field; in a coil these circular fields reinforce each other along the axis, producing the strong, bar-magnet-like field of a solenoid.",
      strategies: ["Right-hand grip rule for field direction", "List the three ways to strengthen a field"],
      formulae: [],
    },
    {
      heading: "Electromagnets and their uses",
      body:
        "An **electromagnet** is a solenoid wound around a **soft iron core**. Because it is soft iron, the magnetism appears the instant the current flows and **disappears when the current is switched off** — that switchability is the whole point.\n\nUses and how each one works:\n\n- **Scrapyard crane** — switch the electromagnet on to lift steel/iron, switch off to drop the load.\n- **Relay** — a *small* current in one circuit energises an electromagnet, which pulls an iron armature to close (or open) the contacts of a *second*, high-power circuit. This lets a small, safe current switch a large/dangerous one (e.g. a car starter motor).\n- **Circuit breaker** — if the current gets too large, the electromagnet becomes strong enough to pull a switch open, cutting the circuit (a fast, resettable replacement for a fuse).\n- **Electric bell** — current flows through the electromagnet, which attracts an iron armature so a hammer strikes the gong. The movement breaks the circuit, the electromagnet switches off, a spring pulls the armature back, the circuit re-makes, and the cycle repeats — giving a continuous ring.\n- **Loudspeaker** — a varying current (the audio signal) in a coil attached to a paper cone sits in a permanent magnet's field; the motor effect pushes the coil and cone in and out, making the air vibrate and producing sound.\n\nYou strengthen an electromagnet by increasing the **current**, adding **more turns**, or using a larger/softer **iron core**.",
      keyPoints: [
        "Electromagnet = coil + soft iron core, controlled by a current.",
        "Magnetism switches on/off with the current (soft iron loses it instantly).",
        "Strengthen it: more current, more turns, iron core.",
        "Uses: cranes, bells, relays, circuit breakers, loudspeakers.",
      ],
      whyItWorks:
        "Soft iron is chosen because its domains line up strongly with the coil's field but spring back to random when the current stops, so the magnet can be turned off.",
      thinkDeeper:
        "Why would a steel core ruin a scrapyard crane? (Steel keeps its magnetism, so the load would never let go when you switch off.)",
      strategies: ["Match the core material to the job"],
      formulae: [],
    },
    {
      heading: "The motor effect and F = B I L",
      discovery: {
        problem:
          "A loose wire hangs between the poles of a magnet, perfectly still. You connect it to a battery and it instantly jumps sideways — out of the gap. No one pushed it. Where did the force come from?",
        idea:
          "The current makes its own field, which interacts with the magnet's field. The two fields combine, and the wire is pushed from where the field is strong toward where it is weak. A current in a magnetic field experiences a force — the **motor effect**.",
      },
      body:
        "When a **current-carrying wire** sits in a **magnetic field**, it experiences a **force**. This is the **motor effect**.\n\nThe size of the force is:\n\n**F = B I L**\n\nwhere **F** = force (newtons, N), **B** = magnetic flux density (tesla, T), **I** = current (amps, A) and **L** = length of wire in the field (metres, m).\n\nKey conditions:\n\n- The force is **maximum** when the wire is at **90°** to the field.\n- The force is **zero** when the wire is **parallel** to the field.\n- **Reversing the current OR reversing the field reverses the force** (reverse both and it stays the same).\n\nThe **direction** of the force is found with **Fleming's left-hand rule**: hold the thumb and first two fingers of your *left* hand at right angles —\n\n- **F**irst finger → **F**ield (N to S),\n- se**C**ond finger → **C**urrent (conventional, + to −),\n- thu**M**b → **M**otion (force).",
      diagrams: [
        {
          caption: "Fleming's left-hand rule: First finger = Field, seCond finger = Current, thuMb = Motion (force).",
          svg:
            '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flemings left-hand rule showing thumb as force, first finger as field and second finger as current at right angles">\n<line x1="60" y1="120" x2="60" y2="40" stroke="#1e293b" stroke-width="3" marker-end="url(#la)"/>\n<text x="50" y="35" font-size="11" text-anchor="end" fill="#1e293b">F (Motion)</text>\n<line x1="60" y1="120" x2="180" y2="120" stroke="#3b82f6" stroke-width="3" marker-end="url(#lb)"/>\n<text x="185" y="124" font-size="11" fill="#3b82f6">B (Field)</text>\n<line x1="60" y1="120" x2="110" y2="150" stroke="#ef4444" stroke-width="3" marker-end="url(#lc)"/>\n<text x="115" y="162" font-size="11" fill="#ef4444">I (Current)</text>\n<defs>\n<marker id="la" markerWidth="9" markerHeight="9" refX="4" refY="7" orient="auto"><path d="M0 7 L4 0 L8 7 z" fill="#1e293b"/></marker>\n<marker id="lb" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0 L7 4 L0 8 z" fill="#3b82f6"/></marker>\n<marker id="lc" markerWidth="9" markerHeight="9" refX="6" refY="6" orient="auto"><path d="M0 0 L6 6 L6 0 z" fill="#ef4444"/></marker>\n</defs>\n<text x="110" y="20" font-size="9" text-anchor="middle" fill="#334155">use your LEFT hand</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Motor effect: a current in a magnetic field feels a force.",
        "F = B I L (force in N, B in T, I in A, L in m).",
        "Force is greatest at 90° to the field, zero when parallel.",
        "Reverse current OR field → force reverses.",
        "Fleming's left-hand rule gives the force direction.",
      ],
      whyItWorks:
        "The wire's own circular field adds to the magnet's field on one side and cancels it on the other, making the lines bunch up on one side. The wire is pushed from the strong side toward the weak side.",
      strategies: ["Left hand for the motor effect", "Check units before substituting into F = B I L"],
      formulae: ["F = B I L", "F in newtons (N), B in tesla (T), I in amps (A), L in metres (m)"],
    },
    {
      heading: "The d.c. motor",
      body:
        "A **d.c. motor** turns electrical energy into rotational (kinetic) energy using the motor effect.\n\nA rectangular **coil** sits in a magnetic field. Current flows through it, so each side of the coil feels a force (motor effect). On opposite sides the current flows in *opposite* directions, so by Fleming's left-hand rule the forces are in *opposite* directions — one side pushed up, the other down. This couple makes the coil **rotate**.\n\nThe problem: after a half-turn the sides swap over, which would push the coil back the other way. The **split-ring commutator** solves this. It **reverses the current in the coil every half-turn**, so the force on each side keeps turning the coil the *same* way. **Brushes** keep contact between the supply and the spinning commutator.\n\nSpeed it up by: more **current**, more **turns**, a stronger **magnet**, or a larger coil **area**.",
      diagrams: [
        {
          caption: "A d.c. motor coil in a field; the split-ring commutator reverses the current each half-turn.",
          svg:
            '<svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A direct current motor with a coil between magnet poles and a split-ring commutator with brushes">\n<rect x="10" y="40" width="30" height="60" fill="#ef4444" stroke="#475569"/>\n<text x="25" y="74" font-size="11" text-anchor="middle" fill="#ffffff">N</text>\n<rect x="220" y="40" width="30" height="60" fill="#3b82f6" stroke="#475569"/>\n<text x="235" y="74" font-size="11" text-anchor="middle" fill="#ffffff">S</text>\n<rect x="95" y="45" width="70" height="50" fill="none" stroke="#b91c1c" stroke-width="3"/>\n<text x="130" y="40" font-size="9" text-anchor="middle" fill="#334155">coil</text>\n<rect x="110" y="100" width="18" height="14" fill="#fbbf24" stroke="#475569"/>\n<rect x="132" y="100" width="18" height="14" fill="#fbbf24" stroke="#475569"/>\n<line x1="115" y1="114" x2="115" y2="130" stroke="#1e293b" stroke-width="2"/>\n<line x1="145" y1="114" x2="145" y2="130" stroke="#1e293b" stroke-width="2"/>\n<text x="130" y="138" font-size="9" text-anchor="middle" fill="#334155">split-ring commutator + brushes</text>\n</svg>',
        },
      ],
      keyPoints: [
        "A current-carrying coil in a field experiences a turning force (couple).",
        "Opposite sides feel opposite forces → rotation.",
        "Split-ring commutator reverses the current every half-turn to keep it spinning one way.",
        "Brushes connect the supply to the spinning commutator.",
        "Faster: more current, more turns, stronger field, bigger coil.",
      ],
      whyItWorks:
        "Without the commutator the turning force would reverse after each half-turn and the coil would just oscillate. Swapping the current direction at exactly the right moment keeps the force always turning it the same way.",
      strategies: ["Apply Fleming's left-hand rule to each side of the coil", "Track what happens at the half-turn"],
      formulae: ["F = B I L (force on each side of the coil)"],
    },
    {
      heading: "Electromagnetic induction and the a.c. generator",
      discovery: {
        problem:
          "If a current makes a magnetic field, can a magnetic field make a current? You push a magnet into a coil connected to a meter — and the needle flicks. Pull it out and it flicks the other way. Hold it still inside and… nothing. Why only when it moves?",
        idea:
          "Moving a magnet relative to a coil changes the magnetic field through the coil, and a *changing* field induces a voltage (e.m.f.). No change, no e.m.f. — that's why holding it still does nothing.",
      },
      body:
        "**Electromagnetic induction**: when a conductor and a magnetic field **move relative to each other** (a wire cutting field lines, or a changing field through a coil), an **e.m.f. (voltage)** is *induced*. If the circuit is complete, this drives an **induced current**.\n\nThe induced e.m.f. is **bigger** if you:\n\n- move **faster**,\n- use a **stronger magnet**,\n- use **more turns** on the coil, or\n- increase the coil **area**.\n\n**Reversing the movement reverses the induced e.m.f.** (and current).\n\nAn **a.c. generator (alternator)** uses this. A coil is rotated in a magnetic field; as it spins, its sides cut field lines and an e.m.f. is induced. Because each side moves up through the field then down, the e.m.f. reverses every half-turn, giving **alternating current (a.c.)**. The coil connects to the circuit through **slip rings** and brushes (two continuous rings — *not* a split ring), so the output stays alternating.\n\nThe **output–time graph** is a **sine wave**: the e.m.f. is **maximum** when the coil is moving parallel to the field (cutting lines fastest) and **zero** twice per turn when the coil is moving along the field lines (cutting none). Spinning the coil **faster** increases the **peak** e.m.f. *and* the **frequency** (more cycles per second). A stronger magnet or more turns raises the peak.",
      diagrams: [
        {
          caption: "A.c. generator: a coil spins in a field; slip rings give an alternating output.",
          svg:
            '<svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An alternating current generator with a coil rotating between magnet poles connected to slip rings">\n<rect x="10" y="40" width="30" height="60" fill="#ef4444" stroke="#475569"/>\n<text x="25" y="74" font-size="11" text-anchor="middle" fill="#ffffff">N</text>\n<rect x="220" y="40" width="30" height="60" fill="#3b82f6" stroke="#475569"/>\n<text x="235" y="74" font-size="11" text-anchor="middle" fill="#ffffff">S</text>\n<rect x="95" y="45" width="70" height="50" fill="none" stroke="#b91c1c" stroke-width="3"/>\n<text x="130" y="40" font-size="9" text-anchor="middle" fill="#334155">rotating coil</text>\n<circle cx="118" cy="108" r="7" fill="none" stroke="#475569" stroke-width="2"/>\n<circle cx="142" cy="108" r="7" fill="none" stroke="#475569" stroke-width="2"/>\n<text x="130" y="132" font-size="9" text-anchor="middle" fill="#334155">slip rings (continuous) give a.c.</text>\n</svg>',
        },
        {
          caption: "Output-time graph of an a.c. generator: a sine wave that reverses every half-turn. Faster rotation gives a higher peak AND more cycles per second (higher frequency).",
          svg:
            '<svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A sine-wave graph of induced e.m.f. against time for an alternating current generator, crossing zero each half turn and alternating between positive and negative peaks">\n<line x1="20" y1="70" x2="245" y2="70" stroke="#475569" stroke-width="1"/>\n<line x1="30" y1="15" x2="30" y2="125" stroke="#475569" stroke-width="1"/>\n<text x="250" y="74" font-size="9" fill="#334155">t</text>\n<text x="14" y="18" font-size="9" fill="#334155">e.m.f.</text>\n<path d="M30 70 C50 20 70 20 90 70 C110 120 130 120 150 70 C170 20 190 20 210 70 C223 105 233 105 240 85" fill="none" stroke="#b91c1c" stroke-width="2"/>\n<text x="90" y="14" font-size="8" text-anchor="middle" fill="#334155">peak (coil parallel to field)</text>\n<text x="150" y="135" font-size="8" text-anchor="middle" fill="#334155">zero when coil is perpendicular to field</text>\n</svg>',
        },
      ],
      keyPoints: [
        "A changing field / cutting field lines induces an e.m.f. (voltage).",
        "No relative movement → no induced e.m.f.",
        "Bigger e.m.f.: faster movement, stronger magnet, more turns, larger area.",
        "Reversing the motion reverses the induced e.m.f.",
        "The induced effect always OPPOSES the change that causes it (energy conservation).",
        "A.c. generator: spinning coil + slip rings = alternating output (a sine wave).",
        "Spinning faster raises both the peak e.m.f. and the frequency of the output.",
      ],
      whyItWorks:
        "Moving the conductor through the field exerts a force on its free electrons (the motor effect in reverse), pushing them along the wire — that push is the induced e.m.f. The faster the cutting of field lines, the larger the e.m.f.",
      strategies: ["Ask: is the field through the coil changing?", "Distinguish slip rings (a.c.) from a split ring (d.c.)"],
      formulae: [],
    },
    {
      heading: "Transformers and the National Grid",
      discovery: {
        problem:
          "Power stations make electricity at about 25 000 V, but the grid carries it across the country at 400 000 V, then your house uses 230 V. Changing the voltage that much sounds wasteful — yet it actually *saves* huge amounts of energy. How?",
        idea:
          "Transformers change a.c. voltage with almost no loss. Sending power at very high voltage means a very small current, and energy wasted in the cables (heating) depends on the current squared — so a small current wastes far less energy.",
      },
      body:
        "A **transformer** changes the size of an **alternating voltage**. It has two coils — a **primary** and a **secondary** — wound on a **soft iron core**.\n\nHow it works: a.c. in the primary coil makes a **constantly changing magnetic field** in the iron core. This changing field passes through the secondary coil and **induces an a.c. e.m.f.** in it. (It only works with a.c. — a steady d.c. would give a steady field and no induced voltage.)\n\nThe voltages depend on the number of turns:\n\n**Vp / Vs = Np / Ns**\n\n- **Step-up** transformer: more turns on the secondary (Ns > Np) → higher output voltage.\n- **Step-down** transformer: fewer turns on the secondary (Ns < Np) → lower output voltage.\n\nFor an **ideal** (100% efficient) transformer, power in = power out:\n\n**Vp Ip = Vs Is**\n\nso stepping the voltage **up** steps the current **down** by the same factor.\n\n**The National Grid:** step-up transformers raise the voltage to ~400 kV for transmission, and step-down transformers lower it again for homes (230 V). High voltage means **low current**, and energy lost as heat in the cables is **P = I²R**. Because the loss depends on the *square* of the current, a small current dramatically reduces the wasted energy — that is why high-voltage transmission is so efficient.",
      diagrams: [
        {
          caption: "A transformer: primary and secondary coils on a shared soft iron core.",
          svg:
            '<svg viewBox="0 0 260 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A transformer with a primary coil and a secondary coil wound on a rectangular soft iron core">\n<rect x="100" y="20" width="60" height="110" fill="none" stroke="#94a3b8" stroke-width="10"/>\n<text x="130" y="14" font-size="9" text-anchor="middle" fill="#334155">soft iron core</text>\n<g stroke="#b91c1c" stroke-width="3" fill="none">\n<path d="M100 40 h-25"/><path d="M100 55 h-25"/><path d="M100 70 h-25"/><path d="M100 85 h-25"/><path d="M100 100 h-25"/>\n</g>\n<text x="60" y="80" font-size="10" text-anchor="middle" fill="#b91c1c">Np</text>\n<text x="60" y="125" font-size="9" text-anchor="middle" fill="#334155">primary</text>\n<g stroke="#2563eb" stroke-width="3" fill="none">\n<path d="M160 45 h25"/><path d="M160 65 h25"/><path d="M160 85 h25"/><path d="M160 105 h25"/>\n</g>\n<text x="200" y="80" font-size="10" text-anchor="middle" fill="#2563eb">Ns</text>\n<text x="200" y="125" font-size="9" text-anchor="middle" fill="#334155">secondary</text>\n<text x="130" y="146" font-size="9" text-anchor="middle" fill="#334155">Vp/Vs = Np/Ns</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Transformers change a.c. voltage; they need a CHANGING field, so they only work on a.c.",
        "Vp/Vs = Np/Ns links voltages to turns.",
        "Step-up: more secondary turns (higher V); step-down: fewer (lower V).",
        "Ideal transformer: Vp Ip = Vs Is (power in = power out).",
        "Grid uses high voltage → low current → less heat loss (P = I²R).",
      ],
      whyItWorks:
        "The changing primary field induces an e.m.f. in every turn of the secondary equally, so the secondary voltage is just the per-turn voltage times the number of turns — hence the turns ratio sets the voltage ratio. Conserving power then forces the current to change the opposite way.",
      thinkDeeper:
        "If you doubled the transmission voltage, what happens to the current and to the power lost in the cables? (Current halves; loss is I²R so it drops to one quarter.)",
      strategies: ["Decide step-up vs step-down first", "Use Vp Ip = Vs Is for currents", "Remember losses scale with I², not I"],
      formulae: ["Vp / Vs = Np / Ns", "Vp Ip = Vs Is (ideal transformer)", "power lost in cables P = I²R"],
    },
  ],
  learn: {
    bigIdea:
      "Electricity and magnetism are linked. A current makes a magnetic field; a current in a field feels a force (motors); and a changing field induces a voltage (generators and transformers). Transformers let the National Grid use high voltage and low current to cut energy losses.",
    mustKnow: [
      "Like poles repel, unlike poles attract; field lines go N to S outside a magnet.",
      "A current creates a magnetic field; a solenoid's field is like a bar magnet's.",
      "Motor effect: F = B I L; direction from Fleming's left-hand rule.",
      "A d.c. motor uses a split-ring commutator to keep spinning one way.",
      "Electromagnetic induction: relative movement of magnet and coil induces an e.m.f.",
      "An a.c. generator uses slip rings; transformers obey Vp/Vs = Np/Ns and Vp Ip = Vs Is.",
      "High-voltage transmission gives low current, reducing heat loss (P = I²R).",
    ],
    keywords: [
      { term: "Magnetic field", definition: "The region around a magnet or current where a magnetic material or another magnet feels a force." },
      { term: "Induced magnetism", definition: "Magnetism gained by a magnetic material when placed in a magnetic field; the force is always attraction." },
      { term: "Solenoid", definition: "A coil of wire that produces a magnetic field like a bar magnet when a current flows." },
      { term: "Electromagnet", definition: "A solenoid with a soft iron core whose magnetism can be switched on and off with the current." },
      { term: "Motor effect", definition: "The force experienced by a current-carrying wire placed in a magnetic field, given by F = B I L." },
      { term: "Magnetic flux density (B)", definition: "A measure of the strength of a magnetic field, measured in tesla (T)." },
      { term: "Split-ring commutator", definition: "A device that reverses the current in a d.c. motor coil every half-turn so it keeps rotating one way." },
      { term: "Electromagnetic induction", definition: "Inducing an e.m.f. (voltage) by moving a conductor and a magnetic field relative to each other." },
      { term: "Transformer", definition: "A device that changes the size of an alternating voltage using two coils on a soft iron core." },
      { term: "Step-up transformer", definition: "A transformer with more secondary turns than primary turns, giving a higher output voltage." },
    ],
    flashcards: [
      { front: "State the equation for the motor-effect force.", back: "F = B I L (force in N, B in tesla, current in A, length in m)." },
      { front: "Fleming's left-hand rule: what do the fingers represent?", back: "First finger = Field, seCond finger = Current, thuMb = Motion (force)." },
      { front: "Why does a transformer only work with a.c.?", back: "It needs a constantly changing magnetic field to induce an e.m.f.; steady d.c. gives a steady field and no induced voltage." },
      { front: "Transformer turns equation?", back: "Vp / Vs = Np / Ns; for an ideal transformer also Vp Ip = Vs Is." },
      { front: "Why does the Grid transmit at very high voltage?", back: "High voltage means low current, and cable heat loss is I²R, so a small current wastes far less energy." },
      { front: "Split ring vs slip rings?", back: "A split-ring commutator (d.c. motor) reverses the current each half-turn; slip rings (a.c. generator) are continuous and keep the output alternating." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "em-mcq-q01",
        question: "When two north poles of bar magnets are brought close together, they…",
        options: ["attract", "repel", "do nothing", "swap poles"],
        answerIndex: 1,
        explanation: "Like poles repel; two north poles push each other apart.",
        guideRef: "Magnets, poles and magnetic fields",
        difficulty: "warmup",
      },
      {
        id: "em-mcq-q02",
        question: "Outside a bar magnet, magnetic field lines point…",
        options: ["from S to N", "from N to S", "in random directions", "in circles around the magnet"],
        answerIndex: 1,
        explanation: "By convention field lines run from the north pole to the south pole outside the magnet.",
        guideRef: "Magnets, poles and magnetic fields",
        difficulty: "warmup",
      },
      {
        id: "em-mcq-q03",
        question: "Which of these is NOT a magnetic material?",
        options: ["Iron", "Steel", "Copper", "Cobalt"],
        answerIndex: 2,
        explanation: "Copper is not magnetic. The common magnetic materials are iron, steel, cobalt and nickel.",
        guideRef: "Magnets, poles and magnetic fields",
        difficulty: "warmup",
      },
      {
        id: "em-mcq-q04",
        question: "The magnetic field lines around a long straight current-carrying wire are…",
        options: ["straight and parallel", "concentric circles around the wire", "shaped like a bar magnet", "absent — wires have no field"],
        answerIndex: 1,
        explanation: "A straight current produces concentric circular field lines around the wire (right-hand grip rule).",
        guideRef: "Magnetic field of a current: wires and solenoids",
        difficulty: "core",
        hints: ["Think about the right-hand grip rule.", "Curl your fingers around the wire — what shape do they trace?", "The lines wrap around the wire."],
        strategy: "Right-hand grip rule",
      },
      {
        id: "em-mcq-q05",
        question: "The magnetic field produced by a solenoid (coil) is most like the field of…",
        options: ["a single straight wire", "a bar magnet", "two like poles", "no magnet at all"],
        answerIndex: 1,
        explanation: "A solenoid's field is uniform inside with N and S poles at the ends — just like a bar magnet.",
        guideRef: "Magnetic field of a current: wires and solenoids",
        difficulty: "core",
        hints: ["The fields of all the turns add up.", "It has a clear north and south end.", "Compare it to a familiar permanent magnet."],
      },
      {
        id: "em-mcq-q06",
        question: "Which change would NOT make a solenoid's magnetic field stronger?",
        options: ["Increasing the current", "Adding more turns of wire", "Inserting a soft iron core", "Using a longer connecting lead to the battery"],
        answerIndex: 3,
        explanation: "More current, more turns and an iron core all strengthen the field; a longer connecting lead does not.",
        guideRef: "Magnetic field of a current: wires and solenoids",
        difficulty: "core",
        hints: ["List the genuine ways to strengthen a solenoid.", "Three of the options are standard methods.", "Does extra lead length change the coil?"],
      },
      {
        id: "em-mcq-q07",
        question: "An electromagnet for a scrapyard crane uses a soft iron core rather than steel because soft iron…",
        options: ["is cheaper to buy", "loses its magnetism when the current is switched off", "keeps its magnetism permanently", "conducts electricity better"],
        answerIndex: 1,
        explanation: "Soft iron loses its magnetism instantly when the current stops, so the load can be released.",
        guideRef: "Electromagnets and their uses",
        difficulty: "core",
        hints: ["The crane must be able to drop the load.", "What must happen to the magnetism when you switch off?", "Soft = easily magnetised AND easily demagnetised."],
        strategy: "Match the core material to the job",
      },
      {
        id: "em-mcq-q08",
        question: "A current-carrying wire is placed in a magnetic field. The force on it is greatest when the wire is…",
        options: ["parallel to the field", "at 45° to the field", "at 90° to the field", "outside the field"],
        answerIndex: 2,
        explanation: "The motor-effect force is maximum when the wire is at right angles (90°) to the field and zero when parallel.",
        guideRef: "The motor effect and F = B I L",
        difficulty: "core",
        hints: ["The force is zero when parallel.", "It increases as the angle approaches 90°.", "Maximum is at right angles."],
      },
      {
        id: "em-mcq-q09",
        question: "In Fleming's left-hand rule, the first finger represents the…",
        options: ["force (motion)", "current", "field", "voltage"],
        answerIndex: 2,
        explanation: "First finger = Field, seCond finger = Current, thuMb = Motion (force).",
        guideRef: "The motor effect and F = B I L",
        difficulty: "warmup",
      },
      {
        id: "em-mcq-q10",
        question: "A wire of length 0.20 m carries a current of 3.0 A at right angles to a field of 0.50 T. The force on the wire is…",
        options: ["0.030 N", "0.30 N", "3.0 N", "0.75 N"],
        answerIndex: 1,
        explanation: "F = B I L = 0.50 × 3.0 × 0.20 = 0.30 N.",
        guideRef: "The motor effect and F = B I L",
        difficulty: "core",
        hints: ["Use F = B I L.", "Substitute B = 0.50, I = 3.0, L = 0.20.", "Multiply: 0.50 × 3.0 × 0.20."],
        strategy: "Substitute into F = B I L",
      },
      {
        id: "em-mcq-q11",
        question: "A force of 0.60 N acts on a 0.40 m wire carrying 5.0 A at 90° to a field. The flux density B is…",
        options: ["0.075 T", "0.30 T", "1.2 T", "3.0 T"],
        answerIndex: 1,
        explanation: "B = F / (I L) = 0.60 / (5.0 × 0.40) = 0.60 / 2.0 = 0.30 T.",
        guideRef: "The motor effect and F = B I L",
        difficulty: "core",
        hints: ["Rearrange F = B I L to make B the subject.", "B = F / (I L).", "Work out I × L first, then divide."],
        strategy: "Rearrange F = B I L",
      },
      {
        id: "em-mcq-q12",
        question: "In the motor effect, the force on the wire reverses if you…",
        options: ["reverse both the current and the field", "reverse only the current", "double the length", "increase the current"],
        answerIndex: 1,
        explanation: "Reversing the current (or the field) alone reverses the force; reversing both leaves it unchanged.",
        guideRef: "The motor effect and F = B I L",
        difficulty: "core",
        hints: ["Try reversing one thing at a time.", "What happens if you reverse BOTH?", "Reversing both cancels out."],
      },
      {
        id: "em-mcq-q13",
        question: "What is the purpose of the split-ring commutator in a d.c. motor?",
        options: [
          "To increase the voltage supplied",
          "To reverse the current in the coil every half-turn so it keeps spinning one way",
          "To produce alternating current",
          "To stop the coil from overheating",
        ],
        answerIndex: 1,
        explanation: "It swaps the current direction in the coil each half-turn, keeping the turning force in the same rotational sense.",
        guideRef: "The d.c. motor",
        difficulty: "core",
        hints: ["Think about what would happen after half a turn without it.", "It changes the current direction in the coil.", "Goal: keep the rotation one-way."],
        strategy: "Track what happens at the half-turn",
      },
      {
        id: "em-mcq-q14",
        question: "Which of these would NOT increase the turning speed of a d.c. motor?",
        options: ["A larger current", "More turns on the coil", "A stronger magnet", "A longer pair of brushes"],
        answerIndex: 3,
        explanation: "Current, number of turns and field strength all increase the turning force; the brush length does not.",
        guideRef: "The d.c. motor",
        difficulty: "core",
        hints: ["Recall what increases the motor-effect force.", "F = B I L points to B, I and the coil.", "Brushes just make electrical contact."],
      },
      {
        id: "em-mcq-q15",
        question: "A magnet is held completely still inside a coil connected to a sensitive meter. The meter reads…",
        options: ["a steady large current", "a steady small current", "zero", "an alternating current"],
        answerIndex: 2,
        explanation: "With no relative movement the field through the coil does not change, so no e.m.f. is induced and the reading is zero.",
        guideRef: "Electromagnetic induction and the a.c. generator",
        difficulty: "core",
        hints: ["Induction needs the field to be changing.", "Is the magnet moving relative to the coil?", "No change → no induced e.m.f."],
      },
      {
        id: "em-mcq-q16",
        question: "Which change would NOT increase the e.m.f. induced when a magnet is moved into a coil?",
        options: ["Moving the magnet faster", "Using a stronger magnet", "Using more turns on the coil", "Holding the magnet still for longer"],
        answerIndex: 3,
        explanation: "Faster movement, a stronger magnet and more turns all raise the induced e.m.f.; holding it still induces nothing.",
        guideRef: "Electromagnetic induction and the a.c. generator",
        difficulty: "core",
        hints: ["Induced e.m.f. depends on how fast the field changes.", "Three options speed up or strengthen the change.", "A still magnet changes nothing."],
      },
      {
        id: "em-mcq-q17",
        question: "An a.c. generator uses slip rings rather than a split ring because slip rings…",
        options: [
          "reverse the connection every half-turn",
          "keep the output as alternating current",
          "step up the voltage",
          "stop the coil rotating",
        ],
        answerIndex: 1,
        explanation: "Continuous slip rings keep the same connections, so the naturally alternating e.m.f. stays as a.c.",
        guideRef: "Electromagnetic induction and the a.c. generator",
        difficulty: "core",
        hints: ["A split ring would swap the connections each half-turn.", "Generators produce alternating output.", "Slip rings are continuous, not split."],
        strategy: "Distinguish slip rings from a split ring",
      },
      {
        id: "em-mcq-q18",
        question: "A transformer will NOT work with a steady direct current because…",
        options: [
          "d.c. is too dangerous",
          "the magnetic field in the core must be changing to induce an e.m.f.",
          "the iron core melts with d.c.",
          "d.c. cannot flow through coils",
        ],
        answerIndex: 1,
        explanation: "Only a changing magnetic field induces an e.m.f. in the secondary; steady d.c. gives a steady field and no output.",
        guideRef: "Transformers and the National Grid",
        difficulty: "core",
        hints: ["Induction needs change.", "What does steady d.c. produce in the core?", "A steady field induces nothing."],
      },
      {
        id: "em-mcq-q19",
        question: "A transformer has 200 primary turns and 1000 secondary turns. It is a…",
        options: ["step-down transformer", "step-up transformer", "1:1 isolating transformer", "broken transformer"],
        answerIndex: 1,
        explanation: "More secondary turns than primary turns (Ns > Np) means the output voltage is higher — a step-up transformer.",
        guideRef: "Transformers and the National Grid",
        difficulty: "core",
        hints: ["Compare Np and Ns.", "More secondary turns → higher voltage.", "Higher output voltage = step-up."],
      },
      {
        id: "em-mcq-q20",
        question: "A transformer has Vp = 230 V, Np = 1000 turns and Ns = 100 turns. The output voltage Vs is…",
        options: ["23 V", "2300 V", "230 V", "2.3 V"],
        answerIndex: 0,
        explanation: "Vs = Vp × Ns/Np = 230 × 100/1000 = 23 V (step-down).",
        guideRef: "Transformers and the National Grid",
        difficulty: "core",
        hints: ["Use Vp/Vs = Np/Ns.", "Vs = Vp × Ns/Np.", "230 × (100/1000) = 230 × 0.1."],
        strategy: "Use the turns ratio",
      },
      {
        id: "em-mcq-q21",
        question: "Why is electrical power transmitted across the National Grid at very high voltage?",
        options: [
          "To make the current larger",
          "To reduce the current, which cuts energy lost as heat in the cables",
          "To make the cables cheaper",
          "Because appliances need high voltage",
        ],
        answerIndex: 1,
        explanation: "High voltage means low current, and the heat loss in the cables is I²R, so a small current wastes much less energy.",
        guideRef: "Transformers and the National Grid",
        difficulty: "core",
        hints: ["High voltage goes with low or high current?", "Where is the energy wasted?", "Cable loss is I²R."],
      },
      {
        id: "em-mcq-q22",
        question: "An induced current always flows in a direction that OPPOSES the change producing it. A magnet's north pole is pushed into a coil. The end of the coil facing the magnet becomes a…",
        options: ["north pole, to repel the incoming magnet", "south pole, to attract the magnet faster", "north pole, to pull the magnet in", "neutral end with no pole"],
        answerIndex: 0,
        explanation: "By Lenz's idea, the coil opposes the approaching north pole by forming a north pole that repels it (this is energy conservation in action).",
        guideRef: "Electromagnetic induction and the a.c. generator",
        difficulty: "challenge",
        hints: ["The induced effect opposes the change.", "A north pole is approaching — how does the coil resist it?", "Like poles repel, so the coil shows a north pole."],
        strategy: "Apply 'the induced effect opposes the change'",
      },
      {
        id: "em-mcq-q23",
        question: "An ideal step-up transformer raises 100 V to 400 V. The primary current is 8.0 A. The secondary current is…",
        options: ["32 A", "2.0 A", "8.0 A", "0.5 A"],
        answerIndex: 1,
        explanation: "Vp Ip = Vs Is, so Is = Vp Ip / Vs = (100 × 8.0)/400 = 800/400 = 2.0 A. Voltage up ×4 → current down ×4.",
        guideRef: "Transformers and the National Grid",
        difficulty: "challenge",
        hints: ["Use Vp Ip = Vs Is.", "Is = (Vp × Ip)/Vs.", "(100 × 8.0)/400."],
        strategy: "Use Vp Ip = Vs Is",
      },
      {
        id: "em-mcq-q24",
        question: "A transmission line carries power at a fixed value. If the transmission voltage is doubled (so the current halves), the power wasted as heat in the cables becomes…",
        options: ["doubled", "halved", "one quarter", "unchanged"],
        answerIndex: 2,
        explanation: "Cable loss is I²R. Halving the current makes the loss (½)² = ¼ of the original.",
        guideRef: "Transformers and the National Grid",
        difficulty: "challenge",
        hints: ["Heat loss depends on I².", "If I halves, what happens to I²?", "(½)² = ¼."],
        strategy: "Remember losses scale with I², not I",
      },
      {
        id: "em-mcq-q25",
        question: "A vertical wire carries current upward through a horizontal magnetic field pointing north. Using Fleming's left-hand rule, the force on the wire points…",
        options: ["upward", "downward", "to the east", "to the west"],
        answerIndex: 3,
        explanation: "First finger (Field) points north, seCond finger (Current) points up; the thuMb (force) then points west.",
        guideRef: "The motor effect and F = B I L",
        difficulty: "challenge",
        hints: ["Set your left hand: first finger north, second finger up.", "Hold the three at right angles.", "Read off the thumb direction."],
        strategy: "Left hand for the motor effect",
      },
    ],
    qa: [
      {
        id: "em-qa-q01",
        question: "State the rule for the forces between magnetic poles, and explain why a permanent magnet can pick up an unmagnetised iron nail. (3 marks)",
        marks: 3,
        modelAnswer:
          "Like poles repel and unlike poles attract. When the magnet is brought near the iron nail, the nail becomes magnetised by induction. The induced pole nearest the magnet is the opposite type to the magnet's pole, so the magnet and nail attract, and the magnet picks the nail up.",
        markScheme: [
          "Like poles repel, unlike poles attract | unlike attract and like repel",
          "The nail becomes magnetised by induction | induced magnetism in the nail",
          "Induced pole is opposite, so there is attraction | always attraction",
        ],
        commonError: "Saying the nail is 'already a magnet' — it only becomes magnetised by induction while in the field.",
        guideRef: "Permanent vs induced magnets",
        difficulty: "core",
        hints: ["State the poles rule first.", "What does the field do to the iron nail?", "Why is the induced force always attraction?"],
      },
      {
        id: "em-qa-q02",
        question: "Describe how you could use a plotting compass to show the shape and direction of the magnetic field around a bar magnet. (3 marks)",
        marks: 3,
        modelAnswer:
          "Place the bar magnet on paper and put a plotting compass near one pole. Mark dots at the two ends of the compass needle, move the compass so its tail is at the previous head, and repeat to build up a line of dots. Join the dots to draw a field line, with arrows pointing the way the compass north end pointed (N to S outside). Repeat from different starting points to map the whole field.",
        markScheme: [
          "Place compass near the magnet / a pole",
          "Mark the needle position and step the compass along | follow the needle and mark dots",
          "Join dots into field lines",
          "Arrows follow the compass (N to S outside the magnet)",
        ],
        commonError: "Forgetting the arrows / direction — the field has a direction (N to S outside), not just a shape.",
        guideRef: "Magnets, poles and magnetic fields",
        difficulty: "core",
        hints: ["What instrument shows field direction at a point?", "How do you build a continuous line from single readings?", "Don't forget to add arrows."],
      },
      {
        id: "em-qa-q03",
        question: "Explain how an electromagnet works and why soft iron, not steel, is used for its core. Give one use of an electromagnet. (4 marks)",
        marks: 4,
        modelAnswer:
          "An electromagnet is a coil (solenoid) wound around a soft iron core. When a current flows, the coil produces a magnetic field and the soft iron core concentrates and strengthens it, so it behaves like a strong bar magnet. Soft iron is used because it magnetises easily but loses its magnetism as soon as the current is switched off, so the magnet can be turned on and off. (Steel would keep its magnetism.) A use is a scrapyard crane / electric bell / relay.",
        markScheme: [
          "Coil/solenoid around a soft iron core",
          "Current produces a magnetic field | core strengthens the field",
          "Soft iron loses magnetism when current is switched off | can be switched on and off",
          "One valid use: scrapyard crane | electric bell | relay | circuit breaker | loudspeaker",
        ],
        commonError: "Saying steel is better for the core — steel keeps its magnetism, so the electromagnet could not be switched off.",
        guideRef: "Electromagnets and their uses",
        difficulty: "core",
        hints: ["What two parts make an electromagnet?", "Why must the magnetism switch off?", "Name a device that switches a magnet on and off."],
      },
      {
        id: "em-qa-q04",
        question: "A wire of length 0.25 m carries a current of 4.0 A at right angles to a magnetic field of flux density 0.30 T. Calculate the force on the wire and state the rule used to find its direction. (4 marks)",
        marks: 4,
        modelAnswer:
          "Using F = B I L: F = 0.30 × 4.0 × 0.25 = 0.30 N. The direction of the force is found using Fleming's left-hand rule (first finger = field, second finger = current, thumb = force/motion).",
        markScheme: [
          "Use F = B I L | correct equation",
          "Correct substitution: 0.30 × 4.0 × 0.25",
          "F = 0.30 N | 0.30 newtons",
          "Direction from Fleming's left-hand rule",
        ],
        commonError: "Wrong unit or forgetting the unit. F is in newtons (N).",
        guideRef: "The motor effect and F = B I L",
        difficulty: "core",
        hints: ["Which equation links F, B, I and L?", "Substitute the three values.", "Name the rule for force direction."],
        solutions: [
          {
            label: "Method: substitute into F = B I L",
            steps: [
              "Write the equation: F = B I L.",
              "List values: B = 0.30 T, I = 4.0 A, L = 0.25 m.",
              "Substitute: F = 0.30 × 4.0 × 0.25.",
              "Calculate: F = 0.30 N.",
              "Direction: Fleming's left-hand rule.",
            ],
          },
        ],
      },
      {
        id: "em-qa-q05",
        question: "A motor-effect demonstration measures a force of 0.18 N on a 0.30 m length of wire carrying 6.0 A. The wire is at 90° to the field. Calculate the magnetic flux density B and give its unit. (3 marks)",
        marks: 3,
        modelAnswer:
          "Rearrange F = B I L to give B = F / (I L). B = 0.18 / (6.0 × 0.30) = 0.18 / 1.8 = 0.10 T. The unit is the tesla (T).",
        markScheme: [
          "Rearrange to B = F / (I L)",
          "Substitute: 0.18 / (6.0 × 0.30) | 0.18 / 1.8",
          "B = 0.10 T | 0.10 tesla",
        ],
        commonError: "Forgetting to multiply I and L before dividing, or omitting the unit tesla (T).",
        guideRef: "The motor effect and F = B I L",
        difficulty: "core",
        hints: ["Make B the subject of F = B I L.", "Work out I × L first.", "Divide F by that, and add the unit T."],
        solutions: [
          {
            label: "Method: rearrange F = B I L for B",
            steps: [
              "Start from F = B I L.",
              "Divide both sides by I L: B = F / (I L).",
              "I L = 6.0 × 0.30 = 1.8.",
              "B = 0.18 / 1.8 = 0.10 T.",
            ],
          },
        ],
      },
      {
        id: "em-qa-q06",
        question: "Describe how a simple d.c. motor produces continuous rotation, and explain the role of the split-ring commutator. (5 marks)",
        marks: 5,
        modelAnswer:
          "A current-carrying coil sits in a magnetic field. Each side of the coil experiences a force due to the motor effect. Because the current flows in opposite directions on the two sides, the forces act in opposite directions (one up, one down), creating a turning effect that rotates the coil. After half a turn the sides have swapped over, so the force would push the coil back the other way. The split-ring commutator reverses the current in the coil every half-turn, so the force on each side always acts to turn the coil the same way, giving continuous rotation. Brushes keep contact with the rotating commutator.",
        markScheme: [
          "Each side of the coil feels a force (motor effect)",
          "Forces are in opposite directions on the two sides → turning effect",
          "Coil rotates",
          "After half a turn the force would reverse the rotation",
          "Split-ring commutator reverses the current every half-turn to keep it turning one way",
        ],
        commonError: "Saying the commutator 'supplies the current' — its job is to reverse the current direction each half-turn.",
        guideRef: "The d.c. motor",
        difficulty: "core",
        hints: ["What does each side of the coil feel?", "Why do the two sides move oppositely?", "What goes wrong at the half-turn, and what fixes it?"],
      },
      {
        id: "em-qa-q07",
        question: "Explain what is meant by electromagnetic induction and state three factors that increase the size of the induced e.m.f. (4 marks)",
        marks: 4,
        modelAnswer:
          "Electromagnetic induction is the inducing of an e.m.f. (voltage) when a conductor and a magnetic field move relative to each other, so the field through a coil changes (or a wire cuts field lines). Three factors that increase the induced e.m.f. are: moving the magnet/coil faster; using a stronger magnet; and using more turns on the coil (increasing the coil area also works).",
        markScheme: [
          "Induced e.m.f. from relative movement / changing field | cutting field lines induces a voltage",
          "Factor 1: move faster",
          "Factor 2: stronger magnet",
          "Factor 3: more turns on the coil | larger coil area",
        ],
        commonError: "Saying a steady field induces an e.m.f. — there must be a CHANGE / relative movement.",
        guideRef: "Electromagnetic induction and the a.c. generator",
        difficulty: "core",
        hints: ["Define induction in terms of a changing field.", "Think about how to make the change faster or bigger.", "List three separate factors."],
      },
      {
        id: "em-qa-q08",
        question: "A transformer has 1200 turns on the primary coil and 60 turns on the secondary coil. The primary is connected to a 240 V a.c. supply. (a) State whether it is step-up or step-down. (b) Calculate the secondary voltage. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) The secondary has fewer turns than the primary (Ns < Np), so it is a step-down transformer. (b) Using Vp/Vs = Np/Ns, Vs = Vp × Ns/Np = 240 × 60/1200 = 240 × 0.05 = 12 V.",
        markScheme: [
          "Step-down (because Ns < Np)",
          "Use Vp/Vs = Np/Ns | Vs = Vp × Ns/Np",
          "Substitute: 240 × 60/1200",
          "Vs = 12 V | 12 volts",
        ],
        commonError: "Inverting the ratio (multiplying by Np/Ns instead of Ns/Np) and getting 4800 V.",
        guideRef: "Transformers and the National Grid",
        difficulty: "core",
        hints: ["Compare Np and Ns to decide step-up/step-down.", "Use Vp/Vs = Np/Ns.", "Vs = Vp × (Ns/Np)."],
        solutions: [
          {
            label: "Method: transformer turns/voltage equation",
            steps: [
              "Compare turns: Ns = 60 < Np = 1200, so it is step-down.",
              "Write Vp/Vs = Np/Ns and rearrange: Vs = Vp × Ns/Np.",
              "Substitute: Vs = 240 × 60/1200.",
              "Ns/Np = 60/1200 = 0.05, so Vs = 240 × 0.05 = 12 V.",
            ],
          },
        ],
      },
      {
        id: "em-qa-q09",
        question: "Explain why transformers are essential to the National Grid and why transmitting electricity at very high voltage reduces energy losses. (5 marks)",
        marks: 5,
        modelAnswer:
          "Power stations generate electricity at a moderate voltage. A step-up transformer raises this to a very high voltage (about 400 kV) for transmission, and step-down transformers later reduce it to a safe 230 V for homes. For a fixed amount of power, raising the voltage means the current is small (because power = voltage × current). The energy lost as heat in the transmission cables is given by P = I²R, which depends on the square of the current. A small current therefore wastes much less energy in the cables, making transmission far more efficient. Transformers are essential because they can change a.c. voltages with very little energy loss.",
        markScheme: [
          "Step-up transformer raises voltage for transmission | step-down reduces it for homes",
          "For fixed power, high voltage means low current | P = V I",
          "Heat loss in cables is P = I²R",
          "Loss depends on current squared, so low current cuts losses",
          "Transformers change a.c. voltage efficiently / only work with a.c.",
        ],
        commonError: "Saying high voltage directly reduces heating — it is the resulting LOW CURRENT (and I²R) that reduces the loss.",
        guideRef: "Transformers and the National Grid",
        difficulty: "challenge",
        hints: ["What do step-up and step-down transformers each do?", "For fixed power, link voltage and current.", "Which equation gives the cable heat loss?"],
      },
      {
        id: "em-qa-q10",
        question: "An ideal transformer steps voltage up from 25 000 V to 400 000 V for transmission. The input (primary) current is 800 A. Calculate the secondary (transmission) current, and comment on what this means for energy losses in the cables. (4 marks)",
        marks: 4,
        modelAnswer:
          "For an ideal transformer, power in = power out, so Vp Ip = Vs Is. Rearranging, Is = Vp Ip / Vs = (25 000 × 800) / 400 000 = 20 000 000 / 400 000 = 50 A. The voltage has been stepped up by a factor of 16, so the current is 16 times smaller. Because the energy lost as heat in the cables is I²R, this much smaller current greatly reduces the energy wasted during transmission.",
        markScheme: [
          "Use Vp Ip = Vs Is | power in = power out",
          "Rearrange: Is = Vp Ip / Vs",
          "Substitute and evaluate: (25000 × 800)/400000 = 50 A",
          "Smaller current → much lower I²R heat loss in cables",
        ],
        commonError: "Stepping the current up with the voltage — when voltage is stepped up, current is stepped down.",
        guideRef: "Transformers and the National Grid",
        difficulty: "challenge",
        hints: ["Which equation conserves power in an ideal transformer?", "Make Is the subject: Is = Vp Ip / Vs.", "Then link the lower current to I²R losses."],
        solutions: [
          {
            label: "Method: ideal-power equation Vp Ip = Vs Is",
            steps: [
              "Ideal transformer: power in = power out, so Vp Ip = Vs Is.",
              "Rearrange for the secondary current: Is = Vp Ip / Vs.",
              "Substitute: Is = (25 000 × 800) / 400 000.",
              "Numerator = 20 000 000; divide by 400 000 → Is = 50 A.",
              "Voltage up ×16 → current down ×16, so I²R cable losses fall sharply.",
            ],
          },
          {
            label: "Method: use the step-up ratio",
            steps: [
              "Find the voltage ratio: Vs/Vp = 400 000 / 25 000 = 16.",
              "In an ideal transformer the current ratio is the inverse, so Is = Ip / 16.",
              "Is = 800 / 16 = 50 A.",
            ],
          },
        ],
      },
      {
        id: "em-qa-q11",
        question: "A horizontal copper rod rests on two rails in a magnetic field that points vertically downward. A current is passed through the rod. (a) Explain why the rod experiences a force. (b) State two ways to reverse the direction in which the rod moves. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) The rod carries a current in a magnetic field, so by the motor effect it experiences a force. The rod's own magnetic field interacts with the external field, and the rod is pushed in the direction given by Fleming's left-hand rule. (b) To reverse the direction of motion you can either reverse the direction of the current, or reverse the direction of the magnetic field (reversing only one of them). (Reversing both would leave the direction unchanged.)",
        markScheme: [
          "Current in a magnetic field → force (motor effect)",
          "Direction given by Fleming's left-hand rule | fields interact to push the rod",
          "Reverse the current",
          "Reverse the magnetic field",
        ],
        commonError: "Listing 'reverse both current and field' as a way to reverse the motion — doing both leaves the force unchanged.",
        guideRef: "The motor effect and F = B I L",
        difficulty: "challenge",
        hints: ["Name the effect acting on a current in a field.", "Which rule gives the direction?", "Reverse ONE of current or field, not both."],
      },
      {
        id: "em-qa-q12",
        question: "A student claims: 'Connecting a battery (d.c.) to the primary coil of a transformer will give a steady voltage across the secondary coil.' Explain why this is wrong, and state what supply must be used instead. (3 marks)",
        marks: 3,
        modelAnswer:
          "A transformer works by electromagnetic induction, which needs a constantly changing magnetic field in the core. A steady d.c. produces a steady (unchanging) magnetic field, so after the initial switch-on there is no change and no e.m.f. is induced in the secondary — the output voltage is zero, not steady. An alternating current (a.c.) supply must be used, because it continually changes the field and so continuously induces an e.m.f. in the secondary.",
        markScheme: [
          "Transformer needs a changing magnetic field | works by induction",
          "Steady d.c. gives a steady field → no induced e.m.f. (output is zero, not steady)",
          "An a.c. supply must be used",
        ],
        commonError: "Thinking d.c. gives a small steady output — a steady field induces nothing once it has settled.",
        guideRef: "Transformers and the National Grid",
        difficulty: "challenge",
        hints: ["What kind of field does induction require?", "What does steady d.c. produce in the core?", "Which supply keeps the field changing?"],
      },
    ],
  },
  // questionBank omitted — auto-assembled from the quiz pools by lib/content.ts.
};
