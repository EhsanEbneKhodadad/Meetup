import Image from "next/image";
import styles from "./meetupItem.module.css";

function MeetupItem(props) {
  const { image, title, address } = props;
  return (
    <section className={styles.main}>
      <div className={styles.image}>
        <Image src={`/assets/${image}`} alt={title} width={800} height={400} />
      </div>
      <div>
        <h3>{title}</h3>
        <address>{address}</address>
      </div>
      <button>Show Details</button>
    </section>
  );
}

export default MeetupItem;
