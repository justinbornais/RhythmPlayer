var staffLineThickness = 6;
var staff = document.getElementById("staff");
var ctx = staff.getContext("2d");

var staffLinesX = [0, staff.width];
var staffLinesY = [50, 150, 250, 350, 450];
var rhythms = ["4/4 1 1 1 1", "4/4 2 1 1", "4/4 3 1", "4/4 4"];

const quarterNoteImage = "static/images/quarternote.png";
const halfNoteImage = "static/images/halfnote.png";
const dottedHalfNoteImage = "static/images/dottedhalfnote.png";
const wholeNoteImage = "static/images/wholenote.png";

async function drawStaffLines() {
    ctx.lineWidth = staffLineThickness; // Set the thickness of the lines to the staff thickness.

    for (var i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(staffLinesX[0], staffLinesY[i]);
        ctx.lineTo(staffLinesX[1], staffLinesY[i]);
        ctx.stroke();
    }
}

function loadImage(url) {
    return new Promise((r) => {
        let i = new Image();
        i.onload = () => r(i);
        i.src = url;
    });
}

async function getImageNote(type) {
    if (type === "1") return loadImage(quarterNoteImage);
    else if (type === "2") return loadImage(halfNoteImage);
    else if (type === "3") return loadImage(dottedHalfNoteImage);
    else if (type === "4") return loadImage(wholeNoteImage);

    return null;
}

const drawRhythm = async (rhythm) => {
    
    ctx.clearRect(0, 0, staff.width, staff.height);
    await drawStaffLines();
    elements = rhythm.split(" ");
    beats = elements[0].split("/");

    ctx.font = "bold 250px Georgia";
    ctx.fillStyle = "black";
    ctx.fillText(beats[0], 25, staffLinesY[2] - 54);
    ctx.fillText(beats[1], 25, staffLinesY[4] - 54);

    for (var i = 1; i < elements.length; i++) {
        let img = await getImageNote(elements[i]);
        var offset = 0;
        
        if(elements[i] === "1") ctx.drawImage(img, (staff.width / elements.length) * i, 80, 130, 375);
        else if(elements[i] === "2") ctx.drawImage(img, (staff.width / elements.length) * i, 70, 130, 395);
        else if(elements[i] === "3") { ctx.drawImage(img, (staff.width / elements.length) * i, 70, 170, 395); offset += 50; }
        else if(elements[i] === "4") ctx.drawImage(img, (staff.width / elements.length) * i, staffLinesY[3], 130, 100);
    }
};

drawStaffLines();
drawRhythm(rhythms[3]);