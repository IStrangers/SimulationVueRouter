

function createRouteMap(routes,pathList = [],pathMap = {}) {
  
  routes && routes.forEach(route => {
    addRouteRecord(route,pathList,pathMap)
  })

  return {
    pathList,
    pathMap,
  }
}

function addRouteRecord(route,pathList,pathMap,parentRecord) {
  let { path,component,children } = route
  if(parentRecord) {
    path = `${parentRecord.path}/${path}`
  }
  const record = {
    path,
    component,
    parent: parentRecord,
  }
  if(!pathMap[path]) {
    pathList.push(path)
    pathMap[path] = record
    if(children) {
      children.forEach(r => addRouteRecord(r,pathList,pathMap,record))
    }
  }
}

export {
  createRouteMap,
}