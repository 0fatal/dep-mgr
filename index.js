#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');
const { tmpdir } = require('os');
const { join } = require('path');
const fs = require('fs');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const packageName = argv._[0];
const npmRegistry = argv.registry
const forceLogin = Boolean(argv.login) || false;

if (!packageName) {
  console.error('Please provide a package name');
  process.exit(1);
}

if (!npmRegistry) {
  console.error('Please provide your own registry');
  process.exit(1);
}

// === Pack ===
const tmpDir = tmpdir();
const packOutput = execSync(
  `cd ${tmpDir} && npm pack ${packageName} --registry=https://registry.npmjs.org/ --no-ignore-scripts`,
  {
    encoding: 'utf-8',
    stdio: 'pipe',
  }
);

let filename = packOutput.trim();
const packagePath = join(tmpDir, filename);

// === Login ===
const isLoggedIn = execSync(`npm whoami --registry=${npmRegistry}`, {
  encoding: 'utf-8',
  stdio: 'pipe',
}).trim();

if (!isLoggedIn || forceLogin) {
  console.log('Please login to the npm registry:');
  execSync(`npm login --registry=${npmRegistry}`, {
    stdio: 'inherit',
  });
}

// === Publish ===
console.log(`Publishing ${filename} to ${npmRegistry}`);
execSync(`npm publish ${packagePath} --registry=${npmRegistry}`, {
  stdio: 'inherit',
});
fs.unlinkSync(packagePath);
console.log('publish success!')
