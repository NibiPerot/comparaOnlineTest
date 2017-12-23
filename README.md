#Compara Online Test

##Project

In order to run the project you must have ([npm](https://www.npmjs.com/))installed,once you have it you could go to terminal and find the project folder and put the next command:
```
npm install
```
This is going to install all dependencies indicated in package.json file

After dependencies are installed you should put the path of index.html file

##Testing
The file to test functions is in path test/functions.test.js this tests functions that are under libreries/functions folder this are clones of used functions (js/index.js file)

In order to test functions you must go to project folder in terminal and write the next command
```
node_modules/.bin/mocha 
```
This is going to execute every test on test/functions.test.js file