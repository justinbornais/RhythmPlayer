var staffLineThickness = 6;
var staff = document.getElementById("staff");
var ctx = staff.getContext("2d")

var staffLinesX = [0, staff.width];
var staffLinesY = [50, 150, 250, 350, 450];
var rhythms = ["4/4 1 1 1 1", "4/4 2 1 1"];

function drawStaffLines() {
    
    ctx.lineWidth = staffLineThickness; // Set the thickness of the lines to the staff thickness.
    
    for(var i = 0;i < 5;i++) {
        
        ctx.beginPath();
        ctx.moveTo(staffLinesX[0], staffLinesY[i]);
        ctx.lineTo(staffLinesX[1], staffLinesY[i]);
        ctx.stroke();
    }
}

function drawRhythm(rhythm) {
    
    elements = rhythm.split(" ");
    beats = elements[0].split("/");
    
    console.log(elements[0]);
    
    ctx.font = "bold 250px Georgia";
    ctx.fillStyle = "black";
    ctx.fillText(beats[0], 25, staffLinesY[2] - 54);
    ctx.fillText(beats[1], 25, staffLinesY[4] - 54);
    
    console.log("Drew");
}

drawStaffLines();
drawRhythm(rhythms[0]);