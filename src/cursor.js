// cursor.js
export function initCursor() {
  var crsr = document.querySelector(".cursor");

  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.clientX -5+  "px";
    crsr.style.top = dets.clientY  -5+ "px";
  });
}
