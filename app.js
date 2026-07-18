// ==========================================================================
// VOCABULARY DATASET
// ==========================================================================
const vocabularyData = [
    // Day 1 Words
    {
        word: "ATTENTIVE",
        pos: "adjective",
        definition: "Paying close attention to something; alert, watchful, and observant.",
        synonyms: ["observant", "mindful", "vigilant", "alert"],
        example: "The attentive student took detailed notes and noticed the small mistake on the board.",
        type: "error",
        day: 1,
        pitfall: "Don't confuse <strong>attentive</strong> with <strong>hardworking</strong>. While a hardworking person puts in effort, being attentive specifically means watching or listening carefully (observant)."
    },
    {
        word: "EMULATE",
        pos: "verb",
        definition: "To try to equal or excel someone or something, typically through imitation.",
        synonyms: ["imitate", "copy", "mirror", "mimic"],
        example: "The young basketball player tried to emulate his favorite player's shooting technique.",
        type: "error",
        day: 1,
        pitfall: "Don't confuse <strong>emulate</strong> with <strong>innovate</strong>. To innovate means to create something new, whereas to emulate means to copy or match something that already exists."
    },
    {
        word: "PROVOKE",
        pos: "verb",
        definition: "To anger, annoy, or stimulate a strong reaction in someone.",
        synonyms: ["annoy", "anger", "instigate", "irritate"],
        example: "She tried not to provoke her brother while he was doing his homework.",
        type: "error",
        day: 1,
        pitfall: "Don't confuse <strong>provoke</strong> with <strong>scold</strong>. Scolding is telling someone off after they do something wrong, whereas provoking is actively trying to make someone angry or trigger a reaction."
    },
    {
        word: "MEAGER",
        pos: "adjective",
        definition: "Lacking in quantity or quality; lean, thin, or very small in amount.",
        synonyms: ["limited", "scarce", "scanty", "deficient"],
        example: "The hikers had to survive on a meager food supply during their last two days on the trail.",
        type: "error",
        day: 1,
        pitfall: "Don't confuse <strong>meager</strong> with <strong>enthusiastic</strong>. Enthusiastic means showing great excitement, while meager refers to something that is very small or limited in size or amount."
    },
    {
        word: "CONTRACT",
        pos: "noun / verb",
        definition: "A formal and legally binding agreement between two or more parties.",
        synonyms: ["agreement", "deal", "pact", "treaty"],
        example: "The actor signed a contract to star in three upcoming movies.",
        type: "error",
        day: 1,
        pitfall: "Don't confuse <strong>contract</strong> with <strong>statement</strong> or <strong>marriage</strong>. While a contract can be used in marriage, its base definition is simply a binding agreement."
    },
    {
        word: "PORTABLE",
        pos: "adjective",
        definition: "Able to be easily carried or moved, light, and convenient.",
        synonyms: ["movable", "transportable", "lightweight"],
        example: "The benefit of a laptop over a desktop computer is that it is highly portable.",
        type: "error",
        day: 1,
        pitfall: "Don't confuse <strong>portable</strong> with <strong>efficient</strong>. Efficient means working well without wasting time or energy. Portable means easy to move or carry from place to place."
    },
    {
        word: "RESEMBLE",
        pos: "verb",
        definition: "To have a likeness to or look similar to someone or something else.",
        synonyms: ["look like", "mirror", "favor"],
        example: "The young boy resembled his father so much that friends often got their names mixed up.",
        type: "error",
        day: 1,
        pitfall: "Don't confuse <strong>resemble</strong> with <strong>love</strong> or <strong>admire</strong>. You can resemble someone you've never met simply because you look like them. It is about appearance, not feelings."
    },
    {
        word: "IRRITATED",
        pos: "adjective",
        definition: "Feeling or showing annoyance, impatience, or slight anger.",
        synonyms: ["annoyed", "bothered", "vexed", "peeved"],
        example: "The teacher grew irritated when the student ignored her repeated requests to stop tapping his pen.",
        type: "error",
        day: 1,
        pitfall: "Don't confuse <strong>irritated</strong> with <strong>violent</strong>. Being irritated is a mild feeling of annoyance, while being violent involves physical force or aggression."
    },
    {
        word: "ASTONISHING",
        pos: "adjective",
        definition: "Extremely surprising, impressive, or amazing.",
        synonyms: ["surprising", "astounding", "breathtaking", "amazing"],
        example: "The magician performed an astonishing card trick that left everyone speechless.",
        type: "struggle",
        day: 1,
        pitfall: "Don't confuse <strong>astonishing</strong> with <strong>exciting</strong>. While something astonishing can be exciting, astonishing specifically means it causes great surprise or disbelief (surprising)."
    },
    {
        word: "GRATITUDE",
        pos: "noun",
        definition: "The quality of being thankful; readiness to show appreciation.",
        synonyms: ["appreciation", "thankfulness", "gratefulness"],
        example: "He expressed his deep gratitude to his neighbors for helping clear the fallen tree.",
        type: "struggle",
        day: 1,
        pitfall: "Don't confuse <strong>gratitude</strong> with <strong>luck</strong>. Luck is success brought by chance, while gratitude is the feeling of thankfulness you show to others."
    },
    {
        word: "TIMID",
        pos: "adjective",
        definition: "Showing a lack of courage or confidence; easily frightened; shy.",
        synonyms: ["shy", "bashful", "fearful", "apprehensive"],
        example: "The timid puppy hid behind its owner's legs when the guests arrived.",
        type: "struggle",
        day: 1,
        pitfall: "Don't confuse <strong>timid</strong> with <strong>nerdy</strong> or <strong>talkative</strong>. Timid means shy and easily scared. A talkative person speaks a lot, and a nerdy person is highly studious—neither means shy."
    },
    {
        word: "TEMPORARY",
        pos: "adjective",
        definition: "Lasting, existing, or serving for a limited time only; not permanent.",
        synonyms: ["short-term", "brief", "transient", "fleeting"],
        example: "The braces were only temporary, and she looked forward to having them off by graduation.",
        type: "struggle",
        day: 1,
        pitfall: "Don't confuse <strong>temporary</strong> with <strong>painless</strong> or <strong>mandatory</strong>. Braces can be painful and mandatory (required), but the fact that they will be removed makes them temporary."
    },
    {
        word: "PRACTICAL",
        pos: "adjective",
        definition: "Suitable for actual use; sensible, realistic, and useful.",
        synonyms: ["sensible", "realistic", "functional", "useful"],
        example: "Although the design looked futuristic, it was not practical for everyday use.",
        type: "struggle",
        day: 1,
        pitfall: "Make sure to select the option that matches the spelling in the choices. Don't invent your own options (like writing a handwritten E option)!"
    },

    // Day 2 Words
    {
        word: "EXILE",
        pos: "noun / verb",
        definition: "The state of being barred from one's native country; to banish someone.",
        synonyms: ["banish", "deport", "expel", "eject"],
        example: "The king decided to exile the rebel leader to a distant island.",
        type: "error",
        day: 2,
        pitfall: "Don't confuse <strong>exile</strong> with <strong>imprison</strong>. Imprisoning means locking someone up in a local jail, while exile means forcing them to leave their country completely."
    },
    {
        word: "INDIFFERENT",
        pos: "adjective",
        definition: "Having no particular interest, sympathy, or concern; uncaring.",
        synonyms: ["unconcerned", "disinterested", "detached", "uncaring"],
        example: "She was indifferent to the choice of restaurant and told her friends to pick whatever they liked.",
        type: "error",
        day: 2,
        pitfall: "Don't confuse <strong>indifferent</strong> with <strong>emotional</strong>. Indifferent means showing no care or feelings at all, which is the opposite of being emotional."
    },
    {
        word: "DESPAIR",
        pos: "noun / verb",
        definition: "The complete loss or absence of hope.",
        synonyms: ["hopelessness", "distress", "misery", "despondency"],
        example: "In a moment of despair, he felt like he would never find his way home.",
        type: "struggle",
        day: 2,
        pitfall: "Don't confuse <strong>despair</strong> with <strong>worry</strong>. Worry is anxiety about a future event, whereas despair is a deeper state of complete hopelessness."
    },
    {
        word: "TRIVIAL",
        pos: "adjective",
        definition: "Of little value, size, or importance; minor and inconsequential.",
        synonyms: ["inconsequential", "minor", "insignificant", "petty"],
        example: "They spent hours arguing over a trivial detail that did not affect the final project.",
        type: "struggle",
        day: 2,
        pitfall: "Don't confuse <strong>trivial</strong> with <strong>intelligent</strong>. Crucial is the opposite of trivial, and intelligent is unrelated. Trivial means minor or inconsequential."
    },
    {
        word: "TEDIOUS",
        pos: "adjective",
        definition: "Too long, slow, or dull; tiresome and boring.",
        synonyms: ["boring", "dull", "monotonous", "tiresome"],
        example: "Sorting through thousands of old files was a tedious task.",
        type: "struggle",
        day: 2,
        pitfall: "Don't confuse <strong>tedious</strong> with <strong>risky</strong>. Risky means dangerous, while tedious means slow and boring."
    },
    {
        word: "APPRENTICE",
        pos: "noun",
        definition: "A trainee who is learning a trade from a skilled master employer.",
        synonyms: ["trainee", "learner", "novice", "pupil"],
        example: "The young blacksmith worked as an apprentice to master the craft.",
        type: "struggle",
        day: 2,
        pitfall: "Don't confuse <strong>apprentice</strong> with <strong>teacher</strong> or <strong>master</strong>. A teacher is the one who instructs, whereas an apprentice is the student or trainee."
    },
    {
        word: "OPTIMISTIC",
        pos: "adjective",
        definition: "Hopeful and confident about the future or the success of something.",
        synonyms: ["hopeful", "positive", "confident", "cheerful"],
        example: "Despite the rain, she remained optimistic that the sun would come out.",
        type: "struggle",
        day: 2,
        pitfall: "Don't confuse <strong>optimistic</strong> with <strong>worried</strong>. Worried means anxious (the opposite of optimistic), while optimistic means hopeful."
    },

    // Day 3 Words
    {
        word: "INFERIOR",
        pos: "adjective",
        definition: "Lower in rank, status, or quality; not as good as something else.",
        synonyms: ["lesser", "lower", "substandard", "second-rate"],
        example: "Sam believed his laptop's features were inferior to those of his classmates.",
        type: "error",
        day: 3,
        pitfall: "Don't confuse <strong>inferior</strong> with <strong>similar</strong>. Similar means alike, while inferior specifically means worse or lower in quality. Watch for 'even though' clues — they signal a contrast."
    },
    {
        word: "FEEBLE",
        pos: "adjective",
        definition: "Lacking physical strength, especially as a result of age or illness; weak and frail.",
        synonyms: ["weak", "frail", "fragile", "delicate"],
        example: "After her hip surgery, Cindy's grandmother remained feeble despite the doctor clearing her to go home.",
        type: "error",
        day: 3,
        pitfall: "Don't confuse <strong>feeble</strong> with <strong>painful</strong>. Painful describes something that causes pain, while feeble describes someone who is physically weak and frail."
    },
    {
        word: "MORALS",
        pos: "noun",
        definition: "A person's standards of behavior or beliefs about what is right and wrong.",
        synonyms: ["ethics", "principles", "values", "standards"],
        example: "Catie refused to sneak out with her friends because it was against her morals.",
        type: "error",
        day: 3,
        pitfall: "Don't confuse <strong>morals</strong> with <strong>desires</strong> or <strong>intentions</strong>. Desires are what you want; intentions are what you plan to do. Morals are your ethical principles about right and wrong."
    },
    {
        word: "REINFORCEMENT",
        pos: "noun",
        definition: "The process of encouraging or strengthening a behavior, idea, or pattern.",
        synonyms: ["support", "strengthening", "encouragement", "backing"],
        example: "It is difficult to change behaviors of children without continuous reinforcement.",
        type: "struggle",
        day: 3,
        pitfall: "Don't confuse <strong>reinforcement</strong> with <strong>obedience</strong> or <strong>anger</strong>. Obedience is following rules; anger is emotion. Reinforcement is a process of strengthening or encouraging a behavior over time."
    },

    // Day 4 Words
    {
        word: "BLATANT",
        pos: "adjective",
        definition: "Done openly and unashamedly; completely obvious and glaring.",
        synonyms: ["obvious", "flagrant", "glaring", "overt"],
        example: "His blatant lie was easy to spot because everyone knew the truth.",
        type: "error",
        day: 4,
        pitfall: "Don't confuse <strong>blatant</strong> with <strong>intentional</strong> or <strong>offensive</strong>. Intentional means done on purpose; blatant specifically means extremely obvious and undisguised."
    },
    {
        word: "IMPULSIVE",
        pos: "adjective",
        definition: "Acting or done quickly without thought or care for the consequences.",
        synonyms: ["spontaneous", "hasty", "rash", "reckless"],
        example: "Without thinking, he made an impulsive decision to buy the expensive gadget.",
        type: "error",
        day: 4,
        pitfall: "Don't confuse <strong>impulsive</strong> with <strong>aggressive</strong> or <strong>foolish</strong>. Aggressive means hostile; impulsive means acting suddenly on instinct without planning ahead."
    },
    {
        word: "ATROCIOUS",
        pos: "adjective",
        definition: "Extremely bad, unpleasant, or shocking; horrifyingly wicked.",
        synonyms: ["horrible", "dreadful", "terrible", "awful"],
        example: "The weather during their camping trip was atrocious, with nonstop freezing rain.",
        type: "error",
        day: 4,
        pitfall: "Don't confuse <strong>atrocious</strong> with <strong>amazing</strong>! Amazing means wonderful, while atrocious is the complete opposite — meaning terrible or dreadful."
    },
    {
        word: "ABSURD",
        pos: "adjective",
        definition: "Wildly unreasonable, illogical, or inappropriate; completely ridiculous.",
        synonyms: ["ridiculous", "preposterous", "foolish", "senseless"],
        example: "The idea that pigs could fly was completely absurd to everyone.",
        type: "error",
        day: 4,
        pitfall: "Don't confuse <strong>absurd</strong> with <strong>loud</strong> or <strong>confident</strong>. Loud refers to sound; absurd means silly, ridiculous, and lacking logic."
    },
    {
        word: "PEDESTRIAN",
        pos: "adjective",
        definition: "Lacking inspiration, excitement, or imagination; dull and ordinary.",
        synonyms: ["commonplace", "ordinary", "dull", "uninspired"],
        example: "The critic described the movie's plot as pedestrian and predictable.",
        type: "error",
        day: 4,
        pitfall: "Don't confuse <strong>pedestrian</strong> with <strong>professional</strong> or <strong>unusual</strong>. When used as an adjective, pedestrian means plain, ordinary, and commonplace."
    },
    {
        word: "JUVENILE",
        pos: "adjective",
        definition: "Relating to young people; childish or immature in behavior.",
        synonyms: ["youthful", "childish", "young", "immature"],
        example: "His juvenile jokes made his older sister roll her eyes in annoyance.",
        type: "error",
        day: 4,
        pitfall: "Don't confuse <strong>juvenile</strong> with <strong>criminal</strong> or <strong>mature</strong>. Juvenile simply means youthful or characteristic of young people."
    },
    {
        word: "IMMENSE",
        pos: "adjective",
        definition: "Extremely large or great, especially in scale, size, or degree.",
        synonyms: ["huge", "massive", "enormous", "gigantic"],
        example: "The castle stood on top of an immense mountain overlooking the entire valley.",
        type: "error",
        day: 4,
        pitfall: "Don't confuse <strong>immense</strong> with <strong>unbearable</strong> or <strong>intense</strong>. Immense specifically refers to giant size or huge scale."
    },
    {
        word: "JUBILEE",
        pos: "noun",
        definition: "A special anniversary of an event, especially one celebrating a major milestone.",
        synonyms: ["celebration", "anniversary", "festival", "gala"],
        example: "The city held a grand jubilee to celebrate its 100th year of founding.",
        type: "error",
        day: 4,
        pitfall: "Don't confuse <strong>jubilee</strong> with <strong>invitation</strong> or <strong>expectation</strong>. A jubilee is the joyful celebration or special anniversary event itself."
    },
    {
        word: "SUBJECTIVE",
        pos: "adjective",
        definition: "Based on or influenced by personal feelings, tastes, or opinions rather than facts.",
        synonyms: ["biased", "personal", "individual", "partial"],
        example: "Art appreciation is completely subjective; what one person loves, another might dislike.",
        type: "struggle",
        day: 4,
        pitfall: "Don't confuse <strong>subjective</strong> with <strong>neutral</strong> or <strong>disinterested</strong>. Objective means neutral/unbiased; subjective means based on personal feelings and opinions (biased)."
    }
];

