"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-3 no-underline">
                    <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <motion.img
                            src="/tps_pages/TPS.svg"
                            alt="The Perfect Sound Logo"
                            className="h-12 w-12"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <div>
                            <h1 className="text-xl font-bold text-foreground">
                                The Perfect Sound
                            </h1>
                            <p className="text-xs text-muted-foreground">Professional Audio Enhancement</p>
                        </div>
                    </motion.div>
                </Link>
                <ThemeToggle />
            </div>
        </motion.header>
    )
}
