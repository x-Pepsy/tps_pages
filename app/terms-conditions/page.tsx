import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Terms & Conditions for The Perfect Sound - Professional Audio Equalizer for Android",
}

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>

                <div className="mb-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm font-medium text-center">
                        These Terms & Conditions apply to <strong>The Perfect Sound Android Application</strong>, not this website.
                    </p>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
                    <p className="text-muted-foreground">
                        <strong>Effective Date:</strong> April 2, 2025<br />
                        <strong>Last Updated:</strong> April 2, 2025
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">1. ACCEPTANCE OF TERMS</h2>
                        <p>
                            By downloading, installing, or using The Perfect Sound (&quot;the app&quot;), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the app.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">2. DESCRIPTION OF SERVICE</h2>
                        <p>The Perfect Sound is an audio enhancement application that provides:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Advanced audio processing and equalization</li>
                            <li>AutoEQ profile downloads and management</li>
                            <li>Device-specific audio profile application</li>
                            <li>Real-time audio enhancement for various audio devices</li>
                            <li>Premium features including TPS (The Perfect Sound) and AutoEQ (Premium subscription required)</li>
                            <li>Graphic EQ and Maximizer functionality</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">3. PREMIUM FEATURES AND IN-APP PURCHASES</h2>
                        <p>The app offers premium features through in-app purchases:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>TPS (The Perfect Sound):</strong> Advanced multi-band audio processing with Pre-EQ, Multi-Band Compressor, Limiter, Virtualizer, and Loudness Enhancer</li>
                            <li><strong>AutoEQ:</strong> Automatic headphone equalization with access to professional measurement database</li>
                            <li>Premium features require a one-time purchase through Google Play Billing</li>
                            <li>All purchases are processed securely through Google Play Store</li>
                            <li>Refunds and billing inquiries are handled by Google Play Support</li>
                            <li>Premium license is verified locally and tied to your Google account</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">4. PERMISSIONS AND FUNCTIONALITY</h2>
                        <p>The app requires specific permissions to function:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>INTERNET:</strong> For downloading public AutoEQ profiles from our repository and Google Play Billing license verification</li>
                            <li><strong>ACCESS_NETWORK_STATE:</strong> To check internet connectivity</li>
                            <li><strong>BLUETOOTH & BLUETOOTH_CONNECT:</strong> For detecting and configuring Bluetooth audio devices</li>
                            <li><strong>MODIFY_AUDIO_SETTINGS:</strong> For applying audio enhancements</li>
                            <li><strong>USB_PERMISSION:</strong> For USB audio device support</li>
                            <li><strong>FOREGROUND_SERVICE & FOREGROUND_SERVICE_MEDIA_PLAYBACK:</strong> For continuous audio processing</li>
                            <li><strong>POST_NOTIFICATIONS:</strong> For service status updates</li>
                            <li><strong>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS:</strong> To maintain audio processing quality</li>
                            <li><strong>BILLING:</strong> For processing in-app purchases and premium license verification</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">5. DATA PROCESSING</h2>
                        <p>
                            The Application does NOT store or process personal data. All settings and profiles are stored locally on your device. We do not collect, transmit, or share any personal information. Premium license status is verified through Google Play Billing API.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">6. INTERNET CONNECTION</h2>
                        <p>Certain features require an internet connection:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Downloading AutoEQ profiles from our public repository</li>
                            <li>Checking for profile updates</li>
                            <li>Premium license verification through Google Play Billing</li>
                        </ul>
                        <p className="mt-4">
                            Internet usage is minimal and limited to these specific functions. You are responsible for any data charges from your mobile provider.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">7. DEVICE COMPATIBILITY</h2>
                        <p>The app is designed for Android devices. Audio enhancement capabilities may vary depending on:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Device hardware capabilities</li>
                            <li>Android version</li>
                            <li>Available audio effects</li>
                            <li>Connected audio devices</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">8. BATTERY USAGE</h2>
                        <p>
                            The app may request to ignore battery optimization to maintain audio processing quality. This may affect battery life. You can modify these settings in your device&apos;s battery optimization settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">9. INTELLECTUAL PROPERTY</h2>
                        <p>
                            Unauthorized copying, modification, reverse engineering, or distribution of the Application is strictly prohibited. All intellectual property rights remain with the Service Provider.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">10. DISCLAIMER OF WARRANTIES</h2>
                        <p>The app is provided &quot;AS IS&quot; without warranties of any kind. We do not guarantee:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Error-free operation</li>
                            <li>Continuous availability</li>
                            <li>Compatibility with all devices</li>
                            <li>Specific audio quality improvements</li>
                            <li>Continuous access to premium features without valid license</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">11. LIMITATION OF LIABILITY</h2>
                        <p>We shall not be liable for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Any direct, indirect, or consequential damages</li>
                            <li>Loss of data or device malfunction</li>
                            <li>Hearing damage from improper volume levels</li>
                            <li>Network or connectivity issues</li>
                            <li>Google Play Billing transaction issues</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">12. USER RESPONSIBILITIES</h2>
                        <p>You agree to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Use the app responsibly and at safe volume levels</li>
                            <li>Maintain your device&apos;s battery and connectivity</li>
                            <li>Accept app updates when available</li>
                            <li>Comply with applicable laws and regulations</li>
                            <li>Not jailbreak or root your device, which may compromise security</li>
                            <li>Use premium features only with valid license</li>
                            <li>Not attempt to bypass premium license verification</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">13. THIRD-PARTY SERVICES</h2>
                        <p>
                            The Application utilizes Google Play Services and Google Play Billing, which have their own Terms and Conditions. We are not responsible for third-party service policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">14. UPDATES AND MODIFICATIONS</h2>
                        <p>
                            We may update the app and these terms at any time. Continued use constitutes acceptance of updates. We reserve the right to discontinue the app with or without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">15. TERMINATION</h2>
                        <p>
                            You may terminate use by uninstalling the app. Upon termination, all rights granted under these terms end. Premium licenses remain tied to your Google account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">16. CHANGES TO TERMS</h2>
                        <p>
                            We may periodically update these Terms and Conditions. You are advised to review this page regularly for changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">17. CONTACT</h2>
                        <p>
                            For questions about these terms, please contact us at <a href="mailto:xhonirexhepi@gmail.com" className="text-primary hover:underline">xhonirexhepi@gmail.com</a>.<br />
                            For billing and purchase inquiries, please contact Google Play Support.
                        </p>
                    </section>

                    <p className="mt-8 text-sm text-muted-foreground">
                        By using The Perfect Sound, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
