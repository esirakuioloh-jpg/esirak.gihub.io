const gallery = document.getElementById('gallery');
const background = document.querySelector('.background');
const tgButton = document.querySelector('.tg-button');
const logo = document.querySelector('.logo');
const alexContainer = document.querySelector('.alex-container');
const steveContainer = document.querySelector('.steve-container');

const skins = [
    "ани2.png","биб3.png","блд3.png","бро3.png","вои3.png","го3.png",
    "голуби3.png","голув3.png","девочк3.png","дединсд3.png","дее3.png",
    "демонг3.png","дж3 (1).png","зелг3.png","космо3.png","кост3.png",
    "кош3.png","медок3 (1).png","муж3 (1).png","огн3.png","офо3.png",
    "пирогн1.png","пуг3.png","раз3 (1).png","реше3.png","решее3.png",
    "розо3.png","розоголи3.png","рыц скалк3 (1).png","рыца3 (1).png",
    "рыцарская сакура 3 (1).png","рыцг3.png","скалуч3.png","слеп3.png",
    "спр3.png","стим3.png","трус3 (1).png","уцоа3.png","учск3.png",
    "фра3.png","худ3.png","шалкур3.png"
];

// Добавление изображений в галерею
skins.forEach(file => {
    const img = document.createElement('img');
    img.src = `skins/${file}`;
    img.alt = file.replace(/\.[^/.]+$/, ""); 
    gallery.appendChild(img);
});

// Проверка видимости элемента
const isInViewport = element => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
};

// Появление при загрузке
window.addEventListener('load', () => {
    setTimeout(() => {
        logo.classList.add('show');
        tgButton.classList.add('show');
        alexContainer.classList.add('show');
        steveContainer.classList.add('show');
    }, 50);
});

// Скролл
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(scrollTop / docHeight, 1);

    // Фон: blur + scale
    background.style.filter = `blur(${scrollPercent * 25}px)`;
    background.style.transform = `scale(${1 + scrollPercent * 0.05})`;

    // Галерея
    gallery.classList.toggle('visible', scrollTop > 50);
    document.querySelectorAll('.gallery img').forEach(img => {
        img.classList.toggle('show', isInViewport(img) && gallery.classList.contains('visible'));
    });

    // Логотип, TG и персонажи
    const atTop = scrollTop === 0;
    logo.classList.toggle('show', atTop);
    logo.classList.toggle('hide', !atTop);

    tgButton.classList.toggle('show', atTop);
    tgButton.classList.toggle('hide', !atTop);

    alexContainer.classList.toggle('show', atTop);
    alexContainer.classList.toggle('hide', !atTop);

    steveContainer.classList.toggle('show', atTop);
    steveContainer.classList.toggle('hide', !atTop);
});