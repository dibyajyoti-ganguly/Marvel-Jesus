import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="bg-zinc-300 min-h-screen w-full overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
  );
}
