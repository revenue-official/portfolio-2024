"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 3000);
  }, [router]);
  return <p>Sorry, something went wrong</p>;
}
