const weather = 'https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&daily=temperature_2m_max';
fetch(weather)
.then(response => response.json())
.then(data => {
    const adviceElement = document.createElement('p');
    adviceElement.innerHTML = `${data.daily.temperature_2m_max[0]}${data.daily_units.temperature_2m_max}`;
    document.getElementById("div2").appendChild(adviceElement);
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