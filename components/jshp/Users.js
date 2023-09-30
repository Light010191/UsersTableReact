import OneUser from './OneUser';

export default function Users({ propsUsers }) {
  
  return <>
    <table>
      <caption>Users</caption>
      <tr>
        <th>name</th>
        <th>email</th>        
        <th>address.city</th>
        <th>phone</th>
        <th>website</th>
        <th>company.name</th>        
      </tr>
      {propsUsers.map((user,key) => <OneUser user={user} key={key} />)}            
    </table> 
  </>
}