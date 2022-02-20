import MeetupDetail from "../../components/meetup/meetupDetail/meetupDetail";
import { FetchData } from "../../lib/fetch-data";

function MeetupDetailPage(props) {
  return (
    <div>
      <MeetupDetail data={props.data} />
    </div>
  );
}

export async function getStaticProps(context) {
  const id = context.params.meetupId;

  const array = await FetchData();

  const filteredData = array.find((item) => item.id === id);

  return {
    props: {
      data: filteredData,
    },
  };
}

export async function getStaticPaths() {
  const array = await FetchData();
  let ids = [];
  for (let item in array) {
    ids.push(array[item].id);
  }

  const paths = ids.map((item) => ({ params: { meetupId: item } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default MeetupDetailPage;
