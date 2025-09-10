import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecommendationForm from './components/RecommendationForm';
import RecommendationResults from './components/RecommendationResults';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { UserProfile } from './types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleStartMatching = () => {
    setShowForm(true);
    // Smooth scroll to form
    setTimeout(() => {
      document.getElementById('form')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const handleFormSubmit = (profile: UserProfile) => {
    setUserProfile(profile);
    setShowForm(false);
    setShowResults(true);

    // Simulate AI processing time
    setTimeout(() => {
      document.querySelector('[data-results]')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 500);
  };

  const handleBackToForm = () => {
    setShowResults(false);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('form')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero onStartMatching={handleStartMatching} />

        <RecommendationForm isVisible={showForm} onSubmit={handleFormSubmit} />

        <div data-results>
          <RecommendationResults
            isVisible={showResults}
            onBack={handleBackToForm}
          />
        </div>

        <Features />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
