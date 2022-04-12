import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const UserCards = ({user}) => {
  return (
    <div class="justify-content-center" style={{ width: "30%" , margin : "10px" , heigth:"auto" }}>
    <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center"> 
        <h1 class="name mt-3">{user.name}</h1>
            <button class="btn btn-secondary"> 
              <img src="https://i.imgur.com/wvxPV9S.png" alt='Profile Picture' height="100" width="100" />
            </button>  
            <span class="idd"><b>id :</b> {user.id} </span>
            <div class="justify-content-center align-items-center gap-2"> 
              <span class="idd1"><b>Username :</b> {user.username} <br/></span>
              <span class="idd1"><b>Adsress :</b> {user.address.street} - {user.address.city} </span>
              <br/>
              <div>
                  <span class="idd1"><b>Phone :</b> {user.phone} <br/> <b>Email :</b> {user.email} </span>
                  </div>
 
              <span><i class="fa fa-copy"></i></span> 
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                 <span class="number">{user.company.name} </span> 
            </div>
            <div class=" d-flex mt-2"> 
              <button class="btn1 btn-dark"> <a href={user.website} target="_blank" rel="noreferrer"> Website </a></button> 
            </div>
            <div class="text mt-3"> 
              <span>{user.company.catchPhrase}</span> 
            </div>
            <div>  <Link to={`/user/${user.id}`} ><Button variant='primary'> User Profile </Button></Link></div>
        </div>
    </div>
</div>
    
  )
}

export default UserCards