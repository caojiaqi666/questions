var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var Arrange = /** @class */ (function () {
    function Arrange(value) {
        this.queue = [];
        this.value = value;
    }
    Arrange.prototype.wait = function (delay) {
        // push 一个函数，返回 Promise 的一个定时器，使用 Promise 可以保证执行顺序
        this.queue.push(function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve("delay " + delay);
                }, delay);
            });
        });
        // 返回实例对象
        return this;
    };
    Arrange.prototype.do = function (action) {
        // push 一个函数，返回 Promise 的值
        this.queue.push(function () {
            return new Promise(function (resolve) { return resolve(action); });
        });
        // 返回实例对象
        return this;
    };
    /**
     * 同步调用，利用 async-await 进行等待
     */
    Arrange.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, fn, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.queue;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        fn = _a[_i];
                        return [4 /*yield*/, fn()];
                    case 2:
                        res = _b.sent();
                        console.log(res);
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log(this.value);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 异步调用，利用 Promise.then 进行递归等待，保证顺序执行
     */
    Arrange.prototype.syncExecute = function () {
        var _this = this;
        if (this.queue.length) {
            // 推出数组第一个开始执行
            this.queue.shift()().then(function (res) {
                console.log(res);
                // 递归执行下一个指令
                _this.syncExecute();
            });
        }
        else {
            console.log(this.value);
        }
    };
    return Arrange;
}());
function arrange(value) {
    return new Arrange(value);
}
arrange("William")
    .wait(1000)
    .do("commit")
    .do("push2")
    .wait(1000)
    .do("push3")
    .wait(1000)
    .do("push4")
    .wait(1000)
    .do("push5")
    .execute();
// .syncExecute()
// 结果
// delay 1000
// commit
// push2
// delay 1000
// push3
// delay 1000
// push4
// delay 1000
// push5
// William
