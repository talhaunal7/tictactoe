var numberOfButtons = document.querySelectorAll(".gameButtons").length;
var count = 0;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".gameButtons")[i].addEventListener("click", function() {

    if (count % 2 == 0) {
      this.style.backgroundImage = "url(images/x-button.png)";
      this.disabled = true;

    } else {
      this.style.backgroundImage = "url(images/o-button.png)";
      this.disabled = true;
    }

    count++;

    if (oWinCheck()) {
      oWinCount++;
      document.querySelector(".oScore").innerHTML = "O=" + oWinCount;
      resetGame();
      count = 0;
    } else if (xWinCheck()) {
      xWinCount++;
      document.querySelector(".xScore").innerHTML = "X=" + xWinCount;
      resetGame();
      count = 1;
    } else if (drawCheck()) {
      resetGame();
      count = 0;
    }


  });
}


var oWinCount = 0,
  xWinCount = 0;

function oWinCheck() {
  if (document.querySelectorAll("button")[0].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[1].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[2].style.backgroundImage == 'url("images/o-button.png")'
  ) {


    return true;

  } else if (document.querySelectorAll("button")[3].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[4].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[5].style.backgroundImage == 'url("images/o-button.png")'
  ) {
    return true;
  } else if (document.querySelectorAll("button")[6].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[7].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[8].style.backgroundImage == 'url("images/o-button.png")'
  ) {
    return true;
  } else if (document.querySelectorAll("button")[0].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[3].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[6].style.backgroundImage == 'url("images/o-button.png")'
  ) {
    return true;
  } else if (document.querySelectorAll("button")[1].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[4].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[7].style.backgroundImage == 'url("images/o-button.png")'
  ) {
    return true;
  } else if (document.querySelectorAll("button")[2].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[5].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[8].style.backgroundImage == 'url("images/o-button.png")'
  ) {
    return true;
  } else if (document.querySelectorAll("button")[0].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[4].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[8].style.backgroundImage == 'url("images/o-button.png")'
  ) {
    return true;
  } else if (document.querySelectorAll("button")[2].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[4].style.backgroundImage == 'url("images/o-button.png")' &&
    document.querySelectorAll("button")[6].style.backgroundImage == 'url("images/o-button.png")'
  ) {
    return true;
  }


}

function xWinCheck() {
  if (document.querySelectorAll("button")[0].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[1].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[2].style.backgroundImage == 'url("images/x-button.png")'
  ) {
    return true;



  } else if (document.querySelectorAll("button")[3].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[4].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[5].style.backgroundImage == 'url("images/x-button.png")'
  ) {

    return true;

  } else if (document.querySelectorAll("button")[6].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[7].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[8].style.backgroundImage == 'url("images/x-button.png")'
  ) {
    return true;

  } else if (document.querySelectorAll("button")[0].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[3].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[6].style.backgroundImage == 'url("images/x-button.png")'
  ) {
    return true;
  } else if (document.querySelectorAll("button")[1].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[4].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[7].style.backgroundImage == 'url("images/x-button.png")'
  ) {
    return true;
  } else if (document.querySelectorAll("button")[2].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[5].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[8].style.backgroundImage == 'url("images/x-button.png")'
  ) {
    return true;
  } else if (document.querySelectorAll("button")[0].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[4].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[8].style.backgroundImage == 'url("images/x-button.png")'
  ) {
    return true;
  } else if (document.querySelectorAll("button")[2].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[4].style.backgroundImage == 'url("images/x-button.png")' &&
    document.querySelectorAll("button")[6].style.backgroundImage == 'url("images/x-button.png")'
  ) {
    return true;
  }
}

function drawCheck() {
  drawCount = 0;
  for (var i = 0; i < numberOfButtons; i++) {
    if (document.querySelectorAll("button")[i].style.backgroundImage == 'url("images/o-button.png")' || document.querySelectorAll("button")[i].style.backgroundImage == 'url("images/x-button.png")') {
      drawCount++;
      if (drawCount == 9) {
        return true;
      }
    }
  }

}

function resetGame() {
  for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].disabled = false;
    document.querySelectorAll("button")[i].style.backgroundImage = '';
  }

}
