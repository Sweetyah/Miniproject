import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/contact.module.css'
import Navbar from '../components/navbar'

const GetConfig = () => {
    return (<Layout>
        <Head>
            <title>Get Contact</title>
        </Head>
        <div className={styles.container}>
            <Navbar />
            <h2> CONTACT </h2>

            <div>
                    
            
                    
                    
                    
                    <ul>
                        
                 <li><b><a>Contact Kathu, Kathu district</a></b></li>
                 <li><b><a>Prince of Songkla University , Phuket 83120</a></b></li>
                 <li><b><a >Mobile Phone: 095-4057011</a></b></li>
                 <li><b><a >E-mail: sasi_prapa@gmail.com</a></b></li>
             </ul>
 
                     <br/>
                 </div>
            
                 <br/> My Social
            <ul>
                <li><b><a href="https://web.facebook.com/nano.mas.73">Go facebook</a></b></li>
                <li><b><a href="https://www.instagram.com/SAVIYAH WOHYOH">Go instagram</a></b></li>
                <li><b><a href="https://tiktok.com/@saviiyah">Go tiktok</a></b></li>
            </ul>
            
           
            
        </div>

    </Layout>)
}

export default GetConfig