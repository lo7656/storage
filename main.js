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
    }
    console.log(json)
    json.forEach(element => {
        let card = `<a class="localpagelist2__block" href="#"><span class="localpic localpagelist2__block-pic localpic--small"><img src="${element.image}" alt="" title="" /></span><span class="localpagelist2__block-text">${element.name}</span></a>`
        document.querySelector('.localpagelist2').innerHTML += card;
        console.log(card)
    });
}

fetch('https://raw.githubusercontent.com/lo7656/storage/master/data.json', { method: 'GET' })
    .then(response => response.json())
    .then(body => maker(body))
    .catch(error => console.log(error))