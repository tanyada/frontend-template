import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory
} from "react-router-dom"
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import routes from "./routes/routes"

const RenderRoute = (routes) => {
  const history = useHistory();

  if (routes.needsAuth && !localStorage.getItem("TOKEN")) {
    history.push("/login");
  }

  return <Route path={routes.path} component={routes.component}></Route>;
};

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {routes.length
              ? routes.map((routes, index) => (
                <RenderRoute {...routes} key={index} />
              ))
              : null}
              <Route path="*" component={() => (
                <div style={{ marginTop: 50, textAlign: "center" }}>
                  ไม่พบหน้าที่คุณค้นหา
                </div>
              )}
            /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
