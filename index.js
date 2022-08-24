async function fetchChartData(){
  const chartFetch = await fetch("./data.json")
  const chartData = await chartFetch.json()
  for(let i = 0; i < chartData.length; i++) {
    days[i].innerText =chartData[i]["day"]
    hints[i].innerText = "$" +chartData[i]["amount"]
    graphs[i].style.height = chartData[i]["amount"] + "px"
  }
}
const graphs = document.querySelectorAll(".graph")
const days = document.querySelectorAll(".day")
const hints = document.querySelectorAll(".hint")
fetchChartData()
graphs.forEach((a, b) => a.addEventListener("mouseover", () =>{
  hints[b].style.scale = "1"
  hints[b].style.display = "block"
}))
graphs.forEach((a, b) => a.addEventListener("mouseout", () =>{
  hints[b].style.scale = "0"
}))
graphs[new Date().getDay()].style.backgroundColor = "var(--Cyan)" //change background color of today bar