import TaskBar from "./components/TaskBar";
import DesktopIcons from "./components/DesktopIcons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
import Desktop from "./components/Desktop/Desktop";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-[#008080] h-screen w-screen p-4">
        <div className="flex gap-2">
          <Desktop />
        </div>
        <TaskBar />
      </div>
    </DndProvider>
  );
}

export default App;
