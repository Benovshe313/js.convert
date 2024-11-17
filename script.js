
const englishData = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Engineer",
    company: "TechCorp",
    phone: "+1 555 1234",
    email: "john.doe@example.com",
    address: "123 Elm St",
    education: "Bachelor's Degree",
    hobby: "Photography",
    favorite_food: "Pizza",
    favorite_color: "Blue",
    favorite_movie: "Inception",
    favorite_book: "1984",
    language: "English",
    nationality: "American",
    marital_status: "Single",
    has_pets: true,
    children: 0,
    car: "Tesla Model S"
};

const russianData = {
    name: "Джон",
    age: 30,
    city: "Нью-Йорк",
    occupation: "Инженер",
    company: "ТехКорп",
    phone: "+1 555 1234",
    email: "john.doe@пример.com",
    address: "ул. Эльм, 123",
    education: "Степень бакалавра",
    hobby: "Фотография",
    favorite_food: "Пицца",
    favorite_color: "Синий",
    favorite_movie: "Начало",
    favorite_book: "1984",
    language: "Английский",
    nationality: "Американец",
    marital_status: "Не женат",
    has_pets: true,
    children: 0,
    car: "Тесла Модель S"
};

const dataContainer = document.getElementById("dataContainer")
const switcher = document.getElementById("switcher")

function displayData(data){
    dataContainer.innerHTML = ""
    for (const [key, value] of Object.entries(data)) {
        let p = document.createElement("p")
        p.textContent = `${key}: ${value}`
        dataContainer.appendChild(p)
    }
}

function updateLanguage(language){
    const url = new URL(window.location.href)
    url.searchParams.set("lang",language)
    window.history.pushState({}, "", url)
}

let params = new URLSearchParams(window.location.search)
let initialLanguage = params.get("lang") === "ru" ? "russian" : "english"
let currentLanguage = initialLanguage

if (currentLanguage === "russian") {
    displayData(russianData)
    switcher.textContent = "Switch to English"
} else {
    displayData(englishData)
    switcher.textContent = "Switch to Russian"
}

switcher.addEventListener("click", () => {
    if (currentLanguage === "english") {
        displayData(russianData)
        switcher.textContent = "Switch to English"
        currentLanguage = "russian"
        updateLanguage("ru")
    } else {
        displayData(englishData)
        switcher.textContent = "Switch to Russian"
        currentLanguage = "english"
        updateLanguage("en")
    }
})
