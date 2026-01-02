let img;
let button_colors;



function setup() {
  createCanvas(1280, 750);

  button_colors = createButton('colors');
  button_colors.position(550, 250);
  button_colors.size(155, 70);
  button_colors.mousePressed(colors);
   img = ('eyecolor.png'); // carrega a imagem
}

function draw() {
  background(225, 150, 0, 150);

  // desenha a imagem à direita do botão
  image(img, 0,0);
}

function colors() {
  console.log("Botão colors clicado!");
}
