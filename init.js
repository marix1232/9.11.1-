window.onload = function() {
    const generateButton = document.getElementById('generateButton');
    const clearButton = document.getElementById('clearButton');

    generateButton.onclick = function() {
        const initPerson = personGenerator.getPerson();
        
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        document.getElementById('surnameOutput').innerText = initPerson.surname;
        document.getElementById('genderOutput').innerText = initPerson.gender;
        document.getElementById('birthYearOutput').innerText = initPerson.birthday; // Здесь можно добавить генерацию года
    };

    clearButton.onclick = function() {
        document.getElementById('firstNameOutput').innerText = "Генерация имени";
        document.getElementById('surnameOutput').innerText = "Генерация фамилии";
        document.getElementById('genderOutput').innerText = "Генерация пола";
        document.getElementById('birthYearOutput').innerText = "Генерация дня/месяца рождения";
    };
};
