import Navigation from "@/components/Navigation";
import AuroraBackground from "@/components/AuroraBackground";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AuroraBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full mb-8 animate-pulse-slow">
            <div className="w-2 h-2 bg-aurora-green rounded-full animate-ping" />
            <span className="text-aurora-green font-semibold text-sm">
              Free Forever • Built for the North
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight animate-fade-in">
            Guard Your<br />
            <span className="text-aurora-green">Arctic Adventure</span>
          </h1>

          {/* Mission Statement */}
          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl font-bold text-aurora-cyan mb-4 animate-fade-in-delay">
              Our Goal: Get everyone home safe at the end of their trip.
            </p>
            <p className="text-lg text-text-secondary italic animate-fade-in-delay-2">
              (And preferably with all their fingers and toes intact.)
            </p>
          </div>

          {/* Hero Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-3">
            Because "somewhere up north" is not a rescue plan.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
            <a
              href="/signup"
              className="group px-8 py-4 bg-aurora-green text-arctic-night font-semibold rounded-lg hover:bg-aurora-green/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-aurora-green/50"
            >
              <span className="flex items-center gap-2">
                Begin Your Journey
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a
              href="#mission"
              className="group px-8 py-4 glass glass-hover text-white font-semibold rounded-lg hover:-translate-y-1 transition-all duration-300"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 px-4 bg-arctic-deep/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-aurora-cyan/10 border border-aurora-cyan/20 rounded-full text-aurora-cyan font-bold text-sm uppercase tracking-wider mb-6">
              Our Mission
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              The Origin Story
            </h2>
            <p className="text-xl text-text-secondary italic">
              Or: How I Learned to Stop Worrying and Build a Safety App
            </p>
          </div>

          <div className="glass p-8 md:p-12 rounded-2xl space-y-6 text-lg leading-relaxed hover:scale-[1.02] transition-transform duration-500">
            <p>
              <strong className="text-aurora-green">ArcticGuardian</strong> started with a simple, mildly terrifying realization:
              I was hundreds of kilometers into the Quebec backcountry, the fishing was fantastic, and the only person who knew where I was...
              was my mom. And bless her heart, her directions consisted of <em className="text-aurora-cyan">"somewhere up north, near that lake, you know, the big one."</em>
            </p>
            <p>
              Mom, if a search and rescue team asks you where I am, "the big lake up north" narrows it down to approximately <em>all of northern Quebec</em>.
            </p>
            <p>
              I'm <strong className="text-aurora-green">Charles Faubert</strong>, and I've spent my life in remote places—first as an outdoorsman
              exploring the vast wilderness of northern Quebec with my dad, and later as an <strong>RCMP Officer</strong> serving nearly a decade
              across all three Canadian territories.
            </p>
            <p>
              During my time in law enforcement, I became intimately familiar with the other side of the equation: being the last line of defense
              for people in distress. When someone needs help in remote Canada, the response is often measured not in minutes, but in <em className="text-aurora-purple">hours</em> or
              even <em className="text-aurora-purple">days</em>.
            </p>
            <p className="text-2xl font-bold text-aurora-cyan">
              You know what makes a search and rescue operation exponentially harder? Starting with a search area the size of Belgium.
            </p>
            <p>
              So I built <strong className="text-aurora-green">ArcticGuardian</strong>. Because the year is 2025, we have GPS satellites literally
              orbiting the planet, and there's no reason your emergency contact should have to say <em>"uhhh... north?"</em>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-4 bg-arctic-deep">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-aurora-green/10 border border-aurora-green/20 rounded-full text-aurora-green font-bold text-sm uppercase tracking-wider mb-6 animate-pulse-slow">
              Arctic Powered
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Built for Northern Expeditions
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Every tool you need to conquer Canada's most remote territories safely
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group glass glass-hover p-8 rounded-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-aurora-green/15 rounded-xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                🗺️
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-aurora-green transition-colors">
                Interactive Arctic Maps
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Chart your course across frozen landscapes with precision mapping. Add waypoints, track routes, and export for offline GPS.
              </p>
            </div>

            <div className="group glass glass-hover p-8 rounded-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-aurora-cyan/15 rounded-xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                🔔
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-aurora-cyan transition-colors">
                Northern Guardian Alerts
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Automated check-ins keep you accountable. Miss your return time? Emergency contacts receive instant notifications.
              </p>
            </div>

            <div className="group glass glass-hover p-8 rounded-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 bg-aurora-purple/15 rounded-xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                🏔️
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-aurora-purple transition-colors">
                Indigenous Territories Respect
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Crafted by northerners who understand the land. Honors indigenous heritage and the authentic spirit of Arctic exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section id="how-it-works" className="py-32 px-4 bg-arctic-frost/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Why This Matters
            </h2>
            <p className="text-xl text-aurora-cyan font-semibold">
              The Part Where We Get Slightly Serious Again
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 text-aurora-green">Canada is Enormous</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The territories alone cover 3.9 million square kilometers. That's roughly the size of India.
                Northern Quebec? Another massive chunk of mostly wilderness.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When you're 200 kilometers from the nearest road, a twisted ankle becomes a genuine emergency.
                A sudden weather change isn't an inconvenience—it's a survival situation.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-3xl font-bold mb-4 text-aurora-cyan">Every Second Counts</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Search and rescue teams are incredible. They're skilled, dedicated, and they will move heaven and earth to find you.
                But they can't search everywhere at once.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Every hour spent figuring out where you <em>might</em> be is an hour you're still out there, waiting, hoping, getting colder.
              </p>
            </div>
          </div>

          <div className="mt-12 glass p-12 rounded-2xl text-center hover:scale-[1.02] transition-all duration-300">
            <p className="text-3xl md:text-4xl font-black mb-6">
              <span className="text-aurora-green">Proper trip planning</span> isn't paranoia—<br/>
              <span className="text-aurora-cyan">it's respect.</span>
            </p>
            <p className="text-xl text-text-secondary">
              Respect for the environment, respect for the people who might have to come looking for you,
              and respect for your own life and the people who want you to come home.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-arctic-deep to-arctic-night">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Get Out There.<br/>
            <span className="text-aurora-green">Explore. Adventure.</span>
          </h2>
          <p className="text-2xl text-text-secondary mb-12">
            Just tell someone where you're going first.
          </p>
          <a
            href="/signup"
            className="inline-block px-12 py-6 bg-aurora-green text-arctic-night font-bold text-xl rounded-lg hover:bg-aurora-green/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-aurora-green/50"
          >
            Start Planning Your Next Trip →
          </a>
        </div>
      </section>
    </main>
  );
}
