/*

Quiz teórico:
Todas as respostas estão localizadas nas seções iniciais da documentação.

1) Tecnicamente, o que é o ml5.js? Foi construído a partir de que?
Resposta: 

2) Para que serve o ml5.js? Quais são seus objetivos?
Resposta: 


Coisa criativa que eu fiz (caso tenha feito):

*/

let faceapi;
let video;
let detections;
let emoji;

var setup = () => {
  createCanvas(360, 270);

  // Carrega a camera
  video = createCapture(VIDEO);
  video.size(width, height);
  
  //  EXERCÍCIO - Crie um callback, que chame a função gotResults - 1pt
  const modelReady = () => faceapi.detect(gotResults); // Callback
  
  // EXERCÍCIO - Carregue o modelo - 1pt
  faceapi = ;

  // Carrega a imagem da máscara
  emoji = loadImage('mask.png');
};

// Loop de detecção
const gotResults = (err, result) => {
  if (err) return;
  
  detections = result;

  image(video, 0, 0, width, height);
  if (detections && detections.length > 0) {
    drawOverlay(detections);
  }
  
  faceapi.detect(gotResults);
};

const drawOverlay = (detections) => detections.forEach((detection) => {
  // EXERCÍCIO - Ache as variáveis corretas (olhos) - 1pt
  const leftEye = ;
  const rightEye = ;

  noFill();
  strokeWeight(3);
  // EXERCÍCIO - Desenhe as sombras sobre os olhos - 1pt
  // Use drawEyeShadow para cada olho
  // Use qualquer cor que quiser, mas é melhor ter transparência
  // Referência de Color = https://p5js.org/reference/#/p5/color
  drawEyeShadow( PARAMS );
  drawEyeShadow( PARAMS );

  // EXERCÍCIO - Ache as variáveis corretas (sobrancelhas) - 1pt
  const rightEyeBrow = ;
  const leftEyeBrow = ;

  // EXERCÍCIO - Desenhe a tinta sobre as sobrancelhas - 1pt
  // Use drawEyebrowPaint para cada sobrancelha
  drawEyebrowPaint( PARAMS );
  drawEyebrowPaint( PARAMS );

  drawMask(detection)
});

// EXERCÍCIOS - Desenhe a máscara
function drawMask(detection) {
  // Há várias maneiras de resolver esses exercícios e não estamos pedindo perfeição ;)
  // Também, lembre-se que não é necessario rotacionar a máscara, ela pode sempre estar vertical
  // EXERCÍCIO - Ancore a máscara (Escolha TOP_LEFT.X e TOP_LEFT.Y corretamente) - 1.5pt
  // EXERCÍCIO - Escale a máscara (Escolha MASK_WIDTH e MASK_HEIGHT corretamente) - 1.5pt

  // image(emoji, TOP_LEFT.X, TOP_LEFT.Y, MASK_WIDTH, MASK_HEIGHT);
  image(emoji, PARAMS);
}

function drawEyeShadow(eyeFeature, color) {
  stroke(color);
  drawPart(eyeFeature, false);
}

function drawEyebrowPaint(eyebrowFeature, color) {
  fill(color);
  strokeWeight(0);
  drawPart(eyebrowFeature, false);
}

function drawPart(feature, closed){
  beginShape();
  feature.forEach((element) => vertex(element._x, element._y)); 
  endShape(closed ? CLOSE : null);
}