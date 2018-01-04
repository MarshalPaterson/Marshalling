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
    law(name, method = 'GET', data = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            method = method.toUpperCase();
            let url = this.getService(name);
            return yield new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                let params = '';
                if (data !== undefined && data !== null)
                    params = (typeof data == 'string') ? data : Object.keys(data).map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(this.data[k]); }).join('&');
                request.open(method, url);
                request.onreadystatechange = function () {
                    if (this.readyState === 4 && (this.status === 200 || this.status === 201)) {
                        if (this.response !== "")
                            resolve(this.response);
                    }
                    else if (this.readyState === 4 && this.status !== 0) {
                        reject(new Error(this.statusText));
                    }
                };
                request.onerror = function () {
                    reject(new Error('XMLHttpRequest Error: ' + this.statusText));
                };
                if (method === 'POST') {
                    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                    request.send(params);
                }
                else {
                    request.send();
                }
            });
        });
    }
}
//# sourceMappingURL=index.js.map