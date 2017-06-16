/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Marshalling; });
/*
 * Marshall 3.2.3
 * https://marshalpaterson.github.io/Marshall/
 * MIT License
 * Copyright (c) 2016 MarshalPaterson
 *
 * Update: 3.5
 * Added React as the VIEW for Marshall changed from ts to tsx
 * */
/*
 * Marshall 3.2.3
 * https://marshalpaterson.github.io/Marshall/
 * MIT License
 * Copyright (c) 2016 MarshalPaterson
 *
 * Update: 3.5
 * Added React as the VIEW for Marshall changed from ts to tsx
 * */ var Marshalling;
(function (Marshalling) {
    class Marshall {
        constructor() {
            this.engine = new Array();
        }
        static getInstance() {
            if (this.instance == null)
                this.instance = new Marshall();
            return this.instance;
        }
        addMarshallingCommand(name, o) {
            if (name != "") {
                Marshall.getInstance().engine[name] = o;
                MarshallEventDispatcher.getInstance().addListener(name, o);
            }
        }
        getMarshallingCommand(name) {
            return Marshall.getInstance().engine[name];
        }
        remove(o) {
            //TODO
            //delete this.engine.indexOf(o);
        }
    }
    Marshalling.Marshall = Marshall;
    class MarshallService {
        constructor() {
            this.url = new Array();
        }
        static getInstance() {
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
    Marshalling.MarshallService = MarshallService;
    class MarshallDelegate {
    }
    Marshalling.MarshallDelegate = MarshallDelegate;
    class MarshallCommand {
        execute(name) {
        }
        ;
    }
    Marshalling.MarshallCommand = MarshallCommand;
    class MarshallEventDispatcher {
        constructor() {
            this.eventHandlers = {};
        }
        static getInstance() {
            if (this.instance == null)
                this.instance = new MarshallEventDispatcher();
            return this.instance;
        }
        addListener(name, handler) {
            addEventListener(name, handler);
        }
        removeEventListener(theEvent, theHandler) {
            // TODO
        }
        dispatchEvent(theEvent) {
            if (Marshall.getInstance().engine[theEvent.type])
                Marshall.getInstance().engine[theEvent.type].prototype.execute(theEvent.MarshallEvent(theEvent));
            else {
                dispatchEvent(theEvent.MarshallEvent(theEvent.data));
            }
        }
    }
    Marshalling.MarshallEventDispatcher = MarshallEventDispatcher;
    class MarshallEvent extends Object {
        MarshallEvent(e, bubbles = true, cancelable = false) {
            var ei = new Object();
            ei.bubbles = bubbles;
            ei.cancelable = cancelable;
            ei["detail"] = e.data;
            return new CustomEvent(e.type, ei);
        }
    }
    Marshalling.MarshallEvent = MarshallEvent;
    class MarshallModel extends MarshallEventDispatcher {
        static getInstance() {
            if (this.instance == null)
                this.instance = new MarshallModel();
            return this.instance;
        }
    }
    Marshalling.MarshallModel = MarshallModel;
    class MarshallLaw extends MarshallEventDispatcher {
        static getInstance() {
            if (this.instance == null)
                this.instance = new MarshallLaw();
            return this.instance;
        }
        publicOrder(id, decree, type = "text") {
            if (type.toLowerCase() === "html")
                document.getElementById(id).innerHTML = decree;
            else
                document.getElementById(id).innerText = decree;
        }
    }
    Marshalling.MarshallLaw = MarshallLaw;
    class MarshallCalling {
        static getInstance() {
            if (this.instance == null)
                this.instance = new MarshallCalling();
            return this.instance;
        }
        delegate(service, cfunc, method = "GET", params = null) {
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
            xhttp.onreadystatechange = () => {
                "use strict";
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    cfunc(xhttp.responseText);
                }
            };
        }
        load(e, html, div) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (e) {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById(div).innerHTML = xhr.responseText;
                }
            };
            xhr.open("GET", html, true);
            xhr.setRequestHeader('Content-type', 'text/html');
            xhr.send();
        }
    }
    Marshalling.MarshallCalling = MarshallCalling;
})(Marshalling || (Marshalling = {}));


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_marshalling_src_Marshalling__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Marshalling_Controls_DemoAppController__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Marshalling_Service_DemoAppService__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Marshalling_Events_GetEvent__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Marshalling_Events_PostEvent__ = __webpack_require__(5);







function getCustomCall() {
    var customDispatcher = __WEBPACK_IMPORTED_MODULE_2__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallEventDispatcher.getInstance();
    // var customEvent = new Marshalling.MarshallEvent();
    // customDispatcher.dispatchEvent(customEvent.dispatch(DemoAppController.GET_LIST, "Just a event with txt"));
    var customEventWithCommand = new __WEBPACK_IMPORTED_MODULE_5__Marshalling_Events_GetEvent__["a" /* GetEvent */](__WEBPACK_IMPORTED_MODULE_3__Marshalling_Controls_DemoAppController__["a" /* DemoAppController */].EVENT_CUSTOM, "some param text");
    customEventWithCommand.data = "This is data";
    customDispatcher.dispatchEvent(customEventWithCommand);
}
function getPostCall() {
    var customDispatcher = __WEBPACK_IMPORTED_MODULE_2__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallEventDispatcher.getInstance();
    var customEventWithCommand = new __WEBPACK_IMPORTED_MODULE_6__Marshalling_Events_PostEvent__["a" /* PostEvent */](__WEBPACK_IMPORTED_MODULE_3__Marshalling_Controls_DemoAppController__["a" /* DemoAppController */].ANOTHER_EVENT_CUSTOM, "some param text");
    customDispatcher.dispatchEvent(customEventWithCommand);
}
class DemoApp extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        __WEBPACK_IMPORTED_MODULE_3__Marshalling_Controls_DemoAppController__["a" /* DemoAppController */].init();
        __WEBPACK_IMPORTED_MODULE_4__Marshalling_Service_DemoAppService__["a" /* DemoAppService */].init();
        this.state = { gResult: this.props.gResult };
    }
    replaceState(event) {
        __WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](DemoApp, { "gResult": event["gResult"] }), document.getElementById("example"));
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: getCustomCall }, "Get Method with Marshalling and React"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: getPostCall }, "Post Method with Marshalling and React"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { dangerouslySetInnerHTML: { __html: this.props.gResult } }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["DemoApp"] = DemoApp;

