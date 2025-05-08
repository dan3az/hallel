import React from "react";
import { 
  Tag, 
  Coins,
  Waves,
  Car,
  Building,
  Sun,
  Coffee,
  Sparkles,
  Bed
} from "lucide-react";

export default function HotelCard({ hotel, onBookClick }) {
  const features = [
    { icon: Waves, label: "בריכת שחייה" },
    { icon: Car, label: "חניה במלון" },
    { icon: Building, label: "בית כנסת" },
    { icon: Sun, label: "מרפסת" },
    { icon: Coffee, label: "ארוחת בוקר כלולה" },
    { icon: Sparkles, label: "ניקיון יומי" },
    { icon: Bed, label: "מיטות נוחות במיוחד" }
  ];

  return (
    <div className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer border rounded-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 right-0 p-4">
          <h3 className="text-lg font-bold text-white">{hotel.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-blue-600">
          <Coins className="w-5 h-5" />
          <span>החל מ-₪{hotel.prices[0].match(/\d+/)[0]} לזוג</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <feature.icon className="w-4 h-4 text-blue-500" />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => onBookClick(hotel.id)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          להזמנה
        </button>
      </div>
    </div>
  );
}
