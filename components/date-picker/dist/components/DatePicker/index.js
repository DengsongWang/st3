"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _calendarIcon = _interopRequireDefault(require("./calendarIcon"));

var _formatDate = _interopRequireDefault(require("./helpers/formatDate"));

var _withReduxForm = _interopRequireDefault(require("../../libs/hocs/withReduxForm"));

var _constants = require("../../libs/constants");

var _container = _interopRequireDefault(require("./styled/container"));

var _modal = _interopRequireDefault(require("./styled/modal"));

var _header = _interopRequireDefault(require("./styled/header"));

var _headerTitle = _interopRequireDefault(require("./styled/headerTitle"));

var _calendar = _interopRequireDefault(require("./styled/calendar"));

var _input = _interopRequireDefault(require("./styled/input"));

var _context = require("../Application/context");

var _utils = require("../../libs/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A DatePicker is a text input to capture a date.
 * @category Form
 */
var DatePickerComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePickerComponent, _Component);

  function DatePickerComponent(props) {
    var _this;

    _classCallCheck(this, DatePickerComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePickerComponent).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.inputRef = _react["default"].createRef();
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.openModal = _this.openModal.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DatePickerComponent, [{
    key: "handleChange",
    value: function handleChange() {
      var onChange = this.props.onChange;
      this.closeModal();
      onChange.apply(void 0, arguments);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      var _this$props = this.props,
          onBlur = _this$props.onBlur,
          value = _this$props.value;
      onBlur(value);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      var _this$props2 = this.props,
          onFocus = _this$props2.onFocus,
          value = _this$props2.value;
      onFocus(value);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var keyCode = event.keyCode;
      var readOnly = this.props.readOnly;
      var shouldOpenModal = (keyCode === _constants.ENTER_KEY || keyCode === _constants.SPACE_KEY) && !readOnly;

      if (shouldOpenModal) {
        this.setState({
          isOpen: true
        });
      }
    }
  }, {
    key: "openModal",
    value: function openModal(event) {
      var _this$props3 = this.props,
          onClick = _this$props3.onClick,
          readOnly = _this$props3.readOnly;

      if (!readOnly) {
        this.setState({
          isOpen: true
        });
        onClick(event);
      }
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        isOpen: false
      });
    }
    /**
     * Sets focus on the element.
     * @public
     */

  }, {
    key: "focus",
    value: function focus() {
      this.inputRef.current.focus();
    }
    /**
     * Sets click on the element.
     * @public
     */

  }, {
    key: "click",
    value: function click() {
      this.inputRef.current.click();
    }
    /**
     * Sets blur on the element.
     * @public
     */

  }, {
    key: "blur",
    value: function blur() {
      this.inputRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          value = _this$props4.value,
          minDate = _this$props4.minDate,
          maxDate = _this$props4.maxDate,
          placeholder = _this$props4.placeholder,
          label = _this$props4.label,
          required = _this$props4.required,
          style = _this$props4.style,
          className = _this$props4.className,
          formatStyle = _this$props4.formatStyle,
          hideLabel = _this$props4.hideLabel,
          name = _this$props4.name,
          bottomHelpText = _this$props4.bottomHelpText,
          isCentered = _this$props4.isCentered,
          error = _this$props4.error,
          readOnly = _this$props4.readOnly,
          disabled = _this$props4.disabled,
          tabIndex = _this$props4.tabIndex,
          id = _this$props4.id,
          locale = _this$props4.locale;
      var isOpen = this.state.isOpen;
      var formattedDate = (0, _formatDate["default"])(value, formatStyle, locale);
      return _react["default"].createElement(_container["default"], {
        id: id,
        className: className,
        style: style
      }, _react["default"].createElement(_input["default"], {
        ref: this.inputRef,
        label: label,
        placeholder: placeholder,
        icon: _react["default"].createElement(_calendarIcon["default"], null),
        iconPosition: "right",
        required: required,
        value: formattedDate,
        onKeyDown: this.handleKeyDown,
        onClick: this.openModal,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        hideLabel: hideLabel,
        name: name,
        bottomHelpText: bottomHelpText,
        isCentered: isCentered,
        error: error,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex
      }), _react["default"].createElement(_modal["default"], {
        isOpen: isOpen,
        onRequestClose: this.closeModal
      }, _react["default"].createElement(_header["default"], null, _react["default"].createElement(_headerTitle["default"], null, formattedDate)), _react["default"].createElement(_calendar["default"], {
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        formatStyle: formatStyle,
        onChange: this.handleChange,
        locale: locale
      })));
    }
  }]);

  return DatePickerComponent;
}(_react.Component);

