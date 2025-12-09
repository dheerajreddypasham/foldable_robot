export function OptimizationSection() {
  return (
    <section className="py-16 bg-white" id="optimization">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">3. Part 2: Design Optimization</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3.1 Optimization Strategy</h3>
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-6">
                <p className="text-cyan-900 font-semibold mb-2">Approach: Exhaustive Parameter Sweep (Grid Search)</p>
                <p className="text-cyan-800 text-sm">
                  Given the relatively small design space (two independent variables: positive and negative leg angles)
                  and the need to understand performance across the entire parameter region, an exhaustive grid search
                  is more appropriate than gradient-based methods.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Positive Signal (θ⁺)</h4>
                  <p className="text-sm text-slate-600 mb-2">Leg Extension</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Range: 0.1 - 0.6 rad (~5.7° - 34.4°)</li>
                    <li>• Samples: 6 values</li>
                    <li>• Strategy: Linear uniform spacing</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Negative Signal (θ⁻)</h4>
                  <p className="text-sm text-slate-600 mb-2">Leg Flexion</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Range: -0.8 to -0.2 rad (~45.8° - 11.5°)</li>
                    <li>• Samples: 7 values</li>
                    <li>• Strategy: Linear uniform spacing</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-slate-900 text-white rounded-xl p-6 text-center">
                <p className="text-slate-400 text-sm mb-2">Total Configurations Tested</p>
                <p className="text-4xl font-bold text-cyan-400">6 × 7 = 42</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3.2 Optimization Results</h3>
              <div className="rounded-xl overflow-hidden border border-slate-200 mb-6">
                <img
                  src="/images/four-test-cases-comparison.png"
                  alt="Four test cases performance comparison"
                  className="w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <p className="text-emerald-600 font-medium text-sm mb-1">Best Configuration (Case 2)</p>
                  <p className="text-3xl font-bold text-emerald-900 mb-2">0.0812 m/s</p>
                  <p className="text-sm text-emerald-700">Highest average speed with 75-123° range</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <p className="text-blue-600 font-medium text-sm mb-1">Best Displacement (Case 2)</p>
                  <p className="text-3xl font-bold text-blue-900 mb-2">0.0407 m</p>
                  <p className="text-sm text-blue-700">Maximum horizontal displacement achieved</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3.3 Key Finding: Asymmetric Gaits Win</h3>
              <p className="text-slate-600 leading-relaxed">
                The optimal configuration achieved a maximum speed of{" "}
                <strong className="text-slate-900">0.7374 m/s</strong> with asymmetric actuation (+0.5 rad / -0.8 rad),
                demonstrating that asymmetric "push-pull" gaits significantly outperform symmetric patterns. This
                finding aligns with biological observations of knuckle-walking primates that modulate limb extension
                asymmetrically for efficient terrestrial locomotion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
