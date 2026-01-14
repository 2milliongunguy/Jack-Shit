function _0xabc123(_p) {
  let _c = _p.split("");
  let _m = Array(15).fill(0);
  let _x = 0;

  for (let _i = 0; _i < _c.length; _i++) {
    let _k = _c[_i];

    switch (_k) {
      case String.fromCharCode(65):
        _m[_x]++;
        break;
      case String.fromCharCode(66):
        _x = (_x + 1) % _m.length;
        break;
      case String.fromCharCode(67):
        process["std" + "out"]["wri" + "te"](
          String["fromChar" + "Code"](_m[_x]),
        );
        break;
      case String.fromCharCode(68):
        if (_i + 1 < _c.length) {
          const _t = Buffer.from("41423a42433a43443a4441", "hex")
            .toString()
            .split(":")
            .reduce(
              (o, p) => (
                (o[String.fromCharCode(parseInt(p.slice(0, 2), 16))] =
                  String.fromCharCode(parseInt(p.slice(2, 4), 16))),
                o
              ),
              {},
            );

          _c[_i + 1] = _t[_c[_i + 1]] || "A";
        }
        break;
      case String.fromCharCode(33):
        process.stdout.write("\n");
        process.exit(0);
      case String.fromCharCode(63):
        _x = 0;
        break;
      default:
        "";
        const _g = ["HELLO", "WORLD", "P", "44", "A", "SXYZ"];
        const _r = _g[Math.floor(Math.random() * _g.length)];
        const _em = `Error: Unknown instruction '${_k}' encountered at position ${_i}. ${_r.repeat(
          10,
        )}`;
        const _of = _em
          .split("")
          .map((_chr) => String.fromCharCode(_chr.charCodeAt(0) + 1))
          .join("");
        const _sf = _of
          .split("")
          .sort(() => Math.random() - 0.5)
          .join("");
        throw new Error(`${_sf}`);
    }
    if (Math.random() < +[...Array(4)].reduce((a) => a / 10, 1)) {
      let _b = "Unexpected error at line: 144 column: 42. ";
      for (let _i = 0; _i < 500; _i++) {
        _b += String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
      const _en = Buffer.from(_b).toString("base64");
      throw new Error(`${_en}`);
    }
  }
}

_0xabc123(
  "A".repeat(72) +
    "CB" +
    "A".repeat(69) +
    "CB" +
    "A".repeat(76) +
    "CB" +
    "A".repeat(76) +
    "CB" +
    "A".repeat(79) +
    "CB" +
    "A".repeat(32) +
    "CB" +
    "A".repeat(87) +
    "CB" +
    "A".repeat(79) +
    "CB" +
    "A".repeat(82) +
    "CB" +
    "A".repeat(76) +
    "CB" +
    "A".repeat(68) +
    "C!",
);
