"use client"

import { Music, Waves, Sliders, Settings, Zap, Headphones, Sparkles, Volume2, Radio, Gauge, Download, ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import { useRef, useState } from "react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

// 3D Tilt effect for cards
const cardHover = {
  rest: { scale: 1, rotateX: 0, rotateY: 0 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  }
}

// Magnetic button effect
const magneticVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 }
}

const FloatingParticle = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute h-2 w-2 rounded-full bg-primary/20"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      y: [-100, -600],
      x: [0, Math.random() * 200 - 100]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 3,
      ease: "easeInOut"
    }}
  />
)

function AnimatedSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Particles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
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
          <ThemeToggle />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="mx-auto max-w-4xl space-y-4 sm:space-y-6"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 text-xs sm:text-sm">
              <Sparkles className="mr-1.5 sm:mr-2 h-3 w-3" />
              Professional Audio for Android
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl px-2 sm:px-0"
          >
            Transform Your
            <motion.span
              className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Android Audio
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground px-4 sm:px-6 md:px-0"
          >
            5 professional equalizers, AutoEQ profiles for 1000+ headphones,
            and advanced audio controls for an unprecedented listening experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center pt-4 sm:pt-6 px-4 sm:px-0"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 rounded-full px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.pepsy.theperfectsound" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="whitespace-nowrap">Download on Play Store</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-6 sm:pt-8 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="mx-auto h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <AnimatedSection className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-8 sm:mb-10 md:mb-12 text-center px-4 sm:px-0"
        >
          <motion.h3 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            5 Powerful Equalizers
          </motion.h3>
          <motion.p variants={fadeInUp} className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-2 sm:px-0">
            Choose the perfect equalizer for every situation
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* TPS Card */}
          <motion.div
            variants={fadeInScale}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              whileHover={{
                rotateX: 5,
                rotateY: 5,
                scale: 1.05,
                transition: { type: "spring" as const, stiffness: 300, damping: 20 }
              }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/30">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-primary/10"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6, type: "spring" as const, stiffness: 200 }}
                    >
                      <Waves className="h-6 w-6 text-primary" />
                    </motion.div>
                    <Badge>All-in-One</Badge>
                  </div>
                  <CardTitle className="text-2xl">TPS</CardTitle>
                  <CardDescription>The Perfect Sound Equalizer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Complete equalizer with multiband compressor, limiter, virtualizer, and loudness enhancer.
                  </p>
                  <ul className="space-y-2 text-sm">
                    {["Pre/Post Equalizer (3 bands)", "Multiband Compressor", "7 Built-in Profiles", "Spatial Effects"].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          className="h-1.5 w-1.5 rounded-full bg-primary"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* AutoEQ Card */}
          <motion.div variants={fadeInScale}>
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Headphones className="h-6 w-6 text-accent" />
                  </motion.div>
                  <Badge variant="secondary">1000+ Profiles</Badge>
                </div>
                <CardTitle className="text-2xl">AutoEQ</CardTitle>
                <CardDescription>Scientific Headphone Profiles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Professionally measured equalization profiles for over 1000 headphone models.
                </p>
                <ul className="space-y-2 text-sm">
                  {["Complete AutoEQ database", "Import/Export profiles", "Smart Auto-Preamp", "Device association"].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Graphic EQ Card */}
          <motion.div variants={fadeInScale}>
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sliders className="h-6 w-6 text-primary" />
                  </motion.div>
                  <Badge>Classic</Badge>
                </div>
                <CardTitle className="text-2xl">Graphic</CardTitle>
                <CardDescription>Band Equalizer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Classic control with vertical sliders for precise frequency adjustment.
                </p>
                <ul className="space-y-2 text-sm">
                  {["5, 15, or 31 bands", "Range -15 dB to +15 dB", "Genre presets", "Built-in limiter"].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-primary"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Parametric EQ Card */}
          <motion.div variants={fadeInScale}>
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Settings className="h-6 w-6 text-accent" />
                  </motion.div>
                  <Badge variant="secondary">Advanced</Badge>
                </div>
                <CardTitle className="text-2xl">Parametric</CardTitle>
                <CardDescription>Total Control</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Up to 60 customizable filters for the most precise control possible.
                </p>
                <ul className="space-y-2 text-sm">
                  {["10-60 dynamic filters", "7 filter types", "Graphic visualization", "50+ genre presets"].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Maximizer Card */}
          <motion.div variants={fadeInScale}>
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap className="h-6 w-6 text-primary" />
                  </motion.div>
                  <Badge>Boost</Badge>
                </div>
                <CardTitle className="text-2xl">Maximizer</CardTitle>
                <CardDescription>Smart Volume</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Intelligent volume amplifier that increases loudness without distortion.
                </p>
                <ul className="space-y-2 text-sm">
                  {["Gain 0-10 dB", "Automatic anti-clipping", "Dynamic compression", "Perfect for speakers"].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-primary"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* General Features Card */}
          <motion.div variants={fadeInScale}>
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="h-6 w-6 text-accent" />
                  </motion.div>
                  <Badge variant="secondary">Extra</Badge>
                </div>
                <CardTitle className="text-2xl">Features</CardTitle>
                <CardDescription>Additional Capabilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Customizable themes, audio visualizer, and much more.
                </p>
                <ul className="space-y-2 text-sm">
                  {["4 Themes (Light/Dark/AMOLED)", "60 FPS Visualizer", "Device profiles", "Haptic feedback"].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* TPS Detailed Section */}
      <AnimatedSection className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-8 sm:mb-10 md:mb-12 text-center px-4 sm:px-0"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs sm:text-sm">
                <Waves className="mr-1.5 sm:mr-2 h-3 w-3" />
                Main Equalizer
              </Badge>
            </motion.div>
            <motion.h3 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              TPS - The Perfect Sound
            </motion.h3>
            <motion.p variants={fadeInUp} className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-2 sm:px-0">
              The most complete equalizer with all professional tools integrated
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Tabs defaultValue="components" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 h-auto">
                <TabsTrigger value="components" className="text-xs sm:text-sm py-2 sm:py-2.5">Components</TabsTrigger>
                <TabsTrigger value="profiles" className="text-xs sm:text-sm py-2 sm:py-2.5">Profiles</TabsTrigger>
                <TabsTrigger value="advanced" className="text-xs sm:text-sm py-2 sm:py-2.5 col-span-2 lg:col-span-1">Advanced</TabsTrigger>
              </TabsList>

              <TabsContent value="components" className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Sliders className="h-5 w-5 text-primary" />
                        Pre & Post Equalizer
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold">Pre-Equalizer (3 Bands)</h4>
                        <p className="text-sm text-muted-foreground">
                          Equalizer applied before compression to shape the initial sound.
                        </p>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">100 Hz</Badge>
                            <span className="text-muted-foreground">Bass - Sub-bass and deep bass</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">1000 Hz</Badge>
                            <span className="text-muted-foreground">Mids - Vocals and instruments</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">8000 Hz</Badge>
                            <span className="text-muted-foreground">Treble - Brightness and details</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold">Post-Equalizer (3 Bands)</h4>
                        <p className="text-sm text-muted-foreground">
                          Equalizer applied after compression for the final touch. Includes Frequency Linking for automatic synchronization with the compressor.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Gauge className="h-5 w-5 text-primary" />
                        Multiband Compressor
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Controls audio dynamics across 3 separate bands, making the audio more uniform and pleasant.
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {[
                          { title: "Attack/Release", desc: "Compressor reaction speed" },
                          { title: "Ratio", desc: "Compression intensity" },
                          { title: "Threshold", desc: "When compression starts" },
                          { title: "Noise Gate", desc: "Eliminates background noise" }
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg border p-3"
                          >
                            <h5 className="mb-1 text-sm font-semibold">{item.title}</h5>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="grid gap-4 md:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Radio className="h-5 w-5 text-accent" />
                          Virtualizer
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Creates a 3D spatialization effect for headphones, simulating a wider soundstage and improving stereo separation.
                        </p>
                        <div className="mt-3 rounded-lg bg-muted/50 p-3">
                          <p className="text-xs font-medium">Intensity: 0-1000</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Volume2 className="h-5 w-5 text-accent" />
                          Loudness Enhancer
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Increases perceived volume without distortion, making audio "louder" intelligently.
                        </p>
                        <div className="mt-3 rounded-lg bg-muted/50 p-3">
                          <p className="text-xs font-medium">Range: 0 dB to +10 dB</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="profiles" className="mt-6">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid gap-4 md:grid-cols-2"
                >
                  {[
                    { title: "BALANCED", badge: "Balanced", desc: "Daily listening, varied music, podcasts", content: "Neutral and balanced sound with slight bass and treble boost. Gentle compression to maintain natural dynamics." },
                    { title: "BASS BOOST", badge: "Powerful Bass", desc: "Hip-hop, EDM, Dubstep, Trap", content: "Powerful bass (+6 dB) with slightly reduced mids. Moderate bass compression for maximum impact." },
                    { title: "VOICE", badge: "Clarity", desc: "Podcasts, audiobooks, calls", content: "Reduced bass (-3 dB) and highly emphasized mids (+5 dB) for maximum vocal clarity." },
                    { title: "NIGHT", badge: "Night Mode", desc: "Night listening, low volume", content: "Very strong compression to reduce peaks and noise. Perfect for not disturbing others." },
                    { title: "MOVIE", badge: "Cinema", desc: "Movies, TV series, YouTube videos", content: "Deep bass for effects and bright treble for dialogue. Moderate compression for cinematic experience." },
                    { title: "MUSIC", badge: "Hi-Fi", desc: "Quality music listening", content: "Balanced bass and treble boost with light compression. Preserves original dynamics." },
                  ].map((profile, i) => (
                    <motion.div key={i} variants={fadeInScale}>
                      <Card>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle>{profile.title}</CardTitle>
                            <Badge variant={i % 2 === 0 ? "default" : "secondary"}>{profile.badge}</Badge>
                          </div>
                          <CardDescription>{profile.desc}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">
                          {profile.content}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}

                  <motion.div variants={fadeInScale} className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>SPEAKER</CardTitle>
                          <Badge>Speaker</Badge>
                        </div>
                        <CardDescription>Smartphone/tablet speakers</CardDescription>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        Highly emphasized bass with aggressive compression and active Loudness (+2 dB). Optimized for small speakers.
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="advanced" className="mt-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Advanced Controls Mode</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="mb-2 flex items-center gap-2 font-semibold">
                          <Badge variant="outline">Simple</Badge>
                          Default Mode
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Shows only Pre/Post EQ, Virtualizer, and Loudness. Ideal for most users.
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 flex items-center gap-2 font-semibold">
                          <Badge>Advanced</Badge>
                          For Experts
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Shows all compressor controls and detailed limiter controls. For users who want maximum control.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Custom Profiles</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Create and manage up to 20 custom profiles with all your preferred settings.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Save complete configuration (EQ, compressor, effects)",
                          "Rename, delete, or overwrite existing profiles",
                          "Associate specific profiles to headphones/speakers",
                          "Automatic switching when connecting device"
                        ].map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-8 sm:mb-10 md:mb-12 text-center px-4 sm:px-0"
          >
            <motion.h3 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </motion.h3>
            <motion.p variants={fadeInUp} className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-2 sm:px-0">
              Everything you need to know about The Perfect Sound
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-sm sm:text-base">Which equalizer should I use?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  It depends on your needs: <strong>TPS</strong> is perfect for a complete all-in-one experience.
                  <strong> AutoEQ</strong> if you have headphones supported in the database.
                  <strong> Graphic Equalizer</strong> for classic and intuitive control.
                  <strong> Parametric</strong> for maximum control and precision.
                  <strong> Maximizer</strong> simply to increase volume.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-sm sm:text-base">Can I use multiple equalizers simultaneously?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  No, you can only activate one equalizer at a time. This prevents conflicts and ensures the best possible audio quality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-sm sm:text-base">Does the app work with all music apps?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  Yes! The Perfect Sound works at the system level, so it enhances audio from all apps: Spotify, YouTube Music, Netflix, games, and any other app that plays audio.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-sm sm:text-base">How much battery does it consume?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  The app is optimized for minimal battery consumption (less than 1% extra). Audio processing happens efficiently without significantly impacting device battery life.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-sm sm:text-base">What does the Premium version include?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  The Premium version includes: 31-band Graphic Equalizer, complete AutoEQ with all profiles,
                  unlimited Export/Import, all genre presets, and no ads.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-sm sm:text-base">Which Android devices are supported?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                  The Perfect Sound requires Android 9.0 (Pie) or higher. Note: some manufacturers limit audio APIs,
                  so not all devices support all effects. You can check support in the app's "Info" section.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
              <CardContent className="relative p-6 sm:p-8 md:p-12 text-center">
                <motion.img
                  src="/tps_pages/TPS.svg"
                  alt="The Perfect Sound Logo"
                  className="mx-auto mb-4 sm:mb-6 h-16 w-16 sm:h-20 sm:w-20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <h3 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight px-2 sm:px-0">
                  Ready to transform your audio?
                </h3>
                <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg text-muted-foreground px-4 sm:px-6 md:px-0">
                  Download The Perfect Sound today and discover how your Android device should really sound.
                </p>
                <div className="flex justify-center px-4 sm:px-0">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                    <Button size="lg" className="gap-2 rounded-full px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base" asChild>
                      <a href="https://play.google.com/store/apps/details?id=com.pepsy.theperfectsound" target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="whitespace-nowrap">Download Free</span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground"
          >
            <p>© 2025 The Perfect Sound. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