__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](DemoApp, { "gResult": "" }), document.getElementById("example"));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__ = __webpack_require__(0);
// import { Marshalling } from "../../node_modules/marshalling/dist/marshalling";
// import { MarshallDelegate } from "../../node_modules/marshalling/dist/marshalling";
// import { MarshallService } from "../../node_modules/marshalling/dist/marshalling";
// import { MarshallCalling } from "../../node_modules/marshalling/dist/marshalling";

class GetDelegate {
    constructor() {
        this.service = null;
        this.responder = null;
    }
    GetCall(responder, data) {
        this.service = __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallService.getInstance().get("GetService");
        this.responder = responder;
        __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallCalling.getInstance().delegate(this.service, this.responder, "GET", data);
    }
    PostCall(responder, data) {
        this.service = __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallService.getInstance().get("PostService");
        this.responder = responder;
        __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallCalling.getInstance().delegate(this.service, this.responder, "POST", data);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GetDelegate;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Marshalling_Commands_GetCommand__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Marshalling_Commands_PostCommand__ = __webpack_require__(10);
//import { Marshalling } from "../../node_modules/marshalling/dist/marshalling";



class DemoAppController {
    static init() {
        this.customMarshalling.addMarshallingCommand(this.EVENT_CUSTOM, __WEBPACK_IMPORTED_MODULE_1__Marshalling_Commands_GetCommand__["a" /* GetCommand */]);
        this.customMarshalling.addMarshallingCommand(this.ANOTHER_EVENT_CUSTOM, __WEBPACK_IMPORTED_MODULE_2__Marshalling_Commands_PostCommand__["a" /* PostCommand */]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DemoAppController;

DemoAppController.customMarshalling = __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].Marshall.getInstance();
DemoAppController.EVENT_CUSTOM = "eventCustom";
DemoAppController.ANOTHER_EVENT_CUSTOM = "anotherEventCustom";


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__ = __webpack_require__(0);
//import { MarshallEvent } from "../../node_modules/marshalling/dist/marshalling";

//extends MarshallEvent
class GetEvent extends __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallEvent {
    constructor(type, data = null) {
        super();
        this.type = type;
        this.data = data;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GetEvent;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__ = __webpack_require__(0);
//import { MarshallEvent } from "../../node_modules/marshalling/dist/marshalling";

class PostEvent extends __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallEvent {
    constructor(type, data = null) {
        super();
        this.type = type;
        this.data = data;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PostEvent;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__ = __webpack_require__(0);
//import { MarshallService } from "../../node_modules/marshalling/dist/marshalling";

class DemoAppService {
    static init() {
        __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallService.getInstance().add("GetService", "MockTestResult.txt");
        __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallService.getInstance().add("PostService", "PostMockTestResult");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DemoAppService;



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Delegates_GetDelegate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Views_DemoApp__ = __webpack_require__(1);



//implements IMarshallResponser, MarshallCommand
//implements Marshalling.Marshalling.IMarshallResponser, Marshalling.Marshalling.MarshallCommand 
class GetCommand {
    execute(event) {
        var delegate = new __WEBPACK_IMPORTED_MODULE_1__Delegates_GetDelegate__["a" /* GetDelegate */]();
        delegate.GetCall(this.onResult, event.detail);
    }
    onResult(event) {
        var customDispatcher = __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallEventDispatcher.getInstance();
        let o = new Object();
        o["gResult"] = event;
        let d = new __WEBPACK_IMPORTED_MODULE_2__Views_DemoApp__["DemoApp"](o);
        d.replaceState({
            gResult: event
        });
    }
    onFault(event) {
        //TODO
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GetCommand;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Delegates_GetDelegate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Views_DemoApp__ = __webpack_require__(1);



class PostCommand {
    execute(event) {
        var delegate = new __WEBPACK_IMPORTED_MODULE_1__Delegates_GetDelegate__["a" /* GetDelegate */]();
        delegate.PostCall(this.onResult, event.detail);
    }
    onResult(event) {
        var customDispatcher = __WEBPACK_IMPORTED_MODULE_0__node_modules_marshalling_src_Marshalling__["a" /* Marshalling */].MarshallEventDispatcher.getInstance();
        let o = new Object();
        o["gResult"] = event;
        let d = new __WEBPACK_IMPORTED_MODULE_2__Views_DemoApp__["DemoApp"](o);
        d.replaceState({
            gResult: event
        });
    }
    onFault(event) {
        //TODO
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PostCommand;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map