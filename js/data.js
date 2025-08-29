const _0x43c10e = _0x2c0e;
(function (_0x2509ec, _0x5160c1) {
  const _0x1beb57 = _0x2c0e,
    _0x23ecdf = _0x2509ec();
  while (!![]) {
    try {
      const _0x28ff31 =
        parseInt(_0x1beb57(0xa2)) / 0x1 +
        parseInt(_0x1beb57(0xab)) / 0x2 +
        (parseInt(_0x1beb57(0xa1)) / 0x3) * (parseInt(_0x1beb57(0xa9)) / 0x4) +
        (-parseInt(_0x1beb57(0xa0)) / 0x5) *
          (-parseInt(_0x1beb57(0xac)) / 0x6) +
        (-parseInt(_0x1beb57(0x9b)) / 0x7) * (parseInt(_0x1beb57(0x9e)) / 0x8) +
        parseInt(_0x1beb57(0x9d)) / 0x9 +
        -parseInt(_0x1beb57(0xa5)) / 0xa;
      if (_0x28ff31 === _0x5160c1) break;
      else _0x23ecdf["push"](_0x23ecdf["shift"]());
    } catch (_0x5c3d87) {
      _0x23ecdf["push"](_0x23ecdf["shift"]());
    }
  }
})(_0x1f1e, 0x5a82b),
  (divCelular = document[_0x43c10e(0x9c)](_0x43c10e(0x9f))),
  (divTotal = document["getElementById"](_0x43c10e(0xad))),
  (divTotaldesc = document[_0x43c10e(0x9c)](_0x43c10e(0xaa))),
  (divCelular["innerHTML"] = info[_0x43c10e(0xa8)]["telnum"]);
function _0x1f1e() {
  const _0x50e6be = [
    "1698BpZYdc",
    "625726LLqxXe",
    "telnum",
    "toLocaleString",
    "22868030jzDrDa",
    "currency",
    "innerHTML",
    "metaInfo",
    "3052nKZmxR",
    "total-desc",
    "1377654YEOSyF",
    "9474Svwxky",
    "total",
    "COP",
    "35diqtta",
    "getElementById",
    "6478749krTErT",
    "813176EsKPdU",
    "numero-celular",
    "2215xEOENX",
  ];
  _0x1f1e = function () {
    return _0x50e6be;
  };
  return _0x1f1e();
}
function _0x2c0e(_0x4dff49, _0x261830) {
  const _0x1f1e70 = _0x1f1e();
  return (
    (_0x2c0e = function (_0x2c0e10, _0x132bd0) {
      _0x2c0e10 = _0x2c0e10 - 0x9b;
      let _0x36078b = _0x1f1e70[_0x2c0e10];
      return _0x36078b;
    }),
    _0x2c0e(_0x4dff49, _0x261830)
  );
}
const telnum = info[_0x43c10e(0xa8)][_0x43c10e(0xa3)],
  deuda = debtMap[telnum],
  descuento = 0.5,
  deudaConDescuento = deuda - deuda * descuento,
  formatCurrency = (_0x18d4a7) => {
    const _0x3bc7a2 = _0x43c10e;
    return _0x18d4a7[_0x3bc7a2(0xa4)]("es-CO", {
      style: _0x3bc7a2(0xa6),
      currency: _0x3bc7a2(0xae),
    });
  };
(divCelular[_0x43c10e(0xa7)] = telnum),
  (divTotal[_0x43c10e(0xa7)] = "" + formatCurrency(deuda)),
  (divTotaldesc[_0x43c10e(0xa7)] = "" + formatCurrency(deudaConDescuento));
