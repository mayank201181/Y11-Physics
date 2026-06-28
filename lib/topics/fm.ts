import type { Topic } from "../types";

// Forces and Motion (Edexcel IGCSE Physics 4PH1, section 1 / topic FM).
// Calculation-heavy topic. Throughout this topic we use g = 10 N/kg unless a
// question explicitly states otherwise. This is stated wherever g is used.

export const fm: Topic = {
  id: "fm",
  code: "FM",
  number: 3,
  title: "Forces and Motion",
  subject: "Physics",
  icon: "🚀",
  color: "#6366f1",
  intro:
    "Why does a heavier push not always mean faster motion? Why does a car need much further to stop on a wet road? Forces and motion connects the way things move (speed, velocity, acceleration) to the forces that cause that motion. You'll master distance–time and velocity–time graphs, the suvat equations, Newton's three laws, F = ma, weight, friction and terminal velocity, then use momentum to explain collisions and car safety. Note: this topic uses g = 10 N/kg unless a question tells you otherwise (the Moon uses g ≈ 1.6 N/kg where stated).",
  guide: [
    {
      heading: "Scalars, vectors, speed and distance–time graphs",
      discovery: {
        problem:
          "A runner jogs 400 m around a track and finishes exactly where she started. Her friend says she travelled 400 m; her coach says her displacement is zero. Who is right — and how can both be true?",
        idea:
          "Both are right because they are measuring different things. Distance (how far you travelled) ignores direction; displacement (how far you ended up from the start, and in which direction) includes direction. Quantities that need a direction are vectors; those that don't are scalars.",
      },
      body:
        "A **scalar** has size (magnitude) only. A **vector** has size *and* direction.\n\n- **Scalars:** distance, speed, mass, time, energy, temperature.\n- **Vectors:** displacement, velocity, acceleration, force, momentum, weight.\n\n**Distance vs displacement:** distance is the total length of the path travelled (a scalar). Displacement is the straight-line distance from start to finish *in a stated direction* (a vector). Walk 3 m east then 3 m west and your distance is 6 m but your displacement is 0 m.\n\n**Speed vs velocity:** speed is how fast you move (a scalar). Velocity is speed in a stated direction (a vector). Two cars at 30 m/s in opposite directions have the same speed but different (in fact opposite) velocities.\n\n**Average speed:**\n\n  **average speed = distance ÷ time**   (v = s ÷ t)\n\nThe SI unit is metres per second (m/s). To rearrange: distance = speed × time, and time = distance ÷ speed.\n\n**Typical everyday speeds** (useful for sanity-checking answers):\n\n- Walking ≈ 1.5 m/s\n- Running ≈ 3 m/s (a fast sprinter ≈ 10 m/s)\n- Cycling ≈ 6 m/s\n- Car (town) ≈ 13 m/s (about 30 mph); car (motorway) ≈ 30 m/s (about 70 mph)\n- Sound in air ≈ 340 m/s\n\nA **distance–time graph** plots distance on the y-axis against time on the x-axis. The **gradient (slope) equals the speed**:\n\n- A flat (horizontal) line means the object is stationary.\n- A straight sloping line means constant speed.\n- A steeper line means a faster speed.\n- A curve that gets steeper means the object is **accelerating** (speeding up); a curve that flattens means it is decelerating.",
      diagrams: [
        {
          caption: "Distance–time graph: flat = stationary, straight slope = constant speed, curve = accelerating.",
          svg:
            '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Distance time graph with a constant speed line, a stationary flat section and an accelerating curve">\n<line x1="40" y1="150" x2="240" y2="150" stroke="#475569" stroke-width="2"/>\n<line x1="40" y1="150" x2="40" y2="20" stroke="#475569" stroke-width="2"/>\n<text x="140" y="172" font-size="11" text-anchor="middle" fill="#334155">time</text>\n<text x="14" y="90" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 14 90)">distance</text>\n<line x1="40" y1="120" x2="110" y2="60" stroke="#6366f1" stroke-width="3"/>\n<line x1="110" y1="60" x2="170" y2="60" stroke="#0ea5e9" stroke-width="3"/>\n<path d="M170 60 Q200 60 230 25" stroke="#ef4444" stroke-width="3" fill="none"/>\n<text x="44" y="100" font-size="9" fill="#6366f1">constant speed</text>\n<text x="116" y="52" font-size="9" fill="#0ea5e9">stationary</text>\n<text x="170" y="20" font-size="9" fill="#ef4444">speeding up</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Scalar = magnitude only; vector = magnitude and direction.",
        "Distance (scalar) is path length; displacement (vector) is start-to-finish in a direction.",
        "Speed (scalar) vs velocity (speed in a direction, a vector).",
        "average speed = distance ÷ time (m/s); rearrange to distance = speed × time.",
        "Distance–time graph: gradient = speed; flat = stopped; steeper = faster; curve = changing speed.",
        "Know typical speeds: walking ≈ 1.5 m/s, running ≈ 3 m/s, cycling ≈ 6 m/s, car ≈ 13–30 m/s.",
      ],
      whyItWorks:
        "Gradient is 'rise over run' = change in distance ÷ change in time, which is exactly the definition of speed. So the slope literally measures speed. A curving line means the gradient (speed) is changing — that is acceleration.",
      formulae: ["average speed = distance ÷ time", "v = s ÷ t", "s = v × t", "t = s ÷ v"],
      strategies: ["Read the axes first", "Decide scalar or vector before calculating", "Sanity-check speeds against everyday values"],
    },
    {
      heading: "Velocity, acceleration and velocity–time graphs",
      discovery: {
        problem:
          "A car speeds up from rest to 30 m/s in 10 s. A motorbike speeds up from 20 m/s to 30 m/s in 2 s. Both end at 30 m/s — but which one was changing its motion more aggressively?",
        idea:
          "Final speed alone doesn't tell you how hard the engine was working. What matters is how quickly velocity changed — that rate of change is acceleration. The bike gained 10 m/s in just 2 s (5 m/s²) while the car gained 30 m/s in 10 s (3 m/s²), so the bike accelerated harder.",
      },
      body:
        "**Velocity** is speed in a stated direction (a vector).\n\n**Acceleration** is the rate of change of velocity:\n\n  **a = (v − u) ÷ t**\n\nwhere u = initial velocity (m/s), v = final velocity (m/s), t = time (s). The unit is metres per second squared (m/s²). Rearrange: v = u + at, or t = (v − u) ÷ a.\n\nA positive acceleration means speeding up; a **negative acceleration (deceleration)** means slowing down — the value comes out negative because (v − u) is negative.\n\nA **velocity–time graph** plots velocity (y) against time (x). It carries two pieces of information:\n\n- The **gradient = acceleration** (a flat line = constant velocity = zero acceleration; a line sloping down = deceleration).\n- The **area under the line = distance travelled**.\n\nTo find the area, split the shape into rectangles and triangles (area of a triangle = ½ × base × height; area of a rectangle = base × height).",
      diagrams: [
        {
          caption: "Velocity–time graph: gradient gives acceleration, shaded area gives distance.",
          svg:
            '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velocity time graph with a rising line, a flat line and a falling line, with the area under it shaded">\n<line x1="40" y1="150" x2="240" y2="150" stroke="#475569" stroke-width="2"/>\n<line x1="40" y1="150" x2="40" y2="20" stroke="#475569" stroke-width="2"/>\n<text x="140" y="172" font-size="11" text-anchor="middle" fill="#334155">time</text>\n<text x="14" y="90" font-size="11" text-anchor="middle" fill="#334155" transform="rotate(-90 14 90)">velocity</text>\n<polygon points="40,150 110,60 180,60 220,150" fill="#c7d2fe" stroke="none"/>\n<line x1="40" y1="150" x2="110" y2="60" stroke="#4f46e5" stroke-width="3"/>\n<line x1="110" y1="60" x2="180" y2="60" stroke="#4f46e5" stroke-width="3"/>\n<line x1="180" y1="60" x2="220" y2="150" stroke="#4f46e5" stroke-width="3"/>\n<text x="50" y="100" font-size="9" fill="#4338ca">accelerating</text>\n<text x="120" y="52" font-size="9" fill="#4338ca">steady</text>\n<text x="180" y="110" font-size="9" fill="#4338ca">decelerating</text>\n<text x="130" y="135" font-size="9" text-anchor="middle" fill="#1e293b">area = distance</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Velocity = speed in a given direction (vector).",
        "Acceleration a = (v − u) ÷ t, unit m/s².",
        "On a velocity–time graph: gradient = acceleration.",
        "On a velocity–time graph: area under the line = distance travelled.",
        "Deceleration shows as a negative gradient (line sloping down) and a negative value of a.",
      ],
      whyItWorks:
        "Gradient = change in velocity ÷ change in time = acceleration. Area is velocity × time, and (m/s) × s = m, which is a distance — so the area is the distance covered.",
      formulae: ["a = (v − u) ÷ t", "acceleration = change in velocity ÷ time", "distance = area under a velocity–time graph"],
      strategies: ["Identify u, v, t before substituting", "Split the area into triangles and rectangles", "Watch the sign of (v − u) for deceleration"],
    },
    {
      heading: "The equations of motion (suvat)",
      discovery: {
        problem:
          "A ball is dropped from a cliff and hits the sea 3 s later. You want its speed at impact and how far it fell — but you have no velocity–time graph and a stopwatch only gives time. Can you still find both?",
        idea:
          "Yes. When acceleration is constant, the five quantities s, u, v, a, t are tied together by two equations. Pick the equation that contains the three you know and the one you want — no graph needed.",
      },
      body:
        "When acceleration is **constant**, use the equations of motion. The five symbols are:\n\n- **s** = distance (m)\n- **u** = initial velocity (m/s)\n- **v** = final velocity (m/s)\n- **a** = acceleration (m/s²)\n- **t** = time (s)\n\nThe two Edexcel 4PH1 equations are:\n\n  **v = u + a t**   (contains no s)\n  **v² = u² + 2 a s**   (contains no t)\n\nRearrangements you may need:\n\n- From v = u + at:  a = (v − u) ÷ t  and  t = (v − u) ÷ a\n- From v² = u² + 2as:  s = (v² − u²) ÷ (2a)  and  a = (v² − u²) ÷ (2s)\n\nMethod:\n\n1. Write down the quantities you know and the one you want.\n2. Choose the equation that links exactly those (avoid the symbol you neither know nor want).\n3. Rearrange, substitute, then evaluate with units.\n\nFor a dropped object near Earth, a = g = 10 m/s² downward (we take g = 10 N/kg in this topic) and u = 0. For an object thrown upward, a = −10 m/s² (gravity opposes the motion) and at the highest point v = 0.",
      keyPoints: [
        "suvat equations only apply when acceleration is constant.",
        "v = u + at links v, u, a, t (no s).",
        "v² = u² + 2as links v, u, a, s (no t).",
        "For a dropped object, u = 0 and a = g = 10 m/s² (g = 10 N/kg here).",
        "List the five symbols and mark what you know — pick the matching equation.",
      ],
      whyItWorks:
        "v = u + at is just acceleration rearranged (a = (v−u)/t). v² = u² + 2as comes from combining v = u + at with the area-under-graph distance, eliminating time — useful exactly when t is unknown or unwanted.",
      formulae: ["v = u + a t", "v² = u² + 2 a s", "s = (v² − u²) ÷ (2a)"],
      strategies: ["List suvat and tick what you know", "Choose the equation with no missing-and-unwanted symbol", "For falls, set u = 0 and a = 10 m/s²"],
    },
    {
      heading: "Forces, free-body diagrams and Newton's laws",
      discovery: {
        problem:
          "Push a shopping trolley and it speeds up. Push twice as hard and it speeds up faster. Load it with bricks and the same push barely moves it. There seem to be three things in play — force, mass and acceleration. How do they connect?",
        idea:
          "Acceleration grows with the force you apply and shrinks as the mass grows. Newton tied them in one equation: F = m a. Bigger force → more acceleration; bigger mass → less acceleration for the same force.",
      },
      body:
        "A **force** is a push or a pull. Force is a **vector** (it has size and direction) and is measured in **newtons (N)**.\n\n**Contact forces** act only when objects touch: friction, air resistance (drag), tension (in ropes/strings), the normal (reaction) force from a surface, upthrust (from a fluid), and applied pushes/pulls or thrust.\n\n**Non-contact forces** act at a distance, without touching: gravitational force (weight), magnetic force, and electrostatic force.\n\nA **free-body force diagram** shows a single object as a dot or box, with an arrow for *each* force acting on it. The arrow length shows the size and the arrow direction shows the direction.\n\nThe **resultant (net) force** is the single force that has the same effect as all the forces combined. Forces along the same line simply add (same direction) or subtract (opposite directions).\n\n**Newton's First Law:** an object stays at rest, or moves at a *constant velocity*, unless a resultant force acts on it. The tendency of an object to keep its state of motion is called **inertia**. Balanced forces (zero resultant) → no change in velocity.\n\n**Newton's Second Law:** a resultant force causes acceleration in the direction of the force:\n\n  **F = m a**\n\nwhere F is the resultant force (N), m is mass (kg), a is acceleration (m/s²). 1 newton is the force that gives a 1 kg mass an acceleration of 1 m/s². So **acceleration is directly proportional to the resultant force** and **inversely proportional to the mass**.\n\n**Newton's Third Law:** for every action there is an equal and opposite reaction. Forces come in pairs that are equal in size, opposite in direction, of the same type, and act on *two different objects* (e.g. a rocket pushes gas down, the gas pushes the rocket up; you push on the ground, the ground pushes back on you).",
      diagrams: [
        {
          caption: "Free-body diagram of a car: thrust forward, drag/friction back, weight down, normal reaction up.",
          svg:
            '<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Free body force diagram of a car showing four forces as arrows from a central box">\n<rect x="95" y="75" width="50" height="30" rx="4" fill="#e0e7ff" stroke="#4f46e5"/>\n<line x1="145" y1="90" x2="215" y2="90" stroke="#16a34a" stroke-width="3" marker-end="url(#ah)"/>\n<line x1="95" y1="90" x2="25" y2="90" stroke="#ef4444" stroke-width="3" marker-end="url(#ah)"/>\n<line x1="120" y1="75" x2="120" y2="20" stroke="#0ea5e9" stroke-width="3" marker-end="url(#ah)"/>\n<line x1="120" y1="105" x2="120" y2="160" stroke="#7c3aed" stroke-width="3" marker-end="url(#ah)"/>\n<defs><marker id="ah" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0 L7 4 L0 8 z" fill="#1e293b"/></marker></defs>\n<text x="180" y="84" font-size="10" fill="#16a34a">thrust</text>\n<text x="40" y="84" font-size="10" fill="#ef4444">drag</text>\n<text x="126" y="30" font-size="10" fill="#0ea5e9">normal</text>\n<text x="126" y="150" font-size="10" fill="#7c3aed">weight</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Force is a vector, measured in newtons (N).",
        "Contact forces: friction, drag, tension, normal/reaction, upthrust, applied push/thrust.",
        "Non-contact forces: gravity (weight), magnetic, electrostatic.",
        "Free-body diagram: one object, one arrow per force.",
        "1st law: balanced forces → velocity unchanged (rest or constant velocity); inertia.",
        "2nd law: resultant force F = m × a (N = kg × m/s²); a ∝ F and a ∝ 1/m.",
        "3rd law: equal and opposite force pairs on two different objects.",
        "Find the resultant force before using F = ma.",
      ],
      whyItWorks:
        "F = ma says the same force produces less acceleration on a larger mass, matching experience: a loaded trolley is harder to speed up. The third law follows because forces are interactions — you cannot push something without it pushing back on you.",
      formulae: ["F = m a", "resultant force = mass × acceleration", "a = F ÷ m"],
      strategies: ["Draw a free-body diagram", "Combine forces to a single resultant first", "Classify each force as contact or non-contact"],
    },
    {
      heading: "Weight, friction, air resistance and terminal velocity",
      discovery: {
        problem:
          "Drop a feather and a hammer together on Earth and the hammer wins easily — yet astronauts on the airless Moon dropped them and they landed together. If gravity pulls the hammer harder, why don't they fall together on the Moon too?",
        idea:
          "Gravity gives every object the same acceleration; the difference on Earth is air resistance, which slows the light, spread-out feather far more than the dense hammer. Remove the air (Moon) and both fall identically. Weight and air resistance are separate forces.",
      },
      body:
        "**Weight** is the force of gravity on a mass:\n\n  **W = m g**\n\nwhere g is the gravitational field strength (N/kg). On Earth we take **g = 10 N/kg** in this topic (some exam questions use 9.8 N/kg — always check). On the Moon g ≈ 1.6 N/kg. Weight is a force in newtons; rearrange to m = W ÷ g or g = W ÷ m.\n\n**Mass vs weight:** mass is the amount of matter (kg) and never changes. Weight is the gravitational force on that mass (N) and changes if g changes (e.g. on the Moon). Mass is a scalar; weight is a vector (it points toward the centre of the planet).\n\n**Friction** is a force that opposes the relative motion of two surfaces in contact. **Air resistance (drag)** is friction with the air; it always opposes motion and **increases as an object moves faster** (and with a larger surface area).\n\n**Terminal velocity:** when a falling object speeds up, air resistance grows. Eventually air resistance equals weight, the resultant force is zero, acceleration is zero (Newton's 1st law), and the object falls at a steady maximum speed — its **terminal velocity**.\n\nStages of a skydiver's fall:\n\n1. Just after jumping: weight > air resistance → large resultant force down → accelerates.\n2. As speed rises: air resistance increases → resultant force shrinks → acceleration decreases.\n3. Air resistance = weight → resultant force zero → constant terminal velocity.\n4. Parachute opens: air resistance suddenly > weight → resultant force up → decelerates.\n5. Slower speed reduces air resistance until it again equals weight → a new, lower terminal velocity for a safe landing.",
      diagrams: [
        {
          caption: "Skydiver at terminal velocity: weight down balanced by air resistance up, resultant force zero.",
          svg:
            '<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Skydiver with equal weight downwards and air resistance upwards arrows, balanced">\n<circle cx="100" cy="90" r="14" fill="#e0e7ff" stroke="#4f46e5"/>\n<line x1="100" y1="104" x2="100" y2="165" stroke="#7c3aed" stroke-width="4" marker-end="url(#d2)"/>\n<line x1="100" y1="76" x2="100" y2="15" stroke="#ef4444" stroke-width="4" marker-end="url(#d2)"/>\n<defs><marker id="d2" markerWidth="10" markerHeight="10" refX="5" refY="8" orient="auto"><path d="M0 0 L10 0 L5 8 z" fill="#1e293b"/></marker></defs>\n<text x="108" y="150" font-size="11" fill="#7c3aed">weight</text>\n<text x="108" y="40" font-size="11" fill="#ef4444">air resistance</text>\n<text x="100" y="178" font-size="9" text-anchor="middle" fill="#334155">balanced: steady speed</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Weight W = m g; g = 10 N/kg in this topic (state which g you use); Moon g ≈ 1.6 N/kg.",
        "Mass is constant matter (kg, scalar); weight is a force (N, vector) and changes with g.",
        "Friction opposes motion between surfaces; air resistance (drag) increases with speed.",
        "Terminal velocity: air resistance = weight → resultant force zero → constant speed.",
        "Opening a parachute increases air resistance → decelerates → new lower terminal velocity.",
      ],
      whyItWorks:
        "Free-fall acceleration is g = W/m = mg/m, which is independent of mass — so without air, all objects fall together. With air, drag depends on size and speed, breaking the tie. Terminal velocity is just Newton's 1st law: balanced forces mean constant velocity.",
      thinkDeeper:
        "A heavier skydiver reaches a higher terminal velocity than a lighter one of the same shape. Why? (More weight needs more air resistance to balance it, and that only builds up at a higher speed.)",
      formulae: ["W = m g", "g = 10 N/kg (Earth, this topic); g ≈ 1.6 N/kg (Moon)", "at terminal velocity: air resistance = weight"],
      strategies: ["Separate weight from air resistance", "Use 'resultant force = 0' for steady speed", "Keep mass (kg) and weight (N) distinct"],
    },
    {
      heading: "Stopping distance and road safety",
      discovery: {
        problem:
          "Two identical cars travel at the same speed; one driver has been awake 20 hours, the other is fresh. A child runs out. Both brakes work equally well — yet one car stops metres sooner. The braking was the same, so where did the extra distance come from?",
        idea:
          "Stopping has two stages: reacting (before the brakes touch) and braking. The tired driver reacts more slowly, so the car travels further before braking even begins. Stopping distance = thinking distance + braking distance, and each part has its own causes.",
      },
      body:
        "The **stopping distance** of a vehicle is the total distance travelled from the moment a hazard appears to the moment the vehicle stops:\n\n  **stopping distance = thinking distance + braking distance**\n\n- **Thinking distance** is how far the car travels during the driver's *reaction time* (before the brakes are applied). It increases with **speed**, and with anything that lengthens reaction time: **tiredness, alcohol or drugs, distractions** (e.g. using a phone).\n- **Braking distance** is how far the car travels *while the brakes are applied*. It increases sharply with **speed** (roughly with speed squared) and with anything that reduces grip or braking effectiveness: **wet or icy roads, worn or smooth tyres, worn brakes,** and a **greater mass/load**.\n\nDouble the speed → thinking distance doubles (it is speed × reaction time), but braking distance roughly **quadruples** (×4), so the total stopping distance rises steeply with speed.",
      diagrams: [
        {
          caption: "Stopping distance = thinking distance + braking distance.",
          svg:
            '<svg viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A bar split into a thinking distance section and a longer braking distance section">\n<rect x="20" y="35" width="80" height="24" fill="#a5b4fc" stroke="#4f46e5"/>\n<rect x="100" y="35" width="160" height="24" fill="#fca5a5" stroke="#dc2626"/>\n<text x="60" y="28" font-size="10" text-anchor="middle" fill="#3730a3">thinking</text>\n<text x="180" y="28" font-size="10" text-anchor="middle" fill="#991b1b">braking</text>\n<text x="140" y="78" font-size="10" text-anchor="middle" fill="#334155">total = stopping distance</text>\n<line x1="20" y1="66" x2="260" y2="66" stroke="#475569" stroke-width="1" marker-end="url(#s2)"/>\n<defs><marker id="s2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#475569"/></marker></defs>\n</svg>',
        },
      ],
      keyPoints: [
        "Stopping distance = thinking distance + braking distance.",
        "Thinking distance increases with speed, tiredness, alcohol/drugs, distraction.",
        "Braking distance increases with speed (≈ speed²), wet/icy roads, worn tyres/brakes, heavier load.",
        "Doubling the speed doubles thinking distance but roughly quadruples braking distance.",
      ],
      whyItWorks:
        "Braking must remove the car's kinetic energy (½mv²), which depends on speed squared, so doubling the speed needs about four times the braking distance. Thinking distance is just speed × reaction time, so it scales directly with speed.",
      formulae: ["stopping distance = thinking distance + braking distance", "thinking distance = speed × reaction time"],
      strategies: ["Split stopping distance into its two parts", "Match each factor to thinking or braking"],
    },
    {
      heading: "Momentum, conservation and vehicle safety",
      discovery: {
        problem:
          "A 1 kg trolley at 4 m/s hits and sticks to a stationary 1 kg trolley. They move off together. Common sense says they can't keep going at 4 m/s — so how fast do the joined trolleys move, and what rule decides it?",
        idea:
          "The total 'quantity of motion' (momentum = mass × velocity) is conserved in a collision when no external force acts. Before: 1×4 = 4 kg m/s. After, 2 kg of mass shares that same 4 kg m/s, so they move at 2 m/s. Conservation of momentum predicts the result.",
      },
      body:
        "**Momentum** measures the quantity of motion:\n\n  **p = m v**\n\nwhere p is momentum (kg m/s), m is mass (kg), v is velocity (m/s). Momentum is a **vector** — direction matters, so velocities in opposite directions take opposite signs.\n\n**Conservation of momentum:** in a closed system with no external resultant force, total momentum before = total momentum after:\n\n  m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂\n\nThis predicts the outcome of **collisions** (objects coming together) and **explosions/recoil** (objects pushing apart). In an explosion the total momentum is zero before and after: e.g. a gun and bullet start at rest (zero momentum), so after firing the forward momentum of the bullet equals the backward momentum of the recoiling gun.\n\n**Force and momentum:** a resultant force equals the *rate of change of momentum*:\n\n  **F = Δp ÷ t = (m v − m u) ÷ t**\n\nThis is the more general form of Newton's 2nd law (F = ma is the special case for constant mass, since (mv − mu)/t = m(v − u)/t = ma).\n\n**Vehicle safety features** — crumple zones, seat belts and airbags — all work by **increasing the time** over which a passenger's momentum is reduced to zero in a crash:\n\n- **Crumple zones** at the front/rear collapse and fold, extending the time the car takes to stop.\n- **Seat belts** stretch slightly, so the wearer decelerates over a longer time (and stops them hitting the windscreen).\n- **Airbags** inflate and squash, increasing the contact time as the head/chest slows.\n\nSince F = Δp ÷ t, the same momentum change spread over a **larger time t** means a **smaller force** on the body, reducing injury.",
      diagrams: [
        {
          caption: "Conservation of momentum: a moving trolley collides and they move off together.",
          svg:
            '<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Before and after a collision of two trolleys showing momentum is conserved">\n<text x="10" y="20" font-size="11" fill="#334155">Before</text>\n<rect x="30" y="30" width="34" height="22" fill="#c7d2fe" stroke="#4f46e5"/>\n<line x1="66" y1="41" x2="100" y2="41" stroke="#16a34a" stroke-width="3" marker-end="url(#m2)"/>\n<rect x="150" y="30" width="34" height="22" fill="#e2e8f0" stroke="#64748b"/>\n<text x="47" y="68" font-size="9" text-anchor="middle" fill="#334155">u = 4 m/s</text>\n<text x="167" y="68" font-size="9" text-anchor="middle" fill="#334155">at rest</text>\n<text x="10" y="92" font-size="11" fill="#334155">After</text>\n<rect x="120" y="92" width="34" height="20" fill="#c7d2fe" stroke="#4f46e5"/>\n<rect x="156" y="92" width="34" height="20" fill="#e2e8f0" stroke="#64748b"/>\n<line x1="192" y1="102" x2="220" y2="102" stroke="#16a34a" stroke-width="3" marker-end="url(#m2)"/>\n<text x="173" y="86" font-size="9" text-anchor="middle" fill="#334155">v = 2 m/s</text>\n<defs><marker id="m2" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0 L7 4 L0 8 z" fill="#16a34a"/></marker></defs>\n</svg>',
        },
      ],
      keyPoints: [
        "Momentum p = m v (kg m/s); it is a vector — mind the signs.",
        "Conservation: total momentum before = total momentum after (no external force).",
        "Works for collisions AND explosions/recoil (total momentum may be zero).",
        "Force = rate of change of momentum, F = Δp ÷ t = (mv − mu) ÷ t.",
        "Crumple zones, seat belts and airbags increase collision time t → reduce force → reduce injury.",
      ],
      whyItWorks:
        "Newton's 3rd law makes the forces in a collision equal and opposite, and they act for the same time, so the momentum gained by one object equals that lost by the other — total momentum is unchanged. Safety features exploit F = Δp/t: the same momentum change spread over more time means a gentler force.",
      formulae: ["p = m v", "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂", "F = Δp ÷ t = (mv − mu) ÷ t"],
      strategies: ["Take one direction as positive", "Total momentum before = total momentum after", "For explosions, set total momentum to zero"],
    },
    {
      heading: "Investigating acceleration (required practical)",
      discovery: {
        problem:
          "You want to prove that a bigger force gives a bigger acceleration, and that a heavier trolley accelerates less. But acceleration is hard to measure directly with a stopwatch. How can you measure it accurately in the lab?",
        idea:
          "Measure velocity at two points and time between them, then use a = (v − u) ÷ t — or measure velocity at intervals with light gates or ticker tape and find the gradient of a velocity–time graph. Repeat while changing one variable at a time.",
      },
      body:
        "A common 4PH1 practical investigates how the acceleration of a trolley depends on the **resultant force** and on its **mass**.\n\n**Using light gates and a data logger:**\n\n1. Set up a trolley on a track. Attach a card of known length to the trolley.\n2. As the card passes through each light gate, the data logger times how long the beam is broken; velocity = card length ÷ time, so the logger calculates the velocity at each gate.\n3. With two gates a known distance apart, the logger can find the acceleration from a = (v − u) ÷ t (or v² = u² + 2as).\n4. Pull the trolley with a known force (e.g. masses hanging over a pulley) and record the acceleration. Change the force and repeat.\n5. Plot acceleration against force: a straight line through the origin shows a ∝ F (Newton's 2nd law).\n\n**Using ticker tape (timer):**\n\n1. A ticker-timer makes dots on a tape pulled by the trolley, one dot every 0.02 s (50 dots per second from the mains).\n2. Dots close together = slow; dots spreading apart = speeding up (accelerating).\n3. Cut the tape into strips of (say) 5 dot-spaces. Each strip's length ÷ time gives the average velocity for that interval; sticking the strips side by side makes a velocity–time graph whose **gradient = acceleration**.\n\n**Fair test:** to investigate force, keep the **total mass constant** (move masses from the trolley to the hanger so the mass being accelerated stays the same) and change only the pulling force. To investigate mass, keep the **force constant** and change the trolley's mass.\n\n**Reducing errors:** compensate for friction by tilting the track slightly until the trolley moves at constant speed when given a gentle push; light gates remove human reaction-time error compared with a stopwatch; repeat readings and average.",
      diagrams: [
        {
          caption: "Trolley with a card passing through two light gates connected to a data logger.",
          svg:
            '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A trolley with a card moving along a track through two light gates that connect to a data logger">\n<line x1="20" y1="95" x2="280" y2="95" stroke="#475569" stroke-width="2"/>\n<rect x="60" y="72" width="44" height="20" rx="3" fill="#e0e7ff" stroke="#4f46e5"/>\n<rect x="74" y="52" width="4" height="20" fill="#4f46e5"/>\n<text x="82" y="48" font-size="8" fill="#4f46e5">card</text>\n<line x1="150" y1="40" x2="150" y2="92" stroke="#0ea5e9" stroke-width="3"/>\n<line x1="210" y1="40" x2="210" y2="92" stroke="#0ea5e9" stroke-width="3"/>\n<text x="150" y="34" font-size="8" text-anchor="middle" fill="#0ea5e9">gate 1</text>\n<text x="210" y="34" font-size="8" text-anchor="middle" fill="#0ea5e9">gate 2</text>\n<line x1="104" y1="82" x2="130" y2="82" stroke="#16a34a" stroke-width="3" marker-end="url(#lg)"/>\n<rect x="225" y="100" width="50" height="22" rx="3" fill="#fef3c7" stroke="#d97706"/>\n<text x="250" y="115" font-size="8" text-anchor="middle" fill="#92400e">logger</text>\n<defs><marker id="lg" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0 L7 4 L0 8 z" fill="#16a34a"/></marker></defs>\n</svg>',
        },
      ],
      keyPoints: [
        "Acceleration is found from a = (v − u) ÷ t, or from the gradient of a velocity–time graph.",
        "Light gates measure velocity accurately (card length ÷ time) and avoid reaction-time error.",
        "Ticker tape: dots every 0.02 s; spreading dots = accelerating; strips build a velocity–time graph.",
        "To test a ∝ F, keep total mass constant and vary the force; to test a ∝ 1/m, keep force constant and vary mass.",
        "Compensate for friction by tilting the track; repeat and average to reduce error.",
      ],
      whyItWorks:
        "Light gates and ticker timers turn the hard job of measuring acceleration into easy measurements of distance and time. A straight line through the origin on an acceleration–force graph is direct experimental evidence for F = ma.",
      formulae: ["a = (v − u) ÷ t", "velocity = card length ÷ time", "ticker interval = 1 ÷ 50 = 0.02 s"],
      strategies: ["Change only one variable at a time (fair test)", "Use the gradient of a velocity–time graph for acceleration", "Identify the independent, dependent and control variables"],
    },
  ],
  learn: {
    bigIdea:
      "Motion is described by speed, velocity and acceleration (and read off distance–time and velocity–time graphs); forces change motion through F = ma; and momentum (p = mv) is conserved in collisions and explosions, which explains both Newton's laws and how car safety features protect us.",
    mustKnow: [
      "average speed = distance ÷ time; gradient of a distance–time graph = speed.",
      "a = (v − u) ÷ t; on a velocity–time graph gradient = acceleration and area = distance.",
      "Equations of motion (constant a): v = u + at and v² = u² + 2as.",
      "Forces are vectors; classify contact vs non-contact; find the resultant before using F = ma.",
      "Newton: balanced forces → constant velocity (inertia); resultant force F = ma; forces act in equal-opposite pairs.",
      "Weight W = mg with g = 10 N/kg (state which g); terminal velocity is when air resistance = weight.",
      "Stopping distance = thinking distance + braking distance, and the factors affecting each.",
      "Momentum p = mv is conserved; F = Δp/t, so increasing crash time reduces force (crumple zones, airbags, seat belts).",
      "Investigate acceleration with light gates or ticker tape, changing one variable at a time.",
    ],
    keywords: [
      { term: "Scalar", definition: "A quantity with magnitude only (e.g. distance, speed, mass, time, energy)." },
      { term: "Vector", definition: "A quantity with both magnitude and direction (e.g. velocity, force, momentum, weight)." },
      { term: "Distance", definition: "The total length of path travelled, a scalar measured in metres." },
      { term: "Displacement", definition: "The straight-line distance from start to finish in a stated direction, a vector." },
      { term: "Velocity", definition: "Speed in a stated direction; the rate of change of displacement (m/s)." },
      { term: "Acceleration", definition: "The rate of change of velocity, a = (v − u) ÷ t, in m/s²." },
      { term: "Resultant force", definition: "The single force equivalent to all the forces acting on an object combined." },
      { term: "Inertia", definition: "The tendency of an object to keep its state of rest or constant velocity (Newton's 1st law)." },
      { term: "Weight", definition: "The force of gravity on a mass, W = mg, measured in newtons." },
      { term: "Terminal velocity", definition: "The constant maximum speed of a falling object when air resistance equals its weight." },
      { term: "Stopping distance", definition: "Thinking distance plus braking distance — the total distance to stop a vehicle." },
      { term: "Momentum", definition: "Mass × velocity (p = mv), a vector measured in kg m/s." },
      { term: "Conservation of momentum", definition: "In a closed system with no external force, total momentum before = total momentum after." },
    ],
    flashcards: [
      { front: "What does the gradient of a distance–time graph tell you?", back: "The speed. (A curve means the speed is changing, i.e. acceleration.)" },
      { front: "What does the gradient of a velocity–time graph tell you?", back: "The acceleration. (The area under the line tells you the distance.)" },
      { front: "State Newton's Second Law as an equation.", back: "F = m a — resultant force = mass × acceleration." },
      { front: "Contact vs non-contact force — give an example of each.", back: "Contact: friction (or tension, normal, drag, upthrust). Non-contact: weight/gravity (or magnetic, electrostatic)." },
      { front: "When does a falling object reach terminal velocity?", back: "When air resistance equals weight, so the resultant force (and acceleration) is zero and speed is constant." },
      { front: "Why do crumple zones reduce injury?", back: "They increase the collision time t, and since F = Δp/t, a larger t means a smaller force on the occupants." },
      { front: "Write the two equations of motion used in 4PH1.", back: "v = u + at and v² = u² + 2as (valid for constant acceleration)." },
      { front: "Distinguish mass and weight.", back: "Mass is the amount of matter (kg, constant). Weight is the gravitational force on it (N), W = mg, and changes with g." },
      { front: "How do you measure acceleration in the lab?", back: "Use light gates (velocity = card length ÷ time) or ticker tape, then a = (v − u) ÷ t or the gradient of a v–t graph." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "fm-mcq-q01",
        question: "Which of these is a vector quantity?",
        options: ["Speed", "Distance", "Velocity", "Mass"],
        answerIndex: 2,
        explanation: "Velocity has both magnitude and direction, so it is a vector. Speed, distance and mass have magnitude only.",
        guideRef: "Scalars, vectors, speed and distance–time graphs",
        difficulty: "warmup",
      },
      {
        id: "fm-mcq-q02",
        question: "On a distance–time graph, what does the gradient (slope) represent?",
        options: ["Acceleration", "Speed", "Distance", "Force"],
        answerIndex: 1,
        explanation: "Gradient = change in distance ÷ change in time = speed.",
        guideRef: "Scalars, vectors, speed and distance–time graphs",
        difficulty: "warmup",
      },
      {
        id: "fm-mcq-q03",
        question: "A car travels 150 m in 10 s at a steady speed. What is its speed?",
        options: ["1.5 m/s", "15 m/s", "150 m/s", "1500 m/s"],
        answerIndex: 1,
        explanation: "average speed = distance ÷ time = 150 ÷ 10 = 15 m/s.",
        guideRef: "Scalars, vectors, speed and distance–time graphs",
        difficulty: "warmup",
        hints: ["Which formula links speed, distance and time?", "average speed = distance ÷ time.", "Divide 150 by 10."],
        strategy: "Pick the formula then substitute",
      },
      {
        id: "fm-mcq-q04",
        question: "Which of these is the most realistic everyday speed for a person walking?",
        options: ["0.1 m/s", "1.5 m/s", "10 m/s", "30 m/s"],
        answerIndex: 1,
        explanation: "Walking is about 1.5 m/s. 10 m/s is a fast sprinter and 30 m/s is a car on the motorway.",
        guideRef: "Scalars, vectors, speed and distance–time graphs",
        difficulty: "warmup",
      },
      {
        id: "fm-mcq-q05",
        question: "On a velocity–time graph, the area under the line gives the…",
        options: ["acceleration", "speed", "distance travelled", "resultant force"],
        answerIndex: 2,
        explanation: "Velocity × time = distance, so the area enclosed under the line equals the distance travelled.",
        guideRef: "Velocity, acceleration and velocity–time graphs",
        difficulty: "core",
        hints: ["What are the units of (velocity × time)?", "m/s × s = ?", "That unit is a distance."],
      },
      {
        id: "fm-mcq-q06",
        question: "A cyclist accelerates from 4 m/s to 10 m/s in 3 s. What is the acceleration?",
        options: ["2 m/s²", "3 m/s²", "6 m/s²", "14 m/s²"],
        answerIndex: 0,
        explanation: "a = (v − u) ÷ t = (10 − 4) ÷ 3 = 6 ÷ 3 = 2 m/s².",
        guideRef: "Velocity, acceleration and velocity–time graphs",
        difficulty: "core",
        hints: ["Use a = (v − u) ÷ t.", "v − u = 10 − 4 = 6 m/s.", "Divide the change in velocity by 3 s."],
        strategy: "Identify u, v, t first",
      },
      {
        id: "fm-mcq-q07",
        question: "What is the SI unit of acceleration?",
        options: ["m/s", "m/s²", "N", "kg m/s"],
        answerIndex: 1,
        explanation: "Acceleration is change in velocity (m/s) per second, so its unit is m/s².",
        guideRef: "Velocity, acceleration and velocity–time graphs",
        difficulty: "warmup",
      },
      {
        id: "fm-mcq-q08",
        question: "A car starts from rest and accelerates at 3 m/s² for 5 s. What is its final velocity?",
        options: ["8 m/s", "15 m/s", "0.6 m/s", "45 m/s"],
        answerIndex: 1,
        explanation: "v = u + at = 0 + 3 × 5 = 15 m/s.",
        guideRef: "The equations of motion (suvat)",
        difficulty: "core",
        hints: ["Which suvat equation links v, u, a and t?", "v = u + at, with u = 0.", "v = 3 × 5."],
        strategy: "List suvat and choose the matching equation",
      },
      {
        id: "fm-mcq-q09",
        question: "A ball is dropped from rest (take g = 10 m/s²). Ignoring air resistance, what is its speed after falling 20 m?",
        options: ["14 m/s", "20 m/s", "200 m/s", "400 m/s"],
        answerIndex: 1,
        explanation: "Use v² = u² + 2as = 0 + 2 × 10 × 20 = 400, so v = √400 = 20 m/s.",
        guideRef: "The equations of motion (suvat)",
        difficulty: "core",
        hints: ["Time is unknown, so use v² = u² + 2as.", "v² = 0 + 2 × 10 × 20 = 400.", "Take the square root of 400."],
        strategy: "Choose the suvat equation with no t",
      },
      {
        id: "fm-mcq-q10",
        question: "According to Newton's First Law, an object with balanced forces acting on it will…",
        options: ["always be stationary", "always speed up", "keep a constant velocity (or stay at rest)", "always slow down"],
        answerIndex: 2,
        explanation: "Balanced (zero resultant) forces mean no change in velocity: the object stays at rest or continues at constant velocity.",
        guideRef: "Forces, free-body diagrams and Newton's laws",
        difficulty: "core",
        hints: ["Balanced forces give what resultant force?", "Zero resultant force means no acceleration.", "No acceleration means velocity does not change."],
      },
      {
        id: "fm-mcq-q11",
        question: "Which of these is a non-contact force?",
        options: ["Friction", "Tension", "Gravitational force (weight)", "Air resistance"],
        answerIndex: 2,
        explanation: "Gravity (weight) acts at a distance without objects touching, so it is a non-contact force. Friction, tension and air resistance all need contact.",
        guideRef: "Forces, free-body diagrams and Newton's laws",
        difficulty: "warmup",
        hints: ["Non-contact forces act without touching.", "Which force pulls objects to Earth from a distance?", "Gravity (weight) needs no contact."],
      },
      {
        id: "fm-mcq-q12",
        question: "A resultant force of 12 N acts on a 4 kg mass. What is the acceleration?",
        options: ["3 m/s²", "8 m/s²", "16 m/s²", "48 m/s²"],
        answerIndex: 0,
        explanation: "F = ma, so a = F ÷ m = 12 ÷ 4 = 3 m/s².",
        guideRef: "Forces, free-body diagrams and Newton's laws",
        difficulty: "core",
        hints: ["Rearrange F = ma to find a.", "a = F ÷ m.", "Divide 12 N by 4 kg."],
        strategy: "Rearrange the formula for the unknown",
      },
      {
        id: "fm-mcq-q13",
        question: "Which statement best describes Newton's Third Law?",
        options: [
          "Force equals mass times acceleration",
          "Every action has an equal and opposite reaction, acting on different objects",
          "Objects keep moving unless a force acts",
          "Weight equals mass times gravity",
        ],
        answerIndex: 1,
        explanation: "Newton's Third Law: forces come in equal and opposite pairs that act on two different objects.",
        guideRef: "Forces, free-body diagrams and Newton's laws",
        difficulty: "core",
        hints: ["Which law is about pairs of forces?", "The pair acts on two different objects.", "Equal in size, opposite in direction."],
      },
      {
        id: "fm-mcq-q14",
        question: "What is the weight of a 6 kg bag on Earth? (Take g = 10 N/kg.)",
        options: ["0.6 N", "6 N", "60 N", "600 N"],
        answerIndex: 2,
        explanation: "W = mg = 6 × 10 = 60 N.",
        guideRef: "Weight, friction, air resistance and terminal velocity",
        difficulty: "warmup",
        hints: ["Use W = mg.", "g = 10 N/kg here.", "Multiply 6 by 10."],
      },
      {
        id: "fm-mcq-q15",
        question: "An astronaut takes a 2 kg rock to the Moon (g ≈ 1.6 N/kg). What happens to its mass and weight compared with Earth?",
        options: [
          "Both mass and weight decrease",
          "Mass stays 2 kg; weight decreases",
          "Mass decreases; weight stays the same",
          "Both stay exactly the same",
        ],
        answerIndex: 1,
        explanation: "Mass is the amount of matter and does not change (still 2 kg). Weight = mg, and because g is smaller on the Moon, the weight decreases (from 20 N to about 3.2 N).",
        guideRef: "Weight, friction, air resistance and terminal velocity",
        difficulty: "core",
        hints: ["Does mass depend on gravity?", "Weight = mg, and g is smaller on the Moon.", "Mass is constant; weight changes."],
      },
      {
        id: "fm-mcq-q16",
        question: "An object falls at terminal velocity. What is true about the forces on it?",
        options: [
          "Weight is greater than air resistance",
          "Air resistance is greater than weight",
          "Weight equals air resistance, so the resultant force is zero",
          "There are no forces acting",
        ],
        answerIndex: 2,
        explanation: "At terminal velocity air resistance equals weight, giving zero resultant force, zero acceleration and constant speed.",
        guideRef: "Weight, friction, air resistance and terminal velocity",
        difficulty: "core",
        hints: ["Terminal velocity means constant speed.", "Constant speed means zero acceleration.", "Zero acceleration needs zero resultant force."],
      },
      {
        id: "fm-mcq-q17",
        question: "Which change would increase a car's thinking distance but NOT its braking distance?",
        options: ["A wet road", "Worn brakes", "A tired driver", "Worn tyres"],
        answerIndex: 2,
        explanation: "Thinking distance depends on the driver's reaction time, so tiredness increases it. Wet roads, worn brakes and worn tyres affect braking distance.",
        guideRef: "Stopping distance and road safety",
        difficulty: "core",
        hints: ["Thinking distance is about the driver's reaction.", "Which factor slows reactions, not braking?", "Tiredness affects reaction time."],
        strategy: "Sort each factor into thinking or braking",
      },
      {
        id: "fm-mcq-q18",
        question: "A 1500 kg car moves at 20 m/s. What is its momentum?",
        options: ["75 kg m/s", "300 kg m/s", "30 000 kg m/s", "150 000 kg m/s"],
        answerIndex: 2,
        explanation: "p = mv = 1500 × 20 = 30 000 kg m/s.",
        guideRef: "Momentum, conservation and vehicle safety",
        difficulty: "core",
        hints: ["Use p = mv.", "Multiply mass by velocity.", "1500 × 20 = ?"],
        strategy: "Substitute into p = mv",
      },
      {
        id: "fm-mcq-q19",
        question: "How do crumple zones, airbags and seat belts reduce the force on a passenger in a crash?",
        options: [
          "They reduce the passenger's mass",
          "They increase the time taken to stop, reducing the force",
          "They increase the passenger's momentum",
          "They remove all the momentum instantly",
        ],
        answerIndex: 1,
        explanation: "They extend the collision time t. Since F = Δp ÷ t, a larger t for the same momentum change gives a smaller force.",
        guideRef: "Momentum, conservation and vehicle safety",
        difficulty: "core",
        hints: ["Which equation links force, momentum and time?", "F = Δp ÷ t.", "If t increases for the same Δp, F must decrease."],
      },
      {
        id: "fm-mcq-q20",
        question: "A car travels 400 m east then 300 m west. What are its distance and displacement?",
        options: [
          "Distance 700 m, displacement 100 m east",
          "Distance 100 m, displacement 700 m east",
          "Distance 700 m, displacement 700 m east",
          "Distance 100 m, displacement 100 m west",
        ],
        answerIndex: 0,
        explanation: "Distance adds up regardless of direction: 400 + 300 = 700 m. Displacement is the net position: 400 east − 300 west = 100 m east.",
        guideRef: "Scalars, vectors, speed and distance–time graphs",
        difficulty: "core",
        hints: ["Distance ignores direction; displacement includes it.", "Distance = 400 + 300.", "Displacement = 400 east − 300 west."],
        strategy: "Decide scalar or vector first",
      },
      {
        id: "fm-mcq-q21",
        question: "A velocity–time graph shows a horizontal line at 8 m/s. What is the object doing?",
        options: ["Accelerating at 8 m/s²", "Decelerating", "Moving at a constant 8 m/s", "Stationary"],
        answerIndex: 2,
        explanation: "A horizontal line on a velocity–time graph means velocity is unchanging — constant velocity of 8 m/s (zero acceleration).",
        guideRef: "Velocity, acceleration and velocity–time graphs",
        difficulty: "core",
        hints: ["What is the gradient of a horizontal line?", "Gradient = acceleration.", "Zero gradient means constant velocity."],
      },
      {
        id: "fm-mcq-q22",
        question: "A train decelerates from 30 m/s to rest in 12 s. What is its acceleration?",
        options: ["−2.5 m/s²", "2.5 m/s²", "−360 m/s²", "−0.4 m/s²"],
        answerIndex: 0,
        explanation: "a = (v − u) ÷ t = (0 − 30) ÷ 12 = −2.5 m/s². The negative sign shows deceleration.",
        guideRef: "Velocity, acceleration and velocity–time graphs",
        difficulty: "core",
        hints: ["Here v = 0 and u = 30 m/s.", "a = (0 − 30) ÷ 12.", "Expect a negative answer (slowing down)."],
        strategy: "Watch the sign of (v − u)",
      },
      {
        id: "fm-mcq-q23",
        question: "Two skydivers of the same shape jump together; one is heavier. What happens to their terminal velocities?",
        options: [
          "Both have the same terminal velocity",
          "The heavier one has a higher terminal velocity",
          "The lighter one has a higher terminal velocity",
          "Neither reaches terminal velocity",
        ],
        answerIndex: 1,
        explanation: "The heavier skydiver has more weight, so a greater air resistance is needed to balance it, which only occurs at a higher speed — a higher terminal velocity.",
        guideRef: "Weight, friction, air resistance and terminal velocity",
        difficulty: "challenge",
        hints: ["Terminal velocity is when air resistance = weight.", "The heavier one has more weight to balance.", "Air resistance grows with speed, so balance happens at a higher speed."],
        strategy: "Use the balanced-force condition",
      },
      {
        id: "fm-mcq-q24",
        question: "A 2 kg trolley at 3 m/s collides with and sticks to a stationary 1 kg trolley. What is their common velocity afterwards?",
        options: ["1 m/s", "2 m/s", "3 m/s", "6 m/s"],
        answerIndex: 1,
        explanation: "Momentum before = 2 × 3 + 1 × 0 = 6 kg m/s. After, total mass = 3 kg, so v = 6 ÷ 3 = 2 m/s.",
        guideRef: "Momentum, conservation and vehicle safety",
        difficulty: "challenge",
        hints: ["Total momentum before = total momentum after.", "Before = 2 × 3 = 6 kg m/s.", "After they move as 3 kg: v = 6 ÷ 3."],
        strategy: "Total momentum before = total momentum after",
      },
      {
        id: "fm-mcq-q25",
        question: "A 0.5 kg ball moving at 8 m/s is stopped by a wall in 0.04 s. What average force does the wall exert?",
        options: ["100 N", "160 N", "0.16 N", "4 N"],
        answerIndex: 0,
        explanation: "Δp = m(v − u) = 0.5 × (0 − 8) = −4 kg m/s. F = Δp ÷ t = −4 ÷ 0.04 = −100 N, so 100 N in magnitude.",
        guideRef: "Momentum, conservation and vehicle safety",
        difficulty: "challenge",
        hints: ["Find the change in momentum first.", "Δp = 0.5 × (0 − 8) = −4 kg m/s.", "F = Δp ÷ t = 4 ÷ 0.04."],
        strategy: "Find Δp, then divide by time",
      },
      {
        id: "fm-mcq-q26",
        question: "A car of mass 800 kg has a driving force of 2400 N forward and 400 N of resistive forces. What is its acceleration?",
        options: ["2.5 m/s²", "3 m/s²", "3.5 m/s²", "0.4 m/s²"],
        answerIndex: 0,
        explanation: "Resultant force = 2400 − 400 = 2000 N. a = F ÷ m = 2000 ÷ 800 = 2.5 m/s².",
        guideRef: "Forces, free-body diagrams and Newton's laws",
        difficulty: "challenge",
        hints: ["Find the resultant force first.", "Resultant = 2400 − 400 = 2000 N.", "a = 2000 ÷ 800."],
        strategy: "Combine forces to a resultant first",
      },
      {
        id: "fm-mcq-q27",
        question: "A rocket pushes hot gas downwards. Why does the rocket move upwards?",
        options: [
          "The gas is lighter than the rocket",
          "By Newton's Third Law, the gas pushes the rocket up with an equal and opposite force",
          "Gravity reverses in space",
          "The gas has no momentum",
        ],
        answerIndex: 1,
        explanation: "Action–reaction pair (Newton's Third Law): the rocket pushes the gas down, so the gas pushes the rocket up with an equal force in the opposite direction.",
        guideRef: "Forces, free-body diagrams and Newton's laws",
        difficulty: "core",
        hints: ["Forces come in pairs.", "Which law describes equal and opposite forces?", "The reaction acts on the rocket, pushing it up."],
      },
      {
        id: "fm-mcq-q28",
        question: "Doubling a car's speed has roughly what effect on its braking distance?",
        options: ["No change", "Doubles it", "Quadruples it (×4)", "Halves it"],
        answerIndex: 2,
        explanation: "Braking distance depends on speed squared (the kinetic energy ½mv²), so doubling the speed multiplies braking distance by about four.",
        guideRef: "Stopping distance and road safety",
        difficulty: "challenge",
        hints: ["Braking distance depends on speed squared.", "Double the speed means speed² becomes 2² = 4 times.", "So braking distance is about ×4."],
        strategy: "Link braking distance to kinetic energy",
      },
      {
        id: "fm-mcq-q29",
        question: "A rifle of mass 4 kg fires a 0.02 kg bullet forwards at 400 m/s. What is the recoil velocity of the rifle?",
        options: ["0.2 m/s", "2 m/s", "8 m/s", "80 m/s"],
        answerIndex: 1,
        explanation: "Total momentum before = 0 (both at rest). After: 0.02 × 400 + 4 × v = 0, so 8 + 4v = 0, v = −2 m/s. The rifle recoils at 2 m/s backwards.",
        guideRef: "Momentum, conservation and vehicle safety",
        difficulty: "challenge",
        hints: ["Total momentum before firing is zero.", "Bullet momentum = 0.02 × 400 = 8 kg m/s.", "Rifle momentum must be −8 kg m/s: 4 × v = −8."],
        strategy: "Set total momentum to zero (explosion)",
      },
      {
        id: "fm-mcq-q30",
        question: "In the light-gate practical, a card 0.05 m long breaks the beam for 0.025 s. What is the trolley's velocity at that gate?",
        options: ["0.00125 m/s", "0.5 m/s", "2 m/s", "20 m/s"],
        answerIndex: 2,
        explanation: "velocity = card length ÷ time = 0.05 ÷ 0.025 = 2 m/s.",
        guideRef: "Investigating acceleration (required practical)",
        difficulty: "core",
        hints: ["The light gate times how long the card blocks the beam.", "velocity = card length ÷ time.", "0.05 ÷ 0.025 = ?"],
        strategy: "Use velocity = length ÷ time",
      },
      {
        id: "fm-mcq-q31",
        question: "On ticker tape, the dots get further and further apart along the tape. What does this show?",
        options: ["The trolley is stationary", "The trolley moves at constant speed", "The trolley is accelerating", "The trolley is decelerating"],
        answerIndex: 2,
        explanation: "Each dot is made at a fixed time interval (0.02 s). If the gaps grow, the trolley travels further per interval, so it is speeding up (accelerating).",
        guideRef: "Investigating acceleration (required practical)",
        difficulty: "core",
        hints: ["Dots are made at equal time intervals.", "Bigger gaps mean more distance in the same time.", "More distance per time = faster = accelerating."],
      },
    ],
    qa: [
      {
        id: "fm-qa-q01",
        question: "State the difference between a scalar and a vector quantity, and give one example of each. (3 marks)",
        marks: 3,
        modelAnswer:
          "A scalar quantity has magnitude (size) only, for example speed (or distance, mass, time). A vector quantity has both magnitude and direction, for example velocity (or force, momentum, displacement). So the key difference is that a vector includes a direction while a scalar does not.",
        markScheme: [
          "Scalar has magnitude only | size only | no direction",
          "Vector has magnitude and direction | size and direction",
          "Correct scalar example (speed | distance | mass | time | energy) AND correct vector example (velocity | force | momentum | displacement | acceleration | weight)",
        ],
        commonError: "Giving 'velocity' as a scalar or 'speed' as a vector — speed is scalar, velocity is the vector version.",
        guideRef: "Scalars, vectors, speed and distance–time graphs",
        difficulty: "core",
        hints: ["What extra information does a vector carry?", "Direction is the key word.", "Pair a scalar example with a vector example."],
      },
      {
        id: "fm-qa-q02",
        question: "Explain the difference between distance and displacement, using the example of a runner who completes one full lap of a 400 m track. (3 marks)",
        marks: 3,
        modelAnswer:
          "Distance is the total length of the path travelled and is a scalar (no direction). Displacement is the straight-line distance from the start to the finish in a stated direction, and is a vector. After one full lap the runner has travelled a distance of 400 m, but because she finishes where she started, her displacement is zero.",
        markScheme: [
          "Distance = total path length / scalar (no direction)",
          "Displacement = straight-line from start to finish in a direction / vector",
          "Distance = 400 m but displacement = 0 (returns to start)",
        ],
        commonError: "Saying displacement is also 400 m — after a full lap the start and finish coincide, so displacement is zero.",
        guideRef: "Scalars, vectors, speed and distance–time graphs",
        difficulty: "core",
        hints: ["One ignores direction, one includes it.", "Where does the runner end up relative to the start?", "Distance counts the whole lap; displacement is start-to-finish."],
      },
      {
        id: "fm-qa-q03",
        question: "A train accelerates uniformly from 8 m/s to 20 m/s in 6 s. Calculate its acceleration. (3 marks)",
        marks: 3,
        modelAnswer:
          "Using a = (v − u) ÷ t with u = 8 m/s, v = 20 m/s, t = 6 s: a = (20 − 8) ÷ 6 = 12 ÷ 6 = 2 m/s².",
        markScheme: [
          "Use a = (v − u) ÷ t | correct equation",
          "Substitute (20 − 8) ÷ 6 | change in velocity 12 m/s",
          "a = 2 m/s² | 2 m/s2 | 2 (with unit m/s²)",
        ],
        commonError: "Forgetting to subtract u from v (using 20 ÷ 6 instead of (20 − 8) ÷ 6).",
        guideRef: "Velocity, acceleration and velocity–time graphs",
        difficulty: "core",
        hints: ["Identify u, v and t.", "Use a = (v − u) ÷ t.", "Work out 20 − 8 before dividing by 6."],
      },
      {
        id: "fm-qa-q04",
        question: "A car starts from rest and accelerates uniformly at 4 m/s² for 5 s. Calculate (a) the final velocity and (b) the distance travelled. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) v = u + at = 0 + 4 × 5 = 20 m/s. (b) Use v² = u² + 2as: 20² = 0 + 2 × 4 × s, so 400 = 8s, giving s = 50 m. (Alternatively, distance = area under the velocity–time graph = ½ × 5 × 20 = 50 m.)",
        markScheme: [
          "v = u + at | final velocity = 20 m/s | 20 m/s",
          "Correct method for distance (v² = u² + 2as or area under graph)",
          "Substitute correctly (400 = 8s | ½ × 5 × 20)",
          "s = 50 m | 50 m",
        ],
        commonError: "Using a wrong or made-up equation; or forgetting u = 0 for 'starts from rest'.",
        guideRef: "The equations of motion (suvat)",
        difficulty: "core",
        hints: ["'Starts from rest' means u = 0.", "Part (a): v = u + at.", "Part (b): use v² = u² + 2as, or area = ½ × base × height."],
        solutions: [
          {
            label: "Method 1: suvat equations",
            steps: [
              "List: u = 0, a = 4 m/s², t = 5 s.",
              "(a) v = u + at = 0 + 4 × 5 = 20 m/s.",
              "(b) v² = u² + 2as → 400 = 0 + 8s → s = 400 ÷ 8 = 50 m.",
            ],
          },
          {
            label: "Method 2: area under velocity–time graph",
            steps: [
              "Final velocity from (a) is 20 m/s after 5 s, starting at 0.",
              "The graph is a triangle: base = 5 s, height = 20 m/s.",
              "Distance = area = ½ × base × height = ½ × 5 × 20 = 50 m.",
            ],
          },
        ],
      },
      {
        id: "fm-qa-q05",
        question: "A stone is dropped from rest off a bridge and hits the water after 2.0 s. Take g = 10 m/s². Calculate (a) its speed as it hits the water and (b) the height of the bridge above the water. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) v = u + at = 0 + 10 × 2.0 = 20 m/s. (b) Using v² = u² + 2as: 20² = 0 + 2 × 10 × s, so 400 = 20s, giving s = 20 m. (Or s = ½ × base × height of the velocity–time triangle = ½ × 2.0 × 20 = 20 m.)",
        markScheme: [
          "u = 0 and a = g = 10 m/s² stated/used",
          "v = u + at → v = 20 m/s | 20 m/s",
          "Correct distance method (v² = u² + 2as or area under graph)",
          "s = 20 m | height = 20 m",
        ],
        commonError: "Using g = 9.8 without noticing the question says 10, or forgetting u = 0 for a dropped object.",
        guideRef: "The equations of motion (suvat)",
        difficulty: "core",
        hints: ["Dropped from rest → u = 0; falling → a = g = 10 m/s².", "(a) v = u + at = 10 × 2.0.", "(b) use v² = u² + 2as, or area of the v–t triangle."],
        solutions: [
          {
            label: "Method 1: v² = u² + 2as (no time needed for distance)",
            steps: [
              "u = 0, a = 10 m/s², t = 2.0 s.",
              "(a) v = u + at = 0 + 10 × 2.0 = 20 m/s.",
              "(b) v² = u² + 2as → 400 = 0 + 20s → s = 20 m.",
            ],
          },
          {
            label: "Method 2: area under the velocity–time graph",
            steps: [
              "Velocity rises linearly from 0 to 20 m/s over 2.0 s.",
              "Distance = area of triangle = ½ × base × height.",
              "s = ½ × 2.0 × 20 = 20 m.",
            ],
          },
        ],
      },
      {
        id: "fm-qa-q06",
        question: "Distinguish between contact and non-contact forces, giving two examples of each. (4 marks)",
        marks: 4,
        modelAnswer:
          "A contact force acts only when two objects are physically touching, for example friction and tension (also normal/reaction force, air resistance, upthrust). A non-contact force acts at a distance, without the objects touching, for example gravitational force (weight) and magnetic force (also electrostatic force). So the key difference is whether the objects need to be in contact for the force to act.",
        markScheme: [
          "Contact force needs objects to be touching | acts on contact",
          "Two correct contact examples (friction | tension | normal/reaction | air resistance/drag | upthrust)",
          "Non-contact force acts at a distance / without touching",
          "Two correct non-contact examples (gravity/weight | magnetic | electrostatic)",
        ],
        commonError: "Listing weight as a contact force — gravity acts at a distance and is non-contact.",
        guideRef: "Forces, free-body diagrams and Newton's laws",
        difficulty: "core",
        hints: ["The split is about whether objects must touch.", "Friction needs surfaces touching; gravity does not.", "Give two of each type."],
      },
      {
        id: "fm-qa-q07",
        question: "A resultant force of 600 N acts on a car of mass 1200 kg. (a) Calculate the acceleration. (b) State Newton's Second Law in words. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) F = ma, so a = F ÷ m = 600 ÷ 1200 = 0.5 m/s². (b) Newton's Second Law: the acceleration of an object is directly proportional to the resultant force on it and inversely proportional to its mass; equivalently, resultant force = mass × acceleration (F = ma).",
        markScheme: [
          "Use/rearrange F = ma → a = F ÷ m",
          "a = 0.5 m/s² | 0.5 m/s²",
          "Acceleration proportional to resultant force | F = ma stated",
          "Acceleration inversely proportional to mass | force = mass × acceleration",
        ],
        commonError: "Multiplying instead of dividing (600 × 1200) when finding acceleration.",
        guideRef: "Forces, free-body diagrams and Newton's laws",
        difficulty: "core",
        hints: ["Rearrange F = ma for a.", "a = F ÷ m = 600 ÷ 1200.", "For (b), mention force, mass and acceleration."],
      },
      {
        id: "fm-qa-q08",
        question: "Describe how a skydiver reaches terminal velocity after jumping from a plane, referring to the forces acting. (5 marks)",
        marks: 5,
        modelAnswer:
          "Just after jumping, the skydiver's weight is much greater than the air resistance, so there is a large resultant force downwards and the skydiver accelerates. As speed increases, air resistance increases. This reduces the resultant force, so the acceleration decreases. Eventually air resistance becomes equal to the weight, so the resultant force is zero. With zero resultant force there is no acceleration (Newton's First Law), so the skydiver falls at a constant maximum speed — the terminal velocity.",
        markScheme: [
          "At first weight > air resistance | large resultant force down",
          "Skydiver accelerates",
          "Air resistance increases as speed increases",
          "Resultant force decreases so acceleration decreases",
          "Air resistance = weight → resultant force zero → constant speed | terminal velocity",
        ],
        commonError: "Saying air resistance becomes greater than weight at terminal velocity — it becomes equal, giving zero resultant force.",
        guideRef: "Weight, friction, air resistance and terminal velocity",
        difficulty: "core",
        hints: ["Start with the forces immediately after the jump.", "What happens to air resistance as speed rises?", "What is true about the forces at terminal velocity?"],
      },
      {
        id: "fm-qa-q09",
        question: "An astronaut has a mass of 80 kg. Calculate her weight (a) on Earth where g = 10 N/kg and (b) on the Moon where g = 1.6 N/kg. (c) Explain why her mass is the same in both places. (4 marks)",
        marks: 4,
        modelAnswer:
          "(a) W = mg = 80 × 10 = 800 N on Earth. (b) W = mg = 80 × 1.6 = 128 N on the Moon. (c) Mass is the amount of matter in the astronaut, which does not depend on gravity, so it stays 80 kg everywhere. Only the gravitational field strength g changes, so the weight (a force) changes but the mass does not.",
        markScheme: [
          "Use W = mg",
          "Earth weight = 800 N | 800 N",
          "Moon weight = 128 N | 128 N",
          "Mass is amount of matter, independent of gravity | only g changes, mass constant",
        ],
        commonError: "Saying mass decreases on the Moon — it is weight that decreases; mass is unchanged.",
        guideRef: "Weight, friction, air resistance and terminal velocity",
        difficulty: "core",
        hints: ["Use W = mg for both places.", "Earth: 80 × 10; Moon: 80 × 1.6.", "Mass measures matter, not gravitational pull."],
        solutions: [
          {
            label: "Worked calculation",
            steps: [
              "Earth: W = mg = 80 × 10 = 800 N.",
              "Moon: W = mg = 80 × 1.6 = 128 N.",
              "Mass = 80 kg in both cases because mass does not depend on g.",
            ],
          },
        ],
      },
      {
        id: "fm-qa-q10",
        question: "Explain what is meant by stopping distance, name its two parts, and give one factor that increases each part. (4 marks)",
        marks: 4,
        modelAnswer:
          "Stopping distance is the total distance a vehicle travels from the moment the driver sees a hazard to the moment the vehicle stops. It is made up of the thinking distance (the distance travelled during the driver's reaction time, before braking) and the braking distance (the distance travelled while the brakes are applied). Thinking distance is increased by, for example, the driver being tired (or alcohol/distraction/higher speed). Braking distance is increased by, for example, a wet or icy road (or worn tyres/brakes, higher speed, heavier load).",
        markScheme: [
          "Stopping distance = total distance to stop | thinking + braking distance",
          "Thinking distance defined (distance during reaction time)",
          "Braking distance defined (distance while braking)",
          "One correct factor for thinking (tiredness | alcohol | distraction | speed) AND one for braking (wet/icy road | worn tyres | worn brakes | speed | load)",
        ],
        commonError: "Mixing up the factors — e.g. saying a wet road increases thinking distance (it increases braking distance).",
        guideRef: "Stopping distance and road safety",
        difficulty: "core",
        hints: ["Stopping distance has two parts that add up.", "One part is before braking, one is during braking.", "Give a reaction-time factor and a road/vehicle factor."],
      },
      {
        id: "fm-qa-q11",
        question: "A 2.0 kg trolley moving at 5.0 m/s collides with a stationary 3.0 kg trolley and they move off joined together. Calculate their common velocity after the collision, stating the principle you use. (4 marks)",
        marks: 4,
        modelAnswer:
          "Use conservation of momentum: total momentum before = total momentum after. Before: p = m₁u₁ + m₂u₂ = 2.0 × 5.0 + 3.0 × 0 = 10 kg m/s. After, the combined mass is 2.0 + 3.0 = 5.0 kg moving at velocity v, so total momentum after = 5.0 × v. Setting them equal: 10 = 5.0 × v, so v = 2.0 m/s.",
        markScheme: [
          "State conservation of momentum | momentum before = momentum after",
          "Momentum before = 2.0 × 5.0 = 10 kg m/s",
          "Combined mass after = 5.0 kg | 10 = 5.0 × v",
          "v = 2.0 m/s | 2 m/s",
        ],
        commonError: "Forgetting that after the collision the moving mass is the combined 5.0 kg, not just 2.0 kg.",
        guideRef: "Momentum, conservation and vehicle safety",
        difficulty: "challenge",
        hints: ["Which quantity is conserved in a collision?", "Momentum before = 2.0 × 5.0 = 10 kg m/s.", "After, the mass is 5.0 kg: solve 10 = 5.0 × v."],
        solutions: [
          {
            label: "Conservation of momentum",
            steps: [
              "Before: total momentum = 2.0 × 5.0 + 3.0 × 0 = 10 kg m/s.",
              "After: combined mass = 5.0 kg moving at v, momentum = 5.0v.",
              "Conserve: 10 = 5.0v → v = 2.0 m/s.",
            ],
          },
        ],
      },
      {
        id: "fm-qa-q12",
        question: "A 60 kg gymnast steps off a wall and falls. (a) Calculate her weight (g = 10 N/kg). (b) Just after she steps off, what is the resultant force on her and her acceleration? (c) Explain, using forces, why she does not keep accelerating forever in real air. (5 marks)",
        marks: 5,
        modelAnswer:
          "(a) W = mg = 60 × 10 = 600 N downwards. (b) Just after stepping off, her speed is zero so air resistance is zero; the only force is her weight, so the resultant force = 600 N down and a = F ÷ m = 600 ÷ 60 = 10 m/s² (i.e. a = g). (c) As she speeds up, air resistance increases and acts upwards, so the resultant force gets smaller and her acceleration decreases. If she fell far enough, air resistance would equal her weight, giving zero resultant force and a constant terminal velocity.",
        markScheme: [
          "W = mg = 600 N | 600 N",
          "Just after stepping off air resistance ≈ 0, resultant = weight = 600 N",
          "a = F ÷ m = 600 ÷ 60 = 10 m/s² | a = g",
          "Air resistance increases with speed",
          "Resultant force (and acceleration) decreases; would reach terminal velocity when air resistance = weight",
        ],
        commonError: "Forgetting that air resistance is zero at the instant she starts (speed = 0), so the initial acceleration is g.",
        guideRef: "Weight, friction, air resistance and terminal velocity",
        difficulty: "challenge",
        hints: ["(a) W = mg.", "At the very start her speed is 0, so air resistance is 0.", "(c) what happens to air resistance as she speeds up?"],
        solutions: [
          {
            label: "Forces and F = ma",
            steps: [
              "(a) W = mg = 60 × 10 = 600 N.",
              "(b) At the start air resistance = 0, so resultant = 600 N; a = 600 ÷ 60 = 10 m/s².",
              "(c) Air resistance grows with speed → resultant shrinks → acceleration falls → terminal velocity when air resistance = weight.",
            ],
          },
        ],
      },
      {
        id: "fm-qa-q13",
        question: "A 1000 kg car accelerates from 10 m/s to 25 m/s in 5.0 s along a straight road. (a) Calculate its acceleration. (b) Calculate the resultant force needed. (c) Calculate the distance travelled in this time. (6 marks)",
        marks: 6,
        modelAnswer:
          "(a) a = (v − u) ÷ t = (25 − 10) ÷ 5.0 = 15 ÷ 5.0 = 3.0 m/s². (b) F = ma = 1000 × 3.0 = 3000 N. (c) Using v² = u² + 2as: 25² = 10² + 2 × 3.0 × s → 625 = 100 + 6s → 525 = 6s → s = 87.5 m. (Or distance = average velocity × time = ½(10 + 25) × 5.0 = 87.5 m.)",
        markScheme: [
          "a = (v − u) ÷ t → 3.0 m/s² | 3 m/s²",
          "F = ma → 1000 × 3.0",
          "F = 3000 N | 3000 N | 3 kN",
          "Correct distance method (v² = u² + 2as or area under graph)",
          "Correct substitution (625 = 100 + 6s or ½(10+25)×5.0)",
          "s = 87.5 m | 87.5 m",
        ],
        commonError: "Using only the final velocity (25) to find distance, or forgetting to subtract u² in v² = u² + 2as.",
        guideRef: "The equations of motion (suvat)",
        difficulty: "challenge",
        hints: ["(a) a = (v − u) ÷ t.", "(b) F = ma with the acceleration from (a).", "(c) use v² = u² + 2as, or average velocity × time."],
        solutions: [
          {
            label: "Method 1: suvat with v² = u² + 2as for distance",
            steps: [
              "(a) a = (25 − 10) ÷ 5.0 = 3.0 m/s².",
              "(b) F = ma = 1000 × 3.0 = 3000 N.",
              "(c) v² = u² + 2as → 625 = 100 + 6s → s = 525 ÷ 6 = 87.5 m.",
            ],
          },
          {
            label: "Method 2: distance from average velocity (area under graph)",
            steps: [
              "(a) and (b) as above: a = 3.0 m/s², F = 3000 N.",
              "Average velocity = ½(u + v) = ½(10 + 25) = 17.5 m/s.",
              "(c) distance = average velocity × time = 17.5 × 5.0 = 87.5 m.",
            ],
          },
        ],
      },
      {
        id: "fm-qa-q14",
        question: "A 0.15 kg ball travelling at 12 m/s is struck and returns along the same line at 18 m/s. The contact lasts 0.020 s. Calculate the average force on the ball, and explain the sign of your answer. (5 marks)",
        marks: 5,
        modelAnswer:
          "Take the initial direction as positive, so u = +12 m/s and v = −18 m/s (it reverses). Change in momentum Δp = m(v − u) = 0.15 × (−18 − 12) = 0.15 × (−30) = −4.5 kg m/s. Force F = Δp ÷ t = −4.5 ÷ 0.020 = −225 N. The negative sign shows the force acts in the opposite direction to the ball's original motion (it pushes the ball back), which makes sense as the ball reverses. The magnitude of the force is 225 N.",
        markScheme: [
          "Assign opposite signs to the two velocities (e.g. +12 and −18) | v − u = −30 m/s",
          "Δp = m(v − u) = 0.15 × (−30) = −4.5 kg m/s",
          "F = Δp ÷ t = −4.5 ÷ 0.020",
          "F = −225 N | magnitude 225 N",
          "Negative sign means force is opposite to original motion | force reverses the ball",
        ],
        commonError: "Using (18 − 12) = 6 instead of (−18 − 12) = −30 — the ball reverses, so the velocities have opposite signs.",
        guideRef: "Momentum, conservation and vehicle safety",
        difficulty: "challenge",
        hints: ["The ball reverses, so give v and u opposite signs.", "Δp = m(v − u) = 0.15 × (−18 − 12).", "F = Δp ÷ t; the sign shows direction."],
        solutions: [
          {
            label: "Signed momentum method",
            steps: [
              "Take original direction as +: u = +12 m/s, v = −18 m/s.",
              "Δp = m(v − u) = 0.15 × (−18 − 12) = −4.5 kg m/s.",
              "F = Δp ÷ t = −4.5 ÷ 0.020 = −225 N (225 N opposite to original motion).",
            ],
          },
        ],
      },
      {
        id: "fm-qa-q15",
        question: "Use the idea of momentum to explain how a crumple zone and a seat belt reduce the force on the people inside a car during a crash. (4 marks)",
        marks: 4,
        modelAnswer:
          "In a crash the car and its occupants must lose all their momentum as they come to a stop, so the change in momentum (Δp) is fixed. Force is the rate of change of momentum, F = Δp ÷ t. A crumple zone collapses and squashes during the impact, and a seat belt stretches slightly, both increasing the time t over which the occupants come to rest. Because Δp is the same but t is larger, the force F on the occupants is smaller, reducing the risk of injury.",
        markScheme: [
          "Occupants must lose their momentum | change in momentum is fixed",
          "Use F = Δp ÷ t | force = rate of change of momentum",
          "Crumple zone collapses / seat belt stretches → increases the time t of the collision",
          "Larger t for same Δp → smaller force | reduces force and injury",
        ],
        commonError: "Saying the safety feature reduces the momentum change — it does not; it increases the time, which lowers the force.",
        guideRef: "Momentum, conservation and vehicle safety",
        difficulty: "challenge",
        hints: ["What must happen to the occupants' momentum in a crash?", "Which equation links force, momentum and time?", "If t increases for the same Δp, what happens to F?"],
        solutions: [
          {
            label: "Reasoning with F = Δp ÷ t",
            steps: [
              "Momentum change Δp (down to zero) is the same with or without the safety feature.",
              "A crumple zone collapses and a seat belt stretches, lengthening the stopping time t.",
              "F = Δp ÷ t, so a bigger t gives a smaller force on the occupants.",
            ],
          },
        ],
      },
      {
        id: "fm-qa-q16",
        question: "A student investigates how the acceleration of a trolley depends on the force pulling it, using light gates. Describe how she should carry out the experiment, including what she measures, how she keeps it a fair test, and how the results show Newton's second law. (6 marks)",
        marks: 6,
        modelAnswer:
          "She sets up a trolley on a track with a card of known length attached, and pulls it using masses hanging over a pulley, which provides the pulling force. As the card passes through each light gate, the data logger measures the time the beam is broken and calculates the velocity (velocity = card length ÷ time). With two gates a known distance apart it finds the acceleration from a = (v − u) ÷ t. She records the acceleration for several different pulling forces. To keep it a fair test she keeps the total mass being accelerated constant (by moving masses from the trolley to the hanger when increasing the force) and changes only the force. She should also compensate for friction by slightly tilting the track, and repeat each reading and average. Plotting acceleration against force gives a straight line through the origin, showing acceleration is directly proportional to force (a ∝ F), which supports F = ma.",
        markScheme: [
          "Use light gates + card; velocity = card length ÷ time",
          "Find acceleration from a = (v − u) ÷ t (two gates)",
          "Vary the pulling force (hanging masses) and record acceleration",
          "Fair test: keep total mass constant, change only the force",
          "Reduce error: compensate for friction / repeat and average",
          "Straight line through origin on a–F graph shows a ∝ F (Newton's 2nd law)",
        ],
        commonError: "Forgetting to keep the total mass constant, or measuring time with a stopwatch (large reaction-time error) instead of light gates.",
        guideRef: "Investigating acceleration (required practical)",
        difficulty: "challenge",
        hints: ["How do light gates give velocity from the card?", "Which variable do you change, and what must stay constant?", "What graph proves a ∝ F?"],
      },
    ],
  },
  // questionBank omitted — auto-assembled from the quiz pools by lib/content.ts.
};
