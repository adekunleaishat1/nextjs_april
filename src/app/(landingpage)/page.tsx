"use client"
import Cookie from 'js-cookie'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
 const token =  Cookie.get("token")

  useEffect(() => {
     if (!token) {
      router.replace("/login")
     }
  }, [])
  

  return (
    <div>
       <h1>Welcome to your landingpage</h1>
    </div>
  );
}
