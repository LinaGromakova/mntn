const btnNavArr = document.querySelectorAll('#btn-nav');
const contentArr = document.querySelectorAll('.nav-sec');
const navRadioArr = document.querySelectorAll('#nav-radio');
const btnHamburgerEl = document.getElementById('hamburger');
const menuEl = document.getElementById('menu');
const formAccEl = document.getElementById('form-acc');
const accountBtnEl = document.getElementById('btn-acc');
const btnCloseForm = document.getElementById('btn-acc-close');

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

window.addEventListener('scroll', (e) => {
  document.body.style.setProperty('--scrollTop', this.scrollY + 'px');

  let index = Math.floor(window.scrollY / 800);
  navRadioArr.forEach((el, indexEl) => {
    index === indexEl ? (el.checked = true) : undefined;
  });
});

btnNavArr.forEach((btn, indexBtn) => {
  btn.addEventListener('click', () => {
    contentArr.forEach((section, index) => {
      let position = section.getBoundingClientRect().top;
      indexBtn === index
        ? window.scrollBy({
            top: position,
            behavior: 'smooth',
          })
        : undefined;
    });
  });
});

btnHamburgerEl.addEventListener('click', () => {
  menuEl.classList.toggle('active');
  document.body.classList.toggle('active');
  btnHamburgerEl.classList.toggle('active');
});

accountBtnEl.addEventListener('click', () => {
  formAccEl.classList.add('active');
  document.body.classList.add('active');
});
btnCloseForm.addEventListener('click', () => {
  formAccEl.classList.remove('active');
  document.body.classList.remove('active');
});

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2,
    effects: true,
  });

  gsap.fromTo(
    '.section-hero',
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: '.section-hero',
        start: 'start',
        end: '1000',
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    '.footer',
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.footer',
        start: '-700',
        end: '-500',
        scrub: true,
      },
    }
  );

  let itemsL = gsap.utils.toArray('.item-left');
  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-400',
          end: '-100',
          scrub: true,
        },
      }
    );
  });

  let itemsR = gsap.utils.toArray('.item-right');
  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-400',
          end: '-100',
          scrub: true,
        },
      }
    );
  });
}
