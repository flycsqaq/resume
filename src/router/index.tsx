import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Resume = lazy(() => import('../views/resume'))

const RootRouter = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route exact path="/" component={Resume} />
          <Redirect from="**" to="/"  />
        </Switch>
      </Suspense>
    </HashRouter>
  )
}

export default RootRouter