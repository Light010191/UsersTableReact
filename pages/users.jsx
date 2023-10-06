import { useState } from 'react';
import Users from '../components/jshp/Users';

export default function AboutPage({propsUsers}) {
  const 
    [listUsers, setListUsers] = useState(propsUsers);
  return <Users propsUsers={listUsers} result={res => setListUsers(res)}/>;
}

export async function getStaticProps() {
  const propsUsers = 
    await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
  return { props: { propsUsers } }
}
