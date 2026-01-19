'use client';

export default function VideoTestimonials() {
  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'How Visble Transformed Our Brand Visibility',
      company: 'Tech Startup CEO'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Achieving 300% Growth in AI Citations',
      company: 'Marketing Director'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'From Zero to Hero in AI Search',
      company: 'SaaS Founder'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bricolage text-foreground mb-4">
            Hear What They Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real customers achieving extraordinary results with Visble AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border/20 bg-card hover:border-border/40 transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-video bg-muted">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold bricolage text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {video.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}