let images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
];
let i = 1;
setInterval(() => {
  let ch = document.querySelectorAll("img")[0];
  ch=ch.setAttribute("src",images[i])
  i++;
  if(i==7){
    i=1;
  }
}, 10000);

setInterval(() => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let amORpm;
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (h == 0 || h < 12) {
    amORpm = "AM";
  } else {
    amORpm = "PM";
  }
  document.getElementById("time").innerHTML =
    h + " : " + m + " : " + s + "  " + amORpm;
  document.getElementById("Date").innerHTML = d.toDateString();

  
}, 100);
