import { Job } from '../types';
import { jobsData } from '@/dummt';
import SearchJobs from '@/app/components/searchJobs';

export default async function HomePage() {
  const jobs: Job[] = jobsData;

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-background text-foreground py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Caliber: Unlock Your Potential
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl font-light text-foreground-secondary max-w-3xl mx-auto">
            The future of internships is here. We&apos;re revolutionizing the
            way you find opportunities by bringing the best internships from
            trusted government sources directly to you.
          </p>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="bg-background-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose Caliber?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background-card p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Centralized & Effortless Access
              </h3>
              <p className="text-foreground-secondary">
                Forget jumping between multiple websites. We aggregate all the
                latest, verified internship listings into one, easy-to-use
                platform. We save you time so you can focus on what matters.
              </p>
            </div>

            {/* Card 2: Verified & Authentic */}
            <div className="bg-background-card p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Verified & Authentic Opportunities
              </h3>
              <p className="text-foreground-secondary">
                We cut through the noise. Every internship on our platform is
                sourced directly from official government portals, guaranteeing
                authenticity and legitimacy.
              </p>
            </div>

            {/* Card 3: Student-First Philosophy */}
            <div className="bg-background-card p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Student-First Philosophy
              </h3>
              <p className="text-foreground-secondary">
                Caliber was built for you. Our mission is to democratize access
                to high-quality internships, ensuring every student has the
                chance to kickstart their career with a meaningful role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar & Job Listings Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
          Find Your Perfect Internship
        </h2>
        <SearchJobs jobs={jobs} />
      </section>
    </main>
  );
}
