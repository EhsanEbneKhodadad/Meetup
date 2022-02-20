import { Fragment } from "react";
import { FetchData } from "../lib/fetch-data";
import MeetupItems from "../components/meetup/meetupItems/meetupItems";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Meetups</title>
        <meta name="author" content="Ehsan Ebnekhodadad"></meta>
        <meta
          name="description"
          content="Find Meetup events so you can do more of what matters to you or create your own group and meet people near you who share your interests."
        ></meta>
      </Head>
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
