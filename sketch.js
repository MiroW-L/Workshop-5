let table;
let sleep;
let miro;

function preload(){
  table=loadTable('sleep.csv', 'csv', 'header');
  sleep= loadImage('images/real moon.png');
  miro = loadImage('images/pngwing.com.png')
}

function setup(){
  createCanvas(400,400);
  background(200, 100, 0);
  imageMode(CENTER);
 
}

function allMySleep(){
    let xPos = 30;
    let yPos = 50;
    
    for (x=0; x<table.getRowCount(); x++){
        let row = table.getRow(x);
        let countSleep = row.get("Sleep hours");
        if (countSleep > 0){
            for (y=0; y < countSleep; y++){
                image(sleep, xPos, yPos, 40, 40);
                xPos += 28;
                if (xPos>350){
                    yPos+=52;
                    xPos=30
                }
            }
        }
        let countMiroSleep = row.get("Miro Sleep hours");
        if (countMiroSleep > 0){
            for (y=0; y < countMiroSleep; y++){
                image(miro, xPos, yPos, 40, 40);
                xPos += 20;
            }        
    }
}

// function showMoon(){
//   for(x=0; x<table.getRowCount();x++){
//     let row=table.getRow(x);
//     let countSleepA=row.get("Sleep hours");
//      //fill(255,0,0);
//     //rect(30+x*55,320,30, -countSleep*12);
//     for (y=0;y<countSleep; y++){
//       image(sleep, 40+x*55, 300-y* 30, 20, 20);
//     }

//     }
// }
}

// function showBrokenMoon(){
//     for(x=0; x<table.getRowCount();x++){
//       let row=table.getRow(x);
//       let countSleepB=row.get("Miro Sleep hours");
//        //fill(255,0,0);
//       //rect(30+x*55,320,30, -countSleep*12);
//       for (y=0;y<countSleepB; y++){
//         image(miro, 23+x*55, 300-y* 40, 50, 50);
//       }
//     }
//   }

function draw(){
//   daysLabels();
 allMySleep();
}