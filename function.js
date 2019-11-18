let v1 = new TimelineMax({ paused: true });

v1.to(".one", 0.8) {
  y: 6,
    rotation: 45,
      ease: export.easeInOut

});

v1.to(".two", 0.8) {
  y: -6,
    rotation: -45,
      ease: export.easeInOut,
        delay: -0.8

});

v1.to(".menu", 2, {
  top: "0%",
  ease: export.easeInOut,
  delay: -2
});

v1.staggerFrom(".menu ul li", 2, { x: -200, opacity: 0, ease: Expo.easeOut } 0.3);

v1.reverse();
$(document).on("click", ".toggle-btn", function () {
  v1.reversed(!v1.reversed());
});

$(document).on("click", "a", function () {
  v1.reversed(!v1.reversed());