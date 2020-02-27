#!/usr/bin/node

if(process.argv.length != 4){
  console.log('sum x y');
  process.exit(1);
}

var x = Number(process.argv[2]),
    y = Number(process.argv[3]);

const add = require('./calc.js');

console.log(`${x} + ${y} = ${add(x,y)}`);

