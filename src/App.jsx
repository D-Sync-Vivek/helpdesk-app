import "./App.css";
import Sidebar from "./assets/Components/Sidebar";
import Navbar from "./assets/Components/Navbar";
import TicketList from "./assets/Components/TicketList";
import TicketDetail from "./assets/Components/TicketDetail";
import Main from "./assets/Components/Main";
import DetailBar from "./assets/Components/DetailBar";
function App() {
  return (
    <>
      <main className="flex min-h-screen bg-[#022a68]">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 flex bg-[#f1f2f6]">
            <TicketList/>
            <TicketDetail/>
            <Main/>
            <DetailBar />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
