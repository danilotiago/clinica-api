module.exports = {
    apps : [{
      name   : "clinica-api",
      script : "./dist/main.js",
      instances : 0,
      exec_mode : "cluster",
      merge_logs: true,
      //watch: true,
      env : {
        SERVER_PORT : 3000,
        DB_URL  : 'mongodb://localhost/clinica',
        NODE_ENV : 'development'
      },
      env_production: {
        SERVER_PORT : 3001,
        DB_URL  : 'mongodb://localhost/clinica',
        NODE_ENV : 'production'
      }
    }]
  }
  