import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/skille.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const Foo1 = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        fooUser()
    }, [])

    const fooUser = async () => {
        try {
            
            const users = await axios.get(`${config.URL}/foo`, {
                headers: { Authorization: `Bearer ${token}` }
            })
           
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>My Skills</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <h1>My Skills</h1>
                <div>
                ...........I am graduate seeking an entry-level position in developer. can writing software on website.
                <br>
                </br> I have the necessary qualifications and experience in the workplace, great experience with multiple computer languages, including, C ++, Java and HTML.<br/>
                    <br/>
                    Skills
                  
                    <ul>
                <li><b><a href="https://www.mindphp.com/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD/73-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3/2183-c%20%20-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.html">React</a></b></li>
                <li><b><a href="https://www.google.com/Java">Java and HTM</a></b></li>
                <li><b><a href="https://www.google/C++">C++</a></b></li>
            </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Foo1

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
