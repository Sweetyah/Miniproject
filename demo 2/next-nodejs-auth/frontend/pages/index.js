import Head from 'next/head' 
import Layout from '../components/layout' 
import useSWR, { mutate } from "swr";
import axios from "axios";
import React, { } from "react";
import styles from "../styles/Index.module.css";
import Navbar from "../components/navbar";
const URL = "http://localhost/api/students";
const URL_SEL = "http://localhost/api/purchase";
const fetcher = (key) => fetch(key).then((res) => res.json());
const index = () => {
  const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log("data", data);
  
  const selStu = async (id) => {
    let result = await axios.post(`${URL_SEL}/${id}`)
    mutate(URL, data);
  }

  
  return (
    <Layout>
       <Head>
        <title>My Portfolio</title>
    </Head>
    <div className={styles.container}><Navbar />
      <div className={styles.title}>
      <marquee bgcolor="#A9E0B8" direction="right" scrollamount="10" width="100%"><ins>My Portfolio</ins></marquee></div>
      {/*<div className={styles.list}>
        {showStudents()}
  </div>*/}
    </div>
    </Layout>
  );
};

export default index;
