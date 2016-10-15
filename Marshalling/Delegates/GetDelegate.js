var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../Marshalling.ts"/>
///<reference path="../Commands/GetCommand.ts"/>
var GetDelegate = (function (_super) {
    __extends(GetDelegate, _super);
    function GetDelegate() {
        _super.apply(this, arguments);
    }
    GetDelegate.prototype.GetCall = function (responder, data) {
        this.service = Marshalling.MarshallService.getInstance().get("GetService");
        this.responder = responder;
        Marshalling.MarshallCalling.getInstance().delegate(this.service, this.responder, "GET", data);
    };
    GetDelegate.prototype.PostCall = function (responder, data) {
        this.service = Marshalling.MarshallService.getInstance().get("PostService");
        this.responder = responder;
        Marshalling.MarshallCalling.getInstance().delegate(this.service, this.responder, "POST", data);
    };
    return GetDelegate;
}(Marshalling.MarshallDelegate));
//# sourceMappingURL=GetDelegate.js.map