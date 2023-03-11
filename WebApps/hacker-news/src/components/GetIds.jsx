// import React, { useEffect, useState } from "react";
// import { getData } from "../service";

// function GetIds() { 
//   const [ids, setIds] = useState();

//   const fetchIds = async () => {
//     const response = await getData("https://hacker-news.firebaseio.com/v0/topstories.json");
//     setIds(response);      
//   }

//   useEffect(() => {
//     fetchIds()
//   }, []);
  

//   return (
//     <div>
//       {ids.map((id) => (
//         <div>
//           <h1>{id}</h1>
//         </div>

//       ))}
//     </div>
//   );
// }

// export default GetIds;