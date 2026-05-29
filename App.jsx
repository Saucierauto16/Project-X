export default function TacticalLSPDConsole() {
  const quickActions = [
    'Dispatch Console',
    'CAD / MDT',
    'Unit Roster',
    'BOLO Database',
    'Arrest Reports',
    '10-Code Reference',
  ]

  const activeUnits = [
    ['1A-12', 'ACTIVE PATROL'],
    ['2L-24', 'TRAFFIC ENFORCEMENT'],
    ['AIR-1', 'AIR SUPPORT'],
    ['METRO-5', 'TACTICAL STANDBY'],
  ]

  const incidents = [
    'Armed robbery reported near Downtown Vinewood',
    'Pursuit initiated on Interstate 1',
    'Officer requesting backup at Mission Row',
    'Traffic collision blocking southbound lanes',
  ]

  return (
    <div className="min-h-screen bg-[#0a0f18] text-[#d7e3f4] font-mono overflow-hidden">
      {/* TOP COMMAND BAR */}
      <header className="border-b border-cyan-900 bg-[#09111d] shadow-[0_0_30px_rgba(0,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-[0.3em] text-cyan-400 uppercase">
              LSPD TACNET
            </h1>
            <p className="text-sm text-cyan-200/60 tracking-[0.25em] uppercase mt-1">
              Los Santos Police Department Tactical Operations Console
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="bg-black border border-cyan-900 rounded-xl px-4 py-2">
              <p className="text-xs text-cyan-500 uppercase tracking-widest">
                System Status
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <p className="text-sm font-bold text-green-400">
                  ONLINE
                </p>
              </div>
            </div>

            <div className="bg-black border border-cyan-900 rounded-xl px-4 py-2">
              <p className="text-xs text-cyan-500 uppercase tracking-widest">
                Active Officers
              </p>
              <p className="text-lg font-black text-cyan-300">128</p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <aside className="xl:col-span-3 space-y-6">
          <div className="bg-[#0d1624] border border-cyan-900 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/20">
            <div className="border-b border-cyan-900 px-5 py-4 bg-black/40">
              <h2 className="font-black tracking-[0.2em] text-cyan-400 uppercase text-sm">
                Quick Access
              </h2>
            </div>

            <div className="p-4 space-y-3">
              {quickActions.map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-3 rounded-xl border border-cyan-900 bg-[#09111d] hover:bg-cyan-950/30 hover:border-cyan-400 transition text-sm uppercase tracking-wider"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1624] border border-cyan-900 rounded-2xl overflow-hidden">
            <div className="border-b border-cyan-900 px-5 py-4 bg-black/40">
              <h2 className="font-black tracking-[0.2em] text-cyan-400 uppercase text-sm">
                Emergency Channels
              </h2>
            </div>

            <div className="p-5 space-y-4 text-sm">
              <div className="flex justify-between border-b border-cyan-950 pb-2">
                <span>METRO TAC</span>
                <span className="text-green-400">CONNECTED</span>
              </div>

              <div className="flex justify-between border-b border-cyan-950 pb-2">
                <span>AIR SUPPORT</span>
                <span className="text-green-400">CONNECTED</span>
              </div>

              <div className="flex justify-between border-b border-cyan-950 pb-2">
                <span>DISPATCH</span>
                <span className="text-green-400">CONNECTED</span>
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER */}
        <main className="xl:col-span-6 space-y-6">

          {/* LIVE INCIDENTS */}
          <section className="bg-[#0d1624] border border-cyan-900 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/20">
            <div className="border-b border-cyan-900 px-6 py-4 bg-black/40 flex items-center justify-between">
              <h2 className="font-black tracking-[0.2em] text-cyan-400 uppercase text-sm">
                Live Incident Feed
              </h2>

              <div className="flex items-center gap-2 text-red-400 text-xs tracking-widest uppercase">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                Live Monitoring
              </div>
            </div>

            <div className="divide-y divide-cyan-950">
              {incidents.map((incident, index) => (
                <div
                  key={incident}
                  className="p-5 hover:bg-cyan-950/10 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-cyan-100 font-semibold tracking-wide">
                        {incident}
                      </p>

                      <p className="mt-2 text-xs text-cyan-400/70 uppercase tracking-widest">
                        Incident #{1000 + index} • Priority Response
                      </p>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-red-950/50 border border-red-700 text-red-400 text-xs uppercase tracking-widest whitespace-nowrap">
                      ACTIVE
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MAP PANEL */}
          <section className="bg-[#0d1624] border border-cyan-900 rounded-2xl overflow-hidden relative min-h-[320px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_70%)]"></div>

            <div className="relative z-10 border-b border-cyan-900 px-6 py-4 bg-black/40">
              <h2 className="font-black tracking-[0.2em] text-cyan-400 uppercase text-sm">
                Tactical Operations Map
              </h2>
            </div>

            <div className="relative z-10 h-[260px] flex items-center justify-center text-center px-6">
              <div>
                <div className="w-24 h-24 rounded-full border-4 border-cyan-500 mx-auto animate-pulse"></div>

                <p className="mt-6 text-cyan-200 uppercase tracking-[0.25em] text-sm">
                  Live CAD Integration Ready
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* RIGHT PANEL */}
        <aside className="xl:col-span-3 space-y-6">
          <div className="bg-[#0d1624] border border-cyan-900 rounded-2xl overflow-hidden">
            <div className="border-b border-cyan-900 px-5 py-4 bg-black/40">
              <h2 className="font-black tracking-[0.2em] text-cyan-400 uppercase text-sm">
                Active Units
              </h2>
            </div>

            <div className="divide-y divide-cyan-950">
              {activeUnits.map(([unit, status]) => (
                <div key={unit} className="px-5 py-4 flex items-center justify-between hover:bg-cyan-950/10 transition">
                  <div>
                    <p className="font-black text-cyan-100 tracking-wider">
                      {unit}
                    </p>
                    <p className="text-xs text-cyan-400/70 uppercase tracking-widest mt-1">
                      {status}
                    </p>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1624] border border-cyan-900 rounded-2xl overflow-hidden">
            <div className="border-b border-cyan-900 px-5 py-4 bg-black/40">
              <h2 className="font-black tracking-[0.2em] text-cyan-400 uppercase text-sm">
                Officer Authentication
              </h2>
            </div>

            <div className="p-5 space-y-4">
              <input
                placeholder="Badge Number"
                className="w-full bg-black border border-cyan-900 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-sm"
              />

              <input
                type="password"
                placeholder="Secure Access Code"
                className="w-full bg-black border border-cyan-900 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-sm"
              />

              <button className="w-full bg-cyan-600 hover:bg-cyan-500 transition rounded-xl py-3 font-black uppercase tracking-[0.2em] text-black">
                Authenticate
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-cyan-950 bg-black/60 py-4 text-center text-xs uppercase tracking-[0.25em] text-cyan-400/50">
        LSPD Tactical Network • Authorized Personnel Only
      </footer>
    </div>
  )
}
