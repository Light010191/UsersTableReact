export default function OneUser({ user}) {
  const
    { name, email, address: {city},
      phone, website, company: { name: cname }
    } = user;

  return (
    <>        
      <tr className="user-row">
        <td>{name}</td>
        <td>{email}</td>
        <td>{city}</td>
        <td>{phone}</td>
        <td>{website}</td>
        <td>{cname}</td>
        <td><button data-email={email} data-action="delete">Delete</button></td>
      </tr>
    </>
  );
}
