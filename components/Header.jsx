import Link from "next/link";
import style from './Header.module.css';

const
  pages = [
    { href: '/', title: 'Home' },    
    { href: '/users', title: 'Users' },
    { href: '/calendar', title: 'Calendar' }
  ];
export default function Header() {
    return <header className={style.header}>
        <nav>
            <ul>
              {pages.map(({href,title})=><li key={href}><Link href={href}>{title}</Link></li>)}
            </ul>
        </nav>
    </header>
}