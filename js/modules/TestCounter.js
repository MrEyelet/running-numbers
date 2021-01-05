import counterUp from "counterup2"

class TestCounter {
  constructor() {
    // const el = document.querySelectorAll(".tile__counter")
    // this.runSpeed = $(".tile__conunter").attr("data-run-speed")
    // const el = document.querySelectorAll(".tile__counter")
    // el.forEach(this.testFunc)

    // counterUp(el, {
    //   duration: 1000,
    //   delay: 16
    // })

    // Start counting, do this on DOM ready or with Waypoints.
    // counterUp(el, {
    //   duration: 1000,
    //   delay: 16
    // })

    // this.events()

    // this.testFunc()

    const el = document.querySelectorAll(".tile__counter")
    el.forEach(function () {
      counterUp(el, {
        duration: 1000,
        delay: 16
      })
    })
  }

  testFunc() {
    console.log("test")

    const el = document.querySelectorAll(".tile__counter")
    el.forEach(function () {
      counterUp(el, {
        duration: 1000,
        delay: 16
      })
    })
  }
  events() {
    // document.addEventListener("DOMContentLoaded", event => {
    //   window.onload = () => {
    //     window.requestAnimationFrame(() => {
    //       this.counterRunning()
    //     })
    //   }
    // })
    // this.counterRunning()
    // console.log($(".tile__counter"))
    counterUp(this.el, {
      duration: runSpeed,
      delay: 16
    })
  }

  // counterRunning() {
  //   const el = document.querySelector(".tile__counter")
  //   const runSpeed = $(".tile__conunter").attr("data-run-speed")
  //   counterUp(el, {
  //     duration: runSpeed,
  //     delay: 16
  //   })
  // }
}

export default TestCounter
