import type { Topic } from "../types";

// Edexcel International GCSE Physics (4PH1) — Topic 7: Radioactivity and Particles.
// Authored to mirror the gold-standard shape of ht.ts (AoPS discovery openers,
// whyItWorks, strategies, tiered difficulty, hint ladders, multi-method solutions).

export const rp: Topic = {
  id: "rp",
  code: "RP",
  number: 7,
  title: "Radioactivity and Particles",
  subject: "Physics",
  icon: "☢️",
  color: "#a855f7",
  intro:
    "Deep inside every atom is a tiny, dense nucleus. Some nuclei are unstable and break apart, firing out radiation. In this topic you'll learn what atoms are made of, how to write and balance nuclear decay equations, how to measure half-life, why radiation is both dangerous and useful, and how splitting (fission) or joining (fusion) nuclei releases enormous energy.",
  guide: [
    {
      heading: "Inside the atom",
      discovery: {
        problem:
          "Everything around you — your hand, the air, this screen — is made of atoms. But an atom is mostly empty space, and almost all of its mass is squeezed into a region ten thousand times smaller than the atom itself. How can we describe what's actually in there?",
        idea:
          "An atom has a tiny central **nucleus** made of protons and neutrons, surrounded by electrons orbiting at a distance. The nucleus holds nearly all the mass; the electrons take up nearly all the space.",
      },
      body:
        "An atom is built from three sub-atomic particles:\n\n- **Protons** — positive charge, found in the nucleus.\n- **Neutrons** — no charge (neutral), found in the nucleus.\n- **Electrons** — negative charge, orbiting the nucleus in shells.\n\nIn a neutral atom the number of electrons equals the number of protons, so the positive and negative charges cancel.\n\nWe compare these particles using **relative charge** and **relative mass**:\n\n| Particle | Relative charge | Relative mass |\n|---|---|---|\n| Proton | +1 | 1 |\n| Neutron | 0 | 1 |\n| Electron | −1 | 1/1836 (≈0, often taken as negligible) |\n\nProtons and neutrons (together called **nucleons**) have almost the same mass. An electron is about 1836 times lighter, so the mass of an atom is essentially the mass of its nucleus.",
      diagrams: [
        {
          caption: "A lithium atom: 3 protons and 4 neutrons in the nucleus, 3 electrons in shells.",
          svg:
            '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Atom structure showing a central nucleus of protons and neutrons with electrons orbiting in shells">\n<circle cx="110" cy="100" r="80" fill="none" stroke="#94a3b8" stroke-dasharray="3 3"/>\n<circle cx="110" cy="100" r="50" fill="none" stroke="#94a3b8" stroke-dasharray="3 3"/>\n<circle cx="110" cy="100" r="20" fill="#fde68a" stroke="#475569"/>\n<circle cx="103" cy="95" r="6" fill="#ef4444"/>\n<circle cx="117" cy="96" r="6" fill="#ef4444"/>\n<circle cx="110" cy="107" r="6" fill="#3b82f6"/>\n<circle cx="100" cy="106" r="6" fill="#3b82f6"/>\n<circle cx="120" cy="106" r="6" fill="#3b82f6"/>\n<circle cx="60" cy="100" r="5" fill="#10b981"/>\n<circle cx="160" cy="100" r="5" fill="#10b981"/>\n<circle cx="110" cy="20" r="5" fill="#10b981"/>\n<text x="110" y="195" font-size="10" text-anchor="middle" fill="#334155">red=proton  blue=neutron  green=electron</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Protons (+1) and neutrons (0) sit in the nucleus; electrons (−1) orbit in shells.",
        "Proton and neutron have relative mass 1; electron mass is negligible (~1/1836).",
        "A neutral atom has equal numbers of protons and electrons.",
        "Nearly all the atom's mass is in the tiny nucleus; the atom is mostly empty space.",
      ],
      whyItWorks:
        "Because charges in a neutral atom cancel, the atom shows no overall charge. Removing or adding electrons makes a charged ion, but the nucleus — which sets the element — stays the same.",
      strategies: ["Build a table of properties", "Separate charge from mass"],
    },
    {
      heading: "Atomic number, mass number and nuclide notation",
      body:
        "Two numbers describe any nucleus:\n\n- **Atomic (proton) number, Z** — the number of protons. This decides which **element** the atom is.\n- **Mass (nucleon) number, A** — the total number of protons + neutrons.\n\nSo the number of neutrons is **N = A − Z**.\n\nWe write a nuclide using **nuclide notation**, with the mass number above the atomic number, both in front of the chemical symbol (A on top, Z below, then the symbol X).\n\nFor example, carbon-14 is written with A = 14, Z = 6, so it has 6 protons, 6 electrons (if neutral) and 14 − 6 = 8 neutrons.\n\n**Isotopes** are atoms of the *same element* (same Z, same number of protons) but with *different numbers of neutrons* (different A). Because they have the same number of protons and electrons, isotopes behave identically in chemical reactions, but they have different masses and may differ in nuclear stability. Examples: carbon-12 and carbon-14; hydrogen-1, hydrogen-2 (deuterium) and hydrogen-3 (tritium).",
      diagrams: [
        {
          caption: "Reading nuclide notation: mass number A on top, atomic number Z on the bottom.",
          svg:
            '<svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nuclide notation diagram for carbon-14 showing mass number 14 on top and atomic number 6 below the symbol C">\n<text x="70" y="55" font-size="22" text-anchor="end" fill="#1e293b">14</text>\n<text x="70" y="95" font-size="22" text-anchor="end" fill="#1e293b">6</text>\n<text x="80" y="80" font-size="44" fill="#7c3aed">C</text>\n<text x="150" y="40" font-size="11" fill="#334155">A = mass (nucleon) number</text>\n<text x="150" y="100" font-size="11" fill="#334155">Z = atomic (proton) number</text>\n<line x1="146" y1="36" x2="76" y2="44" stroke="#94a3b8"/>\n<line x1="146" y1="96" x2="76" y2="88" stroke="#94a3b8"/>\n<text x="120" y="125" font-size="10" text-anchor="middle" fill="#64748b">neutrons N = A - Z = 14 - 6 = 8</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Z = atomic (proton) number; identifies the element.",
        "A = mass (nucleon) number = protons + neutrons.",
        "Neutrons N = A − Z.",
        "Isotopes: same Z (same element), different A (different neutron count).",
      ],
      formulae: ["N = A − Z", "A = Z + N"],
      whyItWorks:
        "Chemical behaviour is set by electrons, which match the proton number, so isotopes of one element are chemically identical — only the nucleus (and hence mass and stability) differs.",
      strategies: ["Read A and Z carefully", "Use N = A − Z every time"],
    },
    {
      heading: "Discovery of the nucleus and background radiation",
      discovery: {
        problem:
          "Around 1910 the accepted 'plum-pudding' model imagined the atom as a soft blob of positive charge with electrons dotted through it. Geiger and Marsden fired alpha particles at thin gold foil expecting them all to pass straight through. A few bounced almost straight back. How could a soft blob do that?",
        idea:
          "Rutherford concluded the atom must have a tiny, dense, positively charged core — the **nucleus** — that occasionally repels an alpha particle hard enough to deflect it sharply. Most alphas missed it because the atom is mostly empty space.",
      },
      body:
        "**The Geiger–Marsden (alpha scattering) experiment** and Rutherford's interpretation gave us the **nuclear model** of the atom:\n\n- Most alpha particles passed straight through → the atom is **mostly empty space**.\n- A few were deflected by large angles → there is a **small, dense, positively charged nucleus**.\n- Very few bounced almost straight back → the nucleus carries most of the **mass** and **charge**.\n\n**Background radiation** is the low-level ionising radiation that is around us all the time. Its sources include:\n\n- **Natural:** radon gas from rocks and soil, cosmic rays from space, food and drink, rocks/building materials (e.g. granite).\n- **Man-made:** medical X-rays and treatments, nuclear weapons testing fallout, nuclear power/industry (a small fraction).\n\nWhen measuring a radioactive source, we must **subtract the background count rate** to get the true reading from the source.",
      keyPoints: [
        "Alpha scattering: most pass through (empty space); few deflect strongly (tiny dense positive nucleus).",
        "The nucleus holds almost all the mass and all the positive charge.",
        "Background radiation is always present; a big natural source is radon gas.",
        "Always subtract the background count rate from measurements.",
      ],
      whyItWorks:
        "Only a concentrated positive charge could repel a fast, positive alpha particle strongly enough to turn it around — a spread-out charge could not produce such a strong, close-range force.",
      thinkDeeper:
        "Why was using a thin foil important? A thick foil would scatter alphas many times, blurring the result; a single thin layer of atoms lets each deflection be interpreted cleanly.",
      strategies: ["Link evidence to conclusion", "Always account for background"],
    },
    {
      heading: "Types of radiation: alpha, beta and gamma",
      body:
        "Unstable nuclei become more stable by emitting **ionising radiation**. There are three main types:\n\n- **Alpha (α)** — a helium nucleus: 2 protons + 2 neutrons. Relative charge **+2**, relative mass **4**. **Strongly ionising** but **least penetrating** — stopped by a sheet of **paper** (or a few cm of air).\n- **Beta-minus (β⁻)** — a fast-moving **electron** emitted from the nucleus when a neutron turns into a proton. Relative charge **−1**, relative mass ≈ **0**. **Moderately ionising**, more penetrating — stopped by a few mm of **aluminium**.\n- **Gamma (γ)** — a high-frequency **electromagnetic wave**. **No charge**, **no mass**. **Weakly ionising** but **most penetrating** — only reduced by thick **lead** or metres of concrete.\n\n**Ionising** means the radiation knocks electrons off atoms, creating ions — this is what makes radiation damaging to living cells.\n\nIn electric and magnetic fields, the three types behave differently because of their charge:\n\n- **Alpha** (+) and **beta** (−) are deflected in **opposite directions**; beta deflects **more** (much smaller mass, so easier to push).\n- **Gamma** has no charge, so it is **not deflected** at all.",
      diagrams: [
        {
          caption: "Penetrating power: alpha stopped by paper, beta by aluminium, gamma reduced by lead.",
          svg:
            '<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Penetration of alpha beta and gamma radiation through paper aluminium and lead barriers">\n<text x="10" y="40" font-size="12" fill="#b91c1c">alpha</text>\n<text x="10" y="80" font-size="12" fill="#1d4ed8">beta</text>\n<text x="10" y="120" font-size="12" fill="#15803d">gamma</text>\n<rect x="120" y="10" width="10" height="130" fill="#fef3c7" stroke="#475569"/>\n<text x="125" y="158" font-size="9" text-anchor="middle" fill="#334155">paper</text>\n<rect x="210" y="10" width="14" height="130" fill="#cbd5e1" stroke="#475569"/>\n<text x="217" y="158" font-size="9" text-anchor="middle" fill="#334155">aluminium</text>\n<rect x="300" y="10" width="22" height="130" fill="#64748b" stroke="#1e293b"/>\n<text x="311" y="158" font-size="9" text-anchor="middle" fill="#334155">lead</text>\n<line x1="50" y1="35" x2="120" y2="35" stroke="#b91c1c" stroke-width="2" marker-end="url(#h)"/>\n<line x1="50" y1="75" x2="210" y2="75" stroke="#1d4ed8" stroke-width="2" marker-end="url(#h)"/>\n<line x1="50" y1="115" x2="300" y2="115" stroke="#15803d" stroke-width="2" marker-end="url(#h)"/>\n<defs><marker id="h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#334155"/></marker></defs>\n</svg>',
        },
        {
          caption: "Deflection in a magnetic field: alpha and beta bend opposite ways; gamma is undeflected.",
          svg:
            '<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Alpha beta and gamma radiation entering a field, with alpha and beta deflecting in opposite directions and gamma going straight">\n<rect x="0" y="0" width="280" height="160" fill="#f1f5f9"/>\n<circle cx="40" cy="80" r="10" fill="#475569"/>\n<text x="40" y="84" font-size="9" text-anchor="middle" fill="#fff">src</text>\n<path d="M50 80 C120 80 160 40 240 20" stroke="#b91c1c" stroke-width="2" fill="none" marker-end="url(#m)"/>\n<text x="248" y="22" font-size="11" fill="#b91c1c">a</text>\n<path d="M50 80 L240 80" stroke="#15803d" stroke-width="2" fill="none" marker-end="url(#m)"/>\n<text x="248" y="84" font-size="11" fill="#15803d">g</text>\n<path d="M50 80 C120 80 150 130 240 150" stroke="#1d4ed8" stroke-width="2" fill="none" marker-end="url(#m)"/>\n<text x="248" y="152" font-size="11" fill="#1d4ed8">b</text>\n<defs><marker id="m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#334155"/></marker></defs>\n<text x="140" y="14" font-size="10" text-anchor="middle" fill="#64748b">beta bends more (much lighter than alpha)</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Alpha = helium nucleus (+2, mass 4): most ionising, least penetrating (stopped by paper).",
        "Beta = fast electron (−1, mass ≈0): medium, stopped by aluminium.",
        "Gamma = EM wave (0 charge, 0 mass): least ionising, most penetrating (lead).",
        "In fields: alpha and beta deflect opposite ways, beta more; gamma not deflected.",
      ],
      whyItWorks:
        "A larger charge and slower speed make alpha collide with and strip electrons from many atoms over a short distance — strong ionisation but quickly stopped. Gamma rarely interacts, so it ionises little but travels far.",
      strategies: ["Rank by charge, mass and penetration", "Use charge sign to predict deflection"],
    },
    {
      heading: "Nuclear decay equations",
      discovery: {
        problem:
          "When a nucleus emits an alpha or beta particle it changes into a different nucleus. How can we predict exactly what new element it becomes — without memorising every case?",
        idea:
          "Two quantities are always conserved: the total **mass number (A)** and the total **atomic number (Z)** must be the same on both sides of the equation. Balance those two and the new nucleus is forced.",
      },
      body:
        "Write the alpha or beta particle using nuclide notation, then balance A and Z.\n\n**Alpha decay** emits an alpha particle (helium nucleus, A = 4, Z = 2). The parent loses 2 protons and 2 neutrons, so:\n\n- A decreases by **4**\n- Z decreases by **2**\n\nExample (radium → radon): radium-226 (Z = 88) → radon-222 (Z = 86) + alpha (A = 4, Z = 2). Check: 222 + 4 = 226 and 86 + 2 = 88.\n\n**Beta-minus decay** emits a beta particle (an electron, A = 0, Z = −1). Inside the nucleus a **neutron changes into a proton**, so:\n\n- A stays the **same**\n- Z increases by **1**\n\nExample (carbon → nitrogen): carbon-14 (Z = 6) → nitrogen-14 (Z = 7) + beta (A = 0, Z = −1). Check: 14 + 0 = 14 and 7 + (−1) = 6.\n\n**Gamma emission** carries away energy only — it changes neither A nor Z, so it does not change which element the nucleus is.",
      keyPoints: [
        "Alpha decay: A − 4, Z − 2 (emits a helium nucleus).",
        "Beta-minus decay: A unchanged, Z + 1 (a neutron becomes a proton + electron).",
        "Gamma emission: A and Z unchanged (energy only).",
        "Always check: totals of A and of Z match on both sides.",
      ],
      formulae: [
        "Alpha particle: A=4, Z=2 (helium nucleus)",
        "Beta particle: A=0, Z=-1 (electron)",
        "Conserve A (top numbers) and Z (bottom numbers) on both sides",
      ],
      whyItWorks:
        "Nucleon number and charge are conserved in nuclear reactions. The alpha or beta particle removes a fixed amount of each, so the daughter nucleus is whatever makes both totals balance.",
      strategies: ["Balance A first, then Z", "Use Z to name the new element"],
    },
    {
      heading: "Half-life",
      discovery: {
        problem:
          "Radioactive decay is completely **random** — you can never say when one particular nucleus will decay. So how can hospitals and engineers rely on radioactive sources behaving predictably?",
        idea:
          "With huge numbers of nuclei, the randomness averages out. In a fixed time, a fixed *fraction* always decays. That time is the **half-life** — and it lets us make precise predictions even though each single event is unpredictable.",
      },
      body:
        "The **half-life** of a radioactive isotope is the **time taken for half of the radioactive nuclei in a sample to decay** (equivalently, the time for the **count rate / activity to halve**).\n\nDecay is random and spontaneous: it is not affected by temperature, pressure or chemical state. We measure **activity** (decays per second, in becquerels) using a detector, after subtracting background.\n\nTo solve half-life problems, count in **whole half-lives**:\n\n- After 1 half-life: 1/2 remains\n- After 2 half-lives: 1/4 remains\n- After 3 half-lives: 1/8 remains\n- After n half-lives: (1/2)ⁿ remains\n\nA quick method: keep halving the activity (or number of nuclei) until you reach the value asked for, counting how many halvings you used; multiply by the half-life to get the total time (or divide the total time by the half-life to get n).",
      diagrams: [
        {
          caption: "A radioactive decay curve: activity halves every half-life.",
          svg:
            '<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Radioactive decay curve showing activity halving each half-life from 800 to 400 to 200 to 100">\n<line x1="40" y1="170" x2="260" y2="170" stroke="#334155"/>\n<line x1="40" y1="170" x2="40" y2="20" stroke="#334155"/>\n<text x="150" y="195" font-size="11" text-anchor="middle" fill="#334155">time (half-lives)</text>\n<text x="14" y="100" font-size="11" fill="#334155" transform="rotate(-90 14 100)">activity</text>\n<path d="M40 30 C90 90 110 120 150 130 C190 140 220 150 260 158" stroke="#7c3aed" stroke-width="2.5" fill="none"/>\n<line x1="40" y1="30" x2="95" y2="30" stroke="#cbd5e1" stroke-dasharray="3 3"/>\n<line x1="95" y1="30" x2="95" y2="170" stroke="#cbd5e1" stroke-dasharray="3 3"/>\n<line x1="40" y1="100" x2="150" y2="100" stroke="#cbd5e1" stroke-dasharray="3 3"/>\n<line x1="150" y1="100" x2="150" y2="170" stroke="#cbd5e1" stroke-dasharray="3 3"/>\n<text x="36" y="33" font-size="9" text-anchor="end" fill="#64748b">800</text>\n<text x="36" y="103" font-size="9" text-anchor="end" fill="#64748b">400</text>\n<text x="95" y="182" font-size="9" text-anchor="middle" fill="#64748b">1</text>\n<text x="150" y="182" font-size="9" text-anchor="middle" fill="#64748b">2</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Half-life = time for half the nuclei (or the count rate) to decay.",
        "Decay is random and spontaneous; unaffected by temperature, pressure or chemistry.",
        "After n half-lives, fraction remaining = (1/2)ⁿ.",
        "Read half-life off a decay graph by seeing how long activity takes to halve.",
      ],
      formulae: [
        "Fraction remaining = (1/2)^n, where n = number of half-lives",
        "Total time = n × half-life",
        "n = total time ÷ half-life",
      ],
      whyItWorks:
        "Each nucleus has the same fixed probability of decaying per second, so with very many nuclei a constant fraction decays in each equal time interval — giving the smooth, repeating halving pattern.",
      strategies: ["Keep halving and count the steps", "Work in whole half-lives"],
    },
    {
      heading: "Detecting radiation, dangers and safety",
      body:
        "**Detecting radiation:**\n\n- A **Geiger–Müller (GM) tube** connected to a counter clicks/counts each ionising particle, giving a **count rate**.\n- **Photographic film** darkens when exposed to radiation — used in film badges worn by workers to monitor their total dose.\n\n**Dangers:** ionising radiation can damage or kill living cells and can cause **mutations** in DNA that may lead to cancer. The risk depends on the **type** of radiation and whether the source is **outside** or **inside** the body:\n\n- **Outside the body**, alpha is least dangerous (stopped by skin/air), while beta and especially gamma can penetrate and cause harm.\n- **Inside the body** (swallowed/inhaled), **alpha is most dangerous** because it is strongly ionising and deposits all its energy in a small region of tissue.\n\n**Safety / handling:**\n\n- Keep exposure **time** short.\n- Increase your **distance** from the source.\n- Use **shielding** (lead, thick concrete).\n- Handle sources with **tongs**, store in **lead-lined** containers, never point at people, and wear monitoring badges.",
      keyPoints: [
        "GM tube + counter gives a count rate; film badges monitor dose.",
        "Ionising radiation damages cells and DNA → can cause cancer/mutations.",
        "Outside body: gamma/beta more dangerous; inside body: alpha most dangerous.",
        "Reduce risk by time, distance and shielding.",
      ],
      whyItWorks:
        "Inside the body there is no skin to stop alpha, and because alpha ionises so strongly it dumps a large amount of damaging energy into a small volume of cells.",
      strategies: ["Split inside vs outside the body", "Remember time–distance–shielding"],
    },
    {
      heading: "Uses of radioactivity",
      body:
        "Different properties make each radiation useful for different jobs:\n\n- **Medical tracers** — a gamma-emitting isotope with a *short* half-life is injected or swallowed; a detector outside the body follows it (e.g. through the kidneys). Gamma is used so it can escape the body, and a short half-life limits the dose.\n- **Treating cancer (radiotherapy)** — high-energy **gamma** rays are aimed at a tumour to kill cancer cells.\n- **Sterilisation** — gamma rays kill bacteria on medical instruments and on food, without high temperatures.\n- **Smoke detectors** — a weak **alpha** source ionises the air so a small current flows; smoke absorbs the alpha, the current drops and the alarm sounds. (Alpha is safe outside the body and stays inside the detector.)\n- **Thickness control** — a **beta** source on one side of, say, paper or foil and a detector on the other: if the material gets thicker, fewer beta particles get through, so rollers adjust automatically. Beta is chosen because it is partly absorbed (alpha would be fully stopped, gamma barely affected).\n- **Radioactive dating** — **carbon-14 dating** finds the age of once-living material from how much C-14 is left; **uranium/lead dating** of rocks finds the age of the Earth from the ratio of uranium to its decay products.",
      diagrams: [
        {
          caption: "Thickness monitoring: a beta source and detector control sheet thickness.",
          svg:
            '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Beta source above a moving sheet with a detector below measuring how much radiation passes through">\n<circle cx="60" cy="25" r="12" fill="#475569"/>\n<text x="60" y="29" font-size="9" text-anchor="middle" fill="#fff">b src</text>\n<rect x="20" y="60" width="280" height="12" fill="#fde68a" stroke="#475569"/>\n<text x="150" y="55" font-size="10" text-anchor="middle" fill="#334155">moving sheet</text>\n<rect x="45" y="100" width="30" height="16" fill="#1e293b"/>\n<text x="60" y="112" font-size="9" text-anchor="middle" fill="#fff">det</text>\n<line x1="60" y1="37" x2="60" y2="60" stroke="#1d4ed8" stroke-width="2" marker-end="url(#t)"/>\n<line x1="60" y1="72" x2="60" y2="100" stroke="#1d4ed8" stroke-width="2" marker-end="url(#t)"/>\n<defs><marker id="t" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#1d4ed8"/></marker></defs>\n<text x="120" y="118" font-size="9" fill="#64748b">thicker sheet means fewer beta through</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Tracers/treatment/sterilisation use gamma (penetrates / kills cells).",
        "Smoke detectors use a weak alpha source (ionises air, smoke blocks it).",
        "Thickness gauges use beta (partly absorbed, so changes are detectable).",
        "Dating: carbon-14 for once-living material; uranium/lead for rocks.",
      ],
      whyItWorks:
        "Each use matches a radiation to a property: gamma for penetration, alpha for strong short-range ionisation, beta for partial absorption sensitive to thickness, and a known half-life for dating.",
      thinkDeeper:
        "Why must a medical tracer have a short half-life but a smoke-detector source a long one? A tracer should stop irradiating the patient quickly; a smoke detector must keep working for years without being replaced.",
      strategies: ["Match radiation to the job", "Justify the choice of half-life"],
    },
    {
      heading: "Nuclear fission and fusion",
      discovery: {
        problem:
          "Burning coal or oil releases chemical energy from rearranging electrons. Yet a nuclear power station gets millions of times more energy from the same mass of fuel. Where does all that extra energy come from?",
        idea:
          "It comes from the **nucleus**, not the electrons. Splitting a large nucleus (**fission**) or joining small nuclei (**fusion**) releases enormous energy — vastly more than any chemical reaction.",
      },
      body:
        "**Nuclear fission** is the **splitting of a large, unstable nucleus** (such as uranium-235) into two smaller nuclei (daughter nuclei), releasing energy and **two or three neutrons**.\n\n- The process starts when a slow neutron is **absorbed** by the nucleus, making it unstable.\n- The released neutrons can be absorbed by other nuclei, causing them to split too — a **chain reaction**.\n\nIn a **nuclear reactor** this chain reaction is **controlled**:\n\n- **Control rods** (e.g. boron) **absorb neutrons** and are raised or lowered to keep the reaction steady — lower them to slow it down.\n- A **moderator** (e.g. water or graphite) **slows down** the fast neutrons so they are more easily absorbed and can sustain the reaction.\n\n**Nuclear fusion** is the **joining of two light nuclei** (such as hydrogen isotopes) to form a heavier nucleus, releasing even more energy per kilogram than fission.\n\n- Fusion is the energy source of the **Sun and other stars**.\n- It needs **extremely high temperature and pressure** so the positively charged nuclei move fast enough to overcome their electrostatic repulsion and get close enough to fuse. This is why fusion is so hard to achieve on Earth.",
      diagrams: [
        {
          caption: "A fission chain reaction: each split releases neutrons that trigger more splits.",
          svg:
            '<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fission chain reaction with one nucleus splitting and releasing neutrons that split further nuclei">\n<circle cx="40" cy="80" r="14" fill="#7c3aed"/>\n<text x="40" y="84" font-size="8" text-anchor="middle" fill="#fff">U235</text>\n<line x1="10" y1="80" x2="24" y2="80" stroke="#1e293b" stroke-width="2" marker-end="url(#n)"/>\n<circle cx="120" cy="55" r="11" fill="#a855f7"/>\n<circle cx="120" cy="105" r="11" fill="#a855f7"/>\n<line x1="54" y1="72" x2="110" y2="58" stroke="#94a3b8"/>\n<line x1="54" y1="88" x2="110" y2="102" stroke="#94a3b8"/>\n<line x1="54" y1="80" x2="150" y2="40" stroke="#1e293b" stroke-width="1.5" marker-end="url(#n)"/>\n<line x1="54" y1="80" x2="150" y2="120" stroke="#1e293b" stroke-width="1.5" marker-end="url(#n)"/>\n<line x1="54" y1="80" x2="150" y2="80" stroke="#1e293b" stroke-width="1.5" marker-end="url(#n)"/>\n<circle cx="180" cy="35" r="12" fill="#7c3aed"/>\n<circle cx="180" cy="125" r="12" fill="#7c3aed"/>\n<text x="245" y="84" font-size="9" fill="#64748b">+ neutrons</text>\n<defs><marker id="n" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#1e293b"/></marker></defs>\n</svg>',
        },
      ],
      keyPoints: [
        "Fission: a neutron splits a large nucleus → smaller nuclei + 2–3 neutrons + energy.",
        "Chain reaction: released neutrons cause further fissions.",
        "Reactor control: control rods absorb neutrons; moderator slows neutrons.",
        "Fusion: light nuclei join → heavier nucleus + energy; powers stars; needs huge T and P.",
      ],
      formulae: [
        "Fission: neutron + large nucleus -> 2 smaller nuclei + 2 or 3 neutrons + energy",
        "Fusion: small nucleus + small nucleus -> larger nucleus + energy",
      ],
      whyItWorks:
        "Both processes convert a tiny amount of mass into a large amount of energy, because the rearranged nucleus is more stable (more tightly bound) than the starting nuclei.",
      strategies: ["Contrast split vs join", "Name the job of each reactor part"],
    },
  ],
  learn: {
    bigIdea:
      "Atoms have a tiny dense nucleus of protons and neutrons. Unstable nuclei decay randomly, emitting alpha, beta or gamma radiation and changing into new elements (conserving mass and atomic number). The pace of decay is set by the half-life, and rearranging nuclei by fission or fusion releases enormous energy.",
    mustKnow: [
      "Proton +1 mass 1, neutron 0 mass 1, electron −1 mass negligible; Z = protons, A = protons + neutrons.",
      "Isotopes: same Z, different A (different neutron number).",
      "Alpha = He nucleus (+2, stopped by paper); beta = electron (−1, stopped by aluminium); gamma = EM wave (0, needs lead).",
      "Decay equations conserve A and Z: alpha → A−4, Z−2; beta-minus → A same, Z+1.",
      "Half-life = time for half the nuclei (or count rate) to decay; fraction left = (1/2)ⁿ.",
      "Reduce risk by time, distance and shielding; alpha is most dangerous inside the body.",
      "Fission splits large nuclei (chain reaction, control rods, moderator); fusion joins light nuclei and powers stars.",
    ],
    keywords: [
      { term: "Isotope", definition: "Atoms of the same element (same proton number) with different numbers of neutrons (different mass number)." },
      { term: "Atomic (proton) number, Z", definition: "The number of protons in a nucleus; it identifies the element." },
      { term: "Mass (nucleon) number, A", definition: "The total number of protons and neutrons in a nucleus." },
      { term: "Alpha particle", definition: "A helium nucleus (2 protons + 2 neutrons); relative charge +2, mass 4; strongly ionising, least penetrating." },
      { term: "Beta-minus particle", definition: "A fast electron emitted when a neutron in the nucleus changes into a proton; relative charge −1, mass negligible." },
      { term: "Gamma ray", definition: "A high-frequency electromagnetic wave with no charge and no mass; weakly ionising but very penetrating." },
      { term: "Half-life", definition: "The time taken for half of the radioactive nuclei in a sample (or the count rate) to decay." },
      { term: "Background radiation", definition: "Low-level ionising radiation always present from natural and man-made sources, e.g. radon, cosmic rays, medical sources." },
      { term: "Nuclear fission", definition: "The splitting of a large unstable nucleus into smaller nuclei, releasing neutrons and energy." },
      { term: "Nuclear fusion", definition: "The joining of two light nuclei to form a heavier nucleus, releasing energy; the process powering stars." },
    ],
    flashcards: [
      { front: "What is an isotope?", back: "Atoms of the same element (same number of protons / same Z) but with different numbers of neutrons (different A)." },
      { front: "How do A and Z change in alpha decay?", back: "A decreases by 4 and Z decreases by 2 (a helium nucleus is emitted)." },
      { front: "How do A and Z change in beta-minus decay?", back: "A stays the same and Z increases by 1 (a neutron turns into a proton + electron)." },
      { front: "Define half-life.", back: "The time taken for half of the radioactive nuclei in a sample (or for the count rate) to decay." },
      { front: "Why is alpha most dangerous inside the body?", back: "It is very strongly ionising and deposits all its energy in a small region of tissue, with no skin to stop it." },
      { front: "What do control rods and a moderator do in a reactor?", back: "Control rods absorb neutrons to control the reaction; the moderator slows neutrons down so they cause more fission." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "rp-mcq-q01",
        question: "Which sub-atomic particle has no electric charge?",
        options: ["Proton", "Electron", "Neutron", "Alpha particle"],
        answerIndex: 2,
        explanation: "Neutrons are neutral (relative charge 0). Protons are +1, electrons are −1.",
        guideRef: "Inside the atom",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q02",
        question: "The atomic (proton) number of an atom tells you the number of…",
        options: ["protons", "neutrons", "protons + neutrons", "electrons + neutrons"],
        answerIndex: 0,
        explanation: "The atomic number Z is the number of protons, which also identifies the element.",
        guideRef: "Atomic number, mass number and nuclide notation",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q03",
        question: "An atom has a mass number of 23 and an atomic number of 11. How many neutrons does it have?",
        options: ["11", "12", "23", "34"],
        answerIndex: 1,
        explanation: "Neutrons N = A − Z = 23 − 11 = 12.",
        guideRef: "Atomic number, mass number and nuclide notation",
        difficulty: "core",
        hints: ["Which number is the total of particles in the nucleus?", "Which number is the protons?", "Neutrons = A − Z."],
        strategy: "Use N = A − Z",
      },
      {
        id: "rp-mcq-q04",
        question: "Two atoms are isotopes of the same element. They must have the same number of…",
        options: ["neutrons", "protons", "nucleons", "particles in total"],
        answerIndex: 1,
        explanation: "Isotopes have the same number of protons (same Z, same element) but different numbers of neutrons.",
        guideRef: "Atomic number, mass number and nuclide notation",
        difficulty: "core",
        hints: ["What decides which element an atom is?", "Isotopes differ in neutrons — so what stays the same?", "Same Z means same protons."],
      },
      {
        id: "rp-mcq-q05",
        question: "An alpha particle is identical to a…",
        options: ["hydrogen atom", "helium nucleus", "fast electron", "high-frequency EM wave"],
        answerIndex: 1,
        explanation: "An alpha particle is a helium nucleus: 2 protons and 2 neutrons (relative charge +2, mass 4).",
        guideRef: "Types of radiation: alpha, beta and gamma",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q06",
        question: "Which type of radiation is the most penetrating?",
        options: ["Alpha", "Beta", "Gamma", "They are all equal"],
        answerIndex: 2,
        explanation: "Gamma is the most penetrating (only reduced by thick lead/concrete); alpha is the least (stopped by paper).",
        guideRef: "Types of radiation: alpha, beta and gamma",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q07",
        question: "Which type of radiation is stopped by a few millimetres of aluminium but passes through paper?",
        options: ["Alpha", "Beta", "Gamma", "X-rays"],
        answerIndex: 1,
        explanation: "Beta passes through paper but is stopped by a few mm of aluminium. Alpha is stopped by paper; gamma needs lead.",
        guideRef: "Types of radiation: alpha, beta and gamma",
        difficulty: "core",
        hints: ["Alpha is stopped by paper, so it isn't alpha.", "Gamma needs lead, so it isn't gamma.", "Which one is in between?"],
      },
      {
        id: "rp-mcq-q08",
        question: "A beam of radiation passes between two charged plates and is NOT deflected at all. The radiation is most likely…",
        options: ["alpha", "beta", "gamma", "a mixture of alpha and beta"],
        answerIndex: 2,
        explanation: "Gamma has no charge, so an electric or magnetic field exerts no force on it and it is undeflected.",
        guideRef: "Types of radiation: alpha, beta and gamma",
        difficulty: "core",
        hints: ["Fields only push on charged things.", "Which radiation has zero charge?", "No charge means no deflection."],
        strategy: "Use charge to predict deflection",
      },
      {
        id: "rp-mcq-q09",
        question: "In a magnetic field, alpha and beta particles are deflected in opposite directions. Beta deflects more than alpha mainly because beta has a…",
        options: ["larger charge", "much smaller mass", "higher penetrating power", "neutral charge"],
        answerIndex: 1,
        explanation: "A beta particle has a far smaller mass than an alpha, so for a given force it accelerates and curves much more.",
        guideRef: "Types of radiation: alpha, beta and gamma",
        difficulty: "challenge",
        hints: ["They deflect opposite ways because of opposite charge.", "What makes something easier to push aside — being light or heavy?", "Compare the masses of an electron and a helium nucleus."],
        strategy: "Compare extremes (mass)",
      },
      {
        id: "rp-mcq-q10",
        question: "When a nucleus emits an alpha particle, its mass number and atomic number change by…",
        options: ["A −4, Z −2", "A −2, Z −4", "A same, Z +1", "A −4, Z +2"],
        answerIndex: 0,
        explanation: "An alpha particle has A = 4 and Z = 2, so the parent loses 4 from its mass number and 2 from its atomic number.",
        guideRef: "Nuclear decay equations",
        difficulty: "core",
        hints: ["What is an alpha particle made of?", "It removes 2 protons and 2 neutrons.", "So A falls by 4 and Z falls by 2."],
      },
      {
        id: "rp-mcq-q11",
        question: "During beta-minus decay, inside the nucleus a…",
        options: ["proton turns into a neutron", "neutron turns into a proton", "proton is destroyed", "neutron is destroyed without forming anything"],
        answerIndex: 1,
        explanation: "In beta-minus decay a neutron changes into a proton (and an electron, the beta particle, is emitted), so Z increases by 1.",
        guideRef: "Nuclear decay equations",
        difficulty: "core",
        hints: ["The atomic number increases by 1 — so protons go up.", "Where does the extra proton come from?", "A neutron becomes a proton, emitting an electron."],
      },
      {
        id: "rp-mcq-q12",
        question: "A nucleus of polonium-218 (Z = 84) undergoes alpha decay. The daughter nucleus has…",
        options: ["A = 214, Z = 82", "A = 218, Z = 85", "A = 214, Z = 86", "A = 216, Z = 82"],
        answerIndex: 0,
        explanation: "Alpha decay: A = 218 − 4 = 214 and Z = 84 − 2 = 82 (lead-214).",
        guideRef: "Nuclear decay equations",
        difficulty: "core",
        hints: ["Subtract the alpha particle's A and Z.", "Alpha is A = 4, Z = 2.", "218 − 4 and 84 − 2."],
        strategy: "Balance A first, then Z",
      },
      {
        id: "rp-mcq-q13",
        question: "Carbon-14 (Z = 6) decays by beta-minus emission. The new nucleus is…",
        options: ["boron-14 (Z = 5)", "carbon-13 (Z = 6)", "nitrogen-14 (Z = 7)", "nitrogen-15 (Z = 7)"],
        answerIndex: 2,
        explanation: "Beta-minus: A unchanged (14), Z increases by 1 to 7, giving nitrogen-14.",
        guideRef: "Nuclear decay equations",
        difficulty: "core",
        hints: ["Beta-minus leaves the mass number unchanged.", "The atomic number rises by 1.", "Z = 7 is nitrogen; A stays 14."],
      },
      {
        id: "rp-mcq-q14",
        question: "The half-life of a radioactive isotope is the time taken for…",
        options: [
          "all the nuclei to decay",
          "half the radioactive nuclei in the sample to decay",
          "the sample to cool by half",
          "the radiation to become safe",
        ],
        answerIndex: 1,
        explanation: "Half-life is the time for half of the radioactive nuclei (equivalently, for the activity/count rate) to decay.",
        guideRef: "Half-life",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q15",
        question: "A source has an activity of 800 Bq. Its half-life is 5 hours. What is its activity after 15 hours?",
        options: ["400 Bq", "200 Bq", "100 Bq", "0 Bq"],
        answerIndex: 2,
        explanation: "15 hours = 3 half-lives. 800 → 400 → 200 → 100 Bq.",
        guideRef: "Half-life",
        difficulty: "core",
        hints: ["How many half-lives fit into 15 hours?", "Halve the activity once per half-life.", "800 → 400 → 200 → 100."],
        strategy: "Keep halving and count the steps",
      },
      {
        id: "rp-mcq-q16",
        question: "After 4 half-lives, the fraction of the original radioactive nuclei still remaining is…",
        options: ["1/4", "1/8", "1/16", "1/32"],
        answerIndex: 2,
        explanation: "Fraction remaining = (1/2)⁴ = 1/16.",
        guideRef: "Half-life",
        difficulty: "core",
        hints: ["Use (1/2)ⁿ.", "n = 4 here.", "1/2 × 1/2 × 1/2 × 1/2 = 1/16."],
      },
      {
        id: "rp-mcq-q17",
        question: "A sample falls from 6400 counts/min to 400 counts/min in 24 days. Its half-life is…",
        options: ["3 days", "4 days", "6 days", "8 days"],
        answerIndex: 2,
        explanation: "6400 → 3200 → 1600 → 800 → 400 is 4 halvings. Half-life = 24 ÷ 4 = 6 days.",
        guideRef: "Half-life",
        difficulty: "challenge",
        hints: ["How many times must you halve 6400 to reach 400?", "Count the halvings: 6400, 3200, 1600, 800, 400.", "Half-life = total time ÷ number of half-lives."],
        strategy: "Keep halving and count the steps",
      },
      {
        id: "rp-mcq-q18",
        question: "Radioactive decay is described as a random process. This means that…",
        options: [
          "the half-life changes from day to day",
          "you cannot predict when a particular nucleus will decay",
          "decay can be sped up by heating the sample",
          "the count rate never decreases",
        ],
        answerIndex: 1,
        explanation: "We cannot say when any individual nucleus will decay, only the probability; the half-life of a large sample is still constant and unaffected by temperature.",
        guideRef: "Half-life",
        difficulty: "core",
        hints: ["Does 'random' apply to one nucleus or to the average of many?", "Can heating change nuclear decay?", "Randomness is about individual unpredictability."],
      },
      {
        id: "rp-mcq-q19",
        question: "Which instrument is most commonly used to detect and count ionising radiation in the lab?",
        options: ["A thermometer", "A Geiger–Müller tube and counter", "An ammeter only", "A microphone"],
        answerIndex: 1,
        explanation: "A GM tube connected to a counter registers each ionising particle, giving a count rate.",
        guideRef: "Detecting radiation, dangers and safety",
        difficulty: "warmup",
      },
      {
        id: "rp-mcq-q20",
        question: "When measuring the activity of a weak source, why must the background count rate be subtracted?",
        options: [
          "The source is affected by the background",
          "Background radiation is always being detected too, so it must be removed to find the source's true count",
          "Background radiation makes the source decay faster",
          "It converts counts into becquerels",
        ],
        answerIndex: 1,
        explanation: "The detector also records ever-present background radiation; subtracting it leaves only the source's contribution.",
        guideRef: "Discovery of the nucleus and background radiation",
        difficulty: "core",
        hints: ["Is the detector only picking up the source?", "What else is always present?", "Subtract what is there even without the source."],
      },
      {
        id: "rp-mcq-q21",
        question: "If a radioactive source is taken INTO the body (swallowed or inhaled), which type is generally the most dangerous?",
        options: ["Alpha", "Beta", "Gamma", "All are equally safe inside"],
        answerIndex: 0,
        explanation: "Inside the body, alpha is most dangerous: it is very strongly ionising and deposits all its energy in nearby tissue, with no skin to stop it.",
        guideRef: "Detecting radiation, dangers and safety",
        difficulty: "challenge",
        hints: ["Outside the body, alpha is least dangerous — why?", "Inside, there is no skin to stop it.", "Which type ionises most strongly over a short range?"],
        strategy: "Split inside vs outside the body",
      },
      {
        id: "rp-mcq-q22",
        question: "A smoke detector uses a weak source of which type of radiation?",
        options: ["Alpha", "Beta", "Gamma", "X-rays"],
        answerIndex: 0,
        explanation: "A smoke detector uses a weak alpha source; alpha ionises the air to carry a small current, and smoke blocking the alpha drops the current and triggers the alarm.",
        guideRef: "Uses of radioactivity",
        difficulty: "core",
        hints: ["Which radiation ionises air most strongly over a short distance?", "It must be easily blocked by smoke.", "Alpha is strongly ionising and short-range."],
      },
      {
        id: "rp-mcq-q23",
        question: "A factory uses radiation to control the thickness of aluminium foil. Which type is most suitable, and why?",
        options: [
          "Alpha, because it is completely stopped by the foil",
          "Beta, because the amount passing through changes with thickness",
          "Gamma, because almost none is absorbed",
          "Alpha, because it is not absorbed at all",
        ],
        answerIndex: 1,
        explanation: "Beta is partly absorbed, so a change in thickness changes the count getting through — alpha would be fully stopped and gamma barely affected.",
        guideRef: "Uses of radioactivity",
        difficulty: "challenge",
        hints: ["The detector must notice a change when thickness changes.", "Alpha would be fully blocked; gamma barely affected.", "Beta is partly absorbed by such thin material."],
        strategy: "Match radiation to the job",
      },
      {
        id: "rp-mcq-q24",
        question: "In a nuclear reactor, the job of the control rods is to…",
        options: [
          "slow down the neutrons",
          "absorb neutrons to control the rate of the chain reaction",
          "supply extra neutrons",
          "remove heat from the core",
        ],
        answerIndex: 1,
        explanation: "Control rods absorb neutrons; lowering them removes more neutrons and slows the reaction. Slowing neutrons is the moderator's job.",
        guideRef: "Nuclear fission and fusion",
        difficulty: "core",
        hints: ["What controls how many neutrons go on to cause more fission?", "Rods can be raised or lowered.", "Absorbing neutrons reduces the reaction rate."],
      },
      {
        id: "rp-mcq-q25",
        question: "Which statement correctly distinguishes nuclear fusion from nuclear fission?",
        options: [
          "Fusion splits large nuclei; fission joins small nuclei",
          "Fusion joins small nuclei; fission splits large nuclei",
          "Both split nuclei, but fusion needs neutrons",
          "Fusion happens only in reactors; fission only in stars",
        ],
        answerIndex: 1,
        explanation: "Fusion joins light nuclei into a heavier one (as in stars); fission splits a heavy nucleus into smaller ones (as in reactors). Both release energy.",
        guideRef: "Nuclear fission and fusion",
        difficulty: "core",
        hints: ["'Fuse' means join; 'fission' relates to splitting.", "Which one powers the Sun?", "Stars fuse light nuclei together."],
      },
      {
        id: "rp-mcq-q26",
        question: "Nuclear fusion requires extremely high temperatures and pressures because…",
        options: [
          "the nuclei need to slow down before joining",
          "the positively charged nuclei repel and must be forced close enough to fuse",
          "it cools the nuclei to make them stable",
          "neutrons must be absorbed first",
        ],
        answerIndex: 1,
        explanation: "Both nuclei are positive and repel each other; only very high speed (temperature) and pressure can push them close enough for fusion to occur.",
        guideRef: "Nuclear fission and fusion",
        difficulty: "challenge",
        hints: ["What is the charge on each nucleus?", "Like charges repel.", "High temperature/pressure gives the speed to overcome repulsion."],
        strategy: "Link force to charge",
      },
    ],
    qa: [
      {
        id: "rp-qa-q01",
        question: "State the relative charge and relative mass of a proton, a neutron and an electron. (3 marks)",
        marks: 3,
        modelAnswer:
          "A proton has relative charge +1 and relative mass 1. A neutron has relative charge 0 and relative mass 1. An electron has relative charge −1 and relative mass that is negligible (about 1/1836).",
        markScheme: [
          "Proton: charge +1 and mass 1",
          "Neutron: charge 0 and mass 1",
          "Electron: charge −1 and mass negligible | mass ~1/1836 | very small mass",
        ],
        commonError: "Giving the electron a relative mass of 1, or forgetting the neutron is neutral.",
        guideRef: "Inside the atom",
        difficulty: "warmup",
      },
      {
        id: "rp-qa-q02",
        question: "Explain what is meant by isotopes. Use carbon-12 and carbon-14 as an example. (3 marks)",
        marks: 3,
        modelAnswer:
          "Isotopes are atoms of the same element, so they have the same number of protons (same atomic number), but they have different numbers of neutrons (different mass number). Carbon-12 and carbon-14 both have 6 protons, so both are carbon, but carbon-12 has 6 neutrons while carbon-14 has 8 neutrons.",
        markScheme: [
          "Same element / same number of protons / same atomic number Z",
          "Different number of neutrons / different mass number A",
          "Example: both have 6 protons | C-12 has 6 neutrons and C-14 has 8 neutrons",
        ],
        commonError: "Saying isotopes have different numbers of protons — they must have the same proton number to be the same element.",
        guideRef: "Atomic number, mass number and nuclide notation",
        difficulty: "core",
        hints: ["Are isotopes the same element or different elements?", "What must stay the same for the same element?", "What is allowed to differ?"],
      },
      {
        id: "rp-qa-q03",
        question: "Describe the alpha-scattering (Geiger–Marsden) experiment and state what two of its results tell us about the structure of the atom. (4 marks)",
        marks: 4,
        modelAnswer:
          "Alpha particles were fired at a very thin sheet of gold foil and their paths were observed. Most of the alpha particles passed straight through with little or no deflection, which shows that the atom is mostly empty space. A small number were deflected through large angles, and a very few bounced almost straight back, which shows that there is a tiny, dense, positively charged nucleus that contains most of the atom's mass.",
        markScheme: [
          "Alpha particles fired at thin gold foil",
          "Most pass straight through → atom is mostly empty space",
          "A few deflected by large angles / a very few rebound",
          "→ small, dense, positively charged nucleus containing most of the mass",
        ],
        commonError: "Saying the electrons deflected the alphas — it is the concentrated positive nucleus that causes the large deflections.",
        guideRef: "Discovery of the nucleus and background radiation",
        difficulty: "core",
        hints: ["What was fired at what?", "What did 'most pass straight through' tell us?", "What did 'a few bounce back' tell us?"],
      },
      {
        id: "rp-qa-q04",
        question: "Compare alpha, beta and gamma radiation in terms of their nature, charge and penetrating power. (6 marks)",
        marks: 6,
        modelAnswer:
          "Alpha radiation is a helium nucleus (2 protons and 2 neutrons) with a relative charge of +2; it is the most strongly ionising but the least penetrating, being stopped by a sheet of paper or a few centimetres of air. Beta-minus radiation is a fast-moving electron with a relative charge of −1; it is moderately ionising and is stopped by a few millimetres of aluminium. Gamma radiation is a high-frequency electromagnetic wave with no charge and no mass; it is the least ionising but the most penetrating, being only reduced by thick lead or concrete.",
        markScheme: [
          "Alpha is a helium nucleus | 2 protons + 2 neutrons, charge +2",
          "Alpha: least penetrating / stopped by paper (most ionising)",
          "Beta is a (fast) electron, charge −1",
          "Beta: stopped by a few mm of aluminium (medium penetration)",
          "Gamma is an electromagnetic wave, no charge / no mass",
          "Gamma: most penetrating / needs thick lead or concrete (least ionising)",
        ],
        commonError: "Mixing up penetration and ionisation — the most penetrating (gamma) is the least ionising, and vice versa.",
        guideRef: "Types of radiation: alpha, beta and gamma",
        difficulty: "core",
        hints: ["State what each one actually is first.", "Give each one a charge.", "Rank them by what stops them: paper, aluminium, lead."],
      },
      {
        id: "rp-qa-q05",
        question: "Radium-226 has atomic number 88 and decays by emitting an alpha particle to form radon (Rn). Write the balanced nuclear decay equation, giving the mass number and atomic number of the radon nucleus, and explain how you balanced it. (4 marks)",
        marks: 4,
        modelAnswer:
          "The alpha particle has mass number 4 and atomic number 2. To balance, the totals of the mass numbers and of the atomic numbers must be equal on both sides. So the radon mass number = 226 − 4 = 222 and its atomic number = 88 − 2 = 86. The equation is: radium-226 (Z = 88) → radon-222 (Z = 86) + alpha particle (A = 4, Z = 2). Check: 222 + 4 = 226 and 86 + 2 = 88.",
        markScheme: [
          "Alpha particle is A = 4, Z = 2",
          "Mass numbers balance: 222 + 4 = 226 | Rn mass number = 222",
          "Atomic numbers balance: 86 + 2 = 88 | Rn atomic number = 86",
          "Correct equation showing Ra-226 → Rn-222 + alpha",
        ],
        commonError: "Subtracting from the wrong number (e.g. taking 2 off the mass number) or not checking both totals balance.",
        guideRef: "Nuclear decay equations",
        difficulty: "core",
        hints: ["What are the A and Z of an alpha particle?", "The top numbers must add up the same on both sides; so must the bottom numbers.", "226 − 4 and 88 − 2."],
        solutions: [
          {
            label: "Method: balance A then Z",
            steps: [
              "Write the alpha particle as A = 4, Z = 2 (helium nucleus).",
              "Conserve mass number A: 226 = A(Rn) + 4 → A(Rn) = 222.",
              "Conserve atomic number Z: 88 = Z(Rn) + 2 → Z(Rn) = 86.",
              "Z = 86 names the element radon, so the product is radon-222.",
              "Final check: 222 + 4 = 226 and 86 + 2 = 88.",
            ],
          },
        ],
      },
      {
        id: "rp-qa-q06",
        question: "A nucleus undergoes beta-minus decay. Explain what happens inside the nucleus and how its mass number and atomic number change. Illustrate with the decay of carbon-14 (Z = 6) into nitrogen (N). (4 marks)",
        marks: 4,
        modelAnswer:
          "In beta-minus decay a neutron inside the nucleus changes into a proton, and a fast electron (the beta particle) is emitted. Because a neutron becomes a proton, the mass number stays the same while the atomic number increases by 1. For carbon-14: the mass number stays 14 and the atomic number rises from 6 to 7, so it becomes nitrogen-14. The beta particle has A = 0 and Z = −1, so the equation balances: 14 = 14 + 0 and 7 + (−1) = 6.",
        markScheme: [
          "A neutron changes into a proton (electron emitted)",
          "Mass number A stays the same",
          "Atomic number Z increases by 1",
          "Carbon-14 → nitrogen-14 (A = 14, Z = 7) with beta particle A = 0, Z = −1",
        ],
        commonError: "Thinking the atom loses mass in beta decay — the mass number is unchanged because a neutron simply converts into a proton.",
        guideRef: "Nuclear decay equations",
        difficulty: "core",
        hints: ["What converts into what inside the nucleus?", "If a neutron becomes a proton, what happens to Z?", "The beta particle counts as Z = −1, A = 0."],
        solutions: [
          {
            label: "Method: track the neutron-to-proton change",
            steps: [
              "A neutron turns into a proton, emitting an electron (beta particle).",
              "Total nucleons unchanged, so A stays the same (14).",
              "One extra proton, so Z goes up by 1: 6 → 7.",
              "Z = 7 is nitrogen → nitrogen-14.",
              "Balance check with beta as A = 0, Z = −1: 14 = 14 + 0 and 6 = 7 + (−1).",
            ],
          },
        ],
      },
      {
        id: "rp-qa-q07",
        question: "Define half-life. A radioactive source has an activity of 6400 Bq and a half-life of 2 hours. Calculate its activity after 8 hours. (4 marks)",
        marks: 4,
        modelAnswer:
          "The half-life is the time taken for half of the radioactive nuclei in a sample to decay, or equivalently the time for the activity (count rate) to halve. In 8 hours there are 8 ÷ 2 = 4 half-lives. Halving the activity four times: 6400 → 3200 → 1600 → 800 → 400 Bq. So the activity after 8 hours is 400 Bq.",
        markScheme: [
          "Half-life = time for half the nuclei to decay | time for activity/count rate to halve",
          "Number of half-lives = 8 ÷ 2 = 4",
          "Halve four times: 6400 → 3200 → 1600 → 800 → 400",
          "Activity = 400 Bq",
        ],
        commonError: "Dividing the activity by 4 instead of halving it 4 times (giving 1600 instead of 400).",
        guideRef: "Half-life",
        difficulty: "core",
        hints: ["First find how many half-lives are in 8 hours.", "Each half-life halves the activity.", "Halve 6400 four times in turn."],
        solutions: [
          {
            label: "Method 1: repeated halving",
            steps: [
              "Number of half-lives n = total time ÷ half-life = 8 ÷ 2 = 4.",
              "Halve once: 6400 → 3200.",
              "Halve again: 3200 → 1600 → 800 → 400.",
              "Activity after 4 half-lives = 400 Bq.",
            ],
          },
          {
            label: "Method 2: use (1/2)ⁿ",
            steps: [
              "n = 8 ÷ 2 = 4 half-lives.",
              "Fraction remaining = (1/2)⁴ = 1/16.",
              "Activity = 6400 × 1/16 = 400 Bq.",
            ],
          },
        ],
      },
      {
        id: "rp-qa-q08",
        question: "A teacher measures a count rate of 920 counts per minute near a source. The background count rate is 20 counts per minute. The corrected count rate falls to 225 counts per minute after 12 days. Determine the half-life of the source. (4 marks)",
        marks: 4,
        modelAnswer:
          "First correct for background: the true initial count rate from the source is 920 − 20 = 900 counts per minute. Halving from 900: 900 → 450 → 225 counts per minute, which is 2 half-lives. So the half-life = 12 ÷ 2 = 6 days.",
        markScheme: [
          "Subtract background: 920 − 20 = 900 counts/min",
          "Halve to the final value: 900 → 450 → 225 (2 half-lives)",
          "Half-life = total time ÷ number of half-lives = 12 ÷ 2",
          "Half-life = 6 days",
        ],
        commonError: "Forgetting to subtract the background count rate before working out the number of half-lives.",
        guideRef: "Half-life",
        difficulty: "challenge",
        hints: ["What must you do to the count rate before using it?", "Subtract background, then see how many halvings reach 225.", "Half-life = total time ÷ number of half-lives."],
        solutions: [
          {
            label: "Method: correct for background, then count halvings",
            steps: [
              "Corrected initial rate = 920 − 20 = 900 counts/min.",
              "Halve: 900 → 450 (1 half-life).",
              "Halve again: 450 → 225 (2 half-lives) — this matches the final value.",
              "Half-life = 12 days ÷ 2 = 6 days.",
            ],
          },
        ],
      },
      {
        id: "rp-qa-q09",
        question: "Explain how a medical tracer is used, and justify why a gamma-emitting isotope with a short half-life is chosen. (4 marks)",
        marks: 4,
        modelAnswer:
          "A small amount of a radioactive isotope is injected into or swallowed by the patient, and a detector outside the body tracks where it goes (for example to check the flow through the kidneys). A gamma emitter is chosen because gamma radiation can penetrate the body tissue and escape to reach the external detector, whereas alpha or beta would be absorbed. A short half-life is chosen so that the activity falls quickly and the patient is not exposed to radiation for any longer than necessary, reducing the dose and the risk of cell damage.",
        markScheme: [
          "Tracer is injected/swallowed and followed by an external detector",
          "Gamma is used because it penetrates / can escape the body to be detected",
          "Short half-life so activity drops quickly",
          "Reduces the dose / risk to the patient",
        ],
        commonError: "Choosing an alpha emitter — alpha cannot escape the body to be detected and is very dangerous inside.",
        guideRef: "Uses of radioactivity",
        difficulty: "core",
        hints: ["How does the tracer get in and how is it detected?", "Which radiation can get out of the body?", "Why would you want the activity to drop quickly?"],
      },
      {
        id: "rp-qa-q10",
        question: "State three precautions a worker should take when handling radioactive sources, and explain how each reduces the risk. (3 marks)",
        marks: 3,
        modelAnswer:
          "Keep the handling time as short as possible, so the total exposure (dose) is reduced. Keep as far from the source as possible, for example by using long tongs, because the radiation spreads out and weakens with distance. Use shielding, such as a lead-lined container or lead screen, which absorbs the radiation before it reaches the body. (Wearing a film badge to monitor dose is also acceptable.)",
        markScheme: [
          "Short exposure time → less total dose",
          "Increase distance (e.g. tongs) → radiation weaker further away",
          "Use shielding (lead/concrete) → absorbs radiation before it reaches the body | film badge to monitor dose",
        ],
        commonError: "Stating a precaution without explaining why it works (the explanation is required for the mark).",
        guideRef: "Detecting radiation, dangers and safety",
        difficulty: "core",
        hints: ["Think time, distance, shielding.", "Why does standing back help?", "Pair each precaution with a reason."],
      },
      {
        id: "rp-qa-q11",
        question: "Describe nuclear fission and explain how a chain reaction is controlled in a nuclear reactor, naming the moderator and control rods. (5 marks)",
        marks: 5,
        modelAnswer:
          "Nuclear fission is the splitting of a large, unstable nucleus (such as uranium-235) into two smaller nuclei, releasing energy and two or three neutrons. These released neutrons can be absorbed by other uranium nuclei, making them split too — this is a chain reaction. In a reactor the chain reaction is controlled. A moderator (such as water or graphite) slows the fast neutrons down so they are more likely to be absorbed and cause further fission. Control rods (such as boron) absorb neutrons; they are lowered into the core to absorb more neutrons and slow the reaction, or raised to speed it up, keeping the reaction rate steady.",
        markScheme: [
          "Fission = splitting a large/unstable nucleus into smaller nuclei",
          "Releases energy and 2–3 neutrons",
          "Released neutrons cause further fission → chain reaction",
          "Moderator slows down (fast) neutrons | so they are absorbed / cause more fission",
          "Control rods absorb neutrons / raised or lowered to control the rate",
        ],
        commonError: "Confusing the jobs of the moderator (slows neutrons) and the control rods (absorb neutrons).",
        guideRef: "Nuclear fission and fusion",
        difficulty: "challenge",
        hints: ["What is fission and what does it release?", "How do the extra neutrons keep it going?", "Which part slows neutrons, and which part absorbs them?"],
      },
      {
        id: "rp-qa-q12",
        question: "Explain what nuclear fusion is, where it occurs naturally, and why it is so difficult to achieve on Earth. (4 marks)",
        marks: 4,
        modelAnswer:
          "Nuclear fusion is the joining together of two light nuclei (such as hydrogen isotopes) to form a heavier nucleus, releasing a large amount of energy. It occurs naturally in the Sun and other stars, which is where their energy comes from. It is difficult to achieve on Earth because both nuclei are positively charged and so repel each other strongly; extremely high temperatures and pressures are needed to give the nuclei enough speed to overcome this repulsion and get close enough to fuse.",
        markScheme: [
          "Fusion = joining/combining two light/small nuclei into a heavier nucleus",
          "Releases (a large amount of) energy",
          "Occurs in the Sun / stars",
          "Hard on Earth: nuclei are positive and repel → need very high temperature and pressure to overcome repulsion",
        ],
        commonError: "Describing fusion as splitting nuclei — that is fission; fusion is joining nuclei together.",
        guideRef: "Nuclear fission and fusion",
        difficulty: "challenge",
        hints: ["Does fusion join or split nuclei?", "Where do stars get their energy?", "What is the charge on the nuclei, and what does that cause?"],
      },
    ],
  },
  // questionBank omitted — auto-assembled from the quiz pools by lib/content.ts.
};
