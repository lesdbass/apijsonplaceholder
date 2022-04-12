import React from 'react'
import UserCards from './UserCards'
const UserList = ({users}) => {
   
console.log(users)
  return (
    <>
    <h1 className="H1API">API jsonplaceholder</h1>
    <div style={{display : 'flex' , flexWrap:'wrap' ,justifyContent: "space-around"}}>
      {users.map((el)=>{return <UserCards key={el.id} user={el} />})}

     
    </div>
    </>
  )
}

export default UserList


// console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);