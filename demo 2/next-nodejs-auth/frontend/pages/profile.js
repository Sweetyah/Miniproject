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
                <h1>Favorite activity</h1>
                <div>
                    
                   ..... Watch a movie...
                    <br/>
                   
                   
                   <ul>
                       
                <li><b><a href="https://www.viu.com/ott/th/th/vod/61950/While-You-Were-Sleeping">While-You-Were-Sleeping</a></b></li>
                <li><b><a href="https://www.viu.com/ott/th/th/vod/40023/Dr-Romantic">Dr-Romantic</a></b></li>
                <li><b><a href="https://wetv.vip/th/play/l0035pd2kq4?vid=l0035pd2kq4">My Little Happiness</a></b></li>
            </ul>

                    <br/>
                </div>


                <div>
                    
                   ..... Sport...
                    <br/>
                   
                   
                   <ul>
                       
                <li><b><a href="https://www.youtube.com/watch?v=LbKvi2UZKFM">Volleyball</a></b></li>
                <li><b><a href="https://www.youtube.com/watch?v=6zgL0JYQr9A">Badminton</a></b></li>
                <li><b><a href="https://www.youtube.com/watch?v=6zgL0JYQr9A">Football</a></b></li>
            </ul>

                    <br/>
                </div>

                <div>
                    
                    ..... Social...
                     <br/>
                    
                    
                    <ul>
                        
                 <li><b><a href="https://www.facebook.com">Faccebook</a></b></li>
                 <li><b><a href="https://www.youtube.com">Youtibe</a></b></li>
                 <li><b><a href="https://www.tiktok.com">Tik Tok</a></b></li>
             </ul>
 
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
