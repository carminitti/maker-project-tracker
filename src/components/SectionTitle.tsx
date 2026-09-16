type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
