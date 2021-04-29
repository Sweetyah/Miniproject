import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Profile.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const Profile1 = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>My Profile</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <h1>My profile</h1>
                <div>
                    
                   ..... I am Saviiyah Wohyoh
                    <br/>
                    Student ID :5835512081
                    <br/>
                    
                    Computer Engineering
                    <br/>
                    
     prince of songkla university phuket campus.....
                   <br/>


                    <br/>
                </div>
            </div>
        </Layout>
    )
}

export default Profile1

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
