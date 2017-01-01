var avg = Rx
  .Observable
  .range(0, 5)
  .reduce(function (prev, curr) {
    return {
      sum: prev.sum + curr,
      count: prev.count + 1
    }
  }, {sum: 0, count: 0})
  .map(function (o) {
    return o.sum / o.count;
  });

var subscription = avg.subscribe(function (x) {
  console.log('Average is:', x);
});
