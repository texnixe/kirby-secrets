# Kirby and Vue

Vue is a js framework and if your site is not a js web app, you probably don't need it.

## Footer

Here is a starting point placed in the `footer.php`, which uses [Vue](https://vuejs.org/) and [Vue Router](https://router.vuejs.org/en/).

```html
<script src="https://unpkg.com/vue@2.5.2/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script> 

<div id="app">
    <router-view></router-view>
</div>

<script>
var Home = { template: "<div>Home</div>"}
var About = { template: "<div>About</div>"}

var routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

var router = new VueRouter({
    routes: routes,
    base: '/subfolder',
    mode: 'history'
});

var app = new Vue({
    el: '#app',
    router: router
})
</script>

</body>
</html>
```

## Config

In your `config.php`, you can add a route. No matter what page it is, it's always visiting home. It makes Vue to take over the routes with javascript.

```php
c::set('routes', array(
    array(
        'pattern' => '(.+)',
        'action'  => function() {
            return site()->visit('/');
        }
    )
));
```

### Sources

- [The Net Ninja - Vue JS 2 (44 parts)](https://youtu.be/5LYrN_cAJoA)
- [Vue.js Routing with vue-router](https://www.youtube.com/watch?v=Xktwf4yS2g0)
- [Learn Vue 2: Step By Step](https://laracasts.com/series/learn-vue-2-step-by-step)
- [Css tricks - Introduction to Vue](https://css-tricks.com/intro-to-vue-1-rendering-directives-events/)