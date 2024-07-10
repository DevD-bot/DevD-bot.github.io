$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$('#Model').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 250;

  if (this.isDeleting) { delta /= 4; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

setInterval(() => {
    image1.style.animation = 'crossfade 1s ease-in-out';
    image2.style.animation = 'crossfade 1s ease-in-out';
    
    setTimeout(() => {
        // Toggle the images by changing their opacity
        if (image1.style.opacity === '1') {
            image1.style.opacity = '0';
            image2.style.opacity = '1';
        } else {
            image1.style.opacity = '1';
            image2.style.opacity = '0';
        }
    }, 500); // Adjust the delay as needed
}, 3000); // Change images every 3 seconds (adjust as needed)


function toggleBackground() {
  document.body.classList.toggle('black-and-white');
}
