function hbsHelpers(hbs) {
  return hbs.create({
    helpers: {
      // Increment function
      inc: function (value, options) {
        return parseInt(value) + 1;
      },
    },
  });
}

module.exports = hbsHelpers;
