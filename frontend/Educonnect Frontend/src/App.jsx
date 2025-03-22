import MainContent from "./MainContent";
import NavBar from "./NavBar";
import Post from "./Feed";
import SideBar from "./SideBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex justify-start">
        <SideBar className="sticky" />
        <MainContent />
      </div>
    </>
  );
}

export default App;
