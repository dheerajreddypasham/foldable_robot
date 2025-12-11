export function ProjectVideos() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Project Videos</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Video */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Video</h3>
              <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/8CPUg78EOZw"
                  title="Project Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Robot Motion Video */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Robot Motion Video</h3>
              <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/7wfLv5qTLVk"
                  title="Robot Motion Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
