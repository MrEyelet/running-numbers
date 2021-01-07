import { gsap, Power4 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

class RevealComponent {
  constructor() {
    this.events()
  }

  events() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".component-title",
        start: "center bottom",
        end: "center center",
        scrub: 2
        // markers: true
      }
    })
    tl.from(".component-title__overlay", { duration: 1, scaleX: 0, ease: Power4.easeOut }, "=+0.25")
      //
      .to(".component-title__inner", { duration: 0, opacity: 1, ease: Power4.easeOut })
      //
      .to(".component-title__overlay", { duration: 2.5, scaleX: 0, transformOrigin: "right", ease: Power4.easeOut })
      //
      .from(".tile", { duration: 1.5, x: "30%", opacity: 0, stagger: 0.15, ease: Power4.easeOut }, "=-1.5")
  }
}

export default RevealComponent
