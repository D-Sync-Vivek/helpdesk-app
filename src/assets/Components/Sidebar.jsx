import {
  LayoutGrid,
  Zap,
  Ticket,
  FileText,
  Database,
  Layers,
  User,
  History,
  BarChart2,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutGrid, id: "dashboard" },
    { icon: Zap, id: "automation" },
    { icon: Ticket, id: "tickets", active: true },
    { icon: FileText, id: "docs" },
    { icon: Layers, id: "stack" },
    { icon: Database, id: "data" },
    { icon: User, id: "users" },
    { icon: History, id: "history" },
    { icon: BarChart2, id: "analytics" },
    { icon: Settings, id: "settings" },
  ];
  return (
    <nav className="flex flex-col items-center w-16 h-screen bg-[#001D4C] py-4 border-r border-blue-900/30">
      <div className="mb-8 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
        C
      </div>
      <ul className="flex flex-col">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id} className="cursor-pointer">
              {item.active && (
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-amber-500 rounded-r-md" />
              )}
              <div
                className={`p-2 rounded-md transition-colors ${
                  item.active
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon size={22} strokeWidth={item.active ? 2.5 : 2} />
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
