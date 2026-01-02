let buttonPlay;
let buttonQuit;

function setup() {
  createCanvas(1280, 750);

  buttonPlay = createButton('Play');
  buttonPlay.position(550, 350);
  buttonPlay.mousePressed(playGame);

  buttonQuit = createButton('Quit');
  buttonQuit.position(550, 420);
  buttonQuit.mousePressed(quitGame);
}

function draw() {
  background(85, 194, 252,22);

  fill('orange');
  textSize(64);
  textAlign(CENTER);
  text('GenniQuest', width / 2, 200);
}

function playGame() {
  console.log("PLAY!");
  window.location.href = "select_level.html";  // ou "./select_level.html"
}



function quitGame() {
  console.log("QUIT!");
  window.close();

}
