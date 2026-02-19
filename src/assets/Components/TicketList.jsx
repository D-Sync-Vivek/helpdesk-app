import React from 'react'

const TicketList = () => {
  const names = [
    {name: "My Tickets", inbox: 9, active: true},
    {name: "Past Due", inbox: 4},
    {name: "High Priority", inbox: 11},
    {name: "Unassigned", inbox: 98},
    {name: "All Tickets", inbox: 2192},
  ]
  return (
    <div className='flex flex-col gap-3 bg-[#f1f2f6] py-5 rounded-tl-2xl'>
        <div className='w-50 mx-2 py-2 rounded-md px-2 flex items-center gap-2 bg-gray-300'>
            <img src="/downarrow.svg" alt="downarrow" className='w-5 ' />
            <span className='text-xs'> TICKET VIEWS</span>
            
        </div>
        {names.map((item) => {
            return(
                <div className={`${item.active ? "bg-blue-500 text-white": ""} w-50 mx-2 py-1 rounded-md px-2 flex justify-between`} key={item.name}>
                    <div className='hover:cursor-pointer'>{item.name}</div>
                    <div className={`${item.active ? "bg-blue-900 text-white border-none" : "bg-white"} border border-white px-2 text-sm rounded-md`}>{item.inbox}</div>
                </div>
            )
        })}

        <div className='w-50 mx-2 py-1 rounded-md px-2 flex gap-2 opacity-60'>
            <img src="/headphone.svg" alt="downarrow" className='w-5 ' />
            <span className='text-xs hover:cursor-pointer'>LIVE CHATS</span>
        </div>
        <div className='w-50 mx-2 py-1 rounded-md px-2 flex gap-2 opacity-60'>
            <img src="/table.svg" alt="downarrow" className='w-5 ' />
            <span className='text-xs hover:cursor-pointer'>BOARDS</span>
        </div>

    </div>
  )
}

export default TicketList
