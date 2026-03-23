import { MapPin, Phone, Mail, LucideIcon } from "lucide-react";

// Definujeme, aké dáta (props) môže tento komponent prijať
interface ContactProps {
  label: string;
  value: string;
  subValue?: string; // Voliteľné (napr. pre mesto pod ulicou)
  isLink?: string; // Voliteľné (pre tel: alebo mailto:)
  icon: "map" | "phone" | "mail";
}

// Mapa ikoniek pre jednoduchšie priradenie
const icons: Record<string, LucideIcon> = {
  map: MapPin,
  phone: Phone,
  mail: Mail,
};

export const ContactInfoCard = ({
  label,
  value,
  subValue,
  isLink,
  icon,
}: ContactProps) => {
  const IconComponent = icons[icon];

  return (
    <div className="flex items-start gap-6 group">
      {/* IKONA v peknom kruhu s efektom pri prejdení */}
      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        <IconComponent size={24} strokeWidth={1.5} />
      </div>

      {/* TEXTOVÁ ČASŤ */}
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-blue-600 transition-colors">
          {label}
        </p>

        {isLink ? (
          <a
            href={isLink}
            className="text-xl font-bold text-gray-900 hover:underline decoration-blue-600 decoration-2 underline-offset-4"
          >
            {value}
          </a>
        ) : (
          <p className="text-xl font-bold text-gray-900">{value}</p>
        )}

        {subValue && (
          <p className="text-gray-500 font-light italic">{subValue}</p>
        )}
      </div>
    </div>
  );
};
