import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Marshalling from "../node_modules/marshalling/src/Marshalling";
import { DemoAppController } from "../Marshalling/Controls/DemoAppController";
import { DemoAppService } from "../Marshalling/Service/DemoAppService";
import { GetEvent } from "../Marshalling/Events/GetEvent";
import { PostEvent } from "../Marshalling/Events/PostEvent";

function getCustomCall() {
    var customDispatcher = Marshalling.Marshalling.MarshallEventDispatcher.getInstance();
    // var customEvent = new Marshalling.MarshallEvent();
    // customDispatcher.dispatchEvent(customEvent.dispatch(DemoAppController.GET_LIST, "Just a event with txt"));
    var customEventWithCommand = new GetEvent(DemoAppController.EVENT_CUSTOM, "some param text");
    customEventWithCommand.data = "This is data";
    customDispatcher.dispatchEvent(customEventWithCommand);
}
function getPostCall() {
    var customDispatcher = Marshalling.Marshalling.MarshallEventDispatcher.getInstance();
    var customEventWithCommand = new PostEvent(DemoAppController.ANOTHER_EVENT_CUSTOM, "some param text");
    customDispatcher.dispatchEvent(customEventWithCommand);
}

export interface Result extends React.Props<any> {
    gResult: any;
}
export class DemoApp extends React.Component<Result, {}> {
    constructor(props: any) {
        super(props);
        DemoAppController.init();
        DemoAppService.init();
        this.state = { gResult: this.props.gResult };
    }
    replaceState(event: any) {
        ReactDOM.render(React.createElement(DemoApp, { "gResult": event["gResult"] }), document.getElementById("example"));
    }
    render() {
        return <div>
            <button onClick={getCustomCall}>
                Get Method with Marshalling and React
        </button>
            <button onClick={getPostCall}>
                Post Method with Marshalling and React
        </button>
        <div dangerouslySetInnerHTML={{ __html: this.props.gResult }} />
            
            </div>;
    }
}

ReactDOM.render(React.createElement(DemoApp, { "gResult": "" }), document.getElementById("example"));