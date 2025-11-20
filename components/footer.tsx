"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-border/40">
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-xs text-muted-foreground/70 text-center">
                            For the Android App:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <Link
                                href="/privacy-policy"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <span className="text-muted-foreground">•</span>
                            <Link
                                href="/terms-conditions"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                        © 2025 The Perfect Sound. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
