import { useState } from 'react';
import Users from '../components/jshp/Users';

export default function AboutPage({propsUsers}) {
  const 
     [listUsers, setListUsers] = useState(propsUsers)
  return <Users propsUsers={propsUsers} result={res => setListUsers(res)}/>;
}

export async function getStaticProps() {
  const propsUsers = 
    await (await fetch('http://localhost:3333/users')).json();
  return { props: { propsUsers } }
}