function DatePicker(_ref) {
  var locale = _ref.locale,
      rest = _objectWithoutProperties(_ref, ["locale"]);

  return _react["default"].createElement(_context.Consumer, null, function (values) {
    return _react["default"].createElement(DatePickerComponent, _extends({
      locale: (0, _utils.getLocale)(values, locale)
    }, rest));
  });
}

DatePicker.propTypes = {
  /** Sets the date for the DatePicker programmatically. */
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),

  /** The ending of a range of valid dates. The range includes the endDate.
   * The default value is current date + 100 years. */
  maxDate: _propTypes["default"].instanceOf(Date),

  /** The beginning of a range of valid dates. The range includes the startDate.
   * The default value is current date - 100 years. */
  minDate: _propTypes["default"].instanceOf(Date),

  /**  The date format style to display in the input field.
   * Valid values are small, medium, and large. */
  formatStyle: _propTypes["default"].oneOf(['small', 'medium', 'large']),

  /** The action triggered when a value attribute changes. */
  onChange: _propTypes["default"].func,

  /** Text that is displayed when the DatePicker is empty,
   * to prompt the user for a valid entry. */
  placeholder: _propTypes["default"].string,

  /** Text label for the DatePicker. */
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** A boolean to hide the DatePicker label. */
  hideLabel: _propTypes["default"].bool,

  /** Specifies that the DatePicker field must be filled out before submitting the form.
   * This value defaults to false. */
  required: _propTypes["default"].bool,

  /** The name of the DatePicker. */
  name: _propTypes["default"].string,

  /** Shows the help message below the DatePicker. */
  bottomHelpText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** Specifies that the DatePicker text will be centered. This value defaults to false. */
  isCentered: _propTypes["default"].bool,

  /** Specifies that the DatePicker must be filled out before submitting the form. */
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** Specifies that the DatePicker is read-only. This value defaults to false. */
  readOnly: _propTypes["default"].bool,

  /** Specifies that the DatePicker element should be disabled. This value defaults to false. */
  disabled: _propTypes["default"].bool,

  /** Specifies the tab order of an element (when the tab button is used for navigating). */
  tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /** The action triggered when the element is clicked. */
  onClick: _propTypes["default"].func,

  /** The action triggered when the element receives focus. */
  onFocus: _propTypes["default"].func,

  /** The action triggered when the element releases focus. */
  onBlur: _propTypes["default"].func,

  /** The id of the outer element. */
  id: _propTypes["default"].string,

  /** A CSS class for the outer element, in addition to the component's base classes. */
  className: _propTypes["default"].string,

  /** An object with custom style applied to the outer element. */
  style: _propTypes["default"].object,

  /** The DatePicker locale. Defaults to browser's language. */
  locale: _propTypes["default"].string
};
DatePicker.defaultProps = {
  value: undefined,
  minDate: undefined,
  maxDate: undefined,
  formatStyle: 'medium',
  onChange: function onChange() {},
  placeholder: undefined,
  label: undefined,
  hideLabel: false,
  required: false,
  name: undefined,
  bottomHelpText: null,
  isCentered: false,
  error: null,
  readOnly: false,
  disabled: false,
  tabIndex: undefined,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  id: undefined,
  className: undefined,
  style: undefined,
  locale: undefined
};

var _default = (0, _withReduxForm["default"])(DatePicker);

exports["default"] = _default;

//# sourceMappingURL=index.js.map