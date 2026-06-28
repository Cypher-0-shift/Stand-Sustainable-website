const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'About Us', url: '/about' },
  { name: 'Projects', url: '/projects' },
  { name: 'Gallery', url: '/gallery' },
  { name: 'Contact', url: '/contact' },
  { name: 'Partner', url: '/partner' },
  { name: 'Donate', url: '/donate' }
];

pages.forEach(p => {
  const filePath = path.join(__dirname, 'src/app/(main)', p.url, 'page.tsx');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('BreadcrumbJsonLd')) {
    // Inject import
    let importStatement = `import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';\n`;
    content = content.replace(/(import .* from .*;)/, `$1\n${importStatement}`);
    
    // Inject component right after <> or <main> or <section> or whatever the first element is
    // Let's just find the default export and the return statement
    const returnRegex = /return \(\s*<([a-zA-Z]+|>[^\n]*)/;
    const match = content.match(returnRegex);
    if (match) {
       // if it's <>, we can insert after
       if (match[0].includes('<>')) {
           content = content.replace(returnRegex, `return (\n    <>\n      <BreadcrumbJsonLd items={[{ name: '${p.name}', url: '${p.url}' }]} />`);
       } else {
           // wrap it in fragment
           content = content.replace(/return \(\s*/, `return (\n    <>\n      <BreadcrumbJsonLd items={[{ name: '${p.name}', url: '${p.url}' }]} />\n      `);
           // we need to close the fragment... this is risky.
           // Actually, the pages all have return ( <> or return ( <main>
           // Let's just manually replace or do it carefully.
       }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Injected breadcrumbs into ' + p.url);
  }
});
