module.exports = {
  testDir: './e2e',
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:3000'
  },
  webServer: {
    command: 'node src/server.js',
    url: 'http://localhost:3000/login.html',
    reuseExistingServer: true,
  },
};