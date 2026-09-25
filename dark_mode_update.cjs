const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, 'utf8');
    
    // Replace dark text with light text for dark mode
    content = content.replace(/color:\s*'#4B4F58'/gi, "color: '#A1A1AA'");
    content = content.replace(/color:\s*'#5F636B'/gi, "color: '#D4D4D8'");
    
    // Any remaining #16181C (black) to var(--color-ink)
    content = content.replace(/color:\s*'#16181C'/gi, "color: 'var(--color-ink)'");
    
    // Backgrounds and borders
    content = content.replace(/background:\s*'#fff'/gi, "background: 'transparent'");
    content = content.replace(/background:\s*'#FBFBFC'/gi, "background: 'transparent'");
    content = content.replace(/background:\s*'#F7F8FA'/gi, "background: 'transparent'");
    content = content.replace(/border:\s*'1px solid #E9EAED'/gi, "border: '1px solid rgba(255,255,255,0.08)'");
    content = content.replace(/borderBottom:\s*'1px solid #E9EAED'/gi, "borderBottom: '1px solid rgba(255,255,255,0.08)'");
    content = content.replace(/borderBottom:\s*'1px solid #F1F2F4'/gi, "borderBottom: '1px solid rgba(255,255,255,0.08)'");
    content = content.replace(/borderTop:\s*'1px solid #E9EAED'/gi, "borderTop: '1px solid rgba(255,255,255,0.08)'");
    content = content.replace(/borderRight:\s*'1px solid #E9EAED'/gi, "borderRight: '1px solid rgba(255,255,255,0.08)'");
    
    // Fix specific backgrounds
    content = content.replace(/background:\s*'#E1E3E8'/gi, "background: 'rgba(255,255,255,0.1)'");
    content = content.replace(/background:\s*'#EEF1FE'/gi, "background: 'rgba(36,82,240,0.15)'");

    fs.writeFileSync(fp, content);
  }
});
console.log('Done replacing colors!');
