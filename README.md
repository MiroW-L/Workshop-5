Website link:https://jinheeyi.github.io/workshop_5/

## Introduction
- During Workshop 5, the task involved coding a graph, and I was determined on visualizing my sleep schedule. I remembered how I have kept an article 'Adolescents sleeping problems', and I thought of why not record my sleep schedule, and make it a graph. Specifically, I want to show my hours I slept in the afternoon and at night over everyday and including free time. As on sleeping problems, this project provided an opportunity to analyze and reflect on my sleeping patterns. Through coding, I was able to record my personal data into a presentation, allowing me to understand on how I managed and plus responding to sleep conflicts.
- As searching for 'how to make a graph p5js', there were other graphs that were already made:
- https://editor.p5js.org/aferriss/sketches/S1UTHZBHm
- https://www.youtube.com/watch?v=Q9Gje2vh22Q
- https://p5js.org/examples/animation-and-variables-drawing-lines/ {this example demonstrates using mouseX and mouseY)
- https://editor.p5js.org/aferriss/sketches/S1UTHZBHm
- I also thought about a graph, I wanted to make that looks like a star teller (more to the example of the orion constellation)
## Notes(working progress)
![Screenshot 2025-01-23 143443](https://github.com/user-attachments/assets/13ea0b03-2947-436a-b269-40bbae3ed9e2)
**csv file for recording sleep hours and days**
![Screenshot 2025-01-23 151206](https://github.com/user-attachments/assets/74ffde00-6457-4823-ad3a-9b9fee7033f2)
_This is the example of someone who made the graph, and I liked how they were no numbers and no dates, but just a line with dots indicated. I thought making this for my workshop would be experimental, and plus wanted to make this as for my project._
- During working a code, somehow there were a lot of errors happening for workshop 4, and I was barely stuck. Looking into workshop 5 https://canvas.auckland.ac.nz/courses/121821/pages/week-2-overview?module_item_id=2435968 and even writing the code down what leo did, somehow have gone errors, so I decided to get help from www.chatgpt.com and www.google.com, looked into the exemplars altogether as again additional help from last time, and fixing errors.  
- I asked chatgpt the question 'how do you make a line graph? more likely a schedule?' it showed like this:
```ruby// data: hours of sleep
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let sleepHours = [6,7,5,10,9,10,8]; // sleep data

function setup() {
  createCanvas(500, 300);
  background(255);

  drawAxes();

  // put sleepdata as a line graph
  stroke(0); // black color line
  strokeWeight(1);
  noFill();
  beginShape();
  for (let i = 0; i < sleepHours.length; i++) {
    let x = map(i, 0, days.length - 1, 50, width - 50);
    let y = map(sleepHours[i], 0, 10, height - 50, 50);
    vertex(x, y);
    ellipse(x, y, 5, 5); // small dark circle for the point
  }
  endShape();

  addLabels();
}

function drawAxes() {
  stroke(0); 
  strokeWeight(1);

  // x-axis
  line(50, height - 50, width - 50, height - 50);
  // y-axis
  line(50, 50, 50, height - 50);

  // tick marks and labels
  textSize(12);
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= 10; i++) {
    let y = map(i, 0, 10, height - 50, 50);
    line(45, y, 55, y); //tick-mark
    text(i, 40, y); //label
  }
}

function addLabels() {
  textSize(12);
  fill(0);
  textAlign(CENTER);

  //x-axis days and lengths
  for (let i = 0; i < days.length; i++) {
    let x = map(i, 0, days.length - 1, 50, width - 50);
    text(days[i], x, height - 30);
  }

  // title and labels
  textSize(16);
  text("Sleep Hours Over the Week", width / 2, 30);
  textSize(12);
  text("Days", width / 2, height - 10);
  textAlign(CENTER, CENTER);
  push();
  translate(20, height / 2);
  rotate(-PI / 2);
  text("Hours Slept", 0, 0);
  pop();
}
```
- It was quite long and confusing too, which I expected high technology words that are displayed. With the x-axis days and lengths, functions, and title and labels. I pasted the code on live studio code, and I was quite surprised that it worked. 
![Screenshot 2025-01-22 181531](https://github.com/user-attachments/assets/9790ca38-b638-42ab-b45f-4aeec7384fe6)
![Screenshot 2025-01-22 181548](https://github.com/user-attachments/assets/ee469aea-e5b5-4cc6-8bb5-703025526c4a)
- The initial graph I attempted to create was quite advanced, and as a result, I treated it as a test to explore more. I decided to take a different approach and focus on a simpler, more achievable graph inspired by the workshop 4 lecture. This led me to create a bar graph that incorporated an image of the moon as part of its design. By following the concepts and techniques demonstrated in the lectures, I was able to make a practical simple graph, alligned with workshop objectives. This allowed me to give creativity while gaining the understanding of the depths of graph-making techniques. 
- So I decided to look on images on the 'Zzz.png' and found out this image.
![599894](https://github.com/user-attachments/assets/328e2ecf-6de8-4366-8d1e-2eba82b44b60)

and then uploaded to the sketch.
```ruby
function showZzz(){
  for(x=0;x<table.getRowCount();x++){
  let row=table.getRow(x);
  let countSleep=row.get("Sleep hours");
  //fill(255,0,0);
  //rect(30+x*55,320,30,-countSleep*12);
  for(y=0;y<countSleep;y++){
    image(sleep,40+x*55,300-y*20,40,40);
  }
 }
}
```
![Screenshot 2025-01-24 181955](https://github.com/user-attachments/assets/3df5a26b-a720-4854-aab5-2ebc60d6a0ae)
- It did looked good at first, but somehow the 'zzz.png' was too scribbly and didn’t match the overall style of the graph that I wanted. To address this, I decided to replace the image with one that better suited the graph's aesthetic while keeping the code.
- So I picked up this image again, which is the moon.
![real moon](https://github.com/user-attachments/assets/8c98535a-6b73-4636-a3b9-0a2f780e2d4c)
and then next adapted the image code _function showZzz_ and the change of the csv file too which was  _let countSleep=row.get("Sleep hours");_ 

## Conclusion(+ further improvement)
- Finishing the graph, I think it turned out pretty well, even the line graph which I aksed www.chatgpt.com was really impressive, but too advanced. The way I put into the bar graph with a moon image was a skill to this workshop. I have learnt how the csv graph transfers into visual code studio and lets on to start the coding, analysing it. But while working on the workshop, the graph didn't looked what I expected, and not quite abstract, but it looks very simple and straight to the point (giving the data of the sleep hours). 
- For further improvement for this graph, I might need to adjust and think more on what I should add to this graph, for example; images, and words. But through, leo's workshop lecture, I have succeeded and learnt a code on how to create a graph.  
