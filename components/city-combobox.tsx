"use client";

import { useMemo, useRef, useState } from "react";

export const INDIAN_CITIES = [
  "Agra", "Ahmedabad", "Aizawl", "Ajmer", "Akola", "Aligarh", "Alwar", "Ambattur", "Amravati", "Amritsar",
  "Amroha", "Anantapur", "Asansol", "Aurangabad", "Bareilly", "Belagavi", "Bengaluru", "Bhagalpur", "Bharatpur", "Bhavnagar",
  "Bhilai", "Bhilwara", "Bhiwandi", "Bhiwani", "Bhopal", "Bhubaneswar", "Bhuj", "Bidar", "Bihar Sharif", "Bikaner",
  "Bilaspur", "Bokaro", "Chandigarh", "Chennai", "Chittoor", "Coimbatore", "Cuttack", "Davanagere", "Dehradun", "Delhi",
  "Dhanbad", "Dharamshala", "Dibrugarh", "Dimapur", "Dispur", "Durgapur", "Ernakulam", "Erode", "Faridabad", "Firozabad",
  "Gandhinagar", "Gangtok", "Gaya", "Ghaziabad", "Gorakhpur", "Greater Noida", "Guwahati", "Gwalior", "Gurugram", "Hubballi-Dharwad",
  "Hyderabad", "Imphal", "Indore", "Itanagar", "Jabalpur", "Jaipur", "Jalandhar", "Jammu", "Jamnagar", "Jamshedpur",
  "Jhansi", "Jodhpur", "Jorhat", "Kakinada", "Kalyan-Dombivli", "Kanpur", "Karnal", "Kavaratti", "Kochi", "Kohima",
  "Kolhapur", "Kolkata", "Kollam", "Kota", "Kozhikode", "Kurnool", "Lucknow", "Ludhiana", "Madurai", "Malegaon",
  "Mangaluru", "Mathura", "Meerut", "Mumbai", "Mysuru", "Nagpur", "Nanded", "Nashik", "Navi Mumbai", "Nellore",
  "New Delhi", "Nizamabad", "Noida", "Ozhukarai", "Panaji", "Panipat", "Patna", "Pimpri-Chinchwad", "Port Blair", "Prayagraj",
  "Puducherry", "Pune", "Raipur", "Rajkot", "Ranchi", "Ratlam", "Rourkela", "Salem", "Sangli", "Satna",
  "Shillong", "Shimla", "Siliguri", "Solapur", "Srinagar", "Surat", "Thane", "Thiruvananthapuram", "Thrissur", "Tiruchirappalli",
  "Tirunelveli", "Tirupati", "Tiruppur", "Udaipur", "Ujjain", "Ulhasnagar", "Vadodara", "Varanasi", "Vasai-Virar", "Vellore",
  "Vijayawada", "Visakhapatnam", "Warangal", "Yamunanagar",
].sort((a, b) => a.localeCompare(b));

/** Searchable city picker: type to filter, click (or Enter) to select. */
export default function CityCombobox({
  value,
  onChange,
  invalid,
}: {
  value: string;
  onChange: (v: string) => void;
  invalid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const matches = useMemo(() => {
    const q = value.trim().toLowerCase();
    const list = q ? INDIAN_CITIES.filter((c) => c.toLowerCase().includes(q)) : INDIAN_CITIES;
    return list.slice(0, 60);
  }, [value]);

  const pick = (city: string) => {
    onChange(city);
    setOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div className="city-combo" ref={boxRef}>
      <div className="f-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 21s-6.5-5.3-6.5-10.2a6.5 6.5 0 0 1 13 0C18.5 15.7 12 21 12 21Z" />
          <circle cx="12" cy="10.5" r="2.3" />
        </svg>
        <input
          ref={inputRef}
          id="cfCity"
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls="cfCityList"
          aria-autocomplete="list"
          autoComplete="off"
          value={value}
          placeholder="Search your city, e.g. Pune"
          onChange={(e) => {
            onChange(e.target.value);
            setOpen(true);
            setHighlight(0);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setHighlight((h) => Math.min(matches.length - 1, h + 1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setHighlight((h) => Math.max(0, h - 1)); }
            else if (e.key === "Enter" && open && matches[highlight]) { e.preventDefault(); pick(matches[highlight]); }
            else if (e.key === "Escape") setOpen(false);
          }}
        />
        <button type="button" className="city-caret" tabIndex={-1} aria-hidden="true" onClick={() => { setOpen((o) => !o); inputRef.current?.focus(); }}>
          <svg viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {open && matches.length > 0 && (
        <ul className="city-list" id="cfCityList" role="listbox">
          {matches.map((c, i) => (
            <li key={c} role="option" aria-selected={c === value}>
              <button
                type="button"
                className={`city-opt${i === highlight ? " hl" : ""}${c === value ? " sel" : ""}`}
                onMouseEnter={() => setHighlight(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => pick(c)}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
