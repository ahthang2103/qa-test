type OutlineItem = {
  date: string;
  label: string;
};

type OutlineProps = {
  items: OutlineItem[];
  activeDate: string;
  onSelect: (date: string) => void;
};

export const Outline = ({ items, activeDate, onSelect }: OutlineProps) => {
  return (
    <nav className="hidden lg:block sticky top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto w-44 shrink-0">
      <ul className="space-y-1.5 border-l-2 border-black/10">
        {items.map((item) => (
          <li key={item.date}>
            <button
              onClick={() => onSelect(item.date)}
              className={`block w-full cursor-pointer border-l-2 -ml-0.5 py-1 pl-3 text-left text-xs transition-colors ${
                activeDate === item.date
                  ? 'border-black/60 font-medium text-black/80'
                  : 'border-transparent text-black/40 hover:text-black/60'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
