let table;
let sleep;

function preload(){
  table=loadTable('sleep.csv', 'csv', 'header');
  sleep= loadImage('image graph/real moon.png');
}

function setup(){
  createCanvas(400,400);
  imageMode(CENTER);
}

function daysLabels(){
  for(x=0; x<table.getRowCount(); x++){
    let row=table.getRow(x);
    let days =row.get("Days");
    fill(0);
    text(days, 35+x*55,350);
  }
}

function showMoon(){
  for(x=0; x<table.getRowCount();x++){
    let row=table.getRow(x);
    let countSleep=row.get("Sleep hours");
     //fill(255,0,0);
    //rect(30+x*55,320,30, -countSleep*12);
    for (y=0;y<countSleep; y++){
      image(sleep, 40+x*55, 300-y* 30, 20, 20);
    }
  }
}

function draw(){
  background(220);
  daysLabels();
  showMoon();
}

