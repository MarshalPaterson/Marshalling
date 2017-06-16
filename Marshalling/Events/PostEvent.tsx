//import { MarshallEvent } from "../../node_modules/marshalling/dist/marshalling";
import * as Marshalling from "../../node_modules/marshalling/src/Marshalling";
import { DemoAppController } from "../Controls/DemoAppController";

export class PostEvent extends Marshalling.Marshalling.MarshallEvent  {

    public data:any;
    public type:string;

    constructor(type:string, data:any=null)
    {
       super();
        this.type = type;
        this.data	=	data;
    }
}
