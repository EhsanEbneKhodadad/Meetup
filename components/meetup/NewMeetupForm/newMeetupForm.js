import { useRef } from "react";
import { GetAmount } from "../../../lib/fetch-data";
import styles from "./newMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  async function addMeetupHandler(event) {
    event.preventDefault();
    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const address = addressRef.current.value;
    const description = descriptionRef.current.value;

    const number = await GetAmount();

    const data = {
      id: `meetup-${number + 1}`,
      title: title,
      image: image,
      address: address,
      description: description,
    };

    console.log(image);
    props.addMeetupHandler(data);
  }

  return (
    <section className={styles.main}>
      <h1>Add New Meetup</h1>
      <form className={styles.form}>
        <div>
          <label htmlFor="title" className={styles.block}>
            Meetup Title
          </label>
          <input id="title" type="text" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="image" className={styles.block}>
            Meetup Image
          </label>
          <input id="image" type="text" ref={imageRef} />
        </div>
        <div>
          <label htmlFor="address" className={styles.block}>
            Meetup Address
          </label>
          <input id="address" type="text" ref={addressRef} />
        </div>
        <div>
          <label htmlFor="description" className={styles.block}>
            Meetup Description
          </label>
          <textarea id="description" rows={5} ref={descriptionRef} />
        </div>
        <div className={styles.button}>
          <button onClick={addMeetupHandler}>Add New Meetup</button>
        </div>
      </form>
    </section>
  );
}

export default NewMeetupForm;
