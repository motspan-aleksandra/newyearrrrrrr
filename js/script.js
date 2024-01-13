let cats = ['img/cat1.gif', 'img/cat2.gif', 'img/cat3.gif', 'img/cat4.gif', 'img/cat5.gif', 'img/cat6.gif', 'img/cat7.gif'];
let a = Math.round(Math.random() * 5);
console.log(a);

let cat = 'url(img/cats/cat' + (Math.floor(Math.random() * 6) + 1) + '.gif)';


let poems = [
    {
        poemText: `
        <p>
            Пусть отзовется искоркой тепла,<br>
            Этот праздник славный в сердце каждом,<br>
            Так, чтоб душа от счастья расцвела,<br>
            И чтобы сказкой стала жизнь однажды!
        </p>
        <p>
            Он воплотит заветные мечты,<br>
            Самые прекрасные и смелые надежды,<br>
            И в мире станет больше доброты.<br>
            В этот праздник зимний, белоснежный!
        </p>`,
        bg: `url(img\jamie-fenn-PEVG_cqrIVo-unsplash.jpg)`
    },
    {
        poemText: `
        <p>
            Волшебство стучится в дом,<br>
            Снег сверкает серебром, <br>
            Скоро добрый Новый год<br>
            В нашу с вами жизнь войдет!
        </p>

        <p>
            Пусть нас радует теплом,<br>
            Станет к счастью он мостом.<br>
            Чтобы каждый день подряд<br>
            Был любовью полон взгляд!
        </p>`,
        bg: `url(img\annie-spratt-Z9Ds4w141i4-unsplash.jpg)`
    }
]

let wrapper = document.querySelector('.wrapper');
let btn = document.getElementById('btn');
let poem = document.querySelector('.content__poem');

btn.addEventListener('click', function () {
    let randomIndex;
    randomIndex = Math.floor(Math.random() * poems.length);
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;




})








document.getElementById("cat-img").style.content = cat;



























/*

Пусть отзовется искоркой тепла,
Этот праздник славный в сердце каждом,
Так, чтоб душа от счастья расцвела,
И чтобы сказкой стала жизнь однажды!
Он воплотит заветные мечты,
Самые прекрасные и смелые надежды,
И в мире станет больше доброты.
В этот праздник зимний, белоснежный!
© https://t-loves.narod.ru/stihi-pro-noviy-god.htm


*/