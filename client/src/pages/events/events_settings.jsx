import { useState } from "react";
import EventModal from "../../components/events/event_modal";
import PostSettingsIcon from "../../components/post/post_settings_icon";
import { useNavigate } from "react-router-dom";

const EventsSettings = () => {
  const navigate = useNavigate();
  const events = [
    {
      title: "Event 1",
      dateTime: "2024-02-22",
      poster: "url_to_event_poster_1",
      description: "Description of Event 1",
      type: "Hackathons",
      location: "Location of Event 1",
      organizerInfo: "organizer_info",
      registration: "registration_link_1",
    },
    {
      title: "Event 1",
      dateTime: "2024-02-22",
      poster: "url_to_event_poster_1",
      description: "Description of Event 1",
      type: "Hackathons",
      location: "Location of Event 1",
      organizerInfo: "organizer_info",
      registration: "registration_link_1",
    },
    {
      title: "Event 1",
      dateTime: "2024-02-22",
      poster: "url_to_event_poster_1",
      description: "Description of Event 1",
      type: "Hackathons",
      location: "Location of Event 1 ",
      organizerInfo: "organizer_info",
      registration: "registration_link_1",
    },
  ];

  const showEventDetails = (eventDetails) => {
    navigate("/event_details", {
      state: {
        eventDetails,
      },
    });
  };

  const [selectedChoice, setSelectedChoice] = useState(null);
  const [toggledCategories, setToggledCategories] = useState([]);

  const categories = [
    {
      id: 1,
      name: "Location",
      choices: [
        "United States",
        "United Kingdom",
        "Germany",
        "Canada",
        "Australia",
        "India",
        "Nepal",
        "Japan",
        "Netherlands",
        "Sweden",
        "Singapore",
        "Switzerland",
        "Ireland",
        "Norway",
        "Denmark",
        "Finland",
        "Israel",
        "Others",
      ],
    },
    {
      id: 2,
      name: "Category",
      choices: [
        "Web Developer",
        "Game Developer",
        "React.js Developer",
        "AngularJs Developer",
        "Vue.Js Developer",
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Mobile App Developer",
        "UI/UX Designer",
      ],
    },
    {
      id: 3,
      name: "Event Type",
      choices: ["Hackathon", "Part-time", "Contract", "Internship", "Remote"],
    },
    {
      id: 4,
      name: "Experience Level",
      choices: ["Entry Level", "Junior", "Mid-Level", "Senior"],
    },
  ];

  const handleSelect = (choice) => {
    setSelectedChoice(choice);
  };
  const toggleCategory = (categoryId) => {
    if (toggledCategories.includes(categoryId)) {
      setToggledCategories(toggledCategories.filter((id) => id !== categoryId));
    } else {
      setToggledCategories([...toggledCategories, categoryId]);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-center text-white p-4">
        Ongoing Events
      </header>
      {/* <div className="flex flex-wrap gap-2 mt-16 justify-center">
        {events.map((event) => (
          <div className="w-[300px] relative">
            <EventModal
              event={events[0]}
              onClick={() => showEventDetails(events[0])}
            />
            <PostSettingsIcon />
          </div>
        ))}
      </div> */}
      <div className="flex">
        <div className="fixed top-0 left-0 w-[25%] h-full mt-14 bg-gray-300 p-4 overflow-auto">
          {/* Display categories and choices */}
          {categories.map((category) => (
            <div key={category.id} className="mb-4">
              <div
                className="cursor-pointer flex items-center justify-between"
                onClick={() => toggleCategory(category.id)}
              >
                <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
                <svg
                  className={`w-6 h-6 transition-transform transform ${
                    toggledCategories.includes(category.id) ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
              {toggledCategories.includes(category.id) && (
                <div className="flex flex-row flex-wrap">
                  {category.choices.map((choice) => (
                    <button
                      key={choice}
                      className={`mr-2 mb-2 px-4 py-2 border rounded-lg ${
                        selectedChoice === choice
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleSelect(choice)}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1 mt-14 ml-1/4">
          {/* Container for scrollable content */}
          <div className="pl-60 overflow-auto">
            {events.map((event) => (
              <div className="relative pl-6">
                <EventModal
                  event={events[0]}
                  onClick={() => showEventDetails(events[0])}
                />
                <PostSettingsIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsSettings;
