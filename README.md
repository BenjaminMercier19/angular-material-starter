
#### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code.  The tools
help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We also get the AngularJS and Angular Material library code via `npm`

```
npm install
```

You should find that you have one new folder in your project:

 - `node_modules` - contains the npm packages for the tools we need


## Directory Layout

```
app/                    --> all of the source files for the application
  assets/app.css        --> default stylesheet
  src/                  --> all app specific modules
     main/              --> package for main features as menu
  index.html            --> app layout file (the main html template file of the app)
```


## Serving the Application Files

While AngularJS is client-side-only technology and it is possible to create AngularJS web apps that
don't require a backend server at all, we recommend serving the project files using a local web
server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via the `file://` scheme instead of `http://`.


## Updating Angular

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

## Development phase

Grunt, the Javascript task runner, has been installed in `package.json` to make your life easier.
A livereload on watch is set up in `Gruntfile.js`, don't forget to add the Chrome plugin of livereload.
To launch the code watcher enter this command line:

```
grunt watch
```

The default task is currently here to check your code syntax with jshint, concatenate it and even minify it in a build folder.
To launch this task run:
```
grunt
```

To find more information about Grunt please check out https://gruntjs.com

## Angular Material

This project's design is based on Angular Material framework. Angular Material works with Angular, it'll make your life easier while creating frontend components

For more information on Angular Material, check out https://material.angularjs.org/

## Contact

For more information on the project please contact [Benjamin Mercier][contact].


[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[live-server]: https://www.npmjs.com/package/live-server
[contact]: benjamin.mercier@progis.fr
