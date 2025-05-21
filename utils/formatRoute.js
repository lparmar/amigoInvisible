/**
 * Function to format a route with the given params
 *
 * @param {String} route
 * @param {Object} routeParams
 *
 * @returns {String} formatted route
 *
 * @example
 * // Example usage of formatRoute function
 * formatRoute('users/:id', { id: 1 })
 * formatRoute('users/:id/:name', { id: 1, name: 'John' })
 * formatRoute(URL_CONSTANT, { id: 1, name: 'John' })
 * formatRoute('users/:id/:name', { id: 1, name: 'John', age: 20 }) // Error because age is not in the route
 * formatRoute('users/:id/:name', { id: 1 }) // Error because name is not in the params
 */
const formatRoute = (route, routeParams) => {
  if (route === null || route === '' || typeof route !== 'string') {
    throw new Error('Route is not a valid one, function expects a string')
  }

  if (routeParams === null || routeParams === '' || typeof routeParams !== 'object') {
    throw new Error('Params must be a JSON object')
  }

  if (Object.keys(routeParams).length === 0) {
    throw new Error('Params JSON cannot be empty')
  }

  if (!Object.keys(routeParams).every(key => route.includes(:${key}))) {
    throw new Error('Route params do not match with the route')
  }

  for (const routeParam in routeParams) {
    const variableRegrex = new RegExp(:${routeParam}, 'g')
    route = route.replace(variableRegrex, routeParams[routeParam])
  }

  return route
}

export { formatRoute }