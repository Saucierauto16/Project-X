export default function App() {
  const commandStaff = [
    { rank: 'Chief of Police', name: 'Ayden Pierce' },
    { rank: 'Assistant Chief', name: 'David Tomaso' },
    { rank: 'Captain', name: 'B. Dawson' },
  ];

  const divisions = [
    'Patrol Division',
    'SWAT Division',
    'Air Support Unit',
    'Traffic Enforcement',
    'Detective Bureau',
    'Communications',
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-zinc-950 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-sm mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            FiveM Law Enforcement Roleplay
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            LOS SANTOS
            <span className="block text-blue-400">POLICE DEPARTMENT</span>
          </h1>

          <p className="mt-6 text-zinc-300 text-lg max-w-2xl leading-relaxed">
            Professional FiveM law enforcement roleplay community.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black mb-10">Command Staff</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {commandStaff.map((member, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <div className="text-2xl font-bold">{member.name}</div>
              <div className="text-blue-400 mt-2">{member.rank}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-900/40 border-y border-zinc-800 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-10">Divisions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold">{division}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-8 px-6 text-center text-zinc-500 text-sm">
        © 2026 Los Santos Police Department Roleplay Community
      </footer>
    </div>
  );
}