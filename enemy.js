(function () {

  'use strict';

  var enemy = {};

  Object.observe(enemy, function (changes) {

    changes.forEach(function (change) {
      console.log(change.type, change.name, change.oldValue);
    });

  });

}());
