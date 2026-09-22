const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, 'utf8');
    
    // Replace hardcoded light backgrounds with transparent
    content = content.replace(/background:\s*'#(fff|FFFFFF|FBFBFC|F7F8FA)'/gi, "background: 'transparent'");
    content = content.replace(/background:\s*'rgba\(255,255,255,0\.[0-9]+\)'/gi, "background: 'transparent'");
    content = content.replace(/background:\s*'rgba\(255,\s*255,\s*255,\s*0\.[0-9]+\)'/gi, "background: 'transparent'");
    
    // Replace text color with var(--color-ink)
    content = content.replace(/color:\s*'#16181C'/gi, "color: 'var(--color-ink)'");
    
    // Replace dark backgrounds with var(--color-ink) except if they are explicitly part of glassmorphism
    content = content.replace(/background:\s*'#16181C'/gi, "background: 'var(--color-ink)'");
    
    // Convert box-shadows that might be too harsh over video
    content = content.replace(/boxShadow:\s*'0\s+[0-9]+px\s+[0-9]+px\s+rgba\(22,24,28,\.0[0-9]+\)'/gi, "boxShadow: 'none'");
    
    // Specific fixes for Form.jsx inputs
    content = content.replace(/background:\s*'#fff'/gi, "background: 'transparent'");

    fs.writeFileSync(fp, content);
  }
});
console.log('Done replacing colors!');
