var monk = require('monk')
,   Cleric;

Cleric = function () {};

Cleric.prototype.configure = function (options) {
  this.db = monk(options);
};

module.exports = new Cleric();
