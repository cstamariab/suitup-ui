'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _cardContent = require('./cardContent');

var _cardContent2 = _interopRequireDefault(_cardContent);

var _cardFooter = require('./cardFooter');

var _cardFooter2 = _interopRequireDefault(_cardFooter);

var _cardAction = require('./cardAction');

var _cardAction2 = _interopRequireDefault(_cardAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card(props) {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {

      var classes = (0, _classnames2.default)({
        "card": true
      });

      var style = {
        maxWidth: this.props.width ? this.props.width : undefined,
        maxHeight: this.props.height ? this.props.height : undefined,
        width: this.props.width ? this.props.width : undefined,
        height: this.props.height ? this.props.height : undefined
      };

      return _react2.default.createElement(
        'div',
        { className: classes, style: style },
        this.props.children
      );
    }
  }]);

  return Card;
}(_react2.default.Component);

Card.Content = _cardContent2.default;
Card.Footer = _cardFooter2.default;
Card.Action = _cardAction2.default;

exports.default = Card;