import OneUser from './OneUser';
import { useState, useCallback} from 'react';
import NewUser from './NewUser';


export default function Users({ propsUsers, result = () => {} }) {
  
  const 
    [listUsers, setListUsers] = useState(propsUsers), 
    [temp,setTemp] = useState(), 
    setMyT = useCallback(res => { setTemp(res); result(res); }, [result]),    
       

    eventHandler=e=>{
      const userItem = e.target.closest('[data-email][data-action]');
      
        if(!userItem) return;
        const 
          { email, action }=userItem.dataset;

          switch(action){
            case 'delete' :
            setListUsers(old=>listUsers.filter(us=>us.email !==email)); 
            return;
            // case 'add' :
            // setListUsers(old=>listUsers.push(temp)); 
            // return;
          }          
    }    

 return <>
    <table onClick={eventHandler}>
      <caption>Users</caption> 
      <thead>
      <tr>
        <th>name</th>
        <th>email</th>        
        <th>address.city</th>
        <th>phone</th>
        <th>website</th>
        <th>company.name</th>        
      </tr>
      </thead> 
      <tbody>       
      {listUsers.map(user=><OneUser user={user} key={user.email}/>)}      
      <NewUser setTemp={setMyT}/>
      </tbody>    
    </table> 
  </>
}