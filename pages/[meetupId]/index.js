import { useRouter } from "next/router";

function MeetupDetailPage() {
  const router = useRouter();
  console.log(router.query.meetupId);
  return <div>MeetupDetailPage</div>;
}

export default MeetupDetailPage;
