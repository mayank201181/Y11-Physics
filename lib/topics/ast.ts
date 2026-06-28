import type { Topic } from "../types";

// Astrophysics (Edexcel IGCSE Physics 4PH1, Topic 8 content / app topic 11).
// Solar System & orbits, orbital speed v = 2πr/T, comets, satellites, stellar
// life cycles (low- and high-mass), element formation, luminosity & brightness,
// redshift, the expanding Universe, the Big Bang and CMBR, plus the speed of
// light c = 3e8 m/s and the light-year as a unit of distance.

export const ast: Topic = {
  id: "ast",
  code: "AST",
  number: 11,
  title: "Astrophysics",
  subject: "Physics",
  icon: "🌌",
  color: "#7c3aed",
  intro:
    "From the orbits of planets and comets to the birth and death of stars, this topic uses physics you already know — gravity, circular motion, waves — to explain the whole Universe. You'll learn why comets speed up near the Sun, how a star like our Sun will end its life, where the atoms in your body came from, and how the redshift of distant galaxies tells us the Universe is expanding from a Big Bang.",
  guide: [
    {
      heading: "The Solar System",
      discovery: {
        problem:
          "Look up at night and the planets, the Moon and the occasional comet all seem to drift across the sky differently. They are all part of one system held together by the same Sun — so what exactly is orbiting what, and why don't they all just fly off into space?",
        idea:
          "Everything in the Solar System orbits because the Sun's gravity constantly pulls each object toward it. That inward pull bends a straight-line motion into a closed orbit. The bigger and closer the object, the stronger the pull.",
      },
      body:
        "The **Solar System** formed about 4.6 billion years ago from a giant cloud of gas and dust (a nebula). Gravity pulled most of the material into the centre, where it became hot and dense enough for fusion to start — forming the **Sun**. The leftover material orbiting the young Sun clumped together to form the planets, moons, asteroids and comets. At the centre is the **Sun**, a star, which contains over 99% of the system's mass.\n\n**The eight planets, in order from the Sun:**\n\n1. Mercury\n2. Venus\n3. Earth\n4. Mars\n5. Jupiter\n6. Saturn\n7. Uranus\n8. Neptune\n\n(A common mnemonic: *My Very Easy Method Just Speeds Up Naming*.) The four **inner** planets (Mercury–Mars) are small and **rocky**; the four **outer** planets (Jupiter–Neptune) are large **gas/ice giants**.\n\nAlso orbiting the Sun are:\n\n- **Dwarf planets** such as **Pluto** — large enough for gravity to pull them into a round shape, but they have *not* cleared other objects from their orbit (which is why Pluto is no longer counted as a full planet).\n- **Moons (natural satellites)** that orbit planets, e.g. Earth's Moon and Jupiter's many moons.\n- **Asteroids** — small rocky bodies, most in the **asteroid belt** between Mars and Jupiter.\n- **Comets** — small icy bodies on long, highly **elliptical** orbits that take them far from and then close to the Sun.\n\nThe planets follow **slightly elliptical** (almost circular) orbits. Orbits get larger, and the planets move more slowly with longer periods, the further you go from the Sun.",
      diagrams: [
        {
          caption: "The Sun at the centre with planets in near-circular orbits and a comet on an elliptical orbit.",
          svg:
            '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Solar System with the Sun at the centre, planets in circular orbits and a comet on a long elliptical orbit">\n<rect x="0" y="0" width="320" height="200" fill="#f8fafc"/>\n<circle cx="120" cy="100" r="60" fill="none" stroke="#94a3b8"/>\n<circle cx="120" cy="100" r="40" fill="none" stroke="#94a3b8"/>\n<circle cx="120" cy="100" r="22" fill="none" stroke="#94a3b8"/>\n<ellipse cx="160" cy="100" rx="140" ry="55" fill="none" stroke="#7c3aed" stroke-dasharray="4 3"/>\n<circle cx="120" cy="100" r="12" fill="#f59e0b" stroke="#b45309"/>\n<text x="120" y="104" font-size="9" text-anchor="middle" fill="#7c2d12">Sun</text>\n<circle cx="142" cy="100" r="3" fill="#1e293b"/>\n<circle cx="120" cy="60" r="3" fill="#1d4ed8"/>\n<circle cx="180" cy="100" r="4" fill="#b91c1c"/>\n<circle cx="298" cy="100" r="4" fill="#0ea5e9"/>\n<text x="298" y="92" font-size="8" text-anchor="middle" fill="#334155">comet</text>\n<text x="160" y="170" font-size="9" text-anchor="middle" fill="#7c3aed">comet: long elliptical orbit</text>\n</svg>',
        },
      ],
      keyPoints: [
        "The Sun (a star) holds 99%+ of the Solar System's mass and sits at the centre.",
        "Planet order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
        "Inner 4 planets are small and rocky; outer 4 are gas/ice giants.",
        "Planets have slightly elliptical (near-circular) orbits; comets have highly elliptical orbits.",
        "Dwarf planets (e.g. Pluto) have not cleared their orbits; moons orbit planets.",
        "Asteroids are small rocky bodies, mostly between Mars and Jupiter.",
        "The Solar System formed ~4.6 billion years ago from a collapsing cloud of gas and dust.",
      ],
      strategies: ["Classify objects by type before reasoning", "Link orbit shape to object type"],
    },
    {
      heading: "Gravity and circular orbits",
      discovery: {
        problem:
          "A planet moving in a circle is constantly changing direction, so it is accelerating — but there's no rope tying it to the Sun. What force keeps pulling it round, and why doesn't the planet either fall into the Sun or fly off in a straight line?",
        idea:
          "Gravity is the force. To move in a circle an object needs a force pointing toward the centre (a centripetal force). For orbits, **gravity provides that centripetal force**. It's perfectly balanced so the planet keeps falling toward the Sun while always missing it — a stable orbit.",
      },
      body:
        "Any object moving in a circle needs a **centripetal force** directed toward the centre of the circle. Without it, the object would travel in a straight line (Newton's first law).\n\nFor orbits, **the gravitational force between the Sun and the object provides the centripetal force**. The same idea applies to a moon orbiting a planet or a satellite orbiting Earth.\n\nThe strength of the gravitational pull, and hence the orbit, depends on:\n\n- The **masses** involved (bigger masses → stronger pull).\n- The **distance** between them (closer → much stronger pull).\n\nBecause the force always acts toward the centre and is perpendicular to the motion, it changes the *direction* of the velocity (keeping the object in orbit) but not its speed for a circular orbit. The speed stays constant only because the radius is constant — which is why comets, on elliptical orbits, change speed (next section).",
      diagrams: [
        {
          caption: "Gravity (toward the Sun) provides the centripetal force; velocity is along the tangent.",
          svg:
            '<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A planet orbiting the Sun, with gravity arrow pointing inward and velocity arrow along the tangent">\n<rect x="0" y="0" width="240" height="200" fill="#f8fafc"/>\n<circle cx="120" cy="100" r="70" fill="none" stroke="#94a3b8" stroke-dasharray="3 3"/>\n<circle cx="120" cy="100" r="14" fill="#f59e0b" stroke="#b45309"/>\n<text x="120" y="104" font-size="9" text-anchor="middle" fill="#7c2d12">Sun</text>\n<circle cx="190" cy="100" r="7" fill="#1d4ed8"/>\n<line x1="190" y1="100" x2="135" y2="100" stroke="#b91c1c" stroke-width="2" marker-end="url(#g)"/>\n<text x="160" y="92" font-size="9" text-anchor="middle" fill="#b91c1c">gravity</text>\n<line x1="190" y1="100" x2="190" y2="40" stroke="#15803d" stroke-width="2" marker-end="url(#v)"/>\n<text x="208" y="55" font-size="9" text-anchor="middle" fill="#15803d">v</text>\n<defs><marker id="g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#b91c1c"/></marker><marker id="v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#15803d"/></marker></defs>\n</svg>',
        },
      ],
      keyPoints: [
        "Circular motion needs a centripetal (centre-seeking) force.",
        "Gravity provides the centripetal force for all orbits.",
        "Gravitational force is bigger for larger masses and smaller separations.",
        "The force changes the direction of motion, keeping the object in orbit.",
      ],
      whyItWorks:
        "Velocity points along the tangent; gravity pulls at 90° to it, toward the centre. A force perpendicular to motion turns the velocity without speeding it up, so the object keeps curving round in a closed path instead of flying off straight.",
      formulae: ["Gravity provides the centripetal force for orbital motion"],
      strategies: ["Identify the force toward the centre", "Use Newton's first law to see why a force is needed"],
    },
    {
      heading: "Orbital speed: v = 2πr/T",
      body:
        "For an object in a (near-)circular orbit, the **orbital speed** is the distance travelled in one orbit divided by the time taken:\n\n`v = 2 π r / T`\n\nwhere:\n\n- `v` = orbital speed (m/s)\n- `r` = orbital radius — the distance from the centre of the orbit to the object (m)\n- `T` = orbital period — the time for one complete orbit (s)\n\nThe `2 π r` is just the **circumference** of the circular orbit. Watch your units: convert kilometres to metres and convert days/years into **seconds** before substituting.\n\nUseful conversions: 1 day = 24 × 60 × 60 = 86 400 s; 1 year ≈ 3.15 × 10⁷ s; 1 km = 1000 m.",
      keyPoints: [
        "v = 2πr/T, where 2πr is the orbit's circumference.",
        "r is the orbital radius (centre to object), not the diameter.",
        "Convert the period T into seconds and r into metres first.",
        "Larger, more distant orbits have longer periods and (for planets) slower speeds.",
      ],
      formulae: ["v = 2 π r / T", "1 day = 86 400 s", "1 year ≈ 3.15 × 10⁷ s"],
      whyItWorks:
        "In one full orbit the object travels exactly one circumference, 2πr, in one period T. Speed is distance ÷ time, so v = 2πr ÷ T. It is just speed = distance/time applied to a circle.",
      strategies: ["Write the equation, list knowns with units", "Convert all units before substituting", "Check the answer's order of magnitude"],
    },
    {
      heading: "Comets and elliptical orbits",
      discovery: {
        problem:
          "A comet crawls along for years in the cold outer Solar System, then suddenly whips around the Sun at enormous speed before heading back out. If gravity is the only force, why does it speed up and slow down so dramatically when a planet's speed barely changes?",
        idea:
          "A comet's orbit is a stretched **ellipse**, so its distance from the Sun changes a lot. Near the Sun gravity is far stronger and pulls it forward — gravitational potential energy is converted into kinetic energy, so the comet speeds up. Far away it slows down again. A planet's near-circular orbit keeps r almost constant, so its speed barely changes.",
      },
      body:
        "**Comets** orbit the Sun on long, highly **elliptical** (stretched) paths. Unlike a planet's circle, the comet's distance from the Sun varies enormously:\n\n- **Closest point** to the Sun = *perihelion*: the comet moves **fastest** here.\n- **Furthest point** from the Sun = *aphelion*: the comet moves **slowest** here.\n\nWhy the speed changes: as the comet falls inward toward the Sun, the Sun's gravity does work on it. **Gravitational potential energy is transferred into kinetic energy**, so the comet speeds up. As it climbs back out, kinetic energy is converted back into gravitational potential energy, so it slows down. (Total energy is conserved.)\n\nGravity is also much **stronger** when the comet is close to the Sun (smaller separation), giving a larger forward pull and accelerating it more near perihelion.",
      diagrams: [
        {
          caption: "A comet's elliptical orbit: fast at perihelion (near Sun), slow at aphelion (far).",
          svg:
            '<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Elliptical comet orbit with the Sun off-centre, comet fastest near the Sun and slowest far away">\n<rect x="0" y="0" width="320" height="180" fill="#f8fafc"/>\n<ellipse cx="160" cy="90" rx="140" ry="60" fill="none" stroke="#7c3aed" stroke-width="2"/>\n<circle cx="70" cy="90" r="12" fill="#f59e0b" stroke="#b45309"/>\n<text x="70" y="94" font-size="9" text-anchor="middle" fill="#7c2d12">Sun</text>\n<circle cx="40" cy="90" r="5" fill="#1e293b"/>\n<text x="40" y="78" font-size="8" text-anchor="middle" fill="#334155">perihelion</text>\n<line x1="40" y1="90" x2="40" y2="55" stroke="#b91c1c" stroke-width="3" marker-end="url(#f)"/>\n<text x="40" y="50" font-size="8" text-anchor="middle" fill="#b91c1c">fast</text>\n<circle cx="300" cy="90" r="5" fill="#1e293b"/>\n<text x="285" y="105" font-size="8" text-anchor="middle" fill="#334155">aphelion</text>\n<line x1="300" y1="90" x2="300" y2="78" stroke="#1d4ed8" stroke-width="2" marker-end="url(#s)"/>\n<text x="300" y="74" font-size="8" text-anchor="middle" fill="#1d4ed8">slow</text>\n<defs><marker id="f" markerWidth="9" markerHeight="9" refX="4" refY="6" orient="auto"><path d="M0 6 L4 0 L8 6 z" fill="#b91c1c"/></marker><marker id="s" markerWidth="9" markerHeight="9" refX="4" refY="6" orient="auto"><path d="M0 6 L4 0 L8 6 z" fill="#1d4ed8"/></marker></defs>\n</svg>',
        },
      ],
      keyPoints: [
        "Comet orbits are highly elliptical, so distance from the Sun varies a lot.",
        "Fastest at perihelion (closest); slowest at aphelion (furthest).",
        "Falling inward: gravitational PE → kinetic energy, so it speeds up.",
        "Gravity is stronger closer to the Sun, giving greater acceleration.",
      ],
      whyItWorks:
        "Energy is conserved. The comet's total energy (kinetic + gravitational potential) stays constant. Closer to the Sun it has less gravitational PE, so it must have more KE — i.e. more speed.",
      thinkDeeper:
        "Halley's Comet takes about 76 years per orbit, yet it spends only a few months close enough to the Sun to be visible. Why does it spend so little of its orbit near the Sun? (It is moving fastest there, so it covers that part of the orbit quickly.)",
      strategies: ["Use energy conservation (KE ↔ GPE)", "Compare extremes: perihelion vs aphelion"],
    },
    {
      heading: "Satellites: geostationary and polar orbits",
      discovery: {
        problem:
          "A TV satellite dish on a house never moves — it points at one fixed spot in the sky all day. But a weather satellite has to sweep over the whole planet. How can different satellites have such different jobs if they all just obey gravity?",
        idea:
          "It depends on the orbit. Put a satellite high up (about 36 000 km) over the equator and give it a 24-hour period and it stays above the same point on Earth — geostationary. Put one in a low orbit over the poles and Earth turns underneath it, so it scans the whole surface.",
      },
      body:
        "A **satellite** is any object that orbits a larger one. Earth has one natural satellite (the Moon) and thousands of artificial ones. Two important orbit types:\n\n**Geostationary orbit**\n\n- High altitude (~36 000 km above the equator).\n- Orbital period of exactly **24 hours**, matching Earth's rotation.\n- The satellite stays **above the same point** on Earth's surface.\n- Uses: **communications, TV broadcasting, weather monitoring of one region** — a ground dish can point at one fixed spot.\n\n**Low polar orbit**\n\n- Low altitude (a few hundred km), passing over (or near) the **North and South poles**.\n- Short period (~90 minutes), moving fast.\n- Earth rotates beneath it, so over a day it scans the **whole surface**.\n- Uses: **weather forecasting, mapping, spying, scientific imaging** — higher resolution because it is closer.",
      diagrams: [
        {
          caption: "Geostationary orbit (high, over equator, fixed above one point) vs low polar orbit.",
          svg:
            '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Earth with a high geostationary orbit around the equator and a low polar orbit over the poles">\n<rect x="0" y="0" width="300" height="200" fill="#f8fafc"/>\n<circle cx="150" cy="100" r="40" fill="#bfdbfe" stroke="#1d4ed8"/>\n<text x="150" y="104" font-size="10" text-anchor="middle" fill="#1e3a8a">Earth</text>\n<ellipse cx="150" cy="100" rx="120" ry="35" fill="none" stroke="#7c3aed" stroke-width="2"/>\n<circle cx="270" cy="100" r="5" fill="#7c3aed"/>\n<text x="245" y="92" font-size="8" text-anchor="middle" fill="#7c3aed">geostationary</text>\n<circle cx="150" cy="100" r="58" fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="4 3"/>\n<circle cx="150" cy="42" r="4" fill="#15803d"/>\n<text x="150" y="30" font-size="8" text-anchor="middle" fill="#15803d">polar (low)</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Geostationary: ~36 000 km, 24 h period, stays above one point; for comms/TV.",
        "Low polar: a few hundred km, ~90 min, fast; scans the whole Earth.",
        "Geostationary must be over the equator; polar passes over the poles.",
        "Lower orbits move faster and have shorter periods.",
      ],
      strategies: ["Match the orbit to the satellite's job", "Link altitude to period and speed"],
    },
    {
      heading: "The life cycle of stars",
      discovery: {
        problem:
          "Stars look permanent — the same constellations our ancestors saw. But stars are not eternal: they are born, shine for billions of years, then die. What decides whether a star fades quietly or explodes, and what is left behind?",
        idea:
          "The deciding factor is **mass**. All stars start the same way, but a star like our Sun ends gently as a white dwarf, while a much more massive star ends violently in a supernova, leaving a neutron star or black hole. Gravity and fusion fight throughout a star's life.",
      },
      body:
        "Stars form and die over billions of years. **All stars begin the same way**, then their fate depends on **mass**.\n\n**Common beginning**\n\n1. **Nebula** — a cloud of dust and gas.\n2. Gravity pulls it together; it contracts and heats up to form a **protostar**.\n3. When hot/dense enough, **nuclear fusion** of hydrogen into helium begins, and it becomes a **main sequence star**. It is stable here for most of its life: the outward pressure from fusion balances the inward pull of gravity. Our Sun is a main sequence star.\n\n**A star like the Sun (low/medium mass)**\n\n4. When the hydrogen runs low, it swells into a **red giant**.\n5. It then sheds its outer layers as a **planetary nebula**.\n6. The hot, dense core left behind is a **white dwarf**, which slowly cools over a very long time and eventually becomes a (theoretical) cold **black dwarf**.\n\n**A much more massive star**\n\n4. It swells into a **red supergiant**.\n5. It explodes in a **supernova**.\n6. The remaining core becomes a **neutron star**, or — if massive enough — a **black hole**.",
      diagrams: [
        {
          caption: "Stellar life cycle: a common start, then two paths set by mass.",
          svg:
            '<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flow chart of the stellar life cycle from nebula and protostar to main sequence, then a low-mass path to white dwarf and a high-mass path to neutron star or black hole">\n<rect x="0" y="0" width="360" height="220" fill="#f8fafc"/>\n<rect x="10" y="95" width="60" height="28" rx="4" fill="#ede9fe" stroke="#7c3aed"/>\n<text x="40" y="113" font-size="9" text-anchor="middle" fill="#5b21b6">Nebula</text>\n<rect x="80" y="95" width="60" height="28" rx="4" fill="#ede9fe" stroke="#7c3aed"/>\n<text x="110" y="109" font-size="8" text-anchor="middle" fill="#5b21b6">Proto-</text>\n<text x="110" y="118" font-size="8" text-anchor="middle" fill="#5b21b6">star</text>\n<rect x="150" y="95" width="64" height="28" rx="4" fill="#fde68a" stroke="#b45309"/>\n<text x="182" y="109" font-size="8" text-anchor="middle" fill="#7c2d12">Main</text>\n<text x="182" y="118" font-size="8" text-anchor="middle" fill="#7c2d12">sequence</text>\n<line x1="70" y1="109" x2="80" y2="109" stroke="#334155" marker-end="url(#m)"/>\n<line x1="140" y1="109" x2="150" y2="109" stroke="#334155" marker-end="url(#m)"/>\n<rect x="240" y="40" width="60" height="26" rx="4" fill="#fecaca" stroke="#b91c1c"/>\n<text x="270" y="56" font-size="8" text-anchor="middle" fill="#7f1d1d">Red giant</text>\n<rect x="240" y="150" width="60" height="26" rx="4" fill="#fecaca" stroke="#b91c1c"/>\n<text x="270" y="161" font-size="7.5" text-anchor="middle" fill="#7f1d1d">Red</text>\n<text x="270" y="170" font-size="7.5" text-anchor="middle" fill="#7f1d1d">supergiant</text>\n<line x1="214" y1="103" x2="240" y2="60" stroke="#334155" marker-end="url(#m)"/>\n<line x1="214" y1="116" x2="240" y2="158" stroke="#334155" marker-end="url(#m)"/>\n<text x="220" y="50" font-size="7" fill="#475569">low mass</text>\n<text x="216" y="145" font-size="7" fill="#475569">high mass</text>\n<rect x="305" y="40" width="50" height="26" rx="4" fill="#e0e7ff" stroke="#4338ca"/>\n<text x="330" y="50" font-size="7" text-anchor="middle" fill="#312e81">White</text>\n<text x="330" y="59" font-size="7" text-anchor="middle" fill="#312e81">dwarf</text>\n<line x1="300" y1="53" x2="305" y2="53" stroke="#334155" marker-end="url(#m)"/>\n<rect x="305" y="150" width="50" height="26" rx="4" fill="#1e293b" stroke="#000"/>\n<text x="330" y="161" font-size="6.5" text-anchor="middle" fill="#fff">neutron/</text>\n<text x="330" y="170" font-size="6.5" text-anchor="middle" fill="#fff">black hole</text>\n<line x1="300" y1="163" x2="305" y2="163" stroke="#334155" marker-end="url(#m)"/>\n<text x="270" y="135" font-size="7" text-anchor="middle" fill="#b91c1c">supernova</text>\n<defs><marker id="m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#334155"/></marker></defs>\n</svg>',
        },
      ],
      keyPoints: [
        "All stars: nebula → protostar → main sequence star.",
        "Sun-like star: red giant → planetary nebula → white dwarf (→ eventually black dwarf).",
        "Massive star: red supergiant → supernova → neutron star or black hole.",
        "On the main sequence, fusion pressure balances gravity (stable).",
        "A star's final fate is decided by its mass.",
      ],
      whyItWorks:
        "Throughout a star's life, gravity tries to collapse it while energy released by fusion pushes outward. While there is fuel to fuse, the two balance. When fuel runs low, gravity wins and the star changes — gently for low mass, catastrophically for high mass.",
      strategies: ["Learn the common start, then branch by mass", "Use a flow chart to fix the order"],
    },
    {
      heading: "Forming elements & luminosity",
      body:
        "**Where elements come from**\n\nMain sequence stars fuse **hydrogen into helium**. In larger, hotter stars, fusion continues to build heavier elements up to **iron**. Elements **heavier than iron** require so much energy that they form only in the extreme conditions of a **supernova** explosion. The supernova then scatters these elements into space, where they can form new stars and planets — so the atoms in your body were made in stars. \n\n**Luminosity and brightness**\n\n- **Luminosity** is the *total* power a star actually emits (how much light it really produces).\n- **Brightness** is how bright it *appears* to us, which depends on its luminosity **and** its distance.\n\nA very luminous star far away can look dimmer than a less luminous star nearby. As light spreads out from a star, the same energy is spread over a larger area the further you go, so the apparent brightness **decreases with distance**. This is why we cannot judge a star's true luminosity from how bright it looks alone — we also need its distance.",
      diagrams: [
        {
          caption: "Light from a star spreads out, so apparent brightness falls with distance.",
          svg:
            '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Light spreading outward from a star, becoming fainter as distance increases">\n<rect x="0" y="0" width="300" height="150" fill="#f8fafc"/>\n<circle cx="30" cy="75" r="12" fill="#f59e0b" stroke="#b45309"/>\n<text x="30" y="100" font-size="8" text-anchor="middle" fill="#7c2d12">star</text>\n<line x1="42" y1="75" x2="280" y2="30" stroke="#fbbf24"/>\n<line x1="42" y1="75" x2="280" y2="120" stroke="#fbbf24"/>\n<line x1="42" y1="75" x2="280" y2="75" stroke="#fbbf24"/>\n<line x1="120" y1="56" x2="120" y2="94" stroke="#15803d" stroke-width="2"/>\n<text x="120" y="112" font-size="8" text-anchor="middle" fill="#15803d">bright</text>\n<line x1="240" y1="38" x2="240" y2="112" stroke="#1d4ed8" stroke-width="2"/>\n<text x="240" y="128" font-size="8" text-anchor="middle" fill="#1d4ed8">fainter</text>\n<text x="180" y="14" font-size="8" text-anchor="middle" fill="#334155">same light spread over more area</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Stars fuse hydrogen → helium; heavier elements up to iron form in big stars.",
        "Elements heavier than iron form in supernovae, then scatter into space.",
        "Luminosity = total power emitted; brightness = how bright it looks here.",
        "Apparent brightness depends on luminosity AND distance.",
        "Light spreads out, so apparent brightness decreases with distance.",
      ],
      whyItWorks:
        "Fusion releases energy only up to iron; making heavier nuclei absorbs energy, so it needs the immense energy of a supernova. Brightness falls with distance because a fixed amount of light energy is spread over an ever-larger area as it travels outward.",
      strategies: ["Separate 'true output' (luminosity) from 'how it looks' (brightness)"],
    },
    {
      heading: "Redshift, the expanding Universe & the Big Bang",
      discovery: {
        problem:
          "When astronomers split the light from distant galaxies into a spectrum, the dark absorption lines are all shifted toward the red end — and the further away the galaxy, the bigger the shift. What could move light's colour like this for almost every galaxy at once?",
        idea:
          "The galaxies are moving away from us, stretching the light's wavelength toward red (redshift) — like the drop in pitch of a passing siren, but for light. Because more distant galaxies show greater redshift, they are receding faster. The whole Universe is expanding, which points back to a Big Bang.",
      },
      body:
        "**Redshift**\n\nLight from a source moving **away** from us is stretched to a **longer wavelength** — shifted toward the **red** end of the spectrum. This is **redshift**. (A source moving toward us would be blueshifted.)\n\nWhen we observe distant **galaxies**, the dark lines in their spectra are redshifted, showing they are **moving away** from us. Crucially:\n\n- **The further away a galaxy is, the greater its redshift** — so the faster it is receding.\n\n**The expanding Universe**\n\nGalaxies moving away in every direction, with more distant ones moving faster, is exactly what you'd see if **space itself is expanding**. Rewinding this expansion, everything was once together in one place.\n\n**The Big Bang theory**\n\nThe Universe began about **13.8 billion years ago** from an extremely hot, dense point and has been **expanding and cooling** ever since. Two key pieces of evidence support it:\n\n1. **Redshift of galaxies** — shows the Universe is expanding (more distant = faster).\n2. **Cosmic Microwave Background Radiation (CMBR)** — a faint microwave 'afterglow' coming from all directions in space. It is the leftover radiation from the early hot Universe, now stretched to microwaves by the expansion. The Big Bang theory predicts it; rival theories do not explain it well.",
      diagrams: [
        {
          caption: "Spectral absorption lines shifted toward the red (longer wavelength) end.",
          svg:
            '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two spectra: a nearby source with lines at normal positions, and a distant galaxy with the same lines shifted toward the red end">\n<rect x="0" y="0" width="320" height="150" fill="#f8fafc"/>\n<text x="160" y="14" font-size="9" text-anchor="middle" fill="#334155">blue end (short λ)        red end (long λ)</text>\n<rect x="30" y="25" width="260" height="30" fill="#e2e8f0" stroke="#475569"/>\n<line x1="80" y1="25" x2="80" y2="55" stroke="#1e293b" stroke-width="3"/>\n<line x1="140" y1="25" x2="140" y2="55" stroke="#1e293b" stroke-width="3"/>\n<text x="30" y="70" font-size="8" fill="#334155">nearby (reference)</text>\n<rect x="30" y="90" width="260" height="30" fill="#e2e8f0" stroke="#475569"/>\n<line x1="140" y1="90" x2="140" y2="120" stroke="#b91c1c" stroke-width="3"/>\n<line x1="200" y1="90" x2="200" y2="120" stroke="#b91c1c" stroke-width="3"/>\n<text x="30" y="135" font-size="8" fill="#b91c1c">distant galaxy: lines shifted right (redshift)</text>\n<line x1="80" y1="60" x2="140" y2="85" stroke="#7c3aed" stroke-dasharray="3 2"/>\n<line x1="140" y1="60" x2="200" y2="85" stroke="#7c3aed" stroke-dasharray="3 2"/>\n</svg>',
        },
      ],
      keyPoints: [
        "Redshift: light from a receding source is stretched to longer wavelength (toward red).",
        "Distant galaxies are redshifted → moving away from us.",
        "The further the galaxy, the greater the redshift → faster recession.",
        "This shows the whole Universe is expanding.",
        "Big Bang: hot, dense start ~13.8 billion years ago, expanding and cooling.",
        "Evidence: galaxy redshift AND the cosmic microwave background radiation (CMBR).",
      ],
      whyItWorks:
        "As space expands, the wavelength of light travelling through it is stretched, so it shifts toward red. The CMBR is radiation from the hot early Universe that has been stretched all the way to microwaves by that same expansion — exactly what the Big Bang predicts.",
      thinkDeeper:
        "If every galaxy is moving away from us, does that put Earth at the centre of the Universe? (No — in an expanding space every observer sees all other galaxies receding, like dots on an inflating balloon.)",
      strategies: ["Link cause (recession) to effect (redshift)", "List both pieces of Big Bang evidence"],
    },
    {
      heading: "The speed of light and the light-year",
      discovery: {
        problem:
          "The nearest star beyond the Sun is about 40 000 000 000 000 km away, and galaxies are millions of times further. Writing distances like that in metres or kilometres becomes hopeless. How do astronomers measure such enormous distances sensibly?",
        idea:
          "Light is the fastest thing in the Universe but it still takes time to travel. So astronomers use the distance light travels in one year — a **light-year** — as a giant ruler. It turns clumsy strings of zeros into manageable numbers.",
      },
      body:
        "**The speed of light**\n\nLight (and all electromagnetic waves) travels through space (a vacuum) at a constant speed:\n\n`c = 3 × 10⁸ m/s` (300 000 000 m/s, or 300 000 km/s).\n\nNothing can travel faster than this. Even at this speed, light takes time to cross space: about 8 minutes from the Sun to Earth, and over 4 years from the next nearest star.\n\n**The light-year**\n\nA **light-year (ly)** is a unit of **distance**, not time: it is the distance light travels in one year.\n\nWork it out with distance = speed × time:\n\n- time for 1 year = 365.25 × 24 × 60 × 60 ≈ 3.15 × 10⁷ s\n- distance = c × t = (3 × 10⁸) × (3.15 × 10⁷) ≈ **9.5 × 10¹⁵ m** (about 9.5 trillion km).\n\nBecause distances to stars and galaxies are so huge, light-years are far more convenient than metres. A useful consequence: when we look at a galaxy 13 billion light-years away, we see light that left it 13 billion years ago — we are looking back in time.",
      diagrams: [
        {
          caption: "Light travels at c = 3×10⁸ m/s; a light-year is the distance it covers in one year.",
          svg:
            '<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A diagram showing light leaving a star and travelling for one year to define one light-year of distance">\n<rect x="0" y="0" width="320" height="120" fill="#f8fafc"/>\n<circle cx="30" cy="60" r="12" fill="#f59e0b" stroke="#b45309"/>\n<text x="30" y="88" font-size="8" text-anchor="middle" fill="#7c2d12">star</text>\n<line x1="44" y1="60" x2="280" y2="60" stroke="#fbbf24" stroke-width="3" marker-end="url(#ly)"/>\n<text x="160" y="50" font-size="9" text-anchor="middle" fill="#334155">light travels at c = 3 x 10^8 m/s</text>\n<text x="160" y="78" font-size="9" text-anchor="middle" fill="#7c3aed">distance covered in 1 year = 1 light-year</text>\n<text x="160" y="100" font-size="8" text-anchor="middle" fill="#475569">1 ly approx 9.5 x 10^15 m</text>\n<defs><marker id="ly" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#fbbf24"/></marker></defs>\n</svg>',
        },
      ],
      keyPoints: [
        "Speed of light c = 3 × 10⁸ m/s (the fastest possible speed).",
        "A light-year is a unit of DISTANCE: the distance light travels in one year.",
        "1 light-year ≈ 9.5 × 10¹⁵ m (about 9.5 trillion km).",
        "Light-years make huge astronomical distances manageable.",
        "Looking at very distant objects means looking back in time.",
      ],
      formulae: ["c = 3 × 10⁸ m/s", "distance = speed × time", "1 light-year = c × (1 year) ≈ 9.5 × 10¹⁵ m"],
      whyItWorks:
        "A light-year is just distance = speed × time with the speed fixed at c and the time set to one year. Using it avoids writing astronomical distances as huge, error-prone numbers of metres.",
      strategies: ["Remember a light-year measures distance, not time", "Use distance = speed × time to derive it"],
    },
  ],
  learn: {
    bigIdea:
      "The same physics that governs falling apples runs the cosmos: gravity provides the centripetal force for orbits, energy conservation explains why comets speed up near the Sun, the balance of gravity and fusion drives the life and death of stars, and the redshift of distant galaxies plus the cosmic microwave background reveal a Universe expanding from a Big Bang.",
    mustKnow: [
      "Gravity provides the centripetal force that keeps planets, moons and satellites in orbit.",
      "Orbital speed v = 2πr/T (2πr is the circumference); convert r to metres and T to seconds.",
      "Comets are fastest at perihelion (near Sun) and slowest at aphelion: gravitational PE ↔ kinetic energy.",
      "Geostationary orbit: ~24 h, over the equator, fixed above one point (comms/TV); low polar orbit scans the whole Earth.",
      "Stellar life cycle: nebula → protostar → main sequence; then (Sun-like) red giant → planetary nebula → white dwarf, or (massive) red supergiant → supernova → neutron star/black hole.",
      "Elements up to iron form by fusion in stars; heavier elements form in supernovae.",
      "Redshift of distant galaxies (greater the further away) shows the Universe is expanding; redshift and the CMBR are evidence for the Big Bang.",
      "The speed of light c = 3 × 10⁸ m/s; a light-year is the distance light travels in one year (≈ 9.5 × 10¹⁵ m).",
    ],
    keywords: [
      { term: "Centripetal force", definition: "The resultant force directed toward the centre of a circle that keeps an object moving in a circular path; for orbits it is provided by gravity." },
      { term: "Orbital period (T)", definition: "The time taken for one complete orbit." },
      { term: "Orbital speed", definition: "How fast an orbiting object moves; v = 2πr/T for a circular orbit." },
      { term: "Elliptical orbit", definition: "A stretched, oval orbit (e.g. a comet's) where the distance from the Sun varies." },
      { term: "Geostationary orbit", definition: "A high orbit over the equator with a 24-hour period, staying above the same point on Earth." },
      { term: "Main sequence star", definition: "A stable star fusing hydrogen into helium, where fusion pressure balances gravity." },
      { term: "Supernova", definition: "The explosive death of a massive star; forms elements heavier than iron and scatters them into space." },
      { term: "Luminosity", definition: "The total power (light energy per second) actually emitted by a star." },
      { term: "Redshift", definition: "The increase in wavelength of light from a source moving away from us, shifting it toward the red end of the spectrum." },
      { term: "CMBR", definition: "Cosmic microwave background radiation — faint microwaves from all directions, leftover from the early hot Universe; evidence for the Big Bang." },
      { term: "Speed of light (c)", definition: "The speed at which light travels through a vacuum, c = 3 × 10⁸ m/s; the maximum possible speed." },
      { term: "Light-year", definition: "A unit of distance equal to the distance light travels in one year (≈ 9.5 × 10¹⁵ m)." },
      { term: "Dwarf planet", definition: "A round body orbiting the Sun (e.g. Pluto) that has not cleared other objects from its orbit." },
      { term: "Geostationary vs polar orbit", definition: "Geostationary: ~36 000 km over the equator, 24 h period, fixed above one point (comms/TV). Low polar: a few hundred km, ~90 min, scans the whole Earth (weather/imaging)." },
    ],
    flashcards: [
      { front: "What provides the centripetal force for a planet's orbit?", back: "The gravitational force of attraction between the Sun and the planet." },
      { front: "State the orbital speed equation and the meaning of each symbol.", back: "v = 2πr/T. v = orbital speed (m/s), r = orbital radius (m), T = orbital period (s). 2πr is the circumference." },
      { front: "Where in its orbit is a comet fastest, and why?", back: "At perihelion (closest to the Sun): gravitational PE is converted to kinetic energy as it falls inward, and gravity is strongest there." },
      { front: "Give the life cycle of a star much more massive than the Sun.", back: "Nebula → protostar → main sequence → red supergiant → supernova → neutron star or black hole." },
      { front: "What are the two main pieces of evidence for the Big Bang?", back: "Redshift of light from distant galaxies (the further away, the greater the redshift → expanding Universe) and the cosmic microwave background radiation (CMBR)." },
      { front: "Difference between luminosity and brightness?", back: "Luminosity is the total power a star really emits; brightness is how bright it appears to us, which also depends on distance." },
      { front: "What is a light-year and roughly how big is it?", back: "A unit of distance — the distance light travels in one year. Using distance = speed × time: (3×10⁸)(3.15×10⁷) ≈ 9.5×10¹⁵ m." },
      { front: "State the value of the speed of light c.", back: "c = 3 × 10⁸ m/s (300 000 km/s) — the fastest possible speed; light takes ~8 min from the Sun to Earth." },
      { front: "List the eight planets in order from the Sun.", back: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "ast-mcq-q01",
        question: "Which object is at the centre of the Solar System?",
        options: ["The Earth", "The Moon", "The Sun", "Jupiter"],
        answerIndex: 2,
        explanation: "The Sun, a star containing over 99% of the system's mass, lies at the centre and everything else orbits it.",
        guideRef: "The Solar System",
        difficulty: "warmup",
      },
      {
        id: "ast-mcq-q02",
        question: "Most asteroids in the Solar System are found in a belt between…",
        options: ["the Sun and Mercury", "Mars and Jupiter", "Earth and the Moon", "Neptune and Pluto"],
        answerIndex: 1,
        explanation: "The main asteroid belt of small rocky bodies lies between the orbits of Mars and Jupiter.",
        guideRef: "The Solar System",
        difficulty: "warmup",
      },
      {
        id: "ast-mcq-q03",
        question: "Which type of object follows a highly elliptical orbit around the Sun?",
        options: ["A planet", "A comet", "A geostationary satellite", "A dwarf planet"],
        answerIndex: 1,
        explanation: "Comets have long, stretched (elliptical) orbits, while planets move in near-circular orbits.",
        guideRef: "The Solar System",
        difficulty: "warmup",
      },
      {
        id: "ast-mcq-q04",
        question: "What provides the centripetal force that keeps a planet in orbit around the Sun?",
        options: ["The planet's own spin", "Gravitational attraction to the Sun", "Air resistance", "Magnetism"],
        answerIndex: 1,
        explanation: "Gravity between the Sun and the planet acts toward the centre, providing the centripetal force needed for circular motion.",
        guideRef: "Gravity and circular orbits",
        difficulty: "core",
        hints: ["Circular motion needs a force toward the centre.", "What force acts between any two masses?", "It pulls the planet toward the Sun."],
        strategy: "Identify the force toward the centre",
      },
      {
        id: "ast-mcq-q05",
        question: "In a stable circular orbit the gravitational force on the planet always points…",
        options: ["along the direction of motion", "directly away from the Sun", "toward the Sun (centre of the orbit)", "in a random direction"],
        answerIndex: 2,
        explanation: "Centripetal force is centre-seeking, so gravity acts toward the Sun, perpendicular to the planet's velocity.",
        guideRef: "Gravity and circular orbits",
        difficulty: "core",
        hints: ["What does 'centripetal' mean?", "Which way must the force point to bend the path into a circle?", "Toward the centre of the circle."],
      },
      {
        id: "ast-mcq-q06",
        question: "The orbital speed of a satellite is given by v = 2πr/T. The quantity 2πr represents the…",
        options: ["diameter of the orbit", "circumference of the orbit", "radius of the orbit", "period of the orbit"],
        answerIndex: 1,
        explanation: "2πr is the circumference of a circle of radius r — the distance travelled in one complete orbit.",
        guideRef: "Orbital speed: v = 2πr/T",
        difficulty: "core",
        hints: ["What is the formula for the circumference of a circle?", "In one orbit, what distance does the object travel?", "C = 2πr."],
      },
      {
        id: "ast-mcq-q07",
        question: "A satellite orbits at radius r = 7.0 × 10⁶ m with period T = 5600 s. Its orbital speed is closest to…",
        options: ["7.9 × 10³ m/s", "1.3 × 10³ m/s", "4.4 × 10⁷ m/s", "2.5 × 10⁴ m/s"],
        answerIndex: 0,
        explanation: "v = 2πr/T = 2π(7.0×10⁶)/5600 ≈ 4.40×10⁷/5600 ≈ 7.9×10³ m/s.",
        guideRef: "Orbital speed: v = 2πr/T",
        difficulty: "core",
        hints: ["Write v = 2πr/T.", "Compute 2πr first, then divide by T.", "2π × 7.0×10⁶ ≈ 4.4×10⁷; divide by 5600."],
        strategy: "Write the equation, list knowns with units",
      },
      {
        id: "ast-mcq-q08",
        question: "Where in its orbit does a comet travel fastest?",
        options: ["At its furthest point from the Sun (aphelion)", "At its closest point to the Sun (perihelion)", "Exactly halfway round", "It travels at constant speed"],
        answerIndex: 1,
        explanation: "Near the Sun (perihelion) gravitational potential energy has been converted to kinetic energy, so the comet moves fastest.",
        guideRef: "Comets and elliptical orbits",
        difficulty: "core",
        hints: ["When is the comet closest to the Sun?", "What happens to its energy as it falls inward?", "GPE converts to KE → more speed."],
      },
      {
        id: "ast-mcq-q09",
        question: "As a comet moves from far away toward the Sun, its speed increases mainly because…",
        options: [
          "the Sun pushes it faster",
          "gravitational potential energy is transferred to kinetic energy",
          "it loses mass",
          "there is more air resistance near the Sun",
        ],
        answerIndex: 1,
        explanation: "As it falls inward, gravitational PE is converted into kinetic energy, so its speed rises (total energy is conserved).",
        guideRef: "Comets and elliptical orbits",
        difficulty: "core",
        hints: ["Is energy created or just transferred?", "What kind of energy does it have far out vs close in?", "GPE → KE."],
        strategy: "Use energy conservation (KE ↔ GPE)",
      },
      {
        id: "ast-mcq-q10",
        question: "A geostationary satellite has an orbital period of approximately…",
        options: ["90 minutes", "1 hour", "24 hours", "1 year"],
        answerIndex: 2,
        explanation: "A geostationary satellite orbits once every 24 hours, matching Earth's rotation, so it stays above the same point.",
        guideRef: "Satellites: geostationary and polar orbits",
        difficulty: "core",
        hints: ["What must its period match to stay above one spot?", "How long does Earth take to spin once?", "24 hours."],
      },
      {
        id: "ast-mcq-q11",
        question: "Which orbit is best suited to a satellite that must repeatedly scan the entire surface of the Earth?",
        options: ["A high geostationary orbit", "A low polar orbit", "An elliptical comet orbit", "No orbit can do this"],
        answerIndex: 1,
        explanation: "A low polar orbit passes over the poles while Earth rotates beneath it, so over time it scans the whole surface.",
        guideRef: "Satellites: geostationary and polar orbits",
        difficulty: "core",
        hints: ["A geostationary satellite stays over one point — can it scan everywhere?", "Which orbit passes over the poles?", "Earth rotates under a polar orbit."],
        strategy: "Match the orbit to the satellite's job",
      },
      {
        id: "ast-mcq-q12",
        question: "Which is the correct order for the START of every star's life?",
        options: [
          "protostar → nebula → main sequence",
          "nebula → protostar → main sequence",
          "main sequence → nebula → protostar",
          "nebula → main sequence → protostar",
        ],
        answerIndex: 1,
        explanation: "A cloud of gas and dust (nebula) contracts to a protostar, which begins fusion and becomes a main sequence star.",
        guideRef: "The life cycle of stars",
        difficulty: "core",
        hints: ["What is the starting cloud called?", "What forms before fusion begins?", "Nebula → protostar → main sequence."],
      },
      {
        id: "ast-mcq-q13",
        question: "Our Sun is currently a…",
        options: ["red giant", "white dwarf", "main sequence star", "neutron star"],
        answerIndex: 2,
        explanation: "The Sun is in the stable main sequence phase, fusing hydrogen into helium.",
        guideRef: "The life cycle of stars",
        difficulty: "warmup",
      },
      {
        id: "ast-mcq-q14",
        question: "What is the correct life cycle for a star similar in mass to the Sun, after the main sequence?",
        options: [
          "red supergiant → supernova → black hole",
          "red giant → planetary nebula → white dwarf",
          "red giant → supernova → neutron star",
          "white dwarf → red giant → supernova",
        ],
        answerIndex: 1,
        explanation: "A Sun-like star swells into a red giant, sheds its layers as a planetary nebula, and leaves a white dwarf.",
        guideRef: "The life cycle of stars",
        difficulty: "core",
        hints: ["Sun-like stars do NOT explode as a supernova.", "What is shed before the core is left?", "Red giant → planetary nebula → white dwarf."],
      },
      {
        id: "ast-mcq-q15",
        question: "A star much more massive than the Sun ends its life as a…",
        options: [
          "white dwarf only",
          "planetary nebula only",
          "neutron star or black hole (after a supernova)",
          "new nebula with no remnant",
        ],
        answerIndex: 2,
        explanation: "A massive star becomes a red supergiant, explodes as a supernova, and leaves a neutron star or (if massive enough) a black hole.",
        guideRef: "The life cycle of stars",
        difficulty: "core",
        hints: ["Massive stars die violently.", "What explosion ends a supergiant?", "Remnant = neutron star or black hole."],
      },
      {
        id: "ast-mcq-q16",
        question: "On the main sequence, what keeps a star stable in size?",
        options: [
          "There are no forces acting",
          "Gravity pulling in balances the outward pressure from fusion",
          "Magnetism holds it together",
          "It is frozen solid",
        ],
        answerIndex: 1,
        explanation: "The inward pull of gravity is balanced by the outward pressure from energy released in nuclear fusion.",
        guideRef: "The life cycle of stars",
        difficulty: "challenge",
        hints: ["Two opposing influences are in balance.", "One pulls inward — what is it?", "What pushes outward? Energy from fusion."],
        strategy: "Identify the balanced forces",
      },
      {
        id: "ast-mcq-q17",
        question: "Where are elements heavier than iron formed?",
        options: ["In the cores of main sequence stars", "In planetary nebulae", "In supernova explosions", "In cold nebulae before stars form"],
        answerIndex: 2,
        explanation: "Fusion in stars builds elements only up to iron; heavier elements need the extreme energy of a supernova.",
        guideRef: "Forming elements & luminosity",
        difficulty: "challenge",
        hints: ["Normal fusion stops at a certain element.", "Which element is the limit for energy-releasing fusion?", "Heavier-than-iron needs a supernova."],
        strategy: "Link the process to the energy required",
      },
      {
        id: "ast-mcq-q18",
        question: "A star's luminosity is best described as…",
        options: [
          "how bright it looks from Earth",
          "the total power (light energy per second) it actually emits",
          "its distance from Earth",
          "its surface colour",
        ],
        answerIndex: 1,
        explanation: "Luminosity is the true total power the star emits; how bright it looks (brightness) also depends on distance.",
        guideRef: "Forming elements & luminosity",
        difficulty: "core",
        hints: ["Is luminosity about how it looks, or what it really emits?", "Brightness depends on distance; luminosity does not.", "Luminosity = total emitted power."],
      },
      {
        id: "ast-mcq-q19",
        question: "Star X and Star Y have the same luminosity, but X appears brighter from Earth. This means X is probably…",
        options: ["further away than Y", "closer than Y", "cooler than Y", "younger than Y"],
        answerIndex: 1,
        explanation: "With equal true output, the one that appears brighter must be nearer, because apparent brightness falls with distance.",
        guideRef: "Forming elements & luminosity",
        difficulty: "challenge",
        hints: ["If luminosity is equal, what else affects brightness?", "Closer light sources look brighter.", "Brighter at equal luminosity → closer."],
        strategy: "Separate luminosity from apparent brightness",
      },
      {
        id: "ast-mcq-q20",
        question: "Light from a distant galaxy is observed to be redshifted. This tells us the galaxy is…",
        options: ["moving toward us", "moving away from us", "not moving", "getting hotter"],
        answerIndex: 1,
        explanation: "Redshift means the light's wavelength is stretched, which happens when the source is moving away from us.",
        guideRef: "Redshift, the expanding Universe & the Big Bang",
        difficulty: "core",
        hints: ["Red = longer or shorter wavelength?", "Stretched wavelength means moving which way?", "Away from us."],
      },
      {
        id: "ast-mcq-q21",
        question: "Observations show that the further away a galaxy is, the…",
        options: [
          "smaller its redshift",
          "greater its redshift",
          "redshift is the same for all galaxies",
          "more blueshifted it is",
        ],
        answerIndex: 1,
        explanation: "More distant galaxies have greater redshift, meaning they are receding faster — evidence for an expanding Universe.",
        guideRef: "Redshift, the expanding Universe & the Big Bang",
        difficulty: "core",
        hints: ["Is there a pattern with distance?", "Further galaxies move faster.", "Faster recession → greater redshift."],
      },
      {
        id: "ast-mcq-q22",
        question: "The cosmic microwave background radiation (CMBR) is best explained as…",
        options: [
          "light from nearby stars",
          "leftover radiation from the hot early Universe",
          "radio signals from satellites",
          "reflected sunlight",
        ],
        answerIndex: 1,
        explanation: "The CMBR is radiation from the early hot Universe, stretched to microwaves by expansion; it is strong evidence for the Big Bang.",
        guideRef: "Redshift, the expanding Universe & the Big Bang",
        difficulty: "core",
        hints: ["It comes from all directions in space.", "It is a leftover 'afterglow'.", "From the early hot Universe."],
      },
      {
        id: "ast-mcq-q23",
        question: "Which TWO observations are the main evidence for the Big Bang theory?",
        options: [
          "Redshift of galaxies and the CMBR",
          "The phases of the Moon and tides",
          "Sunspots and solar flares",
          "Meteor showers and comets",
        ],
        answerIndex: 0,
        explanation: "The redshift of distant galaxies (expansion) and the cosmic microwave background radiation together strongly support the Big Bang.",
        guideRef: "Redshift, the expanding Universe & the Big Bang",
        difficulty: "core",
        hints: ["One piece is about galaxy motion.", "One piece is leftover radiation.", "Redshift + CMBR."],
      },
      {
        id: "ast-mcq-q24",
        question: "Two planets, A and B, orbit the same star. B is much further out than A. Compared with A, planet B most likely has a…",
        options: [
          "shorter period and faster speed",
          "longer period and slower speed",
          "longer period and faster speed",
          "shorter period and slower speed",
        ],
        answerIndex: 1,
        explanation: "Planets further from the star have a longer circumference to cover and weaker gravity, giving a longer period and slower orbital speed.",
        guideRef: "Orbital speed: v = 2πr/T",
        difficulty: "challenge",
        hints: ["A bigger orbit means a longer path.", "Gravity is weaker further out.", "Outer planets are slower with longer periods."],
        strategy: "Compare extremes (inner vs outer orbit)",
      },
      {
        id: "ast-mcq-q25",
        question: "A geostationary satellite is mainly used for…",
        options: [
          "high-resolution surface mapping",
          "communications and TV broadcasting",
          "scanning the poles",
          "studying the Sun's core",
        ],
        answerIndex: 1,
        explanation: "Because it stays above one fixed point, a ground dish can point at it permanently — ideal for communications and TV.",
        guideRef: "Satellites: geostationary and polar orbits",
        difficulty: "warmup",
      },
      {
        id: "ast-mcq-q26",
        question: "Which list gives the planets in the correct order outward from the Sun?",
        options: [
          "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
          "Mercury, Earth, Venus, Mars, Saturn, Jupiter, Neptune, Uranus",
          "Venus, Mercury, Earth, Mars, Jupiter, Saturn, Neptune, Uranus",
          "Mercury, Venus, Mars, Earth, Jupiter, Saturn, Uranus, Neptune",
        ],
        answerIndex: 0,
        explanation: "From the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune (the inner four are rocky, the outer four are giants).",
        guideRef: "The Solar System",
        difficulty: "warmup",
      },
      {
        id: "ast-mcq-q27",
        question: "Pluto is classed as a dwarf planet rather than a planet because it…",
        options: [
          "is not round",
          "does not orbit the Sun",
          "has not cleared other objects from its orbit",
          "has no moons",
        ],
        answerIndex: 2,
        explanation: "A dwarf planet is round and orbits the Sun, but unlike a planet it has not cleared other objects from its orbital path.",
        guideRef: "The Solar System",
        difficulty: "core",
        hints: ["Pluto is round and does orbit the Sun.", "What must a full planet do to its orbital region?", "It must have cleared other objects from its orbit."],
      },
      {
        id: "ast-mcq-q28",
        question: "Earth's Moon is an example of a…",
        options: ["dwarf planet", "natural satellite", "asteroid", "comet"],
        answerIndex: 1,
        explanation: "A moon is a natural satellite — a body that orbits a planet.",
        guideRef: "The Solar System",
        difficulty: "warmup",
      },
      {
        id: "ast-mcq-q29",
        question: "The Solar System is thought to have formed when…",
        options: [
          "a star exploded directly into eight planets",
          "a cloud of gas and dust collapsed under gravity, forming the Sun and then the planets",
          "the planets came together first and the Sun formed last",
          "the Moon broke apart into the planets",
        ],
        answerIndex: 1,
        explanation: "Gravity pulled a cloud of gas and dust together; most mass formed the Sun, and leftover material clumped into the planets, moons, asteroids and comets.",
        guideRef: "The Solar System",
        difficulty: "core",
        hints: ["What collapses under gravity to form stars?", "What forms first — the Sun or the planets?", "Sun first from the densest centre, then planets from the leftovers."],
      },
      {
        id: "ast-mcq-q30",
        question: "What is the approximate speed of light in a vacuum?",
        options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ m/s", "3 × 10¹⁰ m/s"],
        answerIndex: 0,
        explanation: "Light travels at c = 3 × 10⁸ m/s (300 000 km/s) in a vacuum — the fastest possible speed.",
        guideRef: "The speed of light and the light-year",
        difficulty: "warmup",
      },
      {
        id: "ast-mcq-q31",
        question: "A light-year is a unit of…",
        options: ["time", "distance", "speed", "energy"],
        answerIndex: 1,
        explanation: "A light-year is the distance light travels in one year — it measures distance, not time.",
        guideRef: "The speed of light and the light-year",
        difficulty: "core",
        hints: ["The word 'year' is misleading here.", "Light travels a certain distance in a year.", "It is a distance unit."],
      },
      {
        id: "ast-mcq-q32",
        question: "Using c = 3 × 10⁸ m/s and 1 year ≈ 3.15 × 10⁷ s, one light-year is approximately…",
        options: ["9.5 × 10¹⁵ m", "9.5 × 10⁷ m", "1.05 × 10¹ m", "3 × 10⁸ m"],
        answerIndex: 0,
        explanation: "distance = speed × time = (3×10⁸)(3.15×10⁷) ≈ 9.5×10¹⁵ m.",
        guideRef: "The speed of light and the light-year",
        difficulty: "challenge",
        hints: ["Use distance = speed × time.", "Multiply c by the number of seconds in a year.", "(3×10⁸) × (3.15×10⁷) ≈ 9.5×10¹⁵."],
        strategy: "Use distance = speed × time",
      },
      {
        id: "ast-mcq-q33",
        question: "After a white dwarf has cooled for an extremely long time, it is predicted to become a…",
        options: ["red giant", "black dwarf", "neutron star", "black hole"],
        answerIndex: 1,
        explanation: "A white dwarf slowly radiates away its heat and is predicted to eventually become a cold, dark black dwarf.",
        guideRef: "The life cycle of stars",
        difficulty: "core",
        hints: ["A white dwarf has no fusion, so it just cools.", "What colour is something with no light/heat left?", "It becomes a black dwarf."],
      },
      {
        id: "ast-mcq-q34",
        question: "Nuclear fusion inside stars can build up elements only as heavy as…",
        options: ["helium", "carbon", "iron", "uranium"],
        answerIndex: 2,
        explanation: "Fusion releases energy only up to iron; making elements heavier than iron absorbs energy and needs a supernova.",
        guideRef: "Forming elements & luminosity",
        difficulty: "core",
        hints: ["Fusion releases energy up to a certain element.", "Beyond this element fusion absorbs energy.", "The limit is iron."],
      },
      {
        id: "ast-mcq-q35",
        question: "Compared with a planet close to the Sun, a planet far from the Sun has a…",
        options: [
          "larger orbital radius, longer period and slower orbital speed",
          "larger orbital radius, shorter period and faster orbital speed",
          "smaller orbital radius and longer period",
          "the same period and speed",
        ],
        answerIndex: 0,
        explanation: "A larger orbital radius means a longer path and weaker gravity, giving a longer period and a slower orbital speed.",
        guideRef: "Orbital speed: v = 2πr/T",
        difficulty: "core",
        hints: ["Bigger orbit = longer or shorter path?", "Gravity is weaker further out.", "Larger r → longer T and slower v."],
      },
    ],
    qa: [
      {
        id: "ast-qa-q01",
        question: "State what provides the centripetal force needed to keep a planet in orbit around the Sun, and explain in which direction this force acts. (2 marks)",
        marks: 2,
        modelAnswer:
          "The gravitational force of attraction between the Sun and the planet provides the centripetal force. It acts toward the centre of the orbit — that is, toward the Sun.",
        markScheme: [
          "Gravitational force / gravity (between the Sun and planet) provides the centripetal force",
          "Acts toward the centre of the orbit | toward the Sun",
        ],
        commonError: "Saying the force acts in the direction of motion — the centripetal force is perpendicular to the velocity, pointing inward.",
        guideRef: "Gravity and circular orbits",
        difficulty: "core",
        hints: ["What force acts between two masses?", "What is a 'centre-seeking' force called?", "Which way does it point relative to the orbit?"],
      },
      {
        id: "ast-qa-q02",
        question: "A satellite orbits the Earth at a radius of 7.0 × 10⁶ m. It takes 5800 s to complete one orbit. Calculate its orbital speed. (3 marks)",
        marks: 3,
        modelAnswer:
          "Using v = 2πr/T: v = (2 × π × 7.0×10⁶) / 5800 = 4.398×10⁷ / 5800 ≈ 7.6×10³ m/s (about 7600 m/s).",
        markScheme: [
          "Correct equation v = 2πr/T",
          "Correct substitution: (2 × π × 7.0×10⁶) / 5800",
          "v ≈ 7.6 × 10³ m/s | ≈ 7600 m/s (accept 7.5–7.6 ×10³)",
        ],
        commonError: "Using the diameter instead of the radius (doubling 2πr), or forgetting that r is already in metres.",
        guideRef: "Orbital speed: v = 2πr/T",
        difficulty: "core",
        hints: ["Which equation links v, r and T?", "Work out 2πr first.", "Divide the circumference by the period."],
        solutions: [
          {
            label: "Method: v = 2πr/T with unit care",
            steps: [
              "Write the equation: v = 2πr/T.",
              "List knowns: r = 7.0×10⁶ m (already in metres), T = 5800 s (already in seconds).",
              "Circumference: 2πr = 2 × π × 7.0×10⁶ = 4.398×10⁷ m.",
              "Divide by period: v = 4.398×10⁷ ÷ 5800 = 7584 m/s.",
              "Round sensibly: v ≈ 7.6×10³ m/s. Units check: m ÷ s = m/s. ✓",
            ],
          },
        ],
      },
      {
        id: "ast-qa-q03",
        question: "The Moon orbits the Earth at a radius of 3.84 × 10⁸ m with a period of 27.3 days. Calculate the Moon's orbital speed in m/s. (4 marks)",
        marks: 4,
        modelAnswer:
          "First convert the period to seconds: T = 27.3 × 24 × 60 × 60 = 2.36×10⁶ s. Then v = 2πr/T = (2 × π × 3.84×10⁸) / 2.36×10⁶ = 2.413×10⁹ / 2.36×10⁶ ≈ 1.0×10³ m/s (about 1020 m/s).",
        markScheme: [
          "Convert period to seconds: 27.3 × 86 400 = 2.36×10⁶ s",
          "Correct equation v = 2πr/T",
          "Correct substitution: (2 × π × 3.84×10⁸) / 2.36×10⁶",
          "v ≈ 1.0 × 10³ m/s | ≈ 1020 m/s (accept 1.0–1.02 ×10³)",
        ],
        commonError: "Leaving the period in days, which gives a wildly wrong answer — T must be in seconds before substituting.",
        guideRef: "Orbital speed: v = 2πr/T",
        difficulty: "challenge",
        hints: ["What unit must T be in for v in m/s?", "1 day = 86 400 s — convert 27.3 days first.", "Then apply v = 2πr/T."],
        solutions: [
          {
            label: "Method 1: convert units, then v = 2πr/T",
            steps: [
              "Convert period: T = 27.3 days × 86 400 s/day = 2.359×10⁶ s.",
              "Write v = 2πr/T.",
              "Circumference: 2πr = 2 × π × 3.84×10⁸ = 2.413×10⁹ m.",
              "v = 2.413×10⁹ ÷ 2.359×10⁶ = 1023 m/s.",
              "v ≈ 1.0×10³ m/s. Units: m ÷ s = m/s. ✓",
            ],
          },
          {
            label: "Method 2: estimate to sanity-check",
            steps: [
              "2πr ≈ 2.4×10⁹ m; T ≈ 2.4×10⁶ s.",
              "v ≈ (2.4×10⁹)/(2.4×10⁶) = 10³ m/s.",
              "This matches the full calculation (~1020 m/s), confirming the order of magnitude.",
            ],
          },
        ],
      },
      {
        id: "ast-qa-q04",
        question: "Explain why a comet on its elliptical orbit travels much faster when it is close to the Sun than when it is far away. (4 marks)",
        marks: 4,
        modelAnswer:
          "A comet's orbit is a stretched ellipse, so its distance from the Sun changes greatly. As the comet moves inward toward the Sun, the Sun's gravity does work on it and gravitational potential energy is transferred into kinetic energy, so its speed increases — it is fastest at its closest point (perihelion). Gravity is also stronger closer to the Sun, increasing the acceleration. As it moves back out, kinetic energy is converted back into gravitational potential energy and it slows down (total energy is conserved).",
        markScheme: [
          "Orbit is elliptical so distance from the Sun varies",
          "Moving inward: gravitational PE converted to kinetic energy | GPE → KE",
          "So speed increases / fastest at closest point (perihelion)",
          "Gravity stronger when closer | energy is conserved overall",
        ],
        commonError: "Saying the Sun 'pushes' the comet faster, or ignoring energy transfer — it is GPE converting to KE.",
        guideRef: "Comets and elliptical orbits",
        difficulty: "core",
        hints: ["What shape is the orbit, and what changes along it?", "What energy change happens as it falls inward?", "Link this to its speed (KE)."],
      },
      {
        id: "ast-qa-q05",
        question: "Compare a geostationary orbit and a low polar orbit, and give one suitable use for each. (5 marks)",
        marks: 5,
        modelAnswer:
          "A geostationary satellite is at a high altitude (about 36 000 km) above the equator, with an orbital period of 24 hours so it stays above the same point on Earth's surface. This makes it ideal for communications and TV broadcasting, because a ground dish can point at one fixed spot. A low polar orbit is at a much lower altitude (a few hundred km) and passes near the poles with a short period of about 90 minutes; Earth rotates beneath it so it scans the whole surface. This makes it suitable for weather monitoring or mapping/imaging of the whole Earth.",
        markScheme: [
          "Geostationary: high altitude / over the equator / ~24 h period",
          "Geostationary stays above the same point on Earth",
          "Geostationary use: communications | TV broadcasting",
          "Polar: low altitude / passes over the poles / short period; Earth rotates beneath it so it covers the whole surface",
          "Polar use: weather monitoring | mapping | imaging | spying",
        ],
        commonError: "Mixing up the uses — geostationary is for fixed communications; polar is for whole-Earth scanning.",
        guideRef: "Satellites: geostationary and polar orbits",
        difficulty: "core",
        hints: ["State the altitude and period of each.", "What does each stay above / pass over?", "Match each to a sensible use."],
      },
      {
        id: "ast-qa-q06",
        question: "Describe the life cycle of a star with a similar mass to the Sun, naming each stage in order. (5 marks)",
        marks: 5,
        modelAnswer:
          "The star begins as a nebula, a cloud of gas and dust. Gravity makes it contract into a protostar, which heats up until nuclear fusion of hydrogen begins and it becomes a main sequence star (its stable phase). When the hydrogen runs low it swells into a red giant. It then sheds its outer layers as a planetary nebula. The hot, dense core left behind is a white dwarf, which gradually cools.",
        markScheme: [
          "Nebula (cloud of gas and dust)",
          "Protostar (gravity contracts the cloud)",
          "Main sequence star (fusion of hydrogen begins / stable phase)",
          "Red giant (when hydrogen runs low)",
          "Planetary nebula then white dwarf (core left behind)",
        ],
        commonError: "Adding a supernova for a Sun-like star — that only happens to much more massive stars.",
        guideRef: "The life cycle of stars",
        difficulty: "core",
        hints: ["All stars start the same way — what is the cloud called?", "What is the stable, fusing stage?", "Sun-like stars do not explode — what is shed and what is left?"],
      },
      {
        id: "ast-qa-q07",
        question: "Describe how the life cycle of a star much more massive than the Sun differs from that of the Sun after the main sequence stage. (4 marks)",
        marks: 4,
        modelAnswer:
          "Both start the same way (nebula → protostar → main sequence). After the main sequence, a much more massive star swells into a red supergiant rather than a red giant. It then explodes violently in a supernova (a Sun-like star instead gently sheds a planetary nebula). The remnant left after the supernova is a neutron star, or a black hole if the star was massive enough — whereas a Sun-like star leaves a white dwarf.",
        markScheme: [
          "Massive star becomes a red supergiant (not a red giant)",
          "It explodes as a supernova (Sun-like star does not)",
          "Remnant is a neutron star or a black hole",
          "Comparison: Sun-like leaves a white dwarf / planetary nebula instead",
        ],
        commonError: "Forgetting the supernova step or the two possible remnants (neutron star OR black hole).",
        guideRef: "The life cycle of stars",
        difficulty: "challenge",
        hints: ["What replaces 'red giant' for a massive star?", "How does a massive star die — gently or violently?", "Name the two possible remnants."],
      },
      {
        id: "ast-qa-q08",
        question: "Explain where the chemical elements in your body originally came from, referring to fusion in stars and to supernovae. (4 marks)",
        marks: 4,
        modelAnswer:
          "Light elements such as helium were made by nuclear fusion of hydrogen in stars. In larger stars, fusion built up heavier elements up to iron. Elements heavier than iron could only be formed in the extreme conditions of a supernova explosion. The supernova then scattered these elements into space, where they later became part of new stars and planets, including the Earth — so the atoms in your body were made inside stars.",
        markScheme: [
          "Fusion in stars makes elements up to iron | hydrogen fuses to helium etc.",
          "Elements heavier than iron form in supernovae",
          "Supernova scatters / spreads elements into space",
          "These became part of new stars/planets (and us)",
        ],
        commonError: "Saying all elements are made in normal fusion — elements heavier than iron need a supernova.",
        guideRef: "Forming elements & luminosity",
        difficulty: "core",
        hints: ["Which elements does ordinary fusion make (up to which element)?", "What is needed to make heavier-than-iron elements?", "How did those elements reach the Earth?"],
      },
      {
        id: "ast-qa-q09",
        question: "Two stars have the same true luminosity, but one appears much brighter in our sky than the other. Explain how this is possible. (3 marks)",
        marks: 3,
        modelAnswer:
          "How bright a star appears (its brightness) depends on both its luminosity and its distance from us. As light spreads out from a star, the same energy is spread over a larger area the further it travels, so apparent brightness decreases with distance. If two stars have the same luminosity, the one that appears brighter must be closer to us.",
        markScheme: [
          "Apparent brightness depends on luminosity AND distance",
          "Light spreads out, so brightness decreases with distance",
          "The brighter-appearing star must be closer",
        ],
        commonError: "Confusing luminosity (true output) with brightness (how it looks) — they are different.",
        guideRef: "Forming elements & luminosity",
        difficulty: "core",
        hints: ["What two things decide how bright a star looks?", "What happens to light as it travels further?", "Equal luminosity but brighter → which is closer?"],
      },
      {
        id: "ast-qa-q10",
        question: "Explain what is meant by redshift, and describe how the redshift of distant galaxies provides evidence that the Universe is expanding. (5 marks)",
        marks: 5,
        modelAnswer:
          "Redshift is the increase in the wavelength of light from a source that is moving away from us, shifting the dark lines in its spectrum toward the red end. When we look at distant galaxies, their light is redshifted, which shows they are moving away from us. Importantly, the further away a galaxy is, the greater its redshift, so more distant galaxies are receding faster. Galaxies moving apart in every direction, with the most distant moving fastest, is exactly what we expect if space itself is expanding — so this is evidence for an expanding Universe.",
        markScheme: [
          "Redshift = increase in wavelength / shift toward the red end",
          "Caused by the source moving away from us",
          "Distant galaxies are redshifted → moving away",
          "Greater redshift for more distant galaxies → faster recession",
          "Consistent with the whole Universe / space expanding",
        ],
        commonError: "Saying redshift means galaxies are moving toward us, or forgetting the distance–redshift relationship.",
        guideRef: "Redshift, the expanding Universe & the Big Bang",
        difficulty: "core",
        hints: ["Which way does wavelength shift for a receding source?", "What does galaxy redshift tell us about their motion?", "What is special about the most distant galaxies?"],
      },
      {
        id: "ast-qa-q11",
        question: "State the Big Bang theory and explain how the cosmic microwave background radiation (CMBR) supports it. (4 marks)",
        marks: 4,
        modelAnswer:
          "The Big Bang theory states that the Universe began from an extremely hot, dense point about 13.8 billion years ago and has been expanding and cooling ever since. The CMBR is faint microwave radiation coming from all directions in space. It is the leftover radiation from the early hot Universe, which has been stretched to microwave wavelengths as the Universe expanded. The Big Bang theory predicts this radiation should exist, so detecting it strongly supports the theory.",
        markScheme: [
          "Universe began from a hot, dense point | single point",
          "Has been expanding (and cooling) ever since | ~13.8 billion years ago",
          "CMBR is leftover radiation from the early hot Universe, from all directions",
          "Big Bang predicts the CMBR, so it supports the theory",
        ],
        commonError: "Describing the CMBR as light from stars or just 'background noise' rather than leftover radiation from the early Universe.",
        guideRef: "Redshift, the expanding Universe & the Big Bang",
        difficulty: "core",
        hints: ["How did the Universe begin and what has it been doing since?", "What is the CMBR and where does it come from?", "Why does the CMBR being there support the Big Bang?"],
      },
      {
        id: "ast-qa-q12",
        question: "A spacecraft is placed in a circular orbit of radius 2.0 × 10⁷ m around a planet, completing one orbit every 4.0 hours. Calculate its orbital speed in m/s, showing your unit conversion. (4 marks)",
        marks: 4,
        modelAnswer:
          "Convert the period to seconds: T = 4.0 × 60 × 60 = 14 400 s. Then v = 2πr/T = (2 × π × 2.0×10⁷) / 14 400 = 1.257×10⁸ / 14 400 ≈ 8.7×10³ m/s (about 8700 m/s).",
        markScheme: [
          "Convert period: 4.0 h × 3600 = 14 400 s",
          "Correct equation v = 2πr/T",
          "Correct substitution: (2 × π × 2.0×10⁷) / 14 400",
          "v ≈ 8.7 × 10³ m/s | ≈ 8700 m/s (accept 8.7–8.73 ×10³)",
        ],
        commonError: "Leaving the period in hours, or converting only minutes — 4.0 h = 14 400 s.",
        guideRef: "Orbital speed: v = 2πr/T",
        difficulty: "challenge",
        hints: ["Convert 4.0 hours into seconds first.", "1 hour = 3600 s, so 4.0 h = 14 400 s.", "Then v = 2πr/T."],
        solutions: [
          {
            label: "Method: convert units, then v = 2πr/T",
            steps: [
              "Convert period: T = 4.0 h × 3600 s/h = 14 400 s.",
              "Write v = 2πr/T with r = 2.0×10⁷ m.",
              "Circumference: 2πr = 2 × π × 2.0×10⁷ = 1.257×10⁸ m.",
              "v = 1.257×10⁸ ÷ 14 400 = 8727 m/s.",
              "v ≈ 8.7×10³ m/s. Units: m ÷ s = m/s. ✓",
            ],
          },
        ],
      },
      {
        id: "ast-qa-q13",
        question: "Name the eight planets in order outward from the Sun, and state which are rocky and which are gas/ice giants. (4 marks)",
        marks: 4,
        modelAnswer:
          "In order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. The four inner planets (Mercury, Venus, Earth, Mars) are small and rocky. The four outer planets (Jupiter, Saturn, Uranus, Neptune) are large gas/ice giants.",
        markScheme: [
          "Correct order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
          "Inner four named as rocky | Mercury, Venus, Earth, Mars are rocky",
          "Outer four named as gas/ice giants | Jupiter, Saturn, Uranus, Neptune are giants",
          "Order goes from closest (Mercury) to furthest (Neptune)",
        ],
        commonError: "Swapping Uranus and Neptune, or putting Earth before Venus.",
        guideRef: "The Solar System",
        difficulty: "warmup",
        hints: ["Start at the planet closest to the Sun.", "The first four are small and rocky.", "The last four are huge gas/ice giants."],
      },
      {
        id: "ast-qa-q14",
        question: "Describe briefly how the Solar System is thought to have formed, and explain the difference between a planet and a dwarf planet. (4 marks)",
        marks: 4,
        modelAnswer:
          "The Solar System formed about 4.6 billion years ago from a cloud of gas and dust. Gravity pulled the material together; most of the mass collected at the centre and became hot and dense enough to form the Sun, while the leftover material orbiting the Sun clumped together to form the planets, moons, asteroids and comets. A planet orbits the Sun, is round, and has cleared other objects from its orbit. A dwarf planet (e.g. Pluto) also orbits the Sun and is round, but it has NOT cleared other objects from its orbit.",
        markScheme: [
          "Formed from a cloud of gas and dust pulled together by gravity",
          "Most mass formed the Sun; leftover material formed planets/moons/etc.",
          "A planet has cleared other objects from its orbit",
          "A dwarf planet (e.g. Pluto) has not cleared its orbit",
        ],
        commonError: "Saying the planets formed before the Sun, or that a dwarf planet does not orbit the Sun.",
        guideRef: "The Solar System",
        difficulty: "core",
        hints: ["What collapses to form a star and its system?", "Which forms first, the Sun or the planets?", "What is the one orbital condition a dwarf planet fails?"],
      },
      {
        id: "ast-qa-q15",
        question: "Define the light-year, then calculate its value in metres using c = 3 × 10⁸ m/s and 1 year ≈ 3.15 × 10⁷ s. (4 marks)",
        marks: 4,
        modelAnswer:
          "A light-year is a unit of distance: the distance that light travels in one year. Using distance = speed × time: distance = c × t = (3 × 10⁸) × (3.15 × 10⁷) = 9.45 × 10¹⁵ m ≈ 9.5 × 10¹⁵ m.",
        markScheme: [
          "Light-year defined as a distance (the distance light travels in one year)",
          "Use distance = speed × time | distance = c × t",
          "Correct substitution: (3 × 10⁸) × (3.15 × 10⁷)",
          "≈ 9.5 × 10¹⁵ m | 9.45 × 10¹⁵ m",
        ],
        commonError: "Saying a light-year is a unit of time, or forgetting to convert the year into seconds before multiplying by c.",
        guideRef: "The speed of light and the light-year",
        difficulty: "challenge",
        hints: ["Is a light-year a time or a distance?", "Which equation links distance, speed and time?", "Multiply c by the seconds in one year."],
        solutions: [
          {
            label: "Method: distance = speed × time",
            steps: [
              "Recall a light-year is a distance = how far light goes in 1 year.",
              "Write distance = speed × time, with speed = c = 3×10⁸ m/s.",
              "Time for 1 year = 3.15×10⁷ s.",
              "distance = (3×10⁸) × (3.15×10⁷) = 9.45×10¹⁵ m.",
              "Round: ≈ 9.5×10¹⁵ m. Units: (m/s) × s = m. ✓",
            ],
          },
        ],
      },
      {
        id: "ast-qa-q16",
        question: "Explain how observations of distant galaxies provide evidence for the Big Bang theory, referring to BOTH pieces of evidence. (6 marks)",
        marks: 6,
        modelAnswer:
          "The first piece of evidence is the redshift of galaxies. Light from distant galaxies is shifted toward longer (redder) wavelengths, showing the galaxies are moving away from us. The further away a galaxy is, the greater its redshift, so the faster it is receding. This shows the whole Universe is expanding, which implies it was once together in a hot, dense state — the Big Bang, about 13.8 billion years ago. The second piece of evidence is the cosmic microwave background radiation (CMBR): faint microwaves coming from all directions in space. This is leftover radiation from the early hot Universe, stretched to microwave wavelengths by the expansion. The Big Bang theory predicts the CMBR should exist, so detecting it strongly supports the theory.",
        markScheme: [
          "Redshift: galaxy light shifted to longer/redder wavelengths",
          "Shows galaxies are moving away from us",
          "Greater redshift for more distant galaxies → faster recession → expanding Universe",
          "Implies a hot, dense beginning ~13.8 billion years ago",
          "CMBR is leftover radiation from the early hot Universe, from all directions",
          "Big Bang predicts the CMBR, so it supports the theory",
        ],
        commonError: "Giving only one piece of evidence, or describing redshift as galaxies moving toward us.",
        guideRef: "Redshift, the expanding Universe & the Big Bang",
        difficulty: "challenge",
        hints: ["Two separate observations are needed.", "One is about galaxy motion (redshift).", "One is leftover radiation (CMBR)."],
      },
    ],
  },
};
