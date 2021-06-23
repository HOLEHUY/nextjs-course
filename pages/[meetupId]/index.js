import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://picsum.photos/1920/1080"
      title="First Meetup"
      address="Some Street 5, 12345 Some City"
      description="The First Meetup Description"
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  //fetch Data for a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: "https://picsum.photos/1920/1080",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, 12345 Some City",
        description: "The First Meetup Description",
      },
    },
  };
}

export default MeetupDetails;
