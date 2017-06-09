/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: 'development',
    },
    'fastboot-s3': {
      accessKeyId: process.env.S3_ACCESS_ID,
      secretAccessKey: process.env.S3_ACCESS_KEY,
      bucket: process.env.S3_BUCKET,
      region: process.env.S3_REGIOn,
    },
  };

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
  }

  return ENV;
};


