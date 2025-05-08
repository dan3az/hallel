import React from "react";
/*import { Link } from "react-router-dom";*/

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="py-10">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-xl">להזמנות חייגו: 054-7260002 | 054-6729040</p>
            <p>שבתות חתן, שבתות בר מצווה, קבוצות גיבוש משפחתיות</p>
            <p className="text-sm mt-4 opacity-80">דניאל מינס – באהבה ובשמחה</p>
          </div>
        </div>
        
        <div className="py-4 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} הללויה הפקות. כל הזכויות שמורות.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {/* <Link to="#" className="hover:underline">תנאי שימוש</Link>
              <Link to="#" className="hover:underline">מדיניות פרטיות</Link>
              <Link to="#" className="hover:underline">הצהרת נגישות</Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}