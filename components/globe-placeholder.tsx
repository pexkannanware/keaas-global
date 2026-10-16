// Soft sphere shown while the 3D globe's bundle and texture load, so the hero is never blank.
export function GlobePlaceholder() {
  return (
    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
      <div className="aspect-square h-[88%] max-w-[88%] animate-pulse rounded-full bg-[radial-gradient(circle_at_38%_32%,#ffffff,#f3f3f2_62%,#e4e4e3)] shadow-[inset_0_0_40px_rgba(0,0,0,0.04)]" />
    </div>
  );
}
