import * as Marshalling from "../../node_modules/marshalling/src/Marshalling";
import { GetDelegate } from "../Delegates/GetDelegate";
import { DemoAppController } from "../Controls/DemoAppController";
import { DemoApp } from "../../Views/DemoApp";

export interface Result extends React.Props<any> {
    gResult: any;
}

//implements IMarshallResponser, MarshallCommand
//implements Marshalling.Marshalling.IMarshallResponser, Marshalling.Marshalling.MarshallCommand 
export class GetCommand implements Marshalling.Marshalling.IMarshallResponser, Marshalling.Marshalling.MarshallCommand {
    public execute(event: any): void {
        var delegate: GetDelegate = new GetDelegate();
        delegate.GetCall(this.onResult, event.detail);
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