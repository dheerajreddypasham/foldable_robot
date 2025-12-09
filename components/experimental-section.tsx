export function ExperimentalSection() {
  return (
    <section className="py-16 bg-white" id="experimental">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">5. Part 4: Experimental Validation</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">5.1 Experimental Setup</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Primary Measurement Tool</h4>
                  <p className="text-cyan-600 font-medium mb-2">Open Source Physics (OSP) Tracker</p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Motion tracking and kinematic analysis</li>
                    <li>• Input: .mov video files at 30 fps</li>
                    <li>• Output: Position data and CSV exports</li>
                    <li>• Manual reference marker placement</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Test Environment</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>
                      • <strong>Surface:</strong> Flat, level table
                    </li>
                    <li>
                      • <strong>Dimensions:</strong> ~2m × 1m test area
                    </li>
                    <li>
                      • <strong>Temperature:</strong> Room temp (~20-25°C)
                    </li>
                    <li>
                      • <strong>Lighting:</strong> Uniform bright lighting
                    </li>
                    <li>
                      • <strong>Camera:</strong> Smartphone at 30 fps HD
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">5.2 Motion Tracking Process</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src="/images/tracker-data-1.jpeg"
                    alt="Tracker software analyzing robot motion - Test 1"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="font-medium text-slate-900">Tracker Analysis - Session 1</p>
                    <p className="text-sm text-slate-500">Position tracking with coordinate calibration</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src="/images/tracker-data-2.jpeg"
                    alt="Tracker software analyzing robot motion - Test 2"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="font-medium text-slate-900">Tracker Analysis - Session 2</p>
                    <p className="text-sm text-slate-500">Multiple data plots showing x, y position over time</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">5.3 Measurement Uncertainty</h3>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h4 className="font-semibold text-amber-900 mb-3">Sources of Error</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-amber-800 mb-1">Spatial Resolution</p>
                    <p className="text-amber-700">±2-3 pixels (~0.5-1 mm)</p>
                  </div>
                  <div>
                    <p className="font-medium text-amber-800 mb-1">Temporal Resolution</p>
                    <p className="text-amber-700">33 ms between frames</p>
                  </div>
                  <div>
                    <p className="font-medium text-amber-800 mb-1">Manual Tracking</p>
                    <p className="text-amber-700">±3-5 pixels placement error</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">5.4 Velocity Analysis</h3>
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <img src="/images/robot-speed.png" alt="Robot speed analysis over time" className="w-full" />
                <div className="p-6 bg-white">
                  <p className="font-medium text-slate-900 mb-2">Robot Speed Over Time</p>
                  <p className="text-sm text-slate-500">
                    Left: Total and horizontal speed with mean velocity of 0.0388 m/s. Right: Velocity components
                    showing X, Y, and Z velocities over the 5-second test duration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
