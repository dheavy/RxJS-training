function Subject() {
  this.listeners = [];
}

Subject.prototype.add = function (listener) {
  this.listeners.push(listener);
};

Subject.prototype.remove = function (listener) {
  this.listeners.splice(this.listeners.indexOf(listener), 1);
};

Subject.prototype.notify = function (message) {
  this.listeners.forEach(function (listener) {
    listener.update(message);
  });
};

function Listener(name) {
  this.name = name;
}

Listener.prototype.update = function (message) {
  console.log(this.name + ' received: ' + message);
};

var notifier = new Producer();

var listener1 = new Listener('Listener 1');
var listener2 = new Listener('Listener 2');
var listener3 = new Listener('Listener 3');

notifier.add(listener1);
notifier.add(listener2);
notifier.add(listener3);

notifier.notify('Hello, world');
