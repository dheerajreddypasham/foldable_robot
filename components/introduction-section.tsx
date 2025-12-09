export function IntroductionSection() {
  return (
    <section className="py-16 bg-white" id="introduction">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">1. Introduction</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1.1 Project Overview</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                This project investigates the design and optimization of a bio-inspired foldable quadruped robot
                featuring knuckle-walking locomotion patterns inspired by African apes. The robot employs laminate-based
                construction with origami-inspired folding mechanisms and position-controlled actuators to achieve
                forward locomotion.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">Biological Inspiration</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  African apes (gorillas, chimpanzees, bonobos) have evolved knuckle-walking as a specialized
                  terrestrial locomotion strategy that combines stable weight distribution with behavioral flexibility.
                  This adaptive strategy allows apes to modulate contact forces, protect finger joints, and efficiently
                  traverse diverse terrain while maintaining the capability for arboreal behaviors.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1.2 Key Design Principles</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-cyan-50 rounded-lg p-5 border border-cyan-100">
                  <h4 className="font-semibold text-cyan-900 mb-2">Foldable Construction</h4>
                  <p className="text-sm text-cyan-800">
                    Origami-based soft robotics enables compact storage, simple fabrication, and compliant joints for
                    passive shock absorption.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-900 mb-2">Asymmetric Actuation</h4>
                  <p className="text-sm text-emerald-800">
                    Different positive and negative leg angles create forward-biased motion patterns without complex
                    variable-stiffness joints.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">Position Control</h4>
                  <p className="text-sm text-blue-800">
                    Servo-like position actuators simplify control architecture while enabling precise, repeatable leg
                    trajectories.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1.3 Key Objectives</h3>
              <ol className="space-y-3">
                {[
                  "Develop a dynamic MuJoCo model with material compliance and motor behavior",
                  "Optimize asymmetric actuator signal parameters to maximize locomotion speed",
                  "Fabricate a physical laminate prototype using laser-cut cardboard",
                  "Document the complete design-to-fabrication workflow for educational replication",
                ].map((objective, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center text-sm font-medium">
                      {i + 1}
                    </span>
                    <span className="text-slate-600">{objective}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1.4 Performance Metric</h3>
              <div className="bg-slate-900 text-white rounded-xl p-6">
                <p className="text-cyan-400 font-medium mb-2">Primary Metric</p>
                <p className="text-2xl font-bold mb-4">Maximum Horizontal Speed (m/s)</p>
                <p className="text-slate-300 text-sm">
                  Maximum speed directly measures locomotion effectiveness and is easily comparable across different
                  actuator configurations. The horizontal component isolates forward motion from vertical bouncing,
                  providing a clean measure of directional propulsion efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
