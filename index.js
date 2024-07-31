const clock = document.getElementById('clock')
const day = document.getElementById('date')

setInterval(()=>{
    let date = new Date()
    let d = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    day.innerHTML =d.toDateString();
}, 1000)