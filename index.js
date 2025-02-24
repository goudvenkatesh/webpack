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

//adding clients functionality
const clients = ["Dr.Reddy's", "HETERO", "Bharat Biotech", "Biocoin"];

let startIndex = 0;
const visibleClients = 4;

function renderClients() {
    let carousel = document.getElementById("clientCarousel");
    carousel.innerHTML = "";
    let i=0;
    while (i<visibleClients){
        let index = (startIndex + i) % clients.length;
        let clientEl = document.createElement("div");
        clientEl.classList.add("client");
        clientEl.textContent = clients[index];
        carousel.appendChild(clientEl);
        i++;
    }
}

function nextClient() {
    startIndex = (startIndex + 1) % clients.length;
    renderClients();
}

function prevClient() {
    startIndex = (startIndex - 1 + clients.length) % clients.length;
    renderClients();
}

renderClients();