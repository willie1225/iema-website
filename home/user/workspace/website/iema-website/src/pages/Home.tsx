import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect root to /about as it serves as the main entry per structure, 
    // or we could build a dedicated landing. Given the structure "About" seems to be the main landing.
    setLocation("/about");
  }, [setLocation]);

  return null;
}
