import { Fragment } from "react";
import MeetupItems from "../components/meetup/meetupItems/meetupItems";

function HomePage(props) {
  return (
    <Fragment>
      <MeetupItems data={props.data} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const dataJson = await fetch(
    "https://meetups-58b30-default-rtdb.firebaseio.com/meetups.json"
  );
  const data = await dataJson.json();
  let array = [];

  for (let item in data) {
    array.push({
      id: item,
      title: data[item].title,
      image: data[item].image,
      address: data[item].address,
      description: data[item].description,
    });
  }

  return {
    props: {
      data: array,
    },
    revalidate: 1,
  };
}

export default HomePage;
