Rx.Observable
  .from(['foo', 'bar', 'baz'])
  .subscribe(
    function (data) { console.log(data) },
    function (err) { console.log(err) },
    function () { console.log('completed') }
  );
