# Asset Register

## How to run
* Run `yarn install`
* Run `yarn start`
  * This should start both `client` & `server`
  * `client` at http://localhost:3000
  * `server` at http://localhost:4000/graphql
* Browse to http://localhost:3000 

---
# Front End - Technical Assessment

Create a react app using typescript. The app must feature the requirements as listed below.

### The Asset Register

We'd like you to develop a react app: the Asset Register. The app displays a simple list of assets and allows the user to add new ones. The aim of this project is to demonstrate your skills with React and managing common use cases encountered in a web app.

### Documentation requirements

- Provide instructions to run your project (e.g. in a `README.md`).
  - [x] This README.md
- Source code for your project.
  - [x] This github repo
    
### Technical requirements

- React JS (latest version).
  - [x] v17.0.2
- Typescript.
  - [x] v4.6.3
- Include at least 1 additional library/package.
  - [x] chakra-ui
  - [x] react-hook-form
  - [x] few others
- Runs in any chrome-based browser.
  - [x] should run in most modern browser
- Unit tests.
  - [ ] not yet

### Business requirements

- Build a Asset Register app that displays a list of _assets_ and allows the user to add new ones and remove existing ones.
  - [x] assets list is displayed
  - [x] existing assets can be deleted one at a time
- An asset is an item that has a Name (a non-empty free text string), Quantity (a number), a Type (one of three options, 'Hardware', 'Software', 'Other') and a Date/time added (date/time when the asset was registered).
  - [x] implemented
- The app should include the structure as outlined below:
  - **Asset list screen**: Starts up to a screen with a list of assets (initially empty), and an add new asset button (label as you see fit), an existing asset can be removed via an associated button.
    - [x] implemented

  - **Add Asset screen**: When user clicks the add button from the asset list, a screen is displayed that allows the user to enter an asset name, quantity and type via form inputs. There is a save and cancel button. Cancel returns to the asset list screen and discards any entered information in the form. Save adds the asset to the exiting collection.
    - [x] implemented

### Assumptions

- Application state is not expected to be preserved between sessions.
  - [x] application state IS preserved between sessions, saved in SQLite
- Styling and layout are at your discretion, but consider the user experience.
- We don't expect you to spend more than 2-3 hours on this.
- A published build is not required, it can be assumed that assessors will have a react development environment (with `node.js` and `npm`) configured to run using npm react scripts.
  - [x] yarn is needed (instead of npm)

### Acceptance criteria

- As a user I want to add an asset and have it displayed on the asset list.
  - [x] implemented
- As a user I want to be able to delete/remove an asset from the asset list.
  - [x] implemented
- As a user I want to be able to set the asset type, location and name when adding an asset.
  - [x] implemented. Asset type, quantity and name are saved (not location)
- As a user I want my entered data to be reset when starting the add asset process.
  - [x] implemented
- As a user I want to see the date and time an asset was added to the asset list.
  - [x] implemented

### Notes

We're interested in code quality and performance (visually accurate, minimise compute (reduce redraws, etc.), unit test).

Share your work with us, either via a public GitHub repository, email or let us know if you want to share it some other way.

  
