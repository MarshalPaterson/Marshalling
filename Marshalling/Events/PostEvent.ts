///<reference path="../Marshalling.ts"/>
///<reference path="../Controls/DemoAppController.ts"/>
class AnotherGetEvent extends Marshalling.MarshallEvent {

    public data:any;

    constructor(data:any)
    {
        super(DemoAppController.ANOTHER_EVENT_CUSTOM);
        this.data	=	data;
    }
}
