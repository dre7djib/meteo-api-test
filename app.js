const listDiv_Day = ['div4','div5','div6','div7','div8'];


const weather = 'https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&daily=temperature_2m_max';
fetch(weather)
.then(response => response.json())
.then(data => {
    const temperature = document.createElement('p');
    temperature.innerHTML = `${data.daily.temperature_2m_max[0]}${data.daily_units.temperature_2m_max}`;
    document.getElementById("div2").appendChild(temperature);

    // Affichage des jours suivants
    for (let i = 0; i < length.listDiv_Day; i++) {
      const day = document.createElement('p');
      day.innerHTML = `${data.daily.time[i]}`;
      document.getElementById(listDiv_Day[i]).appendChild(day);
    }
    
})




const card = document.querySelector('.shifting-card');
const { x, y, width, height } = card.getBoundingClientRect();
const cx = x + width / 2;
const cy = y + height / 2;

const handleMove = e => {
  const { pageX, pageY } = e;
  const dx = (cx - pageX) / (width / 2);
  const dy = (cy - pageY) / (height / 2);
  e.target.style.transform =
    `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`;
};

const handleOut = e => {
  e.target.style.transform = 'initial';
};

card.addEventListener('mousemove', handleMove);
card.addEventListener('mouseout', handleOut);