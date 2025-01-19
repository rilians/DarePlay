// 100 Pertanyaan untuk Mode "Truth"
const truthQuestions = [
    "What is the most embarrassing thing you've ever done?",
    "Have you ever lied to your best friend?",
    "What is your biggest fear?",
    "Who was your first crush?",
    "Have you ever cheated on a test?",
    "What is your most embarrassing secret?",
    "What is the worst gift you've ever received?",
    "What is the last lie you told?",
    "What is something you're glad your parents don't know about you?",
    "Have you ever been caught doing something you shouldn't?",
    "What is your biggest insecurity?",
    "What is your worst habit?",
    "Have you ever had a crush on a teacher?",
    "What is the weirdest thing you've ever eaten?",
    "Who is the most annoying person you know?",
    "What is the worst date you've ever been on?",
    "Have you ever ghosted someone?",
    "What is the biggest mistake you've ever made?",
    "What is the most embarrassing thing you've ever worn?",
    "Have you ever pretended to like someone to make them happy?",
    "What is the most childish thing you still do?",
    "What is the most expensive thing you’ve stolen?",
    "Have you ever broken the law?",
    "Have you ever had a crush on your friend’s sibling?",
    "Who is your secret crush?",
    "Have you ever been in love?",
    "Have you ever been rejected?",
    "What is your dream job?",
    "Who do you envy the most?",
    "What is the most ridiculous thing you’ve done for love?",
    "Have you ever kissed someone you shouldn't have?",
    "What is your weirdest talent?",
    "What is the meanest thing you've ever said to someone?",
    "Have you ever stolen something from a friend?",
    "What is the most disgusting habit you have?",
    "What is your guilty pleasure?",
    "What is the strangest dream you've ever had?",
    "What is something you’ve never told anyone?",
    "Have you ever been caught in a lie?",
    "Who do you secretly admire?",
    "What is the worst rumor you’ve ever heard about yourself?",
    "What is the most awkward situation you’ve been in?",
    "Have you ever been jealous of someone?",
    "What is the last thing you searched on your phone?",
    "What is the most trouble you’ve gotten into at school?",
    "Have you ever told someone else's secret?",
    "What is your most embarrassing childhood memory?",
    "Have you ever faked being sick to skip school?",
    "What is your worst fear?",
    "Who is your least favorite teacher?",
    "What is the most useless talent you have?",
    "What is the worst grade you’ve ever received?",
    "Have you ever blamed someone else for your mistake?",
    "Have you ever cried in public?",
    "What is the worst haircut you've ever had?",
    "What is the most awkward text you've sent?",
    "What is the most ridiculous lie you’ve ever told?",
    "Have you ever fallen asleep in class?",
    "What is your most embarrassing nickname?",
    "Have you ever stalked someone on social media?",
    "What is the weirdest thing you’ve ever Googled?",
    "Have you ever been dumped?",
    "What is the most embarrassing picture of you?",
    "Have you ever cheated in a game?",
    "What is the most random thing you've ever done?",
    "What is the last movie that made you cry?",
    "What is your most embarrassing dance move?",
    "Have you ever been caught lying?",
    "Have you ever been on a blind date?",
    "What is the weirdest thing you’ve ever bought?",
    "Have you ever ruined someone’s surprise?",
    "What is your biggest pet peeve?",
    "Have you ever been caught sneaking out?",
    "What is your most irrational fear?",
    "What is the dumbest thing you've done?",
    "What is the most painful rejection you’ve experienced?",
    "What is the craziest thing you've done to impress someone?",
    "Have you ever laughed at the wrong moment?",
    "What is the most awkward thing you've said to someone you like?",
    "What is your most embarrassing school memory?",
    "Have you ever forgotten someone’s name mid-conversation?",
    "What is your worst cooking disaster?",
    "What is the most impulsive thing you’ve ever done?",
    "What is the most boring date you've ever had?",
    "Have you ever lied to get out of trouble?",
    "What is the weirdest compliment you've received?",
    "Have you ever been caught snooping?",
    "What is your worst public speaking experience?"
];

