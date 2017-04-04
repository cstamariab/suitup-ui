"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

var _navbarMenu = require("./navbarMenu");

var _navbarMenu2 = _interopRequireDefault(_navbarMenu);

var _navbarSubmenu = require("./navbarSubmenu");

var _navbarSubmenu2 = _interopRequireDefault(_navbarSubmenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = (_dec = (0, _component2.default)(true, true), _dec(_class = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                screen = _props.screen,
                rest = _objectWithoutProperties(_props, ["screen"]);

            var classes = (0, _classnames3.default)(_defineProperty({
                navbar: true
            }, screen, true));

            return _react2.default.createElement(
                "nav",
                _extends({}, rest, { className: classes }),
                _react2.default.createElement(
                    "ul",
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return Navbar;
}(_react2.default.Component)) || _class);


Navbar.Menu = _navbarMenu2.default;
Navbar.Submenu = _navbarSubmenu2.default;

Navbar.propTypes = {
    children: function children(props, propName, componentName) {
        var prop = props[propName];

        var error = null;
        _react2.default.Children.forEach(prop, function (child) {
            if (child.type.name != "Navbar.Menu" && child.type.name != "NavbarMenu") {
                error = new Error("`" + componentName + "` children should be of type `Navbar.Menu`, instead it was of type " + child.type.name);
            }
        });
        return error;
    }
};

exports.default = Navbar;