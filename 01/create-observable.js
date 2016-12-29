var observable = Rx.Observable.create(function (observer) {
  observer.onNext('foo');
  observer.onNext('bar');
  observer.onNext('baz');
  observer.onCompleted();
});
