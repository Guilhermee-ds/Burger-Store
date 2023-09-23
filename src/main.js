const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link =>
    link.addEventListener('click', () =>{
        navMenu.classList.add('hidden');
    }),
    )

navClose.addEventListener('click', () =>{
    navMenu.classList.add('hidden');
}),

hamburger.addEventListener("click",() =>{
    navMenu.classList.remove('hidden');
})

/**~TABS~*/

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const beverages = document.querySelectorAll(".beverage");
const snacks = document.querySelectorAll(".snack");

tabs.forEach(tab =>{
    tab.addEventListener("click",() =>{
        tabs.forEach(tab =>{
            tab.classList.remove('active');
        })

        tab.classList.add('active');

        const tabval = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display = 'none'
        })

        if(tabval == 'food'){
            foods.forEach(item => {
                item.style.display = 'block'
            })
       }

       else if(tabval == 'snack'){
        snacks.forEach(item => {
            item.style.display = 'block'
        })
   }
    else if(tabval == 'beverage'){
        beverages.forEach(item => {
            item.style.display = 'block'
        })
    }
    else {
        all.forEach(item => {
            item.style.display = 'block'
        })
    }

    })
})

/**~DARK MODE~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

window.addEventListener('scroll', scrollUp)

/**~SCROLL~*/
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav__link");
  
    let current = "home";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
  
      if (this.scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((item) => {
      item.classList.remove("text-secondaryColor");
      if (item.href.includes(current)) {
        item.classList.add("text-secondaryColor");
      }
    });
  };
  
  window.addEventListener('scroll', activeLink)
  