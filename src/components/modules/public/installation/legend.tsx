import {
  GraduationCap,
  Briefcase,
  Stethoscope,
  UtensilsCrossed,
  Palette,
  Dumbbell,
  Home,
} from "lucide-react";

type Dot = { label: string; colorClass: string };
type Row = { label: string; Icon: React.ElementType };

const systemDots: Dot[] = [
  { label: "Closune System", colorClass: "bg-yellow-300" },
  { label: "Private System", colorClass: "bg-neutral-400" },
  { label: "Mute System", colorClass: "bg-orange-600" },
];

const locationTypes: Row[] = [
  { label: "Schools/ Universities", Icon: GraduationCap },
  { label: "Businesses/ Hotels", Icon: Briefcase },
  { label: "Medical Facilities", Icon: Stethoscope },
  { label: "Food Industry", Icon: UtensilsCrossed },
  { label: "Museums/ Culture", Icon: Palette },
  { label: "Sports/ Sport Clubs", Icon: Dumbbell },
  { label: "Residential", Icon: Home },
];

export default function Legend() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
      <div>
        <h3 className="mb-5 text-lg font-semibold tracking-wide text-orange-600 sm:text-xl">
          Tudelü Systems
        </h3>

        <ul className="space-y-4 text-sm text-neutral-700">
          {systemDots.map((d) => (
            <li key={d.label} className="flex items-center gap-4">
              <span className={`h-6 w-6 rounded-full ${d.colorClass}`} />
              <span>{d.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-5 text-lg font-semibold tracking-wide text-orange-600 sm:text-xl">
          Location Types
        </h3>

        <ul className="space-y-3 text-sm text-neutral-700">
          {locationTypes.map(({ label, Icon }) => (
            <li key={label} className="flex items-center gap-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-neutral-900 text-white sm:h-10 sm:w-10">
                <Icon size={18} />
              </span>
              <span className="leading-5">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}