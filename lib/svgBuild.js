const shapes = require('./shapes.js');

function createLogo(title, tasks = []) {
  const header = new Header().render();
  const taskListItems = tasks.map(
    (t) => new TaskListItem([t.text], t.priority)
  );
  const taskList = new TaskList(taskListItems).render();

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${shape} fill=${fill} />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
  `;
}

module.exports = { createLogo };
