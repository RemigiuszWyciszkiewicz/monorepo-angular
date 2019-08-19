module.exports = {
  name: 'crypto-feature-start-page',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/crypto/feature/start-page',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
