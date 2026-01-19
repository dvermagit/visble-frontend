'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "My brand has zero visibility in AI search. What can I do about it?",
    answer: "You should start with tracking your current positioning on target prompts and compare it with your competitors. This will help you in analysing gap in your content and share of voice. You can then create a solid execution plan to improve your performance on generative engines. Visble.ai helps you with tracking, analysing gap and executing strategy providing you an end to end tech enabled LLM SEO services."
  },
  {
    question: "Can I remove negative mentions or 'hallucinations' about my brand on ChatGPT?",
    answer: "You can't remove them, but you can feed the right information to the AI crawlers to correct it over the period of time. This is a core part of our Generative Engine Optimization agency’s workflow. We help you publish content that influences AI models to retain the right understanding of your brand."
  },
  {
    question: "Why should we hire a specialised Generative Engine Optimization agency instead of a standard SEO firm?",
    answer: "We have spent the whole last year understanding LLMs behaviour, running data backed experiments and testing out the strategies from a very nascent stage. And we continue to do so. SEO agencies optimize for links; we optimize for AI answers. As a specialized Generative Engine Optimization GEO marketing agency, we understand the nuances of Large Language Models (LLMs) that traditional firms miss. We ensure you are the source of the answer, not just a link on the SERP."
  },
  {
    question: "Do you offer managed GEO consultancy services or just the software?",
    answer: "We started as a software company but now we are dedicated to providing tech enabled generative engine optimization services."
  },
  {
    question: "What Platforms do you cover as an LLM SEO Agency?",
    answer: "We prioritize the AI Search Platforms which are most popular amongst your target audience. Right now, our major focus is on Google AI Overview, Chat GPT and Perplexity along with Google SERP as they have the most market share."
  },  
  {
    question: "Do we need to rewrite all our blogs to rank in AI?",
    answer: "Not all, but you need to restructure the important ones. AI models prefer 'scannable' formats like tables, bulleted lists, and direct Q&A. As part of our Generative engine optimization services, we provide content templates and changes that transform your existing long-form blogs into the data-rich formats that LLMs love to cite."
  },
  {
    question: "If AI answers the user's question directly, won't I lose website traffic?",
    answer: "You will lose low-value traffic, but gain high-intent leads. 'Zero-click' searches are inevitable. The goal of a Generative AI search engine optimization agency is to ensure that when the user clicks a citation, they are already sold on your brand. We shift your metric from 'Volume' to 'value.'"
  },
  {
    question: "How often do you update your GEO strategies?",
    answer: "Weekly. AI models update their weights and logic constantly. What worked for ChatGPT-3.5 doesn't work for GPT-4o. We pride ourselves on being the best Generative engine optimization agency because we test new prompt engineering tactics every single week and use those insights to improve your ai search performance."
  },
   {
    question: "Would your GEO strategies impact my Google rankings in a negative way?",
    answer: "No, but it’s the opposite. We build strategies, modify blogs and landing pages keeping both traditional SEO and GEO in mind. We understand that Google rankings are still very important. Our Generative engine optimization strategies add on to your SEO rankings."
   }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-background" aria-labelledby="faq-heading">
      {/* SEO: Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            id="faq-heading"
            className="text-5xl font-bold bricolage text-foreground mb-4"
          >
            FAQs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about AI search and Visble AI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/20 rounded-2xl overflow-hidden bg-card transition-all duration-300 hover:border-border/40"
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-muted/30 transition-colors group"
              >
                {/* SEO: Use H3 for questions for semantic hierarchy */}
                <h3 className="text-lg font-semibold text-foreground bricolage pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : 'group-hover:translate-y-0.5'
                  }`}
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[500px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}