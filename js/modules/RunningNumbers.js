require("waypoints/lib/noframework.waypoints.js")
import counterUp from "counterup2"

class RunningNumbers {
  constructor() {
    this.el = document.querySelectorAll(".tile__counter")
    this.events()
  }

  events() {
    this.el.forEach(inViewport)
    const runSpeed = document.querySelector("[data-run-speed]").getAttribute("data-run-speed")
    // console.log(runSpeed)

    function inViewport(item) {
      new Waypoint({
        element: item,
        handler: () => {
          counterUp(item, {
            duration: runSpeed
          })
          // this.destroy()
        },
        offset: "bottom-in-view"
      })
    }
  }
}

export default RunningNumbers
