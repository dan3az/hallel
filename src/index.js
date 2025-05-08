


import React, { useState, useRef, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import Hero from "./Components/Hero";
import HotelCard from "./Components/HotelCard";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton";
import AccessibilityWidget from "./Components/AccessibilityWidget";

export default function App() {
  const [selectedHotel, setSelectedHotel] = useState("");
  const contactRef = useRef(null);
  const hotelsRef = useRef(null);

  const hotels = [
    {
      id: "aqueduct",
      title: "מלון אקוודוקט | רגבה",
      image: "https://www.bgalil.co.il/files/tinymceuploads/DSC_9529_copy.jpg._1565688455",
      prices: [
        "מחיר לזוג: 1400 ש״ח",
        "ילדים (2–12): 350 ש״ח",
        "תינוקות (0–2): 80 ש״ח"
      ]
    },
    {
      id: "nofHaifa",
      title: "מלון נוף | חיפה",
      image: "https://booking.simplex-ltd.com/octopus/Upload/images/Chain_11488/Images/Resorts/outside-areas-1-1-.jpg",
      prices: [
        "מחיר לזוג: 950 ש״ח",
        "ילדים (2–12): 350 ש״ח",
        "תינוקות (0–2): 80 ש״ח"
      ]
    },
    {
      id: "elyam",
      title: "מלון אל ים | נתניה",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c9/8e/09/paradiso-lifestyle-resort.jpg?w=900&h=500&s=1",
      prices: [
        "1380 ש״ח לזוג",
        "בסיס חצי פנסיון"
      ]
    },
    {
      id: "residance",
      title: "מלון רזידנס | נתניה",
      image: "https://netanya-hotelz.co.il/wp-content/uploads/2016/07/rez7.jpg",
      prices: [
        "מחיר לזוג: 1500 ש״ח",
        "ילדים (2–12): 400 ש״ח",
        "תינוקות (0–2): 100 ש״ח"
      ]
    },
    {
      id: "tveria",
      title: "מלון רויאל פלאזה | טבריה",
      image: "https://royalplaza.co.il/wp-content/uploads/2020/06/%D7%A8%D7%95%D7%99%D7%90%D7%9C-%D7%A4%D7%9C%D7%90%D7%96%D7%94-%D7%98%D7%91%D7%A8%D7%99%D7%94.jpg",
      prices: [
        "מחיר לזוג: 950 ש״ח",
        "ילדים (2–12): 400 ש״ח",
        "תינוקות (0–2): 100 ש״ח"
      ]
    }
  ];

  const handleHotelSelect = (hotelId) => {
    setSelectedHotel(hotelId);
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('https://hook.eu2.make.com/3sncfmuct8l6mlw6zcej3f4yxpr2qdln', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };

  // Add Hebrew fonts
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&family=Rubik:wght@400;500;600;700&display=swap');
      
      :root {
        --font-heading: 'Assistant', sans-serif;
        --font-body: 'Rubik', sans-serif;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
      }
      
      body {
        font-family: var(--font-body);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div dir="rtl" className="min-h-screen flex flex-col">
      <Hero 
        scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
        scrollToHotels={() => hotelsRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />

<div className="bg-white py-12 px-6 text-center">
  <h2 className="text-3xl font-bold text-blue-900 mb-4">אודותינו</h2>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
    ב־<span className="font-semibold text-blue-800">הללויה</span> אנחנו יוצרים חיבורים של לבבות. אנו מתמחים בהפקת <strong>שבתות חתן, סופי שבוע ואירועים</strong> לקהל הדתי, עם דגש על אווירה חמה, תכנים מעוררי השראה, ולוגיסטיקה מוקפדת עד הפרט האחרון. מעבר להפקה – אנחנו רואים את עצמנו כשליחים של חיבורים אמיתיים בין אנשים. רבים מהמשתתפים שלנו יוצאים מהאירועים עם קשרים חדשים – חברויות, שידוכים, ואפילו אהבות שנרקמות.
    <br /><br />
    אנו שמים דגש על <strong>קהילתיות, איכות, והזדמנויות להיכרות באווירה מכובדת ומותאמת לערכים שלנו</strong>. השאיפה שלנו היא שכל אורח יצא עם חוויה בלתי נשכחת – ולעיתים גם עם התחלה של פרק חדש בחיים.
  </p>
</div>


      <section ref={hotelsRef} id="hotels" className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">
             המלונות שלנו לסופש הקרוב
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotels.map((hotel) => (
              <HotelCard 
                key={hotel.id}
                hotel={hotel}
                onBookClick={handleHotelSelect}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactForm 
        contactRef={contactRef}
        hotels={hotels}
        selectedHotel={selectedHotel}
        onHotelSelect={setSelectedHotel}
      />

      <Footer />
      <WhatsAppButton selectedHotel={selectedHotel} hotels={hotels} />
      <AccessibilityWidget />
    </div>
  );
}


  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
