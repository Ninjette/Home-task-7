webpackHotUpdate(0,{

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(140);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.onReviewChange = function (e) {\n      console.log(this.state.comment);\n      this.setState({\n        comment: e.target.value\n      });\n    };\n\n    _this.addReview = function (event) {\n      event.preventDefault();\n      console.log(this);\n      this.props.reviews.push({\n        text: this.state.comment,\n        id: this.state.nextId\n      });\n      this.state.nextId += 1;\n\n      this.state.comment = \"\";\n      this.setState({ comment: \"\" });\n    };\n\n    _this.state = {\n      comment: '',\n      nextId: 3\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'comment-block' },\n        _react2.default.createElement(\n          'h3',\n          { className: 'comment-block__title' },\n          'Comments'\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          this.props.reviews.map(function (review, index) {\n            return _react2.default.createElement(\n              'p',\n              { className: 'comment-block__text', key: review.id },\n              review.text,\n              ' '\n            );\n          }.bind(this))\n        ),\n        _react2.default.createElement(\n          'form',\n          null,\n          _react2.default.createElement(\n            'h4',\n            { className: 'comment-block__trigger' },\n            'leave your comment'\n          ),\n          _react2.default.createElement('textarea', { onChange: this.onReviewChange.bind(this), value: this.state.comment, placeholder: 'your comment...', className: 'comment-block__textarea', type: 'text' }),\n          _react2.default.createElement('input', { value: 'submit', className: 'comment-block__btn', onClick: this.addReview.bind(this), type: 'submit' })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(248); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"Comment.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Comment.js\n ** module id = 252\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/Comment.js?");

/***/ }

})