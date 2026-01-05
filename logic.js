const clock = document.querySelector('.timeslot');


setInterval(() => {
    let date = new Date()
const newdate = date.toLocaleTimeString()
clock.textContent = newdate;
}, 1000);