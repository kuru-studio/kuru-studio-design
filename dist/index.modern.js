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
  var text = _ref.text;
  return createElement("div", {
    className: styles$1.test
  }, "Input Atom: ", text);
};

var styles$2 = {"test":"_3p0-i"};

var FormMolecule = function FormMolecule(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles$2.test
  }, "Form Molecule: ", text);
};

export { ExampleAtom, FormMolecule, InputAtom };
//# sourceMappingURL=index.modern.js.map
