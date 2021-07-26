import MeetupList from "../components/meetups/MeetupList";

//will be replaced
const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "Meetup One",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Skylines_of_Brisbane_in_winter_misty_morning_seen_from_Kangaroo_Point%2C_Queensland_04.jpg/800px-Skylines_of_Brisbane_in_winter_misty_morning_seen_from_Kangaroo_Point%2C_Queensland_04.jpg",
        address: "Soma street 2, 1234 some city",
        description: "Meetup description here!"
    },
    {
        id: "m2",
        title: "Meetup Two",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Enseada_de_Botafogo_e_P%C3%A3o_de_A%C3%A7%C3%BAcar.jpg/800px-Enseada_de_Botafogo_e_P%C3%A3o_de_A%C3%A7%C3%BAcar.jpg",
        address: "Soma street 2, 1234 some city",
        description: "Meetup description here!"
    },
]

function HomePage() {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}

export default HomePage;

