import { Command } from 'commander'

import { onCreate } from '../command/create'

// create cmd instance
const cmd = new Command()

// register a command
cmd
  .command('create')
  .description('Create a component template or configuration file')
  .option('-t --type <type>', 'create type, optional: component, lib-entry')
  .action(onCreate)

// 执行命令行参数的解析
cmd.parse()
