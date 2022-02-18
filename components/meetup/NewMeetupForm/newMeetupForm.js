import styles from "./newMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <section className={styles.main}>
      <h1>Add New Meetup</h1>
      <form className={styles.form}>
        <div>
          <label htmlFor="title" className={styles.block}>
            Meetup Title
          </label>
          <input id="title" type="text" />
        </div>
        <div>
          <label htmlFor="image" className={styles.block}>
            Meetup Image
          </label>
          <input id="image" type="text" />
        </div>
        <div>
          <label htmlFor="address" className={styles.block}>
            Meetup Address
          </label>
          <input id="address" type="text" />
        </div>
        <div>
          <label htmlFor="description" className={styles.block}>
            Meetup Description
          </label>
          <textarea id="description" rows={5} />
        </div>
        <div className={styles.button}>
          <button>Add New Meetup</button>
        </div>
      </form>
    </section>
  );
}

export default NewMeetupForm;
