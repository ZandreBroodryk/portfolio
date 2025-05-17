export default function IconChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="size-fit rounded-xl bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-800 p-px">
      <div className="size-fit rounded-[inherit] bg-neutral-800 p-3 text-lime-300 shadow-xl">
        {children}
      </div>
    </div>
  );
}
