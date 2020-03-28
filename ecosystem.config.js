module.exports = {
    apps : [{
      name   : "clinica-api",
      script : "./projects/clinica-api/dist/main.js",
      instances : 0,
      exec_mode : "cluster",
      env : {
        SERVER_PORT : 3000,
        DB_URL  : 'mongodb://localhost/clinica',
        NODE_ENV : 'development'
      }
    }]
  }
  