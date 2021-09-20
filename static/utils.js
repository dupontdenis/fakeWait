let fakeSlowNetwork;

(function () {
  let lsKey = 'sync';
  let networkFakeDiv = document.querySelector('#fake');
  let checkbox = networkFakeDiv.querySelector('input');

  fakeSlowNetwork = Number(localStorage.getItem(lsKey)) || 0;
  checkbox.checked = !!fakeSlowNetwork;

  checkbox.addEventListener('change', function () {
    localStorage.setItem(lsKey, Number(checkbox.checked));
    location.reload();
  });
}());



function sleep(milliseconds) {
  let start = Date.now();
  while ((Date.now() - start) < milliseconds);
}

function sync(milliseconds) {
  setStatusMessage('connect bd... block');
  setTimeout(function () {
    sleep(milliseconds);
    setStatusMessage('done');
  }, 0);

}

function async(milliseconds) {
  setStatusMessage('connect bd ...');
  setTimeout(function () {
    setStatusMessage('done');
  }, milliseconds);
}

function wait(event) {
  let milliseconds = 5000;
  fakeSlowNetwork ? sync(milliseconds) : async(milliseconds)
}

function setStatusMessage(msg) {
  document.getElementById('statusMessage').textContent = msg;
}

function changeColor(event) {

  event.preventDefault();
  let color = '#' + '0123456789abcdef'.split('').map(function (v, i, a) {
    return i > 5 ? null : a[Math.floor(Math.random() * 16)]
  }).join('');

  console.log(color);
  document.body.style.background = color;



}

document.querySelector(".change").addEventListener("click", changeColor);
document.querySelector(".bd").addEventListener("click", wait)
