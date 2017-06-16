import * as Marshalling from "../../node_modules/marshalling/src/Marshalling";
import { GetDelegate } from "../Delegates/GetDelegate";
import { DemoAppController } from "../Controls/DemoAppController";
import { DemoApp } from "../../Views/DemoApp";

export class PostCommand implements Marshalling.Marshalling.IMarshallResponser, Marshalling.Marshalling.MarshallCommand {
    public execute(event:any): void {
        var delegate:GetDelegate = new GetDelegate();
        delegate.PostCall(this.onResult, event.detail);
    }
    public onResult(event: any): void {
        var customDispatcher: any = Marshalling.Marshalling.MarshallEventDispatcher.getInstance();
        let o:any = new Object();
        o["gResult"] = event;
        let d = new DemoApp(o);
        d.replaceState({
            gResult: event
        });
    }
    public onFault(event: any): void {
        //TODO
    }
}