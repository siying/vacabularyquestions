// ==========================================================================
// VOCABULARY DATASET
// ==========================================================================
const vocabularyData = [
    {
        word: "ATTENTIVE",
        pos: "adjective",
        definition: "Paying close attention to something; alert, watchful, and observant.",
        synonyms: ["observant", "mindful", "vigilant", "alert"],
        example: "The attentive student took detailed notes and noticed the small mistake on the board.",
        type: "error", // Flat-out error
        pitfall: "Don't confuse <strong>attentive</strong> with <strong>hardworking</strong>. While a hardworking person puts in effort, being attentive specifically means watching or listening carefully (observant)."
    },
    {
        word: "EMULATE",
        pos: "verb",
        definition: "To try to equal or excel someone or something, typically through imitation.",
        synonyms: ["imitate", "copy", "mirror", "mimic"],
        example: "The young basketball player tried to emulate his favorite player's shooting technique.",
        type: "error",
        pitfall: "Don't confuse <strong>emulate</strong> with <strong>innovate</strong>. To innovate means to create something new, whereas to emulate means to copy or match something that already exists."
    },
    {
        word: "PROVOKE",
        pos: "verb",
        definition: "To anger, annoy, or stimulate a strong reaction in someone.",
        synonyms: ["annoy", "anger", "instigate", "irritate"],
        example: "She tried not to provoke her brother while he was doing his homework.",
        type: "error",
        pitfall: "Don't confuse <strong>provoke</strong> with <strong>scold</strong>. Scolding is telling someone off after they do something wrong, whereas provoking is actively trying to make someone angry or trigger a reaction."
    },
    {
        word: "MEAGER",
        pos: "adjective",
        definition: "Lacking in quantity or quality; lean, thin, or very small in amount.",
        synonyms: ["limited", "scarce", "scanty", "deficient"],
        example: "The hikers had to survive on a meager food supply during their last two days on the trail.",
        type: "error",
        pitfall: "Don't confuse <strong>meager</strong> with <strong>enthusiastic</strong>. Enthusiastic means showing great excitement, while meager refers to something that is very small or limited in size or amount."
    },
    {
        word: "CONTRACT",
        pos: "noun / verb",
        definition: "A formal and legally binding agreement between two or more parties.",
        synonyms: ["agreement", "deal", "pact", "treaty"],
        example: "The actor signed a contract to star in three upcoming movies.",
        type: "error",
        pitfall: "Don't confuse <strong>contract</strong> with <strong>statement</strong> or <strong>marriage</strong>. While a contract can be used in marriage, its base definition is simply a binding agreement."
    },
    {
        word: "PORTABLE",
        pos: "adjective",
        definition: "Able to be easily carried or moved, light, and convenient.",
        synonyms: ["movable", "transportable", "lightweight"],
        example: "The benefit of a laptop over a desktop computer is that it is highly portable.",
        type: "error",
        pitfall: "Don't confuse <strong>portable</strong> with <strong>efficient</strong>. Efficient means working well without wasting time or energy. Portable means easy to move or carry from place to place."
    },
    {
        word: "RESEMBLE",
        pos: "verb",
        definition: "To have a likeness to or look similar to someone or something else.",
        synonyms: ["look like", "mirror", "favor"],
        example: "The young boy resembled his father so much that friends often got their names mixed up.",
        type: "error",
        pitfall: "Don't confuse <strong>resemble</strong> with <strong>love</strong> or <strong>admire</strong>. You can resemble someone you've never met simply because you look like them. It is about appearance, not feelings."
    },
    {
        word: "IRRITATED",
        pos: "adjective",
        definition: "Feeling or showing annoyance, impatience, or slight anger.",
        synonyms: ["annoyed", "bothered", "vexed", "peeved"],
        example: "The teacher grew irritated when the student ignored her repeated requests to stop tapping his pen.",
        type: "error",
        pitfall: "Don't confuse <strong>irritated</strong> with <strong>violent</strong>. Being irritated is a mild feeling of annoyance, while being violent involves physical force or aggression."
    },
    {
        word: "ASTONISHING",
        pos: "adjective",
        definition: "Extremely surprising, impressive, or amazing.",
        synonyms: ["surprising", "astounding", "breathtaking", "amazing"],
        example: "The magician performed an astonishing card trick that left everyone speechless.",
        type: "struggle", // Struggled/Corrected
        pitfall: "Don't confuse <strong>astonishing</strong> with <strong>exciting</strong>. While something astonishing can be exciting, astonishing specifically means it causes great surprise or disbelief (surprising)."
    },
    {
        word: "GRATITUDE",
        pos: "noun",
        definition: "The quality of being thankful; readiness to show appreciation.",
        synonyms: ["appreciation", "thankfulness", "gratefulness"],
        example: "He expressed his deep gratitude to his neighbors for helping clear the fallen tree.",
        type: "struggle",
        pitfall: "Don't confuse <strong>gratitude</strong> with <strong>luck</strong>. Luck is success brought by chance, while gratitude is the feeling of thankfulness you show to others."
    },
    {
        word: "TIMID",
        pos: "adjective",
        definition: "Showing a lack of courage or confidence; easily frightened; shy.",
        synonyms: ["shy", "bashful", "fearful", "apprehensive"],
        example: "The timid puppy hid behind its owner's legs when the guests arrived.",
        type: "struggle",
        pitfall: "Don't confuse <strong>timid</strong> with <strong>nerdy</strong> or <strong>talkative</strong>. Timid means shy and easily scared. A talkative person speaks a lot, and a nerdy person is highly studious—neither means shy."
    },
    {
        word: "TEMPORARY",
        pos: "adjective",
        definition: "Lasting, existing, or serving for a limited time only; not permanent.",
        synonyms: ["short-term", "brief", "transient", "fleeting"],
        example: "The braces were only temporary, and she looked forward to having them off by graduation.",
        type: "struggle",
        pitfall: "Don't confuse <strong>temporary</strong> with <strong>painless</strong> or <strong>mandatory</strong>. Braces can be painful and mandatory (required), but the fact that they will be removed makes them temporary."
    },
    {
        word: "PRACTICAL",
        pos: "adjective",
        definition: "Suitable for actual use; sensible, realistic, and useful.",
        synonyms: ["sensible", "realistic", "functional", "useful"],
        example: "Although the design looked futuristic, it was not practical for everyday use.",
        type: "struggle",
        pitfall: "Make sure to select the option that matches the spelling in the choices. Don't invent your own options (like writing a handwritten E option)!"
    }
];

