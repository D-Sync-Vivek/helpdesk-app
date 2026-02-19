
const Navbar = () => {
  return (
    <div className="px-2 flex justify-between items-center h-15">
      <div className="text-white text-2xl">Helpdesk</div>
      <div className="">
        <input
          type="text"
          placeholder="Search Capacity"
          className="w-70 bg-[#02224e] px-3 py-1 text-white rounded-md "
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="w-24 h-8 flex items-center bg-blue-500 rounded-md text-white">
          <span className="border-r px-2">Create</span>
          <img
            className="px-2 w-8 invert"
            src="/downarrow.svg"
            alt="downarrow"
          />
        </button>
        <div className="border rounded-full h-7 w-7 text-white text-center">
          ?
        </div>
        <div>
          <img className="w-8 invert" src="/gift.svg" alt="gift icon" />
        </div>
        <img
          src="/vite.svg"
          alt="vite"
          className="border rounded-full h-7 w-7 text-center"
        />
      </div>
    </div>
  );
};

export default Navbar;
