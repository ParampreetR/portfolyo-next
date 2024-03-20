"use client";

import Page404 from "@/components/404/Page404";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <Page404 />;
}
