/**
 * --- Part Two ---
    Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

    Equipped with this new information, you now need to find the real first and last digit on each line. For example:

    two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen
    In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

    What is the sum of all of the calibration values?
 */

import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const calibrationData = readFileSync(path.join(__dirname, 'calibrationData.txt'));

const numbers = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
};

const calibrate = data => {
    let total = 0;
    data.split('\n').forEach(line => {
        // match first occurance
        const first = line.match(/\d|one|two|three|four|five|six|seven|eight|nine/)[0];

        // match last occurance by reversing the string first
        // this is needed to handle cases of shared wors like `twone`
        const last = line.split('').reverse().join('').match(/\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/)?.[0]?.split('').reverse().join('');
        
        total += parseInt(`${numbers[first] | first}${numbers[last]|last}`)
    });
    console.log('Calibrated!\nTrebuchet Calibration Number: ', total);
}

calibrate(calibrationData.toString());
