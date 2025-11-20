import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for The Perfect Sound - Professional Audio Equalizer for Android",
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>

                <div className="mb-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm font-medium text-center">
                        This Privacy Policy applies to <strong>The Perfect Sound Android Application</strong>, not this website.
                    </p>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
                    <p className="text-muted-foreground">
                        <strong>Effective Date:</strong> April 2, 2025<br />
                        <strong>Last Updated:</strong> April 2, 2025
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">1. DATA COLLECTION AND PROCESSING</h2>
                        <p>
                            The Perfect Sound ("we", "our", "the app") is committed to protecting your privacy and complying with the General Data Protection Regulation (GDPR). This application does NOT collect, store, or process any personal data from users.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">2. LOCAL DATA STORAGE</h2>
                        <p>All application data, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Audio profiles and equalizer settings</li>
                            <li>User preferences and configurations</li>
                            <li>Custom audio profiles</li>
                            <li>Device-specific audio settings</li>
                            <li>Premium license status</li>
                        </ul>
                        <p>are stored exclusively on your local device and are never transmitted to external servers or third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">3. IN-APP PURCHASES AND BILLING</h2>
                        <p>Our app offers premium features through Google Play Billing:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Purchase transactions are processed securely by Google Play Store</li>
                            <li>We do not store or have access to your payment information</li>
                            <li>Google Play handles all payment processing, refunds, and billing inquiries</li>
                            <li>Premium license verification is performed locally through Google Play Billing API</li>
                            <li>No personal or financial data is transmitted to our servers during purchase verification</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">4. PERMISSIONS USAGE</h2>
                        <p>Our app requires certain permissions to function properly. Here's why each permission is necessary:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>INTERNET:</strong> Required to download pre-made AutoEQ profiles from our public repository (GitHub) and for Google Play Billing license verification. No personal data is transmitted during these operations.</li>
                            <li><strong>ACCESS_NETWORK_STATE:</strong> Used to check internet connectivity before attempting profile downloads and license verification.</li>
                            <li><strong>BLUETOOTH & BLUETOOTH_CONNECT:</strong> Necessary to detect connected Bluetooth audio devices (headphones, speakers) and automatically apply appropriate audio profiles.</li>
                            <li><strong>MODIFY_AUDIO_SETTINGS:</strong> Essential for applying audio enhancements and equalizer settings to your device's audio system.</li>
                            <li><strong>USB_PERMISSION:</strong> Required to detect and configure USB audio devices (DACs, USB headphones).</li>
                            <li><strong>FOREGROUND_SERVICE & FOREGROUND_SERVICE_MEDIA_PLAYBOOK:</strong> Allows the app to maintain audio processing in the background while you use other apps.</li>
                            <li><strong>POST_NOTIFICATIONS:</strong> Used to display service status notifications (Android 13+).</li>
                            <li><strong>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS:</strong> Prevents the system from stopping audio processing to save battery.</li>
                            <li><strong>BILLING:</strong> Required for processing in-app purchases and premium license verification through Google Play Billing.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">5. THIRD-PARTY SERVICES</h2>
                        <p>This application uses the following third-party services:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Google Play Services and Google Play Billing for in-app purchases and license verification</li>
                            <li>These services have their own privacy policies and terms of service</li>
                            <li>We do not control or have access to any data that these services may collect</li>
                        </ul>
                        <p className="mt-4">
                            Google Play Services Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a><br />
                            Google Play Terms of Service: <a href="https://play.google.com/about/play-terms/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://play.google.com/about/play-terms/</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">6. DATA SHARING</h2>
                        <p>We do NOT share any data with third parties. The app operates entirely offline except for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Optional download of public AutoEQ profiles</li>
                            <li>Google Play Billing transactions and license verification</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">7. YOUR RIGHTS UNDER GDPR</h2>
                        <p>Since we do not collect personal data, most GDPR rights are not applicable. However, you have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Uninstall the application at any time</li>
                            <li>Contact us with privacy-related questions</li>
                            <li>Manage your Google Play purchases through your Google account</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">8. CHILDREN'S PRIVACY</h2>
                        <p>
                            The Application is not used to knowingly solicit data from or market to children under the age of 13. Since we do not collect any personal information, there is no risk to children's privacy. In-app purchases require parental approval for accounts under 18.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">9. SECURITY</h2>
                        <p>
                            Since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals. All settings are stored locally on your device. Premium license verification is handled securely through Google Play's encrypted APIs.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">10. CHANGES TO THIS POLICY</h2>
                        <p>
                            This Privacy Policy may be updated from time to time. We will notify you of any changes by updating this page. Continued use constitutes acceptance of any changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">11. CONTACT INFORMATION</h2>
                        <p>
                            For privacy-related questions or concerns, please contact us at <a href="mailto:xhonirexhepi@gmail.com" className="text-primary hover:underline">xhonirexhepi@gmail.com</a>.<br />
                            For billing and purchase inquiries, please contact Google Play Support.
                        </p>
                    </section>

                    <p className="mt-8 text-sm text-muted-foreground">
                        By using The Perfect Sound, you acknowledge that you have read and understood this Privacy Policy.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
