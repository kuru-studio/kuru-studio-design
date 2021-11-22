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
      value = _ref.value,
      name = _ref.name;
  return createElement("input", {
    className: styles$1.test,
    name: name,
    type: type,
    value: value
  });
};

var styles$2 = {"test":"_31thu"};

var LabelAtom = function LabelAtom(_ref) {
  var children = _ref.children,
      labelFor = _ref.labelFor;
  return createElement("label", {
    htmlFor: labelFor,
    className: styles$2.test
  }, children);
};

var styles$3 = {"test":"_3p0-i"};

var FormMolecule = function FormMolecule(_ref) {
  var children = _ref.children;
  return createElement("div", {
    className: styles$3.test
  }, children);
};

export { ExampleAtom, FormMolecule, InputAtom, LabelAtom };
//# sourceMappingURL=index.modern.js.map
