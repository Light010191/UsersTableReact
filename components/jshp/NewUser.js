
export default function NewUser({temp}) {
    
    let user={name:'', email:'', address: {city:''}, phone:'', website:'', company: { name:'' }};
    
    return (
        <>        
          <tr>
          <td><input onInput={e=>user.name=e.target.value} type='text'/></td>
          <td><input onInput={e=>user.email = e.target.value} type='text'/></td>
          <td><input onInput={e=>user.address.city = e.target.value} type='text'/></td>
          <td><input onInput={e=>user.phone = e.target.value} type='text'/></td>
          <td><input onInput={e=>user.website = e.target.value} type='text'/></td>
          <td><input onInput={e=>user.company.name = e.target.value} type='text'/></td>
          {/* <td><button  data-email={'1'} data-action="add">Add</button></td> */}
          {/* onClick={setTemp(user)} */}
          </tr>
        </>
      );
    }
    