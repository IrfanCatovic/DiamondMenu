export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(180,60,30,0.12)_0%,transparent_70%)] smoke-orb" />
      <div className="absolute -right-1/4 top-1/2 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(45,90,61,0.08)_0%,transparent_70%)] smoke-orb-alt" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] smoke-orb" />
      <div className="absolute top-0 left-0 right-0 h-px led-line opacity-60" />
      <div className="absolute top-24 left-0 right-0 h-px led-line opacity-30" />
    </div>
  )
}
