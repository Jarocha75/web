import { MapPin, Phone, Mail, LucideIcon } from "lucide-react";

// — Konštanty —

const icons: Record<string, LucideIcon> = {
  map: MapPin,
  phone: Phone,
  mail: Mail,
}

const CX = {
  wrapper: "flex items-start gap-6 group",
  iconBox: "w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300",
  textWrap: "space-y-1",
  label: "text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-primary transition-colors",
  value: "text-xl font-bold text-gray-900",
  link: "text-xl font-bold text-gray-900 hover:underline decoration-primary decoration-2 underline-offset-4",
  subValue: "text-gray-500 font-light italic",
}

// — Typy —

interface ContactProps {
  label: string;
  value: string;
  subValue?: string;
  isLink?: string;
  icon: "map" | "phone" | "mail";
}

// — Komponent —

export const ContactInfoCard = ({
  label,
  value,
  subValue,
  isLink,
  icon,
}: ContactProps) => {
  const IconComponent = icons[icon];

  return (
    <div className={CX.wrapper}>
      <div className={CX.iconBox}>
        <IconComponent size={24} strokeWidth={1.5} />
      </div>

      <div className={CX.textWrap}>
        <p className={CX.label}>{label}</p>

        {isLink ? (
          <a href={isLink} className={CX.link}>
            {value}
          </a>
        ) : (
          <p className={CX.value}>{value}</p>
        )}

        {subValue && <p className={CX.subValue}>{subValue}</p>}
      </div>
    </div>
  );
};
