import { Target, Zap, Cpu, CheckCircle2 } from "lucide-react"

export function ExecutiveSummary() {
  return (
    <section className="py-16 bg-slate-50" id="summary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Executive Summary</h2>

          <div className="prose prose-slate max-w-none mb-10">
            <p className="text-lg text-slate-600 leading-relaxed">
              This project presents the design, optimization, and fabrication of a bio-inspired foldable quadruped robot
              with knuckle-walking locomotion characteristics. Inspired by African apes' adaptive gait strategies and
              recent advances in variable-stiffness actuation, we developed a laminate-based robot capable of forward
              locomotion through asymmetric leg actuation patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">42 Configurations</h3>
              <p className="text-sm text-slate-600">Parameter sweep testing 6×7 actuator signal combinations</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">0.74 m/s Max Speed</h3>
              <p className="text-sm text-slate-600">Optimal asymmetric actuation (+0.5 rad / -0.8 rad)</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">5-Layer Laminate</h3>
              <p className="text-sm text-slate-600">Laser-cut cardboard with plastic hinge mechanism</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">84% Correlation</h3>
              <p className="text-sm text-slate-600">Strong sim-to-real correlation preserved rankings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
