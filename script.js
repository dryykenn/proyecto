const petals = document.querySelector('.petals');
for (let i = 0; i < 30; i++) {
  const petal = document.createElement('i');
  petal.className = 'petal';
  petal.style.left = `${Math.random() * 100 - 20}vw`;
  petal.style.top = `${Math.random() * 45 - 18}vh`;
  petal.style.setProperty('--d', `${10 + Math.random() * 12}s`);
  petal.style.setProperty('--l', `${-Math.random() * 18}s`);
  petal.style.transform = `scale(${.55 + Math.random()})`;
  petals.append(petal);
}
function fillGarden(layer, count, scaleBase) {
  for (let i = 0; i < count; i++) {
    const flower = document.createElement('div');
    flower.className = 'field-flower';
    flower.style.setProperty('--x', `${Math.random() * 108 - 4}%`);
    flower.style.setProperty('--s', scaleBase + Math.random() * .55);
    flower.style.setProperty('--h', `${45 + Math.random() * 72}px`);
    flower.style.setProperty('--r', `${-13 + Math.random() * 26}deg`);
    flower.innerHTML = '<span class="field-head"><i></i></span><span class="field-stem"></span><span class="field-leaf leaf-left"></span><span class="field-leaf leaf-right"></span>';
    layer.append(flower);
  }
}
fillGarden(document.querySelector('.back'), 34, .42);
fillGarden(document.querySelector('.front'), 28, .72);
const intro = document.querySelector('.intro');
const music = document.querySelector('#music');
const sound = document.querySelector('.sound');
intro.querySelector('button').addEventListener('click', async () => {
  intro.classList.add('off');
  try { await music.play(); sound.classList.add('playing'); } catch { sound.title = 'No se pudo iniciar el audio.'; }
});
sound.addEventListener('click', async () => {
  if (music.paused) { try { await music.play(); sound.classList.add('playing'); } catch {} }
  else { music.pause(); sound.classList.remove('playing'); }
});
document.querySelector('.replay').addEventListener('click', () => {
  document.querySelectorAll('.kendry,.gift-flower,.her,.arm-right,.her-arm,.speech').forEach(el => { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; });
});
