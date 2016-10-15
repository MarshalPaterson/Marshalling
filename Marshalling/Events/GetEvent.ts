///<reference path="../Marshalling.ts"/>
///<reference path="../Controls/DemoAppController.ts"/>
class GetEvent extends Marshalling.MarshallEvent {

    public data:any;

    constructor(data:any)
    {
        super(DemoAppController.EVENT_CUSTOM);
        this.data	=	data;
    }
}
