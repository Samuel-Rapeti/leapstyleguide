# Playplace

## Developer Technologies Utilized

- [ReactTS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Yarn](https://yarnpkg.com/)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)
- [IconFinder](https://www.iconfinder.com/)
  > # Extentions for VSCode
  >
  > - [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
  > - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Setup local environment

1. Set up .env file with the following
   ```
        REACT_APP_BASE_URL=https://leap360-marketing-website.uc.r.appspot.com/api
   ```
2. Run `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
   > This is needed to properly build the tailwind
3. Run `yarn install`
4. Run `yarn start` to start your environment

# Folder Structure

## ./api

All of the API's documented in the [Sawgger](https://leap360-marketing-website.uc.r.appspot.com/api-docs) documentation have been ported over to the /api folder and seperated into their own respective folders based on their controller.

There are a few that were not in the document and are labeled as such.

> This is true as of: Septeber 15th, 2021
