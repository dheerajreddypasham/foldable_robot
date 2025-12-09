import { CheckCircle2 } from "lucide-react"

export function ResultsSection() {
  return (
    <section className="py-16 bg-slate-50" id="results">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">6. Results and Discussion</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">6.1 Experimental Results Summary</h3>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Test Case</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Total Time (s)</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Displacement (m)</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Avg Velocity (m/s)</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600">
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium">T1</td>
                        <td className="py-3 px-4">117.00</td>
                        <td className="py-3 px-4">0.2748</td>
                        <td className="py-3 px-4">0.2348</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-emerald-50">
                        <td className="py-3 px-4 font-medium text-emerald-700">T2 ✓ Best</td>
                        <td className="py-3 px-4">129.17</td>
                        <td className="py-3 px-4">0.3240</td>
                        <td className="py-3 px-4 font-bold text-emerald-700">0.2508</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium">T3</td>
                        <td className="py-3 px-4">196.40</td>
                        <td className="py-3 px-4">0.2852</td>
                        <td className="py-3 px-4">0.1452</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium">T4</td>
                        <td className="py-3 px-4">132.63</td>
                        <td className="py-3 px-4">0.2592</td>
                        <td className="py-3 px-4">0.1954</td>
                      </tr>
                      <tr className="bg-slate-50 font-semibold">
                        <td className="py-3 px-4">Mean</td>
                        <td className="py-3 px-4">143.80</td>
                        <td className="py-3 px-4">0.2858</td>
                        <td className="py-3 px-4">0.2065</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">6.2 Hardware vs Simulation Comparison</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="text-blue-600 font-medium text-sm mb-1">MuJoCo Mean Velocity</p>
                  <p className="text-2xl font-bold text-blue-900">0.4675 m/s</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                  <p className="text-orange-600 font-medium text-sm mb-1">Hardware Mean Velocity</p>
                  <p className="text-2xl font-bold text-orange-900">0.2066 m/s</p>
                </div>
                <div className="bg-slate-100 border border-slate-300 rounded-xl p-5">
                  <p className="text-slate-600 font-medium text-sm mb-1">Sim-to-Real Gap</p>
                  <p className="text-2xl font-bold text-slate-900">55.8%</p>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-emerald-900 mb-2">Critical Finding: Rankings Preserved!</h4>
                    <p className="text-emerald-800 text-sm mb-3">
                      Despite the 55.8% velocity gap, the ranking of configurations is{" "}
                      <strong>perfectly preserved</strong>:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-emerald-900 mb-2">MuJoCo Ranking:</p>
                        <ol className="list-decimal list-inside text-emerald-800 space-y-1">
                          <li>T2 (0.650 m/s)</li>
                          <li>T1 (0.450 m/s)</li>
                          <li>T4 (0.420 m/s)</li>
                          <li>T3 (0.350 m/s)</li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-medium text-emerald-900 mb-2">Hardware Ranking:</p>
                        <ol className="list-decimal list-inside text-emerald-800 space-y-1">
                          <li>T2 (0.251 m/s) ✓</li>
                          <li>T1 (0.235 m/s) ✓</li>
                          <li>T4 (0.195 m/s) ✓</li>
                          <li>T3 (0.145 m/s) ✓</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">6.3 Sources of Sim-to-Real Gap</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg border border-slate-200 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">Unmodeled Friction</h4>
                    <span className="text-sm text-red-600 font-medium">~30-40% of gap</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Simulation assumed ideal joints; hardware has friction from laser-cut edges, hinge contact,
                    leg-ground interaction.
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">Unmodeled Energy Losses</h4>
                    <span className="text-sm text-amber-600 font-medium">~10-15% of gap</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Material damping in cardboard, air resistance, servo dead-band and control lag (~50ms response
                    time).
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-slate-200 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">Servo Model Simplification</h4>
                    <span className="text-sm text-blue-600 font-medium">~5-10% of gap</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Simulation modeled servo as ideal torque source; real servo has finite torque output, saturation
                    effects.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                6.4 Key Finding: T2 Configuration is Optimal
              </h3>
              <div className="bg-slate-900 text-white rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Highest Average Velocity</p>
                    <p className="text-2xl font-bold text-cyan-400">0.2508 m/s</p>
                    <p className="text-sm text-slate-500">71.4% better than worst case</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Maximum Displacement</p>
                    <p className="text-2xl font-bold text-emerald-400">32.40 cm</p>
                    <p className="text-sm text-slate-500">Optimal path achieved</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Balanced Performance</p>
                    <p className="text-2xl font-bold text-amber-400">129.17 s</p>
                    <p className="text-sm text-slate-500">High speed without excessive duration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
