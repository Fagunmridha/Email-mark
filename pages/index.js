import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Review from "@/components/review";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" mx-auto px-6">
      <Navbar />

      <section>
        <div>
          <h1>Better Email</h1>
          <p>
            Tired of fighting with nightmarish email marketing software? 😳 Join
            thousands of businesses making the switch to an easier way to do
            mass email:
          </p>
          <button>Join now--Free</button>
        </div>
      </section>

      <section>
        <Image
          src="/images/email-examples.webp"
          alt="dashboard"
          width={200}
          height={200}
        />
        <Image
          src="/images/dashboard.png"
          alt="dashboard"
          width={200}
          height={200}
        />
      </section>

      <section>
        <h2>
          Audienceful is email marketing re-invented for the 2020s. It's
          multiplayer, lightweight and setup for best practices by default.
        </h2>
        <div>
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
      </section>

      <section>
        <Image
          src="/images/1-mccann.webp"
          alt="1-mccann"
          width={200}
          height={200}
        />
        <Image
          src="/images/betterodds.png"
          alt=" Betterodds"
          width={200}
          height={200}
        />
        <Image
          src="/images/Afterwork.webp"
          alt=" Afterwork"
          width={200}
          height={200}
        />
        <Image
          src="/images/capitalminded.webp"
          alt=" Capital"
          width={200}
          height={200}
        />
        <Image
          src="/images/cl-makebuild.webp"
          alt=" Cl-Make Build"
          width={200}
          height={200}
        />
        <Image
          src="/images/1-mccann.webp"
          alt="1-mccann"
          width={200}
          height={200}
        />
        <Image
          src="/images/cl-moov.webp"
          alt=" Cl-moov"
          width={200}
          height={200}
        />
        <Image
          src="/images/cl-signature.webp"
          alt=" Cl-signature"
          width={200}
          height={200}
        />
        <Image
          src="/images/cl-vivo.webp"
          alt=" Cl-vivo"
          width={200}
          height={200}
        />
        <Image
          src="/images/joeandjuice.webp"
          alt=" Joeand"
          width={200}
          height={200}
        />
        <Image src="/images/Mena.webp" alt=" Mena" width={200} height={200} />
        <Image
          src="/images/n-webflow.webp"
          alt=" webflow"
          width={200}
          height={200}
        />
        <Image
          src="/images/new-polaris.webp"
          alt="1-mccann"
          width={200}
          height={200}
        />
        <Image
          src="/images/ogilvy.webp"
          alt=" ogilvy"
          width={200}
          height={200}
        />
        <Image src="/images/soho-2.webp" alt="soho" width={200} height={200} />
        <Image
          src="/images/qnologyai.webp"
          alt=" qnologyai"
          width={200}
          height={200}
        />
        <Image src="/images/spike.webp" alt=" spike" width={200} height={200} />
        <Image src="/images/stir.webp" alt=" stir" width={200} height={200} />
        <Image
          src="/images/t-mobileblk.webp"
          alt=" t-mobileblk"
          width={200}
          height={200}
        />
        <Image
          src="/images/within.webp"
          alt=" within"
          width={200}
          height={200}
        />
        <Image
          src="/images/Afterwork.webp"
          alt=" Afterwork"
          width={200}
          height={200}
        />
      </section>

      <section>
        <div>
          <Image
            src="/images/webflow.webp"
            alt="webflow"
            width={500}
            height={500}
          />
          <p>
            Easy as writing a doc. No more clunky email builders. Collaborate
            live with your team like you're in Notion or Google Docs.
          </p>
        </div>
        <div>
          <Image
            src="/images/templates.webp"
            alt="templates"
            width={500}
            height={500}
          />
          <p>
            Easy as writing a doc. No more clunky email builders. Collaborate
            live with your team like you're in Notion or Google Docs.
          </p>
        </div>
      </section>

      <section>
        <div>
          <p>
            Multiple workspaces. Create custom spaces for all of your businesses
            or clients and easily switch between them.
          </p>
          <Image
            src="/images/workspaces.webp"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <p>
            Different emails for different groups. Segment your subscribers into
            multiple audiences with tags, custom fields and powerful
            conditionals.
          </p>
          <Image src="/images/filter.webp" alt="" width={500} height={500} />
        </div>
        <div>
          <p>
            Grow faster. Collect signups with forms, use that data to
            personalize emails, and track per-subscriber events and analytics.
          </p>
          <Image
            src="/images/audienceful-forms3.webp"
            alt=" audience"
            width={500}
            height={500}
          />
        </div>
      </section>
    </main>
  );
}
