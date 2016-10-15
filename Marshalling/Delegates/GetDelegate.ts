///<reference path="../Marshalling.ts"/>
///<reference path="../Commands/GetCommand.ts"/>
class GetDelegate extends Marshalling.MarshallDelegate{

    GetCall(responder, data){
        this.service = Marshalling.MarshallService.getInstance().get("GetService");
        this.responder = responder;

        Marshalling.MarshallCalling.getInstance().delegate(this.service, this.responder, "GET", data);
    }
    PostCall(responder, data){
        this.service = Marshalling.MarshallService.getInstance().get("PostService");
        this.responder = responder;

        Marshalling.MarshallCalling.getInstance().delegate(this.service, this.responder, "POST", data);
    }
}