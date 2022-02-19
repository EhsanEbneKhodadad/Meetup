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
      <NewMeetupForm addMeetupHandler={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetup;
