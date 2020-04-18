let data
if (localStorage.key == undefined)
    localStorage.setItem('key', 0)

function add(card) {
    let value = getItems(card.id)
    counter(value)
}

function counter(value){
    localStorage.setItem(localStorage.key, value)
    localStorage.setItem('key', Number(localStorage.getItem('key'))+1)
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