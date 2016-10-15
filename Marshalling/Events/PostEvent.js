var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
///<reference path="../Marshalling.ts"/>
///<reference path="../Controls/DemoAppController.ts"/>
var AnotherGetEvent = (function (_super) {
    __extends(AnotherGetEvent, _super);
    function AnotherGetEvent(data) {
        _super.call(this, DemoAppController.ANOTHER_EVENT_CUSTOM);
        this.data = data;
    }
    return AnotherGetEvent;
}(Marshalling.MarshallEvent));
//# sourceMappingURL=PostEvent.js.map