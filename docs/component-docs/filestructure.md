## File Structure

Once you have downloaded/cloned the the repo and opened it, you will find the following structure:

```
|-- vue-paper-dashboard
    |-- App.vue
    |-- main.js
    |-- assets
    |   |-- css
    |   |   |-- themify-icons.css
    |   |-- fonts
    |   |   |-- themify.eot
    |   |   |-- themify.svg
    |   |   |-- themify.ttf
    |   |   |-- themify.woff
    |   |-- img
    |   |   |-- apple-icon.png
    |   |   |-- background.jpg
    |   |   |-- favicon.png
    |   |   |-- new_logo.png
    |   |   |-- tim_80x80.png
    |   |   |-- vue-logo.png
    |   |   |-- faces
    |   |       |-- face-0.jpg
    |   |       |-- face-1.jpg
    |   |       |-- face-2.jpg
    |   |       |-- face-3.jpg
    |   |-- sass
    |       |-- paper-dashboard.scss
    |       |-- paper
    |           |-- _alerts.scss
    |           |-- _buttons.scss
    |           |-- _cards.scss
    |           |-- _chartist.scss
    |           |-- _checkbox-radio.scss
    |           |-- _dropdown.scss
    |           |-- _footers.scss
    |           |-- _inputs.scss
    |           |-- _misc.scss
    |           |-- _mixins.scss
    |           |-- _navbars.scss
    |           |-- _responsive.scss
    |           |-- _sidebar-and-main-panel.scss
    |           |-- _tables.scss
    |           |-- _typography.scss
    |           |-- _variables.scss
    |           |-- mixins
    |               |-- _buttons.scss
    |               |-- _cards.scss
    |               |-- _chartist.scss
    |               |-- _icons.scss
    |               |-- _inputs.scss
    |               |-- _labels.scss
    |               |-- _navbars.scss
    |               |-- _sidebar.scss
    |               |-- _tabs.scss
    |               |-- _transparency.scss
    |               |-- _vendor-prefixes.scss
    |-- components
    |   |-- Button.vue
    |   |-- Dropdown.vue
    |   |-- PaperTable.vue
    |   |-- index.js
    |   |-- Cards
    |   |   |-- Card.vue
    |   |   |-- ChartCard.vue
    |   |   |-- StatsCard.vue
    |   |-- Inputs
    |   |   |-- formGroupInput.vue
    |   |-- SidebarPlugin
    |       |-- MovingArrow.vue
    |       |-- SideBar.vue
    |       |-- SidebarLink.vue
    |       |-- index.js
    |-- layout
    |   |-- dashboard
    |       |-- Content.vue
    |       |-- ContentFooter.vue
    |       |-- DashboardLayout.vue
    |       |-- MobileMenu.vue
    |       |-- TopNavbar.vue
    |-- pages
    |   |-- Dashboard.vue
    |   |-- Icons.vue
    |   |-- Maps.vue
    |   |-- NotFoundPage.vue
    |   |-- Notifications.vue
    |   |-- TableList.vue
    |   |-- Typography.vue
    |   |-- UserProfile.vue
    |   |-- Notifications
    |   |   |-- NotificationTemplate.vue
    |   |-- UserProfile
    |       |-- EditProfileForm.vue
    |       |-- MembersCard.vue
    |       |-- UserCard.vue
    |-- plugins
    |   |-- globalComponents.js
    |   |-- globalDirectives.js
    |   |-- paperDashboard.js
    |-- router
        |-- index.js
        |-- routes.js

```

The folder you should care the most is the **SRC** folder which contains the code for the dashboard and each of its pages
