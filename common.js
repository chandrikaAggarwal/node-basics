const chalk = require('chalk');

function bufferParse(data) {
  return data ? JSON.parse(data.toString()) : data;
}

function inProgressMessage(msg) {
    return chalk.yellow(msg);
}

function successMessage(msg) {
    return `${chalk.green.inverse('Success!')} ${msg}`;
}

function errorMessage(msg) {
    return `${chalk.red.inverse('Error!')}: ${msg}`;
}

module.exports = {
    bufferParse: bufferParse,
    inProgressMessage: inProgressMessage,
    successMessage: successMessage,
    errorMessage: errorMessage
};
