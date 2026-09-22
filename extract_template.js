const fs = require('fs');
const html = fs.readFileSync('main.html', 'utf-8');
const templateMatch = html.match(/type="__bundler\/template">\s*([\s\S]*?)\s*<\/script>/);
if (templateMatch) {
    const template = JSON.parse(templateMatch[1]);
    fs.writeFileSync('extracted_template.html', template);
    console.log("Template extracted to extracted_template.html");
} else {
    console.log("No template found");
}
