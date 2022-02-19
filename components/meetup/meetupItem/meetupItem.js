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
        <Image src='https://images.pexels.com/photos/9034760/pexels-photo-9034760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt={title} width={800} height={400} />
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
