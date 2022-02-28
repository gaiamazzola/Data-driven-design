

var circle1 = {
  x: 25,
  y: 475,
  d: 50,
  }

  var circle2 = {
    x: 475,
    y: 125,
    d: 50,
    
    }

var circle3 = {
    x: 125,
    y: 225,
    d: 50,
    
    }

    var circle4 = {
      x: 625,
      y: 625,
      d: 50,
      
      }

    



  let data;

  var Canvas;
  
  function preload(){
    data = loadTable('nobelprize/asset/physics.csv', 'csv', 'header');

  }




  function setup() {

    Canvas= createCanvas (700,700);
    Canvas.parent('p5js');
    
   
      
}

  function draw () {
    background (200)
    //spotlight that follows the mouse
    for (let x = 0; x < width; x += 10) {
  
      for (let y = 0; y < height; y += 10) {
        
        // Calculate the distance of this cell to the mouse
        let d = dist(x, y, mouseX, mouseY);
        // Use the distance to color the cell
       let r = map(d, 0, 160, 153, 115);
       let g = map(d, 0, 160, 164, 142);
       let b = map(d, 0, 160, 170, 154);
        fill(r,g,b);
        
        rect(x, y, 10 , 10);
      }
    } 
    
if (data) {
//the dataset should draw a circle for each of the winners
      let id = data.getRowCount();
      console.log(id);
    
      for (var i=0; i< id; i++){
        for (var j = 0; j< id; j ++) {
          let d= 50;
          let x = i*d + 25;
          let y = j*d +25;
          
              noStroke();
              //mouse hover so that the circles change colors
          myDist = dist(circle1.x, circle1.y, mouseX, mouseY);
          myDist2 = dist(circle2.x, circle2.y, mouseX, mouseY);
          myDist3 = dist(circle3.x, circle3.y, mouseX, mouseY);
          myDist4 = dist(circle4.x, circle4.y, mouseX, mouseY);
          
              if (dist (x, y, mouseX, mouseY) < d/2) {
                fill(24,49,65);
              }
          
              else {
                fill(255);
                
               if ( myDist < circle1.d / 2 ) {
                fill(255,90);
              }  
        
              if ( myDist2 < circle2.d / 2 ) {
                fill(255,90);
              }

              if ( myDist3 < circle3.d / 2 ) {
                fill(255,90);
              }

              if ( myDist4 < circle4.d / 2 ) {
                fill(255,90);
              }
            }
  
              circle(x, y, d)

       }
         if (dist (25, 475, mouseX, mouseY) < 50/2) {
      
                fill(203,161,81); 
    }
     
      if (dist (475, 125, mouseX, mouseY) < 50/2) {
  
        fill(203,161,81); 
}

    if (dist (125, 225, mouseX, mouseY) < 50/2) {
  
      fill(203,161,81); 
}
if (dist (625, 625, mouseX, mouseY) < 50/2) {
  
  fill(203,161,81); 
}
circle (475,125,50);
circle (25,475,50);
circle (125,225,50);
circle (625,625,50);
      }
    }
    
    }
    //when you click on the circle you'll be redirected to the nobelprize site
    function mousePressed() {
      l = dist(mouseX, mouseY, 25, 475);
      c= dist(mouseX, mouseY, 475, 125);
      t = dist(mouseX, mouseY, 125, 225);
      e = dist(mouseX, mouseY, 625, 625);
      if (l < 50/2) {
        window.open( 'https://www.nobelprize.org/prizes/physics/2020/ghez/facts/');
      }
      if (c<50/2) {
        window.open('https://www.nobelprize.org/prizes/physics/2018/strickland/facts/');
    }

    if (t<50/2) {
      window.open('https://www.nobelprize.org/prizes/physics/1963/mayer/facts/');
  }
  if ( e <50/2) {
    window.open('https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/');
}

  }