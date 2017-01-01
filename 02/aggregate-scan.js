var avg = Rx.Observable
  .interval(1000)
  .scan(function (prev, curr) {
    return {
      sum: prev.sum + curr,
      count: prev.count + 1
    };
  })
  .map(function (o) {
    return o.sum / o.count;
  });

avg.subscribe(function (x) {
  console.log(x);
});
