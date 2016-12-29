// Get coordinates for the 10 first
// clicks on the right side of the screen.
Rx.Observable
  .fromEvent(window, 'click')
  .filter(function (e) {
    return e.clientX > window.innerWidth / 2;
  })
  .take(10)
  .subscribe(function (e) {
    console.log(e.clientX, e.clientY);
  });
