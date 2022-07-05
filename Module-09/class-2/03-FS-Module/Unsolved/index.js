// TODO: What are we importing?
// a built in package allowing us to manipulate the file system
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// first is the name of the file you're attempting to write / append to
// second is the content you're attempting to write to the file
// third is the error callback function
fs.appendFile('log.txt', `${process.argv[2]}\n`, err =>
  // TODO: Describe how this ternary operator works
  // this works the same as an if else statement, where the content before the
  // question mark is the condition to be evaluated, the content between the question
  // mark and colon is run when the condition is evaluated to true, and the content
  // after the colon is what is to be run if the value is false
  err ? console.error(err) : console.log('Commit logged!')
);
