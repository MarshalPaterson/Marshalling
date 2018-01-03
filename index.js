var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Marshall {
    getInstance() {
        if (this.instance == null)
            this.instance = new Marshall();
        return this.instance;
    }
    addService(name, url) {
        if (this.register === undefined) {
            this.register = new Array();
        }
        this.register[name] = url;
    }
    getService(name) {
        return this.register[name];
    }
    law(name, method = 'GET') {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.getService(name);
            return yield new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        // Success
                        if (this.response !== "")
                            resolve(this.response);
                    }
                    else if (this.readyState === 4 && this.status !== 0) {
                        // Something went wrong (404 etc.)
                        reject(new Error(this.statusText));
                    }
                };
                request.onerror = function () {
                    reject(new Error('XMLHttpRequest Error: ' + this.statusText));
                };
                request.open(method, url);
                request.send();
            });
        });
    }
}
//# sourceMappingURL=index.js.map