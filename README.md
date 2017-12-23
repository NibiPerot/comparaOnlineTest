# Compara Online Test
This project was solved using the functional programming approach, this is the reason beacause classes are not used in order to solve the problem. 

Additionally the object product has a new property called coverage (that is a number that represent the name of the product), this is because the original structure force us to select the bussiness rules according to the name, and that is not the best option to have a clean code.


## Project
In order to run the project you must have ([npm](https://www.npmjs.com/))installed,once you have it you could go to terminal and find the project folder and put the next command:
```
npm install
```
This is going to install all dependencies indicated in package.json file

After dependencies are installed you should put the path of index.html file

## Testing
The file to test functions is in path test/functions.test.js this tests functions that are under libreries/functions folder this are clones of used functions (js/index.js file)

In order to test functions you must go to project folder in terminal and write the next command
```
node_modules/.bin/mocha 
```
This is going to execute every test on test/functions.test.js file