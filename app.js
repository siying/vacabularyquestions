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
// ==========================================================================
// SENTENCE CHALLENGE QUESTIONS DATASET
// ==========================================================================
const sentenceQuestions = [
    {
        sentence: "The <span class='sentence-blank'>_______</span> student sat in the front row, taking notes on everything the teacher said.",
        options: ["timid", "attentive", "meager", "temporary"],
        correctIndex: 1,
        word: "ATTENTIVE",
        explanation: "An <strong>attentive</strong> student is one who pays close attention and is observant, which fits perfectly with sitting in the front row and taking notes on everything. Luca originally chose 'hardworking' instead of 'observant' for this word's definition."
    },
    {
        sentence: "Young writers often try to <span class='sentence-blank'>_______</span> the style of their favorite authors until they find their own voice.",
        options: ["provoke", "resemble", "emulate", "contract"],
        correctIndex: 2,
        word: "EMULATE",
        explanation: "To <strong>emulate</strong> means to copy or imitate someone's style in order to match or excel them. Luca originally confused 'emulate' with 'innovate' (creating something new)."
    },
    {
        sentence: "If you tease the dog while it is eating, you might <span class='sentence-blank'>_______</span> it to bite.",
        options: ["provoke", "emulate", "resemble", "contract"],
        correctIndex: 0,
        word: "PROVOKE",
        explanation: "To <strong>provoke</strong> means to stir up, anger, or instigate a reaction. Teasing a dog can provoke it to bite. Luca originally confused 'provoke' with 'scold' (reprimanding)."
    },
    {
        sentence: "After weeks of drought, the farmers had only a <span class='sentence-blank'>_______</span> harvest of vegetables.",
        options: ["astonishing", "practical", "attentive", "meager"],
        correctIndex: 3,
        word: "MEAGER",
        explanation: "A <strong>meager</strong> harvest means one that is very small, thin, or limited in amount, which directly results from a drought. Luca originally confused 'meager' with 'enthusiastic'."
    },
    {
        sentence: "Before starting the construction project, the builder signed a legally binding <span class='sentence-blank'>_______</span> with the homeowner.",
        options: ["gratitude", "contract", "provoke", "emulate"],
        correctIndex: 1,
        word: "CONTRACT",
        explanation: "A <strong>contract</strong> is a formal, legally binding agreement between parties. Luca originally struggled/skipped this question on the test."
    },
    {
        sentence: "The benefit to having a laptop computer over a desktop is that it is <span class='sentence-blank'>_______</span> and can be taken with you anywhere.",
        options: ["portable", "temporary", "practical", "meager"],
        correctIndex: 0,
        word: "PORTABLE",
        explanation: "Since the laptop <strong>'can be taken with you anywhere'</strong>, it is <strong>portable</strong> (easy to move or carry). Luca originally selected 'efficient', which describes speed/wasted effort, not mobility."
    },
    {
        sentence: "Chris <span class='sentence-blank'>_______</span> his Uncle Tom so much that people often mistook Chris for Tom's son.",
        options: ["emulated", "provoked", "resembled", "contracted"],
        correctIndex: 2,
        word: "RESEMBLE",
        explanation: "If people mistake Chris for Tom's son, it's because they look alike (<strong>resembled</strong>). Luca originally selected 'loved', but loving someone does not make you look like them!"
    },
    {
        sentence: "The teacher grew more and more <span class='sentence-blank'>_______</span> as the student continued to tap his pen against the desk, despite being asked numerous times to stop.",
        options: ["timid", "astonishing", "irritated", "attentive"],
        correctIndex: 2,
        word: "IRRITATED",
        explanation: "Repeated pen-tapping after being asked to stop causes annoyance (<strong>irritated</strong>). Luca originally selected 'violent', which involves physical force and is far too extreme."
    },
    {
        sentence: "The gymnast put on an <span class='sentence-blank'>_______</span> performance, landing three backflips in a row to win the gold medal.",
        options: ["astonishing", "meager", "temporary", "timid"],
        correctIndex: 0,
        word: "ASTONISHING",
        explanation: "Landing three backflips in a row to win gold is an extremely surprising, impressive, or <strong>astonishing</strong> feat. Luca originally confused this with 'exciting'."
    },
    {
        sentence: "To express their <span class='sentence-blank'>_______</span>, the family sent a thank-you note and flowers to the doctor.",
        options: ["contract", "provoke", "resemble", "gratitude"],
        correctIndex: 3,
        word: "GRATITUDE",
        explanation: "Sending a thank-you note and flowers is a classic way to express thankfulness (<strong>gratitude</strong>). Luca originally confused this with 'luck'."
    },
    {
        sentence: "The <span class='sentence-blank'>_______</span> kitten hesitated to leave the safety of its box to explore the new room.",
        options: ["attentive", "timid", "irritated", "practical"],
        correctIndex: 1,
        word: "TIMID",
        explanation: "A kitten that is fearful and hesitates to leave its box is being shy or <strong>timid</strong>. Luca originally confused this with 'nerdy' or 'talkative'."
    },
    {
        sentence: "Although Cassandra was not excited about getting braces, she took comfort in knowing that they were <span class='sentence-blank'>_______</span> and would be off by the time she graduated.",
        options: ["portable", "meager", "practical", "temporary"],
        correctIndex: 3,
        word: "TEMPORARY",
        explanation: "The fact that the braces <strong>'would be off by the time she graduated'</strong> means they will not last forever, making them <strong>temporary</strong> (not permanent). Luca originally struggled, selecting 'fashionable', 'mandatory', and 'painless' before choosing correctly."
    },
    {
        sentence: "Though his suggested solution to the company's dilemma was <span class='sentence-blank'>_______</span>, it was far too expensive and would take too long to implement.",
        options: ["practical", "temporary", "attentive", "portable"],
        correctIndex: 0,
        word: "PRACTICAL",
        explanation: "The contrast word <strong>'Though'</strong> indicates the solution was sensible and realistic (<strong>practical</strong>), but couldn't be done due to high cost and time. Luca originally wrote in his own 'E' choice instead of picking 'A'!"
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
    
    // Shuffle sentence questions
    sentenceQuestionsList = shuffleArray([...sentenceQuestions]);
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
