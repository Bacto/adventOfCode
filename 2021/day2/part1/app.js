const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf8');

const result = input
  .split('\n')
  .filter(v => v)
  .reduce(
    (accumulator, value) => {
      const action = value.replace(/^([a-z]+) [0-9]+$/, '$1');
      const count = parseInt(value.replace(/^[a-z]+ ([0-9]+)$/, '$1'));
      return {
        ...accumulator,
        [action]: accumulator[action] + count
      };
    },
    {
      forward: 0,
      up: 0,
      down: 0
    }
  );

console.log(result.forward * (result.down - result.up));
