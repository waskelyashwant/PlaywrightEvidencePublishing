import os
import time

os.system("npx playwright test testing.test.ts")
time.sleep(4)
os.system("npx playwright test Mailer.test.ts")