#! /usr/bin/env node
const { program } = require('commander')
const { serverStart } = require("../dist/mock-server");

program
  .command('start [mock_port] [settings_port]')
  .description('start mock server')
  .action(serverStart)

program.parse()