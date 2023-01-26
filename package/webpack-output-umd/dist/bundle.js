!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.math = t())
    : (e.math = t());
})(this, () => {
  return (
    (e = {
      10: (e) => {
        e.exports = { square: (e) => e * e };
      },
    }),
    (t = {}),
    (function o(r) {
      var p = t[r];
      if (void 0 !== p) return p.exports;
      var n = (t[r] = { exports: {} });
      return e[r](n, n.exports, o), n.exports;
    })(10)
  );
  var e, t;
});
