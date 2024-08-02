/*jshint esversion: 6*/
//Сохранение текста в локальное хранилище
const texts = [
    "branding",
    "design",
    "photography",
    "artificial Intelligence",
    "illustration",
    "typography",
    "social Networks",
    "research",
    "drone Pilot",
    "games"
];

//функция обработки интересов
const container = document.getElementById('tag-conteiner');

texts.forEach((text, index) => {
    const oval = document.createElement('article');
    oval.classList.add('tag-form'); 
    oval.setAttribute('contenteditable', 'true');
    oval.setAttribute('id', `tag-${index}`);
    oval.textContent = text;

    const savedText = localStorage.getItem(`tag-${index}`);
    if (savedText) {
        oval.textContent = savedText;
    }

    container.appendChild(oval);
});

// Сохранение данных в localStorage
document.querySelectorAll('[contenteditable=true]').forEach((element) => {
    element.addEventListener('input', () => {
        const id = element.getAttribute('id');
        localStorage.setItem(id, element.innerText);
    });
});

// Загрузка данных из localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[contenteditable=true]').forEach((element) => {
        const id = element.getAttribute('id');
        if (localStorage.getItem(id)) {
            element.innerText = localStorage.getItem(id);
        }
    });
});

//Material wave

document.addEventListener('click', function(event) {
    const waveContainer = document.querySelector('.wave-container');
    const wave = document.createElement('div');
    wave.classList.add('wave');
    
    const size = Math.max(window.innerWidth, window.innerHeight);
    wave.style.width = wave.style.height = `${size}px`;
    wave.style.left = `${event.clientX - size / 2}px`;
    wave.style.top = `${event.clientY - size / 2}px`;
  
    waveContainer.appendChild(wave);
  
    wave.addEventListener('animationend', () => {
      wave.remove();
    });
  });
  
  //Сохранение в pdf
  window.onload = function(){
    document.getElementById("download")
    .addEventListener("click", ()=>{
        const page = this.document.getElementById("page");
        console.log(page);
        console.log(window);
        var opt = {
            margin:       0,
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
          };
        html2pdf().from(page).set(opt).save();
    });
  };