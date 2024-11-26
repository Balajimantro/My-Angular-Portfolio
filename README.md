# Portfolio

## Overview
This project is built with Angular 18, using SCSS and Bootstrap for styling. It is open-source, and anyone is welcome to clone and modify it.

## Cloning the Repository
To clone the repository with a shallow copy to reduce the size of the clone, use the following command:

```bash
git clone --depth 1 https://github.com/SebastianoFazzino/my-portfolio.git
```

## Installation

After cloning the repository, navigate to the project directory and install the necessary dependencies:

```bash
cd my-portfolio
npm install
```

## Running the Application

To run the application, use the following command:

```bash
ng serve
```

The application will be available at `http://localhost:4200/`.


## Deploying to GitHub Pages

The deployment to GitHub Pages is automated using a GitHub Action. Here is the configuration for the action:

```yaml
name: Angular Build and Deploy

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Build Angular app to prod
        working-directory: .
        run: npm install && npm run build:prod

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist/browser
          branch: deploy
          token: ${{ secrets.TOKEN }}
```

## Steps to Enable Deployment

- Generate a GitHub Token: Generate a personal access token on GitHub with repo and public_repo permissions.
- Add the Token to Repository Secrets: Save the generated token as a secret in your GitHub repository. Navigate to the repository settings, then to "Secrets and variables" under the "Security" section, and add a new repository secret named TOKEN.
- Push to Master: Whenever changes are pushed to the master branch, the GitHub Action will trigger. It will build the Angular project and deploy it to the deploy branch, which will be used for GitHub Pages.

Once the action is triggered, GitHub Pages will serve the content from the deploy branch, making your application accessible via the GitHub Pages URL associated with your repository.
