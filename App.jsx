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
