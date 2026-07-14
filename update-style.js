const fs = require('fs');

const path = 'C:/mini Desktop/Agency_Website/apps/app/privacy-policy/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Replace <ul> list styling to have green markers
content = content.replace(/list-disc pl-6 space-y-2 text-\[#d1d5db\]/g, 'list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]');
content = content.replace(/list-disc pl-6 space-y-3 text-\[#d1d5db\]/g, 'list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]');

// 2. Enhance the main Heading
content = content.replace(
  'text-4xl md:text-5xl lg:text-6xl font-bold text-white',
  'text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent'
);

// 3. Enhance boxes (Website administrator & Grievance Officer)
content = content.replace(
  /border-white\/10 p-6 md:p-8 rounded-xl/g,
  'border-[#00FF88]/20 bg-gradient-to-br from-[#161616] to-[#111111] hover:border-[#00FF88]/40 transition-colors duration-500 p-6 md:p-8 rounded-xl'
);
content = content.replace(
  /border-white\/10 p-6 rounded-xl mt-4/g,
  'border-[#00FF88]/20 bg-gradient-to-br from-[#161616] to-[#111111] hover:border-[#00FF88]/40 transition-colors duration-500 p-6 rounded-xl mt-4'
);

// 4. Enhance the table header
content = content.replace(
  /<thead className="bg-\[#1e1e1e\] text-white">/g,
  '<thead className="bg-[#1e1e1e] text-white border-b-2 border-[#00FF88]/30">'
);

// 5. Add smooth scrolling to the HTML element (we'll just append it to globals.css if it doesn't exist)
fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated page.tsx styling');

// Update globals.css for smooth scrolling
const cssPath = 'C:/mini Desktop/Agency_Website/apps/app/globals.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');
if (!cssContent.includes('scroll-behavior: smooth')) {
  cssContent += '\n\nhtml {\n  scroll-behavior: smooth;\n}\n';
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log('Added smooth scrolling to globals.css');
}
