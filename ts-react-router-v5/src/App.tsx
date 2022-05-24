import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/">
          <Page1 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
