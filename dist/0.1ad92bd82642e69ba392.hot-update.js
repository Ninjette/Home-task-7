webpackHotUpdate(0,{

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(140);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Title = __webpack_require__(247);\n\nvar _Title2 = _interopRequireDefault(_Title);\n\nvar _VideoContent = __webpack_require__(251);\n\nvar _VideoContent2 = _interopRequireDefault(_VideoContent);\n\nvar _Comment = __webpack_require__(252);\n\nvar _Comment2 = _interopRequireDefault(_Comment);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = { title: _this.props.data.title };\n    _this.handleClick = _this.handleClick.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'handleClick',\n    value: function handleClick() {\n      this.setState({ title: 'New title is here!!!!' });\n    }\n  }, {\n    key: 'shouldComponentUpdate',\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      return true;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var videoStyle = {\n        justifyContent: 'space-between',\n        minHeight: 200,\n        border: '1px solid #ccc',\n        fontFamily: \"'Raleway', sans-serif\",\n        fontStyle: 'italic',\n        // margin: '10px',\n        backgroundColor: \"#e6e6e6\"\n      };\n      return _react2.default.createElement(\n        'div',\n        { className: 'video-block', style: videoStyle },\n        _react2.default.createElement(_Title2.default, { title: this.state.title }),\n        _react2.default.createElement(_VideoContent2.default, { url: this.props.data.video }),\n        _react2.default.createElement(\n          'p',\n          null,\n          _react2.default.createElement(\n            'a',\n            { href: '#', onClick: this.handleClick },\n            ' Click Me '\n          )\n        ),\n        _react2.default.createElement(_Comment2.default, { reviews: this.props.data.reviews, title: this.state.title })\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(248); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"VideoItem.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/VideoItem.js\n ** module id = 246\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/VideoItem.js?");

/***/ }

})