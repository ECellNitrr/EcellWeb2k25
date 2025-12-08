import React from 'react';
import EventCard from './EventCard'; // Import EventCard to render individual items

/**
 * Renders a titled section containing a responsive grid of EventCards.
 * @param {string} title - The title of the section (e.g., "Upcoming Events").
 * @param {Array} events - The list of event objects to display.
 * @param {function} openModal - Function to open the modal when a card is clicked.
 */
const EventSection = ({ title, events, openModal }) => (
    <section className="mt-12 mb-16">
        {/* 👇 MODIFIED: Change text color and accent line color */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-100 mb-10">
            {title}
            {/* Using a custom color or 'bg-ecell-primary' if available, otherwise a strong blue */}
            <span className="block h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event,index) => (
                <EventCard 
                    key={event.id} 
                    event={event} 
                    onClick={openModal} 
                    index={index}
                />
            ))}
        </div>
    </section>
);

export default EventSection;