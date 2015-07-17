(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDropdownMenu"] = factory(require("react"));
	else
		root["ReactDropdownMenu"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Dropdown2 = __webpack_require__(3);

	var _Dropdown3 = _interopRequireDefault(_Dropdown2);

	exports.Dropdown = _Dropdown3['default'];

	var _DropdownMenu2 = __webpack_require__(1);

	var _DropdownMenu3 = _interopRequireDefault(_DropdownMenu2);

	exports.DropdownMenu = _DropdownMenu3['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var DropdownMenu = (function (_React$Component) {
	  _inherits(DropdownMenu, _React$Component);

	  function DropdownMenu(props, context) {
	    _classCallCheck(this, DropdownMenu);

	    _React$Component.call(this, props, context);

	    this.state = {
	      offset: {}
	    };
	  }

	  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
	    this.updatePosition();
	    window.addEventListener('resize', this.handleWindowResize);
	  };

	  DropdownMenu.prototype.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('resize', this.handleWindowResize);
	  };

	  DropdownMenu.prototype.render = function render() {
	    var offset = this.state.offset;

	    return _react2['default'].createElement(
	      'ul',
	      _extends({}, this.props, { ref: 'menu', style: { top: offset.y, left: offset.x } }),
	      this.props.children
	    );
	  };

	  DropdownMenu.prototype.handleWindowResize = function handleWindowResize() {
	    this.updatePosition();
	  };

	  DropdownMenu.prototype.updatePosition = function updatePosition() {
	    var menu = _react2['default'].findDOMNode(this.refs.menu);
	    var menuRect = menu.getBoundingClientRect();
	    var parent = menu.parentNode;
	    var parentRect = parent.getBoundingClientRect();
	    var windowWidth = window.innerWidth;
	    var windowHeight = window.innerHeight;

	    var x = parentRect.left;
	    var y = parentRect.bottom;

	    if (x + menuRect.width > windowWidth) {
	      x = x - menuRect.width;
	    }

	    if (y + menuRect.height > windowHeight) {
	      y = y - menuRect.height;
	    }

	    this.setState({
	      offset: { x: x, y: y }
	    });
	  };

	  return DropdownMenu;
	})(_react2['default'].Component);

	exports['default'] = DropdownMenu;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _DropdownMenu = __webpack_require__(1);

	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

	var Dropdown = (function (_React$Component) {
	  _inherits(Dropdown, _React$Component);

	  _createClass(Dropdown, null, [{
	    key: 'propTypes',
	    value: {
	      className: _react2['default'].PropTypes.string,
	      activeClassName: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      className: '',
	      activeClassName: 'active'
	    },
	    enumerable: true
	  }]);

	  function Dropdown(props, context) {
	    _classCallCheck(this, Dropdown);

	    _React$Component.call(this, props, context);

	    this.state = {
	      active: false
	    };

	    this.handleClick = this.handleClick.bind(this);
	    this.handleDocumentClick = this.handleDocumentClick.bind(this);
	    this.handleDocumentKeydown = this.handleDocumentKeydown.bind(this);
	  }

	  Dropdown.prototype.componentDidMount = function componentDidMount() {
	    document.addEventListener('click', this.handleDocumentClick);
	    document.addEventListener('keydown', this.handleDocumentKeydown);
	  };

	  Dropdown.prototype.componentWillUnmount = function componentWillUnmount() {
	    document.removeEventListener('click', this.handleDocumentClick);
	    document.removeEventListener('keydown', this.handleDocumentKeydown);
	  };

	  Dropdown.prototype.render = function render() {
	    var _this = this;

	    var children = [];
	    var _props = this.props;
	    var className = _props.className;
	    var activeClassName = _props.activeClassName;

	    if (this.isActive()) {
	      className += className ? ' ' + activeClassName : activeClassName;
	    }

	    _react2['default'].Children.forEach(this.props.children, function (item) {
	      if (item.type === _DropdownMenu2['default']) {
	        if (_this.isActive()) children.push(item);
	      } else {
	        children.push(item);
	      }
	    });

	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        ref: 'dropdown',
	        onClick: this.handleClick,
	        className: className }),
	      children
	    );
	  };

	  Dropdown.prototype.handleClick = function handleClick(e) {
	    e.preventDefault();
	    this.toggle();
	  };

	  Dropdown.prototype.isActive = function isActive() {
	    return this.state.active;
	  };

	  Dropdown.prototype.open = function open() {
	    if (this.isActive()) return;
	    this.setState({ active: true });
	  };

	  Dropdown.prototype.close = function close() {
	    if (!this.isActive()) return;
	    this.setState({ active: false });
	  };

	  Dropdown.prototype.toggle = function toggle() {
	    if (this.isActive()) {
	      this.close();
	    } else {
	      this.open();
	    }
	  };

	  Dropdown.prototype.getDOMNode = function getDOMNode() {
	    return _react2['default'].findDOMNode(this.refs.dropdown);
	  };

	  Dropdown.prototype.handleDocumentClick = function handleDocumentClick(e) {
	    if (!this.isActive()) return;

	    var dropdown = this.getDOMNode();
	    var element = e.target;

	    if (element === dropdown) return;

	    while (element) {
	      if (element === dropdown) return;
	      element = element.parentNode;
	    }

	    e.preventDefault();
	    e.stopPropagation();
	    this.close();
	  };

	  Dropdown.prototype.handleDocumentKeydown = function handleDocumentKeydown(e) {
	    if (e.keyCode === 27 && this.isActive()) {
	      this.close();
	    }
	  };

	  return Dropdown;
	})(_react2['default'].Component);

	exports['default'] = Dropdown;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;