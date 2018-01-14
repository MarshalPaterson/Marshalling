# Marshalling
The most stable version is 4.0.19 and above.
Marshalling serving data from server response to client!
Marshalling is a Typescript Framework for React Native!

To use with your next React Native simply install by:
```npm install marshalling```

Please note that Marshalling is written in Typescript it is important that your project can render tsc. A good article can be read at https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7

Please feel free to download the demo application of Marshalling from:
https://github.com/MarshalPaterson/Marshalling-ReactNative

The demo application has an example for 'GET' and 'POST'. Support for CRUD is still under development.

General Usage:
```import * as Marshalling from "marshalling";```

Create an instance within your class:
```public marshalling = new Marshalling.Marshall();```

In componentDidMount set the method signatures of name and service api endpoint. Then call the end via the 'law' method. The 'law' method is a Promise method that you assign your callback functions, the example below you can see on success it handles the responses with a 'value' arrow function and on error in 'reason' arrow function. The endpoint returns a JSON can be parsed into a object then set to state.

```
componentDidMount() {
    this.marshalling.getInstance().addService('tester', 'https://jsonplaceholder.typicode.com/comments');
    this.marshalling.getInstance().law('tester').then(
     (value) => {
        let obj = JSON.parse(String(value));
        this.setState({
          data: obj[0].name
        });
    },
    (reason) => {
        console.error('Something went wrong', reason);
    });
  }
```

Marshalling implements the Singleton pattern. If you are not using Typescript you can still reference Marshalling in a normal ES6 Javascript project.


For older version please review branch 3.5.0.
https://github.com/MarshalPaterson/Marshalling/tree/3.5.0

Join Marshalling on LinkedIn at https://www.linkedin.com/groups/13534575
