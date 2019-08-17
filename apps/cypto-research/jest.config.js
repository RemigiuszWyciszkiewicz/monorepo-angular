module.exports = {
  name: 'cypto-research',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cypto-research',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
