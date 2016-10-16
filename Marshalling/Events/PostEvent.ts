///<reference path="../Marshalling.ts"/>
///<reference path="../Controls/DemoAppController.ts"/>
class PostEvent extends Marshalling.MarshallEvent {

    public data:any;
    public type:string;

    constructor(type:string, data:any=null)
    {
        super();
        this.type = type;
        this.data	=	data;
    }
}
