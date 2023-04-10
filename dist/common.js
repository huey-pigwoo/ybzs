"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/Card/index.jsx":
/*!***************************************!*\
  !*** ./src/components/Card/index.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tag */ "./src/components/Tag/index.jsx");
/* harmony import */ var _template_business__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template/business */ "./src/components/Card/template/business.jsx");
/* harmony import */ var _template_animal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template/animal */ "./src/components/Card/template/animal.jsx");
/* harmony import */ var _template_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template/company */ "./src/components/Card/template/company.jsx");
/* harmony import */ var static_img_img1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! static/img/img1.jpg */ "./src/static/img/img1.jpg");
/* harmony import */ var utils_selectCardTemp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/selectCardTemp */ "./src/utils/selectCardTemp.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








// eslint-disable-next-line import/first

// eslint-disable-next-line import/first


/**
 * type： 卡片类型，企业(company)、物种(animal)、业务(business)
 * bgColor: 卡片背景颜色
 * 
 */


var Card = function Card(_ref) {
  var _listSource$f;
  var type = _ref.type,
    bgColor = _ref.bgColor,
    routerManager = _ref.routerManager,
    listSource = _ref.listSource;
  var tempMap = {
    BusinessTemp: _template_business__WEBPACK_IMPORTED_MODULE_2__["default"],
    AnimalTemp: _template_animal__WEBPACK_IMPORTED_MODULE_3__["default"],
    CompanyTemp: _template_company__WEBPACK_IMPORTED_MODULE_4__["default"]
  };
  // eslint-disable-next-line no-unused-vars
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('animal'),
    _useState2 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    listType = _useState2[0],
    $listType = _useState2[1];
  // const listSource = {
  //   f1: '标题标题标题标题标题标题',
  //   f2: '描述描述描述描述描述',
  //   pic: '',
  //   f3: [
  //     { value: '正常', key: 'NORMAL' },
  //     { value: '驯养繁殖', key: 'WARNING' },
  //   ],
  //   f4: [
  //     { value: '动物 2 种 / 12 只' },
  //     { value: '2' },
  //   ],
  // };

  var Container = tempMap[(0,utils_selectCardTemp__WEBPACK_IMPORTED_MODULE_8__.selectCardTemp)(type || listType)];
  var cardClick = function cardClick() {
    routerManager && routerManager(listSource);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "card-container",
    onClick: cardClick,
    style: bgColor && {
      backgroundColor: bgColor
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
      className: "card-image",
      src: (listSource === null || listSource === void 0 ? void 0 : listSource.pic) || static_img_img1_jpg__WEBPACK_IMPORTED_MODULE_5__
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "text-area",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "f1",
        children: listSource === null || listSource === void 0 ? void 0 : listSource.f1
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "f2",
        children: listSource === null || listSource === void 0 ? void 0 : listSource.f2
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "tag-area",
        children: listSource === null || listSource === void 0 ? void 0 : (_listSource$f = listSource.f3) === null || _listSource$f === void 0 ? void 0 : _listSource$f.map(function (_ref2, index) {
          var value = _ref2.value,
            key = _ref2.key;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_1__["default"], {
            tagValue: value,
            type: key
          }, index);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Container, {
        dataSouce: listSource === null || listSource === void 0 ? void 0 : listSource.f4
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/Card/template/animal.jsx":
/*!*************************************************!*\
  !*** ./src/components/Card/template/animal.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



var BusinessTemp = function BusinessTemp() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: ['temp-container', 'animalTemp'],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "tempItem",
      children: "\u52A8\u7269 1234 \u53EA"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "tempItem",
      children: "\u4F01\u4E1A 1234 \u5BB6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "tempItem",
      children: "\u4E1A\u52A1 1234 \u4EF6"
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (BusinessTemp);

/***/ }),

/***/ "./src/components/Card/template/business.jsx":
/*!***************************************************!*\
  !*** ./src/components/Card/template/business.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



var BusinessTemp = function BusinessTemp() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: ['temp-container', 'businessTemp'],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: ['tempItem', 'companyName'],
      children: "\u5355\u4F4D\u540D\u5B57\u628A\u5494\u5427\u5494\u5427\u5494\u5427\u5494\u5427\u5494\u5427\u5496"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "tempItem",
      children: "\u65E5\u671F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      className: "tempItem",
      children: "\u4E1A\u52A1 1234 \u4EF6"
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (BusinessTemp);

/***/ }),

/***/ "./src/components/Card/template/company.jsx":
/*!**************************************************!*\
  !*** ./src/components/Card/template/company.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





var CompanyTemp = function CompanyTemp(_ref) {
  var dataSouce = _ref.dataSouce;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: ['temp-container', 'companyTemp'],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      children: dataSouce[0].value
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      children: ["\u4F01\u4E1A ", dataSouce[1].value, " \u4EF6"]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (CompanyTemp);

/***/ }),

