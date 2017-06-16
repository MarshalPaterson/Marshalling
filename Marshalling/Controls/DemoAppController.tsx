//import { Marshalling } from "../../node_modules/marshalling/dist/marshalling";
import * as Marshalling from "../../node_modules/marshalling/src/Marshalling";
import { GetCommand } from "../../Marshalling/Commands/GetCommand";
import { PostCommand } from "../../Marshalling/Commands/PostCommand";

export class DemoAppController {
    private static customMarshalling = Marshalling.Marshalling.Marshall.getInstance();
    public static EVENT_CUSTOM: string = "eventCustom";
    public static ANOTHER_EVENT_CUSTOM: string = "anotherEventCustom";

    public static init() {
        this.customMarshalling.addMarshallingCommand(this.EVENT_CUSTOM, GetCommand);
        this.customMarshalling.addMarshallingCommand(this.ANOTHER_EVENT_CUSTOM, PostCommand);
    }
}