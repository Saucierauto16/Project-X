export default function LSPDPortal() {
  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* TOP BAR */}
      <header className="bg-[#0b1f3a] text-white px-6 py-3 flex justify-between items-center">
        <div className="font-bold tracking-widest">
          LSPD PORTAL SYSTEM
        </div>
        <div className="text-sm opacity-80">
          Los Santos Police Department
        </div>
      </header>

      {/* QUICK ACTION BAR */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 p-6 bg-gray-100 border-b">
        {[
          "File Report",
          "Join LSPD",
          "Crime Map",
          "Staff Directory"
        ].map((item) => (
          <div key={item} className="bg-white border p-4 text-center hover:bg-blue-50 cursor-pointer">
            <p className="font-semibold text-sm">{item}</p>
          </div>
        ))}
      </section>

      {/* MAIN CONTENT GRID */}
      <main className="grid md:grid-cols-3 gap-6 p-6">

        {/* NEWS */}
        <section className="md:col-span-2 space-y-4">
          <h2 className="text-lg font-bold border-b pb-2">
            Department News
          </h2>

          {[
            "Recruit Graduation Ceremony Completed",
            "New Patrol Units Deployed Downtown",
            "Traffic Division Updates Released"
          ].map((news) => (
            <div key={news} className="border p-4 hover:bg-gray-50">
              <p className="font-medium">{news}</p>
              <p className="text-sm text-gray-500">
                Read more →
              </p>
            </div>
          ))}
        </section>

        {/* SIDEBAR */}
        <aside className="space-y-4">

          <div className="border p-4">
            <h3 className="font-bold mb-2">Emergency</h3>
            <p className="text-red-600 font-bold">911 ONLY</p>
          </div>

          <div className="border p-4">
            <h3 className="font-bold mb-2">Non-Emergency</h3>
            <p>1-877-ASK-LSPD</p>
          </div>

          <div className="border p-4">
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li>Stations</li>
              <li>Divisions</li>
              <li>Recruitment</li>
              <li>Policies</li>
            </ul>
          </div>

        </aside>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0b1f3a] text-white p-6 text-sm">
        © Los Santos Police Department Roleplay System
      </footer>

    </div>
  )
}
