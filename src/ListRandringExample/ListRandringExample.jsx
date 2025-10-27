function ListRandringExample(){

const users = [
{firstName : "Rizwan" , lastName : "Ali" , age : 26} ,
{firstName : "Waqar" , lastName : "Ali" , age : 32} ,
{firstName : "Azam" , lastName : "Ali" , age : 36}
]

const fullName = (users) =>{
  return users.firstName + " " + users.lastName;
}
    return (
        <>
        <h1>Person Details</h1>
        <ul>
        {users.map((user,index)=>( 
            <li>{fullName(user)} is {user.age} years old</li>
        ))}
        </ul>
        
       
        
        </>
    )
}

export default ListRandringExample