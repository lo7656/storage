
//отправка формы

$(document).ready(function () {
    $('.trigger').on('click', function () {
        let mas = document.querySelectorAll('.localpagelist2__block-pic')
        let btn = document.querySelectorAll('.email-bt')
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        mas.forEach(element => {
            if (element.style.position == 'inherit')
                element.style.position = 'relative'
            else
                element.style.position = 'inherit'
        });

        if (btn.style.display != "none")
            btn.style.display = "none"
        else
            btn.style.display = "block"

        return false;
    });

    $('.sendBtn').on('click', function () {
        let count = localStorage.getItem('key')
        let products = ''
        for (let i = 1; i < count; i++) {
            const elementImg = localStorage.getItem(`image${i}`)
            const elementName = localStorage.getItem(`name${i}`)
            products += `<div class="card" id="${i + 1}card"><div class="info"><p class="nameCard">${elementName}</p> <img class="imgCard" src="${elementImg}"/></div></div>`
        }

        Email.send({
            SecureToken: "0c5be240-0909-400e-90ea-cf9754b22f65",
            To: 'viliton555@mail.ru',
            From: "dush3z@yandex.com",
            Subject: "ЗАказ с сайта!",
            Body: products
        }).then(
            message => alert(message),
            localStorage.clear(),
            listAdd()
        );
    })
});

let data
let test

if (localStorage.key == null)
    localStorage.setItem('key', 0)

function deleteCard(card) {
    let idCard = card.id
    test = idCard
    console.log(idCard)
    localStorage.removeItem(`image${idCard}`)
    localStorage.removeItem(`name${idCard}`)


    for (let i = 1; i < localStorage.getItem('key'); i++) {
        if (i != idCard || i > idCard) {
            localStorage.setItem(`name${i - 1}`, localStorage.getItem(`name${i}`))
            localStorage.setItem(`image${i - 1}`, localStorage.getItem(`image${i}`))
        }

    }
    localStorage.setItem('key', Number(localStorage.getItem('key')) - 1)


    listAdd()
}

function add(card) {
    let value = getItems(card.id)
    counter(value)
    listAdd()
}

function listAdd() {
    let count = localStorage.getItem('key')
    document.querySelector('.cards').innerHTML = ''

    for (let i = 1; i < count; i++) {
        const elementImg = localStorage.getItem(`image${i}`)
        const elementName = localStorage.getItem(`name${i}`)
        let card = `<div class="card" id="${i + 1}card"><div class="info"><p class="nameCard">${elementName}</p> <img class="imgCard" src="${elementImg}"/></div> <a onClick="deleteCard(event.currentTarget)" id="${i}" class="deleteBtn">Удалить</a></div>`
        document.querySelector('.cards').innerHTML += card;
    }
}

function counter(value) {
    localStorage.setItem('name' + localStorage.getItem('key'), value.name)
    localStorage.setItem('image' + localStorage.getItem('key'), value.image)
    localStorage.setItem('key', Number(localStorage.getItem('key')) + 1)
}

function getItems(id) {
    return data[id]
}

function maker(json) {
    switch (location.pathname) {
        case "/fruit":
            json = json.Фрукты
            break;
        case "/vegetables":
            json = json.Овощи
            break;

        case "/herbs":
            json = json.Травы
            break;

        case "/exfruit":
            json = json.Экзофрукты
            break;

        case "/exvegetables":
            json = json.Экзоовощи
            break;

        case "/berries":
            json = json.Ягоды
            break;

        case "/mushrooms":
            json = json.Грибы
            break;

        case "/salads":
            json = json.Салаты
            break;

        case "/pickles":
            json = json.Соления
            break;

        case "/nuts":
            json = json.Орехи
            break;

        case "/driedfruits":
            json = json.Сухофрукты
            break;

        case "/evacuated":
            json = json.ВакуумированныеОвощи
            break;

        case "/boiledvegetables":
            json = json.ОтварныеОвощи
            break;

        case "/meat":
            json = json.Мясо
            break;

        case "/sausages":
            json = json.Мясныеизделия
            break;

        case "/jams":
            json = json.Джемы
            break;

        case "/sauces":
            json = json.Соусы
            break;

        case "/conservation":
            json = json.Консервация
            break;

        case "/east":
            json = json.Восток
            break;

        case "/grocery":
            json = json.Бакалея
            break;

        case "/spice":
            json = json.Специи
            break;

        case "/tea":
            json = json.Чай
            break;

        case "/sweets":
            json = json.Сладости
            break;
    }
    data = json
    let id = 0

    listAdd()
    json.forEach(element => {
        let card = `<a onclick="add(event.currentTarget)" style="cursor: pointer;"id="${id}" class="localpagelist2__block"><span class="localpic localpagelist2__block-pic localpic--small"><img src="${element.image}" alt="" title="" /></span><span class="localpagelist2__block-text">${element.name}</span></a>`
        document.querySelector('.localpagelist2').innerHTML += card;
        id++
    });
}

fetch('https://raw.githubusercontent.com/lo7656/storage/master/data.json', { method: 'GET' })
    .then(response => response.json())
    .then(body => maker(body))
    .catch(error => console.log(error))

