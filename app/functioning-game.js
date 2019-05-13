var modifier = 10

var health = 100

var playerHealth = 100

var winCount = 0


document.getElementById("healthLvl").innerText = health


function whenPressedM() {
  health--
  // alert(health.toLocaleString)
  drawPage()
}

function whenPressedI() {
  health -= 10
  // alert(health.toLocaleString)
  drawPage()
}

function whenPressedC() {
  health -= 20
  // alert(health.toLocaleString)
  drawPage()
}

function whenPressedK() {
  health -= 29
  // alert(health.toLocaleString)
  drawPage()
}
function reset() {
  modifier = 10
  winCount = 0
  health = 100
  drawPage()

}

function drawPage() {



  document.getElementById("healthLvl").innerText = health

  document.getElementsByClassName("progress-bar")[0].setAttribute("style", `width: ${health}%`)

}
