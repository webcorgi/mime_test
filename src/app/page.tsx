// import Image from "next/image";
// import styles from "./page.module.css";
// import { useEffect } from "react";
// import { GetServerSideProps } from 'next';

export default function Home(){

  /* useEffect(() => {
    // Here you can send the IP to your API endpoint
    fetch('/api/global', {
      method: 'UPDATE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ip: props.ip }),
    })
  }, [props.ip]); */

  return (
    <div>
      dh test nextjs
    </div>
  );
}
/*
export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = context.req;
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  if (typeof ip === 'string') {
    ip = ip.split(',')[0].trim();
  } else if (Array.isArray(ip)) {
    ip = ip[0];
  }

  return {
    props: { ip }, // will be passed to the page component as props
  };
}
 */