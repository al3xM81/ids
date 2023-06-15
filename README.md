# Star Wars ImageGallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

Project running can be watched here:

http://ids.giorgana.mx

The project shows an image gallery with Star Wars characters obtained from a public API and its saved into component variable. Each image can be display it in a modal dialog with more information about character (just 7 or 8 additional data).

The gallery has a paginator feature to show only a limited number of images that can be customized by user or navigate through image pages.

There is a search input, if user write some characters in it, the images will be filtered to show only image names that matches user input.

There is also a button to add a new image to the component variable and its inserted at begining of array.

## Install dependencies

This project uses Angular Material UI version 15+. 

Install it this way:

`ng add @angular/material`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
