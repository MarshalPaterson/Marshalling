///<reference path="Marshalling/Controls/DemoAppController.ts"/>
///<reference path="Marshalling/Service/DemoAppService.ts"/>
var appInit = function () {
    DemoAppController.init();
    DemoAppService.init();
};
function getCustomCall() {
    var customDispatcher = Marshalling.MarshallEventDispatcher.getInstance();
    // var customEvent = new Marshalling.MarshallEvent();
    // customDispatcher.dispatchEvent(customEvent.dispatch(DemoAppController.GET_LIST, "Just a event with txt"));
    var customEventWithCommand = new GetEvent(DemoAppController.EVENT_CUSTOM);
    customDispatcher.dispatchEvent(customEventWithCommand);
}
function getPostCall() {
    var customDispatcher = Marshalling.MarshallEventDispatcher.getInstance();
    var customEventWithCommand = new GetEvent(DemoAppController.ANOTHER_EVENT_CUSTOM);
    customDispatcher.dispatchEvent(customEventWithCommand);
}
//# sourceMappingURL=DemoApp.js.map