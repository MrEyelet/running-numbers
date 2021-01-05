require("waypoints/lib/noframework.waypoints.js")
import counterUp from "counterup2"

class RunningNumbers {
  constructor() {
    this.events()
  }

  events() {
    const el = document.querySelectorAll(".tile__counter")
    const runSpeed = document.querySelector("[data-run-speed]").getAttribute("data-run-speed")
    // console.log(runSpeed)
    el.forEach(testFunc)

    function testFunc(item) {
      new Waypoint({
        element: item,
        handler: function () {
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
