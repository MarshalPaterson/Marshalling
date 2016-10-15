///<reference path="../Marshalling.ts"/>
///<reference path="../Controls/DemoAppController.ts"/>
class DemoAppService{
    static init() {
        Marshalling.MarshallService.getInstance().add("GetService", "MockTestResult.txt");
        Marshalling.MarshallService.getInstance().add("PostService", "PostMockTestResult.txt");
    }
}
