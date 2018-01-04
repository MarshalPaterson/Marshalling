export class Marshall {

    private instance: Marshall;
    private register: Array<string>;

    public getInstance(): Marshall {
        if (this.instance == null)
            this.instance = new Marshall();

        return this.instance;
    } 
    public addService(name, url) {
        if(this.register===undefined){
            this.register = new Array();
        }
        this.register[name]=url;
    }
    protected getService(name){
        return this.register[name];
    }
    public async law(name, method='GET', data=undefined) {
        method = method.toUpperCase();
        let url:string = this.getService(name);
        return await new Promise(
            function (resolve, reject) {
                let request = new XMLHttpRequest();
                let params='';
                if(data!== undefined && data !== null)
                    params = (typeof data == 'string') ? data : Object.keys(data).map(
                    function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(this.data[k]) }
                ).join('&');  
                request.open(method, url);
                request.onreadystatechange = function () {
                    if (this.readyState === 4 && (this.status === 200 || this.status === 201)) {
                        if(this.response!=="")
                            resolve(this.response);
                    } else if (this.readyState === 4 && this.status !== 0) {
                        reject(new Error(this.statusText));
                    }
                }
                request.onerror = function () {
                    reject(new Error(
                        'XMLHttpRequest Error: '+this.statusText));
                };
                if(method === 'POST') {
                    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                    request.send(params);
                } else {
                    request.send();
                }    
            });
    }    
}