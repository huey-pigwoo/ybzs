"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/about/about"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/about/about.jsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/about/about.jsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/List */ "./src/components/List/index.jsx");
/* harmony import */ var components_HeaderNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/HeaderNav */ "./src/components/HeaderNav/index.jsx");
/* harmony import */ var components_AddressPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AddressPicker */ "./src/components/AddressPicker/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





// import api from '../services/api'



// eslint-disable-next-line import/first

// eslint-disable-next-line import/first

// eslint-disable-next-line import/first




function About() {
  var selectOption = ['企业名称', '人员姓名', '动物名称', '业务类型', '保护级别'];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('企业'),
    _useState2 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
    listName = _useState2[0],
    $listName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('DOMESTICATION_BREED'),
    _useState4 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState3, 2),
    filterOption = _useState4[0],
    $filterOption = _useState4[1];
  // 筛选项的条件
  // eslint-disable-next-line no-unused-vars
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState6 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState5, 2),
    filter = _useState6[0],
    $filter = _useState6[1];
  // 描述文字对象
  // eslint-disable-next-line no-unused-vars
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
    _useState8 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState7, 2),
    textArr = _useState8[0],
    $textArr = _useState8[1];
  //  筛选项中的选择框
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(selectOption[0]),
    _useState10 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState9, 2),
    multiIndex = _useState10[0],
    $multiIndex = _useState10[1];
  //  筛选框中的 input 状态
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState12 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState11, 2),
    selectStatus = _useState12[0],
    $selectStatus = _useState12[1];
  // eslint-disable-next-line no-unused-vars
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
      id: 3,
      pic: '',
      f1: '成都第一家公司',
      f2: '成都是打四代是大红色大上课打卡时间到',
      f3: [{
        value: '正常',
        key: 'NORMAL'
      }, {
        value: '驯养繁殖',
        key: 'NORMAL'
      }],
      f4: [{
        value: '动物 2 种 / 12 只'
      }, {
        value: 2
      }]
    }]),
    _useState14 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState13, 2),
    resObj = _useState14[0],
    $resObj = _useState14[1];
  var navBtnGroup = ["".concat(listName, "\u53F0\u8D26"), "".concat(listName, "\u603B\u89C8")];

  // 获取列表名
  var getListName = function getListName(name) {
    if (name === '物种列表') $listName('物种');else if (name === '企业列表') $listName('企业');else if (name === '业务列表') $listName('业务');
  };
  var filterObject = function filterObject(item) {
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
    $filterOption(item);
  };
  var ChangeSelect = function ChangeSelect(e) {
    $multiIndex(selectOption[e.detail.value]);
  };
  var changeStatus = function changeStatus() {
    $selectStatus(!selectStatus);
  };
  var routerMap = {
    '企业': '/pages/index/index?routerLevel=3&type=company',
    '物种': '/pages/list/list?routerLevel=3&type=animal',
    '业务': '/pages/detail/detail?routerLevel=3&type=business'
  };

  // 管理列表内的卡片跳转地址
  var routerManager = function routerManager() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: routerMap[listName]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_HeaderNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navGroup: navBtnGroup
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "page-about-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "about-filter-nav-area",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "filter-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_AddressPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: ['inputArea', !selectStatus ? 'active' : ''],
            children: [selectStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtIcon, {
                value: "search",
                size: "20",
                onClick: changeStatus
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                className: "search-text",
                style: {
                  margin: '0 10rpx'
                },
                children: "\u67E5\u8BE2"
              })]
            }), !selectStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_0__.AtIcon, {
                value: "search",
                size: "20",
                onClick: changeStatus
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Picker, {
                className: "selectInput",
                mode: "selector",
                range: selectOption,
                onChange: ChangeSelect,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                  className: "picker",
                  children: multiIndex
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Input, {
                className: "filter-input",
                placeholder: "\u70B9\u51FB\u8F93\u5165\uFF08\u5BF9\u5E94\uFF09\u540D\u79F0"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "switchArea",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: ['about-filter-nav-item', filterOption == 'DOMESTICATION_BREED' ? 'filter-nav-active' : ''],
            onClick: function onClick() {
              return filterObject(['DOMESTICATION_BREED']);
            },
            children: "\u9A6F\u517B\u7E41\u6B96"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: ['about-filter-nav-item', filterOption == 'CONTAINMENT_ASSISTANCE' ? 'filter-nav-active' : ''],
            onClick: function onClick() {
              return filterObject(['CONTAINMENT_ASSISTANCE']);
            },
            children: "\u6536\u5BB9\u6551\u52A9"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "text-area",
        style: {
          margin: '10px'
        },
        children: listName == '企业' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          children: ["\u5728", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfSubRegions
          }), "\u4E2A\u533A\u53BF\u5185\u5206\u5E03\u6709", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfBusinessPieces
          }), "\u5BB6\u9A6F\u517B\u7E41\u6B96\u4F01\u4E1A\u3002\u603B\u9762\u79EF\u4E3A", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfAnimalSpecies
          }), "\u4E07\u4EA9\uFF0C\u603B\u4EBA\u6570\u4E3A", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfTotalPeople
          }), "\u4EBA\u3002\u5171\u5F00\u5C55", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfBusinessTypes
          }), "\u7C7B", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfAnimalSpecies
          }), "\u4EF6\u4E1A\u52A1\uFF0C\u6D89\u53CA\u52A8\u7269", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfEnterprises
          }), "\u79CD\u5171", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfTotalAnimal
          }), "\u4E07\u53EA\u3002"]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          children: ["\u5728", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfSubRegions
          }), "\u4E2A\u533A\u53BF\u7684", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfBusinessPieces
          }), "\u5BB6\u9A6F\u517B\u7E41\u6B96\u4F01\u4E1A\u5BF9", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfEnterprises
          }), "\u79CD\u52A8\u7269\u5171", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfAnimalSpecies
          }), "\u53EA\u5F00\u5C55", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfBusinessTypes
          }), "\u7C7B", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {}), "\u4EF6\u9A6F\u517B\u7E41\u6B96\u4E1A\u52A1\u3002\u5176\u4E2D\u4E00\u7EA7", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfBusinessPieces
          }), "\u53EA\uFF0C\u4E8C\u7EA7", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfTotalAnimal
          }), "\u53EA\uFF0C\u4E09\u7EA7\u6709", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfTotalAnimal
          }), "\u53EA\uFF0C\u5916\u6765", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            children: textArr === null || textArr === void 0 ? void 0 : textArr.numberOfBusinessPieces
          }), "\u53EA\u3002"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
        listSource: resObj,
        getListName: getListName,
        routerManager: routerManager
      })]
    })]
  });
}
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/AddressPicker/index.jsx":
/*!************************************************!*\
  !*** ./src/components/AddressPicker/index.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);








var AddressPicker = function AddressPicker() {
  var datahaha = [{
    code: 5101,
    name: '成都市',
    selected: 0,
    parentcode: 51,
    value: null,
    children: [{
      code: 510116,
      name: '双流区',
      selected: 0,
      parentcode: 5101,
      value: null,
      children: null
    }, {
      code: 510184,
      name: '邛州',
      selected: 0,
      parentcode: 5101,
      value: null,
      children: null
    }]
  }, {
    code: 5106,
    name: '德阳市',
    selected: 0,
    parentcode: 51,
    value: null,
    children: [{
      code: 510623,
      name: '中江县',
      selected: 0,
      parentcode: 5106,
      value: null,
      children: null
    }]
  }];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState2 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    firstLevel = _useState2[0],
    setFirstLevel = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState4 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
    secLevel = _useState4[0],
    setSecLevel = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState6 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
    multiIndex = _useState6[0],
    setMultiIndex = _useState6[1]; // multiIndex: [[第一级的 index]，[第二级的 index]]
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState8 = (0,_Users_wuqianlong_Desktop_ybzsTaro_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
    chooseAddress = _useState8[0],
    setChooseAddress = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (multiIndex.length > 0) {
      var firstIndex = multiIndex[0];
      var secOptions = datahaha[firstIndex].children.map(function (item) {
        return item.name;
      });
      setSecLevel(secOptions);
      setChooseAddress(datahaha[multiIndex[0]].children[multiIndex[1]]);
      setFirstLevel(datahaha.map(function (item) {
        return item.name;
      }));
    }
  }, [multiIndex]);
  var mockData = [datahaha.map(function (item) {
    return item.name;
  }), secLevel];
  var handleColumnChange = function handleColumnChange(e) {
    var _e$detail = e.detail,
      column = _e$detail.column,
      value = _e$detail.value;
    if (column === 0) {
      setMultiIndex([value, 0]);
    }
  };
  var handleChange = function handleChange(e) {
    setMultiIndex(e.detail.value);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "addressPick-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Picker, {
      mode: "multiSelector",
      value: multiIndex,
      range: mockData,
      onChange: handleChange,
      onColumnChange: handleColumnChange,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        children: multiIndex.length === 0 ? '请选择' : "".concat(firstLevel[multiIndex[0]], " , ").concat(secLevel[multiIndex[1]])
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_2__.AtIcon, {
      value: "chevron-down",
      size: "10"
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (AddressPicker);

/***/ }),

/***/ "./src/pages/about/about.jsx":
/*!***********************************!*\
  !*** ./src/pages/about/about.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_about_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./about.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/about/about.jsx");


var config = {"navigationStyle":"custom"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_about_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/about/about', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/about/about.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=about.js.map