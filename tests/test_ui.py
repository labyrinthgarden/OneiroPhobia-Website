import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import time

BASE_URL = "http://localhost:3000"

class OneirophobiaUITests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        options = Options()
        options.add_argument("--headless")
        cls.driver = webdriver.Chrome(options=options)
        cls.driver.implicitly_wait(5)

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    def setUp(self):
        self.driver.get(BASE_URL)

    # 1. Homepage loads and title is present
    def test_homepage_title(self):
        self.assertIn("Oneirophobia", self.driver.page_source)

    # 2. Homepage has Github link
    def test_homepage_github_link(self):
        link = self.driver.find_element(By.LINK_TEXT, "https://github.com/labyrinthgarden/Oneirophobia-Showcase")
        self.assertTrue(link.is_displayed())

    # 3. Homepage has logo image
    def test_homepage_logo_image(self):
        img = self.driver.find_element(By.XPATH, "//img[contains(@alt, 'logo image')]")
        self.assertTrue(img.is_displayed())

    # 4. Can navigate to login page
    def test_navigate_to_login(self):
        self.driver.get(BASE_URL + "/login")
        self.assertIn("Login", self.driver.page_source)

    # 5. Login page has email and password fields
    def test_login_fields_present(self):
        self.driver.get(BASE_URL + "/login")
        email = self.driver.find_element(By.XPATH, "//input[@type='email']")
        password = self.driver.find_element(By.XPATH, "//input[@type='password']")
        self.assertTrue(email.is_displayed())
        self.assertTrue(password.is_displayed())

    # 6. Login page has forgot password link
    def test_login_forgot_password_link(self):
        self.driver.get(BASE_URL + "/login")
        link = self.driver.find_element(By.LINK_TEXT, "Forgot password?")
        self.assertTrue(link.is_displayed())

    # 7. Login page has register link
    def test_login_register_link(self):
        self.driver.get(BASE_URL + "/login")
        link = self.driver.find_element(By.LINK_TEXT, "Create one")
        self.assertTrue(link.is_displayed())

    # 8. Login page shows error for empty email
    def test_login_empty_email_error(self):
        self.driver.get(BASE_URL + "/login")
        password = self.driver.find_element(By.XPATH, "//input[@type='password']")
        password.send_keys("password")
        btn = self.driver.find_element(By.XPATH, "//button[contains(text(),'Login')]")
        btn.click()
        time.sleep(1)
        self.assertIn("Please enter your email address", self.driver.page_source)

    # 9. Can navigate to register page
    def test_navigate_to_register(self):
        self.driver.get(BASE_URL + "/register")
        self.assertIn("sign up", self.driver.page_source.lower())

    # 10. Register page has name, email, password fields
    def test_register_fields_present(self):
        self.driver.get(BASE_URL + "/register")
        name = self.driver.find_element(By.XPATH, "//input[@type='text']")
        email = self.driver.find_element(By.XPATH, "//input[@type='email']")
        password = self.driver.find_element(By.XPATH, "//input[@type='password']")
        self.assertTrue(name.is_displayed())
        self.assertTrue(email.is_displayed())
        self.assertTrue(password.is_displayed())

    # 11. Register page shows error for invalid email
    def test_register_invalid_email_error(self):
        self.driver.get(BASE_URL + "/register")
        name = self.driver.find_element(By.XPATH, "//input[@type='text']")
        email = self.driver.find_element(By.XPATH, "//input[@type='email']")
        password = self.driver.find_element(By.XPATH, "//input[@type='password']")
        name.send_keys("Test User")
        email.send_keys("invalidemail@no")
        password.send_keys("Password123!")
        btn = self.driver.find_element(By.XPATH, "//button[contains(text(),'Sign Up')]")
        btn.click()
        time.sleep(1)
        self.assertIn("Please enter a valid email address", self.driver.page_source)

    # 12. Can navigate to downloads page
    def test_navigate_to_downloads(self):
        self.driver.get(BASE_URL + "/downloads")
        self.assertIn("Plataformas Disponibles", self.driver.page_source)

    # 13. Downloads page has platform buttons
    def test_downloads_platform_buttons(self):
        self.driver.get(BASE_URL + "/downloads")
        platforms = ["android", "windows", "linux", "macos"]
        for platform in platforms:
            btn = self.driver.find_element(By.XPATH, f"//h4[contains(text(), '{platform}')]")
            self.assertTrue(btn.is_displayed())

    # 14. Can navigate to account page
    def test_navigate_to_account(self):
        self.driver.get(BASE_URL + "/account")
        self.assertIn("Pre-sale", self.driver.page_source)

    # 15. Account page has logout button
    def test_account_logout_button(self):
        self.driver.get(BASE_URL + "/account")
        btn = self.driver.find_element(By.XPATH, "//button[contains(., 'Logout')]")
        self.assertTrue(btn.is_displayed())

if __name__ == "__main__":
    unittest.main()
