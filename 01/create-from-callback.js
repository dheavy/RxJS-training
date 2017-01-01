var readdir = Rx.Observable.fromNodeCallback(require('fs').readdir);
var dir = readdir('./')
  .subscribe(
    function (data) { console.log('list of directories:', res); },
    function (err) { console.log('error:', err); },
    function () { console.log('done'); }
  );
