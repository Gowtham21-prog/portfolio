import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export type LightboxCert = {
  name: string;
  issuer: string;
  date: string;
  image: string;
} | null;

export default function CertLightbox({
  cert,
  onClose,
}: {
  cert: LightboxCert;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!cert) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[400] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-md md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h3 className="font-display text-lg font-semibold">{cert.name}</h3>
                <p className="text-sm text-white/50">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-label="open original"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-teal/40 hover:text-teal"
                  aria-label="Open original image in new tab"
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={onClose}
                  data-cursor-label="close"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-red-400/40 hover:text-red-400"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="overflow-auto bg-black/30 p-4">
              <img
                src={cert.image}
                alt={`${cert.name} certificate — full size`}
                className="mx-auto max-h-[70vh] w-auto rounded-lg object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
