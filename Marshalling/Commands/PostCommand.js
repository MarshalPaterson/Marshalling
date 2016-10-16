///<reference path="../Marshalling.ts"/>
///<reference path="../Controls/DemoAppController.ts"/>
///<reference path="../Events/PostEvent.ts"/>\
///<reference path="../Delegates/GetDelegate.ts"/>
//import { Marshalling } ;
var PostCommand = (function () {
    function PostCommand() {
    }
    PostCommand.prototype.execute = function (name) {
        var delegate = new GetDelegate();
        delegate.PostCall(this.onResult, "get the data");
    };
    PostCommand.prototype.onResult = function (event) {
        var customDispatcher = Marshalling.MarshallEventDispatcher.getInstance();
        Marshalling.MarshallLaw.getInstance().publicOrder("resultHtml", "<i>" + event + "</i> with HTML!", "html");
        Marshalling.MarshallLaw.getInstance().publicOrder("result", event);
    };
    PostCommand.prototype.onFault = function (event) {
        //TODO
    };
    return PostCommand;
}());
//# sourceMappingURL=PostCommand.js.map