var x = 0

function updateProgress(percent) {
    var progress = document.getElementById("progress");
    progress.style.width = percent + "%";
  }

document.addEventListener('keydown', function check(){
    var text = document.getElementById("text");
    var progress = document.getElementById("input").value;
    if (progress[x] === text.innerText[x]) {
        text.classList.add("right")
        text.classList.remove("wrong")
        console.log(progress)
        x += 1
        updateProgress(x/6.5)
        return x
    }
    else if (progress[x] !== text.innerText[x]){
        text.classList.add("wrong")
        text.classList.remove("right")
    }
})

function submit(){
    var text = document.getElementById("text")
    var progress = document.getElementById("input").value;
    console.log(text.innerText[0])
    if (progress === text.innerText){
        alert("You have completed it succesfully")
    }
    else if(progress !== text.innerText){
        alert("You have made a mistake. Please try again.")
    }
}

var timer = document.getElementById("timer");
var remainingSeconds = 60;
function start(){
    var y = setInterval(function() {
        if (remainingSeconds > 0) {
        timer.innerHTML = remainingSeconds + "s ";
        remainingSeconds--;
        } else {
        clearInterval(y);
        timer.innerHTML = "RESTART";
        if(text.classList.contains("right") === true){
            alert("Your time is up")
            alert("Your typing speed is "+ Number(x/5) + " WPM")
        }
        else if (text.classList.contains("wrong") && x < 10){
            alert("You're either a copy pasta cheater or you're really slow")
        }
        }
        console.log(x)
    }, 1000);
}

function reset(){
    location.reload()
}