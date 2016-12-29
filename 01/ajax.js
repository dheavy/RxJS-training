function get(url) {
  return Rx.Observable.create(function (observer) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function () {
      if (req.status === 200) {
        observer.onNext(req.response);
        observer.onCompleted();
      } else {
        observer.onError(new Error(req.statusText));
      }
    };

    req.onerror = function () {
      observer.onError(new Error('Unknown error'));
    };

    req.send();
  });
}

// Create the Observable.
// Nothing happens until we subscribe (=> lazy).
var test = get('api/contents.json');

test.subscribe(
  function onNext(data) {
    console.log(data);
  },
  function onError(err) {
    console.log(err);
  },
  function onCompleted() {
    console.log('Done');
  }
);
