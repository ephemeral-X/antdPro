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
var Footer_1 = require("@/components/Footer");
var api_1 = require("@/services/ant-design-pro/api");
var login_1 = require("@/services/ant-design-pro/login");
var icons_1 = require("@ant-design/icons");
var pro_components_1 = require("@ant-design/pro-components");
var antd_1 = require("antd");
var react_1 = require("react");
var umi_1 = require("umi");
var index_less_1 = require("./index.less");
var LoginMessage = function (_a) {
    var content = _a.content;
    return (react_1["default"].createElement(antd_1.Alert, { style: {
            marginBottom: 24
        }, message: content, type: "error", showIcon: true }));
};
var Login = function () {
    var _a = react_1.useState({}), userLoginState = _a[0], setUserLoginState = _a[1];
    var _b = react_1.useState('account'), type = _b[0], setType = _b[1];
    var _c = umi_1.useModel('@@initialState'), initialState = _c.initialState, setInitialState = _c.setInitialState;
    var intl = umi_1.useIntl();
    var fetchUserInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var userInfo;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, ((_a = initialState === null || initialState === void 0 ? void 0 : initialState.fetchUserInfo) === null || _a === void 0 ? void 0 : _a.call(initialState))];
                case 1:
                    userInfo = _b.sent();
                    if (!userInfo) return [3 /*break*/, 3];
                    return [4 /*yield*/, setInitialState(function (s) { return (__assign(__assign({}, s), { currentUser: userInfo })); })];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var msg, defaultLoginSuccessMessage, query, redirect, error_1, defaultLoginFailureMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, api_1.login(__assign(__assign({}, values), { type: type }))];
                case 1:
                    msg = _a.sent();
                    if (!(msg.status === 'ok')) return [3 /*break*/, 3];
                    defaultLoginSuccessMessage = intl.formatMessage({
                        id: 'pages.login.success',
                        defaultMessage: '登录成功！'
                    });
                    antd_1.message.success(defaultLoginSuccessMessage);
                    return [4 /*yield*/, fetchUserInfo()];
                case 2:
                    _a.sent();
                    /** 此方法会跳转到 redirect 参数所在的位置 */
                    if (!umi_1.history)
                        return [2 /*return*/];
                    query = umi_1.history.location.query;
                    redirect = query.redirect;
                    umi_1.history.push(redirect || '/');
                    return [2 /*return*/];
                case 3:
                    // 如果失败去设置用户错误信息
                    setUserLoginState(msg);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    defaultLoginFailureMessage = intl.formatMessage({
                        id: 'pages.login.failure',
                        defaultMessage: '登录失败，请重试！'
                    });
                    antd_1.message.error(defaultLoginFailureMessage);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var status = userLoginState.status, loginType = userLoginState.type;
    return (react_1["default"].createElement("div", { className: index_less_1["default"].container },
        react_1["default"].createElement("div", { className: index_less_1["default"].lang, "data-lang": true }, umi_1.SelectLang && react_1["default"].createElement(umi_1.SelectLang, null)),
        react_1["default"].createElement("div", { className: index_less_1["default"].content },
            react_1["default"].createElement(pro_components_1.LoginForm, { logo: react_1["default"].createElement("img", { alt: "logo", src: "/logo.svg" }), title: "Ant Design", subTitle: intl.formatMessage({ id: 'pages.layouts.userLayout.title' }), initialValues: {
                    autoLogin: true
                }, onFinish: function (values) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, handleSubmit(values)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); } },
                react_1["default"].createElement(antd_1.Tabs, { activeKey: type, onChange: setType },
                    react_1["default"].createElement(antd_1.Tabs.TabPane, { key: "account", tab: intl.formatMessage({
                            id: 'pages.login.accountLogin.tab',
                            defaultMessage: '账户密码登录'
                        }) }),
                    react_1["default"].createElement(antd_1.Tabs.TabPane, { key: "mobile", tab: intl.formatMessage({
                            id: 'pages.login.phoneLogin.tab',
                            defaultMessage: '手机号登录'
                        }) })),
                status === 'error' && loginType === 'account' && (react_1["default"].createElement(LoginMessage, { content: intl.formatMessage({
                        id: 'pages.login.accountLogin.errorMessage',
                        defaultMessage: '账户或密码错误(admin/ant.design)'
                    }) })),
                type === 'account' && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(pro_components_1.ProFormText, { name: "username", fieldProps: {
                            size: 'large',
                            prefix: react_1["default"].createElement(icons_1.UserOutlined, { className: index_less_1["default"].prefixIcon })
                        }, placeholder: intl.formatMessage({
                            id: 'pages.login.username.placeholder',
                            defaultMessage: '用户名: admin or user'
                        }), rules: [
                            {
                                required: true,
                                message: (react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.username.required", defaultMessage: "\u8BF7\u8F93\u5165\u7528\u6237\u540D!" }))
                            },
                        ] }),
                    react_1["default"].createElement(pro_components_1.ProFormText.Password, { name: "password", fieldProps: {
                            size: 'large',
                            prefix: react_1["default"].createElement(icons_1.LockOutlined, { className: index_less_1["default"].prefixIcon })
                        }, placeholder: intl.formatMessage({
                            id: 'pages.login.password.placeholder',
                            defaultMessage: '密码: ant.design'
                        }), rules: [
                            {
                                required: true,
                                message: (react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.password.required", defaultMessage: "\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01" }))
                            },
                        ] }))),
                status === 'error' && loginType === 'mobile' && react_1["default"].createElement(LoginMessage, { content: "\u9A8C\u8BC1\u7801\u9519\u8BEF" }),
                type === 'mobile' && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(pro_components_1.ProFormText, { fieldProps: {
                            size: 'large',
                            prefix: react_1["default"].createElement(icons_1.MobileOutlined, { className: index_less_1["default"].prefixIcon })
                        }, name: "mobile", placeholder: intl.formatMessage({
                            id: 'pages.login.phoneNumber.placeholder',
                            defaultMessage: '手机号'
                        }), rules: [
                            {
                                required: true,
                                message: (react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.phoneNumber.required", defaultMessage: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01" }))
                            },
                            {
                                pattern: /^1\d{10}$/,
                                message: (react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.phoneNumber.invalid", defaultMessage: "\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01" }))
                            },
                        ] }),
                    react_1["default"].createElement(pro_components_1.ProFormCaptcha, { fieldProps: {
                            size: 'large',
                            prefix: react_1["default"].createElement(icons_1.LockOutlined, { className: index_less_1["default"].prefixIcon })
                        }, captchaProps: {
                            size: 'large'
                        }, placeholder: intl.formatMessage({
                            id: 'pages.login.captcha.placeholder',
                            defaultMessage: '请输入验证码'
                        }), captchaTextRender: function (timing, count) {
                            if (timing) {
                                return count + " " + intl.formatMessage({
                                    id: 'pages.getCaptchaSecondText',
                                    defaultMessage: '获取验证码'
                                });
                            }
                            return intl.formatMessage({
                                id: 'pages.login.phoneLogin.getVerificationCode',
                                defaultMessage: '获取验证码'
                            });
                        }, name: "captcha", rules: [
                            {
                                required: true,
                                message: (react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.captcha.required", defaultMessage: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01" }))
                            },
                        ], onGetCaptcha: function (phone) { return __awaiter(void 0, void 0, void 0, function () {
                            var result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, login_1.getFakeCaptcha({
                                            phone: phone
                                        })];
                                    case 1:
                                        result = _a.sent();
                                        if (result === false) {
                                            return [2 /*return*/];
                                        }
                                        antd_1.message.success('获取验证码成功！验证码为：1234');
                                        return [2 /*return*/];
                                }
                            });
                        }); } }))),
                react_1["default"].createElement("div", { style: {
                        marginBottom: 24
                    } },
                    react_1["default"].createElement(pro_components_1.ProFormCheckbox, { noStyle: true, name: "autoLogin" },
                        react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.rememberMe", defaultMessage: "\u81EA\u52A8\u767B\u5F55" })),
                    react_1["default"].createElement("a", { style: {
                            float: 'right'
                        } },
                        react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.forgotPassword", defaultMessage: "\u5FD8\u8BB0\u5BC6\u7801" }))))),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = Login;
