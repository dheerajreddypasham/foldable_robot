import { CheckCircle2, AlertCircle } from "lucide-react"

export function ConclusionsSection() {
  return (
    <section className="py-16 bg-slate-50" id="conclusions">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">8. Conclusions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Summary of Findings</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "T2 Configuration is Optimal",
                    description:
                      "Experimental validation confirmed Test T2 achieved highest average velocity (0.2508 m/s), representing 71.4% better performance than T3.",
                  },
                  {
                    title: "Significant Parameter Sensitivity",
                    description:
                      "51% velocity spread across four test cases demonstrates high sensitivity to servo control parameters.",
                  },
                  {
                    title: "Robust Mechanical Design",
                    description:
                      "Despite velocity variations of ±21.6%, displacement consistency remained high (±8.4% variation).",
                  },
                  {
                    title: "Simulation-Reality Gap",
                    description:
                      "Strong correlation (0.8432) validates simulation for comparative optimization, despite 55.8% absolute velocity gap.",
                  },
                ].map((finding, i) => (
                  <div key={i} className="bg-white rounded-lg border border-slate-200 p-5">
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {i + 1}. {finding.title}
                    </h4>
                    <p className="text-sm text-slate-600">{finding.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Achievement of Objectives</h3>
              <div className="space-y-3">
                {[
                  {
                    status: "complete",
                    text: "Objective 1 - Develop Simulation Model: Created comprehensive MuJoCo model with asymmetric servo actuation",
                  },
                  {
                    status: "complete",
                    text: "Objective 2 - Optimize Design Parameters: Performed parameter sweep across servo angle ranges",
                  },
                  {
                    status: "complete",
                    text: "Objective 3 - Fabricate Physical Prototype: Successfully manufactured 5-layer laminate robot",
                  },
                  {
                    status: "complete",
                    text: "Objective 4 - Experimental Validation: Conducted four test configurations with motion tracking analysis",
                  },
                  {
                    status: "partial",
                    text: "Objective 5 - Sim-Experiment Comparison: Partially achieved; full quantitative correlation requires additional characterization",
                  },
                ].map((objective, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {objective.status === "complete" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm text-slate-600">{objective.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cyan-900 text-white rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Broader Implications</h3>
              <p className="text-cyan-100 leading-relaxed mb-4">
                This project demonstrates that laser-cut composite structures can achieve competitive locomotion
                performance with minimal complexity. The 5-layer laminate approach offers:
              </p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>
                  • <strong className="text-white">Manufacturing accessibility:</strong> Standard laser cutter, no 3D
                  printing required
                </li>
                <li>
                  • <strong className="text-white">Design flexibility:</strong> Easy modification of layer materials and
                  thicknesses
                </li>
                <li>
                  • <strong className="text-white">Educational value:</strong> Complete design-to-fabrication workflow
                  documented
                </li>
                <li>
                  • <strong className="text-white">Bio-inspired validation:</strong> Asymmetric gaits match biological
                  observations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
