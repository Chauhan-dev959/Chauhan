import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mrityunjay Chauhan | Automation & Telegram Bot Developer</title>
        <meta 
          name="description" 
          content="Mrityunjay Chauhan - Skilled automation and Telegram bot developer specializing in bulk content automation, movie bots, and scalable processing systems." 
        />
        <meta name="keywords" content="Telegram bot developer, automation, Python developer, movie bot, bulk upload, Mrityunjay Chauhan" />
        <link rel="canonical" href="https://mrityunjaychauhan.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mrityunjay Chauhan | Automation Developer" />
        <meta property="og:description" content="Building powerful automation systems and Telegram bots that handle thousands of files with precision." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mrityunjay Chauhan | Automation Developer" />
        <meta name="twitter:description" content="Building powerful automation systems and Telegram bots." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
