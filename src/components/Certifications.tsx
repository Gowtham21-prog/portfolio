import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Star, Maximize2 } from "lucide-react";
import { CERTS } from "../data";
import SectionHead from "./SectionHead";
import SectionGlow from "./SectionGlow";
import TiltCard from "./TiltCard";
import CertLightbox, { type LightboxCert } from "./CertLightbox";

export default function Certifications() {
  const featured = CERTS.find((c) => c.featured);
  const rest = CERTS.filter((c) => !c.featured);
  const [lightbox, setLightbox] = useState<LightboxCert>(null);

  return (
    <section
      id="certifications"
      className="snap-section relative px-6 py-32 md:px-10"
    >
      <SectionGlow accent="violet" side="right" />
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="// certifications"
          title="Credentials"
          sub="Courses, certifications, and events — click any card to view the full certificate."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Featured NPTEL cert — bigger, spans 2 columns */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-2"
            >
              <TiltCard
                onClick={() => setLightbox(featured)}
                data-cursor-label="click to enlarge"
                className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-teal/25 bg-gradient-to-br from-teal/10 via-surface to-surface shadow-glow"
              >
                <div className="relative flex h-full flex-col justify-between p-7 md:flex-row md:items-center md:gap-8">
                  <div className="flex-1">
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-teal/15 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-teal">
                      <Star size={12} className="fill-teal" />
                      Featured
                    </span>
                    <h3 className="font-display text-2xl font-bold md:text-3xl">
                      {featured.name}
                    </h3>
                    <p className="mt-1 text-teal">{featured.issuer}</p>
                    <div className="mt-4 flex flex-wrap gap-3 font-mono text-xs text-white/50">
                      {featured.score && (
                        <span className="rounded-full border border-teal/30 px-3 py-1 text-teal">
                          {featured.score}
                        </span>
                      )}
                      <span className="rounded-full border border-white/10 px-3 py-1">
                        {featured.date}
                      </span>
                    </div>
                  </div>

                  {/* certificate preview */}
                  <div className="relative mt-6 h-40 w-full flex-shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-2xl md:mt-0 md:h-36 md:w-56">
                    <img
                      src={featured.image}
                      alt={`${featured.name} certificate`}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="h-full w-full scale-105 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center bg-bg/0 opacity-0 transition-all duration-300 group-hover:bg-bg/40 group-hover:opacity-100">
                      <span className="flex items-center gap-1.5 rounded-full bg-bg/80 px-3 py-1.5 font-mono text-[11px] text-teal">
                        <Maximize2 size={12} />
                        Enlarge
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          )}

          {/* Stat card alongside featured cert on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block"
          >
            <div className="glass flex h-full flex-col justify-center gap-2 rounded-2xl p-7 text-center">
              <span className="font-display text-4xl font-bold text-teal">
                {CERTS.length}+
              </span>
              <p className="font-mono text-xs uppercase tracking-wider text-white/40">
                Certifications &amp; events
              </p>
            </div>
          </motion.div>

          {/* Remaining certs */}
          {rest.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard
                onClick={() => setLightbox(c)}
                data-cursor-label="click to enlarge"
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 transition-shadow duration-300 hover:border-teal/30 hover:shadow-glow"
              >
                <div className="relative h-36 w-full overflow-hidden border-b border-white/10 bg-black/20">
                  <img
                    src={c.image}
                    alt={`${c.name} certificate`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-bg/50 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                    <Award size={22} className="text-teal/70" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-bg/0 opacity-0 transition-all duration-300 group-hover:bg-bg/40 group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 rounded-full bg-bg/80 px-3 py-1.5 font-mono text-[11px] text-teal">
                      <Maximize2 size={12} />
                      Enlarge
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-sm font-semibold leading-snug">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/45">{c.issuer}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[10px] text-white/40">
                    {c.score && (
                      <span className="rounded-full border border-teal/25 px-2 py-0.5 text-teal">
                        {c.score}
                      </span>
                    )}
                    <span>{c.date}</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <CertLightbox cert={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
