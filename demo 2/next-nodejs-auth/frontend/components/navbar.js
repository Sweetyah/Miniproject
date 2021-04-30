import Link from 'next/link'

const Navbar = () => (
    <div>
        <Link href="/"><a> <b>HOME </b></a></Link> |
        <Link href="/profile"><a> <b>ABOUT</b> </a></Link> |
        <Link href="/foo"><a> <b>SKILLE </b></a></Link> | 
        <Link href="/studentedit"><a> <b>RECORD MEMORIS</b> </a></Link> |
        <Link href="/getConfig"><a><b> CONTACE</b> </a></Link> | 
        <Link href="/register"><a> <b>REGISTER</b> </a></Link> |
        <Link href="/login"><a> <b>LOGIN</b> </a></Link> |
        <Link href="/logout"><a> <b>LOGOUT</b> </a></Link> 
        
    </div>
)

 

    export default Navbar