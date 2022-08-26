import { BaseHistory } from "./baseHistory";

class BrowserHistory extends BaseHistory {

  constructor(router) {
    super(router)
  }

}

export {
  BrowserHistory,
}