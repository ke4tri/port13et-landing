    const phrases = ["Simple", "Clutterless", "Agent Solutions","That work"];
const el = document.getElementById("fade-text");
const background = document.querySelector(".background-fade");
const linksContainer = document.querySelector('.fade-links');
const links = document.querySelectorAll('.fade-link');
const logo = document.querySelector('.site-logo');
let index = 0;

function fadeCycle() {
  el.style.opacity = 1;

  setTimeout(() => { el.style.opacity = 0 }, 2500);

  setTimeout(() => {
    index++;
    if (index < phrases.length) {
      el.textContent = phrases[index];
      fadeCycle();
    } else {
      showPageSpread();
    }
  }, 5000);
}

function showPageSpread() {
  background.style.opacity = 1;
  linksContainer.style.opacity = 1;
  linksContainer.style.pointerEvents = 'auto';
  links.forEach(link => {
    link.style.opacity = 1;
    link.style.transform = 'translateY(0)';
  });

  startLogoSequence();
}

function startLogoSequence() {
  // Stage 1: One quick flicker on, hold briefly, then hide
  flicker(25, () => {
    logo.classList.add('visible');
    setTimeout(() => {
      logo.classList.remove('visible');

      // Stage 2: After a 3-sec pause, flicker twice fast
      setTimeout(() => {
        flicker(100, () => {
          setTimeout(() => {
            flicker(100, () => {
              logo.classList.remove('visible');

              // Stage 3: Quick burst flicker
              setTimeout(() => {
                quickBurst(5, 80, () => {
                  // Stage 4: Random flicker starts
                  logo.classList.add('random-flicker');
                });
              }, 1500);
            });
          }, 300); // Between second flicker
        });
      }, 3000); // After first flicker
    }, 500); // First visible logo duration
  });
}



function flicker(duration, cb) {
  logo.classList.add('visible');
  setTimeout(() => {
    logo.classList.remove('visible');
    if (cb) cb();
  }, duration);
}
function quickBurst(times, duration, cb) {
  let count = 0;
  const interval = setInterval(() => {
    logo.classList.toggle('visible');
    count++;
    if (count >= times * 2) {
      clearInterval(interval);
      logo.classList.add('visible');
      if (cb) cb();
    }
  }, duration);
}

window.onload = () => {
  if (sessionStorage.getItem('fromPage')) {
    sessionStorage.removeItem('fromPage');
    showPageSpread();
  } else {
    fadeCycle();
  }
};