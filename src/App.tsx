import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import AIFeaturesShowcase from './components/AIFeaturesShowcase';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleGetDemo = () => {
    setShowComingSoon(true);
  };

  const handleLogin = () => {
    setShowComingSoon(true);
  };

  const handleStartTrial = () => {
    setShowComingSoon(true);
  };

  const handleGetStarted = () => {
    setShowComingSoon(true);
  };

  const handleBackToHome = () => {
    setShowComingSoon(false);
  };

  if (showComingSoon) {
    return <ComingSoon onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation onGetDemo={handleGetDemo} onLogin={handleLogin} />
      <Hero onGetDemo={handleGetDemo} />
      <TrustedBy />
      <Features />
      <AIFeaturesShowcase onGetStarted={handleGetStarted} />
      <HowItWorks onStartTrial={handleStartTrial} />
      <UseCases />
      <Testimonials />
      <CallToAction onGetDemo={handleGetDemo} onStartTrial={handleStartTrial} />
      <Footer />
    </div>
  );
}

export default App;