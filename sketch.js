let olhosCriados = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(15, 15, 20); 

  let centroX = width / 2;
  let centroY = height / 2;

  if (keyIsPressed) {
    let espacamentoX = 140;
    let espacamentoY = 120;
    
    for (let x = 70; x < width; x += espacamentoX) {
      for (let y = 60; y < height; y += espacamentoY) {
        desenharOlho(x, y, 70, mouseX, mouseY);
      }
    }
  } else {
    for (let i = 0; i < olhosCriados.length; i++) {
      let o = olhosCriados[i];
      desenharOlho(o.x, o.y, 80, mouseX, mouseY);
    }

    desenharOlho(centroX, centroY, 220, mouseX, mouseY);
  }
}

function desenharOlho(x, y, tamanho, alvoX, alvoY) {
  fill(240, 240, 245);
  noStroke();
  ellipse(x, y, tamanho, tamanho * 0.85); 

  let angulo = atan2(alvoY - y, alvoX - x);
  let distanciaMax = (tamanho * 0.25);
  let distAlvo = dist(alvoX, alvoY, x, y);
  let deslocamento = min(distAlvo * 0.15, distanciaMax);

  let pupilaX = x + cos(angulo) * deslocamento;
  let pupilaY = y + sin(angulo) * deslocamento;

  fill(15, 15, 20);
  ellipse(pupilaX, pupilaY, tamanho * 0.35, tamanho * 0.35);

  fill(255, 200);
  ellipse(pupilaX - tamanho * 0.05, pupilaY - tamanho * 0.05, tamanho * 0.08);
}

function mousePressed() {
  olhosCriados.push({ x: mouseX, y: mouseY });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}