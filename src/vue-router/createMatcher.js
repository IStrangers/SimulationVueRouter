import { createRouteMap } from "./createRouteMap"
import { createRoute } from "./history/baseHistory"

class Matcher {

  constructor(routes) {
    this.routes = routes
    const { pathList,pathMap } = createRouteMap(routes)
    this.pathList = pathList
    this.pathMap = pathMap
  }

  match(location) {
    const record = this.pathMap[location]
    return createRoute(record,{
      path: location
    })
  }

  addRoutes(routes) {
    createRouteMap(routes,this.pathList,this.pathMap)
  }
}

function createMatcher(routes) {
  return new Matcher(routes)
}

export {
  createMatcher,
}