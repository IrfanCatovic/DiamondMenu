type SectionDividerProps = {
  title: string
  badge?: string
}

export function SectionDivider({ title, badge }: SectionDividerProps) {
  return (
    <div className="mb-6 flex flex-col items-center gap-2">
      <div className="flex w-full max-w-xs items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
        <span className="text-gold/60 text-[10px]">◆</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
      </div>
      <div className="flex items-center gap-3">
        <h2 className="section-title">{title}</h2>
        {badge ? (
          <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[10px] font-medium tracking-wider text-gold uppercase">
            {badge}
          </span>
        ) : null}
      </div>
    </div>
  )
}
