import React from 'react'
import { X, Calendar, MapPin } from 'lucide-react';

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div 
            // The overlay backdrop remains the same
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-[100]"
            onClick={onClose}
        >
            <div 
                // 🛠️ MODIFICATION 1: Change background from white to a dark gray for the modal body
                // Added border-white/10 to give it definition on the dark backdrop
                className="bg-gray-900 border border-white/10 rounded-xl shadow-2xl w-full max-w-lg lg:max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all"
                onClick={(e) => e.stopPropagation()} 
            >
                <button 
                    onClick={onClose} 
                    // 🛠️ MODIFICATION 2: Change close button to be highly visible on a dark background/image
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition z-10 backdrop-blur-sm"
                    aria-label="Close Modal"
                >
                    {/* Change icon color to white */}
                    <X className="w-5 h-5 text-white" />
                </button>
                <div className="lg:h-64 h-48 overflow-hidden rounded-t-xl">
                    <img 
                        src={event.imageUrl} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/9ca3af/ffffff?text=Image+Missing"; }}
                    />
                </div>
                <div className="p-6 md:p-8">
                    
                    {/* 🛠️ MODIFICATION 3: Title color already set to ecell-primary (good) */}
                    <h2 className="text-3xl font-extrabold text-ecell-primary mb-3">{event.title}</h2>
                    
                    <div 
                        // 🛠️ MODIFICATION 4: Change divider text color and boundary line color
                        className="flex flex-col md:flex-row md:items-center justify-between text-gray-400 mb-6 border-b border-white/10 pb-4"
                    >
                        <p className="flex items-center gap-2 font-medium"><Calendar className="w-5 h-5 text-ecell-primary" />{event.date}</p>
                        <p className="flex items-center gap-2 font-medium mt-2 md:mt-0"><MapPin className="w-5 h-5 text-ecell-primary" />{event.location}</p>
                    </div>
                    
                    {/* 🛠️ MODIFICATION 5: Change main description text color to light gray */}
                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{event.details}</p>
                    
                    {event.type === 'upcoming' && (
                        // Button color already set to ecell-primary (good)
                        <a href="#" className="mt-8 inline-block bg-ecell-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-lg">
                            Register Now
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventModal