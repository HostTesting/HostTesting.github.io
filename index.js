var x = 0

function updateProgress(percent) {
    var progress = document.getElementById("progress");
    progress.style.width = percent + "%";
  }


var input = document.getElementById("input");
input.addEventListener('input', function check(){
    var text = document.getElementById("text");
    var progress = document.getElementById("input").value;
    if (progress[x] === text.innerText[x]) {
        text.classList.add("right")
        text.classList.remove("wrong")
        console.log(progress)
        x = progress.length
        updateProgress(x/6.5)
        return x
    }
    else if (progress[x] !== text.innerText[x]){
        text.classList.add("wrong")
        text.classList.remove("right")
        x = progress.length
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
timer.style.color = "gold"
var remainingSeconds = 10;
function start(){
    var y = setInterval(function() {
        if (remainingSeconds > 0) {
        timer.innerHTML = remainingSeconds + "s ";
        remainingSeconds--;
        } else {
        clearInterval(y);
        timer.innerHTML = "RESTART";
        if(text.classList.contains("right") === true && x < 600){
            alert("Your time is up")
            alert("Your typing speed is "+ Number(x/5) + " WPM")
        }
        else if (text.classList.contains("wrong") === true && x < 600){
            alert("You made a mistake")
        }
        else if (x > 600){
            alert("You copy pasta cheater!")
            alert("!!!!!!!!!!!")
            alert("You dare cheat!!!!!!!!!!")
            text.classList.add("wrong")
        }
        }
        console.log(x)
    }, 1000);
}

function reset(){
    location.reload()
}
