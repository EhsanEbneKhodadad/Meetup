import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./meetupItem.module.css";

function MeetupItem(props) {
  const { image, title, address, id } = props;
  const router = useRouter();
  const showDetailPageHandler = () => {
    router.push(`/${id}`);
  };

  return (
    <section className={styles.main}>
      <div className={styles.image}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          layout="responsive"
        />
      </div>
      <div>
        <h3>{title}</h3>
        <address>{address}</address>
      </div>
      <button onClick={showDetailPageHandler}>Show Details</button>
    </section>
  );
}

export default MeetupItem;
