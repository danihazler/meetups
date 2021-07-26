// ou-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const onAddMeetupHandler = (meetupData) => {
        console.log("meetupData:" , meetupData);
    }

    return (
        <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    )
}

export default NewMeetupPage;