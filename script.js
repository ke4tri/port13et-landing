    const phrases = ["Simple", "No clutter", "Just works"];
    const el = document.getElementById("fade-text");
    const background = document.querySelector(".background-fade");
    const linksContainer = document.querySelector('.fade-links');
    const links = document.querySelectorAll('.fade-link');

    let index = 0;

 



    function fadeCycle() {
      el.style.opacity = 1;

      setTimeout(() => {
        el.style.opacity = 0;
      }, 2500);

      setTimeout(() => {
        index++;
        if (index < phrases.length) {
          el.textContent = phrases[index];
          fadeCycle();
        } else {
          background.style.opacity = 1;

          // 👇 Add this block to trigger the links fade-in
          linksContainer.style.opacity = 1;
          linksContainer.style.pointerEvents = 'auto';

          links.forEach(link => {
            link.style.opacity = 1;
            link.style.transform = 'translateY(0)';
          });
        }
      }, 5000);

    
    }

window.onload = () => {
  const fromPage = sessionStorage.getItem('fromPage');

  if (fromPage) {
    // Skip animations
    el.style.opacity = 0;
    background.style.opacity = 1;

    // Immediately show links
    linksContainer.style.opacity = 1;
    linksContainer.style.pointerEvents = 'auto';
    links.forEach(link => {
      link.style.opacity = 1;
      link.style.transform = 'translateY(0)';
    });

    // Clear the flag so next time it animates
    sessionStorage.removeItem('fromPage');
  } else {
    // Normal animation flow
    fadeCycle();
  }
};
