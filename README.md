# Vue Microfrontends

## Local development -- one app at a time
With single-spa, it is preferred to run `npm run serve` in only one single-spa application at a time, while using a deployed
version of the other applications. This makes for an awesome developer experience where you can boot up just one
microfrontend at a time, not even having to clone, npm install, or boot up all of the other ones.

To try this out, clone the repo and run the following commands:
```sh
cd app1
npm i
npm run serve
```

Now go to http://coexisting-vue-microfrontends.surge.sh in a browser. In a browser console, run `localStorage.setItem('overrides-ui', true)`.
Refresh the page. Now click on the yellowish rectangle at the bottom right. Then click on `app1`. Change the module url to http://localhost:8081/
app.js. Then apply the override and reload the page. This will have change app1 to load from your localhost instead of from surge.sh.
As you modify the code locally, it will reload the page on coexisting-vue-microfrontends.surge.sh. See
https://github.com/joeldenning/import-map-overrides for more info on this.

## Local development -- all at once
It is preferred to only run one app at a time. But if you need to run them all locally, you can do so with the following instructions

```sh
# First terminal tab
cd root-html-file
npm install
npm run serve
```
```sh
# Second terminal tab
cd app1
npm install
npm run serve
```

```sh
# Third terminal tab
cd app2
npm install
npm run serve
```

```sh
# Fourth terminal tab
cd navbar
npm install
npm run serve
```

Now go to http://localhost:5000 in a browser. Note that you can change any of the ports for the projects by modifying the Import Map inside of
root-html-file/index.html.
