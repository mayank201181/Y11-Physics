import type { Topic } from "../types";

// Current Electricity (Edexcel IGCSE Physics 4PH1, Section 2 — Electricity).
// Calculation-heavy: I = Q/t, V = W/Q, V = IR, P = IV, P = I²R, E = IVt,
// series & parallel rules, I–V graphs, LDR/thermistor, mains & safety.

export const ce: Topic = {
  id: "ce",
  code: "CE",
  number: 4,
  title: "Current Electricity",
  subject: "Physics",
  icon: "⚡",
  color: "#f59e0b",
  intro:
    "Electric current is moving charge, and a circuit is simply a loop that lets that charge flow. In this topic you'll connect three big equations — I = Q/t, V = W/Q and V = IR — then use them to predict currents, voltages, resistances and power in series and parallel circuits, read I–V graphs, and understand how mains electricity is delivered safely to your home.",
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
        "**Electric current** is the rate of flow of electric **charge**. In a metal it is the flow of free electrons; we measure it in **amperes (A)** with an *ammeter connected in series*.\n\n*Current equation:*\n\n`I = Q / t`  →  charge `Q = I × t`\n\nwhere I is current in amperes (A), Q is charge in coulombs (C) and t is time in seconds (s). One amp is one coulomb per second.\n\n**Potential difference (p.d., or voltage)** is the energy transferred per unit charge as charge moves between two points. We measure it in **volts (V)** with a *voltmeter connected in parallel* across a component.\n\n*Potential difference equation:*\n\n`V = W / Q`  →  energy transferred `E = Q × V`\n\nwhere V is in volts (V), W (or E) is energy in joules (J) and Q is charge in coulombs (C). One volt is one joule per coulomb. A p.d. of 1 V means 1 J of energy is transferred for every 1 C of charge passing.",
      keyPoints: [
        "Current = rate of flow of charge; I = Q/t, measured in amperes (A).",
        "1 ampere = 1 coulomb per second.",
        "Ammeter in series; voltmeter in parallel.",
        "p.d. = energy per unit charge; V = W/Q, measured in volts (V).",
        "Energy transferred E = QV (joules).",
      ],
      formulae: ["I = Q / t", "Q = I × t", "V = W / Q", "E = Q × V"],
      whyItWorks:
        "A coulomb is a fixed number of electrons' worth of charge. Counting how many coulombs pass each second (current) and how much energy each coulomb carries (voltage) lets us track energy through any circuit.",
      strategies: ["List your known quantities with units first", "Rearrange the equation before substituting numbers"],
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
        "**Resistance** is the opposition a component gives to the flow of current. It is measured in **ohms (Ω)** and links voltage and current:\n\n`V = I × R`  →  `R = V / I`  →  `I = V / R`\n\nwhere V is in volts (V), I in amperes (A) and R in ohms (Ω).\n\nFor a **fixed (ohmic) resistor at constant temperature**, current is *directly proportional* to voltage — this is **Ohm's law**. Doubling the voltage doubles the current, so R stays constant.\n\nResistance increases when a wire is **longer** or **thinner**, and (for most conductors) when it gets **hotter** — heating makes the metal ions vibrate more, so electrons collide with them more often.",
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
        "Longer or thinner wires have more resistance; heating raises resistance.",
      ],
      formulae: ["V = I × R", "R = V / I", "I = V / R"],
      whyItWorks:
        "Electrons drift through a lattice of vibrating metal ions. Collisions transfer energy and slow the electrons — that opposition is resistance. Anything that increases collisions (more length, higher temperature) increases resistance.",
      strategies: ["Identify which variable is constant", "Use proportional reasoning to check answers"],
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
        "**Series circuit** — components in a single loop:\n\n- **Current is the same** everywhere in the loop.\n- The supply **p.d. is shared** between the components (the individual p.d.s add up to the supply p.d.).\n- **Resistances add**: `R_total = R1 + R2 + R3 …`\n\n**Parallel circuit** — components on separate branches:\n\n- Each branch has the **same p.d.** (equal to the supply).\n- The **branch currents add** to give the total current from the supply: `I_total = I1 + I2 + …`\n- Adding parallel branches gives more paths for charge, so the **total resistance is less** than the smallest single branch.\n\nMost household wiring is **parallel** so each appliance gets the full mains voltage and can be switched on and off independently.",
      diagrams: [
        {
          caption: "Series (one loop) versus parallel (separate branches).",
          svg:
            '<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: series circuit with two lamps in one loop. Right: parallel circuit with two lamps on separate branches">\n<text x="90" y="16" font-size="12" text-anchor="middle" fill="#334155">SERIES</text>\n<path d="M30 40 H150 V130 H30 Z" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="44" y1="34" x2="44" y2="46" stroke="#1e293b" stroke-width="2"/>\n<line x1="52" y1="30" x2="52" y2="50" stroke="#1e293b" stroke-width="3"/>\n<circle cx="100" cy="40" r="11" fill="#fef9c3" stroke="#b45309"/>\n<line x1="92" y1="32" x2="108" y2="48" stroke="#b45309"/>\n<line x1="108" y1="32" x2="92" y2="48" stroke="#b45309"/>\n<circle cx="150" cy="85" r="11" fill="#fef9c3" stroke="#b45309"/>\n<line x1="142" y1="77" x2="158" y2="93" stroke="#b45309"/>\n<line x1="158" y1="77" x2="142" y2="93" stroke="#b45309"/>\n<text x="90" y="150" font-size="9" text-anchor="middle" fill="#334155">same current, p.d. shared</text>\n<text x="270" y="16" font-size="12" text-anchor="middle" fill="#334155">PARALLEL</text>\n<path d="M210 40 H330 M210 130 H330 M210 40 V130 M330 40 V130" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="224" y1="34" x2="224" y2="46" stroke="#1e293b" stroke-width="2"/>\n<line x1="232" y1="30" x2="232" y2="50" stroke="#1e293b" stroke-width="3"/>\n<line x1="270" y1="40" x2="270" y2="130" stroke="#1e293b" stroke-width="2"/>\n<line x1="300" y1="40" x2="300" y2="130" stroke="#1e293b" stroke-width="2"/>\n<circle cx="270" cy="85" r="11" fill="#fef9c3" stroke="#b45309"/>\n<line x1="262" y1="77" x2="278" y2="93" stroke="#b45309"/>\n<line x1="278" y1="77" x2="262" y2="93" stroke="#b45309"/>\n<circle cx="300" cy="85" r="11" fill="#fef9c3" stroke="#b45309"/>\n<line x1="292" y1="77" x2="308" y2="93" stroke="#b45309"/>\n<line x1="308" y1="77" x2="292" y2="93" stroke="#b45309"/>\n<text x="270" y="150" font-size="9" text-anchor="middle" fill="#334155">same p.d., currents add</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Series: same current everywhere; p.d. shares; R_total = R1 + R2 + …",
        "Parallel: same p.d. across each branch; branch currents add.",
        "Parallel total resistance is less than the smallest branch.",
        "Household appliances are wired in parallel.",
      ],
      formulae: ["Series: R_total = R1 + R2 + R3", "Parallel: I_total = I1 + I2 + I3", "Series: V_supply = V1 + V2 + …"],
      whyItWorks:
        "Charge is conserved: it cannot pile up or vanish, so in a single series loop the same number of charges per second pass every point. At a parallel junction the charge simply splits between paths and recombines, so branch currents must add to the total.",
      strategies: ["Decide series or parallel first", "Apply the matching rule (current rule vs voltage rule)", "Work out total resistance, then use V = IR"],
    },
    {
      heading: "Circuit symbols",
      body:
        "You must recognise and draw the standard circuit symbols. The key ones for this topic:\n\n- **Cell** — a long thin line (+) and a short thick line (−). A **battery** is two or more cells.\n- **Switch** — a gap with a hinged lever.\n- **Lamp** — a circle with a cross inside.\n- **Resistor** — a rectangle.\n- **Variable resistor (rheostat)** — a rectangle with an arrow through it.\n- **Ammeter** — a circle with **A**; **voltmeter** — a circle with **V**.\n- **Fuse** — a rectangle with a line through it.\n- **Diode (LED)** — a triangle pointing to a bar.\n- **LDR** (light-dependent resistor) and **thermistor** — resistor symbols in a circle with arrows / a sloped line.",
      diagrams: [
        {
          caption: "Common circuit symbols.",
          svg:
            '<svg viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A chart of common circuit symbols: cell, switch, lamp, resistor, ammeter and diode">\n<rect x="2" y="2" width="356" height="126" fill="#ffffff" stroke="#cbd5e1"/>\n<line x1="20" y1="25" x2="35" y2="25" stroke="#1e293b" stroke-width="2"/>\n<line x1="42" y1="18" x2="42" y2="32" stroke="#1e293b" stroke-width="2"/>\n<line x1="50" y1="12" x2="50" y2="38" stroke="#1e293b" stroke-width="3"/>\n<line x1="57" y1="25" x2="72" y2="25" stroke="#1e293b" stroke-width="2"/>\n<text x="46" y="52" font-size="10" text-anchor="middle" fill="#334155">cell</text>\n<line x1="120" y1="25" x2="135" y2="25" stroke="#1e293b" stroke-width="2"/>\n<line x1="135" y1="25" x2="152" y2="14" stroke="#1e293b" stroke-width="2"/>\n<circle cx="135" cy="25" r="2" fill="#1e293b"/>\n<line x1="155" y1="25" x2="170" y2="25" stroke="#1e293b" stroke-width="2"/>\n<text x="145" y="52" font-size="10" text-anchor="middle" fill="#334155">switch</text>\n<line x1="230" y1="25" x2="248" y2="25" stroke="#1e293b" stroke-width="2"/>\n<circle cx="260" cy="25" r="12" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="251" y1="16" x2="269" y2="34" stroke="#1e293b" stroke-width="2"/>\n<line x1="269" y1="16" x2="251" y2="34" stroke="#1e293b" stroke-width="2"/>\n<line x1="272" y1="25" x2="290" y2="25" stroke="#1e293b" stroke-width="2"/>\n<text x="260" y="52" font-size="10" text-anchor="middle" fill="#334155">lamp</text>\n<line x1="20" y1="95" x2="38" y2="95" stroke="#1e293b" stroke-width="2"/>\n<rect x="38" y="87" width="40" height="16" fill="none" stroke="#1e293b" stroke-width="2"/>\n<line x1="78" y1="95" x2="96" y2="95" stroke="#1e293b" stroke-width="2"/>\n<text x="58" y="118" font-size="10" text-anchor="middle" fill="#334155">resistor</text>\n<line x1="140" y1="95" x2="158" y2="95" stroke="#1e293b" stroke-width="2"/>\n<circle cx="170" cy="95" r="12" fill="none" stroke="#1e293b" stroke-width="2"/>\n<text x="170" y="99" font-size="11" text-anchor="middle" fill="#1e293b">A</text>\n<line x1="182" y1="95" x2="200" y2="95" stroke="#1e293b" stroke-width="2"/>\n<text x="170" y="118" font-size="10" text-anchor="middle" fill="#334155">ammeter</text>\n<line x1="250" y1="95" x2="270" y2="95" stroke="#1e293b" stroke-width="2"/>\n<path d="M270 85 L270 105 L288 95 Z" fill="#1e293b"/>\n<line x1="288" y1="85" x2="288" y2="105" stroke="#1e293b" stroke-width="2"/>\n<line x1="288" y1="95" x2="306" y2="95" stroke="#1e293b" stroke-width="2"/>\n<text x="282" y="118" font-size="10" text-anchor="middle" fill="#334155">diode</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Cell: long line is +, short thick line is −.",
        "Lamp = circle with a cross; resistor = rectangle.",
        "Ammeter = circle 'A' (series); voltmeter = circle 'V' (parallel).",
        "Diode allows current one way only (arrow shows direction).",
      ],
      strategies: ["Learn symbols in pairs (ammeter/voltmeter)", "Sketch the circuit before calculating"],
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
        "An **I–V (current–voltage) graph** shows how current changes as p.d. changes. Its shape reveals the component:\n\n- **Fixed resistor (ohmic):** a **straight line through the origin**. I ∝ V, so resistance is constant. A steeper line means lower resistance.\n- **Filament lamp:** an **S-shaped curve** that gets shallower at higher voltage. The filament heats up, its resistance increases, so current rises less steeply.\n- **Diode:** current flows freely in the **forward direction** above a small turn-on voltage, but is **blocked in reverse** (almost zero current). A diode only lets current pass one way.\n\nResistance at any point on an I–V graph is found from `R = V / I` (read off a V and its I).\n\n**Light-dependent resistor (LDR):** resistance **falls as light gets brighter**. Used in light sensors and automatic street lights.\n\n**Thermistor:** resistance **falls as temperature rises**. Used in temperature sensors and thermostats.",
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
      ],
      formulae: ["R = V / I (read from any point on the graph)"],
      whyItWorks:
        "An I–V graph is a fingerprint of how a component responds. A constant slope means a constant resistance; a changing slope means resistance is changing (with temperature for the lamp, or with direction for the diode).",
      thinkDeeper:
        "An automatic night-light uses an LDR in a circuit. In the dark the LDR's resistance is high, so it takes most of the p.d., switching the lamp on. Can you sketch why bright light switches it off?",
      strategies: ["Read the slope to compare resistances", "Match the curve shape to the component"],
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
        "**Electrical power** is the rate of transferring energy, measured in **watts (W)** (1 W = 1 J/s):\n\n`P = I × V`\n\nCombining with V = IR gives two more useful forms:\n\n`P = I² × R`   and   `P = V² / R`\n\nwhere P is in watts (W), I in amps (A), V in volts (V), R in ohms (Ω).\n\n**Electrical energy** transferred is power × time, or equivalently:\n\n`E = I × V × t`   (and so `E = P × t`)\n\nwhere E is in joules (J) and t in seconds (s).\n\nWhen current flows through a resistance, electrical energy is transferred to **thermal energy** (heating) — this is why wires, kettles and filament lamps get hot. The greater the current and resistance, the greater the heating (P = I²R).",
      keyPoints: [
        "Power P = IV, in watts (W); 1 W = 1 J/s.",
        "Also P = I²R and P = V²/R.",
        "Energy E = IVt = Pt, in joules (J).",
        "Current through resistance heats the component (P = I²R).",
      ],
      formulae: ["P = I × V", "P = I² × R", "P = V² / R", "E = I × V × t", "E = P × t"],
      whyItWorks:
        "Each coulomb carries V joules (from V = E/Q). Multiply by the coulombs per second (the current I) and you get joules per second — power. So P = IV follows directly from the definitions of current and voltage.",
      strategies: ["Pick the power formula that matches your known quantities", "Check units: amps × volts = watts", "Convert kW to W and minutes to seconds before substituting"],
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
        "**Direct current (d.c.)** flows in one direction only (from a cell/battery). **Alternating current (a.c.)** repeatedly reverses direction; UK mains is a.c. at about **230 V and 50 Hz**.\n\nA UK **three-pin plug** has three wires:\n\n- **Live (brown)** — carries the alternating p.d. from the supply; dangerous.\n- **Neutral (blue)** — completes the circuit, near 0 V.\n- **Earth (green/yellow)** — a safety wire connected to the metal case; normally carries no current.\n\n**Safety features:**\n\n- **Fuse** — a thin wire in series with the live that **melts and breaks the circuit** if the current gets too high (e.g. in a fault), cutting the supply. Choose a fuse rated just above the normal operating current.\n- **Earthing** — if a fault connects the live wire to a metal case, a large current flows to earth and blows the fuse, so the case cannot stay live.\n- **Double insulation** — appliances with plastic casing and no exposed metal need no earth wire (marked with a double-square symbol).\n\nNever overload sockets, use damp hands, or touch bare wires — mains current through the body can stop the heart.",
      diagrams: [
        {
          caption: "A correctly wired UK three-pin plug.",
          svg:
            '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A three-pin plug showing earth at top, live on the right with a fuse, and neutral on the left">\n<rect x="30" y="20" width="160" height="150" rx="10" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>\n<rect x="100" y="4" width="20" height="22" fill="#94a3b8" stroke="#334155"/>\n<text x="110" y="40" font-size="10" text-anchor="middle" fill="#15803d">Earth</text>\n<rect x="46" y="40" width="16" height="20" fill="#94a3b8" stroke="#334155"/>\n<rect x="158" y="40" width="16" height="20" fill="#94a3b8" stroke="#334155"/>\n<line x1="110" y1="26" x2="110" y2="120" stroke="#15803d" stroke-width="3"/>\n<line x1="54" y1="60" x2="54" y2="150" stroke="#1d4ed8" stroke-width="3"/>\n<line x1="166" y1="60" x2="166" y2="100" stroke="#7c3f00" stroke-width="3"/>\n<rect x="156" y="100" width="20" height="26" fill="#fde68a" stroke="#7c3f00"/>\n<line x1="166" y1="126" x2="166" y2="150" stroke="#7c3f00" stroke-width="3"/>\n<text x="192" y="116" font-size="9" text-anchor="middle" fill="#7c3f00">fuse</text>\n<line x1="54" y1="150" x2="166" y2="150" stroke="#334155" stroke-width="2"/>\n<rect x="95" y="150" width="30" height="30" fill="#334155"/>\n<text x="54" y="190" font-size="10" text-anchor="middle" fill="#1d4ed8">Neutral</text>\n<text x="166" y="190" font-size="10" text-anchor="middle" fill="#7c3f00">Live</text>\n</svg>',
        },
      ],
      keyPoints: [
        "d.c. flows one way (cells); a.c. reverses (mains ≈ 230 V, 50 Hz).",
        "Live (brown), Neutral (blue), Earth (green/yellow).",
        "Fuse is in the LIVE wire; it melts and cuts the supply on overcurrent.",
        "Earthing + fuse stop a metal case staying live in a fault.",
        "Double-insulated appliances (plastic case) need no earth wire.",
      ],
      formulae: [],
      whyItWorks:
        "A fuse exploits P = I²R / heating: an abnormally large current heats the thin fuse wire until it melts, breaking the live connection faster than the fault can harm you.",
      strategies: ["Match each wire to its colour and job", "For fuse rating: find the normal current (I = P/V), then pick the next standard fuse above it"],
    },
  ],
  learn: {
    bigIdea:
      "A circuit is a loop that lets charge flow. Three equations tie everything together: current is charge per second (I = Q/t), voltage is energy per charge (V = W/Q), and resistance links them (V = IR). From these you can predict current, voltage, resistance, power (P = IV = I²R) and energy (E = IVt) anywhere in series or parallel circuits — and understand how mains is delivered safely.",
    mustKnow: [
      "I = Q/t; charge in coulombs, current in amperes; ammeter in series.",
      "V = W/Q (energy E = QV); voltage in volts; voltmeter in parallel.",
      "V = IR; resistance in ohms; ohmic resistor has constant R (straight I–V line).",
      "Series: same current, p.d. shares, R_total = R1 + R2. Parallel: same p.d., currents add.",
      "I–V shapes: resistor straight; filament lamp curves (heats up); diode one-way; LDR/thermistor resistance falls with light/temperature.",
      "Power P = IV = I²R = V²/R (watts); energy E = IVt (joules).",
      "Mains is a.c. ≈230 V; plug wires live/neutral/earth; fuse in live; earthing & double insulation for safety.",
    ],
    keywords: [
      { term: "Current", definition: "The rate of flow of electric charge, I = Q/t, measured in amperes (A)." },
      { term: "Charge", definition: "A quantity of electricity, measured in coulombs (C); Q = It." },
      { term: "Potential difference", definition: "Energy transferred per unit charge between two points, V = W/Q, measured in volts (V)." },
      { term: "Resistance", definition: "Opposition to current flow, R = V/I, measured in ohms (Ω)." },
      { term: "Ohm's law", definition: "For an ohmic conductor at constant temperature, current is proportional to p.d. (V = IR with constant R)." },
      { term: "Series circuit", definition: "Components in one loop: same current throughout, p.d. shared, resistances add." },
      { term: "Parallel circuit", definition: "Components on separate branches: same p.d. across each, branch currents add." },
      { term: "Power", definition: "Rate of energy transfer, P = IV = I²R, measured in watts (W)." },
      { term: "Alternating current (a.c.)", definition: "Current that repeatedly reverses direction; UK mains ≈230 V, 50 Hz." },
      { term: "Fuse", definition: "A thin wire in the live conductor that melts to break the circuit if the current is too high." },
    ],
    flashcards: [
      { front: "State the equation linking charge, current and time.", back: "Q = I × t (charge in C, current in A, time in s); equivalently I = Q/t." },
      { front: "What is 1 volt in terms of energy and charge?", back: "1 volt = 1 joule per coulomb (V = W/Q)." },
      { front: "How do current and p.d. behave in a series circuit?", back: "Current is the same everywhere; the supply p.d. is shared between components." },
      { front: "Give three formulas for electrical power.", back: "P = IV, P = I²R and P = V²/R (all in watts)." },
      { front: "Which wire is the fuse fitted in, and what does it do?", back: "The live wire; it melts and breaks the circuit if the current gets dangerously high." },
      { front: "What happens to a thermistor's resistance as it gets hotter?", back: "Its resistance decreases as temperature rises." },
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
        explanation: "E = QV = 5 × 12 = 60 J.",
        guideRef: "Current, charge and potential difference",
        difficulty: "core",
        hints: ["Energy from charge and voltage: E = QV.", "Multiply charge by p.d.", "5 × 12."],
        strategy: "List knowns with units first",
      },
      {
        id: "ce-mcq-q07",
        question: "The unit of resistance is the…",
        options: ["ampere", "ohm", "joule", "coulomb"],
        answerIndex: 1,
        explanation: "Resistance is measured in ohms (Ω).",
        guideRef: "Resistance and Ohm's law",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q08",
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
        id: "ce-mcq-q09",
        question: "Which I–V graph belongs to a fixed resistor at constant temperature?",
        options: ["A straight line through the origin", "An S-shaped curve that flattens", "A line that only rises one way", "A horizontal straight line"],
        answerIndex: 0,
        explanation: "An ohmic resistor gives a straight line through the origin: I is proportional to V, so resistance is constant.",
        guideRef: "I–V graphs, LDRs and thermistors",
        difficulty: "core",
        hints: ["Ohm's law says I ∝ V for a fixed resistor.", "What shape is a proportional relationship?", "Straight line through (0,0)."],
      },
      {
        id: "ce-mcq-q10",
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
        id: "ce-mcq-q11",
        question: "A component lets current flow in one direction only. It is a…",
        options: ["resistor", "diode", "thermistor", "LDR"],
        answerIndex: 1,
        explanation: "A diode conducts in the forward direction and blocks current in reverse.",
        guideRef: "I–V graphs, LDRs and thermistors",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q12",
        question: "As the light shining on an LDR gets brighter, its resistance…",
        options: ["increases", "decreases", "stays the same", "becomes infinite"],
        answerIndex: 1,
        explanation: "An LDR's resistance falls as light intensity increases.",
        guideRef: "I–V graphs, LDRs and thermistors",
        difficulty: "core",
        hints: ["LDR = light-dependent resistor.", "More light → easier flow.", "Resistance goes down."],
      },
      {
        id: "ce-mcq-q13",
        question: "In a series circuit, the current…",
        options: ["is largest near the battery", "splits between components", "is the same at every point", "is zero in the middle"],
        answerIndex: 2,
        explanation: "In a single series loop the same current flows through every component.",
        guideRef: "Series and parallel circuits",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q14",
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
        id: "ce-mcq-q15",
        question: "In a parallel circuit, each branch has the same…",
        options: ["current", "resistance", "potential difference", "charge stored"],
        answerIndex: 2,
        explanation: "Components in parallel all have the same p.d. across them (equal to the supply).",
        guideRef: "Series and parallel circuits",
        difficulty: "core",
        hints: ["What is shared across parallel branches?", "Think about how household appliances all get full mains voltage.", "It's the p.d."],
      },
      {
        id: "ce-mcq-q16",
        question: "A 6 V battery is connected to two identical lamps in series, sharing the voltage equally. The p.d. across each lamp is…",
        options: ["6 V", "12 V", "3 V", "1.5 V"],
        answerIndex: 2,
        explanation: "In series the supply p.d. is shared, so each identical lamp gets 6 ÷ 2 = 3 V.",
        guideRef: "Series and parallel circuits",
        difficulty: "core",
        hints: ["How is p.d. distributed in series?", "Two identical lamps share equally.", "6 ÷ 2."],
      },
      {
        id: "ce-mcq-q17",
        question: "On a cell symbol (a long thin line next to a short thick line), which statement is correct?",
        options: ["Long line = negative", "Short thick line = positive", "Long thin line = positive terminal", "Both lines mean the same"],
        answerIndex: 2,
        explanation: "On a cell symbol the long thin line is the positive (+) terminal and the short thick line is negative (−).",
        guideRef: "Circuit symbols",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q18",
        question: "Electrical power can be calculated using…",
        options: ["P = V/I", "P = IV", "P = I/V", "P = Q/t"],
        answerIndex: 1,
        explanation: "Power P = IV (also P = I²R and P = V²/R).",
        guideRef: "Electrical power and energy",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q19",
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
        id: "ce-mcq-q20",
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
        id: "ce-mcq-q21",
        question: "In a UK three-pin plug, the fuse is connected in the…",
        options: ["neutral wire", "earth wire", "live wire", "casing"],
        answerIndex: 2,
        explanation: "The fuse is in the live wire so that it cuts off the dangerous live supply when it melts.",
        guideRef: "Mains electricity and safety",
        difficulty: "core",
        hints: ["Which wire is dangerous and must be disconnected in a fault?", "The fuse must break this connection.", "It's the live wire."],
      },
      {
        id: "ce-mcq-q22",
        question: "UK mains electricity is supplied as…",
        options: ["d.c. at 12 V", "a.c. at about 230 V", "d.c. at 230 V", "a.c. at 50 V"],
        answerIndex: 1,
        explanation: "UK mains is alternating current (a.c.) at about 230 V and 50 Hz.",
        guideRef: "Mains electricity and safety",
        difficulty: "warmup",
      },
      {
        id: "ce-mcq-q23",
        question: "A kettle is rated 2300 W on the 230 V mains. The normal operating current is about…",
        options: ["0.1 A", "10 A", "23 A", "100 A"],
        answerIndex: 1,
        explanation: "I = P/V = 2300 ÷ 230 = 10 A, so a 13 A fuse would be suitable.",
        guideRef: "Electrical power and energy",
        difficulty: "challenge",
        hints: ["Rearrange P = IV for current.", "I = P ÷ V.", "2300 ÷ 230 = 10."],
        strategy: "Rearrange then choose the fuse above the answer",
      },
      {
        id: "ce-mcq-q24",
        question: "Two resistors are connected in parallel. Compared with the smaller individual resistance, the total resistance is…",
        options: ["greater", "the same", "less", "exactly the average"],
        answerIndex: 2,
        explanation: "Adding parallel paths gives charge more routes, so the total resistance is less than the smallest branch.",
        guideRef: "Series and parallel circuits",
        difficulty: "challenge",
        hints: ["Does adding a branch make it easier or harder for charge to flow?", "More paths → less opposition.", "Total R is below the smallest single resistor."],
        strategy: "Reason from charge flow, not just formulas",
      },
      {
        id: "ce-mcq-q25",
        question: "Two 12 Ω resistors are wired in series across a 12 V battery; the same two resistors are then wired in parallel across the same battery. Compared with the series arrangement, the parallel arrangement draws…",
        options: ["one quarter of the current", "the same current", "four times the current", "twice the current"],
        answerIndex: 2,
        explanation: "Series R = 24 Ω → I = 12/24 = 0.5 A. Parallel R = 6 Ω → I = 12/6 = 2 A. That is 4× the current.",
        guideRef: "Series and parallel circuits",
        difficulty: "challenge",
        hints: ["Find total R for each arrangement.", "Series adds (24 Ω); parallel of two equal Rs is half one (6 Ω).", "Compare I = V/R: 0.5 A vs 2 A."],
        strategy: "Compute both totals, then compare with V = IR",
      },
      {
        id: "ce-mcq-q26",
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
        id: "ce-qa-q04",
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
        id: "ce-qa-q05",
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
        id: "ce-qa-q06",
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
        id: "ce-qa-q07",
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
        commonError: "Leaving time in minutes (1500 × 10 = 15 000 J is wrong) or forgetting to convert kW/kJ correctly.",
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
        id: "ce-qa-q08",
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
        id: "ce-qa-q09",
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
        id: "ce-qa-q10",
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
        id: "ce-qa-q11",
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
        id: "ce-qa-q12",
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
    ],
  },
  // questionBank omitted — auto-assembled from the quiz pools by lib/content.ts.
};
