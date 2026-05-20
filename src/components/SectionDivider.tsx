type SectionDividerProps = {
  title: string
  badge?: string
}

export function SectionDivider({ title, badge }: SectionDividerProps) {
  return (
    <div className="mb-8 flex flex-col items-center gap-3 px-2 sm:mb-10">
      <div className="flex w-full max-w-xs items-center gap-3 sm:max-w-sm">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30" />
        <span className="text-[8px] text-gold/40 sm:text-[9px]" aria-hidden>
          ✦
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <h2 className="section-title">{title}</h2>
        {badge ? (
          <span className="rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-gold/95 uppercase">
            {badge}
          </span>
        ) : null}
      </div>
    </div>
  )
}
