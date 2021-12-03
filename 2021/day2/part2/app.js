const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf8');

const result = input
  .split('\n')
  .filter(v => v)
  .reduce(
    (accumulator, value) => {
      const action = value.replace(/^([a-z]+) [0-9]+$/, '$1');
      const count = parseInt(value.replace(/^[a-z]+ ([0-9]+)$/, '$1'));

      if (action === 'forward') {
        accumulator.horizontal += count;
        accumulator.depth += accumulator.aim * count;
      }
      else if (action === 'down') {
        accumulator.aim += count;
      }
      else if (action === 'up') {
        accumulator.aim -= count;
      }

      return accumulator;
    },
    {
      horizontal: 0,
      aim: 0,
      depth: 0
    }
  );

console.log(result.horizontal * result.depth);
