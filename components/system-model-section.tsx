export function SystemModelSection() {
  return (
    <section className="py-16 bg-slate-50" id="system-model">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">2. Part 1: System Model Definition</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2.1 Model Overview</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                The MuJoCo model represents a quadruped robot with a foldable laminate construction inspired by the
                original CAD design. The robot consists of a main body plate connected to four symmetric legs via
                compliant hinges, with a single actuator driving all legs in parallel through mechanical constraints.
              </p>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-4 bg-slate-100 border-b border-slate-200">
                  <h4 className="font-semibold text-slate-900">Structural Components</h4>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Component</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Property</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Value</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-600">
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-4 font-medium">Main Body</td>
                          <td className="py-3 px-4">Mass</td>
                          <td className="py-3 px-4">4.1 g</td>
                          <td className="py-3 px-4">Cardboard laminate base plate</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-4"></td>
                          <td className="py-3 px-4">Dimensions</td>
                          <td className="py-3 px-4">63 × 50 × 5 mm</td>
                          <td className="py-3 px-4">Rectangular base</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-4 font-medium">Legs (×4)</td>
                          <td className="py-3 px-4">Mass each</td>
                          <td className="py-3 px-4">4-5 g</td>
                          <td className="py-3 px-4">With compliant joints</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-4 font-medium">Top Plate</td>
                          <td className="py-3 px-4">Mass</td>
                          <td className="py-3 px-4">2.5 g</td>
                          <td className="py-3 px-4">6 DOF floating plate</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Total Robot</td>
                          <td className="py-3 px-4">Mass</td>
                          <td className="py-3 px-4">~12 g</td>
                          <td className="py-3 px-4">Excluding servo motor</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2.2 Material Compliance</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-lg border border-slate-200">
                  <p className="text-cyan-600 font-medium text-sm mb-1">Joint Compliance</p>
                  <p className="text-2xl font-bold text-slate-900 mb-2">frictionloss=0.1</p>
                  <p className="text-sm text-slate-500">armature=0.005 rotational damping</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-slate-200">
                  <p className="text-emerald-600 font-medium text-sm mb-1">Position Control Gain</p>
                  <p className="text-2xl font-bold text-slate-900 mb-2">kp=50</p>
                  <p className="text-sm text-slate-500">dampratio=1.0 for controlled stiffness</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-slate-200">
                  <p className="text-blue-600 font-medium text-sm mb-1">Spring Connections</p>
                  <p className="text-2xl font-bold text-slate-900 mb-2">solref="0.0001 1"</p>
                  <p className="text-sm text-slate-500">Soft constraints for passive compliance</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2.3 CAD Design</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src="/images/leg-librecad.jpeg"
                    alt="Leg design in LibreCAD"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="font-medium text-slate-900">Leg Assembly Design</p>
                    <p className="text-sm text-slate-500">LibreCAD DXF file with joint cutouts</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src="/images/mainbody-librecad.jpeg"
                    alt="Main body design in LibreCAD"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="font-medium text-slate-900">Main Body Design</p>
                    <p className="text-sm text-slate-500">Base plate with servo mounting points</p>
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
