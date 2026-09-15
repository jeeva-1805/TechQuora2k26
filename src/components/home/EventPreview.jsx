import EventCategoryCard from "../events/EventCategoryCard";
import { eventCategories } from "../../data/eventCategories";

function EventPreview() {
  return (
    <section className="relative bg-[#050816] py-20 sm:py-24">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-400">
            Explore Our Events
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Find Your Arena
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Choose your category, showcase your talent and make
            TechQuora2k26 unforgettable.
          </p>

        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          
          {eventCategories.map((event) => (
            <EventCategoryCard
              key={event.id}
              title={event.title}
              description={event.description}
              image={event.image}
              type={event.type}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default EventPreview;