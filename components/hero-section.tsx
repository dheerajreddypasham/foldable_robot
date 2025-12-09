export function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
            Project Assignment 2
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            Design, Build and Simulate your <span className="text-cyan-400">Bio-Inspired Robot</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto text-pretty">
            A foldable quadruped robot with knuckle-walking locomotion inspired by African apes
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>Dheeraj Reddy Pasham</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>Dhansukh Jaladi</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>Yeshwanth Voruganti</span>
            </div>
          </div>

          <p className="text-slate-500 mt-4">December 8, 2025</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
            <img
              src="/images/img-6740.jpeg"
              alt="Assembled foldable quadruped robot prototype"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
            <img
              src="/images/lasercut-cardboard.jpeg"
              alt="Laser cutting process for robot components"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
