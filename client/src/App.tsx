import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Preloader from "@/components/preloader";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [heroTransitionActive, setHeroTransitionActive] = useState(false);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    // Ativa a transição especial da Hero Section após o preloader
    setTimeout(() => {
      setHeroTransitionActive(true);
    }, 50);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
        <div className={heroTransitionActive ? 'hero-entrance-active' : ''}>
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
