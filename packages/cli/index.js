const fs = require('fs');
const path = require('path');

const changelog = require('@js-lib/changelog');
const doc = require('@js-lib/doc');
const readme = require('@js-lib/readme');
const todo = require('@js-lib/todo');

function init(cmdPath, name, option) {
    changelog.init(cmdPath, name, option)
    doc.init(cmdPath, name, option)
    readme.init(cmdPath, name, option)
    todo.init(cmdPath, name, option)
}
function update(cmdPath, option) {
    todo.update(cmdPath, option)
}

exports.init = init;
exports.update = update;