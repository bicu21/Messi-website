import React from "react";

let timelineElements = [
  { id: 1, year: "2000", event: "Joins FC Barcelona's La Masia academy", age: "13", club: "Barcelona" },
  { id: 2, year: "2004", event: "Professional debut with FC Barcelona", age: "17", club: "Barcelona" },
  { id: 3, year: "2005", event: "First goal for Barcelona vs Albacete", age: "18", club: "Barcelona" },
  { id: 4, year: "2006-2007", event: "Leo's first career hatrick against Real Madrid", age: "19", club: "Barcelona" },
  { id: 5, year: "2009", event: "First Ballond'Or and champions league treble", age: "22", club: "Barcelona" },
  { id: 6, year: "2012", event: "Record 91 goals in a calendar year", age: "25", club: "Barcelona" },
  { id: 7, year: "2019", event: "Becomes Barcelona's all-time top scorer", age: "32", club: "Barcelona" },
  { id: 9, year: "2021", event: "Copa America victory with Argentina", age: "34", club: "Argentina" },
  { id: 10, year: "2021", event: "Joins Paris Saint-Germain", age: "34", club: "PSG" },
  { id: 11, year: "2022", event: "FIFA World Cup champion", age: "35", club: "Argentina" },
  { id: 12, year: "2023", event: "Joins Inter Miami CF", age: "36", club: "Inter Miami" },
];

function Timeline() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto relative">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        
        <div className="space-y-12">
          {timelineElements.map((item, index) => (
            <div key={item.id} className={`flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <div className="w-1/2 px-6">
                <div className="bg-white shadow-lg rounded-2xl p-6 relative">
                  {/* Circle marker */}
                  <div className="absolute top-6 -left-4 w-6 h-6 bg-amber-500 rounded-full border-2 border-white shadow"></div>
                  
                  <p className="text-xl font-bold text-gray-900">{item.year}</p>
                  <p className="mt-2 text-gray-700">{item.event}</p>
                  <p className="text-sm text-gray-500">Age: {item.age} | Club: {item.club}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