// ==========================================================================
// SENTENCE CHALLENGE QUESTIONS DATASET
// ==========================================================================
const sentenceQuestions = [
    // ATTENTIVE
    {
        sentence: "The <span class='sentence-blank'>_______</span> student sat in the front row, taking notes on everything the teacher said.",
        options: ["timid", "attentive", "meager", "temporary"],
        correctIndex: 1,
        word: "ATTENTIVE",
        explanation: "An <strong>attentive</strong> student is one who pays close attention and is observant, which fits perfectly with sitting in the front row and taking notes on everything."
    },
    {
        sentence: "A good lifeguard must remain <span class='sentence-blank'>_______</span> at all times to ensure the safety of everyone in the pool.",
        options: ["attentive", "temporary", "practical", "portable"],
        correctIndex: 0,
        word: "ATTENTIVE",
        explanation: "A lifeguard must remain watchful and alert, which is the definition of being <strong>attentive</strong>."
    },
    {
        sentence: "The surgeon was extremely <span class='sentence-blank'>_______</span> during the delicate procedure, focusing on every tiny detail.",
        options: ["astonishing", "meager", "attentive", "timid"],
        correctIndex: 2,
        word: "ATTENTIVE",
        explanation: "Focusing on every tiny detail during a surgical procedure requires being highly alert and observant (<strong>attentive</strong>)."
    },
    // EMULATE
    {
        sentence: "Young writers often try to <span class='sentence-blank'>_______</span> the style of their favorite authors until they find their own voice.",
        options: ["provoke", "resemble", "emulate", "contract"],
        correctIndex: 2,
        word: "EMULATE",
        explanation: "To <strong>emulate</strong> means to copy or imitate someone's style in order to match or excel them."
    },
    {
        sentence: "Hoping to <span class='sentence-blank'>_______</span> her older sister's academic success, Maya studied for two hours every evening.",
        options: ["emulate", "provoke", "resemble", "contract"],
        correctIndex: 0,
        word: "EMULATE",
        explanation: "Studying hard to achieve the same success as someone else is trying to match or copy them, which is to <strong>emulate</strong>."
    },
    {
        sentence: "Many local businesses attempt to <span class='sentence-blank'>_______</span> the customer service practices of successful global companies.",
        options: ["provoke", "emulate", "resemble", "contract"],
        correctIndex: 1,
        word: "EMULATE",
        explanation: "Attempting to match the successful customer service practices of another business is trying to <strong>emulate</strong> them."
    },
    // PROVOKE
    {
        sentence: "If you tease the dog while it is eating, you might <span class='sentence-blank'>_______</span> it to bite.",
        options: ["provoke", "emulate", "resemble", "contract"],
        correctIndex: 0,
        word: "PROVOKE",
        explanation: "To <strong>provoke</strong> means to stir up, anger, or instigate a reaction. Teasing a dog can provoke it to bite."
    },
    {
        sentence: "The government’s new tax policy did not help the economy and served only to <span class='sentence-blank'>_______</span> angry protests across the city.",
        options: ["emulate", "provoke", "resemble", "contract"],
        correctIndex: 1,
        word: "PROVOKE",
        explanation: "Causing or triggering angry protests is an example of <strong>provoking</strong> a reaction."
    },
    {
        sentence: "Making rude comments to your classmates will surely <span class='sentence-blank'>_______</span> an argument.",
        options: ["emulate", "resemble", "provoke", "contract"],
        correctIndex: 2,
        word: "PROVOKE",
        explanation: "Making rude comments will instigate or trigger (<strong>provoke</strong>) an argument."
    },
    // MEAGER
    {
        sentence: "After weeks of drought, the farmers had only a <span class='sentence-blank'>_______</span> harvest of vegetables.",
        options: ["astonishing", "practical", "attentive", "meager"],
        correctIndex: 3,
        word: "MEAGER",
        explanation: "A <strong>meager</strong> harvest means one that is very small, thin, or limited in amount, which directly results from a drought."
    },
    {
        sentence: "The stranded hikers had to survive on a <span class='sentence-blank'>_______</span> daily ration of one energy bar and a cup of water.",
        options: ["meager", "temporary", "portable", "practical"],
        correctIndex: 0,
        word: "MEAGER",
        explanation: "A very small food supply (like one energy bar per day) is a <strong>meager</strong> ration."
    },
    {
        sentence: "Despite the company's huge profits, the employees received only a <span class='sentence-blank'>_______</span> salary increase of one percent.",
        options: ["practical", "attentive", "meager", "astonishing"],
        correctIndex: 2,
        word: "MEAGER",
        explanation: "A salary increase of only one percent is extremely small and limited in amount, or <strong>meager</strong>."
    },
    // CONTRACT
    {
        sentence: "Before starting the construction project, the builder signed a legally binding <span class='sentence-blank'>_______</span> with the homeowner.",
        options: ["gratitude", "contract", "provoke", "emulate"],
        correctIndex: 1,
        word: "CONTRACT",
        explanation: "A <strong>contract</strong> is a formal, legally binding agreement between parties."
    },
    {
        sentence: "The professional athlete negotiated a new five-year <span class='sentence-blank'>_______</span> with the team worth millions of dollars.",
        options: ["contract", "gratitude", "provoke", "temporary"],
        correctIndex: 0,
        word: "CONTRACT",
        explanation: "Negotiating a formal multi-year agreement with a team is signing a sports <strong>contract</strong>."
    },
    {
        sentence: "Always read the fine print before signing any <span class='sentence-blank'>_______</span> to buy a car.",
        options: ["gratitude", "contract", "emulate", "provoke"],
        correctIndex: 1,
        word: "CONTRACT",
        explanation: "Buying a car requires signing a formal purchase agreement, which is a legally binding <strong>contract</strong>."
    },
    // PORTABLE
    {
        sentence: "The compact camping stove is designed to be <span class='sentence-blank'>_______</span>, allowing hikers to easily pack it in their bags.",
        options: ["portable", "temporary", "practical", "meager"],
        correctIndex: 0,
        word: "PORTABLE",
        explanation: "A compact stove that fits easily in a bag is easy to carry, which is the definition of <strong>portable</strong>."
    },
    {
        sentence: "Our school purchased a set of <span class='sentence-blank'>_______</span> keyboards so that students could practice music in any classroom.",
        options: ["temporary", "portable", "practical", "astonishing"],
        correctIndex: 1,
        word: "PORTABLE",
        explanation: "Keyboards that can be moved from classroom to classroom easily are <strong>portable</strong>."
    },
    {
        sentence: "Early cell phones were heavy, but modern models are highly <span class='sentence-blank'>_______</span> and fit easily in a pocket.",
        options: ["practical", "temporary", "portable", "meager"],
        correctIndex: 2,
        word: "PORTABLE",
        explanation: "Fitting easily in a pocket makes a device highly convenient to move or carry (<strong>portable</strong>)."
    },
    // RESEMBLE
    {
        sentence: "Although they are not related, the two puppies <span class='sentence-blank'>_______</span> each other so much that it is hard to tell them apart.",
        options: ["emulate", "provoke", "resemble", "contract"],
        correctIndex: 2,
        word: "RESEMBLE",
        explanation: "To <strong>resemble</strong> means to look like or share a similar appearance with something else."
    },
    {
        sentence: "The architecture of the new museum was designed to <span class='sentence-blank'>_______</span> the shape of a blooming lotus flower.",
        options: ["resemble", "emulate", "provoke", "contract"],
        correctIndex: 0,
        word: "RESEMBLE",
        explanation: "Being designed to look like a flower means the building was built to <strong>resemble</strong> it."
    },
    {
        sentence: "Children often <span class='sentence-blank'>_______</span> one or both of their parents in their facial features and gestures.",
        options: ["emulate", "resemble", "provoke", "contract"],
        correctIndex: 1,
        word: "RESEMBLE",
        explanation: "Looking like or sharing physical features with your parents is to <strong>resemble</strong> them."
    },
    // IRRITATED
    {
        sentence: "The driver became <span class='sentence-blank'>_______</span> when he got stuck in bumper-to-bumper traffic for over an hour.",
        options: ["timid", "astonishing", "irritated", "attentive"],
        correctIndex: 2,
        word: "IRRITATED",
        explanation: "Getting stuck in traffic for an hour causes annoyance and impatience (<strong>irritated</strong>)."
    },
    {
        sentence: "Sophie felt <span class='sentence-blank'>_______</span> when her younger brother kept interrupting her while she was on the phone.",
        options: ["irritated", "temporary", "practical", "meager"],
        correctIndex: 0,
        word: "IRRITATED",
        explanation: "Being repeatedly interrupted causes annoyance, making her feel <strong>irritated</strong>."
    },
    {
        sentence: "The constant loud hum of the old air conditioner made everyone in the office feel <span class='sentence-blank'>_______</span>.",
        options: ["attentive", "astonished", "timid", "irritated"],
        correctIndex: 3,
        word: "IRRITATED",
        explanation: "A constant loud hum is an annoying disturbance that makes people feel <strong>irritated</strong>."
    },
    // ASTONISHING
    {
        sentence: "The gymnast put on an <span class='sentence-blank'>_______</span> performance, landing three backflips in a row to win the gold medal.",
        options: ["astonishing", "meager", "temporary", "timid"],
        correctIndex: 0,
        word: "ASTONISHING",
        explanation: "Landing three backflips in a row to win gold is an extremely surprising, impressive, or <strong>astonishing</strong> feat."
    },
    {
        sentence: "The discovery of ancient ruins beneath the busy city streets was an <span class='sentence-blank'>_______</span> event for archaeologists.",
        options: ["temporary", "practical", "astonishing", "meager"],
        correctIndex: 2,
        word: "ASTONISHING",
        explanation: "Finding ancient ruins under a modern city is highly unexpected and surprising, or <strong>astonishing</strong>."
    },
    {
        sentence: "It is <span class='sentence-blank'>_______</span> how quickly the young child learned to speak three different languages fluently.",
        options: ["meager", "temporary", "astonishing", "timid"],
        correctIndex: 2,
        word: "ASTONISHING",
        explanation: "Learning three languages fluently at a very young age is extremely impressive and surprising, or <strong>astonishing</strong>."
    },
    // GRATITUDE
    {
        sentence: "To express their <span class='sentence-blank'>_______</span>, the family sent a thank-you note and flowers to the doctor.",
        options: ["contract", "provoke", "resemble", "gratitude"],
        correctIndex: 3,
        word: "GRATITUDE",
        explanation: "Sending a thank-you note and flowers is a classic way to express thankfulness (<strong>gratitude</strong>)."
    },
    {
        sentence: "The charity volunteers felt a deep sense of <span class='sentence-blank'>_______</span> when they saw the happy faces of the children.",
        options: ["gratitude", "emulate", "provoke", "temporary"],
        correctIndex: 0,
        word: "GRATITUDE",
        explanation: "Seeing children's happiness made the volunteers feel thankful and appreciated, a sense of <strong>gratitude</strong>."
    },
    {
        sentence: "Writing in a daily journal can help you focus on positive things and cultivate <span class='sentence-blank'>_______</span>.",
        options: ["contract", "provoke", "resemble", "gratitude"],
        correctIndex: 3,
        word: "GRATITUDE",
        explanation: "Focusing on positive events in a journal helps build thankfulness, or <strong>gratitude</strong>."
    },
    // TIMID
    {
        sentence: "The <span class='sentence-blank'>_______</span> kitten hesitated to leave the safety of its box to explore the new room.",
        options: ["attentive", "timid", "irritated", "practical"],
        correctIndex: 1,
        word: "TIMID",
        explanation: "A kitten that is fearful and hesitates to leave its box is being shy or <strong>timid</strong>."
    },
    {
        sentence: "Unlike his loud and outgoing brother, Arthur was a <span class='sentence-blank'>_______</span> child who spoke in a quiet whisper.",
        options: ["timid", "astonishing", "meager", "temporary"],
        correctIndex: 0,
        word: "TIMID",
        explanation: "Speaking in a quiet whisper and being quiet suggests a lack of confidence or shyness, which is being <strong>timid</strong>."
    },
    {
        sentence: "The deer stood still for a moment, but being a <span class='sentence-blank'>_______</span> creature, it quickly bolted when we stepped on a twig.",
        options: ["attentive", "timid", "irritated", "practical"],
        correctIndex: 1,
        word: "TIMID",
        explanation: "Deer are easily frightened and shy creatures, making them <strong>timid</strong>."
    },
    // TEMPORARY
    {
        sentence: "The artist used wash-off chalk to create a <span class='sentence-blank'>_______</span> mural on the sidewalk that would disappear with the next rain.",
        options: ["portable", "meager", "practical", "temporary"],
        correctIndex: 3,
        word: "TEMPORARY",
        explanation: "A chalk mural that washes away with rain is not permanent, it is <strong>temporary</strong>."
    },
    {
        sentence: "When the power went out, we set up <span class='sentence-blank'>_______</span> lanterns until the main electricity was restored.",
        options: ["temporary", "attentive", "practical", "portable"],
        correctIndex: 0,
        word: "TEMPORARY",
        explanation: "Lanterns used only until the power comes back on are serving for a limited time, which is <strong>temporary</strong>."
    },
    {
        sentence: "The ice rink in the city park is only <span class='sentence-blank'>_______</span> and will be taken down when spring arrives.",
        options: ["portable", "meager", "practical", "temporary"],
        correctIndex: 3,
        word: "TEMPORARY",
        explanation: "A rink that is taken down after winter is not permanent, making it <strong>temporary</strong>."
    },
    // PRACTICAL
    {
        sentence: "When packing for a long backpacking trip, it is most <span class='sentence-blank'>_______</span> to bring only lightweight, multi-use items.",
        options: ["practical", "temporary", "attentive", "portable"],
        correctIndex: 0,
        word: "PRACTICAL",
        explanation: "Packing lightweight, multi-use items is sensible and useful (<strong>practical</strong>) for a long hike."
    },
    {
        sentence: "While the tall glass sculpture was beautiful, it was not a <span class='sentence-blank'>_______</span> container for daily drinking water.",
        options: ["practical", "meager", "astonishing", "timid"],
        correctIndex: 0,
        word: "PRACTICAL",
        explanation: "A delicate glass sculpture is not suitable or sensible for everyday use, meaning it's not <strong>practical</strong>."
    },
    {
        sentence: "Learning how to manage your budget is a very <span class='sentence-blank'>_______</span> skill that will help you throughout your life.",
        options: ["temporary", "attentive", "portable", "practical"],
        correctIndex: 3,
        word: "PRACTICAL",
        explanation: "Budgeting is a highly useful, realistic, and realistic skill for daily life (<strong>practical</strong>)."
    }
];

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
let currentTab = "study";
let studyFilter = "all";

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
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    renderStudyDeck();
});

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

