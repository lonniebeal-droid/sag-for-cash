const creators = [
  { name: "LowKey Dre", city: "West End", tier: "$7/mo", stat: "2.4K" },
  { name: "ATL Moe", city: "College Park", tier: "$10/mo", stat: "1.8K" },
  { name: "Jae Loose", city: "East Point", tier: "$5/mo", stat: "3.1K" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-8">
        <nav className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-lime-300">Atlanta creator culture</p>
            <h1 className="text-2xl font-black">SAG FOR CASH</h1>
          </div>
          <div className="flex gap-3 text-sm">
            <button className="rounded-full border border-white/20 px-4 py-2">Log in</button>
            <button className="rounded-full bg-lime-300 px-4 py-2 font-bold text-black">Join free</button>
          </div>
        </nav>

        <div className="grid gap-10 py-16 md:grid-cols-[1.2fr_.8fr] md:items-center">
          <div>
            <span className="rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1 text-xs font-semibold text-lime-200">18+ CREATOR MARKETPLACE</span>
            <h2 className="mt-6 max-w-3xl text-5xl font-black leading-none md:text-7xl">Turn the low-rider look into a real creator hustle.</h2>
            <p className="mt-6 max-w-2xl text-lg text-zinc-300">Post the fit. Build a following. Unlock premium drops, tips, and paid custom photo or video requests without losing the streetwear identity.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-lime-300 px-6 py-3 font-black text-black">Create profile</button>
              <button className="rounded-2xl border border-white/20 px-6 py-3 font-bold">Browse creators</button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-5 shadow-2xl">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-black p-5">
              <div className="flex h-full flex-col justify-between">
                <div className="flex justify-between text-xs text-zinc-300"><span>FEATURED DROP</span><span>ATL</span></div>
                <div>
                  <p className="text-3xl font-black">West End Night Fit</p>
                  <p className="mt-2 text-sm text-zinc-300">Public preview • Premium set locked</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-16">
          <div className="mb-6 flex items-end justify-between">
            <div><p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Trending</p><h3 className="text-3xl font-black">Atlanta creators</h3></div>
            <span className="text-sm text-zinc-400">Free + premium</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {creators.map((creator) => (
              <article key={creator.name} className="rounded-3xl border border-white/10 bg-zinc-900 p-5">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-700" />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div><h4 className="text-xl font-black">{creator.name}</h4><p className="text-sm text-zinc-400">{creator.city} • {creator.stat} likes</p></div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">{creator.tier}</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <button className="rounded-xl border border-white/10 px-3 py-2">Follow</button>
                  <button className="rounded-xl bg-lime-300 px-3 py-2 font-bold text-black">Unlock</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 pb-16 md:grid-cols-4">
          {[['Free feed','Public posts, likes, follows'],['Premium','Locked drops + memberships'],['Customs','Paid photo/video requests'],['Safe by design','18+, report, block, moderation']].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><h4 className="font-black">{title}</h4><p className="mt-2 text-sm text-zinc-400">{body}</p></div>
          ))}
        </section>
      </section>
    </main>
  );
}
