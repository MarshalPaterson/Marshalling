///<reference path="../Marshalling.ts"/>
///<reference path="../Controls/DemoAppController.ts"/>
var DemoAppService = (function () {
    function DemoAppService() {
    }
    DemoAppService.init = function () {
        Marshalling.MarshallService.getInstance().add("GetService", "MockTestResult.txt");
        Marshalling.MarshallService.getInstance().add("PostService", "PostMockTestResult.txt");
    };
    return DemoAppService;
}());
//# sourceMappingURL=DemoAppService.js.map