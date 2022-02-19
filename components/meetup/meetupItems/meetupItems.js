import MeetupItem from "../meetupItem/meetupItem";

function MeetupItems(props) {
  const data = props.data;

  return (
    <div>
      {data.map((item) => (
        <MeetupItem
          key={item.id}
          image={item.image}
          title={item.title}
          address={item.address}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default MeetupItems;
