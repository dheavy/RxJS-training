function getJSON(arr) {
  return Rx.Observable
    .from(arr)
    .map(function (str) {
      return JSON.parse(str);
    });
}

var json = getJSON(['{"1": 1, "2": 2}', '{"1: 1}'])
  .catch(
    Rx.Observable
      .return({
        error: 'There was an error parsing JSON'
      });
  );

json.subscribe(
  function (json) {
    console.log('Parsed JSON:', json);
  },

  // Will not be executed because errors are caught!
  function (err) {
    console.log('Error!', e.message);
  }
);
