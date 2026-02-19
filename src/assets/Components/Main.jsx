import React from "react";

const Main = () => {
  const icons = [
    "B.svg",
    "italic.svg",
    "underline.svg",
    "gallery.svg",
    "clip.svg",
    "pdf.svg",
    "comment.svg",
  ];
  return (
    <div className="bg-white flex flex-col gap-2 border-r border-gray-300 w-full">
      <div className="flex flex-col px-4">
        <div className="font-bold">Molesiae sape illum</div>
        <div className="text-xs text-gray-600 flex gap-15 justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src="/bug.svg" alt="bug" className="w-3" />
            <span className="text-xs">OPS-102 (026382) | Created 21/2/24 12:01 IST</span>
          </div>
          <div className="flex gap-3">
            <img src="/mail.svg" alt="mail" className="w-5" />
            <div className="flex gap-1">
              <img src="/eye.svg" alt="see" className="w-5" />
              <span>2</span>
            </div>
            <div className="flex">
              <img src="/avatar.svg" alt="avatar" className="w-5" />
              <img src="/avatar.svg" alt="avatar" className="w-5" />
            </div>
          </div>
        </div>
      </div>
      <p className="border border-gray-300"></p>

      {/* Reply Box */}
      <div className="text-sm px-4 w-full">
        <div className="border-2 border-gray-200 shadow-xl px-2 rounded-md">
          <div className="flex gap-10 mt-2">
            <div className="pb-3 border-b-3 border-blue-500">Public Reply</div>
            <div className="text-gray-500">Private Comment</div>
          </div>
          <p className="border border-gray-300"></p>
          <div className="py-3 flex justify-between items-center text-gray-400">
            <div>
              <span className="font-bold">To:</span>{" "}
              <span className="text-sm bg-blue-100 rounded-2xl px-2">
                Allison awesome@gmail.com
              </span>
            </div>
            <div>Cc</div>
          </div>
          <p className="border border-gray-300"></p>
          <div className="py-4">
            <textarea
              placeholder="Add a reply..."
              className="px-1 w-full h-30 font-semibold text-gray-400 outline-none"
            ></textarea>
            <div className="flex text-gray-400 font-semibold gap-5 justify-between">
              <div className="flex gap-5">
                {icons.map((icon) => (
                  <img
                    key={icon}
                    src={icon}
                    alt={icon}
                    className="w-6 opacity-60"
                  />
                ))}
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-2">
                  <span>Add to KB</span>
                  <input type="checkbox" className="h-7" />
                </span>
                <div className="px-1 bg-gray-300 rounded-md flex items-center">
                  <img src="/send.svg" alt="send" className="w-5 opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Box */}
      <div className="text-sm px-4 w-full">
        <div className="px-2 py-2 mt-2 border-2 border-gray-200 rounded-md">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src="/avatar.svg" alt="img" className="w-7" />
                Allie Harmon
              </div>
              <div className="text-gray-500 text-xs">Feb 9, 2022 10:31 AM</div>
            </div>
            <div className="flex justify-between items-center pl-8">
              <span className="text-xs text-gray-500">
                To Danny Amacher danny@gmail.com
              </span>
              <img
                src="/downarrow.svg"
                alt="downarrow"
                className="w-5 opacity-60"
              />
            </div>
          </div>
          <div className="mt-2 px-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            similique, accusamus quidem odio provident dolor molestias aperiam
            animi excepturi.
          </div>
          <div className="mt-2 px-8 flex gap-5">
            <button className="flex flex-col items-start px-2 w-50 bg-blue-100 border border-gray-400 rounded-md">
              <div className="font-semibold">Screen_shot.png</div>
              <div>16 Jun 2024, 10:34PM</div>
            </button>
            <button className="flex flex-col items-start px-2 w-50 bg-blue-100 border border-gray-400 rounded-md">
              <div className="font-semibold">Screen_shot.png</div>
              <div>16 Jun 2024, 10:34PM</div>
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-sm px-4 w-full">
        <div className="px-2 py-2 mt-2 border-2 border-gray-200 rounded-md">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src="/avatar.svg" alt="img" className="w-7" />
                Allie Harmon
              </div>
              <div className="text-gray-500 text-xs">Feb 9, 2022 10:31 AM</div>
            </div>
            <div className="flex justify-between items-center pl-8">
              <span className="text-xs text-gray-500">
                To Danny Amacher danny@gmail.com
              </span>
              <img
                src="/downarrow.svg"
                alt="downarrow"
                className="w-5 opacity-60"
              />
            </div>
          </div>
          <div className="mt-2 px-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            similique.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
