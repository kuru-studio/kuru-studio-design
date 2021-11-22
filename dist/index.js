var React = require('react');

var styles = {"test":"_hO_aX"};

var ExampleAtom = function ExampleAtom(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Atom: ", text);
};

var styles$1 = {"test":"_3-ooI"};

var InputAtom = function InputAtom(_ref) {
  var type = _ref.type,
      value = _ref.value;
  return React.createElement("input", {
    className: styles$1.test,
    type: type,
    value: value
  });
};

var styles$2 = {"test":"_3p0-i"};

var FormMolecule = function FormMolecule(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: styles$2.test
  }, children);
};

exports.ExampleAtom = ExampleAtom;
exports.FormMolecule = FormMolecule;
exports.InputAtom = InputAtom;
//# sourceMappingURL=index.js.map