// ==========================================================================
// SENTENCE CHALLENGE QUESTIONS DATASET
// ==========================================================================
const sentenceQuestions = [
    // ==================== DAY 1 QUESTIONS ====================
    // ATTENTIVE
    {
        sentence: "The <span class='sentence-blank'>_______</span> student sat in the front row, taking notes on everything the teacher said.",
        options: ["timid", "attentive", "meager", "temporary"],
        correctIndex: 1,
        word: "ATTENTIVE",
        day: 1,
        explanation: "An <strong>attentive</strong> student is one who pays close attention and is observant, which fits perfectly with sitting in the front row and taking notes on everything."
    },
    {
        sentence: "A good lifeguard must remain <span class='sentence-blank'>_______</span> at all times to ensure the safety of everyone in the pool.",
        options: ["attentive", "temporary", "practical", "portable"],
        correctIndex: 0,
        word: "ATTENTIVE",
        day: 1,
        explanation: "A lifeguard must remain watchful and alert, which is the definition of being <strong>attentive</strong>."
    },
    {
        sentence: "The surgeon was extremely <span class='sentence-blank'>_______</span> during the delicate procedure, focusing on every tiny detail.",
        options: ["astonishing", "meager", "attentive", "timid"],
        correctIndex: 2,
        word: "ATTENTIVE",
        day: 1,
        explanation: "Focusing on every tiny detail during a surgical procedure requires being highly alert and observant (<strong>attentive</strong>)."
    },
    // EMULATE
    {
        sentence: "Young writers often try to <span class='sentence-blank'>_______</span> the style of their favorite authors until they find their own voice.",
        options: ["provoke", "resemble", "emulate", "contract"],
        correctIndex: 2,
        word: "EMULATE",
        day: 1,
        explanation: "To <strong>emulate</strong> means to copy or imitate someone's style in order to match or excel them."
    },
    {
        sentence: "Hoping to <span class='sentence-blank'>_______</span> her older sister's academic success, Maya studied for two hours every evening.",
        options: ["emulate", "provoke", "resemble", "contract"],
        correctIndex: 0,
        word: "EMULATE",
        day: 1,
        explanation: "Studying hard to achieve the same success as someone else is trying to match or copy them, which is to <strong>emulate</strong>."
    },
    {
        sentence: "Many local businesses attempt to <span class='sentence-blank'>_______</span> the customer service practices of successful global companies.",
        options: ["provoke", "emulate", "resemble", "contract"],
        correctIndex: 1,
        word: "EMULATE",
        day: 1,
        explanation: "Attempting to match the successful customer service practices of another business is trying to <strong>emulate</strong> them."
    },
    // PROVOKE
    {
        sentence: "If you tease the dog while it is eating, you might <span class='sentence-blank'>_______</span> it to bite.",
        options: ["provoke", "emulate", "resemble", "contract"],
        correctIndex: 0,
        word: "PROVOKE",
        day: 1,
        explanation: "To <strong>provoke</strong> means to stir up, anger, or instigate a reaction. Teasing a dog can provoke it to bite."
    },
    {
        sentence: "The government’s new tax policy did not help the economy and served only to <span class='sentence-blank'>_______</span> angry protests across the city.",
        options: ["emulate", "provoke", "resemble", "contract"],
        correctIndex: 1,
        word: "PROVOKE",
        day: 1,
        explanation: "Causing or triggering angry protests is an example of <strong>provoking</strong> a reaction."
    },
    {
        sentence: "Making rude comments to your classmates will surely <span class='sentence-blank'>_______</span> an argument.",
        options: ["emulate", "resemble", "provoke", "contract"],
        correctIndex: 2,
        word: "PROVOKE",
        day: 1,
        explanation: "Making rude comments will instigate or trigger (<strong>provoke</strong>) an argument."
    },
    // MEAGER
    {
        sentence: "After weeks of drought, the farmers had only a <span class='sentence-blank'>_______</span> harvest of vegetables.",
        options: ["astonishing", "practical", "attentive", "meager"],
        correctIndex: 3,
        word: "MEAGER",
        day: 1,
        explanation: "A <strong>meager</strong> harvest means one that is very small, thin, or limited in amount, which directly results from a drought."
    },
    {
        sentence: "The stranded hikers had to survive on a <span class='sentence-blank'>_______</span> daily ration of one energy bar and a cup of water.",
        options: ["meager", "temporary", "portable", "practical"],
        correctIndex: 0,
        word: "MEAGER",
        day: 1,
        explanation: "A very small food supply (like one energy bar per day) is a <strong>meager</strong> ration."
    },
    {
        sentence: "Despite the company's huge profits, the employees received only a <span class='sentence-blank'>_______</span> salary increase of one percent.",
        options: ["practical", "attentive", "meager", "astonishing"],
        correctIndex: 2,
        word: "MEAGER",
        day: 1,
        explanation: "A salary increase of only one percent is extremely small and limited in amount, or <strong>meager</strong>."
    },
    // CONTRACT
    {
        sentence: "Before starting the construction project, the builder signed a legally binding <span class='sentence-blank'>_______</span> with the homeowner.",
        options: ["gratitude", "contract", "provoke", "emulate"],
        correctIndex: 1,
        word: "CONTRACT",
        day: 1,
        explanation: "A <strong>contract</strong> is a formal, legally binding agreement between parties."
    },
    {
        sentence: "The professional athlete negotiated a new five-year <span class='sentence-blank'>_______</span> with the team worth millions of dollars.",
        options: ["contract", "gratitude", "provoke", "temporary"],
        correctIndex: 0,
        word: "CONTRACT",
        day: 1,
        explanation: "Negotiating a formal multi-year agreement with a team is signing a sports <strong>contract</strong>."
    },
    {
        sentence: "Always read the fine print before signing any <span class='sentence-blank'>_______</span> to buy a car.",
        options: ["gratitude", "contract", "emulate", "provoke"],
        correctIndex: 1,
        word: "CONTRACT",
        day: 1,
        explanation: "Buying a car requires signing a formal purchase agreement, which is a legally binding <strong>contract</strong>."
    },
    // PORTABLE
    {
        sentence: "The compact camping stove is designed to be <span class='sentence-blank'>_______</span>, allowing hikers to easily pack it in their bags.",
        options: ["portable", "temporary", "practical", "meager"],
        correctIndex: 0,
        word: "PORTABLE",
        day: 1,
        explanation: "A compact stove that fits easily in a bag is easy to carry, which is the definition of <strong>portable</strong>."
    },
    {
        sentence: "Our school purchased a set of <span class='sentence-blank'>_______</span> keyboards so that students could practice music in any classroom.",
        options: ["temporary", "portable", "practical", "astonishing"],
        correctIndex: 1,
        word: "PORTABLE",
        day: 1,
        explanation: "Keyboards that can be moved from classroom to classroom easily are <strong>portable</strong>."
    },
    {
        sentence: "Early cell phones were heavy, but modern models are highly <span class='sentence-blank'>_______</span> and fit easily in a pocket.",
        options: ["practical", "temporary", "portable", "meager"],
        correctIndex: 2,
        word: "PORTABLE",
        day: 1,
        explanation: "Fitting easily in a pocket makes a device highly convenient to move or carry (<strong>portable</strong>)."
    },
    // RESEMBLE
    {
        sentence: "Although they are not related, the two puppies <span class='sentence-blank'>_______</span> each other so much that it is hard to tell them apart.",
        options: ["emulate", "provoke", "resemble", "contract"],
        correctIndex: 2,
        word: "RESEMBLE",
        day: 1,
        explanation: "To <strong>resemble</strong> means to look like or share a similar appearance with something else."
    },
    {
        sentence: "The architecture of the new museum was designed to <span class='sentence-blank'>_______</span> the shape of a blooming lotus flower.",
        options: ["resemble", "emulate", "provoke", "contract"],
        correctIndex: 0,
        word: "RESEMBLE",
        day: 1,
        explanation: "Being designed to look like a flower means the building was built to <strong>resemble</strong> it."
    },
    {
        sentence: "Children often <span class='sentence-blank'>_______</span> one or both of their parents in their facial features and gestures.",
        options: ["emulate", "resemble", "provoke", "contract"],
        correctIndex: 1,
        word: "RESEMBLE",
        day: 1,
        explanation: "Looking like or sharing physical features with your parents is to <strong>resemble</strong> them."
    },
    // IRRITATED
    {
        sentence: "The driver became <span class='sentence-blank'>_______</span> when he got stuck in bumper-to-bumper traffic for over an hour.",
        options: ["timid", "astonishing", "irritated", "attentive"],
        correctIndex: 2,
        word: "IRRITATED",
        day: 1,
        explanation: "Getting stuck in traffic for an hour causes annoyance and impatience (<strong>irritated</strong>)."
    },
    {
        sentence: "Sophie felt <span class='sentence-blank'>_______</span> when her younger brother kept interrupting her while she was on the phone.",
        options: ["irritated", "temporary", "practical", "meager"],
        correctIndex: 0,
        word: "IRRITATED",
        day: 1,
        explanation: "Being repeatedly interrupted causes annoyance, making her feel <strong>irritated</strong>."
    },
    {
        sentence: "The constant loud hum of the old air conditioner made everyone in the office feel <span class='sentence-blank'>_______</span>.",
        options: ["attentive", "astonished", "timid", "irritated"],
        correctIndex: 3,
        word: "IRRITATED",
        day: 1,
        explanation: "A constant loud hum is an annoying disturbance that makes people feel <strong>irritated</strong>."
    },
    // ASTONISHING
    {
        sentence: "The gymnast put on an <span class='sentence-blank'>_______</span> performance, landing three backflips in a row to win the gold medal.",
        options: ["astonishing", "meager", "temporary", "timid"],
        correctIndex: 0,
        word: "ASTONISHING",
        day: 1,
        explanation: "Landing three backflips in a row to win gold is an extremely surprising, impressive, or <strong>astonishing</strong> feat."
    },
    {
        sentence: "The discovery of ancient ruins beneath the busy city streets was an <span class='sentence-blank'>_______</span> event for archaeologists.",
        options: ["temporary", "practical", "astonishing", "meager"],
        correctIndex: 2,
        word: "ASTONISHING",
        day: 1,
        explanation: "Finding ancient ruins under a modern city is highly unexpected and surprising, or <strong>astonishing</strong>."
    },
    {
        sentence: "It is <span class='sentence-blank'>_______</span> how quickly the young child learned to speak three different languages fluently.",
        options: ["meager", "temporary", "astonishing", "timid"],
        correctIndex: 2,
        word: "ASTONISHING",
        day: 1,
        explanation: "Learning three languages fluently at a very young age is extremely impressive and surprising, or <strong>astonishing</strong>."
    },
    // GRATITUDE
    {
        sentence: "To express their <span class='sentence-blank'>_______</span>, the family sent a thank-you note and flowers to the doctor.",
        options: ["contract", "provoke", "resemble", "gratitude"],
        correctIndex: 3,
        word: "GRATITUDE",
        day: 1,
        explanation: "Sending a thank-you note and flowers is a classic way to express thankfulness (<strong>gratitude</strong>)."
    },
    {
        sentence: "The charity volunteers felt a deep sense of <span class='sentence-blank'>_______</span> when they saw the happy faces of the children.",
        options: ["gratitude", "emulate", "provoke", "temporary"],
        correctIndex: 0,
        word: "GRATITUDE",
        day: 1,
        explanation: "Seeing children's happiness made the volunteers feel thankful and appreciated, a sense of <strong>gratitude</strong>."
    },
    {
        sentence: "Writing in a daily journal can help you focus on positive things and cultivate <span class='sentence-blank'>_______</span>.",
        options: ["contract", "provoke", "resemble", "gratitude"],
        correctIndex: 3,
        word: "GRATITUDE",
        day: 1,
        explanation: "Focusing on positive events in a journal helps build thankfulness, or <strong>gratitude</strong>."
    },
    // TIMID
    {
        sentence: "The <span class='sentence-blank'>_______</span> kitten hesitated to leave the safety of its box to explore the new room.",
        options: ["attentive", "timid", "irritated", "practical"],
        correctIndex: 1,
        word: "TIMID",
        day: 1,
        explanation: "A kitten that is fearful and hesitates to leave its box is being shy or <strong>timid</strong>."
    },
    {
        sentence: "Unlike his loud and outgoing brother, Arthur was a <span class='sentence-blank'>_______</span> child who spoke in a quiet whisper.",
        options: ["timid", "astonishing", "meager", "temporary"],
        correctIndex: 0,
        word: "TIMID",
        day: 1,
        explanation: "Speaking in a quiet whisper and being quiet suggests a lack of confidence or shyness, which is being <strong>timid</strong>."
    },
    {
        sentence: "The deer stood still for a moment, but being a <span class='sentence-blank'>_______</span> creature, it quickly bolted when we stepped on a twig.",
        options: ["attentive", "timid", "irritated", "practical"],
        correctIndex: 1,
        word: "TIMID",
        day: 1,
        explanation: "Deer are easily frightened and shy creatures, making them <strong>timid</strong>."
    },
    // TEMPORARY
    {
        sentence: "The artist used wash-off chalk to create a <span class='sentence-blank'>_______</span> mural on the sidewalk that would disappear with the next rain.",
        options: ["portable", "meager", "practical", "temporary"],
        correctIndex: 3,
        word: "TEMPORARY",
        day: 1,
        explanation: "A chalk mural that washes away with rain is not permanent, it is <strong>temporary</strong>."
    },
    {
        sentence: "When the power went out, we set up <span class='sentence-blank'>_______</span> lanterns until the main electricity was restored.",
        options: ["temporary", "attentive", "practical", "portable"],
        correctIndex: 0,
        word: "TEMPORARY",
        day: 1,
        explanation: "Lanterns used only until the power comes back on are serving for a limited time, which is <strong>temporary</strong>."
    },
    {
        sentence: "The ice rink in the city park is only <span class='sentence-blank'>_______</span> and will be taken down when spring arrives.",
        options: ["portable", "meager", "practical", "temporary"],
        correctIndex: 3,
        word: "TEMPORARY",
        day: 1,
        explanation: "A rink that is taken down after winter is not permanent, making it <strong>temporary</strong>."
    },
    // PRACTICAL
    {
        sentence: "When packing for a long backpacking trip, it is most <span class='sentence-blank'>_______</span> to bring only lightweight, multi-use items.",
        options: ["practical", "temporary", "attentive", "portable"],
        correctIndex: 0,
        word: "PRACTICAL",
        day: 1,
        explanation: "Packing lightweight, multi-use items is sensible and useful (<strong>practical</strong>) for a long hike."
    },
    {
        sentence: "While the tall glass sculpture was beautiful, it was not a <span class='sentence-blank'>_______</span> container for daily drinking water.",
        options: ["practical", "meager", "astonishing", "timid"],
        correctIndex: 0,
        word: "PRACTICAL",
        day: 1,
        explanation: "A delicate glass sculpture is not suitable or sensible for everyday use, meaning it's not <strong>practical</strong>."
    },
    {
        sentence: "Learning how to manage your budget is a very <span class='sentence-blank'>_______</span> skill that will help you throughout your life.",
        options: ["temporary", "attentive", "portable", "practical"],
        correctIndex: 3,
        word: "PRACTICAL",
        day: 1,
        explanation: "Budgeting is a highly useful, realistic, and realistic skill for daily life (<strong>practical</strong>)."
    },

    // ==================== DAY 2 QUESTIONS ====================
    // EXILE
    {
        sentence: "After the revolution, the former dictator was forced to live in <span class='sentence-blank'>_______</span> in a small European village.",
        options: ["exile", "apprentice", "indifferent", "optimistic"],
        correctIndex: 0,
        word: "EXILE",
        day: 2,
        explanation: "Being forced to live away from one's native country is living in <strong>exile</strong>."
    },
    {
        sentence: "To punish the rebel commander, the court decided to <span class='sentence-blank'>_______</span> him from the kingdom forever.",
        options: ["emulate", "exile", "provoke", "contract"],
        correctIndex: 1,
        word: "EXILE",
        day: 2,
        explanation: "Forcing someone to leave their kingdom permanently is to <strong>exile</strong> (banish) them."
    },
    {
        sentence: "The writer spent ten years in <span class='sentence-blank'>_______</span>, longing for the day he could safely return to his homeland.",
        options: ["gratitude", "contract", "exile", "despair"],
        correctIndex: 2,
        word: "EXILE",
        day: 2,
        explanation: "Longing to return home implies they are barred from it, living in <strong>exile</strong>."
    },
    // INDIFFERENT
    {
        sentence: "Unlike his passionate classmates, Leo was completely <span class='sentence-blank'>_______</span> to politics and chose not to vote.",
        options: ["indifferent", "attentive", "timid", "astonishing"],
        correctIndex: 0,
        word: "INDIFFERENT",
        day: 2,
        explanation: "Having no interest, care, or concern about something is being <strong>indifferent</strong>."
    },
    {
        sentence: "The cat seemed completely <span class='sentence-blank'>_______</span> to the new toy, preferring to sleep in the cardboard box instead.",
        options: ["indifferent", "attentive", "optimistic", "tedious"],
        correctIndex: 0,
        word: "INDIFFERENT",
        day: 2,
        explanation: "Uncaring or showing no interest in the new toy means the cat is <strong>indifferent</strong>."
    },
    {
        sentence: "Many people are <span class='sentence-blank'>_______</span> to local news, but they pay close attention to global events.",
        options: ["indifferent", "attentive", "optimistic", "tedious"],
        correctIndex: 0,
        word: "INDIFFERENT",
        day: 2,
        explanation: "Showing no interest or care about local news is being <strong>indifferent</strong>."
    },
    // DESPAIR
    {
        sentence: "After losing his job and his home, he fell into deep <span class='sentence-blank'>_______</span> about his future.",
        options: ["despair", "gratitude", "apprentice", "exile"],
        correctIndex: 0,
        word: "DESPAIR",
        day: 2,
        explanation: "Losing everything leads to a complete absence of hope, which is <strong>despair</strong>."
    },
    {
        sentence: "Though they were lost in the wilderness for days, the hikers tried not to let <span class='sentence-blank'>_______</span> take over.",
        options: ["gratitude", "despair", "contract", "apprentice"],
        correctIndex: 1,
        word: "DESPAIR",
        day: 2,
        explanation: "Letting go of hope completely is letting <strong>despair</strong> take over."
    },
    {
        sentence: "The team looked on in <span class='sentence-blank'>_______</span> as their opponents scored the winning goal in the final seconds.",
        options: ["despair", "gratitude", "exile", "contract"],
        correctIndex: 0,
        word: "DESPAIR",
        day: 2,
        explanation: "Watching the opponents win at the last second causes a feeling of hopelessness (<strong>despair</strong>)."
    },
    // TRIVIAL
    {
        sentence: "Don't waste your energy worrying about <span class='sentence-blank'>_______</span> problems that won't matter next week.",
        options: ["trivial", "astonishing", "practical", "temporary"],
        correctIndex: 0,
        word: "TRIVIAL",
        day: 2,
        explanation: "Minor problems of very little value or importance are <strong>trivial</strong>."
    },
    {
        sentence: "The teacher ignored the student's <span class='sentence-blank'>_______</span> question and continued with the lesson.",
        options: ["practical", "attentive", "trivial", "meager"],
        correctIndex: 2,
        word: "TRIVIAL",
        day: 2,
        explanation: "Unimportant or minor questions are <strong>trivial</strong>."
    },
    {
        sentence: "In the grand scheme of the project, a mistake of two dollars is completely <span class='sentence-blank'>_______</span>.",
        options: ["trivial", "astonishing", "temporary", "portable"],
        correctIndex: 0,
        word: "TRIVIAL",
        day: 2,
        explanation: "A tiny mistake of two dollars in a large project is of little value or <strong>trivial</strong>."
    },
    // TEDIOUS
    {
        sentence: "Entering data into spreadsheets for eight hours a day can be a highly <span class='sentence-blank'>_______</span> task.",
        options: ["tedious", "timid", "astonishing", "attentive"],
        correctIndex: 0,
        word: "TEDIOUS",
        day: 2,
        explanation: "Spreadsheets for eight hours is dull, slow, and tiresome (<strong>tedious</strong>)."
    },
    {
        sentence: "We sat through a <span class='sentence-blank'>_______</span> three-hour lecture on history that sent half the class to sleep.",
        options: ["tedious", "temporary", "practical", "meager"],
        correctIndex: 0,
        word: "TEDIOUS",
        day: 2,
        explanation: "A lecture that puts people to sleep is boring and tiresome (<strong>tedious</strong>)."
    },
    {
        sentence: "Cleaning the grout between bathroom tiles with a toothbrush is slow and <span class='sentence-blank'>_______</span> work.",
        options: ["portable", "meager", "practical", "tedious"],
        correctIndex: 3,
        word: "TEDIOUS",
        day: 2,
        explanation: "Cleaning grout with a toothbrush is slow, repetitive, and dull (<strong>tedious</strong>)."
    },
    // APPRENTICE
    {
        sentence: "The young carpenter began his career as an <span class='sentence-blank'>_______</span>, learning the trade from a master craftsman.",
        options: ["apprentice", "contract", "gratitude", "exile"],
        correctIndex: 0,
        word: "APPRENTICE",
        day: 2,
        explanation: "Someone learning a trade from a master is an <strong>apprentice</strong>."
    },
    {
        sentence: "As a new <span class='sentence-blank'>_______</span> at the bakery, Clara spent her first week just learning how to knead dough.",
        options: ["contract", "apprentice", "gratitude", "despair"],
        correctIndex: 1,
        word: "APPRENTICE",
        day: 2,
        explanation: "A new trainee learning a trade is an <strong>apprentice</strong>."
    },
    {
        sentence: "In medieval times, a young person would work as an <span class='sentence-blank'>_______</span> for seven years to master a skill.",
        options: ["apprentice", "exile", "contract", "gratitude"],
        correctIndex: 0,
        word: "APPRENTICE",
        day: 2,
        explanation: "Working to learn a skill from a master is being an <strong>apprentice</strong>."
    },
    // OPTIMISTIC
    {
        sentence: "Despite the company's financial trouble, the CEO remained <span class='sentence-blank'>_______</span> about the new product's success.",
        options: ["optimistic", "timid", "meager", "temporary"],
        correctIndex: 0,
        word: "OPTIMISTIC",
        day: 2,
        explanation: "Remaining hopeful and confident about success is being <strong>optimistic</strong>."
    },
    {
        sentence: "It pays to be <span class='sentence-blank'>_______</span> because a positive attitude makes overcoming challenges much easier.",
        options: ["optimistic", "temporary", "practical", "portable"],
        correctIndex: 0,
        word: "OPTIMISTIC",
        day: 2,
        explanation: "A positive attitude corresponds to being <strong>optimistic</strong>."
    },
    {
        sentence: "While some expected the game to be lost, the fans were <span class='sentence-blank'>_______</span> that their team could make a comeback.",
        options: ["astonishing", "meager", "optimistic", "timid"],
        correctIndex: 2,
        word: "OPTIMISTIC",
        day: 2,
        explanation: "Being hopeful and confident about a comeback is being <strong>optimistic</strong>."
    },

    // INFERIOR (Error word — 3 questions)
    {
        sentence: "The cheap knock-off of the phone had a/an <span class='sentence-blank'>_______</span> screen that scratched very easily compared to the original.",
        options: ["identical", "superior", "inferior", "convenient"],
        correctIndex: 2,
        word: "INFERIOR",
        day: 3,
        explanation: "A screen of lower quality that scratches easily is <strong>inferior</strong>."
    },
    {
        sentence: "The off-brand cereal tasted <span class='sentence-blank'>_______</span> to the name brand, so the family went back to buying the original.",
        options: ["identical", "inferior", "adjacent", "portable"],
        correctIndex: 1,
        word: "INFERIOR",
        day: 3,
        explanation: "The off-brand didn't taste as good, making it <strong>inferior</strong> in quality compared to the name brand."
    },
    {
        sentence: "She refused to feel <span class='sentence-blank'>_______</span> just because she didn't have the most expensive shoes in class.",
        options: ["attentive", "practical", "inferior", "temporary"],
        correctIndex: 2,
        word: "INFERIOR",
        day: 3,
        explanation: "Feeling lesser or not as good because of material things is feeling <strong>inferior</strong>."
    },

    // FEEBLE (Error word — 3 questions)
    {
        sentence: "The kitten was so small and <span class='sentence-blank'>_______</span> that it could barely lift its head to drink the milk.",
        options: ["playful", "feeble", "robust", "temporary"],
        correctIndex: 1,
        word: "FEEBLE",
        day: 3,
        explanation: "Lacking physical strength or being very weak makes the kitten <strong>feeble</strong>."
    },
    {
        sentence: "The old dog's <span class='sentence-blank'>_______</span> legs could barely carry him across the yard anymore.",
        options: ["feeble", "graceful", "sturdy", "irritated"],
        correctIndex: 0,
        word: "FEEBLE",
        day: 3,
        explanation: "Legs that can barely carry someone are <strong>feeble</strong> — extremely weak and frail."
    },
    {
        sentence: "His <span class='sentence-blank'>_______</span> attempt to lift the heavy box made it clear he needed help.",
        options: ["cautious", "meager", "feeble", "inventive"],
        correctIndex: 2,
        word: "FEEBLE",
        day: 3,
        explanation: "A weak and unsuccessful attempt to do something physically demanding is a <strong>feeble</strong> attempt."
    },

    // MORALS (Error word — 3 questions)
    {
        sentence: "Cheating on the test was a direct violation of his personal <span class='sentence-blank'>_______</span>, so he decided to study honestly instead.",
        options: ["desires", "morals", "habits", "success"],
        correctIndex: 1,
        word: "MORALS",
        day: 3,
        explanation: "A person's standards and beliefs about what is right and wrong are their <strong>morals</strong>."
    },
    {
        sentence: "The teacher used the fairy tale to teach the children a lesson about <span class='sentence-blank'>_______</span> and knowing right from wrong.",
        options: ["gratitude", "despair", "morals", "assumptions"],
        correctIndex: 2,
        word: "MORALS",
        day: 3,
        explanation: "Teaching about right and wrong is teaching about <strong>morals</strong> — ethical principles and values."
    },
    {
        sentence: "Even though no one was watching, he returned the wallet because his <span class='sentence-blank'>_______</span> wouldn't let him keep it.",
        options: ["morals", "temper", "instincts", "exile"],
        correctIndex: 0,
        word: "MORALS",
        day: 3,
        explanation: "Doing the right thing even when no one is watching is guided by your <strong>morals</strong>."
    },
    // REINFORCEMENT (Struggle word — 2 questions)
    {
        sentence: "Training a puppy requires positive <span class='sentence-blank'>_______</span> like treats and praise whenever they obey a command.",
        options: ["punishment", "reinforcement", "attention", "patience"],
        correctIndex: 1,
        word: "REINFORCEMENT",
        day: 3,
        explanation: "Strengthening behavior through rewards is positive <strong>reinforcement</strong>."
    },
    {
        sentence: "The coach believed that positive <span class='sentence-blank'>_______</span> was more effective than punishment for motivating players.",
        options: ["indifference", "exile", "reinforcement", "provocation"],
        correctIndex: 2,
        word: "REINFORCEMENT",
        day: 3,
        explanation: "Encouraging good behavior through praise and rewards is positive <strong>reinforcement</strong>."
    },

    // ==================== DAY 4 QUESTIONS ====================
    // BLATANT
    {
        sentence: "The student's <span class='sentence-blank'>_______</span> attempt to copy his neighbor's paper was noticed immediately by the teacher.",
        options: ["timid", "blatant", "subtle", "portable"],
        correctIndex: 1,
        word: "BLATANT",
        day: 4,
        explanation: "An attempt that is completely obvious and unashamed is a <strong>blatant</strong> attempt."
    },
    {
        sentence: "It was a <span class='sentence-blank'>_______</span> disregard of the rules when he walked right past the 'Do Not Enter' sign.",
        options: ["blatant", "cautious", "feeble", "friendly"],
        correctIndex: 0,
        word: "BLATANT",
        day: 4,
        explanation: "Openly and glaringly ignoring rules is a <strong>blatant</strong> disregard."
    },

    // IMPULSIVE
    {
        sentence: "Known for being <span class='sentence-blank'>_______</span>, she bought the expensive pair of shoes on a whim without checking her budget.",
        options: ["patient", "impulsive", "optimistic", "attentive"],
        correctIndex: 1,
        word: "IMPULSIVE",
        day: 4,
        explanation: "Acting quickly on instinct without thinking or planning ahead is being <strong>impulsive</strong>."
    },
    {
        sentence: "Taking a deep breath before answering can help prevent making <span class='sentence-blank'>_______</span> remarks when you are upset.",
        options: ["deliberate", "impulsive", "graceful", "creative"],
        correctIndex: 1,
        word: "IMPULSIVE",
        day: 4,
        explanation: "Hasty remarks made without carefully thinking first are <strong>impulsive</strong>."
    },

    // ATROCIOUS
    {
        sentence: "The chef's attempt at making sushi was so <span class='sentence-blank'>_______</span> that no one at the table could finish a single bite.",
        options: ["astonishing", "atrocious", "delicious", "inventive"],
        correctIndex: 1,
        word: "ATROCIOUS",
        day: 4,
        explanation: "Something that tastes extremely bad or terrible is <strong>atrocious</strong>."
    },
    {
        sentence: "Traffic was <span class='sentence-blank'>_______</span> on the highway due to the heavy snowstorm, delaying commuters for hours.",
        options: ["atrocious", "meager", "orderly", "temporary"],
        correctIndex: 0,
        word: "ATROCIOUS",
        day: 4,
        explanation: "Extremely bad or terrible traffic conditions are <strong>atrocious</strong>."
    },

    // ABSURD
    {
        sentence: "Expecting a goldfish to ride a bicycle is completely <span class='sentence-blank'>_______</span> and makes no sense.",
        options: ["absurd", "practical", "reasonable", "attentive"],
        correctIndex: 0,
        word: "ABSURD",
        day: 4,
        explanation: "Something that is wildly unreasonable or illogical is <strong>absurd</strong>."
    },
    {
        sentence: "The price tag of one thousand dollars for a basic plain shirt seemed utterly <span class='sentence-blank'>_______</span> to the shoppers.",
        options: ["modest", "absurd", "fair", "inferior"],
        correctIndex: 1,
        word: "ABSURD",
        day: 4,
        explanation: "An unreasonably high price that makes no sense is <strong>absurd</strong>."
    },

    // PEDESTRIAN
    {
        sentence: "The novel's storyline was so <span class='sentence-blank'>_______</span> and uninspiring that he fell asleep after reading just two chapters.",
        options: ["thrilling", "pedestrian", "creative", "optimistic"],
        correctIndex: 1,
        word: "PEDESTRIAN",
        day: 4,
        explanation: "A plot that lacks excitement and is dull or ordinary is <strong>pedestrian</strong>."
    },
    {
        sentence: "Rather than an extraordinary masterpiece, the art critic dismissed the painting as ordinary and <span class='sentence-blank'>_______</span>.",
        options: ["pedestrian", "unique", "immense", "atrocious"],
        correctIndex: 0,
        word: "PEDESTRIAN",
        day: 4,
        explanation: "Lacking imagination or special qualities means being dull and <strong>pedestrian</strong>."
    },

    // JUVENILE
    {
        sentence: "Making silly faces and calling names during a serious meeting is very <span class='sentence-blank'>_______</span> behavior for an adult.",
        options: ["mature", "juvenile", "polite", "attentive"],
        correctIndex: 1,
        word: "JUVENILE",
        day: 4,
        explanation: "Childish or immature behavior from an adult is described as <strong>juvenile</strong>."
    },
    {
        sentence: "The summer camp offered many fun activities designed specifically for <span class='sentence-blank'>_______</span> campers.",
        options: ["juvenile", "elderly", "austere", "timid"],
        correctIndex: 0,
        word: "JUVENILE",
        day: 4,
        explanation: "Relating to youth or young people means <strong>juvenile</strong>."
    },

    // IMMENSE
    {
        sentence: "The blue whale is an animal of <span class='sentence-blank'>_______</span> proportions, weighing over one hundred tons.",
        options: ["meager", "immense", "tiny", "feeble"],
        correctIndex: 1,
        word: "IMMENSE",
        day: 4,
        explanation: "Extremely large or huge in size is <strong>immense</strong>."
    },
    {
        sentence: "She felt <span class='sentence-blank'>_______</span> relief when the doctor confirmed that her test results were completely clear.",
        options: ["immense", "trivial", "slight", "irritated"],
        correctIndex: 0,
        word: "IMMENSE",
        day: 4,
        explanation: "Extremely great or enormous relief is <strong>immense</strong>."
    },

    // JUBILEE
    {
        sentence: "Thousands of people gathered in the town square to celebrate the king's golden <span class='sentence-blank'>_______</span>.",
        options: ["tragedy", "jubilee", "struggle", "auction"],
        correctIndex: 1,
        word: "JUBILEE",
        day: 4,
        explanation: "A special anniversary milestone celebration is a <strong>jubilee</strong>."
    },
    {
        sentence: "The neighborhood hosted a summer <span class='sentence-blank'>_______</span> filled with music, food, and fireworks for all the residents.",
        options: ["jubilee", "exile", "funerary", "despair"],
        correctIndex: 0,
        word: "JUBILEE",
        day: 4,
        explanation: "A festive occasion or joyful anniversary celebration is a <strong>jubilee</strong>."
    },

    // SUBJECTIVE
    {
        sentence: "Whether chocolate or vanilla is the better flavor is entirely <span class='sentence-blank'>_______</span>, as it depends on personal preference.",
        options: ["factual", "subjective", "universal", "indifferent"],
        correctIndex: 1,
        word: "SUBJECTIVE",
        day: 4,
        explanation: "Based on personal tastes and feelings rather than objective facts is <strong>subjective</strong>."
    },
    {
        sentence: "A judge must strive to remain neutral, avoiding <span class='sentence-blank'>_______</span> opinions when reviewing evidence in court.",
        options: ["subjective", "objective", "unbiased", "attentive"],
        correctIndex: 0,
        word: "SUBJECTIVE",
        day: 4,
        explanation: "Opinions based on personal feelings rather than facts are <strong>subjective</strong>."
    }
];

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
let currentTab = "study";
let studyFilter = "all";
let currentSession = "day2"; // Default to Day 2 (Latest Day First)

