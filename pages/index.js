import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="w-screen ">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
