export class Marshall {

    private instance: Marshall;
    private register: Array<string>;

    public getInstance(): Marshall {
        if (this.instance == null)
            this.instance = new Marshall();

        return this.instance;
    }
    public helloWorld() {
        return "Hello World"
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
    public async law(name, method='GET') {
        let url:string = this.getService(name);
        return await new Promise(
            function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        // Success
                        if(this.response!=="")
                            resolve(this.response);
                    } else if (this.readyState === 4 && this.status !== 0) {
                        // Something went wrong (404 etc.)
                        reject(new Error(this.statusText));
                    }
                }
                request.onerror = function () {
                    reject(new Error(
                        'XMLHttpRequest Error: '+this.statusText));
                };
                request.open(method, url);
                request.send();    
            });
    }    
}
