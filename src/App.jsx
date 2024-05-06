import DesktopIcons from "./components/DesktopIcons";

function App() {
  return (
    <div className="bg-[#008080] h-screen w-screen p-4">
      <div>
        <DesktopIcons iconURL="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-4.png">
          Trash
        </DesktopIcons>
        <DesktopIcons />
        <DesktopIcons />
        <DesktopIcons />
        <DesktopIcons />
        <DesktopIcons />
      </div>
      <div className="bg-gray-400 w-full h-12 bottom-0 left-0 absolute">
        <div className="border flex items-center h-full pl-2">
          <button className="button h-8">Start</button>
        </div>
      </div>
    </div>
  );
}

export default App;
