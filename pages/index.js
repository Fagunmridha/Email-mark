import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Review from "@/components/review";
import FeatureCard from "@/components/feature-card";
import BusinessCard from "@/components/business-card";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-[2200px] px-6">
      {/* <Navbar /> */}

      <section className="py-14 flex flex-col justify-center items-center">
        <div className="max-w-[700px] text-center">
          <h1 className="md:text-[125px]  text-[72px] font-extrabold md:font-bold text-[#222222] leading-none">
            Better <br />
            Email
          </h1>
          <p className="text-[18px] md:text-[20px] py-8 font-normal text-[#666666]">
            Tired of fighting with nightmarish email marketing software? 😳 Join
            thousands of businesses making the switch to an easier way to do
            mass email:
          </p>
          <button className="text-[18px] font-normal py-3 text-[#333333 bg-blue-500 text-white px-3  rounded-xl">
            Join now--Free
          </button>
        </div>
        <div className="flex flex-col items-center justify-center py-10">
          <Image
            src="/images/email-examples.webp"
            alt="dashboard"
            width={1300}
            height={1300}
          />
          <Image
            src="/images/dashboard.png"
            alt="dashboard"
            width={1300}
            height={1300}
            className=" shadow-2xl rounded-xl "
          />
        </div>
        <div className=" py-10">
          <div className="max-w-[1200px]">
            <h2 className="text-3xl md:text-6xl font-semibold md:font-bold text-gray-300">
              <span className="text-[#222222]">Audienceful</span> is email
              marketing re-invented for the 2020s. It's multiplayer, lightweight
              and setup for best practices by default.
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 py-6">
              <Review
                review="...Holy sh*t this is fantastic…I'm really impressed so far. You all have built something special here."
                name="Matthew (@Whale)"
                designation="Founder at ReallyGoodEmails.com"
                img="/images/shark.jpg"
              />
              <Review
                review="So much easier to use than Mailchimp...has already saved us hundreds of hours."
                name="Andy Karp"
                designation="Marketing Consultant"
                img="/images/man.webp"
              />
              <Review
                review="I love products like Audienceful - it hints at a better future, connecting creatives with richer workflows."
                name="Kelly Smith"
                designation="Chief Digital Officer, Athletic Greens"
                img="/images/mewn-2.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-7 gap-4">
        <Image
          src="/images/1-mccann.webp"
          alt="1-mccann"
          width={100}
          height={100}
          className=""
        />
        <Image
          src="/images/betterodds.png"
          alt=" Betterodds"
          width={100}
          height={100}
          className="hidden md:block"
        />
        <Image
          src="/images/Afterwork.webp"
          alt=" Afterwork"
          width={100}
          height={100}
        />
        <Image
          src="/images/capitalminded.webp"
          alt=" Capital"
          width={100}
          height={100}
        />
        <Image
          src="/images/cl-makebuild.webp"
          alt=" Cl-Make Build"
          width={100}
          height={100}
          className="hidden md:block"
        />
        <Image
          src="/images/1-mccann.webp"
          alt="1-mccann"
          width={100}
          height={100}
        />
        <Image
          src="/images/cl-moov.webp"
          alt=" Cl-moov"
          width={100}
          height={100}
          className="hidden md:block"
        />
        <Image
          src="/images/cl-signature.webp"
          alt=" Cl-signature"
          width={100}
          height={100}
        />
        <Image
          src="/images/cl-vivo.webp"
          alt=" Cl-vivo"
          width={100}
          height={100}
          className="hidden md:block"
        />
        <Image
          src="/images/joeandjuice.webp"
          alt=" Joeand"
          width={100}
          height={100}
        />
        <Image
          src="/images/Mena.webp"
          alt=" Mena"
          width={100}
          height={100}
          className="hidden md:block"
        />
        <Image
          src="/images/n-webflow.webp"
          alt=" webflow"
          width={100}
          height={100}
        />
        <Image
          src="/images/new-polaris.webp"
          alt="1-mccann"
          width={100}
          height={100}
        />
        <Image
          src="/images/ogilvy.webp"
          alt=" ogilvy"
          width={100}
          height={100}
          className="hidden md:block"
        />
        <Image src="/images/soho-2.webp" alt="soho" width={100} height={100} />
        <Image
          src="/images/qnologyai.webp"
          alt=" qnologyai"
          width={100}
          height={100}
        />
        <Image src="/images/spike.webp" alt=" spike" width={100} height={100} />
        <Image src="/images/stir.webp" alt=" stir" width={100} height={100} />
        <Image
          src="/images/t-mobileblk.webp"
          alt=" t-mobileblk"
          width={100}
          height={100}
        />
        <Image
          src="/images/within.webp"
          alt=" within"
          width={100}
          height={100}
        />
        <Image
          src="/images/Afterwork.webp"
          alt=" Afterwork"
          width={100}
          height={100}
        />
      </section>

      <section className="">
        <div className="flex flex-col md:flex-row items-center mb-10 justify-center">
          <Image
            src="/images/webflow.webp"
            alt="webflow"
            width={1000}
            height={1000}
          />
          <p className="md:text-[38px] text-xl font-bold text-gray-300 md:leading-10 md:px-40">
            <span className="text-black">Easy as writing a doc.</span> No more
            clunky email builders. Collaborate live with your team like you're
            in Notion or Google Docs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/templates.webp"
            alt="templates"
            width={1200}
            height={1200}
          />
          <p className="md:text-[38px] text-xl mt-10 font-bold md:leading-10 text-gray-300 md:px-52">
            <span className="text-black">
              Branded, modern email in 1 click.
            </span>
            Setup a simple email designe system and never hassel with template
            again. Everything you send is accesable,mobile frist,
            deliverability-optimized and, and dark-mood-friendly.
          </p>
        </div>
      </section>

      <section className=" md:max-w-[1500px] py-40">
        <div className="flex md:flex-row flex-col items-center  justify-between ">
          <p className="md:text-[38px] text-3xl  font-bold text-cyan-950 md:px-[250px]">
            <span className=" text-red-400"> Multiple workspaces. </span>Create
            custom spaces for all of your businesses or clients and easily
            switch between them.
          </p>
          <Image
            src="/images/workspaces.webp"
            alt=""
            width={600}
            height={600}
            className=" rounded-3xl"
          />
        </div>

        <div className=" flex flex-col items-center justify-center py-20">
          <Image
            src="/images/filter.webp"
            alt=""
            width={900}
            height={900}
            className="rounded-3xl"
          />
          <p className="md:text-[38px] text-3xl font-bold text-cyan-950 md:px-[300px] items-center justify-center mt-20">
            Different emails for different groups. Segment your subscribers into
            multiple audiences with tags, custom fields and powerful
            conditionals.
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-center  justify-between ">
          <p className="md:text-[38px] text-3xl  font-bold text-cyan-950 md:px-[250px]">
            Grow faster. Collect signups with forms, use that data to
            personalize emails, and track per-subscriber events and analytics.
          </p>
          <Image
            src="/images/audienceful-forms3.webp"
            alt=" audience"
            width={600}
            height={600}
            className=" rounded-3xl"
          />
        </div>
      </section>

      <section className=" bg-slate-200 px-28">
        <div className="flex flex-col  items-center justify-center mb-20">
          <p className="text-4xl font-bold px-[400px] mb-10 text-white">
            <span className="text-black"> Automate email sequences.</span>{" "}
            Create simple drip sequences for any use case, including onboarding,
            lead magnets, email courses, trial nurturing...anything.
          </p>
          <Image
            src="/images/builder.webp"
            alt="builder"
            width={700}
            height={700}
            className=" rounded-3xl"
          />
        </div>
        <div className="flex flex-row  items-center justify-center">
          <Image
            src="/images/feature-webflow.webp"
            alt="feature"
            width={700}
            height={700}
            className=" rounded-3xl"
          />
          <p className="text-4xl font-bold px-[250px] text-white">
            <span className="text-black"> Publish to your website.</span>{" "}
            Cross-post emails and SEO content directly to CMS platforms like
            Webflow.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <p className="text-4xl px-[250px] font-bold text-white">
            <span className="text-black">Integrate anywhere. </span>‍Sync data
            and contacts from your CRM, Payment Processor, and 4000+ tools via
            Zapier or API.
          </p>
          <Image
            src="/images/integrations.webp"
            alt="integrations"
            width={700}
            height={700}
            className="rounded-3xl"
          />
        </div>
        <div className="items-center justify-center flex flex-col mt-20">
          <h3>...and much more. ‍‍Join thousands making the switch.</h3>
          <div className="grid grid-cols-3 gap-6">
            <FeatureCard
              icon="/icon/deliverability.svg"
              title="Deliverability by Mailgun®"
              subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            />
            <FeatureCard
              icon="/icon/sla.svg"
              title="Deliverability by Mailgun®"
              subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            />
            <FeatureCard
              icon="/icon/api.svg"
              title="Deliverability by Mailgun®"
              subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            />
            <FeatureCard
              icon="/icon/mergetags.svg"
              title="Deliverability by Mailgun®"
              subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            />
            <FeatureCard
              icon="/icon/support.svg"
              title="Deliverability by Mailgun®"
              subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            />
            <FeatureCard
              icon="/icon/personalization.svg"
              title="Deliverability by Mailgun®"
              subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            />
          </div>
        </div>
      </section>

      {/* <section>
        <h2>Powering businesses of all shapes and sizes.</h2>
        <div>
          <BusinessCard
            img="/images/joe.webp"
            badge="Retall"
            subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            icon="/images/cl-joe.webp"
          />
          <BusinessCard
            img="/images/weekend.webp"
            badge="Finance"
            subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            icon="/images/signatureblock.webp"
          />
          <BusinessCard
            img="/images/soho.webp"
            badge="Entertainment"
            subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            icon="/images/cl-soho.webp"
          />
          <BusinessCard
            img="/images/makebuild.webp"
            badge="Agencles"
            subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            icon="/images/cl-makebuild.webp"
          />
          <BusinessCard
            img="/images/case-moov.webp"
            badge="Startups"
            subtitle="Our sending infrastructure is managed by the same folks Microsoft and Lyft trust for important password-reset emails."
            icon="/images/cl-moov.webp"
          />
        </div>
      </section> */}

      {/* <section>
        <div>
          <h1>Start now.</h1>
          <p>Your first 1,000 subscribers are totally free.</p>
          <button>Join Free</button>
        </div>
        <div>
          <Image
            src="/images/ui-preview.webp"
            alt="signup"
            width={500}
            height={500}
          />
        </div>
      </section> */}

      {/* <footer>
        <div>
          <h6>Product</h6>
          <div>
            <Link href="/Overview">Overview</Link>
            <Link href="/Email newslatters">Email newslatters</Link>
            <Link href="/Marketing automation">Marketing automation</Link>
            <Link href="/Webflow integration">Webflow integration</Link>
            <Link href="/use cases">use cases</Link>
          </div>
        </div>

        <div>
          <h6>Resources</h6>
          <div>
            <Link href="/Help center">Help center</Link>
            <Link href="/API docs">API docs</Link>
            <Link href="/Changelog">Changelog</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Emailspiration">Emailspiration</Link>
          </div>
        </div>

        <div>
          <h6>Company</h6>
          <div>
            <Link href="/Pricing">Pricing</Link>
            <Link href="/Follow us on Twitter">Follow us on Twitter</Link>
            <Link href="/Email us">Email us</Link>
            <Link href="/Policies">Policies</Link>
            <Link href="/GDPR">GDPR</Link>
          </div>
        </div>

        <div>
          <h6>Monthly newsletter</h6>
          <p>
            Get pro tips for automating your marketing workflows and be the
            first to hear about new tools and features:
          </p>
          <div>
            <input placeholder="Enter your email" />
            <Image
              src="/icon/right-arrow.png"
              alt="subscribe"
              width={20}
              height={20}
            />
          </div>
          <div>
            <Link href="/Privacy">Privacy</Link>
            <Link href="/Terms">Terms</Link>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
