const fs = require('fs');
const path = require('path');
require('dotenv').config();

const templatePath = path.join(__dirname, 'src/test.ctx.template.json');
const outputPath = path.join(__dirname, 'src/test.ctx.json');

fs.readFile(templatePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading template file:', err);
    return;
  }

  let fileContent = data;

  // Replace placeholders with corresponding environment variables dynamically
  const regex = /\${(.*?)}/g;
  fileContent = fileContent.replace(regex, (_, key) => {
    return process.env[key] || '';
  });

  fs.writeFile(outputPath, fileContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing output file:', err);
    } else {
      console.log('test.ctx.json created successfully');
    }
  });
});
