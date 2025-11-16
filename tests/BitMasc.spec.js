const { test, expect } = require('@playwright/test');

test('login_add_verify_logout', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

const productName = await page.locator('.inventory_item_name').nth(1).innerText();

  await page.locator('.btn_inventory').nth(1).click();
  await page.click('.shopping_cart_link');
  const cartProductName = await page.locator('.inventory_item_name').innerText();
  expect(cartProductName).toBe(productName);

  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

});
