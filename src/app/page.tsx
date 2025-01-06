import { HeroSection } from '@/components/sections/hero';
import { Benefits } from '@/components/sections/benefits';
import { RegisterForm } from '@/components/sections/register-form';
import { AboutUs } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Coverage } from '@/components/sections/coverage';
import { FAQ } from '@/components/sections/faq';
import { ProgressIndicator } from '@/components/progress-indicator';

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