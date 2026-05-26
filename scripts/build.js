const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const files = ["index.html", "app.js", "styles.css", "README.md"];
const assetSource = path.join(root, "assets");
const assetTarget = path.join(dist, "assets");

fs.mkdirSync(dist, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

if (fs.existsSync(assetSource)) {
  fs.mkdirSync(assetTarget, { recursive: true });
  for (const file of fs.readdirSync(assetSource)) {
    fs.copyFileSync(path.join(assetSource, file), path.join(assetTarget, file));
  }
}

console.log(`Built ${files.length} files into dist/`);
