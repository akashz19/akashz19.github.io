

var colors = ["#5a5e35","#5e3535","#ff0000","#0095b7","#4006dd","#ea09db","#a04e60","#383133","#288c34","#b2ff70"];
var texts = document.getElementsByClassName('tt');
for (let i = 0; i < texts.length; i++) {
    var t = texts[i];
    let c = Math.floor((Math.random() * (10)+1) % 5);
    t.style.color = colors[c];
    console.log(c + " " + colors[c])
}