const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
    serverUrl: process.env.SONARQUBE,
    options: {
        'sonar.sources': '.',
        'sonar.login': process.env.USERNAME,
        'sonar.password': process.env.PASSWORD,
        'sonar.projectKey': 'projectAppName',
        'sonar.inclusions': 'public/**,src/**', // Entry point of your code
        'sonar.exclusions': 'node_modules/**,**/**.test.js,src/index.js,src/serviceWorker.js,src/redux/**',
        'sonar.projectName': 'projectAppName',
        'sonar.javascript.coveragePlugin': 'lcov',
        'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
    },
}, () => { });
