export default function LSPDWebsite() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Header */}
      <header className="border-b border-blue-900 bg-black/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-widest text-blue-400">
              LOS SANTOS POLICE DEPARTMENT
            </h1>
            <p className="text-zinc-400 text-sm tracking-[0.3em] uppercase">
              Protect & Serve
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-semibold">
            <a href="#" className="hover:text-blue-400 transition">Home</a>
            <a href="#" className="hover:text-blue-400 transition">Divisions</a>
            <a href="#" className="hover:text-blue-400 transition">Roster</a>
            <a href="#" className="hover:text-blue-400 transition">Recruitment</a>
            <a href="#" className="hover:text-blue-400 transition">CAD / MDT</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 to-black"></div>

        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop"
          alt="Police"
          className="w-full h-[600px] object-cover opacity-30"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-500 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm uppercase tracking-widest">
                  Server Operational
                </span>
              </div>

              <h2 className="text-6xl font-black leading-tight uppercase tracking-wide">
                Professional
                <span className="block text-blue-400">Law Enforcement</span>
                Roleplay
              </h2>

              <p className="mt-6 text-zinc-300 text-lg leading-relaxed max-w-2xl">
                Join one of the most elite law enforcement agencies in Los Santos.
                Experience immersive patrol operations, investigations, tactical
                response, aviation support, and realistic police roleplay.
              </p>

              <div className="flex gap-4 mt-10 flex-wrap">
                <button className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-xl font-bold uppercase tracking-wider shadow-2xl shadow-blue-900/50">
                  Join LSPD
                </button>

                <button className="border border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10 transition px-8 py-4 rounded-xl font-bold uppercase tracking-wider">
                  View Divisions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          ['120+', 'Active Officers'],
          ['24/7', 'Patrol Operations'],
          ['5', 'Specialized Divisions'],
          ['99%', 'Professional RP'],
        ].map(([value, label]) => (
          <div
            key={label}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition"
          >
            <h3 className="text-4xl font-black text-blue-400">{value}</h3>
            <p className="mt-2 text-zinc-400 uppercase tracking-wider text-sm">
              {label}
            </p>
          </div>
        ))}
      </section>

      {/* Divisions */}
      <section className="bg-zinc-900/40 border-y border-zinc-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="text-5xl font-black uppercase tracking-wide">
              Specialized Divisions
            </h2>
            <p className="text-zinc-400 mt-4 max-w-2xl">
              Operate within elite units inspired by real-world metropolitan
              policing agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Metropolitan Division',
              'Air Support Division',
              'Detective Bureau',
              'Highway Patrol',
            ].map((division) => (
              <div
                key={division}
                className="group bg-black border border-zinc-800 hover:border-blue-500 rounded-2xl p-8 transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600/20 border border-blue-500 mb-6 flex items-center justify-center text-blue-400 font-black text-xl">
                  L
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">
                  {division}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-sm">
                  Advanced operations, tactical response, and immersive law
                  enforcement experiences.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl border border-blue-900 bg-gradient-to-r from-blue-950 to-black p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-5xl font-black uppercase leading-tight">
              Ready To Serve
              <span className="block text-blue-400">Los Santos?</span>
            </h2>

            <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
              Become part of a highly structured law enforcement roleplay
              experience with realistic patrol systems, command structure,
              academy training, and specialized divisions.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-xl font-bold uppercase tracking-wider">
                Apply Today
              </button>

              <button className="border border-zinc-600 hover:border-blue-500 hover:bg-blue-500/10 transition px-8 py-4 rounded-xl font-bold uppercase tracking-wider">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-zinc-500 text-sm uppercase tracking-wider">
          <p>Los Santos Police Department Roleplay</p>
          <p>Designed For FiveM Community Operations</p>
        </div>
      </footer>
    </div>
  )
}
