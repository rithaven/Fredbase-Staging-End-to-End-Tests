# Fredbase Automated Tests

This repository contains automated tests for the Fredbase login page, implemented using Cypress.

## How to Run the Tests

1. Install Node.js and Cypress (https://www.cypress.io).
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. Open Cypress Test Runner with `npx cypress open`.
5. Click on "login.spec.js" to run the tests.

## Test Cases

1. **should log in with valid credentials**
   - Description: Verifies successful login with valid email and password.
   - Steps: Navigate to login page, enter valid credentials, click login.
   - Expected: User logged in, see welcome message.

