"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/list/list"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/list/list.jsx":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/list/list.jsx ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_HeaderNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/HeaderNav */ "./src/components/HeaderNav/index.jsx");
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Card */ "./src/components/Card/index.jsx");
/* harmony import */ var components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/List */ "./src/components/List/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






// eslint-disable-next-line import/first

// eslint-disable-next-line import/first

// eslint-disable-next-line import/first



function ListPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
      // {
      //     id: 3,
      //     pic: '',
      //     f1: '成都第一家公司',
      //     f2: '成都是打四代是大红色大上课打卡时间到',
      //     f3: [
      //         { value: '正常', key: 'NORMAL' },
      //         { value: '驯养繁殖', key: 'NORMAL' },
      //     ],
      //     f4: [
      //         { value: '动物 2 种 / 12 只' },
      //         { value: 2 }
      //     ]
      // }
    ]),
    _useState2 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    resObj = _useState2[0],
    $resObj = _useState2[1];

  // eslint-disable-next-line no-unused-vars
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState4 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    forListBtn = _useState4[0],
    $forListBtn = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState6 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    navBtnGroup = _useState6[0],
    $navBtnGroup = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState8 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState7, 2),
    listBtnChoose = _useState8[0],
    $listBtnChoose = _useState8[1];
  var chooseListBtn = function chooseListBtn(buttonName) {
    console.log(buttonName);
    $listBtnChoose(buttonName);
  };

  // 1、当前逻辑为，从台长页面进来，先获取台账列表信息，确定头部导航烂的按钮信息
  var _getCurrentInstance = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)(),
    router = _getCurrentInstance.router;
  var params = router.params;
  var _router$params = router.params,
    routerLevel = _router$params.routerLevel,
    type = _router$params.type;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (routerLevel == 2) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
        url: 'http://7yi3w4.natappfree.cc/api/company/companyAccountList',
        method: 'POST',
        data: {
          id: "BusinessLedgerPageHandler",
          filterList: [{
            key: "businessStatus",
            operation: "EQ",
            values: ["DRAFT"]
          }]
        },
        success: function success(res) {
          console.log(res.data.data.records);
          $resObj(res.data.data.records);
        }
      });
      // Taro.request({
      //     url: chooseURL(),
      //     method: 'POST',
      //     data:
      //     {
      //         "id": "AnimalLedgerPageHandler",
      //         "filterList": [{
      //             "key": "companyType",
      //             "operation": "IN",
      //             "values": item,
      //         }],
      //         "orderList": []
      //     },
      //     success: function (res) {
      //         $resObj(res.data.data.records)
      //     }
      // })
    }

    if (routerLevel == 3) {
      switch (type) {
        case 'animal':
          $navBtnGroup(['物种详情']);
          break;
        case 'business':
          $navBtnGroup(['业务台账']);
          break;
      }
    } else if (routerLevel == 4 && type == 'animal') {
      switch (type) {
        case 'animal':
          $navBtnGroup(["\u4E1A\u52A1\u5386\u53F2", "\u4F01\u4E1A\u4E3B\u9875"]);
          break;
      }
    }
  }, [routerLevel, type]);

  // 路由方法
  var routerManager = function routerManager(data) {
    if (routerLevel == 2) {
      console.log('这里是第二层，是业务登记的首页进来的', data, type);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorage({
        key: 'animalObj',
        data: data
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
        url: "/pages/detail/detail?routerLevel=3&type=".concat(type)
      });
    } else if (routerLevel == 3) {
      if (listBtnChoose === '相关业务') {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: '/pages/detail/detail?routerLevel=4&type=business'
        });
      } else if (listBtnChoose == '物种列表') {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
          url: '/pages/list/list?routerLevel=4&type=animal'
        });
      } else {
        switch (type) {
          case 'animal':
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
              url: '/pages/list/list?routerLevel=4&type=animal'
            });
            break;
          case 'business':
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
              url: '/pages/detail/detail?routerLevel=4&type=business'
            });
        }
        if (routerLevel == 4) {
          switch (type) {
            case 'animal':
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
                url: '/pages/detail/detail?routerLevel=5&type=animal'
              });
              break;
          }
        }
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_HeaderNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
      navGroup: navBtnGroup
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "page-list-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
        onClick: function onClick() {
          console.log(resObj);
        },
        children: "resObj"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
        listSource: resObj,
        listNavBtn: [],
        listType: params.listType,
        routerManager: routerManager
      })]
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (ListPage);

/***/ }),

/***/ "./src/pages/list/list.jsx":
/*!*********************************!*\
  !*** ./src/pages/list/list.jsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_list_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./list.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/list/list.jsx");


var config = {"navigationBarTitleText":"首页","navigationStyle":"custom"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_list_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/list/list', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/list/list.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=list.js.map