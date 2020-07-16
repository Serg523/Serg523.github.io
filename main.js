let clipboard = new ClipboardJS('.indigo');
let push = document.querySelectorAll('.indigo');
let ph = document.querySelector('#push');
let tb = document.querySelector('#testBoard');
for (let i = 0; i < push.length; i++) {
  push[i].onclick = function () {
    if (!ph) {
        let el = document.createElement('div');
        el.id = 'push';
        el.innerText = 'Скопированно в буфер обмена';
        document.body.appendChild(el);
        setTimeout(
          function() {
            el.remove();
          },
          2000
        );
    }
  }
}
let cp;
clipboard.on('success', function(e) {
  cp = e.text;
  e.clearSelection();
});

let pastBtn = document.querySelector('.past');

pastBtn.onclick = function () {
  if (cp == undefined) {
    tb.value = 'TEST';
  }else {
    if ((cp == '#ffffff') || (cp == '#f5f5f5') || (cp == '#FFFF00')) {
      tb.style.color = '#000000';
      tb.value = cp;
    }else {
      tb.style.color = '#ffffff';
      tb.value = cp;
    }
    
  }
  tb.style.backgroundColor = cp;
}

let clr = document.querySelector('.clr');

clr.onclick = function () {
  tb.value = 'TEST';
  tb.style.backgroundColor = '#202833';
  tb.style.color = '#ffffff';
}

let about = document.querySelector('#aboutCont');
let aboutBtn = document.querySelector('.abActive');
let open = document.querySelector('.openActive');

open.onclick = function () {
  about.classList.toggle('active');
}
aboutBtn.onclick = function () {
  about.classList.remove('active');
}