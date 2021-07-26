import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage() {
    return (
        <MeetupDetails 
            title= "Meetup One"
            image= "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Skylines_of_Brisbane_in_winter_misty_morning_seen_from_Kangaroo_Point%2C_Queensland_04.jpg/800px-Skylines_of_Brisbane_in_winter_misty_morning_seen_from_Kangaroo_Point%2C_Queensland_04.jpg"
            address= "Soma street 2, 1234 some city"
            description= "Meetup description here!"
        />
    )
}

export default MeetupDetailsPage;