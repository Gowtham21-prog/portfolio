export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-8 font-mono text-xs text-white/30 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>Designed &amp; built by Gowtham M.</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
