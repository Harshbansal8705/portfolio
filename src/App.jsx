import './App.css';
import React from 'react';
import Header from './MyComponents/Header'
import Hero from './MyComponents/Hero';
import About from './MyComponents/About';
import Projects from './MyComponents/Projects';
import Skills from './MyComponents/Skills';
import Contact from './MyComponents/Contact';

function App() {
  const scrolled = () => {
    const elems = document.querySelectorAll(".invisible-fade-up")
    elems.forEach((elem) => {
      if (getComputedStyle(elem).opacity === "0") {
        elem.style.transition = "transform 0.5s ease, opacity 0.5s ease"
        let y = elem.getBoundingClientRect().y
        let windowHeight = window.innerHeight
        let position = y / windowHeight
        if (position <= 0.8) {
          elem.classList.remove("invisible-fade-up")
        }
      }
    })

    const grids = document.querySelectorAll(".grid-invisible-fade-up")
    grids.forEach(grid => {
      if (getComputedStyle(grid).opacity === "0") {
        let elems = grid.children
        let y = grid.getBoundingClientRect().y
        let windowHeight = window.innerHeight
        let position = y / windowHeight
        if (position <= 0.8) {
          grid.style.opacity = "1"
          Array.from(elems).forEach((elem, i) => {
            setTimeout(() => {
              elem.style.transition = "transform 0.5s ease, opacity 0.5s linear"
              elem.style.transform = "translateY(0)"
              elem.style.opacity = 1
            }, 200 * i)
          })
        }
      }
    })

    const skillRows = document.querySelectorAll(".slide-r-in")
    skillRows.forEach(skillRow => {
      if (getComputedStyle(skillRow).opacity === "0") {
        skillRow.style.transition = "transform 0.5s ease, opacity 0.5s linear"
        let y = skillRow.getBoundingClientRect().y
        let windowHeight = window.innerHeight
        let position = y / windowHeight
        if (position <= 0.8) {
          skillRow.classList.remove("slide-r-in")
        }
      }
    })

    const about = document.querySelector("section.about h2")
    const aboutContent = document.querySelector("section.about div.about-content p")
    if (getComputedStyle(aboutContent).opacity === "0") {
      aboutContent.style.transition = "transform 0.5s ease, opacity 0.5s linear"
      aboutContent.style.transitionDelay = "0.2s"
      console.log(aboutContent)
      let y = about.getBoundingClientRect().y
      let windowHeight = window.innerHeight
      let position = y / windowHeight
      if (position <= 0.8) {
        aboutContent.classList.remove("invisible-fade-left")
      }
    }
    const aboutImage = document.querySelector("section.about div.about-content img")
    if (getComputedStyle(aboutContent).opacity === "0") {
      aboutImage.style.transition = "transform 0.5s ease, opacity 0.5s linear"
      aboutImage.style.transitionDelay = "0.2s"
      console.log(aboutContent)
      let y = about.getBoundingClientRect().y
      let windowHeight = window.innerHeight
      let position = y / windowHeight
      if (position <= 0.8) {
        aboutImage.classList.remove("invisible-slide-up")
      }
    }

  }
  React.useEffect(() => {
    scrolled();
    document.addEventListener("scroll", scrolled)

    return () => document.removeEventListener("scroll", scrolled)
  })
  React.useEffect(() => {
    /*==================== SHOW MENU ====================*/
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
      document.body.addEventListener("click", () => {
        nav.classList.remove("show-menu")
      })

      // Validate that variables exist
      if (toggle && nav) {
        toggle.addEventListener('click', (e) => {
          e.stopPropagation()
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
        })
        nav.addEventListener("click", (e) => {
          e.stopPropagation()
        })
        nav.querySelectorAll("li").forEach(elem => elem.addEventListener("click", () => nav.classList.remove("show-menu")))
        nav.querySelector("div.__dark-mode").addEventListener("click", () => nav.classList.remove("show-menu"))
      }
    }

    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
    showMenu('nav-toggle', 'nav-menu');
    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
      console.log("theme-change")
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
    })
  }, [])
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App;
