const vorpal = require('vorpal')();

const number = 10;

vorpal
  .command('guess [number]', 'Records your guess.')
  .action(function(args, callback) {
    this.log("ARGS:", args);
    callback();
  });

vorpal
  .delimiter('guesser$')
  .show();
