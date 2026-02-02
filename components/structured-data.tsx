export default function StructuredData() {
    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL ??
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "The Perfect Sound",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Android",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.5",
                    "ratingCount": "1000"
                },
                "description": "Professional audio equalizer app for Android with 5 different equalizers, AutoEQ profiles for 1000+ headphones, multiband compressor, and advanced audio processing features.",
                "screenshot": new URL("/screenshot.png", siteUrl).toString(),
                "downloadUrl": "https://play.google.com/store/apps/details?id=com.pepsy.theperfectsound",
                "featureList": [
                    "TPS All-in-One Equalizer",
                    "AutoEQ with 1000+ headphone profiles",
                    "Graphic Equalizer (5, 15, 31 bands)",
                    "Parametric Equalizer (up to 60 filters)",
                    "Smart Volume Maximizer",
                    "Multiband Compressor",
                    "Audio Virtualizer",
                    "Loudness Enhancer"
                ],
                "softwareVersion": "1.0",
                "author": {
                    "@type": "Organization",
                    "name": "The Perfect Sound Team"
                }
            },
            {
                "@type": "WebSite",
                "name": "The Perfect Sound",
                "url": siteUrl,
                "description": "Official website for The Perfect Sound - Professional Audio Equalizer for Android",
                "publisher": {
                    "@type": "Organization",
                    "name": "The Perfect Sound"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Which equalizer should I use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "It depends on your needs: TPS is perfect for a complete all-in-one experience. AutoEQ if you have headphones supported in the database. Graphic Equalizer for classic and intuitive control. Parametric for maximum control and precision. Maximizer simply to increase volume."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I use multiple equalizers simultaneously?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, you can only activate one equalizer at a time. This prevents conflicts and ensures the best possible audio quality."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the app work with all music apps?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes! The Perfect Sound works at the system level, so it enhances audio from all apps: Spotify, YouTube Music, Netflix, games, and any other app that plays audio."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much battery does it consume?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The app is optimized for minimal battery consumption (less than 1% extra). Audio processing happens efficiently without significantly impacting device battery life."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What does the Premium version include?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Premium version includes: 31-band Graphic Equalizer, complete AutoEQ with all profiles, unlimited Export/Import, all genre presets, and no ads."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which Android devices are supported?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Perfect Sound requires Android 9.0 (Pie) or higher. Note: some manufacturers limit audio APIs, so not all devices support all effects. You can check support in the app's Info section."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
