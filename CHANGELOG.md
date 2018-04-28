# Change Log

## [1.0.0] 2017-06-18
### Stable Original Release

## [2.0.0] 2018-05-01
## Vue Paper Dashboard Version 2
- Bootstrap 4 update
  - Migrate components to support BS4 as well as existing scss assets
- Vue CLI 3 update
  - Get rid of old webpack template and make use of newest vue-cli 3. The project has almost no configuration files and
  should work out of the box if you copy paste the `src` folder into a newly scaffolded Vue CLI 3 project.
- Overall project structure improvements
  - The project structure resembles a default [nuxt project structure](https://nuxtjs.org/)
  We have a breakdown of
  - `components` folder (only UI components)
  - `pages` folder which contains pages/views
  - `layout` folder which contains layout related components
  - `assets` folder which contains scss, images and fonts
  - `plugins` folder which has project related plugins
  - `router` folder which contains routes

- Component improvements
  - Use of `vue-notifyjs` for notifications
  - Improvements for Sidebar. Option to declare links as children inside Sidebar slot. SSR support.
  - Minor improvements for other components and SSR support for them
