var allMoves = Rx.Observable
  .fromEvent(document, 'mousemove')
  .subscribe(function (e) {
    console.log(e.clientX, e.clientY);
  });

var movesOnTheRight = allMoves
  .filter(function (e) {
    return e.clientX > window.innerWidth / 2;
  })
  .subscribe(function (e) {
    console.log('on the right', e.clientX);
  });

var movesOnTheLeft = allMoves
  .filter(function (e) {
    return e.clientX < window.innerWidth / 2;
  })
  .subscribe(function (e) {
    console.log('on the left', e.clientX);
  });
