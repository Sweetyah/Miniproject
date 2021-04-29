import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

const GetConfig = () => {
    return (<Layout>
        <Head>
            <title>Get Contact</title>
        </Head>
        <div className={styles.container}>
            <Navbar />
            <h2> CONTACT </h2>
            <b>Config: </b> {JSON.stringify(config)}
            <ul>
                <li>npm run dev  (for development mode)</li>
                <li>npm run build; npm run start  (for production mode)</li>
            </ul>
            <b><a href="https://web.facebook.com/nano.mas.73">ไปที่facebook</a></b>
            <b><a href="https://www.instagram.com/SAVIYAH WOHYOH">ไปที่instagram</a></b>
            <b><a href="https://tiktok.com/@saviiyah">ไปที่tiktok</a></b>
            
        </div>

    </Layout>)
}

export default GetConfig