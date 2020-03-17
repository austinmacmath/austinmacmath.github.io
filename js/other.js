var degrees = 0;
function rotate(el, speed) {
    var elem = document.getElementById(el);
    elem.style.transform = "rotate(" + degrees + "deg)";
    setTimeout("rotate(\"" + el + "\"," + speed + ")", speed);
    degrees++;
}

function move() {
    var elem = document.getElementById("ken1");   
    var pos_top = elem.getBoundingClientRect().top;
    var pos_left = elem.getBoundingClientRect().left;

    var id = setInterval(frame, 10);

    function frame() {
      if (elem.getBoundingClientRect().bottom == window.innerHeight) {
        clearInterval(id);
      } else {
        pos_top++; 
        elem.style.top = pos_top + 'px'; 
      }
      
    }
}

function createCanvas() {
    var can = document.getElementById("myCanvas");
    can.width  = window.outerWidth;
    can.height = window.outerHeight;
}
  function draw() {
      var can = document.getElementById("myCanvas");
      var ctx = can.getContext('2d');
      var img = document.getElementById("source")
      ctx.drawImage(img, Math.random() * window.innerWidth, Math.random() * window.innerHeight)
      var aud = document.getElementById("myAudio")
      aud.play();
  }

function changeColor() {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      document.getElementById("Danny").style.backgroundColor = getRandomColor();
}