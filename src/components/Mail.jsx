import { deleteDoc, doc } from "firebase/firestore";
import { IoMdArrowBack } from "react-icons/io";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

function Mail() {
    const navigate = useNavigate()

    const {selectedEmail} = useSelector(store=>store.appSlice)
    const params = useParams()

    const deleteMail = async (id) => {
        try {
            await deleteDoc(doc(db,"emails",id))
            navigate("/")
        } catch (error) {
            console.log(error);

        }
    }


  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div onClick={()=>navigate('/')} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdArrowBack size={"24px"} />
          </div>
          <div onClick={()=>deleteMail(params.id)} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdDeleteOutline size={"24px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size={"24px"} />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size={"24px"} />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{selectedEmail?.subject}t</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>{new Date(selectedEmail?.createdAt?.seconds*1000).toUTCString()}</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{selectedEmail?.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>{selectedEmail?.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
