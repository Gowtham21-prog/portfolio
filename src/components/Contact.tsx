import { motion } from "framer-motion";
import { CONTACT } from "../data";
import SectionHead from "./SectionHead";
import SectionGlow from "./SectionGlow";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="snap-section relative px-6 py-32 md:px-10">
      <SectionGlow accent="mixed" side="left" />
      <div className="mx-auto max-w-2xl">
        <SectionHead
          eyebrow="// contact"
          title="Let's build something."
          sub="I'm currently looking for full-stack internship opportunities. If you've got a role — or just want to talk shop about React and Spring Boot — my inbox is open."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass overflow-hidden rounded-2xl shadow-glow"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6159]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C93F]" />
            <span className="ml-2 font-mono text-xs text-white/30">
              contact.sh
            </span>
          </div>
          <div className="px-5 py-6 font-mono text-sm">
            <p>
              <span className="text-teal">gowtham@dev</span>
              <span className="text-white/30">:~$</span> cat contact.json
            </p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <span className="text-[#7DA6FF]">"email"</span>:{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-teal hover:underline"
                >
                  "{CONTACT.email}"
                </a>
                ,
              </li>
              <li>
                <span className="text-[#7DA6FF]">"github"</span>:{" "}
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  "{CONTACT.githubLabel}"
                </a>
                ,
              </li>
              <li>
                <span className="text-[#7DA6FF]">"linkedin"</span>:{" "}
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:underline"
                >
                  "{CONTACT.linkedinLabel}"
                </a>
                ,
              </li>
              <li>
                <span className="text-[#7DA6FF]">"status"</span>:{" "}
                <span className="text-teal">"open_to_internships"</span>,
              </li>
              <li>
                <span className="text-[#7DA6FF]">"location"</span>:{" "}
                <span className="text-white/70">"{CONTACT.location}"</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <MagneticButton
          href={`mailto:${CONTACT.email}`}
          variant="solid"
          cursorLabel="send"
          className="mt-8"
        >
          Say hello — {CONTACT.email}
        </MagneticButton>
      </div>
    </section>
  );
}
