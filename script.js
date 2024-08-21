// Menampilkan pesan selamat datang setelah halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('welcomeMessage').innerHTML = 'Selamat datang di latihan JavaScript';
});

// Fungsi untuk memeriksa nilai input dan menampilkan hasil
function checkValue() {
    let userInput = parseInt(document.getElementById('userInput').value);
    let outputDiv = document.getElementById('output');
    let backButton = document.getElementById('backButton');
    
    outputDiv.innerHTML = ''; // Kosongkan output sebelumnya

    // Periksa nilai yang dimasukkan
    if (userInput > 10) {
        outputDiv.innerHTML += '<p>Nilai lebih besar dari 10.</p>';
    } else if (userInput === 10) {
        outputDiv.innerHTML += '<p>Nilai sama dengan 10.</p>';
    } else {
        outputDiv.innerHTML += '<p>Nilai kurang dari 10.</p>';
    }

    // Menampilkan angka 1 hingga nilai yang dimasukkan
    outputDiv.innerHTML += '<p>Daftar Angka:</p>';
    outputDiv.innerHTML += '<ul>';
    for (let i = 1; i <= userInput; i++) {
        outputDiv.innerHTML += `<li>${i}</li>`;
    }
    outputDiv.innerHTML += '</ul>';

    // Menampilkan tombol Kembali
    backButton.style.display = 'block';
}

// Fungsi untuk kembali ke halaman utama
function goBack() {
    let outputDiv = document.getElementById('output');
    let backButton = document.getElementById('backButton');

    // Kosongkan output dan sembunyikan tombol Kembali
    outputDiv.innerHTML = '';
    backButton.style.display = 'none';
}

// Fungsi greet
function greet(name) {
    return `Hello, ${name}`;
}

// Fungsi calculateSquare
function calculateSquare(number) {
    return number * number;
}

// Arrow function untuk menjumlahkan dua angka
const addNumbers = (a, b) => a + b;

// Fungsi untuk manipulasi array dan objek
function manipulateArrayAndObject() {
    let outputDiv = document.getElementById('output');
    
    // Array students
    let students = ["Alice", "Bob", "Charlie"];
    students.push("David"); // Menambahkan nama baru
    outputDiv.innerHTML += '<h2>Daftar Siswa</h2>';
    outputDiv.innerHTML += '<ul>';
    students.forEach(student => {
        outputDiv.innerHTML += `<li>${student}</li>`;
    });
    outputDiv.innerHTML += '</ul>';
    
    // Objek car
    let car = {
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    };
    outputDiv.innerHTML += '<h2>Informasi Mobil</h2>';
    for (let key in car) {
        outputDiv.innerHTML += `<p>${key}: ${car[key]}</p>`;
    }

    // Array objek mobil
    let cars = [
        {brand: "Toyota", model: "Corolla", year: 2020},
        {brand: "Honda", model: "Civic", year: 2021},
        {brand: "Ford", model: "Focus", year: 2019}
    ];
    outputDiv.innerHTML += '<h2>Daftar Mobil</h2>';
    cars.forEach(car => {
        outputDiv.innerHTML += `<p>Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}</p>`;
    });
}

// Memanggil fungsi-fungsi setelah halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Menampilkan fungsi dan manipulasi array dan objek
    manipulateArrayAndObject();
});
