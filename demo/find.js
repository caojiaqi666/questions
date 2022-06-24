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
var Find = /** @class */ (function () {
    function Find(value) {
        this.queue = [];
        this.filterData = value || [];
    }
    Find.prototype.where = function (condition) {
        var _this = this;
        this.queue.push(function () {
            return new Promise(function (resolve) {
                Object.keys(condition).forEach(function (key) {
                    _this.filterData = _this.filterData.filter(function (item) {
                        return condition[key].test(item[key]);
                    });
                });
                resolve(_this.filterData);
            });
        });
        return this;
    };
    Find.prototype.orderBy = function (key, desc) {
        var _this = this;
        this.queue.push(function () {
            return new Promise(function (resolve) {
                _this.filterData.sort(function (a, b) {
                    return desc ? b[key] - a[key] : a[key] - b[key];
                });
                resolve(_this.filterData);
            });
        });
        return this;
    };
    Find.prototype.groupBy = function (key) {
        var _this = this;
        this.queue.push(function () {
            return new Promise(function (resolve) {
                var obj = {};
                var arr = [];
                _this.filterData.forEach(function (item) {
                    if (obj[item[key]]) {
                        obj[item[key]] = obj[item[key]].concat([item]);
                    }
                    else {
                        obj[item[key]] = [item];
                    }
                });
                for (var k in obj) {
                    arr.push(obj[k]);
                    _this.filterData = arr;
                }
                resolve(_this.filterData);
            });
        });
        return this;
    };
    Find.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, _a, fn;
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
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: 
                    // console.log("res: ", res);
                    return [2 /*return*/, res];
                }
            });
        });
    };
    return Find;
}());
var user = [
    { name: "愿意", pin: "ayuanyi", age: 19, sex: "男" },
    { name: "安姜", pin: "anjiang", age: 8, sex: "男" },
    { name: "钟黎", pin: "azhongli", age: 20, sex: "女" },
    { name: "夏茂", pin: "xiamao", age: 1299, sex: "女" },
    { name: "扶嗨", pin: "afuhai", age: -77, sex: "男" },
    { name: "如意", pin: "ruyi", age: 88, sex: "女" },
];
new Find(user)
    .where({
    age: /\d$/,
})
    .orderBy("age", false)
    .groupBy("sex")
    .execute().then(function (res) { console.log(res); });
