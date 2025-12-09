export function ManufacturingSection() {
  return (
    <section className="py-16 bg-slate-50" id="manufacturing">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">4. Part 3: Manufacturing</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">4.1 5-Layer Laminate Structure</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                The robot is constructed using a 5-layer laminate design optimized for lightweight construction with
                adequate structural rigidity.
              </p>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200">
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Layer</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Material</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Purpose</th>
                        <th className="text-left py-3 px-4 font-semibold text-slate-900">Specifications</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-600">
                      <tr className="border-b border-slate-100 bg-amber-50">
                        <td className="py-3 px-4 font-medium">Layer 1</td>
                        <td className="py-3 px-4">Cardboard</td>
                        <td className="py-3 px-4">Structural support</td>
                        <td className="py-3 px-4">Base layer for rigidity</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium">Layer 2</td>
                        <td className="py-3 px-4">Adhesive</td>
                        <td className="py-3 px-4">Bonding agent</td>
                        <td className="py-3 px-4">Joins cardboard to plastic</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-cyan-50">
                        <td className="py-3 px-4 font-medium">Layer 3</td>
                        <td className="py-3 px-4">Plastic film</td>
                        <td className="py-3 px-4">Hinge mechanism</td>
                        <td className="py-3 px-4">Provides joint compliance</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-medium">Layer 4</td>
                        <td className="py-3 px-4">Adhesive</td>
                        <td className="py-3 px-4">Bonding agent</td>
                        <td className="py-3 px-4">Joins plastic to cardboard</td>
                      </tr>
                      <tr className="bg-amber-50">
                        <td className="py-3 px-4 font-medium">Layer 5</td>
                        <td className="py-3 px-4">Cardboard</td>
                        <td className="py-3 px-4">Reinforcement</td>
                        <td className="py-3 px-4">Top layer for rigidity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">4.2 Laser Cutting Process</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src="/images/lasercut-cardboard.jpeg"
                    alt="Laser cutting cardboard"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="font-medium text-slate-900">Cardboard Layer Cutting</p>
                    <p className="text-sm text-slate-500">Precision laser cutting for structural components</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src="/images/lasercut-adhesive.jpeg"
                    alt="Laser cut adhesive components"
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="font-medium text-slate-900">Adhesive Layer Components</p>
                    <p className="text-sm text-slate-500">All laminate pieces ready for assembly</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">4.3 Actuator: SG90 Servo Motor</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Basic Parameters</h4>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Nominal Voltage</dt>
                      <dd className="font-medium text-slate-900">6 V DC</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Stall Torque</dt>
                      <dd className="font-medium text-slate-900">0.0027 N·m</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Stall Current</dt>
                      <dd className="font-medium text-slate-900">600 mA</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">No-load Speed</dt>
                      <dd className="font-medium text-slate-900">~60 RPM</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Gear Ratio</dt>
                      <dd className="font-medium text-slate-900">55.5:1</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Weight</dt>
                      <dd className="font-medium text-slate-900">9 g</dd>
                    </div>
                  </dl>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Motor Constants</h4>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Torque Constant (k_t)</dt>
                      <dd className="font-medium text-slate-900">0.0045 N·m/A</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Speed Constant (k_v)</dt>
                      <dd className="font-medium text-slate-900">0.00938 V·s/rad</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Back-EMF Constant</dt>
                      <dd className="font-medium text-slate-900">0.0045 V·s/rad</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Damping (b)</dt>
                      <dd className="font-medium text-slate-900">1.41e-6 N·m·s/rad</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Operating Voltage</dt>
                      <dd className="font-medium text-slate-900">3.3V (USB)</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Control Method</dt>
                      <dd className="font-medium text-slate-900">PWM Position</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">4.4 Assembled Prototype</h3>
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <img src="/images/img-6740.jpeg" alt="Assembled robot prototype" className="w-full h-80 object-cover" />
                <div className="p-6 bg-white">
                  <p className="font-medium text-slate-900 mb-2">Final Assembled Robot</p>
                  <p className="text-sm text-slate-500">
                    Foldable quadruped robot with 5-layer laminate construction, SG90 servo motor, and compliant plastic
                    hinges for knuckle-walking locomotion.
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
