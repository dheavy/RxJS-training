Rx.DOM
  .get('/products')
  .retry(5)
  .subscribe(
    function (xhr) {
      console.log(xhr);
    },
    function (err) {
      console.log(err);
    }
  )
