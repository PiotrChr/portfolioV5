const chalk = require('chalk');

const logMessage = (message, level = 'info') => {
    const color =
        level === 'error'
            ? 'red'
            : level === 'warning'
            ? 'yellow'
            : level === 'info'
            ? 'blue'
            : 'white';
    console.log(`[${new Date().toISOString()}]`, chalk[color](message));
};

module.exports = {
    logMessage
};