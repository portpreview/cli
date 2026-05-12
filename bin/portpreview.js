#!/usr/bin/env node

const port = process.argv[2];

console.log("PortPreview CLI is coming soon.");
console.log("Usage: npx portpreview <port>");
console.log("Example: npx portpreview 3000");
console.log("Website: https://portpreview.com");

if (port) {
  console.log(`Requested local port: ${port}`);
}
