/**
 * Node Package Manager (NPM)
 * open source libraries
 * npmjs.com
 * 
 * npm -v
 * version
 * 
 * npm i -g npm@5.5.1
 * installs npm version 5.5.1 for tutorials
 * 
 * before adding any node packages
 * need to create a package.json file in the directory
 * json file that includes basic information about the project
 * 
 * cd to directory and run 
 * npm init
 * 
 * can run
 * npm init --yes
 * 
 * npm module is found in load_modules library and added to package.json
 * 
 * more in index.js
 * 
 * all module dependencies in node_module
 * if the versions are different,
 * those dependencies are in their own foler in node_modules
 * 
 * if
 * "dependencies": {
    "mongoose": "^5.5.2",
    "underscore": "^1.9.1"
  }
  and you dont have the modules,
  you can run
  npm i

  and it will redownload those modules

  add file called .gitignore

  inside type node_modules/

  and this will ignore the node_modules folder.

  in package.json:
    "mongoose": "^5.5.2",
    "underscore": "^1.9.1"
  ^ is caret
  semantic versioning - semver
  5.5.2
  5 major version
  5 minor version
  2 patch version

  ^ is we are interested in any version that is 5

  ^5.5.2 = 5.x = ~5.5.x

  if you want the most recent version of a module, remove the ^

  npm list --depth=0
  shows only dependencies of your project

  npm view mongoose to see the package.json file of mongoose package

  npm view mongoose dependencies
  only shows value of mongoose dependencies
  npm view mongoose versions
  shows versions of mongoose

  npm i mongoose@2.4.2 downloads certain version

  to update local package:
  npm outdated
  npm update (only works for minor and patch releases / "wanted")
  
  npm i -g npm-check-updates
  gets the tool to check for most recent uupdates of packages

  npm-check-updates = ncu
  **this can break the module though **

  ncu -u updates (only updates package.json versions)
  afterwards
  npm i

  dependencies are development dependencies

  jshint looks for issues.
  npm i jshint --save-dev

    "devDependencies": {
    "i": "^0.3.6",
    "jshint": "^2.10.2"
  }

  development dependency and should not go into prouction environment

  only separated in package.json they are still both in node_modules

  npm uninstall mongoose
  npm un mongoose

  remove from package.json andd node_modules

  npm can run globally

  npm i -g npm
  updates npm to newest version

  npm -g outdated
  shows all outdated global packages

  npm un -g 
  uninstalls a global package

  creating a package, see lion-lib dir

  npm login
  logs into npm

  all characters of the name need to be lowercase

  after creating

  code .
  opens in vscode from cmd

  you cannot npm publish over a package with the same version number

  npm version major
  npm version minor
  npm version patch
  to update package version

  











 * 
 * 
 * 
 */