const fs = require('fs');
const zlib = require('zlib');
const html = fs.readFileSync('main.html', 'utf-8');
const manifestMatch = html.match(/type="__bundler\/manifest">\s*([\s\S]*?)\s*<\/script>/);
if (manifestMatch) {
    const manifest = JSON.parse(manifestMatch[1]);
    for (const [uuid, entry] of Object.entries(manifest)) {
        const buffer = Buffer.from(entry.data, 'base64');
        let uncompressed = buffer;
        if (entry.compressed) {
            uncompressed = zlib.gunzipSync(buffer);
        }
        console.log(`--- ${uuid} (${entry.mime}) ---`);
        console.log(uncompressed.toString('utf-8').slice(0, 500) + '...');
        fs.writeFileSync(`extracted_${uuid}.txt`, uncompressed);
    }
} else {
    console.log("No manifest found");
}
