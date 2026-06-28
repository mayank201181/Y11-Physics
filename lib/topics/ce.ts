import type { Topic } from "../types";

// Current Electricity (Edexcel IGCSE Physics 4PH1, Section 2 — Electricity).
// Calculation-heavy: I = Q/t, V = W/Q, V = IR, P = IV, P = I²R, P = V²/R,
// E = IVt, E = QV, series & parallel rules, I–V graphs, LDR/thermistor,
// kWh & cost, mains a.c./d.c. & plug safety, fuse choice, and static
// electricity. Units used throughout: A, V, Ω, W, J, C, Hz, s.

export const ce: Topic = {
  id: "ce",
  code: "CE",
  number: 4,
  title: "Current Electricity",
  subject: "Physics",
  icon: "⚡",
  color: "#f59e0b",
  intro:
    "Electric current is moving charge, and a circuit is simply a loop that lets that charge flow. In this topic you'll connect the big equations — I = Q/t, V = W/Q, V = IR, P = IV and E = IVt — then use them to predict currents, voltages, resistances, power and energy in series and parallel circuits. You'll read I–V graphs, use light- and temperature-sensors, work out the cost of electricity in kilowatt-hours, understand how mains electricity is delivered safely through a three-pin plug, and explain static charge built up by friction.",
  guide: [
    {
      heading: "Current, charge and potential difference",
      discovery: {
        problem:
          "A torch bulb has 30 C of charge pass through it in 60 s, while a phone charger pushes 30 C through in 300 s. Both move the same charge — so why does the bulb glow brightly and the charger barely warm up?",
        idea:
          "What matters is not just how much charge moves, but how fast. Current measures the RATE of charge flow: I = Q/t. The bulb has a bigger current (0.5 A vs 0.1 A), so more charge passes every second and more energy is delivered each second.",
      },
      body:
        "**Electric current** is the rate of flow of electric **charge**. In a metal it is the flow of free (negative) electrons; we measure it in **amperes (A)** with an *ammeter connected in series*.\n\n*Current equation:*\n\n`I = Q / t`  →  charge `Q = I × t`  →  time `t = Q / I`\n\nwhere I is current in amperes (A), Q is charge in coulombs (C) and t is time in seconds (s). One amp is one coulomb per second (1 A = 1 C/s).\n\n**Conventional current vs electron flow.** Long before electrons were discovered, scientists agreed that current flows from the **positive (+) terminal to the negative (−) terminal** of the supply. We still use this 'conventional current' direction on all circuit diagrams. In reality the moving charges in a metal are **electrons**, which flow the *opposite* way — from negative to positive. Conventional current and electron flow point in opposite directions, but all the equations still work because we are consistent.\n\n**Potential difference (p.d., or voltage)** is the energy transferred per unit charge as charge moves between two points. We measure it in **volts (V)** with a *voltmeter connected in parallel* across a component.\n\n*Potential difference equation:*\n\n`V = W / Q`  →  energy transferred `W = Q × V`\n\nwhere V is in volts (V), W (the energy transferred, sometimes written E) is in joules (J) and Q is charge in coulombs (C). One volt is one joule per coulomb (1 V = 1 J/C). A p.d. of 1 V means 1 J of energy is transferred for every 1 C of charge passing.",
      diagrams: [
        {
          caption: "Conventional current (+ to −) is opposite to electron flow (− to +).",
          svg:
            '<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A simple cell and lamp loop, with an arrow showing conventional current from plus to minus around the top and electrons drifting the opposite way">\n<rect x="4" y="4" width="312" height="132" fill="#ffffff" stroke="#cbd5e1"/>\n<path d="M60 100 H260 M60 100 V50 M260 100 V50 M60 50 H120 M150 50 H260" stroke="#1e293b" stroke-width="2" fill="none"/>\n<line x1="126" y1="42" x2="126" y2="58" stroke="#1e293b" stroke-width="2"/>\n<line x1="136" y1="36" x2="136" y2="64" stroke="#1e293b" stroke-width="3"/>\n<line x1="136" y1="50" x2="150" y2="50" stroke="#1e293b" stroke-width="2"/>\n<text x="120" y="32" font-size="9" fill="#b45309" text-anchor="middle">+</text>\n<text x="150" y="32" font-size="9" fill="#1d4ed8" text-anchor="middle">−</text>\n<circle cx="210" cy="50" r="11" fill="#fef9c3" stroke="#b45309"/>\n<line x1="202" y1="42" x2="218" y2="58" stroke="#b45309"/>\n<line x1="218" y1="42" x2="202" y2="58" stroke="#b45309"/>\n<path d="M70 96 H250" stroke="#dc2626" stroke-width="2" marker-end="url(#ca)"/>\n<defs><marker id="ca" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#dc2626"/></marker></defs>\n<text x="160" y="90" font-size="9" fill="#dc2626" text-anchor="middle">conventional current</text>\n<text x="160" y="122" font-size="9" fill="#2563eb" text-anchor="middle">electrons drift the opposite way</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Current = rate of flow of charge; I = Q/t, measured in amperes (A).",
        "1 ampere = 1 coulomb per second (1 A = 1 C/s).",
        "Conventional current flows + to −; electrons flow − to + (opposite).",
        "Ammeter in series; voltmeter in parallel.",
        "p.d. = energy transferred per unit charge; V = W/Q, measured in volts (V); 1 V = 1 J/C.",
        "Energy transferred W = QV (joules).",
      ],
      formulae: ["I = Q / t", "Q = I × t", "V = W / Q", "W = Q × V"],
      whyItWorks:
        "A coulomb is a fixed amount of charge (about 6.25 × 10¹⁸ electrons' worth). Counting how many coulombs pass each second (current) and how much energy each coulomb carries (voltage) lets us track energy through any circuit.",
      strategies: ["List your known quantities with units first", "Rearrange the equation before substituting numbers", "Convert any times to seconds before using I = Q/t"],
    },
    {
      heading: "Resistance and Ohm's law",
      discovery: {
        problem:
          "You connect a 12 V battery to a thin wire and read 2 A. You swap in a thicker, shorter wire of the same metal and now read 6 A from the same battery. The voltage never changed — what did?",
        idea:
          "The wires oppose the flow of charge by different amounts. This opposition is RESISTANCE. More resistance means less current for the same voltage. The relationship is V = IR, so R = V/I: the first wire is 6 Ω, the second only 2 Ω.",
      },
      body:
        "**Resistance** is the opposition a component gives to the flow of current. It is measured in **ohms (Ω)** and links voltage and current:\n\n`V = I × R`  →  `R = V / I`  →  `I = V / R`\n\nwhere V is in volts (V), I in amperes (A) and R in ohms (Ω). A **resistor** is a component made specifically to provide a known resistance — it limits the current in a circuit and shares out the p.d.\n\nFor a **fixed (ohmic) resistor at constant temperature**, current is *directly proportional* to voltage — this is **Ohm's law**. Doubling the voltage doubles the current, so R stays constant.\n\n**How resistance depends on length and temperature:**\n\n- **Length:** a *longer* wire has *more* resistance (resistance is proportional to length). Doubling the length doubles the resistance, because electrons travel through more lattice and suffer more collisions.\n- **Cross-section:** a *thicker* wire has *less* resistance (more room for charge to flow).\n- **Temperature:** for most metallic conductors, resistance *increases* as the wire gets *hotter*. Heating makes the metal ions vibrate more, so electrons collide with them more often and are slowed down.",
      diagrams: [
        {
          caption: "Measuring resistance: ammeter in series, voltmeter in parallel.",
          svg:
            '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circuit with a cell, resistor, ammeter in series and voltmeter in parallel across the resistor">\n<rect x="5" y="5" width="290" height="140" fill="#ffffff" stroke="#cbd5e1"/>\n<path d="M40 110 H260 M40 110 V60 M260 110 V60" stroke="#1e293b" stroke-width="2" fill="none"/>\n<line x1="40" y1="60" x2="110" y2="60" stroke="#1e293b" stroke-width="2"/>\n<line x1="118" y1="50" x2="118" y2="70" stroke="#1e293b" stroke-width="2"/>\n<line x1="128" y1="44" x2="128" y2="76" stroke="#1e293b" stroke-width="3"/>\n<line x1="128" y1="60" x2="150" y2="60" stroke="#1e293b" stroke-width="2"/>\n<text x="123" y="40" font-size="10" text-anchor="middle" fill="#334155">cell</text>\n<circle cx="170" cy="60" r="12" fill="#fef3c7" stroke="#b45309"/>\n<text x="170" y="64" font-size="11" text-anchor="middle" fill="#b45309">A</text>\n<line x1="182" y1="60" x2="210" y2="60" stroke="#1e293b" stroke-width="2"/>\n<rect x="210" y="52" width="40" height="16" fill="#e2e8f0" stroke="#1e293b"/>\n<text x="230" y="44" font-size="10" text-anchor="middle" fill="#334155">R</text>\n<line x1="250" y1="60" x2="260" y2="60" stroke="#1e293b" stroke-width="2"/>\n<circle cx="230" cy="120" r="12" fill="#dbeafe" stroke="#1d4ed8"/>\n<text x="230" y="124" font-size="11" text-anchor="middle" fill="#1d4ed8">V</text>\n<line x1="210" y1="60" x2="210" y2="120" stroke="#1d4ed8" stroke-width="2"/>\n<line x1="210" y1="120" x2="218" y2="120" stroke="#1d4ed8" stroke-width="2"/>\n<line x1="242" y1="120" x2="250" y2="120" stroke="#1d4ed8" stroke-width="2"/>\n<line x1="250" y1="120" x2="250" y2="60" stroke="#1d4ed8" stroke-width="2"/>\n</svg>',
        },
      ],
      keyPoints: [
        "Resistance opposes current; measured in ohms (Ω).",
        "V = IR (so R = V/I and I = V/R).",
        "Ohmic conductor: I ∝ V at constant temperature → R constant.",
        "Longer wire → more resistance; thicker wire → less resistance.",
        "Hotter metal → more resistance (more ion vibration/collisions).",
      ],
      formulae: ["V = I × R", "R = V / I", "I = V / R"],
      whyItWorks:
        "Electrons drift through a lattice of vibrating metal ions. Collisions transfer energy and slow the electrons — that opposition is resistance. Anything that increases collisions (more length, higher temperature) increases resistance.",
      strategies: ["Identify which variable is constant", "Use proportional reasoning to check answers", "Watch your units: V in volts, I in amps gives R in ohms"],
    },
    {
      heading: "Series and parallel circuits",
      discovery: {
        problem:
          "Two identical lamps share one 6 V battery. Wired one way, removing a lamp makes the other go out and each gets 3 V. Wired another way, removing one leaves the other glowing brightly on the full 6 V. Same lamps, same battery — what's different?",
        idea:
          "It's how the charge can flow. In SERIES there is one single loop, so the same current passes through every component and the battery's voltage is SHARED. In PARALLEL each lamp is on its own branch, so each gets the FULL voltage and the branch currents ADD up.",
      },
      body:
        "**Series circuit** — components in a single loop:\n\n- **Current is the same** everywhere in the loop.\n- The supply **p.d. is shared** between the components (the individual p.d.s add up to the supply p.d.): `V_supply = V1 + V2 + V3 …`\n- **Resistances add**: `R_total = R1 + R2 + R3 …`\n\n**Parallel circuit** — components on separate branches:\n\n- Each branch has the **same p.d.** (equal to the supply).\n- The **branch currents add** to give the total current from the supply: `I_total = I1 + I2 + …`\n- Adding parallel branches gives more paths for charge, so the **total resistance is less** than the smallest single branch.\n\nMost household wiring is **parallel** so each appliance gets the full mains voltage and can be switched on and off independently.",
      diagrams: [
        {
          caption: "Series (one loop) versus parallel (separate branches).",
          svg:
            '<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: series circuit with two lamps in one loop. Right: parallel circuit with two lamps on separate branches">\n<text x="90" y="16" font-size="12" text-anchor="middle" fill="#334155">SERIES</text>\n<path d="M30 40 H150 V130 H30 Z" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="44" y1="34" x2="44" y2="46" stroke="#1e293b" stroke-width="2"/>\n<line x1="52" y1="30" x2="52" y2="50" stroke="#1e293b" stroke-width="3"/>\n<circle cx="100" cy="40" r="11" fill="#fef9c3" stroke="#b45309"/>\n<line x1="92" y1="32" x2="108" y2="48" stroke="#b45309"/>\n<line x1="108" y1="32" x2="92" y2="48" stroke="#b45309"/>\n<circle cx="150" cy="85" r="11" fill="#fef9c3" stroke="#b45309"/>\n<line x1="142" y1="77" x2="158" y2="93" stroke="#b45309"/>\n<line x1="158" y1="77" x2="142" y2="93" stroke="#b45309"/>\n<text x="90" y="150" font-size="9" text-anchor="middle" fill="#334155">same current, p.d. shared</text>\n<text x="270" y="16" font-size="12" text-anchor="middle" fill="#334155">PARALLEL</text>\n<path d="M210 40 H330 M210 130 H330 M210 40 V130 M330 40 V130" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="224" y1="34" x2="224" y2="46" stroke="#1e293b" stroke-width="2"/>\n<line x1="232" y1="30" x2="232" y2="50" stroke="#1e293b" stroke-width="3"/>\n<line x1="270" y1="40" x2="270" y2="130" stroke="#1e293b" stroke-width="2"/>\n<line x1="300" y1="40" x2="300" y2="130" stroke="#1e293b" stroke-width="2"/>\n<circle cx="270" cy="85" r="11" fill="#fef9c3" stroke="#b45309"/>\n<line x1="262" y1="77" x2="278" y2="93" stroke="#b45309"/>\n<line x1="278" y1="77" x2="262" y2="93" stroke="#b45309"/>\n<circle cx="300" cy="85" r="11" fill="#fef9c3" stroke="#b45309"/>\n<line x1="292" y1="77" x2="308" y2="93" stroke="#b45309"/>\n<line x1="308" y1="77" x2="292" y2="93" stroke="#b45309"/>\n<text x="270" y="150" font-size="9" text-anchor="middle" fill="#334155">same p.d., currents add</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Series: same current everywhere; p.d.s add to the supply; R_total = R1 + R2 + …",
        "Parallel: same p.d. across each branch; branch currents add to the total.",
        "Parallel total resistance is less than the smallest branch.",
        "Household appliances are wired in parallel.",
      ],
      formulae: ["Series: R_total = R1 + R2 + R3", "Series: V_supply = V1 + V2 + …", "Parallel: I_total = I1 + I2 + I3"],
      whyItWorks:
        "Charge is conserved: it cannot pile up or vanish, so in a single series loop the same number of charges per second pass every point. At a parallel junction the charge simply splits between paths and recombines, so branch currents must add to the total.",
      strategies: ["Decide series or parallel first", "Apply the matching rule (current rule vs voltage rule)", "Work out total resistance, then use V = IR"],
    },
    {
      heading: "Circuit symbols",
      body:
        "You must recognise and draw the standard circuit symbols used in 4PH1. The key ones:\n\n- **Cell** — a long thin line (+) and a short thick line (−).\n- **Battery** — two or more cells joined together.\n- **Lamp (bulb)** — a circle with a cross inside.\n- **Switch** — a gap with a hinged lever that opens/closes the circuit.\n- **Fixed resistor** — a rectangle.\n- **Variable resistor (rheostat)** — a rectangle with an arrow through it; changes resistance.\n- **Ammeter** — a circle with **A** (always in series).\n- **Voltmeter** — a circle with **V** (always in parallel).\n- **Fuse** — a rectangle with a line through it; protects the circuit.\n- **Diode** — a triangle pointing to a bar; lets current pass one way only.\n- **LED** (light-emitting diode) — a diode with two small arrows pointing away; emits light when conducting.\n- **LDR** (light-dependent resistor) — a resistor in a circle with two arrows pointing in.\n- **Thermistor** — a resistor with a line bent across one corner.\n- **Motor** — a circle with **M**; turns electrical energy into kinetic energy.\n- **Heater** — a rectangle (heating element) that turns electrical energy into thermal energy.",
      diagrams: [
        {
          caption: "Common circuit symbols (row 1).",
          svg:
            '<svg viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circuit symbols: cell, battery, switch, lamp, fixed resistor and variable resistor">\n<rect x="2" y="2" width="356" height="126" fill="#ffffff" stroke="#cbd5e1"/>\n<line x1="14" y1="30" x2="30" y2="30" stroke="#1e293b" stroke-width="2"/>\n<line x1="36" y1="22" x2="36" y2="38" stroke="#1e293b" stroke-width="2"/>\n<line x1="44" y1="16" x2="44" y2="44" stroke="#1e293b" stroke-width="3"/>\n<line x1="50" y1="30" x2="66" y2="30" stroke="#1e293b" stroke-width="2"/>\n<text x="40" y="56" font-size="9" text-anchor="middle" fill="#334155">cell</text>\n<line x1="92" y1="30" x2="104" y2="30" stroke="#1e293b" stroke-width="2"/>\n<line x1="108" y1="22" x2="108" y2="38" stroke="#1e293b" stroke-width="2"/>\n<line x1="114" y1="16" x2="114" y2="44" stroke="#1e293b" stroke-width="3"/>\n<line x1="120" y1="22" x2="120" y2="38" stroke="#1e293b" stroke-width="2"/>\n<line x1="126" y1="16" x2="126" y2="44" stroke="#1e293b" stroke-width="3"/>\n<line x1="132" y1="30" x2="144" y2="30" stroke="#1e293b" stroke-width="2"/>\n<text x="118" y="56" font-size="9" text-anchor="middle" fill="#334155">battery</text>\n<line x1="170" y1="30" x2="185" y2="30" stroke="#1e293b" stroke-width="2"/>\n<line x1="185" y1="30" x2="202" y2="19" stroke="#1e293b" stroke-width="2"/>\n<circle cx="185" cy="30" r="2" fill="#1e293b"/>\n<line x1="205" y1="30" x2="220" y2="30" stroke="#1e293b" stroke-width="2"/>\n<text x="195" y="56" font-size="9" text-anchor="middle" fill="#334155">switch</text>\n<line x1="246" y1="30" x2="258" y2="30" stroke="#1e293b" stroke-width="2"/>\n<circle cx="270" cy="30" r="11" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="262" y1="22" x2="278" y2="38" stroke="#1e293b" stroke-width="2"/>\n<line x1="278" y1="22" x2="262" y2="38" stroke="#1e293b" stroke-width="2"/>\n<line x1="282" y1="30" x2="294" y2="30" stroke="#1e293b" stroke-width="2"/>\n<text x="270" y="56" font-size="9" text-anchor="middle" fill="#334155">lamp</text>\n<line x1="14" y1="98" x2="30" y2="98" stroke="#1e293b" stroke-width="2"/>\n<rect x="30" y="90" width="38" height="16" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="68" y1="98" x2="84" y2="98" stroke="#1e293b" stroke-width="2"/>\n<text x="49" y="122" font-size="9" text-anchor="middle" fill="#334155">resistor</text>\n<line x1="120" y1="98" x2="136" y2="98" stroke="#1e293b" stroke-width="2"/>\n<rect x="136" y="90" width="38" height="16" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="174" y1="98" x2="190" y2="98" stroke="#1e293b" stroke-width="2"/>\n<line x1="138" y1="112" x2="172" y2="84" stroke="#1e293b" stroke-width="2" marker-end="url(#va)"/>\n<defs><marker id="va" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#1e293b"/></marker></defs>\n<text x="155" y="122" font-size="9" text-anchor="middle" fill="#334155">variable R</text>\n<line x1="246" y1="98" x2="262" y2="98" stroke="#1e293b" stroke-width="2"/>\n<rect x="262" y="90" width="38" height="16" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="266" y1="90" x2="266" y2="106" stroke="#1e293b" stroke-width="2"/>\n<line x1="300" y1="98" x2="316" y2="98" stroke="#1e293b" stroke-width="2"/>\n<text x="281" y="122" font-size="9" text-anchor="middle" fill="#334155">fuse</text>\n</svg>',
        },
        {
          caption: "Common circuit symbols (row 2): meters, diode, LED, LDR, thermistor, motor, heater.",
          svg:
            '<svg viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circuit symbols: ammeter, voltmeter, diode, LED, LDR, thermistor, motor and heater">\n<rect x="2" y="2" width="356" height="126" fill="#ffffff" stroke="#cbd5e1"/>\n<line x1="14" y1="30" x2="26" y2="30" stroke="#1e293b" stroke-width="2"/>\n<circle cx="38" cy="30" r="11" fill="none" stroke="#1e293b" stroke-width="2"/>\n<text x="38" y="34" font-size="11" text-anchor="middle" fill="#1e293b">A</text>\n<line x1="50" y1="30" x2="62" y2="30" stroke="#1e293b" stroke-width="2"/>\n<text x="38" y="56" font-size="9" text-anchor="middle" fill="#334155">ammeter</text>\n<line x1="86" y1="30" x2="98" y2="30" stroke="#1e293b" stroke-width="2"/>\n<circle cx="110" cy="30" r="11" fill="none" stroke="#1e293b" stroke-width="2"/>\n<text x="110" y="34" font-size="11" text-anchor="middle" fill="#1e293b">V</text>\n<line x1="122" y1="30" x2="134" y2="30" stroke="#1e293b" stroke-width="2"/>\n<text x="110" y="56" font-size="9" text-anchor="middle" fill="#334155">voltmeter</text>\n<line x1="160" y1="30" x2="176" y2="30" stroke="#1e293b" stroke-width="2"/>\n<path d="M176 22 L176 38 L192 30 Z" fill="#1e293b"/>\n<line x1="192" y1="22" x2="192" y2="38" stroke="#1e293b" stroke-width="2"/>\n<line x1="192" y1="30" x2="208" y2="30" stroke="#1e293b" stroke-width="2"/>\n<text x="184" y="56" font-size="9" text-anchor="middle" fill="#334155">diode</text>\n<line x1="236" y1="30" x2="250" y2="30" stroke="#1e293b" stroke-width="2"/>\n<path d="M250 22 L250 38 L266 30 Z" fill="#1e293b"/>\n<line x1="266" y1="22" x2="266" y2="38" stroke="#1e293b" stroke-width="2"/>\n<line x1="266" y1="30" x2="280" y2="30" stroke="#1e293b" stroke-width="2"/>\n<line x1="262" y1="16" x2="272" y2="8" stroke="#b45309" stroke-width="1.5" marker-end="url(#la)"/>\n<line x1="270" y1="18" x2="280" y2="10" stroke="#b45309" stroke-width="1.5" marker-end="url(#la)"/>\n<defs><marker id="la" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6 Z" fill="#b45309"/></marker></defs>\n<text x="258" y="56" font-size="9" text-anchor="middle" fill="#334155">LED</text>\n<circle cx="48" cy="98" r="16" fill="none" stroke="#1e293b" stroke-width="1.5"/>\n<rect x="36" y="90" width="24" height="14" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="20" y1="98" x2="32" y2="98" stroke="#1e293b" stroke-width="2"/>\n<line x1="64" y1="98" x2="76" y2="98" stroke="#1e293b" stroke-width="2"/>\n<line x1="30" y1="120" x2="40" y2="108" stroke="#b45309" stroke-width="1.5" marker-end="url(#la)"/>\n<line x1="38" y1="122" x2="48" y2="110" stroke="#b45309" stroke-width="1.5" marker-end="url(#la)"/>\n<text x="48" y="124" font-size="9" text-anchor="middle" fill="#334155">LDR</text>\n<line x1="118" y1="98" x2="130" y2="98" stroke="#1e293b" stroke-width="2"/>\n<rect x="130" y="90" width="38" height="16" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="168" y1="98" x2="180" y2="98" stroke="#1e293b" stroke-width="2"/>\n<line x1="126" y1="112" x2="138" y2="112" stroke="#1e293b" stroke-width="2"/>\n<line x1="138" y1="112" x2="138" y2="84" stroke="#1e293b" stroke-width="2"/>\n<text x="149" y="124" font-size="9" text-anchor="middle" fill="#334155">thermistor</text>\n<line x1="206" y1="98" x2="218" y2="98" stroke="#1e293b" stroke-width="2"/>\n<circle cx="230" cy="98" r="11" fill="none" stroke="#1e293b" stroke-width="2"/>\n<text x="230" y="102" font-size="10" text-anchor="middle" fill="#1e293b">M</text>\n<line x1="242" y1="98" x2="254" y2="98" stroke="#1e293b" stroke-width="2"/>\n<text x="230" y="124" font-size="9" text-anchor="middle" fill="#334155">motor</text>\n<line x1="286" y1="98" x2="298" y2="98" stroke="#1e293b" stroke-width="2"/>\n<rect x="298" y="90" width="40" height="16" fill="none" stroke="#1e293b" stroke-width="2"/>\n<text x="318" y="124" font-size="9" text-anchor="middle" fill="#334155">heater</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Cell: long thin line is +, short thick line is −; a battery is several cells.",
        "Lamp = circle with a cross; fixed resistor = rectangle; variable resistor = rectangle with an arrow.",
        "Ammeter = circle 'A' (series); voltmeter = circle 'V' (parallel).",
        "Diode/LED point one way; LED has two outward arrows.",
        "LDR = resistor with inward arrows; thermistor = resistor with a bent line.",
        "Motor = circle 'M'; heater = a heating-element rectangle; fuse = rectangle with a line.",
      ],
      strategies: ["Learn symbols in pairs (ammeter/voltmeter, diode/LED, LDR/thermistor)", "Sketch the circuit before calculating"],
    },
    {
      heading: "I–V graphs, LDRs and thermistors",
      discovery: {
        problem:
          "A fixed resistor gives a perfectly straight I–V line through the origin. A filament lamp gives a line that curves and flattens off as voltage rises. Both are just bits of metal carrying current — why does the lamp 'bend'?",
        idea:
          "As the lamp's filament carries more current it gets HOTTER. Hotter metal has more resistance, so the current rises more slowly than the voltage — the graph curves. The fixed resistor stays cool, so its resistance is constant and the line stays straight.",
      },
      body:
        "An **I–V (current–voltage) graph** shows how current changes as p.d. changes. Its shape reveals the component:\n\n- **Fixed resistor (ohmic):** a **straight line through the origin**. I ∝ V, so resistance is constant. A steeper line means lower resistance.\n- **Filament lamp:** an **S-shaped curve** that gets shallower at higher voltage. The filament heats up, its resistance increases, so current rises less steeply.\n- **Diode:** current flows freely in the **forward direction** above a small turn-on voltage, but is **blocked in reverse** (almost zero current). A diode only lets current pass one way.\n\nResistance at any point on an I–V graph is found from `R = V / I` (read off a V and its I).\n\n**Light-dependent resistor (LDR):** resistance **falls as light gets brighter** (and rises in the dark). Used in light sensors, cameras and automatic street lights.\n\n**Thermistor:** resistance **falls as temperature rises** (and rises when cold). Used in temperature sensors, thermostats and fire alarms.\n\n**Sensing circuits.** An LDR or thermistor placed in series with a fixed resistor forms a *potential divider* whose output voltage changes with light or temperature. That changing voltage can switch on a lamp, a heater or an alarm — e.g. a street light comes on at dusk, or a thermostat switches off a heater when a room is warm enough.",
      diagrams: [
        {
          caption: "I–V graphs: fixed resistor (straight), filament lamp (S-curve), diode (one-way).",
          svg:
            '<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three current-voltage graphs: a straight line for a fixed resistor, an S-curve for a filament lamp and a one-way curve for a diode">\n<g>\n<line x1="20" y1="120" x2="110" y2="120" stroke="#475569" stroke-width="1.5"/>\n<line x1="20" y1="120" x2="20" y2="30" stroke="#475569" stroke-width="1.5"/>\n<line x1="25" y1="115" x2="100" y2="40" stroke="#b45309" stroke-width="2.5"/>\n<text x="65" y="140" font-size="9" text-anchor="middle" fill="#334155">fixed resistor</text>\n</g>\n<g>\n<line x1="135" y1="120" x2="225" y2="120" stroke="#475569" stroke-width="1.5"/>\n<line x1="135" y1="120" x2="135" y2="30" stroke="#475569" stroke-width="1.5"/>\n<path d="M138 116 C160 80 200 55 218 50" stroke="#b45309" stroke-width="2.5" fill="none"/>\n<text x="180" y="140" font-size="9" text-anchor="middle" fill="#334155">filament lamp</text>\n</g>\n<g>\n<line x1="250" y1="80" x2="345" y2="80" stroke="#475569" stroke-width="1.5"/>\n<line x1="300" y1="120" x2="300" y2="30" stroke="#475569" stroke-width="1.5"/>\n<path d="M260 80 L305 80 C315 80 320 50 325 35" stroke="#b45309" stroke-width="2.5" fill="none"/>\n<text x="300" y="140" font-size="9" text-anchor="middle" fill="#334155">diode</text>\n</g>\n</svg>',
        },
      ],
      keyPoints: [
        "Fixed resistor: straight line through origin (constant R).",
        "Filament lamp: curve flattens — resistance rises as it heats.",
        "Diode: conducts one way only; blocks reverse current.",
        "LDR: resistance falls as light increases.",
        "Thermistor: resistance falls as temperature increases.",
        "LDR/thermistor in a sensing circuit can switch lamps, heaters or alarms.",
      ],
      formulae: ["R = V / I (read from any point on the graph)"],
      whyItWorks:
        "An I–V graph is a fingerprint of how a component responds. A constant slope means a constant resistance; a changing slope means resistance is changing (with temperature for the lamp, or with direction for the diode).",
      thinkDeeper:
        "An automatic night-light uses an LDR. In the dark the LDR's resistance is high, so it takes most of the p.d., switching the lamp on. In bright light the LDR's resistance is low, it takes little p.d., and the lamp switches off. Can you sketch the same idea for a thermistor switching a fan on when a room gets hot?",
      strategies: ["Read the slope to compare resistances", "Match the curve shape to the component", "For sensors, ask: does R go up or down, and what does that do to the shared voltage?"],
    },
    {
      heading: "Electrical power and energy",
      discovery: {
        problem:
          "A 2 kW kettle and a 2 kW electric heater are both on the same 230 V mains. They draw the same current. But the heater's element glows red-hot and the kettle's doesn't. If power and current are equal, why does one component get so much hotter?",
        idea:
          "Power tells you the total energy per second, but where that energy is dissipated depends on resistance: P = I²R. For the same current, the component with higher resistance dissipates more power as heat in itself. Combining P = IV with V = IR gives you both P = IV and P = I²R.",
      },
      body:
        "**Electrical power** is the rate of transferring energy, measured in **watts (W)** (1 W = 1 J/s):\n\n`P = I × V`\n\nCombining with V = IR gives two more useful forms:\n\n`P = I² × R`   and   `P = V² / R`\n\nwhere P is in watts (W), I in amperes (A), V in volts (V), R in ohms (Ω).\n\n**Electrical energy** transferred is power × time, or equivalently:\n\n`E = I × V × t`   (and so `E = P × t`)\n\nwhere E is in joules (J) and t in seconds (s). Since W = QV, energy can also be found from the charge: `E = Q × V`.\n\nWhen current flows through a resistance, electrical energy is transferred to **thermal energy** (heating) — this is why wires, kettles and filament lamps get hot. The greater the current and resistance, the greater the heating (P = I²R), which is why thick low-resistance cables are used to carry large currents without overheating.",
      keyPoints: [
        "Power P = IV, in watts (W); 1 W = 1 J/s.",
        "Also P = I²R and P = V²/R.",
        "Energy E = IVt = Pt, in joules (J); also E = QV.",
        "Current through resistance heats the component (P = I²R).",
      ],
      formulae: ["P = I × V", "P = I² × R", "P = V² / R", "E = I × V × t", "E = P × t", "E = Q × V"],
      whyItWorks:
        "Each coulomb carries V joules (from V = W/Q). Multiply by the coulombs per second (the current I) and you get joules per second — power. So P = IV follows directly from the definitions of current and voltage.",
      strategies: ["Pick the power formula that matches your known quantities", "Check units: amps × volts = watts", "Convert kW to W and minutes to seconds before substituting"],
    },
    {
      heading: "The kilowatt-hour and the cost of electricity",
      discovery: {
        problem:
          "Running a 3 kW heater for 2 hours transfers 21 600 000 J of energy. Your electricity bill, though, just says you used '6 units'. Why doesn't the bill use joules — and how do 6 'units' relate to 21.6 million joules?",
        idea:
          "The joule is a tiny unit for household energy, so electricity companies use a much bigger one: the kilowatt-hour (kWh). One kWh is the energy used by a 1 kW device in 1 hour. A 3 kW heater for 2 hours uses 3 × 2 = 6 kWh — the '6 units' on the bill.",
      },
      body:
        "The **kilowatt-hour (kWh)** is a unit of *energy* used for billing. It is the energy transferred by a **1 kilowatt** appliance running for **1 hour**. One 'unit' of electricity on a bill is 1 kWh.\n\n*Energy in kWh:*\n\n`energy (kWh) = power (kW) × time (h)`\n\n*Cost of electricity:*\n\n`cost = energy (kWh) × price per kWh`  =  `power (kW) × time (h) × price per unit`\n\nTo use these, **power must be in kilowatts** (divide watts by 1000) and **time must be in hours**.\n\n*Worked example.* A 2000 W washing machine runs for 1.5 hours, and electricity costs 30p per kWh.\n- Power = 2000 ÷ 1000 = **2 kW**.\n- Energy = 2 kW × 1.5 h = **3 kWh** (3 units).\n- Cost = 3 kWh × 30p = **90p**.\n\n(For comparison in joules: 1 kWh = 1000 W × 3600 s = 3 600 000 J = 3.6 MJ.)",
      keyPoints: [
        "1 kWh = energy used by a 1 kW appliance in 1 hour = 1 'unit'.",
        "Energy (kWh) = power (kW) × time (h).",
        "Cost = power (kW) × time (h) × price per kWh.",
        "Convert watts → kilowatts (÷1000) and minutes → hours before calculating.",
        "1 kWh = 3 600 000 J = 3.6 MJ.",
      ],
      formulae: ["energy (kWh) = power (kW) × time (h)", "cost = energy (kWh) × price per unit", "1 kWh = 3 600 000 J"],
      whyItWorks:
        "Energy = power × time. If power is measured in kilowatts and time in hours, the natural energy unit is the kilowatt-hour — far more convenient than counting millions of joules on a household bill.",
      strategies: ["Always convert to kW and hours first", "Find energy in kWh, then multiply by the price", "Check size sense: a few units a day is typical, not thousands"],
    },
    {
      heading: "Mains electricity and safety",
      discovery: {
        problem:
          "A torch battery is safe to hold across both terminals, but the mains can kill you. Both are 'electricity'. What makes mains so much more dangerous, and how does a three-pin plug protect you?",
        idea:
          "Mains is high-voltage ALTERNATING current (230 V, 50 Hz) that can drive a large, lethal current through you. A three-pin plug, the earth wire and the fuse are all designed to make sure faults blow the fuse and cut the current before it reaches you.",
      },
      body:
        "**Direct current (d.c.)** flows in one direction only (from a cell/battery). **Alternating current (a.c.)** repeatedly reverses direction; UK mains is a.c. at about **230 V and 50 Hz** (it reverses 50 times per second).\n\nA UK **three-pin plug** has three wires:\n\n- **Live (brown)** — carries the alternating p.d. from the supply; dangerous.\n- **Neutral (blue)** — completes the circuit, near 0 V.\n- **Earth (green/yellow)** — a safety wire connected to the metal case; normally carries no current.\n\nA plug also has a **cable grip** that clamps the outer insulation of the cable so the wires are not pulled loose from the pins.\n\n**Safety features:**\n\n- **Fuse** — a thin wire in series with the **live** that **melts and breaks the circuit** if the current gets too high (e.g. in a fault), cutting the supply. Choose a fuse rated just above the normal operating current.\n- **Earthing** — if a fault connects the live wire to a metal case, a large current flows to earth through the low-resistance earth wire and blows the fuse, so the case cannot stay live.\n- **Double insulation** — appliances with a plastic casing and no exposed metal parts cannot become live, so they need no earth wire (marked with a double-square symbol).\n\n**Choosing a fuse rating.** Work out the normal operating current with `I = P / V`, then pick the **next standard fuse above** that current. Common fuses are 3 A, 5 A and 13 A. For example, a 1000 W appliance on 230 V draws I = 1000 ÷ 230 ≈ 4.3 A, so a **5 A** fuse is chosen (the smallest standard rating above 4.3 A).\n\nNever overload sockets, use damp hands, or touch bare wires — mains current through the body can stop the heart.",
      diagrams: [
        {
          caption: "A correctly wired UK three-pin plug.",
          svg:
            '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A three-pin plug showing earth at top, live on the right with a fuse, neutral on the left, and a cable grip at the bottom">\n<rect x="30" y="20" width="160" height="150" rx="10" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>\n<rect x="100" y="4" width="20" height="22" fill="#94a3b8" stroke="#334155"/>\n<text x="110" y="40" font-size="10" text-anchor="middle" fill="#15803d">Earth</text>\n<rect x="46" y="40" width="16" height="20" fill="#94a3b8" stroke="#334155"/>\n<rect x="158" y="40" width="16" height="20" fill="#94a3b8" stroke="#334155"/>\n<line x1="110" y1="26" x2="110" y2="120" stroke="#15803d" stroke-width="3"/>\n<line x1="54" y1="60" x2="54" y2="150" stroke="#1d4ed8" stroke-width="3"/>\n<line x1="166" y1="60" x2="166" y2="100" stroke="#7c3f00" stroke-width="3"/>\n<rect x="156" y="100" width="20" height="26" fill="#fde68a" stroke="#7c3f00"/>\n<line x1="166" y1="126" x2="166" y2="150" stroke="#7c3f00" stroke-width="3"/>\n<text x="192" y="116" font-size="9" text-anchor="middle" fill="#7c3f00">fuse</text>\n<line x1="54" y1="150" x2="166" y2="150" stroke="#334155" stroke-width="2"/>\n<rect x="92" y="150" width="36" height="22" rx="4" fill="#334155"/>\n<text x="110" y="166" font-size="8" text-anchor="middle" fill="#ffffff">grip</text>\n<text x="54" y="190" font-size="10" text-anchor="middle" fill="#1d4ed8">Neutral</text>\n<text x="166" y="190" font-size="10" text-anchor="middle" fill="#7c3f00">Live</text>\n</svg>',
        },
      ],
      keyPoints: [
        "d.c. flows one way (cells); a.c. reverses (mains ≈ 230 V, 50 Hz).",
        "Live (brown), Neutral (blue), Earth (green/yellow); cable grip holds the cable.",
        "Fuse is in the LIVE wire; it melts and cuts the supply on overcurrent.",
        "Earthing + fuse stop a metal case staying live in a fault.",
        "Double-insulated appliances (plastic case) need no earth wire.",
        "Fuse rating: find I = P/V, then choose the next standard fuse above it.",
      ],
      formulae: ["I = P / V (to choose a fuse)"],
      whyItWorks:
        "A fuse exploits heating (P = I²R): an abnormally large current heats the thin fuse wire until it melts, breaking the live connection faster than the fault can harm you.",
      strategies: ["Match each wire to its colour and job", "For fuse rating: find the normal current (I = P/V), then pick the next standard fuse above it"],
    },
    {
      heading: "Static electricity",
      discovery: {
        problem:
          "Rub a plastic ruler on your sleeve and it picks up tiny pieces of paper; pull a jumper off and it crackles in the dark. No battery is involved at all. Where does this 'static' charge come from, and why does it make things attract or spark?",
        idea:
          "Rubbing two insulators together transfers tiny negative electrons from one to the other by FRICTION. One object ends up with extra electrons (negative) and the other short of electrons (positive). These separated charges then attract, repel, or jump as a spark.",
      },
      body:
        "**Static electricity** is electric charge that builds up on an **insulator** and stays put (it cannot flow away easily).\n\n**Charging by friction.** When two insulators are rubbed together, **electrons** (which are negatively charged) are transferred from one to the other:\n\n- The material that **gains electrons** becomes **negatively charged**.\n- The material that **loses electrons** becomes **positively charged**.\n\nOnly electrons move — the positive nuclei stay fixed. The charges are equal and opposite. For example, rubbing a polythene rod with a cloth gives the rod extra electrons (negative); rubbing an acetate (perspex) rod with a cloth pulls electrons off it (positive).\n\n**Forces between charges:**\n\n- **Like charges repel** (two negatives, or two positives, push apart).\n- **Unlike charges attract** (a positive and a negative pull together).\n\nA charged object can also attract small *uncharged* objects (like bits of paper) because it pulls their charges slightly out of place (induced charge).\n\n**Electric fields.** A charged object is surrounded by an **electric field** — the region where it exerts a force on other charges. Field lines point *away from* a positive charge and *towards* a negative charge. If the field becomes strong enough, it can ionise the air and a **spark** (a sudden discharge) jumps across.\n\n**Earthing to discharge.** Connecting a charged object to the ground with a conductor lets the excess electrons flow away (or flow in), neutralising the charge safely. This is called **earthing**.\n\n**Uses of static:** inkjet printers and photocopiers (charged ink/toner is steered onto the paper), and electrostatic **spray painting** or crop spraying (the charged droplets repel each other to spread evenly and are attracted to the earthed object, giving an even coat with little waste).\n\n**Dangers of static:** sparks can ignite flammable vapours, so fuel tankers are **earthed** (and bonded) before refuelling aircraft or filling tanks; a build-up can also damage electronic components and give people small shocks.",
      diagrams: [
        {
          caption: "Charging by friction: electrons transfer, leaving equal and opposite charges.",
          svg:
            '<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rod and a cloth rubbed together: electrons move from the cloth to the rod, leaving the rod negative and the cloth positive">\n<rect x="4" y="4" width="312" height="132" fill="#ffffff" stroke="#cbd5e1"/>\n<rect x="40" y="50" width="90" height="18" rx="6" fill="#dbeafe" stroke="#1e293b"/>\n<text x="85" y="86" font-size="10" text-anchor="middle" fill="#334155">rod (gains e⁻)</text>\n<text x="60" y="44" font-size="11" fill="#1d4ed8">− − −</text>\n<rect x="190" y="50" width="90" height="40" rx="6" fill="#fde68a" stroke="#1e293b"/>\n<text x="235" y="108" font-size="10" text-anchor="middle" fill="#334155">cloth (loses e⁻)</text>\n<text x="210" y="44" font-size="11" fill="#b45309">+ + +</text>\n<path d="M188 60 H140" stroke="#dc2626" stroke-width="2" marker-end="url(#ea)"/>\n<defs><marker id="ea" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#dc2626"/></marker></defs>\n<text x="164" y="54" font-size="9" fill="#dc2626" text-anchor="middle">electrons</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Static charge builds up on insulators by friction; only electrons transfer.",
        "Gains electrons → negative; loses electrons → positive (equal and opposite).",
        "Like charges repel; unlike charges attract.",
        "A charged object is surrounded by an electric field; a strong field can spark.",
        "Earthing lets excess charge flow away, discharging the object.",
        "Uses: inkjet printers, photocopiers, spray painting. Dangers: sparks near fuel/flammable vapours.",
      ],
      formulae: [],
      whyItWorks:
        "Atoms are normally neutral (equal protons and electrons). Friction transfers some loosely held electrons between insulators; because the gained/lost electrons are equal in number, the two objects end up with equal and opposite charge that cannot easily flow away on an insulator.",
      thinkDeeper:
        "In electrostatic spray painting the paint droplets are all given the same charge. Why does this make them spread out into an even mist, and why does earthing the car body pull the paint onto it — even reaching the back of the panel?",
      strategies: ["Always explain charging by which way the electrons move", "State 'like repel, unlike attract' explicitly", "For uses/dangers, link back to attraction, repulsion or sparks"],
    },
  ],
  learn: {
    bigIdea:
      "A circuit is a loop that lets charge flow. Key equations tie everything together: current is charge per second (I = Q/t), voltage is energy per charge (V = W/Q), and resistance links them (V = IR). From these you can predict current, voltage, resistance, power (P = IV = I²R = V²/R) and energy (E = IVt = QV) anywhere in series or parallel circuits, cost electricity in kilowatt-hours, understand safe mains delivery, and explain static charge built up by friction.",
    mustKnow: [
      "I = Q/t; charge in coulombs (C), current in amperes (A); ammeter in series.",
      "Conventional current flows + to −; electrons flow − to + (opposite).",
      "V = W/Q (energy W = QV); voltage in volts (V); 1 V = 1 J/C; voltmeter in parallel.",
      "V = IR; resistance in ohms (Ω); ohmic resistor has constant R (straight I–V line); R rises with length and temperature.",
      "Series: same current, p.d.s add to supply, R_total = R1 + R2. Parallel: same p.d., currents add, R_total below smallest branch.",
      "I–V shapes: resistor straight; filament lamp curves (heats up); diode one-way; LDR/thermistor resistance falls with light/temperature.",
      "Power P = IV = I²R = V²/R (watts); energy E = IVt (joules); 1 kWh = power(kW) × time(h); cost = kWh × price.",
      "Mains is a.c. ≈230 V, 50 Hz; plug wires live(brown)/neutral(blue)/earth(green-yellow); fuse in live; earthing & double insulation for safety; fuse rating I = P/V.",
      "Static: friction transfers electrons; like charges repel, unlike attract; earthing discharges; uses (printers, spray painting) and dangers (sparks near fuel).",
    ],
    keywords: [
      { term: "Current", definition: "The rate of flow of electric charge, I = Q/t, measured in amperes (A)." },
      { term: "Charge", definition: "A quantity of electricity, measured in coulombs (C); Q = It." },
      { term: "Conventional current", definition: "The agreed current direction, from + to − around a circuit; opposite to the actual electron flow." },
      { term: "Potential difference", definition: "Energy transferred per unit charge between two points, V = W/Q, measured in volts (V); 1 V = 1 J/C." },
      { term: "Resistance", definition: "Opposition to current flow, R = V/I, measured in ohms (Ω); increases with length and temperature." },
      { term: "Ohm's law", definition: "For an ohmic conductor at constant temperature, current is proportional to p.d. (V = IR with constant R)." },
      { term: "Series circuit", definition: "Components in one loop: same current throughout, p.d.s add to the supply, resistances add." },
      { term: "Parallel circuit", definition: "Components on separate branches: same p.d. across each, branch currents add; total R below the smallest branch." },
      { term: "Power", definition: "Rate of energy transfer, P = IV = I²R = V²/R, measured in watts (W)." },
      { term: "Kilowatt-hour (kWh)", definition: "A unit of energy for billing: the energy a 1 kW appliance uses in 1 hour (1 kWh = 3.6 MJ)." },
      { term: "Alternating current (a.c.)", definition: "Current that repeatedly reverses direction; UK mains ≈230 V, 50 Hz." },
      { term: "Fuse", definition: "A thin wire in the live conductor that melts to break the circuit if the current is too high." },
      { term: "Earthing", definition: "Connecting an object to the ground by a conductor so excess charge (or fault current) flows safely away." },
      { term: "Static electricity", definition: "Charge built up on an insulator (by friction transferring electrons) that cannot easily flow away." },
    ],
    flashcards: [
      { front: "State the equation linking charge, current and time.", back: "Q = I × t (charge in C, current in A, time in s); equivalently I = Q/t." },
      { front: "Which way does conventional current flow, and which way do electrons flow?", back: "Conventional current: + to −. Electrons: − to + (the opposite direction)." },
      { front: "What is 1 volt in terms of energy and charge?", back: "1 volt = 1 joule per coulomb (V = W/Q)." },
      { front: "How do current and p.d. behave in a series circuit?", back: "Current is the same everywhere; the supply p.d. is shared between the components." },
      { front: "Give three formulas for electrical power.", back: "P = IV, P = I²R and P = V²/R (all in watts)." },
      { front: "How do you work out the cost of running an appliance?", back: "Cost = power (kW) × time (h) × price per kWh; energy in kWh = power(kW) × time(h)." },
      { front: "Which wire is the fuse fitted in, and what does it do?", back: "The live wire; it melts and breaks the circuit if the current gets dangerously high." },
      { front: "What happens to a thermistor's resistance as it gets hotter?", back: "Its resistance decreases as temperature rises." },
      { front: "How does an insulator become negatively charged by friction?", back: "It gains electrons rubbed onto it from the other material (the other becomes positive)." },
      { front: "State the rule for forces between charges.", back: "Like charges repel; unlike charges attract." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "ce-mcq-q01",
        question: "Electric current is best described as the…",
        options: ["energy stored in a battery", "rate of flow of charge", "opposition to charge flow", "voltage across a component"],
        answerIndex: 1,
        explanation: "Current is the rate of flow of electric charge, I = Q/t, measured in amperes.",
        guideRef: "Current, charge and potential difference",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q02",
        question: "Which instrument measures current, and how is it connected?",
        options: ["Voltmeter, in series", "Ammeter, in parallel", "Ammeter, in series", "Voltmeter, in parallel"],
        answerIndex: 2,
        explanation: "An ammeter measures current and must be placed in series so the same current flows through it.",
        guideRef: "Current, charge and potential difference",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q03",
        question: "The unit of charge is the…",
        options: ["volt", "ohm", "coulomb", "watt"],
        answerIndex: 2,
        explanation: "Charge is measured in coulombs (C). Current (A) is coulombs per second.",
        guideRef: "Current, charge and potential difference",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q04",
        question: "A current of 3 A flows for 20 s. How much charge passes?",
        options: ["6.7 C", "23 C", "60 C", "0.15 C"],
        answerIndex: 2,
        explanation: "Q = It = 3 × 20 = 60 C.",
        guideRef: "Current, charge and potential difference",
        difficulty: "core",
        hints: ["Which equation links charge, current and time?", "Q = I × t.", "Multiply 3 A by 20 s."],
        strategy: "Rearrange before substituting",
      },
      {
        id: "ce-mcq-q05",
        question: "A potential difference of 1 volt means that…",
        options: ["1 coulomb flows each second", "1 joule is transferred per coulomb of charge", "the resistance is 1 ohm", "1 watt of power is produced"],
        answerIndex: 1,
        explanation: "V = W/Q, so 1 V = 1 J/C: one joule transferred for every coulomb passing.",
        guideRef: "Current, charge and potential difference",
        difficulty: "core",
        hints: ["Look at the equation V = W/Q.", "What are the units of W and Q?", "1 V = 1 J ÷ 1 C."],
      },
      {
        id: "ce-mcq-q06",
        question: "How much energy is transferred when 5 C of charge moves through a p.d. of 12 V?",
        options: ["2.4 J", "17 J", "60 J", "0.42 J"],
        answerIndex: 2,
        explanation: "W = QV = 5 × 12 = 60 J.",
        guideRef: "Current, charge and potential difference",
        difficulty: "core",
        hints: ["Energy from charge and voltage: W = QV.", "Multiply charge by p.d.", "5 × 12."],
        strategy: "List knowns with units first",
      },
      {
        id: "ce-mcq-q07",
        question: "In a metal wire, conventional current and the actual electron flow…",
        options: ["are in the same direction", "are in opposite directions", "are always at right angles", "never occur together"],
        answerIndex: 1,
        explanation: "Conventional current is defined from + to −, but electrons (negative) actually drift from − to +, so the two are opposite.",
        guideRef: "Current, charge and potential difference",
        difficulty: "core",
        hints: ["Which way is conventional current defined to flow?", "Which charge actually moves in a metal, and what sign is it?", "Negative electrons go the opposite way to conventional current."],
      },
      {
        id: "ce-mcq-q08",
        question: "The unit of resistance is the…",
        options: ["ampere", "ohm", "joule", "coulomb"],
        answerIndex: 1,
        explanation: "Resistance is measured in ohms (Ω).",
        guideRef: "Resistance and Ohm's law",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q09",
        question: "A 12 V supply drives a current of 0.5 A through a resistor. What is its resistance?",
        options: ["6 Ω", "24 Ω", "0.04 Ω", "12.5 Ω"],
        answerIndex: 1,
        explanation: "R = V/I = 12 ÷ 0.5 = 24 Ω.",
        guideRef: "Resistance and Ohm's law",
        difficulty: "core",
        hints: ["Rearrange V = IR for R.", "R = V ÷ I.", "12 ÷ 0.5 = 24."],
        strategy: "Rearrange before substituting",
      },
      {
        id: "ce-mcq-q10",
        question: "A wire is replaced by a longer wire of the same metal and thickness. Its resistance will…",
        options: ["decrease", "stay exactly the same", "increase", "fall to zero"],
        answerIndex: 2,
        explanation: "Resistance is proportional to length, so a longer wire has greater resistance.",
        guideRef: "Resistance and Ohm's law",
        difficulty: "core",
        hints: ["How does resistance depend on length?", "More length means more collisions for the electrons.", "Longer wire → more resistance."],
      },
      {
        id: "ce-mcq-q11",
        question: "Which I–V graph belongs to a fixed resistor at constant temperature?",
        options: ["A straight line through the origin", "An S-shaped curve that flattens", "A line that only rises one way", "A horizontal straight line"],
        answerIndex: 0,
        explanation: "An ohmic resistor gives a straight line through the origin: I is proportional to V, so resistance is constant.",
        guideRef: "I–V graphs, LDRs and thermistors",
        difficulty: "core",
        hints: ["Ohm's law says I ∝ V for a fixed resistor.", "What shape is a proportional relationship?", "Straight line through (0,0)."],
      },
      {
        id: "ce-mcq-q12",
        question: "Why does the I–V graph of a filament lamp curve and become shallower at higher voltage?",
        options: ["The lamp runs out of charge", "The filament cools down", "The filament heats up, increasing its resistance", "The voltmeter becomes inaccurate"],
        answerIndex: 2,
        explanation: "Higher current heats the filament; its resistance rises, so current increases less steeply — the curve flattens.",
        guideRef: "I–V graphs, LDRs and thermistors",
        difficulty: "core",
        hints: ["What happens to the filament's temperature as current rises?", "How does temperature affect resistance in a metal?", "Higher resistance → smaller increase in current."],
        strategy: "Match the curve to the physics",
      },
      {
        id: "ce-mcq-q13",
        question: "A component lets current flow in one direction only. It is a…",
        options: ["resistor", "diode", "thermistor", "LDR"],
        answerIndex: 1,
        explanation: "A diode conducts in the forward direction and blocks current in reverse.",
        guideRef: "I–V graphs, LDRs and thermistors",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q14",
        question: "As the light shining on an LDR gets brighter, its resistance…",
        options: ["increases", "decreases", "stays the same", "becomes infinite"],
        answerIndex: 1,
        explanation: "An LDR's resistance falls as light intensity increases.",
        guideRef: "I–V graphs, LDRs and thermistors",
        difficulty: "core",
        hints: ["LDR = light-dependent resistor.", "More light → easier flow.", "Resistance goes down."],
      },
      {
        id: "ce-mcq-q15",
        question: "A thermistor is used in a circuit so that the resistance falls as it gets warmer. As the temperature of the thermistor rises, its resistance…",
        options: ["increases", "decreases", "stays constant", "always reaches infinity"],
        answerIndex: 1,
        explanation: "A thermistor's resistance decreases as temperature increases, which is why it is useful in temperature sensors.",
        guideRef: "I–V graphs, LDRs and thermistors",
        difficulty: "core",
        hints: ["What does a thermistor respond to?", "Hotter thermistor → ? resistance.", "Resistance falls as it warms up."],
      },
      {
        id: "ce-mcq-q16",
        question: "In a series circuit, the current…",
        options: ["is largest near the battery", "splits between components", "is the same at every point", "is zero in the middle"],
        answerIndex: 2,
        explanation: "In a single series loop the same current flows through every component.",
        guideRef: "Series and parallel circuits",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q17",
        question: "Two resistors, 4 Ω and 6 Ω, are connected in series. The total resistance is…",
        options: ["2.4 Ω", "10 Ω", "5 Ω", "24 Ω"],
        answerIndex: 1,
        explanation: "Series resistances add: R_total = 4 + 6 = 10 Ω.",
        guideRef: "Series and parallel circuits",
        difficulty: "core",
        hints: ["What is the rule for resistors in series?", "They simply add.", "4 + 6 = 10."],
        strategy: "Apply the matching circuit rule",
      },
      {
        id: "ce-mcq-q18",
        question: "In a parallel circuit, each branch has the same…",
        options: ["current", "resistance", "potential difference", "charge stored"],
        answerIndex: 2,
        explanation: "Components in parallel all have the same p.d. across them (equal to the supply).",
        guideRef: "Series and parallel circuits",
        difficulty: "core",
        hints: ["What is shared across parallel branches?", "Think about how household appliances all get full mains voltage.", "It's the p.d."],
      },
      {
        id: "ce-mcq-q19",
        question: "A 6 V battery is connected to two identical lamps in series, sharing the voltage equally. The p.d. across each lamp is…",
        options: ["6 V", "12 V", "3 V", "1.5 V"],
        answerIndex: 2,
        explanation: "In series the supply p.d. is shared, so each identical lamp gets 6 ÷ 2 = 3 V.",
        guideRef: "Series and parallel circuits",
        difficulty: "core",
        hints: ["How is p.d. distributed in series?", "Two identical lamps share equally.", "6 ÷ 2."],
      },
      {
        id: "ce-mcq-q20",
        question: "Two resistors are connected in parallel. Compared with the smaller individual resistance, the total resistance is…",
        options: ["greater", "the same", "less", "exactly the average"],
        answerIndex: 2,
        explanation: "Adding parallel paths gives charge more routes, so the total resistance is less than the smallest branch.",
        guideRef: "Series and parallel circuits",
        difficulty: "core",
        hints: ["Does adding a branch make it easier or harder for charge to flow?", "More paths → less opposition.", "Total R is below the smallest single resistor."],
        strategy: "Reason from charge flow, not just formulas",
      },
      {
        id: "ce-mcq-q21",
        question: "On a cell symbol (a long thin line next to a short thick line), which statement is correct?",
        options: ["Long line = negative", "Short thick line = positive", "Long thin line = positive terminal", "Both lines mean the same"],
        answerIndex: 2,
        explanation: "On a cell symbol the long thin line is the positive (+) terminal and the short thick line is negative (−).",
        guideRef: "Circuit symbols",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q22",
        question: "Which circuit symbol is a rectangle with an arrow drawn through it?",
        options: ["A fixed resistor", "A variable resistor", "A fuse", "A thermistor"],
        answerIndex: 1,
        explanation: "A variable resistor (rheostat) is a rectangle with an arrow through it, showing its resistance can be changed.",
        guideRef: "Circuit symbols",
        difficulty: "core",
        hints: ["The arrow shows something can be adjusted.", "A plain rectangle is the fixed resistor.", "An arrow through it means variable."],
      },
      {
        id: "ce-mcq-q23",
        question: "Which symbol is a circle containing the letter M?",
        options: ["A motor", "An ammeter", "A meter for mass", "A heater"],
        answerIndex: 0,
        explanation: "A motor is shown as a circle with 'M' inside; it converts electrical energy to kinetic energy.",
        guideRef: "Circuit symbols",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q24",
        question: "Electrical power can be calculated using…",
        options: ["P = V/I", "P = IV", "P = I/V", "P = Q/t"],
        answerIndex: 1,
        explanation: "Power P = IV (also P = I²R and P = V²/R).",
        guideRef: "Electrical power and energy",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q25",
        question: "A device draws 2 A from a 230 V supply. Its power is…",
        options: ["115 W", "232 W", "460 W", "0.0087 W"],
        answerIndex: 2,
        explanation: "P = IV = 2 × 230 = 460 W.",
        guideRef: "Electrical power and energy",
        difficulty: "core",
        hints: ["Use P = IV.", "Multiply current by voltage.", "2 × 230 = 460."],
        strategy: "Check units: A × V = W",
      },
      {
        id: "ce-mcq-q26",
        question: "A 3 A current flows through a 5 Ω resistor. The power dissipated is…",
        options: ["15 W", "45 W", "0.6 W", "1.67 W"],
        answerIndex: 1,
        explanation: "P = I²R = 3² × 5 = 9 × 5 = 45 W.",
        guideRef: "Electrical power and energy",
        difficulty: "core",
        hints: ["Which power formula uses current and resistance?", "P = I²R.", "Square the current first: 3² = 9, then × 5."],
        strategy: "Pick the formula matching your knowns",
      },
      {
        id: "ce-mcq-q27",
        question: "A 12 V supply is across a 6 Ω resistor. Using P = V²/R, the power dissipated is…",
        options: ["2 W", "24 W", "72 W", "0.5 W"],
        answerIndex: 1,
        explanation: "P = V²/R = 12² ÷ 6 = 144 ÷ 6 = 24 W.",
        guideRef: "Electrical power and energy",
        difficulty: "core",
        hints: ["Use P = V²/R.", "Square the voltage first: 12² = 144.", "144 ÷ 6 = 24."],
        strategy: "Pick the formula matching your knowns",
      },
      {
        id: "ce-mcq-q28",
        question: "How much energy (in joules) does a 60 W lamp transfer in 5 minutes?",
        options: ["300 J", "3 000 J", "18 000 J", "12 J"],
        answerIndex: 2,
        explanation: "E = Pt; t = 5 × 60 = 300 s, so E = 60 × 300 = 18 000 J.",
        guideRef: "Electrical power and energy",
        difficulty: "core",
        hints: ["Energy = power × time.", "Convert 5 minutes to seconds first (300 s).", "60 × 300 = 18 000."],
        strategy: "Convert minutes to seconds before substituting",
      },
      {
        id: "ce-mcq-q29",
        question: "One kilowatt-hour (kWh) is best described as…",
        options: ["a unit of power equal to 1000 W", "the energy used by a 1 kW appliance in 1 hour", "the current drawn by a 1 kW appliance", "the cost of running an appliance for an hour"],
        answerIndex: 1,
        explanation: "A kWh is a unit of energy: the energy transferred by a 1 kW appliance running for 1 hour.",
        guideRef: "The kilowatt-hour and the cost of electricity",
        difficulty: "core",
        hints: ["Is the kWh a unit of power or energy?", "Energy = power × time.", "1 kW for 1 hour = 1 kWh."],
      },
      {
        id: "ce-mcq-q30",
        question: "A 2 kW heater runs for 3 hours. At 25p per kWh, the cost is…",
        options: ["£0.50", "£1.50", "£6.00", "£150"],
        answerIndex: 1,
        explanation: "Energy = 2 kW × 3 h = 6 kWh; cost = 6 × 25p = 150p = £1.50.",
        guideRef: "The kilowatt-hour and the cost of electricity",
        difficulty: "challenge",
        hints: ["Energy (kWh) = power (kW) × time (h).", "6 kWh used.", "Multiply 6 by 25p, then convert to pounds."],
        strategy: "Find kWh first, then multiply by price",
      },
      {
        id: "ce-mcq-q31",
        question: "UK mains electricity is supplied as…",
        options: ["d.c. at 12 V", "a.c. at about 230 V", "d.c. at 230 V", "a.c. at 50 V"],
        answerIndex: 1,
        explanation: "UK mains is alternating current (a.c.) at about 230 V and 50 Hz.",
        guideRef: "Mains electricity and safety",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q32",
        question: "Which best describes alternating current (a.c.)?",
        options: ["Current that flows in one direction only", "Current that repeatedly reverses direction", "Current that never changes size", "Current that only flows in metals"],
        answerIndex: 1,
        explanation: "a.c. repeatedly reverses direction (UK mains 50 times per second); d.c. flows one way only.",
        guideRef: "Mains electricity and safety",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q33",
        question: "In a UK three-pin plug, the fuse is connected in the…",
        options: ["neutral wire", "earth wire", "live wire", "casing"],
        answerIndex: 2,
        explanation: "The fuse is in the live wire so that it cuts off the dangerous live supply when it melts.",
        guideRef: "Mains electricity and safety",
        difficulty: "core",
        hints: ["Which wire is dangerous and must be disconnected in a fault?", "The fuse must break this connection.", "It's the live wire."],
      },
      {
        id: "ce-mcq-q34",
        question: "The colours of the live, neutral and earth wires in a UK plug are, in order…",
        options: ["blue, brown, green/yellow", "brown, blue, green/yellow", "green/yellow, blue, brown", "brown, green/yellow, blue"],
        answerIndex: 1,
        explanation: "Live = brown, Neutral = blue, Earth = green/yellow.",
        guideRef: "Mains electricity and safety",
        difficulty: "core",
        hints: ["Live is the dangerous one.", "Earth is the striped safety wire.", "Brown, blue, green/yellow."],
      },
      {
        id: "ce-mcq-q35",
        question: "A kettle is rated 2300 W on the 230 V mains. The normal operating current is about…",
        options: ["0.1 A", "10 A", "23 A", "100 A"],
        answerIndex: 1,
        explanation: "I = P/V = 2300 ÷ 230 = 10 A, so a 13 A fuse would be suitable.",
        guideRef: "Mains electricity and safety",
        difficulty: "challenge",
        hints: ["Rearrange P = IV for current.", "I = P ÷ V.", "2300 ÷ 230 = 10."],
        strategy: "Rearrange then choose the fuse above the answer",
      },
      {
        id: "ce-mcq-q36",
        question: "A lamp draws 0.8 A on the 230 V mains. Fuses available are 1 A, 3 A and 13 A. The best fuse is…",
        options: ["1 A", "3 A", "13 A", "no fuse is needed"],
        answerIndex: 1,
        explanation: "Choose the smallest standard fuse above the normal current (0.8 A). A 1 A fuse is too close and may blow with surges; the 3 A fuse is the appropriate standard choice.",
        guideRef: "Mains electricity and safety",
        difficulty: "challenge",
        hints: ["Find the operating current (already given, 0.8 A).", "Pick the next standard fuse safely above it.", "3 A is the usual choice for low-power appliances."],
        strategy: "Pick the next standard fuse above the operating current",
      },
      {
        id: "ce-mcq-q37",
        question: "Why does an appliance with a fully plastic, double-insulated casing not need an earth wire?",
        options: [
          "Plastic conducts electricity safely to ground",
          "There is no exposed metal that could become live",
          "Double insulation increases the current",
          "The fuse replaces the need for any casing",
        ],
        answerIndex: 1,
        explanation: "With no exposed metal parts, a live fault cannot make the case live, so an earth wire is unnecessary.",
        guideRef: "Mains electricity and safety",
        difficulty: "challenge",
        hints: ["What is the earth wire there to protect?", "It stops a metal case staying live.", "If there is no conducting case, that risk is removed."],
        strategy: "Identify what the safety feature protects against",
      },
      {
        id: "ce-mcq-q38",
        question: "Two 12 Ω resistors are wired in series across a 12 V battery; the same two are then wired in parallel across the same battery. Compared with the series arrangement, the parallel arrangement draws…",
        options: ["one quarter of the current", "the same current", "four times the current", "twice the current"],
        answerIndex: 2,
        explanation: "Series R = 24 Ω → I = 12/24 = 0.5 A. Parallel R = 6 Ω → I = 12/6 = 2 A. That is 4× the current.",
        guideRef: "Series and parallel circuits",
        difficulty: "challenge",
        hints: ["Find total R for each arrangement.", "Series adds (24 Ω); parallel of two equal Rs is half one (6 Ω).", "Compare I = V/R: 0.5 A vs 2 A."],
        strategy: "Compute both totals, then compare with V = IR",
      },
      {
        id: "ce-mcq-q39",
        question: "A plastic rod becomes negatively charged when rubbed with a cloth. This is because…",
        options: ["protons moved from the cloth to the rod", "electrons moved from the cloth to the rod", "electrons moved from the rod to the cloth", "the rod gained extra neutrons"],
        answerIndex: 1,
        explanation: "Only electrons move. The rod gains electrons from the cloth, so it becomes negative (and the cloth becomes positive).",
        guideRef: "Static electricity",
        difficulty: "core",
        hints: ["Which particles can be transferred by rubbing?", "Negative charge means a gain of which particle?", "Electrons moved onto the rod."],
        strategy: "Explain charging by which way electrons move",
      },
      {
        id: "ce-mcq-q40",
        question: "Two objects carry like charges (both negative). The force between them is…",
        options: ["attraction", "repulsion", "zero", "first attraction, then repulsion"],
        answerIndex: 1,
        explanation: "Like charges repel; unlike charges attract. Two negatives repel each other.",
        guideRef: "Static electricity",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q41",
        question: "Before a fuel tanker fills an aircraft, it is connected to earth. This is mainly to…",
        options: ["increase the flow rate of the fuel", "let static charge flow away so no spark can ignite the fuel", "charge up the aircraft for take-off", "measure the amount of fuel transferred"],
        answerIndex: 1,
        explanation: "Earthing lets any static charge built up by the flowing fuel flow safely away, preventing a spark that could ignite the fuel vapour.",
        guideRef: "Static electricity",
        difficulty: "challenge",
        hints: ["What danger does static cause near fuel?", "Earthing provides a path for charge.", "It discharges safely so no spark forms."],
        strategy: "Link static dangers to sparks and earthing",
      },
      {
        id: "ce-mcq-q42",
        question: "In electrostatic spray painting, the paint droplets are all given the same charge. This helps because the droplets…",
        options: ["stick together into large blobs", "repel each other and spread into an even mist", "lose their charge instantly", "are attracted to each other"],
        answerIndex: 1,
        explanation: "Like-charged droplets repel one another, spreading into a fine even mist, and are attracted to the oppositely-charged (earthed) object for an even coat.",
        guideRef: "Static electricity",
        difficulty: "core",
        hints: ["What do like charges do to each other?", "Same charge means mutual repulsion.", "They spread out evenly."],
      },
    ],
    qa: [
      {
        id: "ce-qa-q01",
        question: "Define electric current and state the equation linking current, charge and time, including units. (3 marks)",
        marks: 3,
        modelAnswer:
          "Electric current is the rate of flow of electric charge. It is given by I = Q/t, where I is the current in amperes (A), Q is the charge in coulombs (C) and t is the time in seconds (s).",
        markScheme: [
          "Current is the rate of flow of (electric) charge",
          "I = Q/t | current = charge ÷ time",
          "Correct units: amperes (A), coulombs (C), seconds (s)",
        ],
        commonError: "Confusing current with charge, or giving the unit of current as coulombs instead of amperes.",
        guideRef: "Current, charge and potential difference",
        difficulty: "core",
        hints: ["What is 'flowing' in a wire?", "Rate means 'per unit time'.", "Give the symbol equation and all three units."],
      },
      {
        id: "ce-qa-q02",
        question: "A charge of 240 C flows through a lamp in 2 minutes. Calculate the current. (3 marks)",
        marks: 3,
        modelAnswer:
          "Convert the time: 2 minutes = 120 s. Current I = Q/t = 240 ÷ 120 = 2 A.",
        markScheme: [
          "Time converted to seconds: 120 s",
          "I = Q/t used | substitution 240 ÷ 120",
          "Current = 2 A (with unit)",
        ],
        commonError: "Forgetting to convert minutes to seconds (using t = 2 gives 120 A, which is far too large).",
        guideRef: "Current, charge and potential difference",
        difficulty: "core",
        hints: ["What must you do with the time first?", "Use I = Q/t.", "240 ÷ 120."],
        solutions: [
          {
            label: "Method: I = Q/t",
            steps: [
              "Convert: t = 2 min × 60 = 120 s.",
              "Apply I = Q/t.",
              "I = 240 ÷ 120 = 2 A.",
            ],
          },
        ],
      },
      {
        id: "ce-qa-q03",
        question: "Explain the difference between conventional current and electron flow, and state the direction of each around a circuit. (3 marks)",
        marks: 3,
        modelAnswer:
          "Conventional current is the agreed direction of current, taken to flow from the positive terminal of the supply, round the circuit, to the negative terminal. In a metal the charge carriers are actually electrons, which are negative and drift in the opposite direction — from the negative terminal to the positive terminal. So conventional current and electron flow are in opposite directions.",
        markScheme: [
          "Conventional current flows from + to − (positive to negative)",
          "Electrons (negative charge carriers) flow from − to + (negative to positive)",
          "The two directions are opposite to each other",
        ],
        commonError: "Saying electrons flow from + to − (that is conventional current, not the actual electron movement).",
        guideRef: "Current, charge and potential difference",
        difficulty: "core",
        hints: ["Define the agreed (conventional) direction first.", "What sign of charge actually moves in a metal?", "State that the two are opposite."],
      },
      {
        id: "ce-qa-q04",
        question: "A resistor has a potential difference of 9 V across it and a current of 0.3 A through it. Calculate (a) its resistance and (b) the power it dissipates. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) R = V/I = 9 ÷ 0.3 = 30 Ω. (b) Power P = IV = 0.3 × 9 = 2.7 W (or P = I²R = 0.3² × 30 = 0.09 × 30 = 2.7 W).",
        markScheme: [
          "R = V/I used",
          "Resistance = 30 Ω",
          "Power using P = IV or P = I²R",
          "Power = 2.7 W (with unit)",
        ],
        commonError: "Dividing the wrong way (0.3 ÷ 9) for resistance, or forgetting to square I in P = I²R.",
        guideRef: "Electrical power and energy",
        difficulty: "core",
        hints: ["Part (a): rearrange V = IR for R.", "Part (b): you can use P = IV directly.", "Check with P = I²R as a second method."],
        solutions: [
          {
            label: "Method 1: P = IV",
            steps: [
              "R = V/I = 9 ÷ 0.3 = 30 Ω.",
              "P = IV = 0.3 × 9 = 2.7 W.",
            ],
          },
          {
            label: "Method 2: P = I²R (cross-check)",
            steps: [
              "R = 30 Ω from part (a).",
              "P = I²R = 0.3² × 30 = 0.09 × 30 = 2.7 W — same answer.",
            ],
          },
        ],
      },
      {
        id: "ce-qa-q05",
        question: "Explain the difference between a series and a parallel circuit in terms of current and potential difference. (4 marks)",
        marks: 4,
        modelAnswer:
          "In a series circuit there is a single loop, so the current is the same at every point, and the supply p.d. is shared between the components (the component p.d.s add up to the supply p.d.). In a parallel circuit components are on separate branches, so each branch has the same p.d. (equal to the supply), and the branch currents add together to give the total current from the supply.",
        markScheme: [
          "Series: current is the same everywhere",
          "Series: supply p.d. is shared between components",
          "Parallel: same p.d. across each branch",
          "Parallel: branch currents add to the total | currents split between branches",
        ],
        commonError: "Mixing the rules up — saying current is shared in series (it is the p.d. that is shared) or p.d. adds in parallel.",
        guideRef: "Series and parallel circuits",
        difficulty: "core",
        hints: ["Treat series and parallel separately.", "For each, state what happens to current and to p.d.", "Series shares voltage; parallel shares current."],
      },
      {
        id: "ce-qa-q06",
        question: "Two resistors, 3 Ω and 6 Ω, are connected in series to a 9 V battery. Calculate (a) the total resistance, (b) the current in the circuit, and (c) the p.d. across the 6 Ω resistor. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) Series resistances add: R_total = 3 + 6 = 9 Ω. (b) Current I = V/R = 9 ÷ 9 = 1 A (same throughout a series circuit). (c) p.d. across the 6 Ω resistor: V = IR = 1 × 6 = 6 V.",
        markScheme: [
          "R_total = 3 + 6 = 9 Ω",
          "I = V/R = 9 ÷ 9 = 1 A",
          "V = IR for the 6 Ω resistor",
          "p.d. = 6 V (with unit)",
        ],
        commonError: "Using the full 9 V across each resistor instead of finding the current first and sharing the p.d.",
        guideRef: "Series and parallel circuits",
        difficulty: "core",
        hints: ["Add the resistances for the total.", "Find the current using the whole circuit: I = V/R_total.", "The current is the same through the 6 Ω, so V = IR."],
        solutions: [
          {
            label: "Method: total R → current → component p.d.",
            steps: [
              "R_total = 3 + 6 = 9 Ω.",
              "I = V/R_total = 9 ÷ 9 = 1 A.",
              "V across 6 Ω = I × R = 1 × 6 = 6 V (and across 3 Ω = 1 × 3 = 3 V; they add to 9 V).",
            ],
          },
        ],
      },
      {
        id: "ce-qa-q07",
        question: "Describe the shape of the I–V graph for a filament lamp and explain why it has that shape. (4 marks)",
        marks: 4,
        modelAnswer:
          "The graph is an S-shaped curve that passes through the origin and becomes shallower (flatter) as the voltage increases. As the current through the filament increases, the filament gets hotter. In a metal, higher temperature increases resistance because the metal ions vibrate more and the electrons collide with them more often. The increased resistance means the current rises less steeply than the voltage, so the line curves rather than staying straight.",
        markScheme: [
          "Curve through the origin that flattens at higher voltage | not a straight line",
          "Filament heats up as current increases",
          "Higher temperature increases resistance (more ion vibration/collisions)",
          "So current increases less for each extra volt → curve",
        ],
        commonError: "Saying the lamp 'breaks Ohm's law for no reason' — the cause is the temperature rise of the filament.",
        guideRef: "I–V graphs, LDRs and thermistors",
        difficulty: "core",
        hints: ["First describe the line shape.", "What physically changes in the filament as current rises?", "Link temperature to resistance to the slope."],
      },
      {
        id: "ce-qa-q08",
        question: "Describe how an LDR could be used in a circuit to switch on an outdoor lamp automatically when it gets dark. (3 marks)",
        marks: 3,
        modelAnswer:
          "An LDR's resistance is high in the dark and low in bright light. The LDR is placed in a sensing (potential divider) circuit. When it gets dark, the LDR's resistance rises, so it takes a larger share of the p.d. This larger voltage is used to switch on the lamp (e.g. via a transistor or relay). When daylight returns, the LDR's resistance falls, its share of the voltage drops, and the lamp switches off.",
        markScheme: [
          "LDR resistance is high in the dark / low in light",
          "LDR used in a sensing / potential divider circuit",
          "In the dark the LDR's voltage (share of p.d.) rises and switches the lamp on | reverse in light switches it off",
        ],
        commonError: "Saying the LDR itself 'lights up' — it only controls the voltage that switches another component.",
        guideRef: "I–V graphs, LDRs and thermistors",
        difficulty: "core",
        hints: ["State how the LDR's resistance changes with light.", "Put it in a circuit that shares the voltage.", "Explain how the changing voltage switches the lamp."],
      },
      {
        id: "ce-qa-q09",
        question: "An electric heater is rated 1500 W and runs on the 230 V mains. Calculate (a) the current it draws, and (b) the energy it transfers in 10 minutes. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) I = P/V = 1500 ÷ 230 = 6.52 A (to 3 s.f.). (b) Time = 10 × 60 = 600 s. Energy E = Pt = 1500 × 600 = 900 000 J = 900 kJ. (Equivalently E = IVt = 6.52 × 230 × 600 ≈ 900 000 J.)",
        markScheme: [
          "I = P/V used",
          "Current ≈ 6.5 A (6.52 A)",
          "Time converted to 600 s",
          "Energy E = Pt = 900 000 J | 900 kJ",
        ],
        commonError: "Leaving time in minutes (1500 × 10 = 15 000 J is wrong) or forgetting to convert units correctly.",
        guideRef: "Electrical power and energy",
        difficulty: "core",
        hints: ["Part (a): rearrange P = IV for I.", "Convert 10 minutes to seconds for part (b).", "Energy = power × time."],
        solutions: [
          {
            label: "Method 1: E = Pt",
            steps: [
              "I = P/V = 1500 ÷ 230 ≈ 6.52 A.",
              "t = 10 × 60 = 600 s.",
              "E = Pt = 1500 × 600 = 900 000 J (900 kJ).",
            ],
          },
          {
            label: "Method 2: E = IVt (cross-check)",
            steps: [
              "Using I ≈ 6.52 A, V = 230 V, t = 600 s.",
              "E = IVt = 6.52 × 230 × 600 ≈ 900 000 J — same answer.",
            ],
          },
        ],
      },
      {
        id: "ce-qa-q10",
        question: "A 3 kW immersion heater is used for 2 hours each day. Electricity costs 28p per kWh. Calculate (a) the energy used in one day in kWh, and (b) the cost of running it for one day. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) Energy = power (kW) × time (h) = 3 × 2 = 6 kWh. (b) Cost = energy (kWh) × price = 6 × 28p = 168p = £1.68.",
        markScheme: [
          "Energy = power (kW) × time (h)",
          "Energy = 6 kWh",
          "Cost = energy × price per kWh | 6 × 28p",
          "Cost = 168p = £1.68",
        ],
        commonError: "Converting power to watts and time to seconds (giving joules) instead of using kW and hours for kWh, or forgetting to convert pence to pounds.",
        guideRef: "The kilowatt-hour and the cost of electricity",
        difficulty: "core",
        hints: ["Keep power in kW and time in hours.", "Energy in kWh = power × time.", "Cost = energy × price per unit."],
        solutions: [
          {
            label: "Method: kWh then cost",
            steps: [
              "Energy = 3 kW × 2 h = 6 kWh.",
              "Cost = 6 kWh × 28p = 168p.",
              "Convert: 168p = £1.68.",
            ],
          },
        ],
      },
      {
        id: "ce-qa-q11",
        question: "Describe the function of the live, neutral and earth wires in a three-pin plug, and explain how the fuse and earthing work together to keep the user safe if a fault makes the metal case live. (5 marks)",
        marks: 5,
        modelAnswer:
          "The live wire (brown) carries the alternating p.d. from the supply and is the dangerous one. The neutral wire (blue) completes the circuit and stays at about 0 V. The earth wire (green/yellow) is a safety wire connected to the metal case. If a fault connects the live wire to the metal case, the earth wire provides a low-resistance path so a very large current flows to earth. This large current melts the fuse (which is in the live wire), breaking the circuit and disconnecting the live supply. The case can therefore no longer become live, protecting the user from electric shock.",
        markScheme: [
          "Live carries the supply p.d. (dangerous) | brown",
          "Neutral completes the circuit at ~0 V | blue",
          "Earth connected to the metal case as a safety wire | green/yellow",
          "Fault → large current flows through earth | low-resistance path to earth",
          "Large current melts the fuse (in the live), cutting the supply so the case is not live",
        ],
        commonError: "Saying the earth wire 'carries the normal current' — it normally carries none; it only carries current during a fault.",
        guideRef: "Mains electricity and safety",
        difficulty: "challenge",
        hints: ["State each wire's normal job first.", "What happens to the current if the live touches the case?", "How does that current trigger the fuse?"],
      },
      {
        id: "ce-qa-q12",
        question: "A 2.0 kW kettle is connected to the 230 V mains. (a) Calculate its operating current. (b) Fuses are available rated at 3 A, 5 A and 13 A. State which fuse should be fitted and justify your choice. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) I = P/V = 2000 ÷ 230 = 8.7 A (to 2 s.f.). (b) The fuse must be rated just above the normal operating current. The 3 A and 5 A fuses would melt during normal use (current 8.7 A > 5 A), so the 13 A fuse should be fitted — it is the smallest available fuse that is safely above 8.7 A.",
        markScheme: [
          "I = P/V = 2000 ÷ 230",
          "Current ≈ 8.7 A",
          "Fuse must be rated just above normal current",
          "Choose 13 A fuse (3 A and 5 A would blow in normal use)",
        ],
        commonError: "Choosing the 5 A fuse because it is 'close', not noticing 8.7 A already exceeds it, so it would blow immediately.",
        guideRef: "Mains electricity and safety",
        difficulty: "challenge",
        hints: ["Find the normal current with I = P/V.", "A fuse must be just above the normal current.", "Compare 8.7 A with 3 A, 5 A and 13 A."],
        solutions: [
          {
            label: "Method: current then fuse choice",
            steps: [
              "Convert: P = 2.0 kW = 2000 W.",
              "I = P/V = 2000 ÷ 230 ≈ 8.7 A.",
              "Pick the smallest standard fuse above 8.7 A → 13 A.",
            ],
          },
        ],
      },
      {
        id: "ce-qa-q13",
        question: "A torch bulb transfers 360 J of energy when 30 C of charge passes through it. (a) Calculate the p.d. across the bulb. (b) If this took 60 s, calculate the current and the power. (5 marks)",
        marks: 5,
        modelAnswer:
          "(a) V = W/Q = 360 ÷ 30 = 12 V. (b) Current I = Q/t = 30 ÷ 60 = 0.5 A. Power P = IV = 0.5 × 12 = 6 W (check: P = E/t = 360 ÷ 60 = 6 W).",
        markScheme: [
          "V = W/Q = 360 ÷ 30 = 12 V",
          "I = Q/t = 30 ÷ 60 = 0.5 A",
          "P = IV used",
          "Power = 6 W (with unit)",
          "Valid check: P = E/t = 360 ÷ 60 = 6 W",
        ],
        commonError: "Mixing up energy and charge in V = W/Q, or using time in the voltage equation.",
        guideRef: "Current, charge and potential difference",
        difficulty: "challenge",
        hints: ["Part (a): voltage is energy per charge, V = W/Q.", "Part (b): current is charge per time, I = Q/t.", "Power can be checked two ways: P = IV and P = E/t."],
        solutions: [
          {
            label: "Method 1: P = IV",
            steps: [
              "V = W/Q = 360 ÷ 30 = 12 V.",
              "I = Q/t = 30 ÷ 60 = 0.5 A.",
              "P = IV = 0.5 × 12 = 6 W.",
            ],
          },
          {
            label: "Method 2: P = E/t (cross-check)",
            steps: [
              "Energy E = 360 J, time t = 60 s.",
              "P = E/t = 360 ÷ 60 = 6 W — same answer.",
            ],
          },
        ],
      },
      {
        id: "ce-qa-q14",
        question: "Explain why most household appliances are connected in parallel rather than in series. (3 marks)",
        marks: 3,
        modelAnswer:
          "In parallel each appliance receives the full mains p.d. (about 230 V), so it operates correctly. Each appliance can be switched on and off independently without affecting the others. Also, if one appliance fails or is switched off, the others keep working because each is on its own branch — whereas in series one break would stop everything.",
        markScheme: [
          "Each appliance gets the full (mains) p.d.",
          "Appliances can be switched on/off independently",
          "If one fails/is off the others still work | a break in one branch does not stop the rest",
        ],
        commonError: "Saying parallel 'saves electricity' — the real reasons are equal full voltage and independent operation.",
        guideRef: "Series and parallel circuits",
        difficulty: "core",
        hints: ["What voltage does each appliance need?", "What happens to the others if one is switched off?", "Compare with a series chain where one break stops all."],
      },
      {
        id: "ce-qa-q15",
        question: "A 4 Ω resistor and a 4 Ω resistor are connected in parallel across a 12 V battery. (a) Find the current through each resistor. (b) Find the total current from the battery. (c) State the total resistance and comment on how it compares with a single 4 Ω resistor. (5 marks)",
        marks: 5,
        modelAnswer:
          "(a) Each resistor has the full 12 V across it, so current through each = V/R = 12 ÷ 4 = 3 A. (b) Branch currents add: I_total = 3 + 3 = 6 A. (c) Total resistance R = V/I_total = 12 ÷ 6 = 2 Ω. This is less than a single 4 Ω resistor — in fact half of it — because the parallel arrangement gives charge two paths, reducing the overall resistance.",
        markScheme: [
          "Each branch has 12 V → I = V/R = 3 A each",
          "Total current I = 3 + 3 = 6 A",
          "Total resistance R = V/I = 12 ÷ 6 = 2 Ω",
          "2 Ω is less than 4 Ω | half the single resistance",
          "Reason: parallel branches give more paths for charge",
        ],
        commonError: "Adding parallel resistances like series (getting 8 Ω) instead of recognising the total is lower than the smallest branch.",
        guideRef: "Series and parallel circuits",
        difficulty: "challenge",
        hints: ["Each branch sees the full 12 V — find each current with I = V/R.", "Add the branch currents for the total.", "Total R = V ÷ total current; compare with 4 Ω."],
        solutions: [
          {
            label: "Method: branch currents → total current → total R",
            steps: [
              "Each branch: I = V/R = 12 ÷ 4 = 3 A.",
              "Total: I = 3 + 3 = 6 A.",
              "Total R = V/I = 12 ÷ 6 = 2 Ω, which is half of 4 Ω.",
            ],
          },
        ],
      },
      {
        id: "ce-qa-q16",
        question: "Explain how an insulating rod becomes positively charged when it is rubbed with a dry cloth, and state what charge the cloth has afterwards. (3 marks)",
        marks: 3,
        modelAnswer:
          "When the rod is rubbed with the cloth, electrons (which are negatively charged) are transferred by friction from the rod to the cloth. The rod has lost electrons, so it now has more positive charge than negative and is positively charged. The cloth has gained those electrons, so it becomes negatively charged. Only electrons move; the charges on the two objects are equal and opposite.",
        markScheme: [
          "Electrons are transferred by friction/rubbing",
          "Rod loses electrons → becomes positive",
          "Cloth gains electrons → becomes negative | charges equal and opposite",
        ],
        commonError: "Saying protons or positive charges move — only the (negative) electrons are transferred.",
        guideRef: "Static electricity",
        difficulty: "core",
        hints: ["Which particles can move during rubbing?", "Positive means a shortage of which particle?", "State what happens to the cloth too."],
      },
      {
        id: "ce-qa-q17",
        question: "A car body is sprayed using electrostatic spray painting. Explain how giving the paint droplets a charge and earthing the car body produce an even coat with little wasted paint. (4 marks)",
        marks: 4,
        modelAnswer:
          "All the paint droplets are given the same charge, so they repel one another (like charges repel) and spread out into a fine, even mist instead of clumping. The car body is earthed (or given the opposite charge), so the charged droplets are attracted to it (unlike charges attract). Because they are attracted to the metal, the droplets are even pulled around to coat the sides and back of the panels, giving an even coat and wasting very little paint.",
        markScheme: [
          "Droplets given the same charge repel each other → fine even mist",
          "Car body earthed / oppositely charged",
          "Droplets attracted to the body (unlike charges attract)",
          "Even coverage / reaches hidden areas / little paint wasted",
        ],
        commonError: "Forgetting to mention both the repulsion (spreading) and the attraction (to the body).",
        guideRef: "Static electricity",
        difficulty: "challenge",
        hints: ["What do same-charged droplets do to each other?", "Why is the body earthed or oppositely charged?", "Link both effects to even coverage and less waste."],
      },
      {
        id: "ce-qa-q18",
        question: "State what is meant by the kilowatt-hour, and calculate the cost of running a 2000 W washing machine for 90 minutes if electricity costs 30p per kWh. (4 marks)",
        marks: 4,
        modelAnswer:
          "A kilowatt-hour (kWh) is a unit of energy: the energy transferred by a 1 kW appliance running for 1 hour. Power = 2000 W = 2 kW; time = 90 minutes = 1.5 hours. Energy = 2 × 1.5 = 3 kWh. Cost = 3 × 30p = 90p (£0.90).",
        markScheme: [
          "kWh = energy used by a 1 kW appliance in 1 hour",
          "Power = 2 kW and time = 1.5 h (correct conversions)",
          "Energy = 2 × 1.5 = 3 kWh",
          "Cost = 3 × 30p = 90p (£0.90)",
        ],
        commonError: "Leaving time as 90 minutes (should be 1.5 hours) or power as 2000 W (should be 2 kW) before finding kWh.",
        guideRef: "The kilowatt-hour and the cost of electricity",
        difficulty: "core",
        hints: ["Define the kWh as a unit of energy.", "Convert to kW and hours.", "Energy in kWh = power × time, then × price."],
        solutions: [
          {
            label: "Method: convert → kWh → cost",
            steps: [
              "Power = 2000 W = 2 kW; time = 90 min = 1.5 h.",
              "Energy = 2 × 1.5 = 3 kWh.",
              "Cost = 3 × 30p = 90p = £0.90.",
            ],
          },
        ],
      },
    ],
  },
  // questionBank omitted — auto-assembled from the quiz pools by lib/content.ts.
};
