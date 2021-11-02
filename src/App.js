import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles.styled";
function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

// avoid default export as it can lead to problem if we want to rename component in whole project
export default App;
