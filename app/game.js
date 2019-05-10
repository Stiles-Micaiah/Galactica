let health = 100
document.getElementById("healthLvl").innerText = health


function whenPressed() {
  health--
  // alert(health.toLocaleString)
drawPage()
}


function drawPage() {
  document.getElementById("healthLvl").innerText = health

document.getElementsByClassName("progress-bar")[0].setAttribute("style", `width: ${health}%`)

}


