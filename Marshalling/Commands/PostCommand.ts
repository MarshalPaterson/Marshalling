///<reference path="../Marshalling.ts"/>
///<reference path="../Controls/DemoAppController.ts"/>
///<reference path="../Events/PostEvent.ts"/>\
///<reference path="../Delegates/GetDelegate.ts"/>
//import { Marshalling } ;


class PostCommand implements Marshalling.IMarshallResponser, Marshalling.MarshallCommand {
    public execute(name:any): void {
        var delegate:GetDelegate = new GetDelegate();
        delegate.PostCall(this.onResult, "get the data");
    }
    public onResult(event: any): void {
        var customDispatcher = Marshalling.MarshallEventDispatcher.getInstance();
        Marshalling.MarshallLaw.getInstance().publicOrder("resultHtml", "<i>"+event+"</i> with HTML!", "html");
        Marshalling.MarshallLaw.getInstance().publicOrder("result", event);
    }
    public onFault(event: any): void {
        //TODO
    }
}