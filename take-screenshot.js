import puppeteer from 'puppeteer-core';

async function capture() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  const page = await browser.newPage();
  
  // 1. Desktop Viewport
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'preview-desktop.png', fullPage: false });
  await page.screenshot({ path: 'preview-full.png', fullPage: true });

  // 2. Mobile Viewport
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
  await page.reload({ waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'preview-mobile.png', fullPage: false });

  await browser.close();
  console.log('Screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Error capturing screenshot:', err);
  process.exit(1);
});
