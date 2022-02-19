function NewMeetup(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data)
    try {
      fetch("https://meetups-58b30-default-rtdb.firebaseio.com/meetups.json", {
        method: "POST",
        body: data,
        "Content-Type": "application/json",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      res.status(201).json({ message: "Meetup Added" });
    } catch (error) {
      res.status(500).json({ message: "Coudn't Connect to Database" });
    }
  }
}

export default NewMeetup;
