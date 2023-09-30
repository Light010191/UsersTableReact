export default function OneUser({ user }) {
  const
    { name, email, address: {city},
      phone, website, company: { name: cname }
    } = user;

  return (
    <>        
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{city}</td>
        <td>{phone}</td>
        <td>{website}</td>
        <td>{cname}</td>
      </tr>
    </>
  );
}