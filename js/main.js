anime({
  targets: " .nav-item",
  opacity: [0, 1],
  translateY: [20, 0],
  delay: (el, i) => 400 * i
});

anime({
  targets: " .navbar-brand",
  rotate: {
    value: "1turn",
    easing: "easeInOutSine",
    delay: 1000
  }
});

anime({
  targets: " #courses",
  translateY: [200, 0],
  easing: "easeInOutSine",
  duration: 2000
});

anime({
  targets: " .header-section",
  scale: function(el, i, l) {
    return l - i + -0.1;
  },
  duration: 5000
});
