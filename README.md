# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Repo Naming Convention

When cloning this repo make sure to name your new repo with the naming convention defined below.
**NOTE:** Do NOT check `Include all branches`.

`contentstack-extension-<component-name-slug>`

## Install Node Version Manager

Follow the instructions [here](https://github.com/nvm-sh/nvm#git-install) to install NVM on your local machine and hock it into your terminal.

## Install Dependencies

```sh
npm install
```

## Setup

### Change `.env.production`

- Change the `PUBLIC_URL` to point to S3 path location the component will be deployed to.
- Specificically `<component-repo-name>` should be replaced with the slug version of the component name.

### Change `./public/index.html`

- Update the `title` to relect the component name.
- Update the meta `description` with a proper description of the components purpose.

### Change `./public/manifest.json`

- Update the `short_name` to relect the component name.
- Update the meta `name` with a proper complete name of the component.

### Change `./package.json`

- Update `name` to reflect repo name of the new component.  The name should be in the form `@shopsmart/<component-repo-name>`.
- Add `description` to describe custom component.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Runs all available linting tools for JS, HTML, & CSS

## Learn More

To learn about [Contentstack UI SDK](https://github.com/contentstack/ui-extensions-sdk/blob/2.2.0/docs/ui-extensions-api-reference.md)

To learn about implementing [Contentstack Venus Library Components](https://www.contentstack.com/docs/developers/venus-component-library/)

To see Venus library components [Venus Storybook](https://venus-storybook.contentstack.com/)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