/***/ "./src/components/HeaderNav/index.jsx":
/*!********************************************!*\
  !*** ./src/components/HeaderNav/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






// chevron-left


var HeaderNav = function HeaderNav(_ref) {
  var navGroup = _ref.navGroup,
    isIndexPage = _ref.isIndexPage;
  // 导航栏高度
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    navHeight = _useState2[0],
    setNavHeight = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
    navBtnHeight = _useState4[0],
    setNavBtnHeight = _useState4[1];
  var _getCurrentInstance = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)(),
    router = _getCurrentInstance.router;
  var goBackPage = function goBackPage() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack({
      delta: 1
    });
  };

  //获取每个设备的导航栏高度
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getNavHeight();
  }, []);
  var getNavHeight = function getNavHeight() {
    var menuButtonObject = wx.getMenuButtonBoundingClientRect(); //获取胶囊对象
    var sysinfo = wx.getSystemInfoSync(); // 获取设备系统对象
    var statusBarHeight = sysinfo.statusBarHeight; // 获取状态栏高度
    var menuBottonHeight = menuButtonObject.height; //获取胶囊顶部高度
    var menuBottonTop = menuButtonObject.top; // 获取胶囊距离顶部的高度
    var navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2; //计算nav导航栏的高度（上图蓝色线段的长度）
    if (isIndexPage) {
      setNavHeight(menuBottonTop - 10);
      setNavBtnHeight(null);
    } else {
      setNavHeight(navBarHeight);
      setNavBtnHeight(menuBottonTop);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "headerNav-container",
    style: {
      height: navHeight,
      paddingTop: navBtnHeight
    },
    children: [!isIndexPage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_2__.AtIcon, {
      value: "chevron-left",
      size: "30",
      onClick: goBackPage
    }), navGroup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "header-nav-area",
      style: {
        fontSize: '16px'
      },
      children: navGroup === null || navGroup === void 0 ? void 0 : navGroup.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: ['header-nav-item', 'active'],
          children: item
        });
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderNav);

/***/ }),

/***/ "./src/components/List/index.jsx":
/*!***************************************!*\
  !*** ./src/components/List/index.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Card */ "./src/components/Card/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





// eslint-disable-next-line import/first



var List = function List(_ref) {
  var listSource = _ref.listSource,
    getListName = _ref.getListName,
    listType = _ref.listType,
    handleListNav = _ref.handleListNav,
    routerManager = _ref.routerManager,
    chooseListBtn = _ref.chooseListBtn,
    listNavBtn = _ref.listNavBtn;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    listNavStatus = _useState2[0],
    setListBavStatus = _useState2[1];
  // 列表名
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      name: "企业列表"
    }, {
      id: 2,
      name: "物种列表"
    }, {
      id: 3,
      name: "业务列表"
    }]),
    _useState4 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    navList = _useState4[0],
    $navList = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState6 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
    navIndex = _useState6[0],
    $navIndex = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
    listName = _useState8[0],
    $listName = _useState8[1];
  var listNameMap = {
    '企业': 'company',
    '物种': 'animal',
    '业务': 'business'
  };

  // 选择列表类型
  var chooseItem = function chooseItem(item) {
    {
      chooseListBtn && chooseListBtn(item.name);
    }
    $navIndex(item.id);
    $listName(item.name);
    getListName && getListName(item.name);
    handleListNav && handleListNav(item.name);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (listNavBtn) {
      $navList(listNavBtn);
      setListBavStatus(!listNavStatus);
    }
    $listName(navList[0].name);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    className: "list-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "nav-area",
      children: navList === null || navList === void 0 ? void 0 : navList.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: ['nav-item', item.id == navIndex ? 'active' : ''],
          onClick: function onClick() {
            return chooseItem(item);
          },
          style: {
            flexGrow: listNavStatus ? 0 : ''
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
            className: "nav-item-text",
            children: item.name
          })
        }, index);
      })
    }), listSource && (listSource === null || listSource === void 0 ? void 0 : listSource.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: ['item-area', 'active'],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(components_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
          type: listType || listNameMap[listName],
          routerManager: routerManager,
          listSource: item
        })
      }, index);
    }))]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/components/Tag/index.jsx":
/*!**************************************!*\
  !*** ./src/components/Tag/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




var Tag = function Tag(_ref) {
  var _ref$tagValue = _ref.tagValue,
    tagValue = _ref$tagValue === void 0 ? '' : _ref$tagValue,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? '' : _ref$type;
  var typeStyle = type || 'NORMAL';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
    className: ['tag-container', typeStyle],
    children: tagValue
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./src/utils/selectCardTemp.jsx":
/*!**************************************!*\
  !*** ./src/utils/selectCardTemp.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCardTemp": function() { return /* binding */ selectCardTemp; }
/* harmony export */ });
var selectCardTemp = function selectCardTemp(type) {
  // 获取卡片底部的样式模版
  switch (type) {
    case 'business':
      return 'BusinessTemp';
    case 'animal':
      return 'AnimalTemp';
    case 'company':
      return 'CompanyTemp';
    default:
      return;
  }
};

/***/ }),

/***/ "./src/static/img/img1.jpg":
/*!*********************************!*\
  !*** ./src/static/img/img1.jpg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/img1.jpg";

/***/ })

}]);
//# sourceMappingURL=common.js.map