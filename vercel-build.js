// vercel-build.js
const { execSync } = require('child_process');

try {
  // Fix permissions
  console.log('Fixing permissions...');
  execSync('chmod -R 755 node_modules/.bin/*', { stdio: 'inherit' });
  
  // Run the build
  console.log('Starting build...');
  execSync('vite build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}