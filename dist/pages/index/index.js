"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.jsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.jsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var static_img_img2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! static/img/img2.jpg */ "./src/static/img/img2.jpg");
/* harmony import */ var components_HeaderNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/HeaderNav */ "./src/components/HeaderNav/index.jsx");
/* harmony import */ var components_BusinessButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/BusinessButtonGroup */ "./src/components/BusinessButtonGroup/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







// eslint-disable-next-line import/first





function Index() {
  //   首页样式
  // eslint-disable-next-line no-unused-vars
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    reqNum = _useState2[0],
    $reqNum = _useState2[1];
  //  表示当前是一层路由，在首页中
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    isIndexPage = _useState4[0],
    $isIndexPage = _useState4[1];

  // 1、当前逻辑为，从台长页面进来，先获取台账列表信息，确定头部导航烂的按钮信息
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    navBtnGroup = _useState6[0],
    $navBtnGroup = _useState6[1];
  var _getCurrentInstance = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)(),
    router = _getCurrentInstance.router;
  var params = router.params;
  var routerLevel = params.routerLevel,
    type = params.type;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (routerLevel == 3) {
      $isIndexPage(false);
      if (type == 'company') $navBtnGroup(['企业详情']);
    }
  }, []);

  // 首页按钮跳转路由管理
  var routerManager = function routerManager(type) {
    console.log('首页进来的type', type);
    if (isIndexPage) {
      if (type === '引种登记') _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: "/pages/detail/detail?routerLevel=2&type=".concat(type)
      });else {
        // 不是引种登记的情况下，需要去列表中选择对应的动物
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: "/pages/list/list?routerLevel=2&type=".concat(type)
        });
      }
    }
  };
  // 企业主页的路由管理
  var navClick = function navClick(listType) {
    if (listType === 'business') _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/list/list?routerLevel=3&&type=".concat(listType)
    });else _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: "/pages/list/list?routerLevel=3&&type=".concat(listType)
    });
  };
  var handleClickUserButton = function handleClickUserButton(btnInfo) {
    console.log('btnInfo', btnInfo);
    routerManager(btnInfo);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    children: isIndexPage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "indexPage-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_HeaderNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
        navGroup: navBtnGroup,
        isIndexPage: isIndexPage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Image, {
        className: "indexPage-image",
        src: static_img_img2_jpg__WEBPACK_IMPORTED_MODULE_2__
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "indexPage-inner",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_BusinessButtonGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
          handleClickUserButton: handleClickUserButton
        })
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_HeaderNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
        navGroup: navBtnGroup
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "page-index-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "index-img",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "index-text",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "companyName",
              children: "\u6210\u90FD\u4FE1\u8FBE\u79D1\u6280\u6709\u9650\u516C\u53F8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "address",
              children: "\u56DB\u5DDD\u7701\u6210\u90FD\u5E02\u53CC\u6797\u8DEF145\u53F7"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              className: "manAndPhone",
              children: "\u5F20\u6587 12345678901"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "index-list-nav",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: ['index-list-item', 'businessList'],
            onClick: function onClick() {
              return navClick('business');
            },
            children: ["\u4E1A\u52A1\u603B\u89C8", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: ['index-list-number'],
                children: reqNum === null || reqNum === void 0 ? void 0 : reqNum.a_type_num
              }), "\u7C7B", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: ['index-list-number'],
                children: reqNum === null || reqNum === void 0 ? void 0 : reqNum.a_type_num
              }), "\u4E07\u4EF6"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: ['index-list-item', 'animalList'],
            onClick: function onClick() {
              return navClick('animal');
            },
            children: ["\u7269\u79CD\u603B\u89C8", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: ['index-list-number'],
                children: reqNum === null || reqNum === void 0 ? void 0 : reqNum.b_type_num
              }), "\u79CD", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Text, {
                className: ['index-list-number'],
                children: (reqNum === null || reqNum === void 0 ? void 0 : reqNum.b_total_num) || 1000
              }), "\u4E07\u53EA"]
            })]
          })]
        })]
      })]
    })
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/BusinessButtonGroup/index.jsx":
/*!******************************************************!*\
  !*** ./src/components/BusinessButtonGroup/index.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







var BusinessButtonGroup = function BusinessButtonGroup(_ref) {
  var handleClickUserButton = _ref.handleClickUserButton;
  var UserButton = function UserButton(backgroundColor, btnName, fn) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "btn-box",
      onClick: function onClick() {
        return fn(btnName);
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "icon-surround",
        style: {
          backgroundColor: backgroundColor
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_2__.AtIcon, {
          value: "star-2",
          size: "30",
          color: "#FFF"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        children: btnName
      })]
    });
  };
  var colorMap = {
    'INTRODUCTION_REGISTRATION': '#43B4BB',
    'REPRODUCTION_REGISTRATION': '#3D71E7',
    'DEAD_REGISTRATION': '#FB6C03',
    'ESCAPE_REGISTRATION': '#17B4F7',
    'SALE_REGISTRATION': '#FFA945',
    'DRUG_REGISTRATION': '#FF5F96',
    'EXHIBITION_REGISTRATION': '#3674A0',
    'RETURN_REGISTRATION': '#A486FB'
  };
  // 代表的入参

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    className: "BtnGroup-container",
    children: [UserButton(colorMap['INTRODUCTION_REGISTRATION'], '引种登记', handleClickUserButton), UserButton(colorMap['REPRODUCTION_REGISTRATION'], '繁殖登记', handleClickUserButton), UserButton(colorMap['DEAD_REGISTRATION'], '死亡登记', handleClickUserButton), UserButton(colorMap['ESCAPE_REGISTRATION'], '逃逸登记', handleClickUserButton), UserButton(colorMap['SALE_REGISTRATION'], '出售登记', handleClickUserButton), UserButton(colorMap['DRUG_REGISTRATION'], '用药登记', handleClickUserButton), UserButton(colorMap['EXHIBITION_REGISTRATION'], '展演登记', handleClickUserButton), UserButton(colorMap['RETURN_REGISTRATION'], '归还登记', handleClickUserButton)]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (BusinessButtonGroup);

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.jsx");


var config = {"navigationBarTitleText":"首页","navigationStyle":"custom"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./src/static/img/img2.jpg":
/*!*********************************!*\
  !*** ./src/static/img/img2.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/img2.jpg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map