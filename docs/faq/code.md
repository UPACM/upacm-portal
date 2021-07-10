# FAQ's on the Workings of the Site

## What are npm modules?

These are plugins you can use to make your site function better and make coding easier. For example, there exists an npm module that lets you do certain CSS animations on React components.

These modules are installed specifically for your codebase: they aren't installed to the site you're making; they're installed in the `/node_modules/` folder of your site.

To give you an idea of the purpose of `/node_modules/`, this folder is ignored by Git, and will not be pushed to the repository; only the following things are pushed to the repo: 
- the actual code (`/src/`)
- assets (`/static/`)
- config files (`gatsby-config.js`, `gatsby-node.js`, ignore files, etc.)
- and most importantly, `package.json` and `package-lock.json`.

The `package.json` and `package-lock.json` files are there to tell the site deployer that this site needs the node modules described in these two files to function.

## How do I get started with working on the site?

Run the following command:

```
npm install
```

This command will make npm take a look at `package.json` and `package-lock.json` and install all the needed modules in there for you.

## How do I install npm modules?

```
npm install <module-name>
```

Make sure you are installing a module that is:
- recently updated (at earliest, 3 months)
- widely used (a lot of downloads)
- as much as possible, independent of other modules.
- as much as possible, not depended on by other modules.
- Exceptions for the last two conditions are big modules that give a ton of features; make sure you need those features though.

> If it refuses to install, see the next question.

When you successfully install the module to your codebase, add the module name among the array of module names in `gatsby-config.js`, as well as the necessary configuration object.

## How do I update npm modules?
```
npm update
```
If a module refuses to be updated, that can be because of any of a following:
- the later version of the module you want to update depends on a new module, or
- the later version of said module requires a later version of an installed module.
- There exists an outdated module installed.
- There are modules dependent on the current version of the module you want to update.

In that case, update or uninstall the modules affecting the update process.


## How do I properly uninstall npm modules?

Make sure you safely remove all usage instances of said module, remove all configurations and the module name from `gatsby-config.js`, then run the following command:
```
npm uninstall <module-name>
```