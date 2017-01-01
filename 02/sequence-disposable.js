var counter = Rx.Observable.interval(1000);

var sub1 = counter.subscribe(function (i) {
  console.log('Subscription 1:', i);
})

var sub2 = counter.subscribe(function (i) {
  console.log('Subscription 2:', i);
});

setTimeout(function () {
  console.log('Cancelling subsciption 2...');
  sub2.dispose();
}, 3000);