// Quiz State
let quizMode = "word-to-def";
let quizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswersSummary = [];

// Sentence Challenge State
let sentenceQuestionsList = [];
let currentSentenceIndex = 0;
let sentenceScore = 0;
let sentenceAnswersSummary = [];

// ==========================================================================
// DATASET FILTER HELPERS
// ==========================================================================
function getFilteredSessionWords() {
    if (currentSession === "overall") {
        return [...vocabularyData];
    } else if (currentSession === "day1") {
        return vocabularyData.filter(w => w.day === 1);
    } else if (currentSession === "day2") {
        return vocabularyData.filter(w => w.day === 2);
    } else if (currentSession === "day3") {
        return vocabularyData.filter(w => w.day === 3);
    } else if (currentSession === "day4") {
        return vocabularyData.filter(w => w.day === 4);
    }
    return [...vocabularyData];
}

function getFilteredSessionSentences() {
    if (currentSession === "overall") {
        return [...sentenceQuestions];
    } else if (currentSession === "day1") {
        return sentenceQuestions.filter(q => q.day === 1);
    } else if (currentSession === "day2") {
        return sentenceQuestions.filter(q => q.day === 2);
    } else if (currentSession === "day3") {
        return sentenceQuestions.filter(q => q.day === 3);
    } else if (currentSession === "day4") {
        return sentenceQuestions.filter(q => q.day === 4);
    }
    return [...sentenceQuestions];
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    switchSession("day4");
});

