import { argv } from 'node:process';

const parseArgs = () => {
    argv.forEach((value, i) => {
        if (i % 2 === 0) {
            const propName = value.replace('--', '');
            const propValue = argv[i + 1];
            console.log(`${propName} is ${propValue}`);
        }
      });
};

parseArgs();