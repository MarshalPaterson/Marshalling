// import { Marshalling } from "../../node_modules/marshalling/dist/marshalling";
// import { MarshallDelegate } from "../../node_modules/marshalling/dist/marshalling";
// import { MarshallService } from "../../node_modules/marshalling/dist/marshalling";
// import { MarshallCalling } from "../../node_modules/marshalling/dist/marshalling";
import * as Marshalling from "../../node_modules/marshalling/src/Marshalling";
import { GetCommand } from "../../Marshalling/Commands/GetCommand";

export class GetDelegate {
    private service: any = null;
    private responder: any = null;
    GetCall(responder: any, data: any) {
        this.service = Marshalling.Marshalling.MarshallService.getInstance().get("GetService");
        this.responder = responder;

        Marshalling.Marshalling.MarshallCalling.getInstance().delegate(this.service, this.responder, "GET", data);
    }
    PostCall(responder: any, data: any) {
        this.service = Marshalling.Marshalling.MarshallService.getInstance().get("PostService");
        this.responder = responder;

        Marshalling.Marshalling.MarshallCalling.getInstance().delegate(this.service, this.responder, "POST", data);
    }
}