import { useState } from "react";

const TicketDetail = () => {
  const ticketDetailCard = [
    {
      name: "Soluta quam velit",
      month: "Jun 2",
      checkboxLable: "APPS-216",
      isActive: false,
      work: "To Do",
    },
    {
      name: "Molesiae sape illum",
      month: "Jun 2",
      checkboxLable: "OPS-102",
      isActive: true,
      work: "To Do",
    },
    {
      name: "Lorem, ipsum dolor",
      month: "Jun 1",
      checkboxLable: "APPS-216",
      isActive: false,
      work: "To Do",
    },
    {
      name: "Nhihil porro",
      month: "May 31",
      checkboxLable: "APPS-216",
      isActive: false,
      work: "To Do",
    },
    {
      name: "Lorem ipsum dolor sit",
      month: "May 31",
      checkboxLable: "APPS-216",
      isActive: false,
      work: "To Do",
    },
    {
      name: "dolor sit amet",
      month: "May 30",
      checkboxLable: "APPS-216",
      isActive: false,
      work: "To Do",
    },
    {
      name: "Lorem, ipsum dolor",
      month: "May 29",
      checkboxLable: "APPS-216",
      isActive: false,
      work: "Done",
    },
  ];

  const [visible, setVisible] = useState(true);
  
  const handleVisible = () => {
    setVisible((prev) => prev = !prev);
  }

  if(!visible){
    return null;
  }
  return (
    <div className="bg-white flex flex-col gap-3 py-2 rounded-tl-2xl border-r border-gray-300 w-full">
      <div className="flex justify-between gap-14 py-1 px-4">
        <div className="flex gap-2">
          <img src="/hamburger.svg" alt="hamburger" className="w-6" onClick={handleVisible} />
          <span>My Tickets</span>
        </div>
        <img src="/setting.svg" alt="setting" className="w-6" />
      </div>

      <p className="border border-gray-300"></p>
      <div className="px-4">
        <input
          type="text"
          placeholder="search tickets"
          className="px-2 py-1 border border-gray-400 rounded-md"
        />
      </div>
      <p className="border border-gray-300"></p>

      {ticketDetailCard.map((item, i) => (
        <div key={i} className={`${item.isActive ? "border-l-2 border-blue-500 bg-blue-200" : ""} text-sm `}>
          <div className="px-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="font-semibold hover:cursor-pointer">{item.name}</p>
              <span className="text-xs text-gray-500">{item.month}</span>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-xs text-gray-500">
                  {item.checkboxLable}
                </span>
              </div>
              <div className="text-xs flex items-center gap-2">
                <button
                  className={`${item.work == "Done" ? "text-green-500" : "text-blue-500"} py-0.5  bg-gray-200 rounded-md px-2 font-bold`}
                >
                  {item.work}
                </button>
                <img src="/avatar.svg" alt="avatar" className="w-5" />
                <img src="/avatar.svg" alt="avatar" className="w-5" />
              </div>
            </div>
          </div>
          <p className="border border-gray-300 mt-2"></p>
        </div>
      ))}
    </div>
  );
};

export default TicketDetail;
