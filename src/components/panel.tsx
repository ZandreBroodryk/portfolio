export default function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full overflow-clip rounded-3xl border border-neutral-600 bg-gradient-to-br from-neutral-700/30 to-neutral-800/30 p-6 shadow-xl backdrop-blur transition-colors duration-700 hover:to-neutral-800/70">
      {children}
    </div>
  );
}
