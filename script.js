//Declarando canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const canvas_w = (canvas.width = 500);
const canvas_h = (canvas.height = 800);

//play image source
const play = new Image();
play.src = "img/play.png";

play.onload = function () {
  ctx.drawImage(play, 0, 0);
};

//background image source
const background = new Image();
background.src = "img/background.png";

//player image source
var image_car = new Image();
image_car.src = "img/car.png";

//obst image source
const obstaculo = new Image();
obstaculo.src = "img/car1.png";

//game over image source
const gover = new Image();
gover.src = "img/gover.png";

let activekey = 0;
var usos = 0;

document.addEventListener("keydown", function (e) {
  if (activekey == e.keyCode) return;
  activekey = e.keyCode;

  if (e.keyCode == 13 && usos == 0) {
    iniciarJogo();
    activekey = 0;
    usos++;
  }
});

function iniciarJogo() {
  //map movement speed control
  var velocidade = 10;

  //Variavel utilizada para animar background
  var y = -800;

  var reqanimationreference;

  //Declarando imagem player
  let car = {
    x: 260,
    y: 550,
    width: 56,
    height: 142,
  };
  //obstaculo
  var obst = {
    x: 0,
    y: 800,
    width: 56,
    height: 142,
  };
  //obstaculo2
  var obst2 = {
    x: 0,
    y: 800, //era 800
    width: 56,
    height: 142,
  };
  //obstaculo 3
  var obst3 = {
    x: 0,
    y: 800, //era 800
    width: 56,
    height: 142,
  };
  //obstaculo 4
  var obst4 = {
    x: 0,
    y: 800, //era 800
    width: 56,
    height: 142,
  };

  //funções que geram os obstáculos através do 'Math.random()'
  function gerar_obstaculo() {
    var a = Math.round(Math.random() * 3);
    console.log(a);

    if (a === 0) {
      //aparecer objeto na posição da faixa 1.
      obst.x = 110;
    }
    if (a === 1) {
      //aparecer objeto na posição da faixa 2.
      obst.x = 180;
    }

    if (a === 2) {
      //aparecer objeto na posição da faixa 3.
      obst.x = 255;
    }

    if (a === 3) {
      //aparecer objeto na posição da faixa 4.
      obst.x = 330;
    }
  }

  function gerar_obstaculo2() {
    var a = Math.round(Math.random() * 3);
    console.log(a);

    if (a === 0) {
      //aparecer objeto na posição da faixa 1.
      obst2.x = 180;
    }
    if (a === 1) {
      //aparecer objeto na posição da faixa 2.
      obst2.x = 255;
    }

    if (a === 2) {
      //aparecer objeto na posição da faixa 3.
      obst2.x = 330;
    }

    if (a === 3) {
      //aparecer objeto na posição da faixa 4.
      obst2.x = 110;
    }
  }

  function gerar_obstaculo3() {
    var a = Math.round(Math.random() * 3);
    console.log(a);

    if (a === 0) {
      //aparecer objeto na posição da faixa 1.
      obst3.x = 255;
    }
    if (a === 1) {
      //aparecer objeto na posição da faixa 2.
      obst3.x = 330;
    }

    if (a === 2) {
      //aparecer objeto na posição da faixa 3.
      obst3.x = 110;
    }

    if (a === 3) {
      //aparecer objeto na posição da faixa 4.
      obst3.x = 180;
    }
  }

  function gerar_obstaculo4() {
    var a = Math.round(Math.random() * 3);
    console.log(a);

    if (a === 0) {
      //aparecer objeto na posição da faixa 1.
      obst4.x = 330;
    }
    if (a === 1) {
      //aparecer objeto na posição da faixa 2.
      obst4.x = 110;
    }

    if (a === 2) {
      //aparecer objeto na posição da faixa 3.
      obst4.x = 180;
    }

    if (a === 3) {
      //aparecer objeto na posição da faixa 4.
      obst4.x = 255;
    }
  }

  var colisao = false;
  var colisao1 = false;
  var colisao2 = false;
  var colisao3 = false;

  function gameOver() {
    console.log("Game over");
    var colisao = false;
    var colisao1 = false;
    var colisao2 = false;
    var colisao3 = false;
    cancelAnimationFrame(reqanimationreference);
    ctx.clearRect(0, 0, canvas_w, canvas_h);
    ctx.drawImage(gover, 0, 0);
    ctx.font = "22px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Pontuação final:", 140, 470);
    ctx.fillText(pont, 310, 470);
  }

  //funções para detectar colisão
  function colisao_obst() {
    if (
      car.x + car.width >= obst.x &&
      car.x <= obst.x + obst.width &&
      car.y + car.height >= obst.y &&
      car.y <= obst.y + obst.height
    ) {
      colisao = true;
    }
    if (colisao === true) {
      gameOver();
      colisao = false;
    }
  }

  function colisao_obst2() {
    if (
      car.x + car.width >= obst2.x &&
      car.x <= obst2.x + obst2.width &&
      car.y + car.height >= obst2.y &&
      car.y <= obst2.y + obst2.height
    ) {
      colisao1 = true;
    }
    if (colisao1 === true) {
      gameOver();
      colisao1 = false;
    }
  }

  function colisao_obst3() {
    if (
      car.x + car.width >= obst3.x &&
      car.x <= obst3.x + obst3.width &&
      car.y + car.height >= obst3.y &&
      car.y <= obst3.y + obst3.height
    ) {
      colisao2 = true;
    }
    if (colisao2 === true) {
      gameOver();
      colisao2 = false;
    }
  }

  function colisao_obst4() {
    if (
      car.x + car.width >= obst4.x &&
      car.x <= obst4.x + obst4.width &&
      car.y + car.height >= obst4.y &&
      car.y <= obst4.y + obst4.height
    ) {
      colisao3 = true;
    }
    if (colisao3 === true) {
      gameOver();
      colisao3 = false;
    }
  }

  setInterval(colisao_obst, 10);
  setInterval(colisao_obst2, 10);
  setInterval(colisao_obst3, 10);
  setInterval(colisao_obst4, 10);

  pont = 0;
  //Chamando função desenhar para mostrar os elementos
  function desenhar() {
    ctx.clearRect(0, 0, canvas_w, canvas_h);
    ctx.drawImage(background, 0, y);
    ctx.drawImage(image_car, car.x, car.y, car.width, car.height);
    ctx.drawImage(obstaculo, obst.x, obst.y, obst.width, obst.height);
    ctx.drawImage(obstaculo, obst2.x, obst2.y, obst2.width, obst2.height);
    ctx.drawImage(obstaculo, obst3.x, obst3.y, obst3.width, obst3.height);
    ctx.drawImage(obstaculo, obst4.x, obst4.y, obst4.width, obst4.height);
    if (y > -100) y = -800; //era -800
    else y += velocidade;
    if (obst.y > 850) (obst.y = -1000), gerar_obstaculo(); //era -800
    else obst.y += velocidade;
    if (obst2.y > 850) (obst2.y = -2200), gerar_obstaculo2(); //obst2. era -800
    else obst2.y += velocidade;
    if (obst3.y > 850) (obst3.y = -3400), gerar_obstaculo3(); //obst3. era -800
    else obst3.y += velocidade;
    if (obst4.y > 850) (obst4.y = -4600), gerar_obstaculo4(); //obst3. era -800
    else obst4.y += velocidade;
    pont += velocidade - 10;
    ctx.font = "22px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score:", 190, 50);
    ctx.fillText(pont, 260, 50);
    reqanimationreference = requestAnimationFrame(desenhar);
  }

  requestAnimationFrame(desenhar);

  //Variavel utilizada para resetar teclas
  let activekey = 0;

  //Event listener utilizado para movimentação
  document.addEventListener("keydown", function (e) {
    if (activekey == e.keyCode) return;
    activekey = e.keyCode;

    //Movimento para esquerda
    if (e.keyCode == 65) {
      if (car.x > 120) {
        car.x -= 80;
      }
      activekey = 0;
    }
    //Movimento para cima
    else if (e.keyCode == 87) {
      if (car.y > 10) {
        car.y -= 20;
        if (velocidade < 35) {
          velocidade += 2;
        }
      }
      activekey = 0;
    }
    //Movimento para direita
    else if (e.keyCode == 68) {
      if (car.x < 330) {
        car.x += 80;
      }
      activekey = 0;
    }
    //Movimento para baixo
    else if (e.keyCode == 83) {
      if (car.y < 630) {
        car.y += 20;
        if (velocidade > 20) {
          velocidade -= 2;
        }
      }
      activekey = 0;
    }
  });
}
