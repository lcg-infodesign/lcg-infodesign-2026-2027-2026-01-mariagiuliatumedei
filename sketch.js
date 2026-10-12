  //varivariabili
  let cloudX1, cloudX2, cloudX3, cloudX4;
  let snowY = [];
  let snowX = [];
  let snowSpeed = [];
  
function setup() {
  createCanvas(400, 600); 
  
  cloudX1 = -150;
  cloudX2 = 30;
  cloudX3 = 210;
  cloudX4 = 390;
  
  for (let i = 0; i < 20; i++) {
    snowY[i] = random(-600, 0); 
    snowX[i] = random(0, 400);
    snowSpeed[i] = random(4, 9);
  }
}

function draw() {
  background(35, 55, 75); 

  //montagne
  noStroke();

  //montagna1
  fill(210, 210, 210);
  triangle(10, 600, 140, 220, 270, 600);
  
    //cima1
    fill(240, 240, 240);
    triangle(140, 220, 205, 410, 75, 410);
    
    fill(210, 210, 210);
    triangle(75, 410, 120, 410, 100, 385);
    triangle(120, 410, 165, 410, 142, 385);
    triangle(170, 410, 190, 410, 180, 400);

  //montagna2
  fill(100, 100, 100);
  triangle(100, 600, 230, 140, 360, 600);
  
    //cima2
    fill(255, 255, 255);
    triangle(230, 140, 295, 370, 165, 370);
  
    fill(100, 100, 100);
    triangle(165, 370, 220, 370, 190, 355);
    triangle(215, 370, 265, 370, 240, 355);
    triangle(260, 370, 300, 370, 280, 355);

  //montagna3
  fill(150, 150, 150);
  triangle(210, 600, 320, 280, 430, 600);
  
    //cima3
    fill(245, 245, 245);
    triangle(320, 280, 375, 440, 265, 440);
  
    fill(150, 150, 150);
    triangle(265, 440, 310, 440, 290, 415);
    triangle(310, 440, 340, 440, 323, 415);
    triangle(340, 440, 375, 440, 357, 415);

  //casa1
    //mura
    fill(160, 90, 50);
    rect(20, 520, 120, 80);
    //porta
    fill(90, 50, 20);
    rect(70, 560, 20, 40);
    //finestre
    fill(255, 255, 150);
    rect(40, 535, 16, 16);
    rect(100, 535, 16, 16);
    //tetto
    fill(130, 40, 40);
    rect(40, 490, 80, 30);
    triangle(20, 520, 40, 520, 40, 490);   //triangolo sx
    triangle(140, 520, 120, 520, 120, 490); //triangolo dx


  //albero1 
    //tronco
    fill(100, 60, 30);
    rect(144, 545, 11, 55);
    //foglie
    fill(34, 102, 34);
    triangle(120, 565, 178, 565, 149, 500); 
    triangle(125, 515, 173, 515, 149, 460); 
    triangle(132, 470, 166, 470, 149, 425); 

  //casa2 
    //mura
    fill(160, 110, 70);
    rect(175, 490, 100, 110);
    //porta
    fill(90, 50, 20);
    rect(210, 545, 26, 55);
    //finestre
    fill(255, 255, 150);
    rect(190, 510, 16, 16);
    rect(244, 510, 16, 16);
    //tetto
    fill(110, 30, 30);
    rect(195, 455, 60, 35);
    triangle(175, 490, 195, 490, 195, 455);   
    triangle(275, 490, 255, 490, 255, 455); 

  //albero2 
    //tronco
    fill(100, 60, 30);
    rect(278, 545, 11, 55);
    //foglie
    fill(34, 102, 34);
    triangle(254, 565, 312, 565, 283, 500); 
    triangle(259, 515, 307, 515, 283, 460); 
    triangle(266, 470, 300, 470, 283, 425); 
  
  //casa3 
    //mura
    fill(200, 130, 80);
    rect(295, 535, 80, 65);
    //porta
    fill(90, 50, 20);
    rect(325, 565, 20, 35);
    //finestre
    fill(255, 255, 150);
    rect(307, 548, 12, 12);
    rect(355, 548, 12, 12);
    //tetto
    fill(140, 50, 50);
    rect(311, 508, 48, 27);
    triangle(295, 535, 311, 535, 311, 508);   
    triangle(375, 535, 359, 535, 359, 508); 

    //nuvole
    disegnaNuvola(cloudX1, 270);
    cloudX1 = cloudX1 + 1; 
    if (cloudX1 > 550) { cloudX1 = -150; }
  
    disegnaNuvola(cloudX2, 170);
    cloudX2 = cloudX2 + 1; 
    if (cloudX2 > 550) { cloudX2 = -150; }
  
    disegnaNuvola(cloudX3, 380);
    cloudX3 = cloudX3 + 1; 
    if (cloudX3 > 550) { cloudX3 = -150; }  
  
    disegnaNuvola(cloudX4, 60);
    cloudX4 = cloudX4 + 1; 
    if (cloudX4 > 550) { cloudX4 = -150; }

    //pioggia
    fill(255); 
    noStroke();

  for (let i = 0; i < snowY.length; i++) {
    ellipse(snowX[i], snowY[i], 8, 8);
    snowY[i] = snowY[i] + 6;
    if (snowY[i] > height) { 
      snowY[i] = 0; 
      snowX[i] = random(0, 400);
    }
  }
}

//funzione nuvole
function disegnaNuvola(x, y) {
  noStroke();
  fill(145, 175, 200); 
  
  rect(x + 20, y, 80, 40);
  ellipse(x + 20, y+10, 60);       
  ellipse(x + 91.5, y+10.6, 60, 60);       
  ellipse(x + 60, y - 15, 70, 70);  
}