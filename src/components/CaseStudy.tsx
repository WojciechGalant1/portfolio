"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ScanBarcode, ImageIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 px-6 bg-surface-alt">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent font-mono text-sm tracking-wider uppercase mb-4 text-center"
        >
          Case Study
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Workwear Management System
        </motion.h2>

        <div className="space-y-12">
          {/* The Problem */}
          <motion.div
            custom={0}
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-mono">
                1
              </span>
              The Problem
            </h3>
            <p className="text-muted leading-relaxed pl-10">
              During my internship, the company tracked employee workwear
              manually — spreadsheets and paper logs. This led to lost items,
              missed expiration dates on safety equipment, and no visibility into
              current inventory levels. The process was error-prone and
              time-consuming for HR and warehouse staff.
            </p>
          </motion.div>

          {/* Architecture */}
          <motion.div
            custom={1}
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-mono">
                2
              </span>
              Architecture
            </h3>
            <div className="pl-10">
              <div className="bg-surface border border-border rounded-xl p-6 font-mono text-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                  <div className="bg-accent/10 text-accent px-4 py-3 rounded-lg border border-accent/20">
                    <div className="text-xs text-muted mb-1">Frontend</div>
                    JavaScript + HTML/CSS
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted rotate-90 sm:rotate-0 shrink-0" />
                  <div className="bg-accent/10 text-accent px-4 py-3 rounded-lg border border-accent/20">
                    <div className="text-xs text-muted mb-1">Backend</div>
                    PHP (Custom MVC)
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted rotate-90 sm:rotate-0 shrink-0" />
                  <div className="bg-accent/10 text-accent px-4 py-3 rounded-lg border border-accent/20">
                    <div className="text-xs text-muted mb-1">Database</div>
                    MySQL
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border text-center">
                  <div className="inline-flex items-center gap-2 bg-accent-secondary/10 text-accent-secondary px-4 py-2 rounded-lg border border-accent-secondary/20">
                    <ScanBarcode className="w-4 h-4" />
                    Barcode Scanner Integration
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Decisions */}
          <motion.div
            custom={2}
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-mono">
                3
              </span>
              Key Technical Decisions
            </h3>
            <div className="pl-10 space-y-4">
              <div className="bg-surface border border-border rounded-xl p-5">
                <h4 className="font-medium text-sm mb-2">
                  Custom MVC instead of a framework
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  Built a custom MVC architecture from scratch as a learning
                  exercise and to meet internship requirements. This deepened
                  understanding of routing, controllers, and the request
                  lifecycle that frameworks abstract away.
                </p>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <h4 className="font-medium text-sm mb-2">
                  Barcode scanner integration
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  Integrated hardware barcode scanners via Web API to enable
                  instant item lookup and allocation. Warehouse staff can scan
                  items directly from the browser without installing native apps.
                </p>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <h4 className="font-medium text-sm mb-2">
                  Multilingual support (PL/EN)
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  Implemented a translation system supporting Polish and English
                  to accommodate international teams. Language selection persists
                  per user session with fallback to browser locale.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Screenshots placeholder */}
          <motion.div
            custom={3}
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-mono">
                4
              </span>
              Screenshots
            </h3>
            <div className="pl-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Dashboard View",
                "Inventory Management",
                "Barcode Scanning",
              ].map((label) => (
                <div
                  key={label}
                  className="aspect-video bg-surface border border-border rounded-xl flex items-center justify-center"
                >
                  <div className="text-center">
                    <ImageIcon className="w-8 h-8 text-muted/30 mx-auto mb-2" />
                    <span className="text-xs text-muted/50">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Result */}
          <motion.div
            custom={4}
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-mono">
                5
              </span>
              Result
            </h3>
            <div className="pl-10 bg-gradient-to-r from-accent/5 to-accent-secondary/5 border border-accent/10 rounded-xl p-5">
              <p className="text-foreground leading-relaxed">
                Deployed for real-world use during the internship. The system
                eliminated manual tracking errors, provided instant visibility
                into workwear inventory, and automated expiration date alerts —
                saving hours of administrative work weekly.
              </p>
            </div>
          </motion.div>

          {/* Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="https://github.com/WojciechGalant1/Workwear-Management"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              <SiGithub className="w-4 h-4" />
              View Source Code
            </a>
            <Link
              href="/projects/workwear-management"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-background font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Read Full Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
