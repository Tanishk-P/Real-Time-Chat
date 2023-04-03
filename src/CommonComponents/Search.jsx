// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import MaleUser, { FemaleUser } from "../UserDetails/UserAvatar";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { db } from "../firebase";
// import { message } from "antd";

// function Search() {
//   const [username, setUserName] = useState('');
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(false);

//   const handleSearch = async () => {
//     const q = query(collection(db, "users", where("displayName", "==", username)));
//     console.log(q)
//     try {
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         setUser(doc.data());
//         console.log(doc.data());
//       });
//     } catch (error) {
//       setError(true);
//       message.error('Can/t find users');
//     }
//   };

//   const handleKey = (e) => {
//     if (e.code === "Enter") {
//       e.preventDefault(); // prevent the form submission
//       handleSearch();
//     }
//   };
  

//   return (
//     <div className="search">
//       <form className="searchForm">
//         <div className="searchBox">
//           <span className="prefix">
//             <FiSearch size={15} />
//           </span>
//           <input placeholder="Search" onKeyDown={handleKey} onChange={(e) => setUserName(e.target.value)} />
//         </div>
//       </form>
//       <div className="userInfo">
//         {user && <div className="userProfile">
//           <FemaleUser />
//           <span>{user.displayName}</span>
//         </div>}
//         {/* <div className="userProfile">
//           <MaleUser />
//           <span>Tanishk</span>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default Search;

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { Input, message } from "antd";
import { UserDetails } from "../UserDetails/UsersDetails";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const userDetails = UserDetails();

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const q = query(collection(db, "users"), where("displayName", "==", username));
      const querySnapshot = await getDocs(q);
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUser(users);
    } catch (error) {
      setError(true);
      message.error("Cannot find users");
    }
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId = userDetails.uid > user[0].uid ? userDetails.uid + user[0].uid : user[0].uid + userDetails.uid; 
    console.log(combinedId)
    try {
       const response = await getDoc(doc(db, "chats", combinedId));
       if (!response.exists()) {
        // create a chat in collection
        await setDoc(doc(db, "chats", combinedId),{ messages: [] });
        // create user chats 
        await updateDoc(doc(db, "userChats", userDetails.uid),{
          [combinedId + ".userInfo"] : {
            uid: user[0].uid,
            displayName: user[0].displayName,
            photoURL: user[0].photoURL
          },
          [combinedId + ".date"] : serverTimestamp()
        });
        await updateDoc(doc(db, "userChats", user[0].uid),{
          [combinedId + ".userInfo"] : {
            uid: userDetails.uid,
            displayName: userDetails.displayName,
            photoURL: userDetails.photoURL
          },
          [combinedId + ".date"] : serverTimestamp()
        });
       }
    } catch (error) {
      
    }
    setUser(null);
    setUsername('')
    //create user chats
  }

  return (
    <div className="search">
      <form className="searchForm" onSubmit={handleSearch}>
        <div className="searchBox">
          {/* <span className="prefix">
            <FiSearch size={15} />
          </span> */}
          <Input
            prefix={<FiSearch size={15} />}
            placeholder="Search"
            allowClear
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </form>
      {user && user.length > 0 && (
        <div className="userInfo" onClick={() => handleSelect} >
          <small style={{ color: '#a6a4df'}} >Found the following:</small>
          {user.map((user) => (
            <div key={user.uid} className="userProfile">
              <img src={user.photoURL} alt='pic' height={36} width={36} style={{ objectFit: 'cover', borderRadius: '20px'}} />
              <span>{user.displayName}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
