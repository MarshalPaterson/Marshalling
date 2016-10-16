///<reference path="../Marshalling.ts"/>
///<reference path="../Controls/DemoAppController.ts"/>
///<reference path="../Events/GetEvent.ts"/>\
///<reference path="../Delegates/GetDelegate.ts"/>
//import { Marshalling } ;
var GetCommand = (function () {
    function GetCommand() {
    }
    GetCommand.prototype.execute = function (name) {
        var delegate = new GetDelegate();
        delegate.GetCall(this.onResult, "get the data");
    };
    GetCommand.prototype.onResult = function (event) {
        var customDispatcher = Marshalling.MarshallEventDispatcher.getInstance();
        Marshalling.MarshallLaw.getInstance().publicOrder("resultHtml", "<i>" + event + "</i> with HTML!", "html");
        Marshalling.MarshallLaw.getInstance().publicOrder("result", event);
    };
    GetCommand.prototype.onFault = function (event) {
        //TODO
    };
    return GetCommand;
}());
//# sourceMappingURL=GetCommand.js.map