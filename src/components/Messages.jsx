import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

function Messages() {
  // console.log("Messages component rendered");



  const {searchText,emails} = useSelector(store=>store.appSlice)
  const [tempEmial,setTempEmail] = useState(emails)
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    try {
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log(allEmails);
        dispatch(setEmails(allEmails));
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  }, []);

  useEffect(()=>{
    const filteredMail = emails?.filter((email)=>{
      return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase())
    })
    setTempEmail(filteredMail)
  },[searchText,emails])

  return (
    <div>
    {
      tempEmial && tempEmial?.map((email)=> <Message email={email}/>)
    }

    </div>
  );
}

export default Messages;
