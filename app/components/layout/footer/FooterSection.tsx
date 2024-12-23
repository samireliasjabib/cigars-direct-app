interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({title, children}: FooterSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-base font-semibold text-red-500">{title}</h2>
      {children}
    </div>
  );
}
