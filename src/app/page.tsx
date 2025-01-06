import { ProgressIndicator } from '@/components/progress-indicator';
import { RegisterForm } from '@/components/sections/register-form';
import { Services } from '@/components/sections/services';
import { Coverage } from '@/components/sections/coverage';
import { Benefits } from '@/components/sections/benefits';
import { HeroSection } from '@/components/sections/hero';
import { AboutUs } from '@/components/sections/about';
import { FAQ } from '@/components/sections/faq';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ProgressIndicator />
      <HeroSection />
      <Benefits />
      <RegisterForm />
      <AboutUs />
      <Services />
      <Coverage />
      <FAQ />
    </main>
  );
}

