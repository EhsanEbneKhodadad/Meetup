import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetupForm from "../components/meetup/NewMeetupForm/newMeetupForm";

function NewMeetup() {
  const router = useRouter();
  const addMeetupHandler = (data) => {
    fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      "Content-Type": "application/json",
    })
      .then((data) => {
        // show notif
        console.log(data);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
        <meta name="author" content="Ehsan Ebnekhodadad"></meta>
        <meta
          name="description"
          content="Create your own group and meet people near you who share your interests."
        ></meta>
      </Head>
      <NewMeetupForm addMeetupHandler={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetup;
