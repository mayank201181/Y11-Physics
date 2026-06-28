import type { Topic } from "../types";

// Forces and Shape — Edexcel IGCSE Physics 4PH1, Topic 6.
// Covers Hooke's law, force–extension graphs, elastic/plastic deformation,
// elastic potential energy, moments and the principle of moments, centre of
// gravity and stability. Mirrors the AoPS structure of the ht.ts template.

export const fs: Topic = {
  id: "fs",
  code: "FS",
  number: 6,
  title: "Forces and Shape",
  subject: "Physics",
  icon: "🪝",
  color: "#84cc16",
  intro:
    "A force does more than make things speed up — it can also change an object's shape and make it turn. In this topic you'll discover Hooke's law (F = k x), read force–extension graphs, work out the energy stored in a stretched spring, and balance see-saws and beams using moments. These ideas explain springs, scales, levers, cranes and why a tall bus tips over before a low sports car does.",
  guide: [
    {
      heading: "Forces that change shape",
      discovery: {
        problem:
          "You hang a 1 N weight on a spring and it stretches 2 cm. You hang 2 N and it stretches 4 cm. You hang 3 N and it stretches 6 cm. Is there a pattern hiding in those numbers — and could you predict the stretch for 5 N without trying it?",
        idea: "The extension doubles when the force doubles, trebles when the force trebles. Extension is proportional to force, so 5 N would give 10 cm. That fixed ratio (force per unit extension) is a property of the spring itself.",
      },
      body:
        "A force can change an object's **shape** as well as its motion. The three shape changes you must know are:\n\n- **stretching** (tension) — pulling makes an object longer, e.g. a spring or elastic band;\n- **compressing** — pushing makes an object shorter, e.g. squashing a spring or a foam block;\n- **bending** — turning forces curve an object, e.g. bending a ruler or a diving board.\n\nChanging shape this way is called **deforming** an object. To deform an object you actually need **more than one force**. If you stretch a spring you pull down on the bottom while the support (clamp) pulls up on the top — two forces acting in opposite directions. A *single* unbalanced force would simply make the object accelerate (move off) instead of changing its shape; it is the pair of opposing forces that squashes, stretches or bends it.\n\nWhen you stretch a spring, the **extension** is how much *longer* it has become:\n\nextension = stretched length − original (natural) length\n\nExtension is a length, measured in **metres (m)** (or cm in the lab). Always subtract the natural length first — the stretched length on its own is *not* the extension. (For a compressed spring the same idea gives the *compression* — how much shorter it has become.)",
      keyPoints: [
        "A force can change an object's shape: stretching, compressing or bending.",
        "Deforming needs at least two (opposing) forces — one force alone just accelerates the object.",
        "Extension = stretched length − original length (a length in metres).",
        "Compression = original length − compressed length.",
      ],
      whyItWorks:
        "Inside a solid, particles are held by bonds that act like tiny springs. Pulling stretches these bonds; up to a point each bond stretches in proportion to the force, so the whole object's extension is proportional to the force.",
      strategies: ["Subtract the natural length first", "Look for a constant ratio in data"],
    },
    {
      heading: "Hooke's law: F = k x",
      body:
        "For a spring (and many elastic materials) the force needed is **proportional to the extension**, provided you don't stretch it too far. This is **Hooke's law**:\n\nF = k x\n\n- **F** = force applied, in newtons (**N**)\n- **x** = extension, in metres (**m**)\n- **k** = the **spring constant**, in newtons per metre (**N/m**)\n\nThe spring constant **k** tells you how *stiff* a spring is: a large k means a stiff spring that needs a big force for a small extension. Rearranging gives:\n\nk = F ÷ x   and   x = F ÷ k\n\n*Worked example.* A spring extends by 0.04 m when a 2.0 N force is applied. Then k = F ÷ x = 2.0 ÷ 0.04 = **50 N/m**. To extend it 0.10 m would need F = k x = 50 × 0.10 = **5.0 N**.",
      keyPoints: [
        "Hooke's law: F = k x (force is proportional to extension).",
        "Spring constant k = F ÷ x, measured in N/m.",
        "A stiffer spring has a larger k.",
        "Keep x in metres when k is in N/m.",
      ],
      formulae: ["F = k x", "k = F ÷ x", "x = F ÷ k", "F in N, x in m, k in N/m"],
      whyItWorks:
        "While the bonds between particles stretch elastically, each extra newton stretches them the same extra amount, so the extension grows in step with the force — a straight-line (proportional) relationship.",
      strategies: ["Write the formula, then rearrange for the unknown", "Convert cm to m before substituting"],
    },
    {
      heading: "Force–extension graphs",
      body:
        "Plotting **force (y-axis)** against **extension (x-axis)** turns Hooke's law into a picture.\n\n- While Hooke's law holds, the graph is a **straight line through the origin**. Its **gradient = the spring constant k** (steeper line = stiffer spring).\n- Beyond a certain point the line **curves** away from the straight part — the spring stops obeying Hooke's law.\n\nThe point where the graph stops being a straight line is the **limit of proportionality**. Past it, extension is no longer proportional to force.",
      diagrams: [
        {
          caption: "Force–extension graph: straight (proportional) part, then it curves at the limit of proportionality.",
          svg:
            '<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Force against extension graph showing a straight line through the origin that curves at the limit of proportionality">\n<line x1="40" y1="150" x2="220" y2="150" stroke="#475569" stroke-width="1.5"/>\n<line x1="40" y1="150" x2="40" y2="20" stroke="#475569" stroke-width="1.5"/>\n<text x="130" y="172" font-size="11" text-anchor="middle" fill="#334155">extension x (m)</text>\n<text x="14" y="90" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 14 90)">force F (N)</text>\n<path d="M40 150 L150 60" stroke="#65a30d" stroke-width="2.5" fill="none"/>\n<path d="M150 60 C175 45 195 42 210 40" stroke="#65a30d" stroke-width="2.5" fill="none"/>\n<circle cx="150" cy="60" r="3.5" fill="#b91c1c"/>\n<line x1="150" y1="60" x2="150" y2="150" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>\n<text x="150" y="48" font-size="9" text-anchor="middle" fill="#b91c1c">limit of</text>\n<text x="150" y="38" font-size="9" text-anchor="middle" fill="#b91c1c">proportionality</text>\n<text x="92" y="110" font-size="9" text-anchor="middle" fill="#65a30d">gradient = k</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Plot force (y) against extension (x).",
        "Straight line through the origin = obeys Hooke's law.",
        "Gradient of the straight part = spring constant k.",
        "The line curves at the limit of proportionality.",
      ],
      formulae: ["gradient of F–x graph = k"],
      whyItWorks:
        "A proportional relationship F = k x is, by definition, a straight line through the origin with gradient k. When bonds can no longer stretch in proportion, the data leaves the straight line and the graph bends.",
      strategies: ["Read the gradient as rise ÷ run", "Spot where the line stops being straight"],
    },
    {
      heading: "Elastic and plastic deformation",
      discovery: {
        problem:
          "You stretch a steel spring a little and let go — it springs straight back. You stretch it much further and let go — this time it stays longer than before. Same spring, same action: why does it sometimes return and sometimes not?",
        idea: "Below a certain stretch the deformation is reversible (elastic): the spring returns to its original length. Past the elastic limit the change is permanent (plastic): the spring is left longer. The spring 'remembers' its shape only up to that limit.",
      },
      body:
        "How an object behaves after the force is removed depends on how far you deformed it:\n\n- **Elastic deformation** is **reversible** — the object returns to its original shape and length when the force is removed (e.g. a gently stretched spring).\n- **Plastic deformation** is **permanent** — the object stays deformed even after the force is removed (e.g. an over-stretched spring or a bent paperclip).\n\nThe **elastic limit** is the point beyond which deformation becomes plastic (permanent). It sits at or just beyond the limit of proportionality on the graph. Stretch the spring past its elastic limit and it will not return to its original length.",
      diagrams: [
        {
          caption: "A spring at natural length and stretched by an extension x under a force F.",
          svg:
            '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A spring at natural length next to the same spring stretched by an extension x under a downward force F">\n<rect x="20" y="20" width="180" height="10" fill="#94a3b8"/>\n<path d="M55 30 l0 12 l14 8 l-28 8 l28 8 l-28 8 l28 8 l-14 8 l0 12" stroke="#475569" stroke-width="2" fill="none"/>\n<rect x="44" y="104" width="22" height="16" fill="#cbd5e1" stroke="#475569"/>\n<text x="55" y="140" font-size="9" text-anchor="middle" fill="#334155">natural</text>\n<path d="M150 30 l0 14 l14 9 l-28 9 l28 9 l-28 9 l28 9 l-28 9 l28 9 l-14 9 l0 12" stroke="#65a30d" stroke-width="2" fill="none"/>\n<rect x="139" y="132" width="22" height="16" fill="#cbd5e1" stroke="#475569"/>\n<line x1="190" y1="44" x2="190" y2="140" stroke="#1d4ed8" stroke-width="1"/>\n<text x="200" y="95" font-size="10" fill="#1d4ed8">x</text>\n<path d="M150 148 l0 14" stroke="#b91c1c" stroke-width="2" marker-end="url(#dn2)"/>\n<defs><marker id="dn2" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0 0 L8 0 L4 6 z" fill="#b91c1c"/></marker></defs>\n<text x="150" y="167" font-size="10" text-anchor="middle" fill="#b91c1c">F</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Elastic = reversible: returns to original shape when force removed.",
        "Plastic = permanent: stays deformed when force removed.",
        "The elastic limit is where deformation becomes permanent.",
        "Beyond the elastic limit the spring won't return to its original length.",
      ],
      whyItWorks:
        "Within the elastic region the particle bonds stretch but snap back like springs. Stretch too far and the particles slide to new positions and form new bonds, so the object cannot recover its original shape.",
      thinkDeeper:
        "The limit of proportionality and the elastic limit are close but not identical: between them a spring can still return to its original length even though F is no longer proportional to x.",
      strategies: ["Ask: does it return or stay?", "Locate the limit on the graph"],
    },
    {
      heading: "Energy stored in a stretched spring",
      body:
        "Stretching (or compressing) a spring does work on it, and that work is stored as **elastic potential energy**. On a force–extension graph the stored energy is the **area under the straight line** — a triangle of base x and height F — so within the linear region:\n\nE = ½ F x\n\nand, substituting F = k x, this becomes the form used most often:\n\nE = ½ k x²\n\n- **E** = elastic potential energy, in joules (**J**)\n- **F** = force at that extension, in newtons (N)\n- **k** = spring constant, in N/m\n- **x** = extension, in metres (m)\n\nUse **E = ½ F x** when you know the force and extension; use **E = ½ k x²** when you know the spring constant and extension. Notice the extension is **squared** in the second form: doubling the extension stores *four times* the energy.\n\n*Worked example.* A spring with k = 50 N/m is extended by 0.20 m. Using E = ½ k x² = ½ × 50 × 0.20² = ½ × 50 × 0.04 = **1.0 J**. Check with E = ½ F x: the force is F = k x = 50 × 0.20 = 10 N, so E = ½ × 10 × 0.20 = **1.0 J** — the two methods agree. When released elastically, this energy can be transferred — for example to the kinetic energy of a launched object.",
      diagrams: [
        {
          caption: "Energy stored = area under the force–extension line (the shaded triangle).",
          svg:
            '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Force against extension graph with the triangular area under the straight line shaded to show stored elastic energy">\n<line x1="40" y1="140" x2="220" y2="140" stroke="#475569" stroke-width="1.5"/>\n<line x1="40" y1="140" x2="40" y2="20" stroke="#475569" stroke-width="1.5"/>\n<polygon points="40,140 170,140 170,45" fill="#bef264" stroke="none" opacity="0.7"/>\n<path d="M40 140 L170 45" stroke="#65a30d" stroke-width="2.5" fill="none"/>\n<line x1="170" y1="45" x2="170" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>\n<text x="130" y="162" font-size="11" text-anchor="middle" fill="#334155">extension x (m)</text>\n<text x="14" y="85" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 14 85)">force F (N)</text>\n<text x="110" y="120" font-size="10" text-anchor="middle" fill="#3f6212">area = energy</text>\n<text x="180" y="40" font-size="9" fill="#334155">F</text>\n<text x="170" y="153" font-size="9" text-anchor="middle" fill="#334155">x</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Elastic potential energy E = ½ F x = ½ k x².",
        "Energy is measured in joules (J).",
        "Extension is squared in E = ½ k x²: double x → four times the energy.",
        "Stored energy = area under the force–extension line (the triangle ½ F x).",
      ],
      formulae: ["E = ½ F x", "E = ½ k x²", "area under F–x line = energy stored", "E in J, F in N, k in N/m, x in m"],
      whyItWorks:
        "Work done = force × distance, but the force grows from 0 to F as you stretch, so the average force is ½F. Work = ½F × x = ½(k x)x = ½ k x² — the area of the triangle under the graph.",
      strategies: ["Square the extension before multiplying", "Link area-under-graph to energy"],
    },
    {
      heading: "Investigating springs (practical)",
      body:
        "A standard required-practical-style experiment finds the spring constant and tests Hooke's law:\n\n1. Hang a spring from a clamp stand and record its **natural length** with a ruler (eye level, to avoid parallax error).\n2. Add a known weight (e.g. 1 N), measure the new length and work out the **extension** (new length − natural length).\n3. Add weights one at a time, recording force and extension each time.\n4. Plot a **force–extension graph**. A straight line through the origin confirms Hooke's law; the **gradient gives k**.\n\nTo improve the result: take readings at eye level, use small weight steps, and **don't exceed the elastic limit** or the spring is ruined and the line bends. Repeat and average to reduce random error.",
      keyPoints: [
        "Measure natural length first, then extension after each weight.",
        "Plot force against extension and find the gradient (= k).",
        "Read at eye level to avoid parallax error.",
        "Do not exceed the elastic limit during the test.",
      ],
      whyItWorks:
        "Adding equal weight steps and plotting the points lets random scatter average out around the true straight line, and the gradient delivers k directly from many readings rather than one.",
      strategies: ["Control variables", "Repeat and average", "Identify sources of error"],
    },
    {
      heading: "Moments: the turning effect of a force",
      discovery: {
        problem:
          "A stiff door won't budge when you push near its hinge, but opens easily when you push at the handle, far from the hinge — with the very same push. Why does where you push matter so much?",
        idea: "A force's turning effect depends on both the size of the force and its distance from the pivot. Push further from the hinge and the same force produces a much bigger turning effect. That turning effect is called the moment.",
      },
      body:
        "A **moment** is the **turning effect of a force** about a pivot (turning point). It is calculated by:\n\nmoment = force × perpendicular distance from the pivot\n\nmoment = F × d\n\n- **moment** is measured in **newton metres (N m)**\n- **F** = force in newtons (N)\n- **d** = perpendicular distance from the pivot to the line of the force, in metres (m)\n\nThe distance must be the **perpendicular** distance from the pivot to the line of action of the force. To get a bigger moment, use a bigger force *or* a longer distance — which is why door handles, spanners and crowbars are placed far from the pivot.\n\n*Worked example.* A force of 20 N acts 0.30 m from a pivot. moment = 20 × 0.30 = **6 N m**.",
      diagrams: [
        {
          caption: "A spanner: the moment = force × perpendicular distance from the pivot (the bolt).",
          svg:
            '<svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A spanner turning a bolt, with a force applied at the end and the distance from the pivot marked">\n<circle cx="40" cy="80" r="12" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>\n<circle cx="40" cy="80" r="3" fill="#475569"/>\n<rect x="40" y="73" width="150" height="14" rx="4" fill="#94a3b8" stroke="#475569"/>\n<line x1="40" y1="105" x2="185" y2="105" stroke="#1d4ed8" stroke-width="1"/>\n<line x1="40" y1="100" x2="40" y2="110" stroke="#1d4ed8" stroke-width="1"/>\n<line x1="185" y1="100" x2="185" y2="110" stroke="#1d4ed8" stroke-width="1"/>\n<text x="112" y="122" font-size="10" text-anchor="middle" fill="#1d4ed8">distance d</text>\n<path d="M185 70 l0 -28" stroke="#b91c1c" stroke-width="2.5" marker-end="url(#up3)"/>\n<defs><marker id="up3" markerWidth="9" markerHeight="9" refX="4" refY="0" orient="auto"><path d="M0 6 L4 0 L8 6 z" fill="#b91c1c"/></marker></defs>\n<text x="185" y="34" font-size="11" text-anchor="middle" fill="#b91c1c">F</text>\n<text x="40" y="60" font-size="9" text-anchor="middle" fill="#334155">pivot</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Moment = turning effect of a force about a pivot.",
        "moment = force × perpendicular distance (F × d).",
        "Moment is measured in newton metres (N m).",
        "Distance must be perpendicular to the line of the force.",
      ],
      formulae: ["moment = F × d", "moment in N m, F in N, d in m"],
      whyItWorks:
        "Turning depends on leverage. A force far from the pivot sweeps a bigger arc for the same push, so it delivers a bigger turning effect — the product F × d captures both factors at once.",
      strategies: ["Identify the pivot first", "Use the perpendicular distance"],
    },
    {
      heading: "Principle of moments and equilibrium",
      body:
        "When an object is **balanced** (in equilibrium) and not turning, the turning effects either way must cancel. This is the **principle of moments**:\n\n**total clockwise moments = total anticlockwise moments** (about the same pivot)\n\nFor a see-saw or beam this means: add up each force × its distance on the clockwise side, and set it equal to the same sum on the anticlockwise side.\n\n*Worked example.* A child of weight 300 N sits 1.5 m left of a see-saw's pivot. Where must a 450 N child sit on the right to balance?\n\nanticlockwise = clockwise → 300 × 1.5 = 450 × d → 450 = 450 × d → d = **1.0 m** from the pivot.\n\nFull equilibrium also needs the forces to balance: **total upward force = total downward force** (so there is no resultant force) *and* the moments to balance (so there is no resultant turning effect).",
      diagrams: [
        {
          caption: "A balanced beam: anticlockwise moment (left) equals clockwise moment (right).",
          svg:
            '<svg viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A balanced beam on a pivot with a weight on the left and a weight on the right, moments equal">\n<rect x="30" y="60" width="200" height="10" fill="#94a3b8" stroke="#475569"/>\n<polygon points="130,70 118,95 142,95" fill="#475569"/>\n<text x="130" y="110" font-size="9" text-anchor="middle" fill="#334155">pivot</text>\n<rect x="60" y="44" width="20" height="16" fill="#65a30d"/>\n<path d="M70 70 l0 26" stroke="#b91c1c" stroke-width="2" marker-end="url(#d4)"/>\n<rect x="185" y="44" width="20" height="16" fill="#65a30d"/>\n<path d="M195 70 l0 26" stroke="#b91c1c" stroke-width="2" marker-end="url(#d4)"/>\n<defs><marker id="d4" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0 0 L8 0 L4 6 z" fill="#b91c1c"/></marker></defs>\n<line x1="70" y1="40" x2="130" y2="40" stroke="#1d4ed8" stroke-width="1"/>\n<line x1="130" y1="40" x2="195" y2="40" stroke="#1d4ed8" stroke-width="1"/>\n<text x="100" y="34" font-size="9" text-anchor="middle" fill="#1d4ed8">d1</text>\n<text x="162" y="34" font-size="9" text-anchor="middle" fill="#1d4ed8">d2</text>\n<text x="130" y="126" font-size="9" text-anchor="middle" fill="#3f6212">F1 d1 = F2 d2</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Principle of moments: clockwise moments = anticlockwise moments.",
        "Take all moments about the same pivot.",
        "Equilibrium also needs upward force = downward force.",
        "Solve balance problems by setting the two moment sums equal.",
      ],
      formulae: ["clockwise moments = anticlockwise moments", "F1 × d1 = F2 × d2 (balanced beam)"],
      whyItWorks:
        "If clockwise and anticlockwise moments are unequal there is a resultant turning effect, so the object rotates. Only when they are equal does the object stay still — balanced.",
      strategies: ["List clockwise vs anticlockwise moments", "Set the two sums equal and solve"],
    },
    {
      heading: "Levers as force multipliers",
      discovery: {
        problem:
          "A crowbar lets you lift a heavy paving slab you could never lift with your bare hands. You haven't become stronger — so where does the extra lifting force come from?",
        idea: "A lever turns a small effort applied far from the pivot into a large force on a load close to the pivot. Because moment = force × distance, a small force at a big distance can balance a big force at a small distance.",
      },
      body:
        "A **lever** is a simple machine — a rigid bar that turns about a **pivot (fulcrum)**. You apply an **effort** at one place and it acts on a **load** at another. Levers obey the principle of moments, so for a lever just about to move the load:\n\neffort × (effort's distance from pivot) = load × (load's distance from pivot)\n\nIf the effort is applied **further from the pivot** than the load, then a **small effort can balance (and move) a much larger load** — the lever acts as a **force multiplier**. The longer the effort arm compared with the load arm, the bigger the force the lever produces.\n\n*Worked example.* A crowbar pivots 0.10 m from a 500 N rock; you push down 0.80 m from the pivot. Effort × 0.80 = 500 × 0.10, so effort = 50 ÷ 0.80 = **62.5 N**. A 62.5 N push lifts a 500 N rock — the lever multiplies your force about 8 times.\n\nEveryday levers include spanners, scissors, wheelbarrows, bottle openers, see-saws and your own forearm (the elbow is the pivot).",
      keyPoints: [
        "A lever is a rigid bar that turns about a pivot (fulcrum).",
        "Levers obey the principle of moments: effort × effort arm = load × load arm.",
        "Effort applied far from the pivot can balance a large load near the pivot.",
        "This makes a lever a force multiplier (small effort → large force).",
      ],
      formulae: ["effort × effort distance = load × load distance", "force multiplied when effort arm > load arm"],
      whyItWorks:
        "The two moments must be equal to balance. If the effort's distance is large and the load's distance is small, the effort force can be small while still matching the load's moment — so the lever delivers a bigger force at the load than you put in at the effort.",
      strategies: ["Identify the pivot, effort and load", "Compare the two distances to see the multiplication"],
    },
    {
      heading: "Centre of gravity and stability",
      body:
        "The **centre of gravity** (also called the **centre of mass**) is the single point through which the **whole weight** of an object appears to act. For a uniform, regularly shaped object (a ruler, a uniform beam, a sphere) it is at the **geometric centre**.\n\n**Finding the centre of gravity of a flat (irregular) shape — the plumb-line method:**\n\n1. Hang the shape freely from a pin so it can swing, and let it settle. The centre of gravity always hangs *directly below* the pin.\n2. Hang a **plumb line** (a thread with a weight) from the same pin and draw the vertical line it makes on the shape.\n3. Repeat from a different hanging point to draw a second line.\n4. The **centre of gravity is where the lines cross.** (A third line is a useful check.)\n\n**Stability.** The **base of support** is the area enclosed by the object's contact points with the ground. An object **topples** when its centre of gravity passes *outside* its base — the **line of action of its weight** then falls beyond the edge it pivots on, creating an unbalanced moment that tips it over. While that line stays *inside* the base, the weight's moment turns the object back upright.\n\nAn object is **more stable** when it has:\n\n- a **low centre of gravity**, and\n- a **wide base**.\n\nThat is why racing cars are low and wide, while a tall, narrow bus tips more easily. A stable object tends to return to its original position after a small push; an unstable one topples.",
      diagrams: [
        {
          caption: "Plumb-line method: lines drawn from two hanging points cross at the centre of gravity.",
          svg:
            '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An irregular card hung from a pin with a plumb line, two vertical lines crossing at the centre of gravity">\n<polygon points="60,30 180,40 200,110 120,150 40,100" fill="#ecfccb" stroke="#65a30d" stroke-width="1.5"/>\n<circle cx="60" cy="30" r="3" fill="#475569"/>\n<line x1="60" y1="30" x2="96" y2="148" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>\n<circle cx="180" cy="40" r="3" fill="#475569"/>\n<line x1="180" y1="40" x2="96" y2="148" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>\n<circle cx="105" cy="92" r="4" fill="#b91c1c"/>\n<text x="118" y="90" font-size="9" fill="#b91c1c">centre of gravity</text>\n<text x="40" y="22" font-size="9" fill="#334155">pin</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Centre of gravity (centre of mass) = point where all the weight appears to act.",
        "Find it for a flat shape with the plumb-line method: hang from two points, mark the verticals, they cross at the centre of gravity.",
        "An object topples when its centre of gravity (weight's line of action) goes outside its base of support.",
        "Low centre of gravity + wide base = more stable; the object returns to position after a small tilt.",
      ],
      whyItWorks:
        "While the weight's line of action stays inside the base, its moment turns the object back upright. Once it passes the pivoting edge, that moment turns the object over instead — so a low, wide shape keeps the line inside the base for larger tilts.",
      strategies: ["Track where the weight's line of action falls", "Compare base width and height"],
    },
  ],
  learn: {
    bigIdea:
      "Forces don't only accelerate objects — they deform them and turn them. Hooke's law (F = k x) and E = ½ k x² describe stretching springs, while moments (F × d) and the principle of moments describe turning and balance.",
    mustKnow: [
      "Hooke's law: F = k x, with k the spring constant in N/m.",
      "Force–extension is a straight line through the origin up to the limit of proportionality; the gradient is k.",
      "Elastic deformation is reversible; plastic deformation (past the elastic limit) is permanent.",
      "Elastic potential energy E = ½ F x = ½ k x² (also the area under the force–extension line).",
      "Moment = force × perpendicular distance (F × d), in newton metres.",
      "Principle of moments: clockwise moments = anticlockwise moments for a balanced object.",
      "A lever is a force multiplier: effort × effort arm = load × load arm.",
      "Equilibrium needs no resultant force AND no resultant moment.",
      "Stability improves with a low centre of gravity and a wide base.",
    ],
    keywords: [
      { term: "Extension", definition: "The increase in length of an object: stretched length − original length, in metres." },
      { term: "Hooke's law", definition: "Force is proportional to extension, F = k x, up to the limit of proportionality." },
      { term: "Spring constant (k)", definition: "The force needed per unit extension, k = F ÷ x, measured in N/m; larger k means a stiffer spring." },
      { term: "Limit of proportionality", definition: "The point on a force–extension graph beyond which extension is no longer proportional to force." },
      { term: "Elastic deformation", definition: "A reversible change of shape: the object returns to its original shape when the force is removed." },
      { term: "Plastic deformation", definition: "A permanent change of shape that remains after the force is removed." },
      { term: "Elastic potential energy", definition: "Energy stored in a stretched or compressed spring, E = ½ k x², in joules." },
      { term: "Moment", definition: "The turning effect of a force about a pivot, moment = force × perpendicular distance, in N m." },
      { term: "Principle of moments", definition: "For a balanced object, total clockwise moments equal total anticlockwise moments about the same pivot." },
      { term: "Centre of gravity", definition: "The single point (also called the centre of mass) through which the whole weight of an object appears to act." },
      { term: "Lever", definition: "A rigid bar that turns about a pivot; a force multiplier where effort × effort arm = load × load arm." },
      { term: "Equilibrium", definition: "A state with no resultant force and no resultant moment, so the object neither accelerates nor turns." },
      { term: "Base of support", definition: "The area enclosed by an object's contact points with the ground; an object topples if its weight's line of action falls outside it." },
    ],
    flashcards: [
      { front: "State Hooke's law and its formula.", back: "Force is proportional to extension (up to the limit of proportionality): F = k x, where k is the spring constant in N/m." },
      { front: "What does the gradient of a force–extension graph represent?", back: "The spring constant k (steeper line = stiffer spring)." },
      { front: "Difference between elastic and plastic deformation?", back: "Elastic is reversible (returns to original shape); plastic is permanent (stays deformed)." },
      { front: "Formula for energy stored in a stretched spring?", back: "E = ½ F x = ½ k x² (joules); it is also the area under the force–extension line." },
      { front: "How do you calculate a moment?", back: "moment = force × perpendicular distance from the pivot (F × d), measured in N m." },
      { front: "State the principle of moments.", back: "For a balanced object, total clockwise moments = total anticlockwise moments about the same pivot." },
      { front: "Why is a lever a force multiplier?", back: "Effort × effort arm = load × load arm. With the effort far from the pivot and the load near it, a small effort balances a large load." },
      { front: "How do you find the centre of gravity of a flat shape?", back: "Plumb-line method: hang it from two different points, draw the vertical (plumb line) each time; the lines cross at the centre of gravity." },
      { front: "What two conditions are needed for equilibrium?", back: "No resultant force (up forces = down forces) AND no resultant moment (clockwise = anticlockwise moments)." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "fs-mcq-q01",
        question: "The extension of a spring is calculated as…",
        options: ["stretched length + original length", "stretched length − original length", "original length − stretched length", "stretched length × original length"],
        answerIndex: 1,
        explanation: "Extension is how much longer the spring has become: stretched length minus the original (natural) length.",
        guideRef: "Forces that change shape",
        difficulty: "warmup",
      },
      {
        id: "fs-mcq-q02",
        question: "Which equation is Hooke's law?",
        options: ["F = m a", "F = k x", "E = ½ k x²", "moment = F × d"],
        answerIndex: 1,
        explanation: "Hooke's law states force is proportional to extension: F = k x.",
        guideRef: "Hooke's law: F = k x",
        difficulty: "warmup",
      },
      {
        id: "fs-mcq-q03",
        question: "The spring constant k is measured in…",
        options: ["newtons (N)", "joules (J)", "newtons per metre (N/m)", "newton metres (N m)"],
        answerIndex: 2,
        explanation: "k = F ÷ x, so its unit is newtons divided by metres, N/m.",
        guideRef: "Hooke's law: F = k x",
        difficulty: "warmup",
      },
      {
        id: "fs-mcq-q04",
        question: "On a force–extension graph, the spring constant is given by the…",
        options: ["area under the line", "y-intercept", "gradient of the straight part", "length of the line"],
        answerIndex: 2,
        explanation: "Since F = k x, a graph of F against x is a straight line whose gradient equals k.",
        guideRef: "Force–extension graphs",
        difficulty: "core",
        hints: ["F = k x is the equation of a straight line.", "Compare F = k x with y = m x — what does k correspond to?", "The slope of a straight line is its gradient."],
        strategy: "Compare with y = mx",
      },
      {
        id: "fs-mcq-q05",
        question: "A spring extends 0.05 m when a force of 10 N is applied. Its spring constant is…",
        options: ["0.5 N/m", "2 N/m", "50 N/m", "200 N/m"],
        answerIndex: 3,
        explanation: "k = F ÷ x = 10 ÷ 0.05 = 200 N/m.",
        guideRef: "Hooke's law: F = k x",
        difficulty: "core",
        hints: ["Use k = F ÷ x.", "Keep the extension in metres (0.05 m).", "10 ÷ 0.05 = ?"],
        strategy: "Rearrange then substitute",
      },
      {
        id: "fs-mcq-q06",
        question: "The point beyond which a force–extension graph stops being a straight line is the…",
        options: ["centre of gravity", "limit of proportionality", "pivot", "spring constant"],
        answerIndex: 1,
        explanation: "Up to the limit of proportionality the graph is straight; beyond it, extension is no longer proportional to force.",
        guideRef: "Force–extension graphs",
        difficulty: "core",
        hints: ["It is named on the graph where the line bends.", "It describes when proportionality ends.", "The phrase contains the word 'proportionality'."],
      },
      {
        id: "fs-mcq-q07",
        question: "A deformation that is reversible — the object returns to its original shape — is described as…",
        options: ["plastic", "elastic", "permanent", "brittle"],
        answerIndex: 1,
        explanation: "Elastic deformation is reversible; the object returns to its original shape when the force is removed.",
        guideRef: "Elastic and plastic deformation",
        difficulty: "warmup",
      },
      {
        id: "fs-mcq-q08",
        question: "A paperclip bent out of shape stays bent. This is an example of…",
        options: ["elastic deformation", "plastic deformation", "Hooke's law", "thermal expansion"],
        answerIndex: 1,
        explanation: "The change is permanent, so it is plastic deformation (the elastic limit was exceeded).",
        guideRef: "Elastic and plastic deformation",
        difficulty: "core",
        hints: ["Does the paperclip return to its shape?", "Permanent change = which type of deformation?", "The opposite of elastic."],
      },
      {
        id: "fs-mcq-q09",
        question: "The elastic limit of a spring is the point beyond which it…",
        options: ["obeys Hooke's law", "no longer returns to its original length", "stores no energy", "has zero spring constant"],
        answerIndex: 1,
        explanation: "Past the elastic limit the deformation becomes plastic (permanent), so the spring will not return to its original length.",
        guideRef: "Elastic and plastic deformation",
        difficulty: "core",
        hints: ["What changes after this point — does the spring recover?", "Link it to plastic (permanent) deformation.", "Think about whether it springs back."],
      },
      {
        id: "fs-mcq-q10",
        question: "The energy stored in a stretched spring is given by…",
        options: ["E = k x", "E = ½ k x²", "E = F d", "E = ½ m v²"],
        answerIndex: 1,
        explanation: "Elastic potential energy is E = ½ k x²; the extension is squared.",
        guideRef: "Energy stored in a stretched spring",
        difficulty: "core",
        hints: ["The extension appears squared in this formula.", "It equals the triangular area under the F–x line.", "It starts with ½ k …"],
      },
      {
        id: "fs-mcq-q11",
        question: "On a force–extension graph, the energy stored in the spring is shown by the…",
        options: ["gradient of the line", "area under the line", "y-intercept", "x-intercept"],
        answerIndex: 1,
        explanation: "Work done = area under the force–extension graph, which equals the stored elastic potential energy.",
        guideRef: "Energy stored in a stretched spring",
        difficulty: "core",
        hints: ["Work = force × distance, and force varies along the line.", "Think of the triangle ½ × F × x.", "It is not the gradient — that gives k."],
        strategy: "Link area-under-graph to energy",
      },
      {
        id: "fs-mcq-q12",
        question: "A spring (k = 40 N/m) is stretched by 0.10 m. The energy stored is…",
        options: ["0.2 J", "0.4 J", "2 J", "4 J"],
        answerIndex: 0,
        explanation: "E = ½ k x² = ½ × 40 × 0.10² = ½ × 40 × 0.01 = 0.2 J.",
        guideRef: "Energy stored in a stretched spring",
        difficulty: "core",
        hints: ["Use E = ½ k x².", "Square the extension first: 0.10² = 0.01.", "½ × 40 × 0.01 = ?"],
        strategy: "Square before multiplying",
      },
      {
        id: "fs-mcq-q13",
        question: "In a springs practical, readings should be taken at eye level mainly to reduce…",
        options: ["parallax error", "the spring constant", "the limit of proportionality", "air resistance"],
        answerIndex: 0,
        explanation: "Reading the ruler at eye level avoids parallax error, giving more accurate length measurements.",
        guideRef: "Investigating springs (practical)",
        difficulty: "core",
        hints: ["It is a reading error linked to viewing angle.", "What error comes from looking at a scale from the side?", "It starts with 'para…'."],
      },
      {
        id: "fs-mcq-q14",
        question: "The moment of a force is calculated using…",
        options: ["force ÷ distance", "force × perpendicular distance", "force + distance", "½ force × distance²"],
        answerIndex: 1,
        explanation: "moment = force × perpendicular distance from the pivot (F × d).",
        guideRef: "Moments: the turning effect of a force",
        difficulty: "warmup",
      },
      {
        id: "fs-mcq-q15",
        question: "The unit of a moment is the…",
        options: ["newton (N)", "joule (J)", "newton metre (N m)", "newton per metre (N/m)"],
        answerIndex: 2,
        explanation: "moment = force (N) × distance (m), so the unit is the newton metre, N m.",
        guideRef: "Moments: the turning effect of a force",
        difficulty: "warmup",
      },
      {
        id: "fs-mcq-q16",
        question: "A force of 25 N acts 0.40 m from a pivot. The moment is…",
        options: ["6.25 N m", "10 N m", "25 N m", "62.5 N m"],
        answerIndex: 1,
        explanation: "moment = F × d = 25 × 0.40 = 10 N m.",
        guideRef: "Moments: the turning effect of a force",
        difficulty: "core",
        hints: ["Use moment = F × d.", "Multiply the force by the distance.", "25 × 0.40 = ?"],
        strategy: "Substitute into F × d",
      },
      {
        id: "fs-mcq-q17",
        question: "A door opens more easily when you push at the handle (far from the hinge) because this…",
        options: ["reduces the force needed by increasing the distance", "increases the friction", "lowers the centre of gravity", "increases the spring constant"],
        answerIndex: 0,
        explanation: "Moment = F × d, so a larger distance from the pivot gives the same turning effect with a smaller force.",
        guideRef: "Moments: the turning effect of a force",
        difficulty: "core",
        hints: ["Where is the pivot on a door?", "moment = F × d — what happens if d is bigger?", "Same moment with bigger d means smaller F."],
      },
      {
        id: "fs-mcq-q18",
        question: "For an object that is balanced and not turning, the principle of moments states that…",
        options: [
          "clockwise moments are greater than anticlockwise moments",
          "clockwise moments equal anticlockwise moments",
          "there are no forces acting",
          "the moment is zero everywhere",
        ],
        answerIndex: 1,
        explanation: "In equilibrium, total clockwise moments equal total anticlockwise moments about the same pivot.",
        guideRef: "Principle of moments and equilibrium",
        difficulty: "core",
        hints: ["If they were unequal, the object would turn.", "Balance means the turning effects cancel.", "Equal, not greater."],
      },
      {
        id: "fs-mcq-q19",
        question: "A child of weight 200 N sits 2.0 m from a see-saw pivot. The moment they produce is…",
        options: ["100 N m", "202 N m", "400 N m", "4 N m"],
        answerIndex: 2,
        explanation: "moment = F × d = 200 × 2.0 = 400 N m.",
        guideRef: "Principle of moments and equilibrium",
        difficulty: "core",
        hints: ["Use moment = F × d.", "Multiply weight by distance.", "200 × 2.0 = ?"],
      },
      {
        id: "fs-mcq-q20",
        question: "Which change makes an object MORE stable?",
        options: ["Raising its centre of gravity", "Narrowing its base", "Lowering its centre of gravity and widening its base", "Making it taller"],
        answerIndex: 2,
        explanation: "A low centre of gravity and a wide base keep the weight's line of action inside the base for larger tilts, so it is harder to topple.",
        guideRef: "Centre of gravity and stability",
        difficulty: "core",
        hints: ["Think of a racing car versus a tall bus.", "Two factors matter: height of centre of gravity and width of base.", "Lower and wider is more stable."],
      },
      {
        id: "fs-mcq-q21",
        question: "An object topples over when its centre of gravity…",
        options: ["is at the geometric centre", "moves outside its base", "stays above the pivot", "becomes heavier"],
        answerIndex: 1,
        explanation: "Once the centre of gravity (and the weight's line of action) passes outside the base, an unbalanced moment tips the object over.",
        guideRef: "Centre of gravity and stability",
        difficulty: "core",
        hints: ["Where must the line of the weight stay for the object to stay upright?", "What happens when it passes the edge of the base?", "Outside the base = topples."],
      },
      {
        id: "fs-mcq-q22",
        question: "Spring A has k = 30 N/m and spring B has k = 90 N/m. For the same applied force, spring B will…",
        options: ["extend three times as much as A", "extend one third as much as A", "extend the same as A", "not extend at all"],
        answerIndex: 1,
        explanation: "x = F ÷ k. With three times the k, B's extension is one third of A's for the same force — B is stiffer.",
        guideRef: "Hooke's law: F = k x",
        difficulty: "challenge",
        hints: ["Rearrange F = k x to make x the subject.", "If k is 3× larger and F is the same, what happens to x?", "Stiffer spring → smaller extension."],
        strategy: "Reason with the rearranged formula",
      },
      {
        id: "fs-mcq-q23",
        question: "A spring stores 0.5 J when extended by x. If the extension is doubled to 2x (still within the limit), the energy stored becomes…",
        options: ["0.5 J", "1.0 J", "2.0 J", "4.0 J"],
        answerIndex: 2,
        explanation: "E = ½ k x² depends on x². Doubling x multiplies the energy by 2² = 4, so 0.5 J × 4 = 2.0 J.",
        guideRef: "Energy stored in a stretched spring",
        difficulty: "challenge",
        hints: ["Which quantity is squared in E = ½ k x²?", "Double the extension → multiply energy by 2².", "0.5 × 4 = ?"],
        strategy: "Use proportional reasoning",
      },
      {
        id: "fs-mcq-q24",
        question: "A uniform 1.0 m beam is pivoted at its centre. A 6 N weight hangs 0.40 m left of the pivot. To balance it, a 4 N weight must hang…",
        options: ["0.40 m right of the pivot", "0.60 m right of the pivot", "0.80 m right of the pivot", "0.24 m right of the pivot"],
        answerIndex: 1,
        explanation: "Anticlockwise = clockwise: 6 × 0.40 = 4 × d → 2.4 = 4d → d = 2.4 ÷ 4 = 0.60 m.",
        guideRef: "Principle of moments and equilibrium",
        difficulty: "challenge",
        hints: ["Set clockwise moment = anticlockwise moment.", "6 × 0.40 = 4 × d, so 2.4 = 4d.", "d = 2.4 ÷ 4."],
        strategy: "Apply the principle of moments",
      },
      {
        id: "fs-mcq-q25",
        question: "A force–extension graph for a spring is a straight line up to point P, then curves. Which statement is correct?",
        options: [
          "P is the centre of gravity",
          "Beyond P the spring constant increases without limit",
          "P is the limit of proportionality; beyond it F is no longer proportional to x",
          "Before P the spring is permanently deformed",
        ],
        answerIndex: 2,
        explanation: "The straight part obeys Hooke's law; P is the limit of proportionality, beyond which the line curves because F is no longer proportional to x.",
        guideRef: "Force–extension graphs",
        difficulty: "challenge",
        hints: ["What is the named point where the straight line ends?", "Is the spring permanently deformed before that point?", "Which statement matches the meaning of the limit of proportionality?"],
        strategy: "Eliminate wrong statements",
      },
    ],
    qa: [
      {
        id: "fs-qa-q01",
        question: "State Hooke's law and give the equation, defining each symbol with its unit. (3 marks)",
        marks: 3,
        modelAnswer:
          "Hooke's law states that the force applied to a spring is directly proportional to its extension, provided the limit of proportionality is not exceeded. The equation is F = k x, where F is the force in newtons (N), x is the extension in metres (m) and k is the spring constant in newtons per metre (N/m).",
        markScheme: [
          "Force is (directly) proportional to extension | F ∝ x",
          "(up to the) limit of proportionality | provided not over-stretched",
          "F = k x with symbols defined: F force in N, x extension in m, k spring constant in N/m",
        ],
        commonError: "Stating F = k x without the condition 'up to the limit of proportionality', or muddling the unit of k (it is N/m, not N).",
        guideRef: "Hooke's law: F = k x",
        difficulty: "core",
        hints: ["What two quantities are proportional?", "When does the law stop holding?", "Give the equation and the unit of each symbol."],
      },
      {
        id: "fs-qa-q02",
        question: "A spring extends by 0.080 m when a force of 4.0 N is applied. Calculate (a) the spring constant, and (b) the force needed to extend it by 0.20 m. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) k = F ÷ x = 4.0 ÷ 0.080 = 50 N/m. (b) F = k x = 50 × 0.20 = 10 N.",
        markScheme: [
          "Use k = F ÷ x | rearrange F = k x",
          "k = 50 N/m",
          "Use F = k x with x = 0.20 m",
          "F = 10 N",
        ],
        commonError: "Forgetting to keep the extension in metres, or using the wrong value of x in part (b).",
        guideRef: "Hooke's law: F = k x",
        difficulty: "core",
        hints: ["Part (a): use k = F ÷ x.", "Substitute 4.0 ÷ 0.080.", "Part (b): put your k into F = k x with x = 0.20 m."],
        solutions: [
          {
            label: "Method: find k, then use it",
            steps: [
              "(a) k = F ÷ x = 4.0 ÷ 0.080 = 50 N/m.",
              "(b) Use the same spring, so k = 50 N/m.",
              "F = k x = 50 × 0.20 = 10 N.",
            ],
          },
        ],
      },
      {
        id: "fs-qa-q03",
        question: "Explain the difference between elastic deformation and plastic deformation, giving one example of each. (4 marks)",
        marks: 4,
        modelAnswer:
          "Elastic deformation is reversible: when the force is removed the object returns to its original shape and length, for example a spring stretched only a little. Plastic deformation is permanent: the object stays deformed even after the force is removed, for example a paperclip bent out of shape. Plastic deformation happens when the elastic limit is exceeded.",
        markScheme: [
          "Elastic = reversible / returns to original shape | returns to original length",
          "Suitable elastic example (e.g. gently stretched spring)",
          "Plastic = permanent / stays deformed after force removed",
          "Suitable plastic example (e.g. bent paperclip / over-stretched spring)",
        ],
        commonError: "Swapping the two terms — elastic is reversible, plastic is permanent.",
        guideRef: "Elastic and plastic deformation",
        difficulty: "core",
        hints: ["Does the object return to shape or not?", "Which one is reversible?", "Give a concrete example of each."],
      },
      {
        id: "fs-qa-q04",
        question: "Describe an experiment to investigate how the extension of a spring depends on the force applied, including how you would find the spring constant. (5 marks)",
        marks: 5,
        modelAnswer:
          "Hang the spring from a clamp stand and measure its natural (unstretched) length with a ruler at eye level. Add a known weight (e.g. 1 N), measure the new length and calculate the extension (new length − natural length). Add weights one at a time, recording the force and extension each time, without exceeding the elastic limit. Plot a graph of force (y-axis) against extension (x-axis): a straight line through the origin confirms Hooke's law. The gradient of the straight part equals the spring constant k.",
        markScheme: [
          "Hang spring from clamp stand and measure natural length",
          "Add known weights and measure new length / find extension each time",
          "Read ruler at eye level to avoid parallax | do not exceed elastic limit",
          "Plot force against extension",
          "Gradient of straight line = spring constant k",
        ],
        commonError: "Forgetting to measure the natural length first, so extension cannot be calculated; or finding k from a single reading instead of the graph gradient.",
        guideRef: "Investigating springs (practical)",
        difficulty: "core",
        hints: ["What must you measure before adding any weight?", "How do you get the extension from the lengths?", "What graph do you plot, and what does its gradient give?"],
      },
      {
        id: "fs-qa-q05",
        question: "A spring has a spring constant of 250 N/m and is extended by 0.060 m, staying within its limit of proportionality. Calculate the elastic potential energy stored. (3 marks)",
        marks: 3,
        modelAnswer:
          "E = ½ k x² = ½ × 250 × 0.060² = ½ × 250 × 0.0036 = 0.45 J.",
        markScheme: [
          "Use E = ½ k x²",
          "Square the extension: 0.060² = 0.0036 | correct substitution",
          "E = 0.45 J",
        ],
        commonError: "Forgetting to square the extension, or squaring after multiplying by k.",
        guideRef: "Energy stored in a stretched spring",
        difficulty: "core",
        hints: ["Use E = ½ k x².", "Square the extension first: 0.060² = 0.0036.", "½ × 250 × 0.0036 = ?"],
        solutions: [
          {
            label: "Method: substitute into E = ½ k x²",
            steps: [
              "Write E = ½ k x².",
              "Square the extension: 0.060² = 0.0036 m².",
              "E = ½ × 250 × 0.0036 = 0.45 J.",
            ],
          },
        ],
      },
      {
        id: "fs-qa-q06",
        question: "Define a moment and state the equation used to calculate it, including the units. (3 marks)",
        marks: 3,
        modelAnswer:
          "A moment is the turning effect of a force about a pivot. It is calculated using moment = force × perpendicular distance from the pivot (moment = F × d). Force is in newtons (N), distance in metres (m), and the moment is in newton metres (N m).",
        markScheme: [
          "Moment = turning effect of a force (about a pivot)",
          "moment = force × perpendicular distance | moment = F × d",
          "Unit is the newton metre (N m)",
        ],
        commonError: "Forgetting the distance must be the perpendicular distance, or giving the unit as N/m instead of N m.",
        guideRef: "Moments: the turning effect of a force",
        difficulty: "core",
        hints: ["A moment is the turning effect of what?", "Which distance do you use — total or perpendicular?", "State the unit."],
      },
      {
        id: "fs-qa-q07",
        question: "A spanner is used to undo a nut. A force of 30 N is applied at the end of the spanner, 0.25 m from the nut. (a) Calculate the moment. (b) Explain how using a longer spanner would help. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) moment = F × d = 30 × 0.25 = 7.5 N m. (b) A longer spanner increases the perpendicular distance d from the pivot (the nut). Since moment = F × d, a larger d gives a bigger moment for the same force — so the nut is easier to turn (or the same moment can be reached with a smaller force).",
        markScheme: [
          "Use moment = F × d",
          "moment = 7.5 N m",
          "Longer spanner increases the distance d (from the pivot)",
          "Bigger d → bigger moment for the same force | easier to turn",
        ],
        commonError: "Saying a longer spanner increases the force — it increases the distance, which increases the moment.",
        guideRef: "Moments: the turning effect of a force",
        difficulty: "core",
        hints: ["Part (a): moment = F × d.", "30 × 0.25 = ?", "Part (b): what does a longer spanner change in the formula?"],
        solutions: [
          {
            label: "Method: calculate, then reason from the formula",
            steps: [
              "(a) moment = F × d = 30 × 0.25 = 7.5 N m.",
              "(b) Longer spanner → larger perpendicular distance d.",
              "moment = F × d, so larger d → larger moment for the same force, making the nut easier to turn.",
            ],
          },
        ],
      },
      {
        id: "fs-qa-q08",
        question: "State the principle of moments and explain what two conditions must be met for an object to be in equilibrium. (4 marks)",
        marks: 4,
        modelAnswer:
          "The principle of moments states that, for an object in equilibrium, the total clockwise moments about a pivot equal the total anticlockwise moments about the same pivot. For full equilibrium two conditions are needed: (1) there is no resultant force — the total upward force equals the total downward force; and (2) there is no resultant turning effect — the clockwise moments equal the anticlockwise moments.",
        markScheme: [
          "Total clockwise moments = total anticlockwise moments",
          "about the same pivot / point",
          "No resultant force: up forces = down forces (balanced forces)",
          "No resultant moment: clockwise = anticlockwise (balanced moments)",
        ],
        commonError: "Giving only the moments condition and forgetting that the forces must also balance for equilibrium.",
        guideRef: "Principle of moments and equilibrium",
        difficulty: "core",
        hints: ["State the moments balance first.", "Forces must also balance — what does that mean?", "List both conditions clearly."],
      },
      {
        id: "fs-qa-q09",
        question: "A uniform see-saw is balanced on a central pivot. A child of weight 400 N sits 1.2 m to the left of the pivot. A second child of weight 600 N sits on the right. Calculate how far from the pivot the second child must sit to balance the see-saw. (4 marks)",
        marks: 4,
        modelAnswer:
          "Using the principle of moments, anticlockwise moment = clockwise moment. The 400 N child produces an anticlockwise moment of 400 × 1.2 = 480 N m. Set this equal to the 600 N child's clockwise moment: 600 × d = 480, so d = 480 ÷ 600 = 0.80 m. The second child must sit 0.80 m from the pivot.",
        markScheme: [
          "Apply principle of moments: clockwise = anticlockwise",
          "Left moment = 400 × 1.2 = 480 N m",
          "600 × d = 480 | d = 480 ÷ 600",
          "d = 0.80 m",
        ],
        commonError: "Adding the weights or distances instead of equating the two moments, or forgetting to divide by the second weight.",
        guideRef: "Principle of moments and equilibrium",
        difficulty: "challenge",
        hints: ["Set clockwise moment = anticlockwise moment.", "Left moment = 400 × 1.2 = 480 N m.", "Solve 600 × d = 480 for d."],
        solutions: [
          {
            label: "Method: principle of moments",
            steps: [
              "Anticlockwise moment (left child) = 400 × 1.2 = 480 N m.",
              "For balance: clockwise moment = anticlockwise moment, so 600 × d = 480.",
              "d = 480 ÷ 600 = 0.80 m from the pivot.",
            ],
          },
        ],
      },
      {
        id: "fs-qa-q10",
        question: "Explain, in terms of centre of gravity and base, why a racing car is designed to be low and wide, while a tall double-decker bus tips over more easily. (4 marks)",
        marks: 4,
        modelAnswer:
          "A racing car has a low centre of gravity and a wide base. This means the line of action of its weight stays inside its base even when it tilts a lot, so the weight produces a moment that turns it back upright, making it very stable. A double-decker bus is tall and narrower, so it has a high centre of gravity. When it tilts, its centre of gravity (and the line of action of its weight) passes outside its base after only a small tilt, creating a moment that tips it over — so it is less stable.",
        markScheme: [
          "Racing car: low centre of gravity and wide base",
          "Weight's line of action stays inside the base when tilted → returns upright / stable",
          "Bus: high centre of gravity (and narrower base)",
          "Centre of gravity passes outside base after small tilt → topples / less stable",
        ],
        commonError: "Saying the bus is heavier so it tips — it is the height of the centre of gravity and width of base that matter, not the weight.",
        guideRef: "Centre of gravity and stability",
        difficulty: "challenge",
        hints: ["What two design features make something stable?", "Where must the weight's line of action stay to stop toppling?", "Compare how far each can tilt before that line leaves the base."],
      },
      {
        id: "fs-qa-q11",
        question: "A 0.50 m uniform rod is pivoted at its centre. A 5.0 N weight hangs 0.20 m to the left of the pivot, and a 3.0 N weight hangs 0.10 m to the right. (a) Show that the rod is not balanced. (b) State, with a calculation, what additional moment is needed and on which side to balance it. (5 marks)",
        marks: 5,
        modelAnswer:
          "(a) Anticlockwise moment (left) = 5.0 × 0.20 = 1.0 N m. Clockwise moment (right) = 3.0 × 0.10 = 0.30 N m. These are not equal (1.0 N m ≠ 0.30 N m), so the rod is not balanced — it turns anticlockwise. (b) The clockwise side is short by 1.0 − 0.30 = 0.70 N m. An extra clockwise moment of 0.70 N m is needed on the right-hand side to balance the rod. For example, a 7.0 N weight hung 0.10 m from the pivot (7.0 × 0.10 = 0.70 N m) would do it.",
        markScheme: [
          "Left moment = 5.0 × 0.20 = 1.0 N m",
          "Right moment = 3.0 × 0.10 = 0.30 N m",
          "Not equal → not balanced (turns anticlockwise)",
          "Extra moment needed = 1.0 − 0.30 = 0.70 N m",
          "Extra moment must be clockwise / on the right-hand side",
        ],
        commonError: "Comparing forces or distances alone instead of the moments (force × distance) on each side.",
        guideRef: "Principle of moments and equilibrium",
        difficulty: "challenge",
        hints: ["Work out each moment with F × d.", "Compare the two moments — are they equal?", "The difference is the extra moment needed, on the lighter side."],
        solutions: [
          {
            label: "Method: compare moments, then find the shortfall",
            steps: [
              "Left (anticlockwise) moment = 5.0 × 0.20 = 1.0 N m.",
              "Right (clockwise) moment = 3.0 × 0.10 = 0.30 N m.",
              "1.0 N m ≠ 0.30 N m, so the rod turns anticlockwise — not balanced.",
              "Extra clockwise moment needed = 1.0 − 0.30 = 0.70 N m on the right.",
              "Check: e.g. 7.0 N at 0.10 m gives 7.0 × 0.10 = 0.70 N m, restoring balance.",
            ],
          },
        ],
      },
      {
        id: "fs-qa-q12",
        question: "A spring obeys Hooke's law up to an extension of 0.10 m, where the force is 8.0 N. (a) Calculate the spring constant. (b) Calculate the elastic potential energy stored at this extension. (c) State what the area under the force–extension graph represents. (5 marks)",
        marks: 5,
        modelAnswer:
          "(a) k = F ÷ x = 8.0 ÷ 0.10 = 80 N/m. (b) E = ½ k x² = ½ × 80 × 0.10² = ½ × 80 × 0.01 = 0.40 J. (c) The area under the force–extension graph represents the work done in stretching the spring, which equals the elastic potential energy stored.",
        markScheme: [
          "k = F ÷ x = 8.0 ÷ 0.10 = 80 N/m",
          "Use E = ½ k x²",
          "E = ½ × 80 × 0.01 = 0.40 J",
          "Area under graph = work done / energy stored",
          "Identifies it as the elastic potential energy",
        ],
        commonError: "Mixing up the energy formula with the moment formula, or not squaring the extension in part (b).",
        guideRef: "Energy stored in a stretched spring",
        difficulty: "challenge",
        hints: ["Part (a): k = F ÷ x.", "Part (b): E = ½ k x², remember to square x.", "Part (c): area under an F–x line equals which quantity?"],
        solutions: [
          {
            label: "Method: work through (a), (b), (c)",
            steps: [
              "(a) k = F ÷ x = 8.0 ÷ 0.10 = 80 N/m.",
              "(b) E = ½ k x² = ½ × 80 × 0.10² = ½ × 80 × 0.01 = 0.40 J.",
              "(c) Area under the F–x line = work done stretching the spring = elastic potential energy stored (0.40 J, matching (b)).",
            ],
          },
        ],
      },
    ],
  },
  // questionBank omitted — auto-assembled from the quiz pools by lib/content.ts.
};
