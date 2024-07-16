import TaskBar from "./components/TaskBar";
import DesktopIcons from "./components/DesktopIcons";
import Desktop from "./components/Desktop/Desktop";

function App() {
  return (
    <div className="bg-[#008080] h-screen w-screen p-4">
      <div className="flex gap-2">
        <Desktop />
      </div>
      <TaskBar />
    </div>
  );
}

export default App;
