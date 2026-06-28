import type { TopicExtras } from "../types";

// Engagement extras, keyed by topic id. Kept completely separate from the
// audited content in lib/topics/* so answer keys are never touched here.
// (The extras pass enriches these; interactives map to keys in EXPLORABLES_ALL.)

export const EXTRAS: Record<string, TopicExtras> = {
  ht: {
    hook: "A shiny silver teapot and a dull black one hold the same boiling water — but one keeps it hot far longer. Which, and why?",
    interactives: [],
    didYouKnow: [
      "Dull black surfaces are the best emitters AND best absorbers of infrared radiation, while shiny silver surfaces are the worst at both — which is why survival blankets are silver to reflect body heat back in.",
      "Heat moves through metals by conduction so well because metals contain free electrons that carry energy quickly; non-metals like wood and plastic have no free electrons, so they feel warmer to touch.",
      "Convection only happens in fluids (liquids and gases) because the particles must be free to move and carry energy as they rise — you cannot get convection in a solid.",
      "A vacuum flask keeps drinks hot or cold by defeating all three transfers at once: a vacuum stops conduction and convection, and silvered walls reflect radiation.",
    ],
    experiments: [
      {
        title: "The melting-ice race",
        youNeed: ["Two ice cubes of equal size", "A metal spoon or baking tray", "A wooden chopping board or thick book", "A timer"],
        steps: [
          "Place one ice cube on the metal surface and one on the wood at the same moment.",
          "Make sure both surfaces have been sitting at room temperature for a while first.",
          "Start the timer and watch which cube melts faster.",
          "Note the time each cube takes to fully melt.",
        ],
        theScience: "The ice on metal melts much faster. Metal is a far better conductor than wood because of its free electrons, so it transfers heat energy from the warm room into the ice quickly. The wood insulates the ice, slowing the heat flow.",
      },
      {
        title: "See convection currents",
        youNeed: ["A clear glass or jar of cold water", "A few drops of food colouring", "A small bottle or cup of warm water", "An eyedropper or straw"],
        steps: [
          "Mix a little food colouring into the warm water.",
          "Fill the clear glass with cold water and let it settle.",
          "Gently release a small amount of the warm coloured water at the bottom of the glass using the straw or dropper.",
          "Watch the coloured warm water rise and spread across the top.",
        ],
        theScience: "Warm water is less dense than cold water, so it floats upward — this is convection. As the warm water rises and cools, it eventually sinks again, forming a convection current, the same process that drives weather and heats a room.",
        safety: "Use warm tap water, not boiling water — ask an adult and never use water hot enough to scald.",
      },
    ],
  },
  wv: {
    hook: "Light from the Sun takes 8 minutes to reach you — but the sound of thunder crawls 1 km every 3 seconds. Why the huge difference?",
    interactives: ["wave", "refraction"],
    didYouKnow: [
      "Light travels about 300,000 km every second — nearly a million times faster than sound, which is why you see lightning before you hear thunder.",
      "Sound cannot travel through space because it needs particles to vibrate; space is a vacuum, so a real explosion in space would be completely silent.",
      "All waves obey the same equation, wave speed = frequency x wavelength, whether they are water ripples, sound, light, or radio waves.",
      "When light bends as it enters water (refraction), it makes a straw look broken and makes swimming pools look shallower than they really are.",
    ],
    experiments: [
      {
        title: "The bending pencil",
        youNeed: ["A clear glass of water", "A pencil or straight straw"],
        steps: [
          "Fill the glass about three-quarters full with water.",
          "Stand the pencil in the glass so part of it is above the water.",
          "Look at the pencil from the side, slightly above the water line.",
          "Move your viewpoint and watch the pencil appear bent or broken at the surface.",
        ],
        theScience: "Light travels slower in water than in air, so light rays from the underwater part of the pencil change direction (refract) as they leave the water. Your brain assumes light travelled in a straight line, so the pencil looks bent.",
      },
      {
        title: "See sound make things move",
        youNeed: ["A metal bowl or a speaker", "Cling film or a balloon stretched over a bowl", "A few grains of rice or sugar"],
        steps: [
          "Stretch cling film or a cut balloon tightly over the top of a bowl.",
          "Sprinkle a few grains of rice on top of the stretched surface.",
          "Hold a phone playing loud music or bang a pan close to the bowl.",
          "Watch the rice grains jump and dance.",
        ],
        theScience: "Sound is a longitudinal wave: it travels as vibrations of air particles. These vibrations make the stretched film vibrate too, and the moving surface throws the rice grains up — showing that sound carries energy.",
        safety: "Keep the volume sensible to protect your hearing — never put loud speakers right next to your ears.",
      },
    ],
  },
  fm: {
    hook: "Drop a hammer and a feather on the Moon and they land together. On Earth they don't. What's really going on?",
    interactives: ["motion", "force"],
    didYouKnow: [
      "On the airless Moon, Apollo 15 astronaut David Scott really did drop a hammer and a feather together in 1971 — and they hit the ground at exactly the same time.",
      "All objects on Earth accelerate downward at about 9.8 m/s2 when air resistance is ignored, regardless of their mass.",
      "Newton's first law means that in deep space, an object thrown will keep moving forever in a straight line because there is no friction or air resistance to slow it down.",
      "Your weight (a force in newtons) changes if you go to the Moon, but your mass (the amount of matter in kg) stays exactly the same.",
    ],
    experiments: [
      {
        title: "Coin and paper drop",
        youNeed: ["A coin", "A small piece of paper", "A book or flat surface"],
        steps: [
          "First drop the coin and a flat sheet of paper side by side and watch the coin win.",
          "Now scrunch the paper into a tight ball.",
          "Drop the coin and the paper ball together from the same height.",
          "Watch how much closer they now land in time.",
        ],
        theScience: "Both objects feel the same gravitational acceleration, but the flat paper has a large surface area and feels lots of air resistance, slowing it. Scrunching it reduces air resistance, so it falls almost as fast as the coin — proving mass is not what made the difference.",
      },
      {
        title: "Inertia and the card flick",
        youNeed: ["A smooth glass or cup", "A playing card or stiff cardboard", "A coin"],
        steps: [
          "Balance the card flat across the top of the empty glass.",
          "Place the coin in the centre of the card.",
          "Flick the card sharply and horizontally with your finger.",
          "Watch the coin drop straight into the glass instead of flying off.",
        ],
        theScience: "This shows Newton's first law (inertia). The fast flick acts on the card but barely on the coin, so the coin stays nearly still. Once the card is gone, gravity pulls the coin straight down into the glass.",
      },
    ],
  },
  ce: {
    hook: "Flick a switch and the light comes on instantly — yet the electrons in the wire drift slower than a snail. How?",
    interactives: ["ohms-law"],
    didYouKnow: [
      "Although individual electrons drift along a wire slower than a walking pace, the electrical signal (the push that makes them all move) travels at close to the speed of light, so lights turn on instantly.",
      "Ohm's law states that current = voltage divided by resistance; doubling the voltage across a fixed resistor doubles the current through it.",
      "In a series circuit the current is the same everywhere, but in a parallel circuit the current splits between the branches.",
      "A fuse is a deliberately weak link: if too much current flows, the thin wire inside heats up and melts, breaking the circuit before a fire can start.",
    ],
    experiments: [
      {
        title: "Lemon (or potato) battery",
        youNeed: ["A lemon or potato", "A galvanised (zinc-coated) nail", "A copper coin or copper wire", "A small LED or a multimeter if you have one"],
        steps: [
          "Roll and squeeze the lemon gently to release the juice inside.",
          "Push the zinc nail into one side and the copper into the other, without letting them touch.",
          "Connect the copper to the long leg of the LED and the zinc to the short leg.",
          "Look for a faint glow, or use a multimeter to read the small voltage.",
        ],
        theScience: "The acidic juice acts as an electrolyte. A chemical reaction frees electrons at the zinc and pulls them at the copper, creating a small voltage (potential difference) that pushes a tiny current through the circuit. One fruit gives only a fraction of a volt, so several in series may be needed.",
      },
      {
        title: "Test what conducts electricity",
        youNeed: ["A battery (e.g. AA)", "Two pieces of wire", "A small bulb or LED", "Everyday objects: coin, plastic ruler, paperclip, rubber band, aluminium foil"],
        steps: [
          "Build a simple circuit with the battery, wires and bulb, leaving a gap.",
          "Touch each test object across the gap to complete the circuit.",
          "Note which objects make the bulb light up.",
          "Sort your objects into conductors and insulators.",
        ],
        theScience: "Conductors like metals contain free electrons that can carry current, so the bulb lights. Insulators like plastic and rubber hold their electrons tightly, so no current flows and the bulb stays dark.",
        safety: "Only ever use a small battery — ask an adult and never connect anything to mains electricity.",
      },
    ],
  },
  wep: {
    hook: "A roller-coaster has no engine on the track — so where does all that speed come from at the bottom of the first drop?",
    interactives: ["energy"],
    didYouKnow: [
      "Energy cannot be created or destroyed, only transferred — a roller-coaster simply swaps gravitational potential energy for kinetic energy as it drops.",
      "Power measures how fast energy is transferred: a 100 W bulb uses 100 joules of energy every second.",
      "Doing work means transferring energy by a force; lifting a 1 kg bag of sugar one metre takes about 10 joules of work.",
      "No machine is 100% efficient — some energy is always wasted, usually as heat from friction, which is why a phone gets warm while charging.",
    ],
    experiments: [
      {
        title: "Marble roller-coaster",
        youNeed: ["Foam pipe insulation cut in half lengthways, or flexible cardboard track", "A marble", "Books or boxes to set heights", "Tape"],
        steps: [
          "Tape one end of the track high up on a stack of books to make a drop.",
          "Curve the rest of the track along the floor, adding a small hill if you can.",
          "Release the marble from the top without pushing it.",
          "Try different starting heights and see how far or fast the marble goes.",
        ],
        theScience: "At the top the marble has gravitational potential energy. As it rolls down, this transfers into kinetic energy, so it speeds up. A higher start means more potential energy and so more speed — the same idea that powers a real roller-coaster with no engine on the track.",
      },
      {
        title: "Measure your own power",
        youNeed: ["A staircase", "Bathroom scales", "A tape measure", "A stopwatch (phone)"],
        steps: [
          "Weigh yourself in kg and work out your weight in newtons (multiply by about 10).",
          "Measure the total vertical height of the staircase.",
          "Run up the stairs safely while a friend times you.",
          "Work out work done (weight x height) and divide by your time to get power in watts.",
        ],
        theScience: "Climbing stairs does work against gravity equal to your weight times the height gained. Power is work done divided by time, so running up faster gives more power — many people can briefly produce several hundred watts, more than a bright light bulb.",
        safety: "Run up the stairs carefully and hold the handrail — ask an adult and do not do this if the steps are slippery.",
      },
    ],
  },
  fs: {
    hook: "Stretch a spring twice as far and it pulls back twice as hard — until, suddenly, it doesn't. What changed?",
    interactives: [],
    didYouKnow: [
      "Hooke's law says the extension of a spring is proportional to the force applied — but only up to the limit of proportionality, after which the spring stops springing back evenly.",
      "If you stretch a spring too far it passes its elastic limit and stays permanently deformed, no longer returning to its original length.",
      "A moment (turning effect) equals force times the perpendicular distance from the pivot, which is why a long spanner loosens a tight bolt far more easily than a short one.",
      "An object balances when the total clockwise moments equal the total anticlockwise moments — the principle behind a see-saw and a weighing balance.",
    ],
    experiments: [
      {
        title: "Build a stretch tester (Hooke's law)",
        youNeed: ["An elastic band or a soft spring", "A paperclip hook", "Identical coins as weights", "A ruler", "Tape"],
        steps: [
          "Hang the elastic band from a fixed point and tape a ruler beside it.",
          "Attach a small bag or hook to the bottom and note the starting position.",
          "Add coins one at a time, recording the new length each time.",
          "Plot the number of coins against the extension and look at the shape.",
        ],
        theScience: "At first the extension is proportional to the load, giving a straight-line graph — this is Hooke's law. Each equal weight adds the same extra stretch. Eventually the line curves as the band passes its limit of proportionality and stops obeying the rule.",
      },
      {
        title: "Balance a ruler see-saw (moments)",
        youNeed: ["A ruler", "A round pencil as a pivot", "Identical coins"],
        steps: [
          "Balance the ruler across the pencil so it sits level with nothing on it.",
          "Place a stack of coins on one side, some distance from the pivot.",
          "Add coins to the other side and slide them until the ruler balances again.",
          "Compare the force (number of coins) and distance on each side.",
        ],
        theScience: "The ruler balances when the clockwise moment equals the anticlockwise moment. A small force far from the pivot can balance a large force close to it, because moment = force x distance — exactly how a crowbar gives you mechanical advantage.",
      },
    ],
  },
  rp: {
    hook: "Some atoms are ticking clocks: we can date a 5000-year-old mummy from the carbon in its bones. How?",
    interactives: ["half-life"],
    didYouKnow: [
      "Half-life is the time for half of the radioactive atoms in a sample to decay — but you can never predict which individual atom will decay next, only the average behaviour of huge numbers.",
      "Carbon-14 has a half-life of about 5,730 years, which is why it is perfect for dating things that were once alive, like wood, bone and cloth.",
      "Atoms of the same element with different numbers of neutrons are called isotopes; some are stable and some are radioactive.",
      "There are three main types of nuclear radiation: alpha (stopped by paper), beta (stopped by aluminium) and gamma (needs thick lead or concrete).",
    ],
    experiments: [
      {
        title: "Dice decay model of half-life",
        youNeed: ["A large handful of dice (or coins)", "A cup to shake them", "Paper to record results"],
        steps: [
          "Count your dice and write the total down — this is your starting number of atoms.",
          "Roll them all and remove every die showing a six (these atoms have decayed).",
          "Count and record the dice that remain, then roll again.",
          "Repeat until almost none are left, then plot remaining dice against the number of rolls.",
        ],
        theScience: "Each die has a fixed chance of decaying every roll, just like a real radioactive atom. You cannot predict which die decays, but on average about one sixth disappear each roll, producing the same smooth decay curve as real radioactivity. The number of rolls to halve the pile models the half-life.",
      },
      {
        title: "Coin-flip half-life",
        youNeed: ["About 50 coins", "A tray or box with a lid", "Paper to record results"],
        steps: [
          "Put all the coins in the box and record how many you have.",
          "Shake the box and tip the coins out.",
          "Remove every coin showing tails — these have decayed.",
          "Count the heads remaining, return only those to the box, and repeat until few are left.",
        ],
        theScience: "Each coin has a one-in-two chance of decaying each shake, so roughly half disappear every round. This means one shake is about one half-life. The decay is random for any single coin but very predictable for the whole group — the key idea behind radioactive decay.",
      },
    ],
  },
  slg: {
    hook: "Squeeze a sealed syringe of air and it pushes back; do the same with water and it barely budges. Why?",
    interactives: ["density", "gas"],
    didYouKnow: [
      "Gases are easy to compress because their particles are spread far apart with lots of empty space, while liquid and solid particles are already packed closely together.",
      "Density is mass divided by volume, which is why a heavy steel ship floats: its overall shape includes air, making its average density less than water.",
      "When you heat a gas in a sealed container the particles move faster and hit the walls harder and more often, so the pressure rises.",
      "Water is unusual: it expands when it freezes, which is why ice floats and why pipes can burst in winter.",
    ],
    experiments: [
      {
        title: "Compressing air vs water",
        youNeed: ["A syringe with no needle", "Your finger to seal the tip", "Water"],
        steps: [
          "Pull air into the syringe, then seal the tip with your finger.",
          "Push the plunger and feel how far it moves and how it springs back.",
          "Now fill the syringe with water and seal the tip again.",
          "Try to push the plunger and compare how much it moves.",
        ],
        theScience: "Air compresses easily because its particles have large gaps between them that can be squeezed closer. Water barely compresses because its particles are already touching, so there is almost no empty space to remove.",
      },
      {
        title: "Float and sink density test",
        youNeed: ["A tall glass of water", "Small items: grape, ice cube, coin, cork, candle wax, plastic lid"],
        steps: [
          "Fill the glass with water and let it settle.",
          "Drop each item in one at a time and watch whether it floats or sinks.",
          "Sort items into floaters and sinkers.",
          "For a bonus, stir in lots of salt and retest the grape.",
        ],
        theScience: "An object floats if its average density is less than the water's, and sinks if it is denser. Adding salt makes the water denser, so objects that previously sank, like a grape, can now float — the same reason it is easier to float in the salty Dead Sea.",
      },
    ],
  },
  em: {
    hook: "Every power station and every phone charger relies on one discovery: move a magnet near a wire and electricity appears. Let's see why.",
    interactives: ["transformer"],
    didYouKnow: [
      "Moving a magnet near a coil of wire generates a voltage — this is electromagnetic induction, discovered by Michael Faraday and used in every power station today.",
      "An electric current flowing through a wire creates a magnetic field around it; coil the wire up and you get an electromagnet you can switch on and off.",
      "A motor turns electrical energy into movement, and a generator does the exact reverse, turning movement into electricity — they are basically the same device run backwards.",
      "Transformers can only work with alternating current, because they rely on a constantly changing magnetic field to induce a voltage in the second coil.",
    ],
    experiments: [
      {
        title: "Make an electromagnet",
        youNeed: ["A large iron nail", "About a metre of insulated copper wire", "An AA or AAA battery", "Steel paperclips or pins"],
        steps: [
          "Wrap the wire tightly around the nail many times, leaving two bare ends.",
          "Connect the two ends of the wire to the battery terminals.",
          "Hold the nail near the paperclips and watch it pick them up.",
          "Disconnect the battery and see the paperclips drop off.",
        ],
        theScience: "A current flowing through the coiled wire creates a magnetic field, and the iron nail concentrates and strengthens it, making a temporary magnet. More coils or a bigger current give a stronger magnet — and switching the current off removes the magnetism instantly.",
        safety: "The wire and battery can get warm, so disconnect between tries — ask an adult and only ever use a small battery, never mains electricity.",
      },
      {
        title: "Spin a simple compass and current detector",
        youNeed: ["A magnetic compass", "Insulated wire", "An AA battery"],
        steps: [
          "Lay the compass flat and let the needle settle pointing north.",
          "Run a length of wire straight over the top of the compass, lined up with the needle.",
          "Briefly touch the wire ends to the battery to send a current through it.",
          "Watch the compass needle swing as the current flows.",
        ],
        theScience: "An electric current produces its own magnetic field around the wire. This field pushes the compass needle away from north, proving electricity and magnetism are linked — the original 1820 discovery by Oersted that started electromagnetism.",
        safety: "Only touch the wire to the battery for a second or two as it can warm up — ask an adult and never use mains electricity.",
      },
    ],
  },
  ge: {
    hook: "The electricity in your plug was made less than a second ago, possibly 300 km away. How does it get to you at exactly the right voltage?",
    interactives: ["transformer"],
    didYouKnow: [
      "The National Grid sends electricity at very high voltages (up to 400,000 V) because higher voltage means lower current, which wastes far less energy as heat in the cables.",
      "Step-up transformers raise the voltage for transmission, and step-down transformers lower it again to a safe 230 V before it reaches your home.",
      "Most power stations, whether they burn gas, use nuclear fuel, or harness wind, ultimately do the same job: spin a generator to induce electricity.",
      "Renewable sources like wind and solar produce no carbon dioxide while generating, but they are intermittent — they only work when the wind blows or the Sun shines.",
    ],
    experiments: [
      {
        title: "Build a paper pinwheel turbine",
        youNeed: ["A square of paper or thin card", "A pin or thumb tack", "A pencil with an eraser", "A hairdryer or a fan"],
        steps: [
          "Cut from each corner of the square almost to the centre and fold alternate points inward.",
          "Pin the folded points through the centre into the pencil eraser so it can spin freely.",
          "Hold it up in front of a fan or hairdryer on the cool setting.",
          "Watch how the speed changes as you move it closer or further from the air flow.",
        ],
        theScience: "Moving air carries kinetic energy. The angled blades catch this air and turn it into rotation, exactly like a wind turbine. A real turbine connects this spinning motion to a generator, where electromagnetic induction produces electricity.",
        safety: "Use the cool setting on a hairdryer and keep fingers away from any fan blades — ask an adult.",
      },
      {
        title: "Solar warming comparison",
        youNeed: ["Two identical glasses of water", "Black paper", "White paper", "A sunny windowsill", "A thermometer if you have one"],
        steps: [
          "Wrap one glass in black paper and the other in white paper.",
          "Fill both with the same amount of room-temperature water.",
          "Leave them side by side in bright sunlight for an hour.",
          "Compare how warm the water feels, or measure the temperatures.",
        ],
        theScience: "The black wrapping absorbs much more of the Sun's radiation than the white, so its water heats up faster. Solar power stations use this idea, concentrating sunlight on dark surfaces or panels to capture energy from the Sun.",
      },
    ],
  },
  ast: {
    hook: "Every atom in your body heavier than hydrogen was forged inside a star that died billions of years ago. Let's explore the cosmos.",
    interactives: ["orbit"],
    didYouKnow: [
      "The elements in your body, such as the carbon and oxygen, were made by nuclear fusion inside stars, so you really are made of stardust.",
      "Gravity keeps planets in orbit: a planet is constantly 'falling' toward the Sun but moving sideways fast enough that it keeps missing.",
      "The light from distant galaxies is stretched to redder wavelengths (redshift), which is the key evidence that the Universe is expanding.",
      "Our Sun is a fairly average star, but it is so far away that its light still takes about 8 minutes to reach Earth.",
    ],
    experiments: [
      {
        title: "Balloon model of the expanding Universe",
        youNeed: ["A balloon", "A marker pen"],
        steps: [
          "Blow the balloon up just a little and tie it loosely or pinch it shut.",
          "Draw several dots on the surface to represent galaxies.",
          "Slowly blow the balloon up bigger.",
          "Watch how every dot moves away from every other dot.",
        ],
        theScience: "As the balloon's surface stretches, all the dots get further apart, and dots that start further away separate faster. This models how space itself expands, making every galaxy recede from us — the observation that led to the Big Bang theory.",
      },
      {
        title: "Swing an orbit",
        youNeed: ["A small soft ball or beanbag in a sock", "A length of string", "Open space outdoors"],
        steps: [
          "Tie the ball securely inside a sock to the end of the string.",
          "In a clear open space, whirl it gently in a horizontal circle above your head.",
          "Feel the inward pull you must apply through the string to keep it circling.",
          "Let go (pointing away from people) and watch it fly off in a straight line.",
        ],
        theScience: "The inward pull through the string is the centripetal force that keeps the ball moving in a circle, just as gravity keeps a planet orbiting the Sun. When the string is released the force vanishes and the ball travels in a straight line, showing why an orbit needs a constant inward force.",
        safety: "Only do this outdoors in a wide open space well away from people, windows and animals — ask an adult.",
      },
    ],
  },
};
