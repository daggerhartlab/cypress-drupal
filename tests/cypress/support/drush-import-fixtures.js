const { spawn } = require('node:child_process');

const CreateUser = function(user) {
  console.log('------------------------------------------------------')
  console.log(user, typeof user);
  console.log('------------------------------------------------------')

  console.log('DOING: drush user:create role--administrator --mail="role--administrator@example.org" --password="pass"');
  const userCreate = spawn('lando', [
    'drush',
    'user:create',
    user.username,
    '--mail=' + user.mail,
    '--password=' + user.password,
  ], {cwd: '../'})

  userCreate.stdout.on('data', (data) => {
    console.log(data);
  })
  userCreate.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  })
  userCreate.on('close', (code) => {
    if (code) {
      console.log(`-- user:create process exited with code ${code}`);
    }

    console.log('DOING: drush user:role:add "administrator" role--administrator');
    user.roles.forEach((role) => {
      const addRole = spawn('lando', [
        'drush',
        'user:role:add',
        role,
        user.username,
      ], {cwd: '../'})

      addRole.stdout.on('data', (data) => {
        console.log(data);
      })
      addRole.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      })
      addRole.on('close', (code) => {
        if (code) {
          console.log(`-- user:role:add process exited with code ${code}`);
        }
      });
    })
  });
}

module.exports = {
  CreateUser
}
