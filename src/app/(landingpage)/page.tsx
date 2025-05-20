"use client";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Homepage from ".";

export default function Home() {
  const router = useRouter();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const token = Cookie.get("token");
    if (!token) {
      router.replace("/login");
    } else {
      setloading(false);
    }
  }, [router]);

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  return (
    <div>
      <Homepage />
    </div>
  );
}
