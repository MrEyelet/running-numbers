const numberUp = $(".tile__counter")
const runSpeed = $(".tile__conunter").attr("data-run-speed")
numberUp.countUp({
  delay: 10,
  time: runSpeed
})
