import { Fragment } from "react";
import MeetupItems from "../components/meetup/meetupItems/meetupItems";

function HomePage() {
  const DUMMY_DATA = [
    {
      id: "p1",
      title: "First Title",
      image: "image1.jpg",
      address: "some address",
    },
    {
      id: "p2",
      title: "First Title",
      image: "image1.jpg",
      address: "some address",
    },
    {
      id: "p3",
      title: "First Title",
      image: "image1.jpg",
      address: "some address",
    },
  ];

  return (
    <Fragment>
      <MeetupItems data={DUMMY_DATA} />
    </Fragment>
  );
}

export default HomePage;