// ==========================================================================
// SESSION SWITCHING
// ==========================================================================
function switchSession(sessionId) {
    currentSession = sessionId;
    
    // Update session selector buttons styling
    document.querySelectorAll(".session-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    document.getElementById(`session-btn-${sessionId}`).classList.add("active");
    
    // Refresh the active tab
    if (currentTab === "study") {
        renderStudyDeck();
    } else if (currentTab === "quiz") {
        resetQuizSetup();
    } else if (currentTab === "sentences") {
        resetSentenceChallenge();
    }
}

// ==========================================================================
// TAB NAVIGATION
// ==========================================================================
function switchTab(tabId) {
    currentTab = tabId;
    
    // Update active nav button
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    document.getElementById(`tab-btn-${tabId}`).classList.add("active");
    
    // Update active content section
    document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active");
    });
    document.getElementById(`tab-${tabId}`).classList.add("active");

    // Reset states if leaving active quiz/games
    if (tabId === "study") {
        renderStudyDeck();
    } else if (tabId === "quiz") {
        resetQuizSetup();
    } else if (tabId === "sentences") {
        resetSentenceChallenge();
    }
}

// ==========================================================================
// STUDY DECK LOGIC
// ==========================================================================
function filterStudyDeck(filter) {
    studyFilter = filter;
    
    document.querySelectorAll(".deck-controls .control-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    document.getElementById(`filter-${filter}`).classList.add("active");
    
    renderStudyDeck();
}

function updateDeckControls() {
    const sessionWords = getFilteredSessionWords();
    const allCount = sessionWords.length;
    const errorCount = sessionWords.filter(item => item.type === "error").length;
    const struggleCount = sessionWords.filter(item => item.type === "struggle").length;
    
    document.getElementById("filter-all").innerText = `All Words (${allCount})`;
    document.getElementById("filter-errors").innerText = `Flat-Out Errors (${errorCount})`;
    document.getElementById("filter-struggles").innerText = `Struggled/Corrected (${struggleCount})`;
}

function renderStudyDeck() {
    updateDeckControls();
    
    const grid = document.getElementById("words-grid");
    grid.innerHTML = "";
    
    const sessionWords = getFilteredSessionWords();
    const filteredWords = sessionWords.filter(item => {
        if (studyFilter === "all") return true;
        return item.type === (studyFilter === "errors" ? "error" : "struggle");
    });
    
    filteredWords.forEach((item, index) => {
        const cardContainer = document.createElement("div");
        cardContainer.className = "word-card-container";
        
        const cardTypeClass = item.type === "error" ? "tag-error" : "tag-struggle";
        const cardTypeText = item.type === "error" ? "Flat-out Error" : "Struggled/Corrected";
        
        cardContainer.innerHTML = `
            <div class="word-card" id="card-${index}" onclick="flipCard(${index})">
                <div class="card-front">
                    <span class="card-tag ${cardTypeClass}">${cardTypeText}</span>
                    <div class="word-header">
                        <div class="word-name">${item.word}</div>
                        <div class="word-pos">${item.pos}</div>
                    </div>
                    <div class="word-front-preview">
                        <div class="definition-title">Synonyms</div>
                        <div class="preview-synonyms">${item.synonyms.join(", ")}</div>
                    </div>
                    <div class="flip-hint">Click to flip 🔄</div>
                </div>
                <div class="card-back">
                    <div class="definition-title">Definition</div>
                    <p class="definition-text">${item.definition}</p>
                    <div class="example-box">
                        <div class="example-title">Example Sentence</div>
                        <p class="example-text">"${item.example}"</p>
                    </div>
                    <div class="pitfall-box">
                        ${item.pitfall}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(cardContainer);
    });
}

function flipCard(index) {
    const card = document.getElementById(`card-${index}`);
    card.classList.toggle("flipped");
}

// ==========================================================================
// DEFINITIONS QUIZ LOGIC
// ==========================================================================
function setQuizMode(mode) {
    quizMode = mode;
    document.querySelectorAll(".toggle-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    
    if (mode === "word-to-def") {
        document.getElementById("mode-word-to-def").classList.add("active");
    } else {
        document.getElementById("mode-def-to-word").classList.add("active");
    }
}

function startQuiz() {
    // Hide setup, show game
    document.querySelector(".quiz-setup-card").classList.add("hidden");
    document.getElementById("quiz-game").classList.remove("hidden");
    document.getElementById("quiz-results-card").classList.add("hidden");
    
    // Prepare questions (Shuffle filtered session words)
    const sessionWords = getFilteredSessionWords();
    const quizLength = currentSession === "day4" ? 9 : (currentSession === "day3" ? 4 : (currentSession === "day2" ? 7 : (currentSession === "day1" ? 10 : 15)));
    
    quizQuestions = shuffleArray([...sessionWords]).slice(0, quizLength);
    currentQuizIndex = 0;
    quizScore = 0;
    quizAnswersSummary = [];
    
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const currentQuestion = quizQuestions[currentQuizIndex];
    
    // Update progress bar
    const progressPercent = (currentQuizIndex / quizQuestions.length) * 100;
    document.getElementById("quiz-progress").style.width = `${progressPercent}%`;
    
    // Update header info
    document.getElementById("quiz-question-number").innerText = `Question ${currentQuizIndex + 1} of ${quizQuestions.length}`;
    document.getElementById("quiz-current-score").innerText = quizScore;
    
    // Hide feedback
    document.getElementById("quiz-feedback").classList.add("hidden");
    
    const questionTextEl = document.getElementById("quiz-question-text");
    const optionsContainer = document.getElementById("quiz-options-container");
    optionsContainer.innerHTML = "";
    
    // Generate Options
    let options = [];
    let correctAnswer = "";
    
    if (quizMode === "word-to-def") {
        // Question is the Word, options are definitions
        questionTextEl.innerHTML = `What is the definition of <span class="accent-text" style="font-weight: 800;">${currentQuestion.word}</span>?`;
        correctAnswer = currentQuestion.definition;
        
        // Grab 3 random incorrect definitions from full dataset
        const otherDefs = vocabularyData
            .filter(item => item.word !== currentQuestion.word)
            .map(item => item.definition);
        const incorrectDefs = shuffleArray(otherDefs).slice(0, 3);
        
        options = shuffleArray([correctAnswer, ...incorrectDefs]);
    } else {
        // Question is the Definition, options are words
        questionTextEl.innerHTML = `Which word means: <br><span style="font-size: 1.25rem; font-weight: 500; font-style: italic; display:block; margin-top: 1rem; color: #cbd5e1;">"${currentQuestion.definition}"</span>`;
        correctAnswer = currentQuestion.word;
        
        // Grab 3 random incorrect words from full dataset
        const otherWords = vocabularyData
            .filter(item => item.word !== currentQuestion.word)
            .map(item => item.word);
        const incorrectWords = shuffleArray(otherWords).slice(0, 3);
        
        options = shuffleArray([correctAnswer, ...incorrectWords]);
    }
    
    // Render options
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => selectQuizAnswer(btn, option, correctAnswer);
        optionsContainer.appendChild(btn);
    });
}

function selectQuizAnswer(selectedBtn, selectedOption, correctOption) {
    const optionsContainer = document.getElementById("quiz-options-container");
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    
    // Disable all options
    buttons.forEach(btn => {
        btn.disabled = true;
        // Highlight correct one
        if (btn.innerText === correctOption) {
            btn.classList.add("correct");
        }
    });
    
    const isCorrect = selectedOption === correctOption;
    const currentQuestion = quizQuestions[currentQuizIndex];
    
    // Record summary
    quizAnswersSummary.push({
        word: currentQuestion.word,
        correct: isCorrect
    });
    
    const feedbackTextEl = document.getElementById("quiz-feedback-text");
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        quizScore++;
        feedbackTextEl.innerText = "🎉 Correct!";
        feedbackTextEl.className = "feedback-text correct-status";
    } else {
        selectedBtn.classList.add("incorrect");
        feedbackTextEl.innerText = "❌ Incorrect!";
        feedbackTextEl.className = "feedback-text incorrect-status";
    }
    
    // Update score indicator
    document.getElementById("quiz-current-score").innerText = quizScore;
    
    // Show feedback
    document.getElementById("quiz-feedback").classList.remove("hidden");
}

function nextQuizQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
}

// ==========================================================================
// RESULTS DISPLAY AND HELPERS
// ==========================================================================
function showQuizResults() {
    document.getElementById("quiz-game").classList.add("hidden");
    const resultsCard = document.getElementById("quiz-results-card");
    resultsCard.classList.remove("hidden");
    
    document.getElementById("result-score").innerText = `${quizScore}/${quizQuestions.length}`;
    const percent = Math.round((quizScore / quizQuestions.length) * 100);
    document.getElementById("result-percent").innerText = `${percent}%`;
    
    // Render summary list
    const summaryList = document.getElementById("result-summary-list");
    summaryList.innerHTML = "";
    
    quizAnswersSummary.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = "result-item";
        
        const badgeClass = item.correct ? "badge-correct" : "badge-incorrect";
        const badgeText = item.correct ? "Correct" : "Incorrect";
        
        itemEl.innerHTML = `
            <span class="result-item-word">${item.word}</span>
            <span class="result-badge ${badgeClass}">${badgeText}</span>
        `;
        summaryList.appendChild(itemEl);
    });
}

function resetQuizSetup() {
    document.getElementById("quiz-game").classList.add("hidden");
    document.getElementById("quiz-results-card").classList.add("hidden");
    document.querySelector(".quiz-setup-card").classList.remove("hidden");
}

// ==========================================================================
// SENTENCE CHALLENGE LOGIC
// ==========================================================================
function resetSentenceChallenge() {
    document.getElementById("sentence-game").classList.remove("hidden");
    document.getElementById("sentence-results-card").classList.add("hidden");
    
    // Shuffle sentence questions from current session and take a random set
    const sessionSentences = getFilteredSessionSentences();
    const challengeLength = currentSession === "day2" ? 10 : 15;
    
    sentenceQuestionsList = shuffleArray([...sessionSentences]).slice(0, challengeLength);
    currentSentenceIndex = 0;
    sentenceScore = 0;
    sentenceAnswersSummary = [];
    
    loadSentenceQuestion();
}

// A list of words that are NOT in vocabularyData, to be used as external distractors
const externalDistractors = [
    "active", "creative", "anxious", "careless", "serious", "friendly", 
    "clumsy", "helpful", "scold", "imprison", "emotional", "worry", 
    "intelligent", "risky", "teacher", "violent", "exciting", "luck", 
    "nerdy", "talkative", "painless", "mandatory", "generous", "honest"
];

function generateSentenceOptions(question) {
    const correctWord = question.word.toLowerCase();
    
    // 1. Pick 1 external distractor (not in vocabularyData)
    const validExternal = externalDistractors.filter(w => w.toLowerCase() !== correctWord);
    const chosenExternal = validExternal[Math.floor(Math.random() * validExternal.length)];
    
    // 2. Pick 2 vocabulary distractors from the active session
    let sessionWords = getFilteredSessionWords();
    
    // Filter out the correct word
    let otherVocabWords = sessionWords
        .map(w => w.word.toLowerCase())
        .filter(word => word !== correctWord);
        
    // Shuffle and pick 2
    let chosenVocab = shuffleArray([...otherVocabWords]).slice(0, 2);
    
    const correctText = correctWord;
    const options = [correctText, chosenExternal.toLowerCase(), ...chosenVocab];
    
    // Shuffle the final options list
    const shuffledOptions = shuffleArray([...options]);
    
    // Find the new correctIndex
    const correctIndex = shuffledOptions.indexOf(correctText);
    
    return {
        options: shuffledOptions,
        correctIndex: correctIndex
    };
}

function loadSentenceQuestion() {
    const currentQuestion = sentenceQuestionsList[currentSentenceIndex];
    
    // Update progress bar
    const progressPercent = (currentSentenceIndex / sentenceQuestionsList.length) * 100;
    document.getElementById("sentence-progress").style.width = `${progressPercent}%`;
    
    // Update header info
    document.getElementById("sentence-question-number").innerText = `Question ${currentSentenceIndex + 1} of ${sentenceQuestionsList.length}`;
    document.getElementById("sentence-current-score").innerText = sentenceScore;
    
    // Hide feedback
    document.getElementById("sentence-feedback").classList.add("hidden");
    
    // Render text with blank
    document.getElementById("sentence-text-display").innerHTML = currentQuestion.sentence;
    
    const optionsContainer = document.getElementById("sentence-options-container");
    optionsContainer.innerHTML = "";
    
    // Generate Options dynamically
    const generated = generateSentenceOptions(currentQuestion);
    currentQuestion.activeOptions = generated.options;
    currentQuestion.activeCorrectIndex = generated.correctIndex;
    
    // Render options
    generated.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => selectSentenceAnswer(btn, index, generated.correctIndex);
        optionsContainer.appendChild(btn);
    });
}

function selectSentenceAnswer(selectedBtn, selectedIndex, correctIndex) {
    const optionsContainer = document.getElementById("sentence-options-container");
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    
    // Disable all options
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctIndex) {
            btn.classList.add("correct");
        }
    });
    
    const isCorrect = selectedIndex === correctIndex;
    const currentQuestion = sentenceQuestionsList[currentSentenceIndex];
    
    // Record summary
    sentenceAnswersSummary.push({
        word: currentQuestion.word,
        correct: isCorrect
    });
    
    const statusEl = document.getElementById("sentence-feedback-status");
    const explanationEl = document.getElementById("sentence-explanation-text");
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        sentenceScore++;
        statusEl.innerText = "🎉 Correct!";
        statusEl.className = "status-correct";
    } else {
        selectedBtn.classList.add("incorrect");
        statusEl.innerText = "❌ Incorrect!";
        statusEl.className = "status-incorrect";
    }
    
    // Set explanation text
    explanationEl.innerHTML = currentQuestion.explanation;
    
    // Update completed blank text in sentence
    const correctText = currentQuestion.activeOptions[correctIndex];
    document.getElementById("sentence-text-display").innerHTML = currentQuestion.sentence.replace("_______", correctText);
    
    // Update score indicator
    document.getElementById("sentence-current-score").innerText = sentenceScore;
    
    // Show feedback
    document.getElementById("sentence-feedback").classList.remove("hidden");
}

function nextSentenceQuestion() {
    currentSentenceIndex++;
    if (currentSentenceIndex < sentenceQuestionsList.length) {
        loadSentenceQuestion();
    } else {
        showSentenceResults();
    }
}

function showSentenceResults() {
    document.getElementById("sentence-game").classList.add("hidden");
    const resultsCard = document.getElementById("sentence-results-card");
    resultsCard.classList.remove("hidden");
    
    document.getElementById("sentence-result-score").innerText = `${sentenceScore}/${sentenceQuestionsList.length}`;
    const percent = Math.round((sentenceScore / sentenceQuestionsList.length) * 100);
    document.getElementById("sentence-result-percent").innerText = `${percent}%`;
    
    // Render summary list
    const summaryList = document.getElementById("sentence-result-summary-list");
    summaryList.innerHTML = "";
    
    sentenceAnswersSummary.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = "result-item";
        
        const badgeClass = item.correct ? "badge-correct" : "badge-incorrect";
        const badgeText = item.correct ? "Correct" : "Incorrect";
        
        itemEl.innerHTML = `
            <span class="result-item-word">${item.word}</span>
            <span class="result-badge ${badgeClass}">${badgeText}</span>
        `;
        summaryList.appendChild(itemEl);
    });
}

// ==========================================================================
// HELPER FUNCTIONS
// ==========================================================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
