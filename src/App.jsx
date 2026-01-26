// ==================================================
// TOURISM & ADVENTURE PLATFORM – STABLE MVP (PRE-LOGO VERSION)
// ==================================================
// ✅ Restored version BEFORE logo image was added
// ✅ Text-based branding only (no logo image)
// ✅ JSX-safe and stable

import { Routes, Route } from "react-router-dom";

import React, { useState } from "react";

const noop = () => {};

/* ================= NAVBAR ================= */

import { useNavigate } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [secretCount, setSecretCount] = useState(0);
  const navigate = useNavigate();

  const handleTitleClick = () => {
    const next = secretCount + 1;
    setSecretCount(next);
    if (next >= 5) {
      setSecretCount(0);
      navigate("/admin");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm -z-10" />

      <div className="flex justify-between items-center px-6 py-4">
        <div className="cursor-pointer select-none" onClick={handleTitleClick}>
          <div className="font-bold text-2xl flex items-end" style={{ fontFamily: "serif" }}>
            <span className="text-orange-500">हम</span>
            <span className="text-blue-700 ml-1 -mb-0.5">Rahi</span>
          </div>
          <div className="text-xs text-gray-700">
            AI-Driven • Powered by YatraMind™
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
          aria-label="Menu"
        >
          &#9776;
        </button>
      </div>

      {open && (
        <div className="absolute right-4 top-full mt-2 w-48 border rounded-xl px-4 py-4 bg-amber-100 shadow-lg space-y-3">
          <button
            className="block w-full text-left"
            onClick={() => { navigate("/"); setOpen(false); }}
          >
            Home
          </button>
          <button
            className="block w-full text-left"
            onClick={() => { navigate("/packages"); setOpen(false); }}
          >
            Explore Packages
          </button>
          <button
            className="block w-full text-left"
            onClick={() => { navigate("/blogs"); setOpen(false); }}
          >
            Photos & Blogs
          </button>
          <button
            className="block w-full text-left"
            onClick={() => { navigate("/contact"); setOpen(false); }}
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
}


/* ================= BUTTON ================= */

function Button({ children, onClick = noop, variant = "primary", type = "button" }) {
  const cls = variant === "outline"
    ? "border px-6 py-3 rounded-xl"
    : "bg-black text-white px-6 py-3 rounded-xl";
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}

/* ================= HOME ================= */

function Home() {
  return (

    <div
  className="relative pt-28 p-10 shadow-xl max-w-6xl mx-auto space-y-10 overflow-hidden"
  style={{
    backgroundImage: "url('https://cdn.trailfinders.com/jhmhbakbvu_2he3232_1500x1500.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

      {/* Beautiful Home Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-red-300/30 via-amber-200/40 to-white/80" />
      {/* Subtle radial highlight for hero card */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 -z-10 opacity-30" style={{
        backgroundImage: "linear-gradient(to top, rgba(30,70,138,0.35), transparent)" ,
      }} />
      <div className="relative text-center space-y-4">
        {/* Sun-glow halo behind title */}
        <div className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-40 w-64 md:w-[30rem] lg:w-[36rem] rounded-full blur-3xl opacity-40 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400" />

          <div className="relative z-10 inline-block px-8 py-4"
           style={{
           backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDULOjUpPWB-wrtsqNTUdJqufDyinT5sRFw&s')",
           backgroundSize: "cover",
           backgroundPosition: "center",
                  }}
          >
    {/* Light overlay for readability */}
    <div className="absolute inset-0 bg-white/40 rounded-xl" />
  
    <h1
      className="relative text-5xl font-bold flex justify-center items-end"
      style={{ fontFamily: "serif" }}
    >
      <span className="text-orange-500">हम</span>
      <span className="text-blue-700 ml-2 -mb-1">Rahi</span>
    </h1>
  </div>

        <p className="relative z-10 text-sm text-gray-800">AI‑Driven • Powered by YatraMind™</p>
        <p className="relative z-10 italic">Safar mein aap akela nahi — hum RAHI hain.</p>
      </div>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="relative rounded-2xl p-8 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
          <h3 className="text-2xl font-semibold mb-2">Pilgrimage Journeys</h3>
          <p className="text-gray-700"> Char Dham, Adi Kailash, Om Parvat, Panch Kedar, Panch Badri, Kainchi Dham, Kasar Devi</p>
        </div>

        <div className="relative rounded-2xl p-8 bg-gradient-to-br from-sky-50 via-blue-100 to-blue-200">
          <h3 className="text-2xl font-semibold mb-2">Adventure & Treks</h3>
          <p className="text-gray-700">Treks, rafting, camping, snow trails, Paragliding, Sky diving </p>
        </div>
      </section>

      <section className="bg-white p-10 md:p-14 rounded-3xl shadow-sm space-y-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 mb-2">About Us</h2>
          <p className="text-xl font-medium text-gray-700">AI‑Driven Travel, Designed to Feel Like Home</p>
          <p className="text-sm italic text-gray-700 mt-2">Thoughtful planning, cultural respect, and experiences that stay with you.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5 text-gray-700 leading-relaxed">
          <p className="text-center italic">Sacred journeys and trusted adventures across India — where every beginning carries meaning, every stay feels welcoming, and every experience leaves a lasting footprint.</p>
          <p className="text-center text-sm">A mindful start to travel • A sense of home wherever you go • Experiences that stay with you</p>
          <p className="text-center text-sm">AI‑Driven</p>

          <p><strong>हम RAHI – Your Travel Companion</strong> is an AI‑driven travel platform created to make every journey easier, warmer, and more meaningful.</p>
          <p>Our approach blends intelligent planning with human care — focusing on culturally respectful, budget‑friendly, and memory‑rich experiences.</p>
          <p>Whether travelling for faith, adventure, family time, or quiet exploration, हम RAHI helps you connect deeply with places and people.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center"><div className="text-3xl mb-2">🤖</div><h4 className="font-semibold">AI‑Guided</h4><p className="text-sm">Personal recommendations shaped around you.</p></div>
          <div className="text-center"><div className="text-3xl mb-2">🏡</div><h4 className="font-semibold">Abode‑Like</h4><p className="text-sm">Welcoming stays and trusted partners.</p></div>
          <div className="text-center"><div className="text-3xl mb-2">🛕</div><h4 className="font-semibold">Respectful</h4><p className="text-sm">Honouring local culture and traditions.</p></div>
          <div className="text-center"><div className="text-3xl mb-2">👣</div><h4 className="font-semibold">Memorable</h4><p className="text-sm">Experiences worth carrying home.</p></div>
        </div>

        <div className="max-w-4xl mx-auto pt-6 border-t text-center space-y-3">
          <p className="italic">“Travel becomes meaningful when you feel understood and cared for.”</p>
          <p className="font-medium">Why Travellers Choose हम RAHI</p>
          <p className="text-sm">Because we plan with insight, respect culture, and travel beside you.</p>
        </div>
      </section>

      <div className="mt-10 text-center">
        <p className="text-sm italic mb-6">हम RAHI — AI‑guided travel that feels familiar, respectful, and truly yours.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:7906569661" className="bg-green-600 text-white px-6 py-3 rounded-xl">Call Now</a>
          <a href="https://wa.me/917906569661" className="bg-green-500 text-white px-6 py-3 rounded-xl">WhatsApp</a>
          <Button onClick={() => navigate("packages")}>Explore Packages</Button>
          <Button variant="outline" onClick={() => navigate("blogs")}>Photos & Blogs</Button>
          <Button variant="outline" onClick={() => navigate("contact")}>Contact Us</Button>
        </div>
      </div>
    </div>
  );
}

/* ================= OTHER PAGES ================= */

function Packages() {
  const [form, setForm] = useState({ destination: "", type: "Pilgrimage", travellers: "", days: "", budget: "" });
  const [recommendation, setRecommendation] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRecommend = (e) => {
    e.preventDefault();
    setRecommendation({ summary: "A tailored journey suggestion based on your inputs.", note: "AI‑assisted by YatraMind™" });
  };

  return (
    <div className="p-10 max-w-3xl mx-auto bg-white rounded-2xl shadow space-y-6">
      <h2 className="text-3xl font-semibold">Explore Packages</h2>
      <form className="grid gap-4" onSubmit={handleRecommend}>
        <input className="border p-3 rounded" placeholder="Destination" name="destination" onChange={handleChange} />
        <select className="border p-3 rounded" name="type" onChange={handleChange}><option>Pilgrimage</option><option>Adventure / Trek</option><option>Family / Leisure</option></select>
        <input className="border p-3 rounded" placeholder="Travellers" name="travellers" onChange={handleChange} />
        <input className="border p-3 rounded" placeholder="Days" name="days" onChange={handleChange} />
        <input className="border p-3 rounded" placeholder="Budget" name="budget" onChange={handleChange} />
        <Button type="submit">Get AI Recommendation</Button>
      </form>
      {recommendation && <div className="bg-blue-50 p-5 rounded-xl"><p>{recommendation.summary}</p><p className="text-sm">{recommendation.note}</p></div>}
      <Button variant="outline" onClick={() => navigate("home")}>Back to Home</Button>
    </div>
  );
}

function Blogs() {
  return (
    <div className="p-10 max-w-6xl mx-auto space-y-10">
      <div className="bg-white rounded-2xl shadow p-8 text-center">
        <h2 className="text-3xl font-semibold mb-2">Photos & Blogs</h2>
        <p className="text-gray-700">Moments, memories, and stories from journeys with हम RAHI.</p>
      </div>

      {/* Photo Gallery */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["Adi Kailash", "Om Parvat", "Kedarnath", "Tungnath", "Rishikesh Rafting", "Himalayan Trek"].map((title) => (
          <div key={title} className="bg-white rounded-xl shadow overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center text-gray-700 font-medium">
              {title}
            </div>
            <div className="p-4 text-sm text-gray-600">A glimpse from our {title} experience.</div>
          </div>
        ))}
      </section>

      {/* Blogs */}
      <section className="bg-white rounded-2xl shadow p-8">
        <h3 className="text-2xl font-semibold mb-4">Traveller Stories</h3>
        <div className="space-y-4 text-gray-700">
          <p><strong>Kedarnath Yatra:</strong> A calm and spiritually fulfilling journey, guided with care and respect.</p>
          <p><strong>Adi Kailash & Om Parvat:</strong> A once-in-a-lifetime experience where silence, faith, and nature meet.</p>
          <p><strong>Rishikesh Rafting:</strong> Thrilling yet safe adventures led by experienced local guides.</p>
        </div>
      </section>

      {/* Feedback */}
      <section className="bg-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Traveller Feedback</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Ankit Sharma", text: "Felt completely taken care of during our Kedarnath trip." },
            { name: "Priya Verma", text: "The planning was smooth and the journey felt very personal." },
            { name: "Rohit Mehta", text: "Great balance of comfort, budget, and experience." }
          ].map((f) => (
            <div key={f.name} className="bg-white p-5 rounded-xl shadow">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="text-sm text-gray-700">{f.text}</p>
              <p className="mt-2 text-sm font-medium">— {f.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="p-10 max-w-3xl mx-auto bg-white rounded-2xl shadow space-y-6">
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      {!submitted ? (
        <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <input className="border p-3 rounded" placeholder="Name" required />
          <input className="border p-3 rounded" placeholder="Email" type="email" required />
          <input className="border p-3 rounded" placeholder="Mobile Number" type="tel" required />
          <textarea className="border p-3 rounded" placeholder="Query" required />
          <Button type="submit">Submit</Button>
        </form>
      ) : (
        <div className="bg-green-50 p-6 rounded-xl text-center">Thank you. We’ll reach out soon.</div>
      )}
      <Button variant="outline" onClick={() => navigate("home")}>Back to Home</Button>
    </div>
  );
}

function Admin() {
  return <div className="p-10">Admin Dashboard</div>;
}

export default function App() {
  return (
    <div>
      <NavBar />

      <div className="min-h-screen bg-gradient-to-br from-[#fdf6ec] via-[#eef6ff] to-[#e6f0ff]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

