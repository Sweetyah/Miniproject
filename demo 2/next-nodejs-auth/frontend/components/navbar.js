import Link from 'next/link'

const Navbar = () => (
    <div>
        <Link href="/"><a> <b>Home </b></a></Link> |
        <Link href="/register"><a> <b>Register</b> </a></Link>  |
        <Link href="/login"><a> <b>Login</b> </a></Link> |
        <Link href="/profile"><a> <b>Profile</b> </a></Link> | 
        <Link href="/Education"><a> <b>Education</b></a></Link> |
        <Link href="/Travel"><a> <b>Travel</b> </a></Link> |
        <Link href="/Skills"><a><b> Skills</b> </a></Link> | 
        <Link href="/Contact"><a><b> Contact</b> </a></Link> |
        <Link href="/logout"><a> <b>Logout</b> </a></Link> 
        
    </div>
)

export default Navbar