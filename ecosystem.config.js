module.exports = {
  apps : [{
      name      : 'shenstone', // App name that shows in `pm2 ls`
      exec_mode : 'cluster', // enables clustering
      instances : 'max', // or an integer
      cwd       : './', // current directory
      script    : './node_modules/nuxt/bin/nuxt.js', // Script to execute
  }]
};