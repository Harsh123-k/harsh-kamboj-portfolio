import puppeteer from 'puppeteer-core';

async function captureSections() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle0' });

  const sections = ['about', 'experience', 'projects', 'skills', 'education', 'terminal', 'contact'];

  for (const s of sections) {
    const el = await page.$(`#${s}`);
    if (el) {
      await el.screenshot({ path: `section-${s}.png` });
      console.log(`Captured section: ${s}`);
    }
  }

  await browser.close();
}

captureSections().catch(err => {
  console.error(err);
  process.exit(1);
});
