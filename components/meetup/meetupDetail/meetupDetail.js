import Image from "next/image";
import styles from "./meetupDetail.module.css";

function MeetupDetail(props) {
  const { image, title, address, description } = props.data;
  return (
    <section className={styles.main}>
      <div>
        <Image src={image} alt={title} width={600} height={600}/>
      </div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <address>{address}</address>
        <h4>{description}</h4>
      </div>
    </section>
  );
}

export default MeetupDetail;
