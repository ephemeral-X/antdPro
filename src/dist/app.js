"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.layout = exports.getInitialState = exports.initialStateConfig = void 0;
var Footer_1 = require("@/components/Footer");
var RightContent_1 = require("@/components/RightContent");
var pro_components_1 = require("@ant-design/pro-components");
var umi_1 = require("umi");
var defaultSettings_1 = require("../config/defaultSettings");
var api_1 = require("./services/ant-design-pro/api");
var loginPath = '/user/login';
/** 获取用户信息比较慢的时候会展示一个 loading */
exports.initialStateConfig = {
    loading: React.createElement(pro_components_1.PageLoading, null)
};
/**
 * 全局初始数据
 * 返回值会作为全局共享的数据。
 * Layout 插件、Access 插件以及用户都可以通过 useModel('@@initialState') 直接获取到这份数据
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
function getInitialState() {
    return __awaiter(this, void 0, Promise, function () {
        var fetchUserInfo, currentUser;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fetchUserInfo = function () { return __awaiter(_this, void 0, void 0, function () {
                        var msg, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, api_1.currentUser()];
                                case 1:
                                    msg = _a.sent();
                                    return [2 /*return*/, msg.data];
                                case 2:
                                    error_1 = _a.sent();
                                    umi_1.history.push(loginPath);
                                    return [2 /*return*/, {}];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); };
                    // 如果是登录页面返回
                    if (umi_1.history.location.pathname === loginPath) {
                        return [2 /*return*/, {
                                fetchUserInfo: fetchUserInfo,
                                settings: defaultSettings_1["default"]
                            }];
                    }
                    return [4 /*yield*/, fetchUserInfo()];
                case 1:
                    currentUser = _a.sent();
                    return [2 /*return*/, {
                            fetchUserInfo: fetchUserInfo,
                            currentUser: currentUser,
                            settings: defaultSettings_1["default"]
                        }];
            }
        });
    });
}
exports.getInitialState = getInitialState;
/**
 * ProLayout 支持的api
 * @see  https://procomponents.ant.design/components/layout/#prolayout
 */
exports.layout = function (_a) {
    var _b;
    var initialState = _a.initialState, setInitialState = _a.setInitialState;
    return __assign({ 
        // 自定义头右部的 render 方法
        rightContentRender: function () { return React.createElement(RightContent_1["default"], null); }, disableContentMargin: false, waterMarkProps: {
            content: (_b = initialState === null || initialState === void 0 ? void 0 : initialState.currentUser) === null || _b === void 0 ? void 0 : _b.name
        }, 
        // 自定义页脚的 render 方法
        footerRender: function () { return React.createElement(Footer_1["default"], null); }, 
        // 页面切换时触发
        onPageChange: function () {
            var location = umi_1.history.location;
            // 如果没有登录，重定向到 login
            if (!(initialState === null || initialState === void 0 ? void 0 : initialState.currentUser) && location.pathname !== loginPath) {
                umi_1.history.push(loginPath);
            }
        }, menuHeaderRender: undefined, 
        /**
         * SettingDrawer 组件
         * @see https://procomponents.ant.design/components/layout#settingdrawer
         */
        // 增加一个loading状态
        childrenRender: function (children, props) {
            var _a, _b;
            return (React.createElement(React.Fragment, null,
                children,
                !((_b = (_a = props.location) === null || _a === void 0 ? void 0 : _a.pathname) === null || _b === void 0 ? void 0 : _b.includes('/login')) && (React.createElement(pro_components_1.SettingDrawer, { disableUrlParams: true, enableDarkTheme: true, settings: initialState === null || initialState === void 0 ? void 0 : initialState.settings, 
                    // Settings 发生更改事件
                    onSettingChange: function (settings) {
                        setInitialState(function (preInitialState) { return (__assign(__assign({}, preInitialState), { settings: settings })); });
                    } }))));
        } }, initialState === null || initialState === void 0 ? void 0 : initialState.settings);
};
