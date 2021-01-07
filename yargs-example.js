const { title } = require('process');
const yargs = require('yargs');

const notes = require('./notes');

yargs.command({
  command: 'list',
  description: 'Record list',
  handler: argv => console.log(notes.loadNotes()),
});

yargs.command({
  command: 'add',
  description: 'To add a record',
  builder: {
    title: {
      describe: 'New title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => notes.addNotes(argv.title, argv.body)
});

yargs.command({
  command: 'read',
  description: 'To read a record',
  builder: {
    title: {
      describe: 'New title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => console.log(notes.readNote(argv.title))
});

yargs.command({
  command: 'remove',
  description: 'To remove the record',
  builder: {
    title: {
      describe: 'New title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => notes.removeNote(argv.title)
});

// run command: node yargs-example.js list --sub="NodeJs"
yargs.parse();
