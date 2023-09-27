const startBtn = document.getElementById('start-btn');
const counterDiv = document.getElementById('counter');

let interval = null;

startBtn.addEventListener('click', function(){
  if(interval !== null){
    return;
  }

  let countTo = 0;
  countTo = parseInt(document.getElementById('count-to').value);
  if(isNaN(countTo) || countTo < 1 || countTo > 101){
    return;
  }

  let currentCount = 0;
  interval = setInterval(function(){
    currentCount++;
    if(currentCount > countTo){
      clearInterval(interval);
      return;
    }
    else{
      counterDiv.innerText = currentCount;
    }
  }, 1000);
});