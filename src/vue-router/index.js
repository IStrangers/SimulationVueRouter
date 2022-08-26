import RouterView from './components/RouterView.js'
import RouterLink from './components/RouterLink.js'
import { createMatcher } from './createMatcher'
import { HashHistory } from './history/hashHistory'
import { BrowserHistory } from './history/browserHistory'

class VueRouter {

  constructor(options = {}) {
    const routes = options.routes || {}
    this.matcher = createMatcher(routes)
    this.mode = options.mode || "hash"
    this.history = this.mode === "hash" ? new HashHistory(this) : new BrowserHistory(this)
  }

  install(vue) {
    vue.component("RouterView",RouterView)
    vue.component("RouterLink",RouterLink)
    vue.mixin({
      beforeCreate() {
        this.$route = null
        this.$router.init(this)
      }
    })
    vue.config.globalProperties.$router = this
    this.vue = vue
  }

  init(app) {
    const history = this.history
    const setupHashListener = () => {
      history.setupListener()
    }
    history.transitionTo(history.getCurrentLocation(),setupHashListener)
    history.listener((route) => {
      app.$route = route
    })
  }

  match(location) {
    return this.matcher.match(location)
  }
}

export default VueRouter