## Dependencies

Vue-paper-dashboard repo depends on the following packages as seen in package.json:

```json
"dependencies": {
    "bootstrap": "^4.0.0",
    "vue-clickaway": "^2.1.0",
    "chartist": "^0.11.0",
    "es6-promise": "^4.2.4",
    "vue": "^2.5.13",
    "vue-router": "^3.0.1",
}
```

Above the dependencies listed in package.json, vue-paper-dashboard uses:

- [Themify icons](https://themify.me/themify-icons)
- [Font awesome](http://fontawesome.io/icons/)
- [Montserrat fonts](https://fonts.googleapis.com/css?family=Montserrat)
- [Google maps](https://maps.googleapis.com/maps/api/js?libraries=places)


### Bootstrap
Is used as a general base css framework. No line of code from Bootstrap 4 was changed, so you don't have to worry about undesired effects in your work.

### Chartist [Live Demo](https://cristijora.github.io/vue-paper-dashboard/#/admin/overview)
For the implementation of graphic charts, we used Chartist plugin and added our custom styles. The plugin is free to download and use here.
Gion Kunz is the guy behind the project; he did an awesome job and we recommend using his stuff.
Besides all the great options for customisation that you have using it, it is also fully responsive.
We changed the colours, background and typography.

### vue-clickaway [Source](https://github.com/simplesmiler/vue-clickaway)

Is a third party Vue directive implemented by Denis Karabaza which can be found on [Github](https://github.com/simplesmiler/vue-clickaway)
and is used to detect when a click is performed outside of a specific element
We use this directive to detect when a click outside the toggle button for sidebar is performed (small screens)

### Vue and Vue-router
Are the main dependencies. Vue router is used to display individual pages in the dashboard.
