canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250, 210 ,40 ,0, 2*Math.PI);
ctx.stroke();


color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(350, 210 ,40 ,0, 2*Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(400, 250 ,40 ,0, 2*Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(450, 210 ,40 ,0, 2*Math.PI);
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.rect(140, 133 ,430 ,200, );
ctx.stroke();