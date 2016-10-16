var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../Marshalling.ts"/>
///<reference path="../Controls/DemoAppController.ts"/>
var GetEvent = (function (_super) {
    __extends(GetEvent, _super);
    function GetEvent(type, data) {
        if (data === void 0) { data = null; }
        _super.call(this);
        this.type = type;
        this.data = data;
    }
    return GetEvent;
}(Marshalling.MarshallEvent));
//# sourceMappingURL=GetEvent.js.map