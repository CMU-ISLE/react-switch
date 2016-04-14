'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdjustableNumber = function (_Component) {
	_inherits(AdjustableNumber, _Component);

	function AdjustableNumber() {
		_classCallCheck(this, AdjustableNumber);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AdjustableNumber).apply(this, arguments));
	}

	_createClass(AdjustableNumber, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var min = _props.min;
			var max = _props.max;
			var step = _props.step;

			return _react2.default.createElement('input', { type: 'range', min: '1', max: '10' });
		}
	}]);

	return AdjustableNumber;
}(_react.Component);

AdjustableNumber.defaultProps = {
	min: 1,
	max: 10,
	step: 1
};

exports.default = AdjustableNumber;