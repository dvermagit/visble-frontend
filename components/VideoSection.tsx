import OptimizedVideo from '@/components/OptimizedVideo';

export default function VideoSection() {
  // Video Schema for SEO (JSON-LD)
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Visble AI - GEO Platform Demo",
    "description": "Watch how Visble helps you track and optimize your brand visibility across ChatGPT, Perplexity, Gemini, and other AI search engines. See our GEO analytics dashboard in action.",
    "thumbnailUrl": "https://img.youtube.com/vi/-34hSeAdBA0/maxresdefault.jpg",
    "uploadDate": "2024-02-19T00:00:00Z",
    "duration": "PT44S", // 44 seconds in ISO 8601 format
    "contentUrl": "https://www.youtube.com/watch?v=-34hSeAdBA0",
    "embedUrl": "https://www.youtube-nocookie.com/embed/-34hSeAdBA0",
    "publisher": {
      "@type": "Organization",
      "name": "Visble AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://visble.ai/visble_logo.png"
      }
    },
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": 0
    }
  };

  return (
    <>
      {/* Add Video Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <section 
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        itemScope 
        itemType="https://schema.org/VideoObject"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl font-bold bricolage text-gray-900 mb-4"
              itemProp="name"
            >
              {/* See How It Works */}
               Hear What They Are Saying
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              itemProp="description"
            >
              {/* Watch our quick demo to see how Visble helps you dominate AI search engines like ChatGPT, Perplexity, and Gemini */}
              Real stories from real customers achieving extraordinary results with Visble AI
            </p>
          </div>

          {/* Video Player */}
          <div className="max-w-4xl mx-auto">
            <OptimizedVideo
              videoId="-34hSeAdBA0"
              provider="youtube"
              title="Visble AI - GEO Platform Demo | Track AI Search Visibility"
            />
            
            {/* Hidden meta tags for SEO (not visible to users) */}
            <meta itemProp="thumbnailUrl" content="https://img.youtube.com/vi/-34hSeAdBA0/maxresdefault.jpg" />
            <meta itemProp="uploadDate" content="2024-02-19T00:00:00Z" />
            <meta itemProp="duration" content="PT44S" />
            <meta itemProp="embedUrl" content="https://www.youtube-nocookie.com/embed/-34hSeAdBA0" />
            
            {/* Video Info Badges */}
            {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-label="Duration">⏱️</span>
                <span>44 seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-label="Quality">📺</span>
                <span>HD Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-label="Audio">🔊</span>
                <span>Full Audio</span>
              </div>
            </div> */}

            {/* Key Takeaways for SEO */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Track AI Visibility</h3>
                <p className="text-gray-600 text-sm">Monitor your brand mentions across ChatGPT, Perplexity, and Gemini</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Analytics</h3>
                <p className="text-gray-600 text-sm">Get instant insights on source mentions and citation patterns</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Optimize Content</h3>
                <p className="text-gray-600 text-sm">Learn what AI models prefer and increase your visibility by 500%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}