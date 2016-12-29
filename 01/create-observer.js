var observer = Rx.Observer.create(
  function onNext(n) {
    console.log('next:', n);
  },
  function onError(err) {
    console.log('error:', err);
  },
  function onCompleted() {
    console.log('completed');
  }
);
