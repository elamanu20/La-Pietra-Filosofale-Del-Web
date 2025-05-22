const capelli = document.getElementById('capelli');
const occhi = document.getElementById('occhi');
const vestiti = document.getElementById('vestiti');

const selezioneCapelli = document.getElementById('selezione-capelli');
const selezioneOcchi = document.getElementById('selezione-occhi');
const selezioneVestiti = document.getElementById('selezione-vestiti');

selezioneCapelli.addEventListener('change', () => {
  capelli.style.backgroundImage = `url(${selezioneCapelli.value})`;
});

selezioneOcchi.addEventListener('change', () => {
  occhi.style.backgroundImage = `url(${selezioneOcchi.value})`;
});

selezioneVestiti.addEventListener('change', () => {
  vestiti.style.backgroundImage = `url(${selezioneVestiti.value})`;
});