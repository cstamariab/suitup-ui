var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";

const Tab = (_ref) => {
  let { children, name } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "name"]);

  return React.createElement(
    "div",
    _extends({}, rest, { className: "tab" }),
    children
  );
};

export default Tab;
module.exports = exports["default"];