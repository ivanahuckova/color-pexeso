var numSquares = 8;
var colors = generateRandomColors(8);
var firstCard = null;
var secondCard = null;
var clicks = 0;
var correct = 0;

var squares = document.querySelectorAll(".square");
var cardCounter = document.getElementById("cardCounter");
var clickCounter = document.getElementById("message");
var resetButton = document.getElementById("reset");

for (var i = 0; i < squares.length; i++) {
  let x = i;
  squares[x].addEventListener("click", function() {
    if (firstCard === null && secondCard === null) {
      firstCard = x;
      this.style.backgroundColor = colors[x];
      clicks++;
    } else if (firstCard !== null && secondCard === null && firstCard != x) {
      secondCard = x;
      this.style.backgroundColor = colors[x];
      clicks++;
      clickCounter.textContent = clicks / 2;
      setTimeout(function() {
        if (colors[secondCard] === colors[firstCard]) {
          squares[firstCard].style.backgroundColor = "#232323";
          squares[secondCard].style.backgroundColor = "#232323";
          secondCard = null;
          firstCard = null;
          correct++;
          if (correct === 8) {
            clickCounter.textContent =
              "WINNER! YOU NEEDED " + clicks / 2 + " TRIES.";
            for (var i = 0; i < squares.length; i++) {
              squares[i].style.display = "none";
            }
          }
          cardCounter.textContent = correct;
        } else {
          squares[firstCard].style.backgroundColor = "#ffd32a";
          squares[secondCard].style.backgroundColor = "#ffd32a";
          secondCard = null;
          firstCard = null;
        }
      }, 900);
    }
  });
}

// New Cards Button
resetButton.addEventListener("click", function() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = "#232323";
    correct = 0;
    clicks = 0;
    clickCounter.textContent = "0";
    cardCounter.textContent = correct;
  }
  setTimeout(function() {
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = "#ffd32a";
    }
  }, 900);

  colors = generateRandomColors(8);
  for (var i = 0; i < squares.length; i++) {
    let x = i;
    squares[x].addEventListener("click", function() {
      if (firstCard === null && secondCard === null) {
        firstCard = x;
        this.style.backgroundColor = colors[x];
        clicks++;
      } else if (firstCard !== null && secondCard === null && firstCard != x) {
        secondCard = x;
        this.style.backgroundColor = colors[x];
        clicks++;
        clickCounter.textContent = "NUMBER OF TRIES: " + clicks / 2;
        setTimeout(function() {
          if (colors[secondCard] === colors[firstCard]) {
            squares[firstCard].style.backgroundColor = "#232323";
            squares[secondCard].style.backgroundColor = "#232323";
            secondCard = null;
            firstCard = null;
            correct++;
            if (correct === 8) {
              clickCounter.textContent =
                "WINNER! YOU NEEDED " + clicks / 2 + " TRIES.";
            }
            cardCounter.textContent = correct;
          } else {
            squares[firstCard].style.backgroundColor = "#ffd32a";
            squares[secondCard].style.backgroundColor = "#ffd32a";
            secondCard = null;
            firstCard = null;
          }
        }, 900);
      }
    });
  }
});

//Generating Random Colors

function generateRandomColors(numSquares) {
  var arr = [];
  for (var i = 0; i < numSquares; i++) {
    arr.push(randomColor());
  }
  newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = arr[i];
  }
  var doubledColors = [];
  doubledColors = arr.concat(newArr);

  var finalColors = shuffleArrays(doubledColors);
  return finalColors;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function shuffleArrays(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
}

//hard version so 16 kartami
//new cards button
