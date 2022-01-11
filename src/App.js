import "./App.css";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/* we use a ternary condition to display the sidebar
      and chat components if the user exists. We get the 
      user once the login through the login component */}
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : null}
    </div>
  );
}

export default App;
