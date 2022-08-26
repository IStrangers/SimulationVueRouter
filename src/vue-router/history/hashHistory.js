import { BaseHistory } from "./baseHistory";

class HashHistory extends BaseHistory {

  constructor(router) {
    super(router)
    this.ensureSlash()
  }

  ensureSlash() {
    if(window.location.hash) {
      return
    }
    window.location.hash = "/"
  }

  getCurrentLocation() {
    return window.location.hash.slice(1)
  }

  setupListener() {
    window.addEventListener("hashchange",() => {
      this.transitionTo(this.getCurrentLocation())
    })
  }

}

export {
  HashHistory,
}