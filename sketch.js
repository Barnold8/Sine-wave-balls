function setup() {
  createCanvas(400, 400);
  //  Ball constructor y,s,speed,l_range,h_range){
  ball_arr = []
  ball_arr2 = []
    for(i = 0; i < 20; i++){
  
    ball_arr.push(new ball(25*i -10,height/20,0.00025,0,height));
    ball_arr[i].speed_offset = i*0.0025;

    ball_arr2.push(new ball(25*i -10,height/20,0.00025,0,height));
    ball_arr2[i].speed_offset = -i*0.0025;
  
  }
  
}

function draw() {
  background(220);
  for(i = 0; i < ball_arr.length; i++){
  
    ball_arr[i].show();
    ball_arr[i].move();
    ball_arr2[i].show();
    ball_arr2[i].move();
  
  
  }

  
}