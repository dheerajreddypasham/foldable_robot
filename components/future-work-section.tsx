import { Wrench, Cpu, FlaskConical, Search } from "lucide-react"

export function FutureWorkSection() {
  return (
    <section className="py-16 bg-white" id="future-work">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">7. Future Work (V2)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-cyan-900 mb-3">Design Improvements</h3>
              <ul className="text-sm text-cyan-800 space-y-2">
                <li>• Multi-DOF leg mechanism for independent control</li>
                <li>• Advanced materials (CFRP or aluminum composite)</li>
                <li>• Variable stiffness joint design</li>
                <li>• Expected: 30-50% speed increase</li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-emerald-900 mb-3">Modeling Improvements</h3>
              <ul className="text-sm text-emerald-800 space-y-2">
                <li>• Hysteresis modeling (Kelvin-Voigt)</li>
                <li>• Contact dynamics refinement</li>
                <li>• Servo actuator fidelity improvements</li>
                <li>• Structural elasticity modeling</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-3">Experimental Improvements</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• High-speed motion capture (120+ fps)</li>
                <li>• Force plate integration</li>
                <li>• IMU-based locomotion analysis</li>
                <li>• Controlled surface variation testing</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-amber-900 mb-3">Additional Studies</h3>
              <ul className="text-sm text-amber-800 space-y-2">
                <li>• Multi-objective optimization (3D parameter space)</li>
                <li>• Terrain adaptation study</li>
                <li>• Scaling laws investigation</li>
                <li>• Evolutionary optimization for gait discovery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
