// Hamburger Nav
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger-active');
    navMenu.classList.toggle('hidden');
});

// Navbar Scroll
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('nav-fixed');
    } else {
        header.classList.remove('nav-fixed');
    }
}

// Quiz logic
const questions = [
    {
        question: "Faktor utama yang mendorong bangsa Barat datang ke dunia Timur adalah keinginan untuk ...",
        answers: [
            { text: "Mencari rempah-rempah", correct: true },
            { text: "Menyebarkan agama Kristen", correct: false },
            { text: "Mengejar kekayaan dan kejayaan", correct: false },
            { text: "Melakukan penjelajahan samudera", correct: false }
        ]
    },
    {
        question: "Imperialisme kuno yang dipelopori oleh Portugis dan Spanyol memiliki semboyan ...",
        answers: [
            { text: "Gold, Glory, Gospel", correct: true },
            { text: "The Wealth of Nations", correct: false },
            { text: "Liberté, Égalité, Fraternité", correct: false },
            { text: "Glora, Gospel, Golden", correct: false }
        ]
    },
    {
        question: "Kedatangan bangsa-bangsa Eropa ke dunia Timur termasuk Indonesia disebabkan oleh ... ",
        answers: [
            { text: "Keinginan untuk membuktikan bahwa bumi itu bulat", correct: false },
            { text: "Liberté, Égalité, Fraternité", correct: false },
            { text: "Bangsa eropa ingin menguasai daerah-daerah di luar eropa", correct: false },
            { text: "Keinginan bangsa Eropa untuk memperoleh keuntungan besar", correct: true }
        ]
    },
    {
        question: "Pemerintah Belanda memberikan hak-hak istimewa kepada VOC yang meliputi hak-hak sebagai berikut, kecuali ...",
        answers: [
            { text: "Mencetak uang", correct: false },
            { text: "Memiliki tentara", correct: false },
            { text: "Mendirikan negara merdeka", correct: true },
            { text: "Menyatakan perang dan damai", correct: false }
        ]
    },
    {
        question: "Politik adu domba atau divide et impera diterapkan Belanda dengan tujuan …",
        answers: [
            { text: "Memperkuat aliansi", correct: false },
            { text: "Melemahkan perlawanan lokal", correct: true },
            { text: "Meningkatkan kerja sama antar kerajaan", correct: false },
            { text: "Membangun pemerintahan Bersama", correct: false }
        ]
    },
    {
        question: "Kebijakan Jepang yang mengizinkan pengibaran bendera Merah Putih berdampingan dengan bendera Jepang bertujuan untuk …",
        answers: [
            { text: "Menunjukkan kerja sama", correct: false },
            { text: "Mendapatkan dukungan rakyat Indonesia", correct: true },
            { text: "Meningkatkan nasionalisme Jepang", correct: false },
            { text: "Membuat rakyat takut", correct: false }
        ]
    },
    {
        question: "Kebijakan Agraria pada tahun 1870 bertujuan untuk …",
        answers: [
            { text: "Mengurangi pengaruh Belanda di Indonesia", correct: true },
            { text: "Memperbolehkan swasta menyewa tanah di Indonesia", correct: false },
            { text: "Menurunkan pajak tanah bagi petani", correct: false },
            { text: "Membangun sekolah-sekolah", correct: false }
        ]
    },
    {
        question: "Jalan Raya Pos yang dibangun Pada Masa Herman Willem Daendels adalah hasil dari kerja paksa. Jalur ini membentang sepanjang lebih 1.000 kilometer dari …",
        answers: [
            { text: "Cilegon-Jakarta", correct: false },
            { text: "Banten-Jawa Timur", correct: false },
            { text: "Banten-Cilegon", correct: false },
            { text: "Anyer-Panarukan", correct: true }
        ]
    },
    {
        question: "Apa dampak utama kebijakan kerja paksa yang diterapkan oleh Daendels dalam pembangunan Jalan Raya?",
        answers: [
            { text: "Meningkatkan perdagangan lokal", correct: false },
            { text: "Membuka lapangan kerja bagi rakyat", correct: false },
            { text: "Meningkatkan penderitaan rakyat melalui eksploitasi tenaga kerja", correct: true },
            { text: "Memperkuat hubungan dagang dengan kerajaan-kerajaan local", correct: false }
        ]
    },
    {
        question: "Perhatikan pernyataan berikut ini! <br> 1) Penguasaan sumber daya alam oleh pemerintah colonial</br> <br>2) Penerapan sistem tanam paksa (Cultuurstelsel)</br> <br>3) Pembentukan organisasi pergerakan nasional seperti Budi Utomo</br> <br>4) Pembatasan akses pendidikan bagi pribumi</br> <br>5) Perlawanan Pangeran Antasari di Kalimantan</br> <br>Dampak negatif dari imperialisme dan kolonialisme yang berkaitan dengan eksploitasi sumber daya alam dan tenaga kerja ditunjukkan oleh nomor ...",
        answers: [
            { text: "1) dan 2)", correct: true },
            { text: "2) dan 4)", correct: false },
            { text: "3), 4), dan 5)", correct: false },
            { text: "1), 3), dan 5)", correct: false }
        ]
    },
    {
        question: "Bagaimana Jepang memanfaatkan propaganda untuk menarik simpati rakyat Indonesia selama pendudukan?",
        answers: [
            { text: "Melalui janji kemerdekaan", correct: false },
            { text: "Dengan memperkenalkan sistem pendidikan Barat", correct: false },
            { text: "Melalui semboyan 'Tiga A'", correct: true },
            { text: "Dengan memberikan otonomi politik penuh", correct: false }
        ]
    },
    {
        question: "Apa tujuan utama pembentukan kongsi dagang VOC oleh Belanda?",
        answers: [
            { text: "Menguasai seluruh perdagangan dunia", correct: false },
            { text: "Menghindari persaingan pedagang Belanda", correct: true },
            { text: "Memperkenalkan teknologi pertanian modern", correct: false },
            { text: "Mengurangi pajak untuk kerajaan Nusantara", correct: false }
        ]
    },
    {
        question: "Apa alasan Belanda menggunakan politik adu domba (divide et impera) di Indonesia?",
        answers: [
            { text: "Untuk menghindari perang dengan kerajaan lokal", correct: false },
            { text: "Untuk mempermudah penguasaan wilayah", correct: true },
            { text: "Untuk mempercepat proses pembangunan infrastruktur", correct: false },
            { text: "Untuk memperkuat kekuasaan raja-raja local", correct: false }
        ]
    },
    {
        question: "Perhatikan pernyataan berikut ini! <br> 1) Penerapan sistem tanam paksa (Cultuurstelsel) di Jawa</br> <br>2) Politik etis yang memperkenalkan pendidikan bagi kaum pribumi</br> <br>3) Eksploitasi hasil bumi untuk kepentingan pemerintah kolonial</br> <br>4) Perlawanan rakyat Aceh terhadap Belanda</br> <br>5) Pembangunan infrastruktur seperti jalan raya dan rel kereta api</br> <br>Manakah dari pernyataan di atas yang merupakan kebijakan kolonial yang memberikan keuntungan bagi pihak penjajah?",
        answers: [
            { text: "1), 2), dan 5)", correct: false },
            { text: "1), 3), dan 5)", correct: true },
            { text: "2), 4), dan 5)", correct: false },
            { text: "1), 3), dan 4)", correct: false }
        ]
    },
    {
        question: "Apa akibat utama dari pengenalan sistem pendidikan Barat oleh kolonial Belanda?",
        answers: [
            { text: "Meningkatkan rasa nasionalisme rakyat Indonesia", correct: false },
            { text: "Memperkuat budaya lokal", correct: false },
            { text: "Mengubah pola pikir dan nilai masyarakat", correct: true },
            { text: "Mengurangi pengaruh agama di kalangan rakyat", correct: false }
        ]
    },
    {
        question: "Bagaimana perlawanan rakyat di berbagai daerah Indonesia mempengaruhi strategi Belanda dalam mempertahankan kekuasaannya?",
        answers: [
            { text: "Meningkatkan penggunaan kekuatan militer", correct: true },
            { text: "Mengurangi pajak yang diberlakukan", correct: false },
            { text: "Memperkenalkan kebijakan ekonomi baru", correct: false },
            { text: "Meningkatkan hubungan diplomatik dengan kerajaan local", correct: false }
        ]
    },
    {
        question: "Perhatikan contoh perlawanan terhadap penjajahan berikut ini! <br> 1) Perlawanan Sultan Hasanuddin melawan VOC di Makassar</br> <br>2) Perang Diponegoro melawan Belanda di Jawa</br> <br>3) Perlawanan rakyat Aceh melawan kolonial Belanda</br> <br>4) Perlawanan rakyat Maluku di bawah pimpinan Pattimura melawan Belanda</br> <br>5) Perang Bali melawan Belanda di tahun 1849</br> <br>Perlawanan yang disebabkan oleh monopoli perdagangan VOC ditunjukkan oleh nomor …",
        answers: [
            { text: "1) dan 4)", correct: true },
            { text: "2) dan 5)", correct: false },
            { text: "1), 3), dan 5)", correct: false },
            { text: "2), 3), dan 4)", correct: false }
        ]
    },
    {
        question: "Perhatikan pernyataan-pernyataan berikut ini! <br> 1) Kebijakan VOC menerapkan sistem monopoli perdagangan rempah-rempah di Maluku</br> <br>2) Pembangunan jaringan rel kereta api di Jawa pada masa pemerintahan Hindia Belanda</br> <br>3) Pembentukan organisasi Budi Utomo sebagai awal pergerakan nasional</br> <br>4) Penghapusan perbudakan di wilayah jajahan oleh pemerintah Belanda</br> <br>Dari pernyataan di atas, manakah yang merupakan dampak langsung dari kebijakan kolonial Belanda dalam bidang ekonomi?",
        answers: [
            { text: "1) dan 2)", correct: true },
            { text: "1) dan 3)", correct: false },
            { text: "2) dan 4)", correct: false },
            { text: "3) dan 4)", correct: false }
        ]
    },
    {
        question: "Bagaimana kolonialisme mempengaruhi perkembangan nasionalisme di Indonesia?",
        answers: [
            { text: "Mendorong rakyat untuk bekerja sama dengan penjajah", correct: false },
            { text: "Membangkitkan kesadaran akan pentingnya kemerdekaan", correct: true },
            { text: "Memperkuat budaya lokal", correct: false },
            { text: "Meningkatkan hubungan dengan negara-negara Eropa", correct: false }
        ]
    },
    {
        question: "Perhatikan peristiwa berikut! <br> 1) Penerapan sistem tanam paksa (cultuurstelsel) di Jawa</br> <br>2) Pembentukan Persekutuan Dagang Hindia Timur (VOC)</br> <br>3) Pemberontakan rakyat Aceh terhadap penjajah Belanda</br> <br>4) Diterapkannya politik etis oleh pemerintah kolonial</br> <br>Manakah dari peristiwa di atas yang berkaitan dengan kebijakan eksploitasi ekonomi kolonial terhadap sumber daya alam Indonesia?",
        answers: [
            { text: "1) dan 2)", correct: true },
            { text: "1) dan 3)", correct: false },
            { text: "2) dan 4)", correct: false },
            { text: "3) dan 4)", correct: false }
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Berikutnya';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question; // Menggunakan innerHTML agar HTML dalam teks tetap terjaga

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('block', 'w-full', 'rounded-lg', 'border', 'border-gray-700', 'p-4', 'hover:border-pink-600', 'text-gray-300', 'text-xs', 'font-medium', 'btn-animation');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    if (isCorrect) {
        selectedButton.classList.add('bg-green-500', 'btn-correct');
        score++;
    } else {
        selectedButton.classList.add('bg-red-500', 'btn-incorrect');
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('bg-green-500');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerText = `Anda menjawab ${score} dari ${questions.length} pertanyaan dengan benar!`;
    nextButton.innerText = 'Mulai Lagi';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();