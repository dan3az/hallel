import React, { useState, useEffect } from "react";

export default function ContactForm({ contactRef, hotels, selectedHotel, onHotelSelect }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hotel: "",  // הערך ההתחלתי ריק
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // עדכון הסטייט של המלון אם יש selectedHotel
  useEffect(() => {
    if (selectedHotel) {
      setFormData((prev) => ({
        ...prev,
        hotel: selectedHotel, // מגדירים את המלון לפי הערך של selectedHotel
      }));
    }
  }, [selectedHotel]); // זה רץ רק אם selectedHotel משתנה

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleHotelChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      hotel: value,
    }));
    onHotelSelect(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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

      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", hotel: "" });
      onHotelSelect("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={contactRef} id="contact" className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 px-6 py-5 text-white">
            <h2 className="text-2xl font-bold">השאירו פרטים ונחזור אליכם</h2>
            <p className="mt-2 opacity-90">נשמח לענות על כל שאלה ולספק מידע נוסף</p>
          </div>

          <div className="p-6">
            {isSubmitted ? (
              <div className="flex items-center p-4 bg-green-50 text-green-700 rounded-lg">
                <svg className="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>תודה! ניצור איתכם קשר בקרוב</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-blue-900 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zM12 1C6.48 1 2 5.48 2 9c0 1.1.47 2.1 1.23 2.77-.56 1.06-.91 2.23-.91 3.53C2.32 16.74 6.56 21 12 21s9.68-4.26 9.68-9.7c0-1.3-.35-2.47-.91-3.53.76-.67 1.23-1.67 1.23-2.77 0-3.52-4.48-8-10-8z" />
                    </svg>
                    שם מלא
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="שם מלא"
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-blue-900 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5.5C3 4.12 4.12 3 5.5 3S8 4.12 8 5.5 6.88 8 5.5 8 3 6.88 3 5.5zM1 11v3a2 2 0 002 2h2l2 4h8l2-4h2a2 2 0 002-2v-3H1z" />
                    </svg>
                    טלפון
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="מספר טלפון"
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-blue-900 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 3a2 2 0 012-2h16a2 2 0 012 2v18a2 2 0 01-2 2H4a2 2 0 01-2-2V3z" />
                    </svg>
                    אימייל
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="כתובת אימייל"
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="hotel" className="text-blue-900 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zM12 1C6.48 1 2 5.48 2 9c0 1.1.47 2.1 1.23 2.77-.56 1.06-.91 2.23-.91 3.53C2.32 16.74 6.56 21 12 21s9.68-4.26 9.68-9.7c0-1.3-.35-2.47-.91-3.53.76-.67 1.23-1.67 1.23-2.77 0-3.52-4.48-8-10-8z" />
                    </svg>
                    באיזה מלון אתם מעוניינים?
                  </label>
                  <select
                    value={formData.hotel}
                    onChange={(e) => handleHotelChange(e.target.value)}
                    className="w-full p-3 border border-blue-100 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">בחרו מלון</option>
                    {hotels.map((hotel) => (
                      <option key={hotel.id} value={hotel.id}>{hotel.title}</option>
                    ))}
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-medium py-3 px-6 rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? "...שולח" : "שלחו לי פרטים"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
