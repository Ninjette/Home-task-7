webpackHotUpdate(0,{

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(140);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// let PLAYERS = [\n// \t{\n// \t\tname: \"Neville Southall\",\n// \t\tscore: 32,\n// \t\tid: 1\n// \t},\n// \t{\n// \t\tname: \"James Chester\",\n// \t\tscore: 53,\n// \t\tid: 2\n// \t},\n// \t{\n// \t\tname: \"Gareth Southgate\",\n// \t\tscore: 54,\n// \t\tid: 3\n// \t},\n// \t{\n// \t\tname: \"Clarke Carlisle\",\n// \t\tscore: 62,\n// \t\tid: 4\n// \t},\n// \t{\n// \t\tname: \"Jermaine Darlington\",\n// \t\tscore: 42,\n// \t\tid: 5\n// \t}\n// ]\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    //    this.state = {\n    //    \ttxt: 'this is the state txt',\n    //    \tcat: PLAYERS\n    // }\n    // this.handleClick = this.handleClick.bind(this);\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n    _this.myarray = {};\n\n    _this.addReview = function (event) {\n      event.preventDefault();\n      console.log(this.state, state);\n      console.log();\n    };\n\n    return _this;\n  }\n\n  // state = {\n  //   id: 228\n  // }\n  // state = {\n  // hz: true\n  // reviews: [\n  // \t{\n  // \t\ttext: 'this film is so good'\n  // \t},\n  // \t{\n  // \t\ttext: \"this film is normal\"\n  // \t}\n  // ]\n  // }\n  // getInitialState(){\n  // \treturn{\n  // \t\t// players: this.props.initialPlayers\n  // \t\treviews: [\n  // \t\t\t{\n  // \t\t\t\ttext: 'this film is so good'\n  // \t\t\t},\n  // \t\t\t{\n  // \t\t\t\ttext: \"this film is normal\"\n  // \t\t\t}\n  // \t\t]\n  // \t};\n  // }\n\n  // constructor(){\n  // \tsuper();\n  // \tthis.state = getInitialState();\n  // }\n\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"comment-block\" },\n        _react2.default.createElement(\n          \"h3\",\n          { className: \"comment-block__title\" },\n          \"Comments\"\n        ),\n        _react2.default.createElement(\n          \"h1\",\n          null,\n          this.reviews\n        ),\n        _react2.default.createElement(\"div\", null),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"comment-block__text\" },\n          \"text of the comment text of the comment text of the comment text of the comment text of the comment text of the comment text of the comment\"\n        ),\n        _react2.default.createElement(\n          \"form\",\n          null,\n          _react2.default.createElement(\n            \"h4\",\n            { className: \"comment-block__trigger\" },\n            \"leave your comment\"\n          ),\n          _react2.default.createElement(\"textarea\", { placeholder: \"your comment...\", className: \"comment-block__textarea\", type: \"text\" }),\n          _react2.default.createElement(\"input\", { className: \"comment-block__btn\", onClick: this.addReview, type: \"submit\" })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(248); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Comment.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Comment.js\n ** module id = 252\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/Comment.js?");

/***/ }

})