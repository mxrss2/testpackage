import { journey, step, monitor,  expect, beforeAll } from '@elastic/synthetics';



journey('Check BI Integration', ({ page, params }) => {
  // Only relevant for the push command to create
  // monitors in Kibana
  monitor.use({
    id: 'example-monitor',
    schedule: 10,
  });



  step('Log into application', async () => {
    await page.goto(params.url);
      await page.fill('input[name="ctl00$content$Login$txtLoginId"]', params.creds.username);
      await page.fill('input[name="ctl00$content$Login$txtPassword"]', params.creds.password);
      await page.click("id=ctl00_content_Login_btnLogin");
  });

  step('Go to the BI Web Page', async () => {
    await page.goto(params.dashboard_url, { waitUntil: "networkidle"});
    await page.waitForEvent("console");
    await page.screenshot({path: 'test.png'})
  });

});



