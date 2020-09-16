class ball{

  constructor(x,s,speed,l_range,h_range){
    this.x = x;
    this.y = 0;
    this.size = s;
    this.speed_offset = 0;
    this.speed = speed;
    this.lower_range = l_range;
    this.higher_range = h_range;
  }
  
  show(){
    fill(map(sin(this.speed_offset * 75),-1,1,this.lower_range,this.higher_range),
        map(sin(this.speed_offset * 75),-1,1,this.lower_range,this.higher_range),
    map(sin(this.speed_offset * 75),-1,1,this.lower_range,this.higher_range)
        
        
        
        )
    ellipse(this.x,this.y,this.size,this.size);
  
  }
  move(){
    
    this.speed_offset += this.speed;
    this.y = map(sin(this.speed_offset * 75),-1,1,this.lower_range,this.higher_range);
    
  }
}