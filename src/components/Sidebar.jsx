import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {setOpen} from "../redux/appSlice"

const sideBarItem = [
  {
    icon: <LuPencil size={"24px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"24px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"24px"} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={"24px"} />,
    text: "Sent",
  },
];

function Sidebar() {

  const dispatch = useDispatch();

  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button onClick={()=>dispatch(setOpen(true))} className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-lg bg-[#0B57D0] text-white">
          <LuPencil />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sideBarItem.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:bg-gray-100 cursor-pointer my-2">
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
