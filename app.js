window.onload = () =>{
    function buildClock() {
        
        // console.log("Digital Clock");

        const date = new Date();

        // console.log(date);

        let hours = date.getHours(); // 0 - 23
        let minutes = date.getMinutes(); // 0 - 59
        let seconds = date.getSeconds(); // 0 - 59

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('#clock-hours').innerText = hours;
        document.querySelector('#clock-minutes').innerText = minutes;
        document.querySelector('#clock-seconds').innerText = seconds;

        setTimeout(buildClock,1000);
    }
    buildClock();
}