function renderStudyDeck() {
    const grid = document.getElementById("words-grid");
    grid.innerHTML = "";
    
    const filteredWords = vocabularyData.filter(item => {
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
    
    // Prepare questions (Shuffle dataset and take up to 10 questions)
    quizQuestions = shuffleArray([...vocabularyData]).slice(0, 10);
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
        
        // Grab 3 random incorrect definitions
        const otherDefs = vocabularyData
            .filter(item => item.word !== currentQuestion.word)
            .map(item => item.definition);
        const incorrectDefs = shuffleArray(otherDefs).slice(0, 3);
        
        options = shuffleArray([correctAnswer, ...incorrectDefs]);
    } else {
        // Question is the Definition, options are words
        questionTextEl.innerHTML = `Which word means: <br><span style="font-size: 1.25rem; font-weight: 500; font-style: italic; display:block; margin-top: 1rem; color: #cbd5e1;">"${currentQuestion.definition}"</span>`;
        correctAnswer = currentQuestion.word;
        
        // Grab 3 random incorrect words
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
    
    // Shuffle sentence questions and take a random set of 15 questions
    sentenceQuestionsList = shuffleArray([...sentenceQuestions]).slice(0, 15);
    currentSentenceIndex = 0;
    sentenceScore = 0;
    sentenceAnswersSummary = [];
    
    loadSentenceQuestion();
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
    
    // Render options
    currentQuestion.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => selectSentenceAnswer(btn, index, currentQuestion.correctIndex);
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
    const correctText = currentQuestion.options[correctIndex];
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
