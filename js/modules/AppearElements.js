import { TimelineMax, Power1, Power4 } from "gsap"

class AppearElements {
  constructor() {
    this.preloader = document.querySelector(".preloader")
    this.tlShowElements = new TimelineMax({})

    this.events()
  }

  events() {
    document.addEventListener("DOMContentLoaded", event => {
      window.onload = () => {
        window.requestAnimationFrame(() => {
          this.showElements()
        })
      }
    })
  }

  showElements() {
    this.tlShowElements.from(".preloader__cover", { duration: 1.5, x: "200%", ease: Power1.easeOut })
    this.tlShowElements.to(".preloader__outer-circle", { duration: 0.5, opacity: 0, ease: Power4.easeOut }, "=-1.5")
    this.tlShowElements.to(".preloader", { duration: 1.5, x: "-100%", ease: Power4.easeOut }, "=-1")
    this.tlShowElements.from(".hero__text", { duration: 1.5, y: "100%", opacity: 0, stagger: 0.1, ease: Power4.easeOut }, "=-1")
    this.tlShowElements.from(".hero__line", { duration: 1.8, scaleY: 0, ease: Power4.easeOut }, "-=1.2")
    setTimeout(() => {
      this.preloader.remove()
    }, 2500)
  }
}

export default AppearElements
