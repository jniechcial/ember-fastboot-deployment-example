const S3Notifier = require('fastboot-s3-notifier');
const S3Downloader = require('fastboot-s3-downloader');
const FastBootAppServer = require('fastboot-app-server');

const S3_BUCKET = process.env.S3_BUCKET;
const S3_KEY = 'fastboot-deploy-info.json';

let notifier = new S3Notifier({
  bucket: S3_BUCKET,
  key: S3_KEY
});

let downloader = new S3Downloader({
  bucket: S3_BUCKET,
  key: S3_KEY
});

let server = new FastBootAppServer({
  notifier: notifier,
  downloader: downloader
});

server.start();
