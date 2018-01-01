/*
 * Marshalling 4.0.0
 * https://marshalpaterson.github.io/Marshalling/
 * MIT License
 * Copyright (c) 2018 MarshalPaterson
 *
 * */

namespace Marshalling {

    export class Marshall {

        public engine: Array<any> = new Array();

        private static instance: Marshall;

        public static getInstance(): Marshall {
            if (this.instance == null)
                this.instance = new Marshall();

            return this.instance;
        }

        addMarshallingCommand(name:any, o:any) {
            if (name != "") {
                Marshall.getInstance().engine[name] = o;
                MarshallEventDispatcher.getInstance().addListener(name, o);
            }
        }

        getMarshallingCommand(name:any) {
            return Marshall.getInstance().engine[name];
        }

        remove(o:any) {
            delete this.engine.indexOf(o);
        }
    }

    export class MarshallService {
        url = new Array();

        private static instance: MarshallService;

        public static getInstance(): MarshallService {
            if (this.instance == null)
                this.instance = new MarshallService();

            return this.instance;
        }

        add(name, url) {
            MarshallService.getInstance().url[name] = url;
        }

        get(name) {
            return MarshallService.getInstance().url[name];
        }
    }

    export class MarshallDelegate {
        service: Marshalling.MarshallService;
        responder: Marshalling.IMarshallResponser;
    }

    export class MarshallCommand {
        public execute(name) {

        };
    }

    export class MarshallEventDispatcher implements IMarshallInforcer {
        private eventHandlers = {};
        protected static instance: MarshallEventDispatcher;

        public static getInstance(): MarshallEventDispatcher {
            if (this.instance == null)
                this.instance = new MarshallEventDispatcher();

            return this.instance;
        }

        public addListener(name: string, handler: any) {
            addEventListener(name, handler);
        }

        removeEventListener(theEvent: string, theHandler: any) {
            // TODO
        }

        public dispatchEvent(theEvent: any) {
            if (Marshall.getInstance().engine[theEvent.type])
                Marshall.getInstance().engine[theEvent.type].prototype.execute(theEvent.MarshallEvent(theEvent));
            else {
                dispatchEvent(theEvent.MarshallEvent(theEvent.data));
            }
        }
    }

    export class MarshallEvent extends Object {
        public data: any;

        MarshallEvent(e: any, bubbles: boolean = true, cancelable: boolean = false) {
            var ei: Object = new Object() as EventInit;
            (ei as EventInit).bubbles = bubbles;
            (ei as EventInit).cancelable = cancelable;
            ei["detail"] = e.data;
            return new CustomEvent(e.type, ei);
        }
    }

    export class MarshallModel extends MarshallEventDispatcher {
        protected static instance: MarshallModel;

        public static getInstance(): MarshallModel {
            if (this.instance == null)
                this.instance = new MarshallModel();

            return this.instance;
        }
    }

    export interface IMarshallModelLocator {
    }

    export interface IMarshallResponser {
        onResult(event: any): void;
        onFault(event: any): void;
    }

    export interface IMarshallInforcer {
        addListener(name: string, handler: any);
        removeEventListener(name: string, handler: any);
        dispatchEvent(theEvent: Event);
    }

    export interface IMarshallLaw {
        getInstance();
    }

    export class MarshallLaw extends MarshallEventDispatcher implements IMarshallInforcer {
        protected static instance: MarshallLaw;

        public static getInstance(): MarshallLaw {
            if (this.instance == null)
                this.instance = new MarshallLaw();

            return this.instance;
        }

        public publicOrder(id: string, decree: string, type: string = "text") {
            if (type.toLowerCase() === "html")
                document.getElementById(id).innerHTML = decree;
            else
                document.getElementById(id).innerText = decree;
        }
    }

    export class MarshallCalling {
        private static instance: MarshallCalling;

        public static getInstance(): MarshallCalling {
            if (this.instance == null)
                this.instance = new MarshallCalling();

            return this.instance;
        }

        public delegate(service, cfunc, method = "GET", params = null) {

            var xhttp = new XMLHttpRequest();

            if ("POST" === method.toUpperCase() && params) {
                xhttp.open(method, service, true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send(params);
            } else {
                xhttp.open(method, service, true);
                xhttp.send();
            }

            xhttp.onreadystatechange = () => {
                "use strict";
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    cfunc(xhttp.responseText);
                }
            };
        }

        public load(e, html, div) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById(div).innerHTML = xhr.responseText;
                }
            }

            xhr.open("GET", html, true);
            xhr.setRequestHeader('Content-type', 'text/html');
            xhr.send();
        }
    }
}