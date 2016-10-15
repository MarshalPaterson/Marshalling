var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marshalling;
(function (Marshalling) {
    var Marshall = (function () {
        function Marshall() {
            this.engine = new Array();
        }
        Marshall.getInstance = function () {
            if (this.instance == null)
                this.instance = new Marshall();
            return this.instance;
        };
        Marshall.prototype.addMarshallingCommand = function (name, o) {
            if (name != "") {
                Marshall.getInstance().engine[name] = o;
                MarshallEventDispatcher.getInstance().addListener(name, o);
            }
        };
        Marshall.prototype.getMarshallingCommand = function (name) {
            return Marshall.getInstance().engine[name];
        };
        Marshall.prototype.remove = function (o) {
            delete this.engine.indexOf(o);
        };
        return Marshall;
    }());
    Marshalling.Marshall = Marshall;
    var MarshallService = (function () {
        function MarshallService() {
            this.url = new Array();
        }
        MarshallService.getInstance = function () {
            if (this.instance == null)
                this.instance = new MarshallService();
            return this.instance;
        };
        MarshallService.prototype.add = function (name, url) {
            MarshallService.getInstance().url[name] = url;
        };
        MarshallService.prototype.get = function (name) {
            return MarshallService.getInstance().url[name];
        };
        return MarshallService;
    }());
    Marshalling.MarshallService = MarshallService;
    var MarshallDelegate = (function () {
        function MarshallDelegate() {
        }
        return MarshallDelegate;
    }());
    Marshalling.MarshallDelegate = MarshallDelegate;
    var MarshallCommand = (function () {
        function MarshallCommand() {
        }
        MarshallCommand.prototype.execute = function (name) {
        };
        ;
        return MarshallCommand;
    }());
    Marshalling.MarshallCommand = MarshallCommand;
    var MarshallEventDispatcher = (function () {
        function MarshallEventDispatcher() {
            this.eventHandlers = {};
        }
        MarshallEventDispatcher.getInstance = function () {
            if (this.instance == null)
                this.instance = new MarshallEventDispatcher();
            return this.instance;
        };
        MarshallEventDispatcher.prototype.addListener = function (name, handler) {
            addEventListener(name, handler);
        };
        MarshallEventDispatcher.prototype.removeEventListener = function (theEvent, theHandler) {
            // TODO
        };
        // send event to a handler
        MarshallEventDispatcher.prototype.dispatchEvent = function (theEvent) {
            if (Marshall.getInstance().engine[theEvent.data])
                Marshall.getInstance().engine[theEvent.data].prototype.execute(theEvent.MarshallEvent(theEvent.data));
            else {
                dispatchEvent(theEvent.MarshallEvent(theEvent.data));
            }
        };
        return MarshallEventDispatcher;
    }());
    Marshalling.MarshallEventDispatcher = MarshallEventDispatcher;
    var MarshallEvent = (function (_super) {
        __extends(MarshallEvent, _super);
        function MarshallEvent() {
            _super.apply(this, arguments);
        }
        MarshallEvent.prototype.MarshallEvent = function (type, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = true; }
            if (cancelable === void 0) { cancelable = false; }
            var ei = new Object();
            ei.bubbles = bubbles;
            ei.cancelable = cancelable;
            return new CustomEvent(type, ei);
        };
        return MarshallEvent;
    }(Object));
    Marshalling.MarshallEvent = MarshallEvent;
    var MarshallModel = (function (_super) {
        __extends(MarshallModel, _super);
        function MarshallModel() {
            _super.apply(this, arguments);
        }
        MarshallModel.getInstance = function () {
            if (this.instance == null)
                this.instance = new MarshallModel();
            return this.instance;
        };
        return MarshallModel;
    }(MarshallEventDispatcher));
    Marshalling.MarshallModel = MarshallModel;
    var MarshallLaw = (function (_super) {
        __extends(MarshallLaw, _super);
        function MarshallLaw() {
            _super.apply(this, arguments);
        }
        MarshallLaw.getInstance = function () {
            if (this.instance == null)
                this.instance = new MarshallLaw();
            return this.instance;
        };
        MarshallLaw.prototype.publicOrder = function (id, decree, type) {
            if (type === void 0) { type = "text"; }
            if (type.toLowerCase() === "html")
                document.getElementById(id).innerHTML = decree;
            else
                document.getElementById(id).innerText = decree;
        };
        return MarshallLaw;
    }(MarshallEventDispatcher));
    Marshalling.MarshallLaw = MarshallLaw;
    var MarshallCalling = (function () {
        function MarshallCalling() {
        }
        MarshallCalling.getInstance = function () {
            if (this.instance == null)
                this.instance = new MarshallCalling();
            return this.instance;
        };
        MarshallCalling.prototype.delegate = function (service, cfunc, method, params) {
            if (method === void 0) { method = "GET"; }
            if (params === void 0) { params = null; }
            var xhttp = new XMLHttpRequest();
            if ("POST" === method.toUpperCase() && params) {
                xhttp.open(method, service, true);
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhttp.send(params);
            }
            else {
                xhttp.open(method, service, true);
                xhttp.send();
            }
            xhttp.onreadystatechange = function () {
                "use strict";
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    cfunc(xhttp.responseText);
                }
            };
        };
        MarshallCalling.prototype.load = function (e, html, div) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById(div).innerHTML = xhr.responseText;
                }
            };
            xhr.open("GET", html, true);
            xhr.setRequestHeader('Content-type', 'text/html');
            xhr.send();
        };
        return MarshallCalling;
    }());
    Marshalling.MarshallCalling = MarshallCalling;
})(Marshalling || (Marshalling = {}));
//# sourceMappingURL=Marshalling.js.map