// 100 Tantangan untuk Mode "Dare"
const dareChallenges = [
    "Sing your favorite song loudly!",
    "Do a silly dance for 30 seconds!",
    "Let the person next to you draw on your face with a pen.",
    "Post an embarrassing photo on social media!",
    "Call your crush and confess your feelings.",
    "Let someone tickle you for 30 seconds.",
    "Imitate an animal of someone’s choice for 1 minute.",
    "Wear your socks on your hands until the next turn.",
    "Eat a raw onion slice.",
    "Try to lick your elbow.",
    "Talk in an accent until your next turn.",
    "Let someone write something on your forehead.",
    "Do 10 push-ups.",
    "Hold your breath for 10 seconds.",
    "Act like a monkey until your next turn.",
    "Let the group style your hair.",
    "Do an impression of someone in the group.",
    "Sing the chorus of a song like an opera singer.",
    "Balance a spoon on your nose for 10 seconds.",
    "Do 15 jumping jacks.",
    "Speak in rhymes until your next turn.",
    "Wear a blindfold for the next 3 rounds.",
    "Do a cartwheel (or try to).",
    "Pretend to be a waiter and take everyone’s orders.",
    "Walk around the room like a crab.",
    "Let someone tickle you for 20 seconds.",
    "Spin around 10 times and walk in a straight line.",
    "Do an impression of a celebrity.",
    "Act like a baby for 1 minute.",
    "Do your best chicken dance for 30 seconds.",
    "Pretend to be a statue for 1 minute.",
    "Run in place while singing a song until your next turn.",
    "Let someone paint your nails with a marker.",
    "Speak only gibberish until your next turn.",
    "Let someone redo your hairstyle.",
    "Eat a spoonful of mustard or ketchup.",
    "Do your best robot dance.",
    "Pretend to be a teacher and give a lesson for 1 minute.",
    "Let someone give you a nickname and call you by it for the rest of the game.",
    "Speak like a pirate until your next turn.",
    "Mimic someone in the room for 1 minute.",
    "Do a plank for 30 seconds.",
    "Eat a slice of lemon without making a face.",
    "Let someone else pick a song and dance to it.",
    "Make a funny face and hold it for 1 minute.",
    "Wear your shoes on the wrong feet until your next turn.",
    "Walk like a penguin until your next turn.",
    "Pretend to be a cat and meow for 1 minute.",
    "Speak in a whisper until your next turn.",
    "Do 10 squats.",
    "Let someone draw a mustache on you.",
    "Sing everything you say until your next turn.",
    "Hop on one foot for 30 seconds.",
    "Pretend to be a dog and bark for 1 minute.",
    "Do your best imitation of a famous character.",
    "Dance without music for 1 minute.",
    "Pretend to be a news anchor and give the day's headlines.",
    "Do a handstand or try to.",
    "Say the alphabet backward.",
    "Let someone choose a word you must say in every sentence until your next turn.",
    "Pretend to be a superhero and act out your powers.",
    "Do 20 sit-ups.",
    "Walk backward until your next turn.",
    "Act like a clown and make everyone laugh.",
    "Do your best impression of your favorite animal.",
    "Balance a book on your head for 1 minute.",
    "Let someone tickle your feet for 20 seconds.",
    "Dance with no music for 1 minute.",
    "Pretend to be an alien and greet everyone in your alien language.",
    "Say a tongue twister five times fast.",
    "Sing the national anthem with a silly voice.",
    "Let someone mess up your hair.",
    "Do a yoga pose for 30 seconds.",
    "Pretend to be a baby and crawl around for 1 minute.",
    "Let someone draw something on your hand.",
    "Speak like a robot until your next turn.",
    "Do your best impression of someone in the group.",
    "Act like you are underwater for 1 minute.",
    "Pretend to be a waiter and serve drinks to everyone.",
    "Do 5 push-ups while someone counts slowly.",
    "Run around the room imitating your favorite cartoon character.",
    "Pretend to be a news reporter and give a weather report.",
    "Pretend to be a chef and explain how to make your favorite dish.",
    "Do your best moonwalk dance move.",
    "Let someone else do your makeup with markers.",
    "Try to juggle 3 items for 30 seconds.",
    "Pretend to be a superhero and save the day.",
    "Speak only in questions until your next turn.",
    "Do a frog jump across the room.",
    "Make up a poem about someone in the group.",
    "Spin around 10 times and try to walk in a straight line."
];

// Gabungkan Truth dan Dare ke dalam satu objek
const questions = {
    Truth: truthQuestions,
    Dare: dareChallenges
};

// Fungsi untuk mendapatkan pertanyaan atau tantangan secara acak
function getRandomQuestion(mode) {
    const modeQuestions = questions[mode]; // Pilih daftar berdasarkan mode
    const randomIndex = Math.floor(Math.random() * modeQuestions.length); // Ambil index acak
    return modeQuestions[randomIndex]; // Kembalikan pertanyaan/tantangan
}

// Inisialisasi pertanyaan di localStorage jika belum ada
if (!localStorage.getItem("questions")) {
    localStorage.setItem("questions", JSON.stringify(questions));
}

// Fungsi untuk mendapatkan pertanyaan dari localStorage
function getQuestions() {
    return JSON.parse(localStorage.getItem("questions"));
}

// Fungsi untuk menyimpan pertanyaan baru ke localStorage
function saveQuestion(mode, question) {
    const storedQuestions = getQuestions(); // Ambil pertanyaan dari localStorage
    storedQuestions[mode].push(question); // Tambahkan pertanyaan baru
    localStorage.setItem("questions", JSON.stringify(storedQuestions)); // Simpan kembali ke localStorage
}

// Event listener untuk tombol "Save" di add.html
if (document.getElementById("save-btn")) {
    document.getElementById("save-btn").addEventListener("click", () => {
        const mode = document.getElementById("mode").value; // Ambil mode (Truth/Dare)
        const question = document.getElementById("question").value; // Ambil teks pertanyaan/tantangan
        if (question.trim() === "") {
            alert("Please enter a valid question or dare!"); // Validasi input kosong
            return;
        }
        saveQuestion(mode, question); // Simpan pertanyaan baru
        alert("Question added successfully!");
        document.getElementById("question").value = ""; // Kosongkan input
    });
}

// Event listener untuk tombol "Next" di game.html
if (document.getElementById("next-btn")) {
    document.getElementById("next-btn").addEventListener("click", () => {
        const mode = document.getElementById("mode").value; // Ambil mode yang dipilih
        const randomQuestion = getRandomQuestion(mode); // Dapatkan pertanyaan acak
        document.getElementById("question").innerHTML = `<p class="text-xl font-medium">${randomQuestion}</p>`; // Tampilkan
    });
}
