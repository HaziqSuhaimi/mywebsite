import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
