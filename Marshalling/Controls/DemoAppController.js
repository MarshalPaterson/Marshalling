///<reference path="../Marshalling.ts"/>
///<reference path="../Commands/GetCommand.ts"/>
///<reference path="../Commands/PostCommand.ts"/>
var DemoAppController = (function () {
    function DemoAppController() {
    }
    DemoAppController.init = function () {
        this.customMarshalling.addMarshallingCommand(this.EVENT_CUSTOM, GetCommand);
        this.customMarshalling.addMarshallingCommand(this.ANOTHER_EVENT_CUSTOM, PostCommand);
    };
    DemoAppController.customMarshalling = Marshalling.Marshall.getInstance();
    DemoAppController.EVENT_CUSTOM = "evetnCustom";
    DemoAppController.ANOTHER_EVENT_CUSTOM = "anotherEventCustom";
    return DemoAppController;
}());
//# sourceMappingURL=DemoAppController.js.map