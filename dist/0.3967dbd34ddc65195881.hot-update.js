webpackHotUpdate(0,{

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(140);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _VideoItem = __webpack_require__(246);\n\nvar _VideoItem2 = _interopRequireDefault(_VideoItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      // reviews: [\n      //   {\n      //   \ttitle: \"text1\"\n      //   },\n      //   {\n      //   \ttitle: \"text2\"\n      //   }\n\n      // ],\n      videos: [{\n        id: 1,\n        title: 'Rock on',\n        service: 'vimeo',\n        video: 'https://player.vimeo.com/video/183482793'\n      }, {\n        id: 2,\n        title: 'Common bastard....',\n        service: 'vimeo',\n        video: 'https://player.vimeo.com/video/148177148'\n      }, {\n        id: 3,\n        title: 'Moving on',\n        service: 'vimeo',\n        video: 'https://player.vimeo.com/video/151715092'\n      }]\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'render',\n    value: function render() {\n      var mainVideoSection = {\n        display: 'flex',\n        flexWrap: 'wrap',\n        backgroundColor: \"#fff\",\n        margin: 80\n      };\n\n      var items = this.state.videos.map(function (value, index) {\n        return _react2.default.createElement(_VideoItem2.default, { key: index, data: value });\n      });\n\n      return _react2.default.createElement(\n        'div',\n        { className: \"test\", style: mainVideoSection },\n        items\n      );\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nexports.default = App;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(248); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"App.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/App.js\n ** module id = 245\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/App.js?");

/***/ }

})