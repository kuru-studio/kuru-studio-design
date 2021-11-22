import { createElement } from 'react';

var styles = {"test":"_hO_aX"};

var ExampleAtom = function ExampleAtom(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, "Example Atom: ", text);
};

var styles$1 = {"test":"_3-ooI"};

var InputAtom = function InputAtom(_ref) {
  var type = _ref.type,
      value = _ref.value;
  return createElement("input", {
    className: styles$1.test,
    type: type,
    value: value
  });
};

var styles$2 = {"test":"_3p0-i"};

var FormMolecule = function FormMolecule(_ref) {
  var children = _ref.children;
  return createElement("div", {
    className: styles$2.test
  }, children);
};

export { ExampleAtom, FormMolecule, InputAtom };
//# sourceMappingURL=index.modern.js.map
