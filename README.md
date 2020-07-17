# Fabcar Web Based App with Express and ReactJS
## What is Hyperledger Fabric?
[Link](https://hyperledger-fabric.readthedocs.io/en/release-1.4/blockchain.html)
## What is Fabcar?
Fabcar is a sample application for hyperledger fabric(version 1.4.2).<br/>[Details](https://hyperledger-fabric.readthedocs.io/en/release-1.4/understand_fabcar_network.html)
## Hyperledger Fabric Installation
[Link](https://www.uniwebb.com/blog/post/how-to-install-hyperledger-fabric-14-on-ubuntu-1804-lts/1766/)
## Fabcar Network Setup and Backend Starting
Firstly, "backend.js" copied to "fabric-samples/fabcar/javascript". And now you can run codes as following;
```
$ cd fabric-samples/fabcar
$ ./startFabric.sh
$ cd javascript
$ npm install
$ rm -fr wallet/*
$ node enrollAdmin.js
$ node registerUser.js
$ node backend.js
```
Finally, the backend listening for the frontend on port 8080.
## Frontend Starting
```
$ cd front-end
$ npm install
$ npm start
```
## Result
![1](https://user-images.githubusercontent.com/16120472/87818087-bd8a3600-c872-11ea-90e5-c4145caccc8f.png)
![2](https://user-images.githubusercontent.com/16120472/87818122-c844cb00-c872-11ea-9f5b-649fd706b247.png)
![3](https://user-images.githubusercontent.com/16120472/87818169-d2ff6000-c872-11ea-8694-996403619a0b.png)
![4](https://user-images.githubusercontent.com/16120472/87818184-dabf0480-c872-11ea-84a3-9b3771fbfddc.png)
