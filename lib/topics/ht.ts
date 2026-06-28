import type { Topic } from "../types";

// TEMPLATE / SAMPLE TOPIC — Heat Transfer. Demonstrates the full shape that the
// content-generation agents mirror for every topic (AoPS discovery openers,
// whyItWorks, strategies, tiered difficulty, hint ladders, multi-method solutions).

export const ht: Topic = {
  id: "ht",
  code: "HT",
  number: 1,
  title: "Heat Transfer",
  subject: "Physics",
  icon: "🔥",
  color: "#ef4444",
  intro:
    "Energy always flows from hotter places to cooler places. In this topic you'll discover the three ways thermal energy travels — conduction, convection and radiation — and learn to explain everyday things like why metal feels cold, how a radiator warms a room, and why a vacuum flask keeps drinks hot.",
  guide: [
    {
      heading: "What is heat transfer?",
      discovery: {
        problem:
          "You leave a metal spoon and a wooden spoon in the same warm soup. After a minute, the metal one feels much hotter to touch. Both were in the same soup — so why the difference?",
        idea: "Materials transfer thermal energy at very different rates. Metals are excellent thermal conductors; wood is a thermal insulator. The energy is the same, but how fast it moves through each material is not.",
      },
      body:
        "Thermal energy (often just called heat) always moves from a region of **higher temperature** to a region of **lower temperature**. It keeps flowing until both regions reach the same temperature — they are then in *thermal equilibrium*.\n\nTemperature and thermal energy are not the same thing: **temperature** measures how hot something is (the average kinetic energy of its particles), while **thermal energy** is the total energy of all the particles. A bathtub of warm water has more thermal energy than a boiling cup of tea, even though the tea is hotter.",
      keyPoints: [
        "Energy flows from hot to cold, never the other way on its own.",
        "Flow stops when temperatures are equal (thermal equilibrium).",
        "Temperature = average particle KE; thermal energy = total particle energy.",
      ],
      whyItWorks:
        "Hotter particles vibrate or move faster. When they collide with slower, cooler particles they pass on some kinetic energy — so on average energy spreads out from hot to cold.",
      strategies: ["Draw a diagram", "Define your terms before reasoning"],
    },
    {
      heading: "Conduction",
      body:
        "**Conduction** is heat transfer through a material *without the material itself moving*. It is the main way heat travels through **solids**, especially metals.\n\nThere are two parts to it:\n\n1. Particles at the hot end vibrate more and collide with neighbours, passing energy along.\n2. In **metals**, free (delocalised) electrons gain kinetic energy at the hot end, move quickly through the metal, and transfer energy as they collide. This electron mechanism is much faster, which is why metals are the best conductors.\n\nMaterials that conduct poorly (wood, plastic, air, water) are **insulators**.",
      diagrams: [
        {
          caption: "Energy passing along a metal bar by particle vibration and free electrons.",
          svg:
            '<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A metal bar heated at the left end with energy moving right">\n<rect x="10" y="30" width="300" height="30" rx="4" fill="#cbd5e1" stroke="#475569"/>\n<rect x="10" y="30" width="60" height="30" rx="4" fill="#ef4444"/>\n<text x="40" y="22" font-size="11" text-anchor="middle" fill="#b91c1c">HOT</text>\n<text x="280" y="22" font-size="11" text-anchor="middle" fill="#1d4ed8">cool</text>\n<path d="M80 45 H300" stroke="#1e293b" stroke-width="2" marker-end="url(#a)"/>\n<defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#1e293b"/></marker></defs>\n<text x="190" y="80" font-size="10" text-anchor="middle" fill="#334155">energy flows hot to cool</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Conduction happens mainly in solids.",
        "Metals conduct best because of free electrons.",
        "Liquids and gases are poor conductors.",
      ],
      whyItWorks:
        "Free electrons are not tied to one atom, so they carry kinetic energy across the whole metal quickly — vibration alone (as in non-metals) is much slower.",
      strategies: ["Compare extremes (best vs worst conductor)"],
    },
    {
      heading: "Convection",
      discovery: {
        problem:
          "A heater sits on the floor of a cold room, yet within minutes the ceiling is the warmest place. Heat 'rises' — but heat is energy, not a thing that can float. What is actually going up?",
        idea: "It isn't the heat that rises — it's warm fluid. Heated air expands, becomes less dense, and floats upward, carrying its thermal energy with it. This bulk movement of fluid is convection.",
      },
      body:
        "**Convection** is heat transfer by the *movement of the fluid itself* (a liquid or a gas). It cannot happen in solids because the particles can't move around.\n\nThe cycle (a **convection current**):\n\n1. Fluid near the heat source warms up and **expands**, so it becomes **less dense**.\n2. The less-dense warm fluid **rises**.\n3. Cooler, denser fluid sinks to take its place and gets heated in turn.\n\nThis is how radiators heat whole rooms, how sea breezes form, and how a saucepan heats water evenly.",
      diagrams: [
        {
          caption: "A convection current above a heater.",
          svg:
            '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Convection current loop showing warm fluid rising and cool fluid sinking">\n<rect x="20" y="20" width="160" height="100" fill="#eff6ff" stroke="#94a3b8"/>\n<rect x="70" y="118" width="60" height="8" fill="#ef4444"/>\n<path d="M100 115 C100 80 100 60 100 40" stroke="#ef4444" stroke-width="3" fill="none" marker-end="url(#up)"/>\n<path d="M100 40 C140 40 150 90 130 115" stroke="#1d4ed8" stroke-width="3" fill="none" marker-end="url(#dn)"/>\n<path d="M100 40 C60 40 50 90 70 115" stroke="#1d4ed8" stroke-width="3" fill="none" marker-end="url(#dn)"/>\n<defs><marker id="up" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0 6 L4 0 L8 6 z" fill="#ef4444"/></marker><marker id="dn" markerWidth="8" markerHeight="8" refX="4" refY="2" orient="auto"><path d="M0 0 L8 0 L4 6 z" fill="#1d4ed8"/></marker></defs>\n<text x="100" y="14" font-size="10" text-anchor="middle" fill="#334155">warm rises, cool sinks</text>\n</svg>',
        },
      ],
      keyPoints: [
        "Convection happens in liquids and gases only.",
        "Warm fluid expands → less dense → rises.",
        "Cooler fluid sinks and is heated, forming a current.",
      ],
      whyItWorks:
        "Heating spreads the particles out, so the same mass takes up more volume → lower density. Less-dense fluid is pushed up by the surrounding denser fluid (an upthrust effect).",
      strategies: ["Trace the cycle step by step", "Link density to volume"],
    },
    {
      heading: "Radiation",
      body:
        "**Thermal (infrared) radiation** is heat transfer by **electromagnetic waves**. Crucially, it needs **no particles at all** — it is the only way energy reaches us across the vacuum of space from the Sun.\n\nAll objects emit and absorb infrared radiation. The hotter an object, the more it emits.\n\nSurfaces matter a lot:\n\n- **Dark, matt** surfaces are the **best emitters and best absorbers**.\n- **Light, shiny** surfaces are **poor emitters and poor absorbers** (good reflectors).",
      keyPoints: [
        "Radiation = infrared electromagnetic waves; works through a vacuum.",
        "Hotter objects emit more radiation.",
        "Dark matt = best absorber/emitter; shiny silver = best reflector.",
      ],
      whyItWorks:
        "All objects above absolute zero have vibrating charged particles, and accelerating charges emit electromagnetic waves — so everything radiates, more strongly when hotter.",
      thinkDeeper:
        "Why are the pipes on the back of a fridge painted black, while a marathon runner is wrapped in a shiny foil blanket? (Black = emit waste heat well; shiny = reflect body heat back.)",
      strategies: ["Match surface to its job", "Think about extremes"],
    },
    {
      heading: "Reducing unwanted heat transfer",
      body:
        "To keep something warm (or cold) we block all three transfer routes at once. The classic example is the **vacuum (Thermos) flask**:\n\n- A **vacuum** between the walls stops conduction and convection (no particles to carry energy).\n- **Silvered walls** reflect infrared radiation back in.\n- A **plastic stopper and case** are insulators that reduce conduction.\n\nIn houses we use **loft insulation, cavity walls, double glazing and draught excluders** to cut heating bills.",
      keyPoints: [
        "A vacuum stops conduction and convection.",
        "Shiny/silvered surfaces reduce radiation.",
        "Real insulation tackles all three routes together.",
      ],
      formulae: [],
      strategies: ["Attack each transfer route separately"],
    },
  ],
  learn: {
    bigIdea:
      "Thermal energy moves from hot to cold by three routes — conduction (through solids), convection (moving fluids) and radiation (EM waves, even through a vacuum). Control heat flow by understanding which route dominates.",
    mustKnow: [
      "Energy flows from higher to lower temperature until equilibrium.",
      "Conduction: particle collisions + free electrons (best in metals).",
      "Convection: warm fluid expands, becomes less dense and rises.",
      "Radiation: infrared EM waves; dark matt absorbs/emits best, shiny reflects.",
      "Insulation (e.g. vacuum flask) blocks all three routes.",
    ],
    keywords: [
      { term: "Conduction", definition: "Heat transfer through a material by particle vibration and free electrons, without the material moving." },
      { term: "Convection", definition: "Heat transfer by the bulk movement of a heated fluid (liquid or gas)." },
      { term: "Radiation", definition: "Heat transfer by infrared electromagnetic waves, requiring no medium." },
      { term: "Thermal equilibrium", definition: "The state where two objects reach the same temperature and net energy flow stops." },
      { term: "Insulator", definition: "A material that transfers thermal energy only slowly." },
      { term: "Density", definition: "Mass per unit volume; heating a fluid lowers its density." },
    ],
    flashcards: [
      { front: "Why do metals conduct heat well?", back: "They have free (delocalised) electrons that carry kinetic energy quickly through the metal." },
      { front: "Why does warm air rise?", back: "It expands, becomes less dense than the surrounding air, and is pushed up." },
      { front: "Which surface is the best radiator of heat?", back: "A dark, matt (dull) surface." },
      { front: "How does a vacuum reduce heat loss?", back: "No particles means no conduction or convection across the gap." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "ht-mcq-q01",
        question: "Heat energy always flows from a region of…",
        options: ["low temperature to high temperature", "high temperature to low temperature", "high density to low density", "solid to liquid"],
        answerIndex: 1,
        explanation: "Thermal energy spontaneously flows from hotter to cooler regions until they reach the same temperature.",
        guideRef: "What is heat transfer?",
        difficulty: "warmup",
      },
      {
        id: "ht-mcq-q02",
        question: "Conduction is the main method of heat transfer in…",
        options: ["gases", "a vacuum", "solids", "moving liquids"],
        answerIndex: 2,
        explanation: "Conduction dominates in solids, where particles are fixed in place and pass energy by vibration and (in metals) free electrons.",
        guideRef: "Conduction",
        difficulty: "warmup",
      },
      {
        id: "ht-mcq-q03",
        question: "Metals are the best thermal conductors mainly because they contain…",
        options: ["tightly bonded molecules", "free (delocalised) electrons", "large air gaps", "infrared waves"],
        answerIndex: 1,
        explanation: "Free electrons move quickly through the metal carrying kinetic energy, which is far faster than vibration alone.",
        guideRef: "Conduction",
        difficulty: "core",
        hints: ["What can move freely in a metal but not in wood?", "Think about what carries charge in a metal wire."],
        strategy: "Compare extremes",
      },
      {
        id: "ht-mcq-q04",
        question: "When part of a fluid is heated, it rises because it becomes…",
        options: ["more dense", "less dense", "heavier", "solid"],
        answerIndex: 1,
        explanation: "Heating makes the fluid expand, so the same mass occupies more volume → lower density → it rises.",
        guideRef: "Convection",
        difficulty: "core",
        hints: ["What happens to the volume of the fluid when heated?", "Density = mass ÷ volume — if volume goes up…"],
      },
      {
        id: "ht-mcq-q05",
        question: "Which method of heat transfer can occur through a vacuum?",
        options: ["Conduction", "Convection", "Radiation", "None of these"],
        answerIndex: 2,
        explanation: "Radiation is carried by electromagnetic (infrared) waves, which need no particles, so it works through a vacuum.",
        guideRef: "Radiation",
        difficulty: "core",
      },
      {
        id: "ht-mcq-q06",
        question: "Which surface is the best absorber of infrared radiation?",
        options: ["Shiny silver", "White gloss", "Dark matt", "Polished steel"],
        answerIndex: 2,
        explanation: "Dark, matt surfaces are the best absorbers (and best emitters); shiny surfaces reflect radiation.",
        guideRef: "Radiation",
        difficulty: "warmup",
      },
      {
        id: "ht-mcq-q07",
        question: "A vacuum flask keeps a drink hot. The vacuum specifically prevents heat loss by…",
        options: ["radiation only", "conduction and convection", "radiation and convection", "evaporation"],
        answerIndex: 1,
        explanation: "With no particles between the walls, neither conduction nor convection can occur; the silvering deals with radiation separately.",
        guideRef: "Reducing unwanted heat transfer",
        difficulty: "core",
        hints: ["Which two methods need particles to work?", "What does silvering deal with instead?"],
      },
      {
        id: "ht-mcq-q08",
        question: "Which statement about temperature and thermal energy is correct?",
        options: [
          "They are exactly the same thing",
          "A large warm object can have more thermal energy than a small hot object",
          "Temperature is the total energy of all particles",
          "Thermal energy is measured in °C",
        ],
        answerIndex: 1,
        explanation: "Thermal energy depends on the total of all particles, so a big warm object (e.g. a bath) can hold more than a small hotter one (e.g. a cup of tea).",
        guideRef: "What is heat transfer?",
        difficulty: "challenge",
        hints: ["Is a bath of warm water or a cup of boiling tea 'hotter'?", "Which one would take more energy to cool to room temperature?"],
        strategy: "Distinguish related quantities",
      },
      {
        id: "ht-mcq-q09",
        question: "Loft insulation reduces heat loss from a house mainly by trapping air, which is a poor conductor. Trapping the air also reduces heat loss by convection because it…",
        options: ["makes the air denser", "stops the air from circulating", "turns the air into a vacuum", "reflects infrared waves"],
        answerIndex: 1,
        explanation: "Trapped pockets of air cannot form convection currents, and still air is also a poor conductor — so both routes are reduced.",
        guideRef: "Reducing unwanted heat transfer",
        difficulty: "challenge",
        hints: ["Convection needs the fluid to move — what if it can't?", "Why trap the air rather than remove it?"],
      },
      {
        id: "ht-mcq-q10",
        question: "Two identical mugs of tea are left to cool. Mug A is shiny silver, Mug B is dull black. After 10 minutes…",
        options: [
          "Mug A is cooler because shiny surfaces emit best",
          "Mug B is cooler because dull surfaces emit radiation best",
          "Both are the same because colour does not matter",
          "Mug B is hotter because black absorbs heat",
        ],
        answerIndex: 1,
        explanation: "A dull black surface is the better emitter of infrared radiation, so Mug B loses energy faster and ends up cooler.",
        guideRef: "Radiation",
        difficulty: "challenge",
        hints: ["Which surface emits radiation best?", "Better emitter → loses energy faster → cooler."],
        strategy: "Match surface to its job",
      },
    ],
    qa: [
      {
        id: "ht-qa-q01",
        question: "Explain why a metal door handle feels colder than a wooden door on the same cold day, even though they are at the same temperature. (3 marks)",
        marks: 3,
        modelAnswer:
          "They are at the same temperature, but metal is a much better thermal conductor than wood. The metal conducts thermal energy away from your hand quickly, so your hand cools rapidly and the handle feels cold. Wood conducts energy away slowly, so your hand stays warmer and the wood feels less cold.",
        markScheme: [
          "Both are at the same temperature | same temperature",
          "Metal is a better conductor than wood | metal conducts faster",
          "Metal conducts energy away from the hand quickly | energy flows from hand to metal",
          "So the hand cools faster and feels colder",
        ],
        commonError: "Saying the metal 'is colder' — it is at the same temperature; it just removes heat from your hand faster.",
        guideRef: "Conduction",
        difficulty: "core",
        hints: ["Are they actually at different temperatures?", "Which conducts energy away from your hand faster?", "What does 'feeling cold' actually depend on?"],
      },
      {
        id: "ht-qa-q02",
        question: "Describe how a convection current is set up when water is heated in a saucepan from below. (4 marks)",
        marks: 4,
        modelAnswer:
          "The water at the bottom is heated first and expands, becoming less dense. This warm, less-dense water rises to the top. Cooler, denser water from the top sinks to the bottom to replace it. This cooler water is then heated, expands and rises in turn. The repeating cycle of rising warm water and sinking cool water is a convection current, which heats all the water.",
        markScheme: [
          "Water at the bottom is heated and expands",
          "It becomes less dense | density decreases",
          "Warm less-dense water rises",
          "Cooler denser water sinks to replace it",
          "Cycle repeats forming a convection current",
        ],
        commonError: "Saying 'heat rises'. It is the warm, less-dense water that rises, carrying energy with it.",
        guideRef: "Convection",
        difficulty: "core",
        hints: ["Start with the water nearest the heat.", "What happens to its density?", "Trace what the cooler water does."],
        solutions: [
          {
            label: "Step-by-step convection cycle",
            steps: [
              "Bottom water heated → particles gain energy → water expands.",
              "Expansion lowers density (same mass, more volume).",
              "Less-dense water is pushed upward by the surrounding denser water.",
              "Cooler water sinks, is heated, and the loop repeats — a convection current.",
            ],
          },
        ],
      },
      {
        id: "ht-qa-q03",
        question: "A vacuum flask is designed to keep a hot drink hot. Explain how its design reduces heat loss by all three methods of heat transfer. (4 marks)",
        marks: 4,
        modelAnswer:
          "The vacuum between the double walls contains no particles, so it stops heat loss by conduction and by convection. The walls are silvered/shiny, which reflects infrared radiation back towards the drink and reduces radiation losses. The plastic stopper and case are insulators that conduct heat away only slowly, reducing conduction through the top.",
        markScheme: [
          "Vacuum has no particles | no particles in the gap",
          "Stops conduction and convection",
          "Silvered/shiny walls reflect (infrared) radiation back",
          "Insulating stopper/case reduces conduction",
        ],
        commonError: "Forgetting that the vacuum stops two methods (conduction AND convection), not just one.",
        guideRef: "Reducing unwanted heat transfer",
        difficulty: "core",
        hints: ["Deal with each method one at a time.", "What does a vacuum remove?", "What does a shiny surface do to radiation?"],
      },
      {
        id: "ht-qa-q04",
        question: "Solar hot-water panels are usually painted dull black and placed where sunlight falls on them. Explain why dull black is chosen, and suggest why the pipes carrying the heated water to the tank are wrapped in shiny insulation. (5 marks)",
        marks: 5,
        modelAnswer:
          "The panel needs to absorb as much infrared radiation from the Sun as possible. Dull black surfaces are the best absorbers of radiation, so painting the panel black maximises the energy absorbed and transferred to the water. The pipes, however, need to keep the heated water hot on its way to the tank. Wrapping them in shiny insulation reduces heat loss: the shiny surface is a poor emitter so it radiates little energy away, and the insulation reduces conduction. So black maximises absorption at the panel, while shiny minimises emission from the pipes.",
        markScheme: [
          "Panel must absorb radiation | absorb infrared from Sun",
          "Dull black is the best absorber",
          "Maximises energy transferred to the water",
          "Shiny surface is a poor emitter | reduces radiation loss from pipes",
          "Insulation reduces conduction loss",
        ],
        commonError: "Saying black 'attracts' heat. It absorbs infrared radiation well; it does not attract anything.",
        guideRef: "Radiation",
        difficulty: "challenge",
        hints: ["What is the panel's job — absorb or emit?", "Which surface absorbs radiation best?", "What is the pipe's job, and which surface emits least?"],
        strategy: "Match surface to its job",
      },
    ],
  },
  // questionBank omitted — auto-assembled from the quiz pools by lib/content.ts.
};
