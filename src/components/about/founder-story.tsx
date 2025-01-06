import Image from 'next/image'

export default function FounderStory() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/"
              alt="NetGuru Fiber Founder"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Founder&quot;s Journey</h2>
            <p className="text-lg mb-4">
            &ldquo;After spending five years as a Virgin media engineer, two years as a software engineer, and gaining valuable experience in IT support, I realized there was a unique opportunity to bring the innovations and standards of industry giants to smaller, independent networks.&ldquo;
            </p>
            <p className="text-lg mb-4">
            &ldquo;I founded NetGuru Fiber with a mission to combine cutting-edge technology with personalized service. Our goal is to empower local communities with the same level of connectivity and support that big cities enjoy, but with the care and attention only a local provider can offer.&ldquo;
            </p>
            <p className="text-lg font-semibold">
              - Scott Jones, Founder & CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

