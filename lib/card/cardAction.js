"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("../button");

var _button2 = _interopRequireDefault(_button);

var _component = require("../component");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardAction = (_dec = (0, _component2.default)(true, true), _dec(_class = function (_React$Component) {
    _inherits(CardAction, _React$Component);

    function CardAction(props) {
        _classCallCheck(this, CardAction);

        return _possibleConstructorReturn(this, (CardAction.__proto__ || Object.getPrototypeOf(CardAction)).call(this, props));
    }

    _createClass(CardAction, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                text = _props.text,
                onClick = _props.onClick,
                start = _props.start,
                end = _props.end,
                screen = _props.screen,
                settings = _props.settings,
                rest = _objectWithoutProperties(_props, ["text", "onClick", "start", "end", "screen", "settings"]);

            var classes = {
                "card-action": true,
                start: start,
                end: end
            };

            classes = (0, _classnames2.default)(classes);

            return _react2.default.createElement(
                "div",
                _extends({}, rest, { className: classes }),
                _react2.default.createElement(_button2.default, { text: text, onClick: onClick })
            );
        }
    }]);

    return CardAction;
}(_react2.default.Component)) || _class);
exports.default = CardAction;