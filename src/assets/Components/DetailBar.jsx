import React, { useState } from "react";

const DetailBar = () => {
  const tasks = [
    {
      name: "Priority",
      type: "select",
      options: ["Low", "Medium", "High"],
      icon: "/circle.svg",
    },
    {
      name: "Assigned To",
      type: "select",
      options: ["Allie Harmon", "John Doe"],
      icon: "/avatar.svg",
      extra: "Assign to me",
    },
    {
      name: "Project",
      type: "select",
      options: ["Administrative", "Development"],
    },
    {
      name: "Ticket Type",
      type: "select",
      options: ["Task", "Bug", "Story"],
      icon: "/task.svg",
    },
    { name: "Due Date", type: "date" },
    {
      name: "Reporter",
      type: "select",
      options: ["Allie Harmon"],
      icon: "/avatar.svg",
    },
  ];

  const [formState, setFormState] = useState({
    Priority: "Medium",
    "Assigned To": "Allie Harmon",
    Project: "Administrative",
    "Ticket Type": "Task",
    "Due Date": "",
    Reporter: "Allie Harmon",
  });

  const endTitle = ["Tasks", "Collected Fields", "Linked Tickets ", "History"];

  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible((prev) => prev = !prev);
  }

  const handleChange = (name, value) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  if(!visible){
     return null;
  }

  return (
    <div className="bg-white flex flex-col gap-4 py-2 border-r border-gray-200 w-full font-sans">
      <div className="px-6 flex justify-between items-center">
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white px-3 py-1 transition-all">
          <span className="text-xs font-semibold uppercase tracking-wider border-r border-blue-400 pr-2">
            To Do
          </span>
          <img src="/downarrow.svg" alt="arrow" className="w-3 invert" />
        </button>
        <div className="text-gray-400 hover:text-gray-600 cursor-pointer text-lg font-light" onClick={handleVisible}>
          ✕
        </div>
      </div>

      <p className="border border-gray-300"></p>

      <div className="px-6 flex flex-col gap-2">
        {tasks.map((task) => (
          <div key={task.name} className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-800">
                {task.name}
              </label>
              {task.extra && (
                <span className="text-xs text-blue-500 font-medium cursor-pointer hover:underline">
                  {task.extra}
                </span>
              )}
            </div>

            <div className="relative flex items-center border border-gray-300 rounded-lg px-3 py-2 hover:border-gray-400 ">
              {task.icon && (
                <img
                  src={task.icon}
                  alt=""
                  className="w-5 h-5 rounded-full mr-3 object-cover"
                />
              )}
              {task.name === "Due Date" && (
                <img
                  src="/calendar.svg"
                  alt=""
                  className="w-5 h-5 mr-3 opacity-50"
                />
              )}

              {task.type === "select" ? (
                <select
                  value={formState[task.name]}
                  onChange={(e) => handleChange(task.name, e.target.value)}
                  className="w-full bg-transparent outline-none appearance-none text-sm text-slate-700 cursor-pointer font-medium pr-6"
                >
                  {task.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="date"
                  className="text-xs w-full bg-transparent outline-none text-gray-400 font-medium"
                  placeholder="mm/dd/yyyy"
                />
              )}

              <div className="absolute right-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-slate-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-800">Tags</span>
          <button className="text-xs px-1 rounded-md w-fit bg-gray-200">
            Add tag +
          </button>
        </div>
      </div>

      <p className="border border-gray-300"></p>
      
      <div className="flex flex-col gap-2">
        <div className="px-8 flex justify-between text-xs text-gray-500">
            <span>TASKS</span> <span>&gt;</span>
        </div>
        <p className="border border-gray-300"></p>
        <div className="px-8 flex justify-between text-xs text-gray-500">
            <span>COLLECTED FIELDS</span> <span>&gt;</span>
        </div>
        <p className="border border-gray-300"></p>
        <div className="px-8 flex justify-between text-xs text-gray-500">
            <span>LINKED TICKETS</span> <span>&gt;</span>
        </div>
        <p className="border border-gray-300"></p>

      </div>
      

    </div>
  );
};

export default DetailBar;
