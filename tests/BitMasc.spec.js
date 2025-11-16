const { test, expect } = require('@playwright/test');

test('login_add_verify_logout', async ({ page }) => {

  // We are going to website now
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Select the 2nd product and store its name
const productName = await page.locator('.inventory_item_name').nth(1).innerText();

  // Click 2nd product's Add to Cart button
  await page.locator('.btn_inventory').nth(1).click();

  // Go to cart
  await page.click('.shopping_cart_link');

  // Verify item name
  const cartProductName = await page.locator('.inventory_item_name').innerText();
  expect(cartProductName).toBe(productName);

  // Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

});
