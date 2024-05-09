import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Review from "@/components/review";
import FeatureCard from "@/components/feature-card";
import BusinessCard from "@/components/business-card";
import Link from "next/link";
import CardSlider from "@/components/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-[2200px] ">
      <Navbar />

      <section className="py-14 flex flex-col justify-center items-center px-5">
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

      <section className="grid grid-cols-4 md:grid-cols-7 gap-4  px-2 md:px-[350px]">
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

      <section className=" py-20">
        <div className="flex flex-col md:flex-row items-center mb-10 justify-center">
          <Image
            src="/images/webflow.webp"
            alt="webflow"
            width={1000}
            height={1000}
          />
          <p className="md:text-[38px]  text-xl font-bold text-gray-300 md:leading-10  px-5 md:px-40">
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
          <p className="md:text-[38px] text-xl mt-10 font-bold md:leading-10 text-gray-300 px-5 md:px-52">
            <span className="text-black">
              Branded, modern email in 1 click.
            </span>
            Setup a simple email designe system and never hassel with template
            again. Everything you send is accesable,mobile frist,
            deliverability-optimized and, and dark-mood-friendly.
          </p>
        </div>
      </section>

      <section className=" md:max-w-[1950px] py-20 md:py-40 bg-black px-5">
        <div className="flex md:flex-row flex-col items-center  justify-between  md:px-[50px]">
          <p className="md:text-[38px] text-2xl  font-bold text-gray-500 md:px-[400px] leading-none py-8 hidden md:block">
            <span className=" text-white"> Multiple workspaces. </span>Create
            custom spaces for all of your businesses or clients and easily
            switch between them.
          </p>
          <Image
            src="/images/workspaces.webp"
            alt=""
            width={600}
            height={600}
            className=" rounded-3xl "
          />
          <p className="md:text-[38px] text-2xl  font-bold text-gray-500 md:px-[400px] leading-none py-8 block md:hidden">
            <span className=" text-white"> Multiple workspaces. </span>Create
            custom spaces for all of your businesses or clients and easily
            switch between them.
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center md:py-20 py-10">
          <Image
            src="/images/filter.webp"
            alt=""
            width={900}
            height={900}
            className="rounded-3xl"
          />
          <p className="md:text-[38px] text-2xl font-bold text-gray-500 md:px-[400px] leading-none items-center justify-center mt-10 md:mt-20 ">
            <span className="text-white">
              Different emails for different groups.
            </span>{" "}
            Segment your subscribers into multiple audiences with tags, custom
            fields and powerful conditionals.
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-center  justify-between md:px-40">
          <Image
            src="/images/audienceful-forms3.webp"
            alt=" audience"
            width={600}
            height={600}
            className=" rounded-3xl"
          />
          <p className="md:text-[38px] text-2xl  leading-none font-bold text-gray-500 md:px-[250px]">
            <span className="text-white"> Grow faster.</span> Collect signups
            with forms, use that data to personalize emails, and track
            per-subscriber events and analytics.
          </p>
        </div>
      </section>

      <section className="  md:px-28 md:py-52 py-10 px-5">
        <div className="flex flex-col  items-center justify-center mb-20">
          <p className="md:text-4xl font-bold md:px-[400px] mb-10 text-gray-500 hidden md:block">
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
          <p className="md:text-4xl text-xl font-bold md:px-[400px] mb-10 text-gray-500 block md:hidden mt-5">
            <span className="text-black"> Automate email sequences.</span>{" "}
            Create simple drip sequences for any use case, including onboarding,
            lead magnets, email courses, trial nurturing...anything.
          </p>
        </div>
        <div className="flex md:flex-row flex-col  items-center justify-center">
          <Image
            src="/images/feature-webflow.webp"
            alt="feature"
            width={700}
            height={700}
            className=" rounded-3xl"
          />
          <p className="md:text-4xl  text-2xl font-bold md:px-[250px] text-gray-500 mt-5 mb-20">
            <span className="text-black"> Publish to your website.</span>{" "}
            Cross-post emails and SEO content directly to CMS platforms like
            Webflow.
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center mb-20">
          <p className="md:text-4xl  md:px-[250px] font-bold text-gray-500 hidden md:block">
            <span className="text-black">Integrate anywhere. </span>‍Sync data
            and contacts from your CRM, Payment Processor, and 4000+ tools via
            Zapier or API.
          </p>
          <Image
            src="/images/integrations.webp"
            alt="integrations"
            width={700}
            height={700}
            className="rounded-3xl mb-10"
          />
          <p className="md:text-4xl text-2xl md:px-[250px] font-bold text-gray-500 block md:hidden">
            <span className="text-black">Integrate anywhere. </span>‍Sync data
            and contacts from your CRM, Payment Processor, and 4000+ tools via
            Zapier or API.
          </p>
        </div>

        <div className="items-center justify-center flex flex-col  mt-20">
          <h3 className="items-center text-center text-4xl font-bold mb-10 text-gray-400 hidden md:block">
            <span className="text-black">...and much more.</span> ‍<br />
            Join thousands making the switch.
          </h3>
          <div className="grid md:grid-cols-3  gap-6">
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

      <section className="px-10 md:bg-slate-200 mt-20 md:px-28  md:py-32">
        <h2 className=" md:text-4xl  text-2xl font-bold mb-10 text-gray-400 md:px-40">
          <span className="text-black flex text-center"> Powering </span>
          businesses of all shapes and sizes.
        </h2>
        <div className="items-center justify-center block md:hidden">
          <CardSlider />
        </div>
        <div className="hidden md:block ">
          <div className=" flex flex-row items-center md:gap-9">
            <BusinessCard
              img="/images/joe.webp"
              badge="Retall"
              subtitle="Joe & The Juice use audience to keep thousend of emploess on the loop across 300+ global location not into ther are not."
              icon="/images/cl-joe.webp"
            />
            <BusinessCard
              img="/images/weekend.webp"
              badge="Finance"
              subtitle="Rayan Hoover (founder of product hunt ) and vedika jens use audience rn ther popular newstleer about runing a "
              icon="/images/signatureblock.webp"
            />
            <BusinessCard
              img="/images/soho.webp"
              badge="Entertainment"
              subtitle="Soho Live Music Club use audience to promoteevents and drive sels at their 3 award-wining music venus in heart."
              icon="/images/cl-soho.webp"
            />
            <BusinessCard
              img="/images/makebuild.webp"
              badge="Agencles"
              subtitle="Make Build, a shofify and webflow enterprice and agency partner use audinceful to keep their team inspired."
              icon="/images/cl-makebuild.webp"
            />
          </div>
        </div>
      </section>

      <section className="md:mt-40 items-center text-center leading-none flex flex-col mt-20">
        <div>
          <h1 className="md:text-[100px] text-4xl font-bold mb-5">
            Start now.
          </h1>
          <p className="text-gray-500 text-xl font-medium mb-5 px-10">
            Your first 1,000 subscribers are totally free.
          </p>
          <button className="text-white text-xl font-medium   bg-blue-500 px-4 py-2 rounded-xl mb-10">
            Join Free
          </button>
        </div>
        <div className="">
          <Image
            src="/images/ui-preview.webp"
            alt="signup"
            width={1600}
            height={1600}
          />
        </div>
      </section>

      <footer className=" bg-black">
        <div className="py-28 md:px-40 px-10">
          <Image
            src="/icon/white-logo.png"
            alt="feature-integrations"
            height={40}
            width={40}
            className="block md:hidden"
          />
          <div className="grid md:grid-cols-5 grid-cols-2  justify-between ">
            <div className="hidden md:block">
              <Image
                src="/icon/white-logo.png"
                alt="feature-integrations"
                height={40}
                width={40}
                className=""
              />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-[#DDDDDD] text-[16px] font-bold py-6">
                  Product
                </p>
              </div>
              <div className="text-[#666666] text-[16px] font-medium flex flex-col gap-3">
                <a href="">Overview</a>
                <a href="">Email </a>
                <a href="">Marketing automation</a>
                <a href="">Webflow integration</a>
                <a href="">status</a>
              </div>
            </div>
            <div>
              <div>
                <div className="text-[#DDDDDD] text-[16px] font-bold py-6">
                  <p>Support</p>
                </div>
                <div className="text-[#666666] text-[16px] font-medium flex flex-col gap-3">
                  <a href="">Help center</a>
                  <a href="">Api docs</a>
                  <a href="">Email us</a>
                </div>
              </div>
              <div className="">
                <div className="text-[#DDDDDD] text-[16px] font-bold py-6">
                  <p>Resources</p>
                </div>
                <div className="text-[#666666] text-[16px] font-medium flex flex-col gap-3">
                  <a href="">Emailspiration</a>
                  <a href="">Email Marketing 101</a>
                  <a href="">Deliverability Checklist</a>
                  <a href="">Guides</a>
                  <a href="">Blog</a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-[#DDDDDD] text-[16px] font-bold py-6">
                <p>Use cases</p>
              </div>
              <div className="text-[#666666] text-[16px] font-medium flex flex-col gap-3">
                <a href="">Startups</a>
                <a href="">Mobile Apps</a>
                <a href="">Events</a>
                <a href="">Education</a>
                <a href="">Restaurants</a>
                <a href="">Internal Comms</a>
                <a href="">Bloggers</a>
                <a href="">Digital Products</a>
                <a href="">Venture Capital</a>
                <a href="">View all</a>
              </div>
            </div>
            <div className="">
              <div>
                <p className="text-[#DDDDDD] text-[16px] font-bold py-6">
                  Company
                </p>
              </div>
              <div className=" text-[#666666] text-[16px] font-medium flex flex-col gap-3">
                <a href="">Pricing</a>
                <a href="">Follow us on Twitter</a>
                <a href="">Email us</a>
                <a href="">Policies</a>
                <a href="">GDPR</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
