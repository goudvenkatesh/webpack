let textEl = document.getElementById('text');
let readMoreBtnEl = document.getElementById('readButton');
let previousBtnEl = document.getElementById('previousBtn');
let nextBtnEl = document.getElementById('nextBtn');
let sliderTextEl = document.getElementById('sliderText');


let fullText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum Lorem Ipsum is simply dummy text of the printing typesetting in-dustry Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum Lorem Ipsum is simply dummy text of the printing typesetting in-dustry."
let shortText = fullText.slice(0, 275) + "...";

let isCollapse = true;

textEl.textContent=shortText;
function onToggleText() {
    if (isCollapse) {
        textEl.textContent = fullText;
        readMoreBtnEl.textContent = 'ReadLess';
    } else {
        textEl.textContent = shortText;
        readMoreBtnEl.textContent = 'ReadMore..';
    }
    isCollapse = !isCollapse;
}



let currentIndex = 0;
const clients = document.querySelectorAll('.client');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateActiveClient() {
    clients.forEach((client, index) => {
        client.classList.toggle('active', index === currentIndex);
    });

    prevBtn.disabled = currentIndex === 0;

    nextBtn.disabled = currentIndex === clients.length - 1;
}

function prevClient() {
    if (currentIndex > 0) {
        currentIndex--;
        updateActiveClient();
    }
}

function nextClient() {
    if (currentIndex < clients.length - 1) {
        currentIndex++;
        updateActiveClient();
    }
}

function autoScroll(){
    nextClient()
}

let autoScrollInterval=setInterval(autoScroll,3000);

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

function restartAutoScroll() {
    autoScrollInterval = setInterval(autoScroll, 3000);
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        stopAutoScroll();
        setTimeout(restartAutoScroll, 3000); 
    });
});