"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // SSR ile hydration uyuşmazlığını önlemek için
    return null;
  }

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button onClick={handleChangeTheme} variant="outline" size="icon">
      
      <Sun className="h-[1.2rem] w-[1.2rem] absolute dark:hidden transition-all duration-500 text-yellow-600" />
      
      <Moon className="h-[1.2rem] w-[1.2rem] invisible dark:visible text-slate-900 dark:text-slate-100" />
    
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;