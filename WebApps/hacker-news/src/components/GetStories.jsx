// import GetIds from "./GetIds";

// function GetStories() { 

//     const fetchStories = (id) => {
//         return fetch(`https://hacker-
//         news.firebaseio.com/v0/item/${id}.json?print=pretty`)
//               .then((response) => response.json(),
//               console.log(response.json()),
//               storyArray.push(response.json()))
            
//       }
    
//     const ids = GetIds();

//     const storyArray =[];

//     for(let i = 0; i < ids.length; i++) {
//         const id = ids[i];

//         fetchStories(id)
        
//     }

    
  
  
//     return (
//         storyArray
//     );
//   }
  
//   export default GetStories;