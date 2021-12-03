const fs = require('fs');

const input = fs.readFileSync('../input.txt', 'utf8');

const entries = input
  .split('\n')
  .filter(v => v);

const gammaRate = entries
  .reduce(
    (accumulator, value, index, array) => {
      // Init
      if (!accumulator.length) {
        accumulator = new Array(value.length).fill(0);
      }

      value.split('')
        .forEach((subValue, index) => accumulator[index] += parseInt(subValue));
      return accumulator;
    },
    []
  )
  .map(value => value > Math.floor(entries.length / 2) ? 1 : 0)
  .join('');

// I'm ashame of this.
const epsilonRate = gammaRate.replace(/0/g, '2').replace(/1/g, '0').replace(/2/g, '1');

const gammaRateDecimal = parseInt(gammaRate, 2);
const epsilonRateDecimal = parseInt(epsilonRate, 2);

// console.log({ gammaRate, epsilonRate, gammaRateDecimal, epsilonRateDecimal });
console.log(gammaRateDecimal * epsilonRateDecimal);
