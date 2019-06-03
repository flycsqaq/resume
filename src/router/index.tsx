import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from './history'
import React, { Suspense, lazy } from "react";

const Resume = lazy(() => import('../views/resume'))

const RootRouter = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route exact path="/" component={Resume} />
          <Redirect from="**" to="/"  />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RootRouter