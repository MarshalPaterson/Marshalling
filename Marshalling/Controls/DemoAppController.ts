///<reference path="../Marshalling.ts"/>
///<reference path="../Commands/GetCommand.ts"/>
///<reference path="../Commands/PostCommand.ts"/>
class DemoAppController {
    private static customMarshalling = Marshalling.Marshall.getInstance();

    public static EVENT_CUSTOM:string="evetnCustom";
    public static ANOTHER_EVENT_CUSTOM:string="anotherEventCustom";

    public static init() {
        this.customMarshalling.addMarshallingCommand(this.EVENT_CUSTOM, GetCommand);
        this.customMarshalling.addMarshallingCommand(this.ANOTHER_EVENT_CUSTOM, PostCommand);
    }
}