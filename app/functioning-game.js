var modifier = 10

var health = 100

var playerHealth = 100

var winCount = 0
drawPage()

document.getElementById("healthLvl").innerText = health

setInterval(playerHealth-- , 500);

function whenPressedM() {
  health -= 1
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

  if (health < 0) {
    health = 0
    document.getElementsByClassName("weapon").set

  }
  if (playerHealth < 0) {
    playerHealth = 0
  }

  // if (health = 0) {
  // document.getElementById("healthLvl").innerText = "You won"
  // } // else {
  //   document.getElementsByClassName("weapon=").disabled = false

  // }

  document.getElementById("healthLvl").innerText = health

  document.getElementById("player-health-readout").innerText = playerHealth


  document.getElementsByClassName("progress-bar")[0].setAttribute("style", `width: ${health}%`)

  document.getElementsByClassName("progress-bar")[1].setAttribute("style", `width: ${playerHealth}%`)

}
