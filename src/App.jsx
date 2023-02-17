import NavBar from "./components/NavBar";
import { AppRoutes } from "./Routes";
import { PageArea } from "./styles";

function App() {
  return (
    <PageArea style={{ background: "#FFF" }}>
      <NavBar></NavBar>
      <AppRoutes />
    </PageArea>
  );
}

export default App;
