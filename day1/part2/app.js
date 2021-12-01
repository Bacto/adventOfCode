const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf8');

const count = input
  .split('\n')
  .map(entry => parseInt(entry))
  .reduce(
    (accumulator, value, index, array) =>
      ([
        ...accumulator,
        index + 2 < array.length
          ? value + array[index + 1] + array[index + 2]
          : null
      ]),
    []
  )
  .filter(entry => entry !== null)
  .map((depth, index, array) => index === 0 || array[index - 1] >= depth ? 0 : 1)
  .reduce((accumulator, value) => accumulator += value, 0);

console.log(count);