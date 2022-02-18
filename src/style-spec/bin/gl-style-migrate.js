#!/usr/bin/env node

import fs from 'fs';
import minimist from 'minimist';
import {format, migrate} from '../style-spec.js';

const argv = minimist(process.argv.slice(2));

if (argv.help || argv.h || (!argv._.length && process.stdin.isTTY)) {
    help();
    process.exit(0);
}

console.log(format(migrate(JSON.parse(fs.readFileSync(argv._[0])))));

function help() {
    console.log('usage:');
    console.log('  gl-style-migrate source.json > destination.json');
}
