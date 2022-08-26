
class BaseHistory {

  constructor(router) {
    this.router = router
    this.current = createRoute(null,{
      path: "/"
    })
  }

  transitionTo(location,complete) {
    const route = this.router.match(location)
    if(this.current.path === location && this.current.matched.length === route.matched.length) {
      return
    }
    this.current = route
    this.callback && this.callback(route)
    complete && complete()
  }

  listener(callback) {
    this.callback = callback
  }

}

function createRoute(record,location) {
  const matched = []
  while(record) {
    matched.unshift(record)
    record = record.parent
  }
  return {
    ...location,
    matched,
  }
}

export {
  BaseHistory,
  createRoute,
}