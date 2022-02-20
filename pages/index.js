import { Fragment } from "react";
import { FetchData } from "../lib/fetch-data";
import MeetupItems from "../components/meetup/meetupItems/meetupItems";

function HomePage(props) {
  return (
    <Fragment>
      <MeetupItems data={props.data} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const array = await FetchData();

  return {
    props: {
      data: array,
    },
    revalidate: 1,
  };
}

export default HomePage;
