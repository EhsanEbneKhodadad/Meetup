export async function FetchData() {
  const dataJson = await fetch(
    "https://meetups-58b30-default-rtdb.firebaseio.com/meetups.json"
  );
  const data = await dataJson.json();
  let array = [];

  for (let item in data) {
    array.push({
      id: data[item].id,
      title: data[item].title,
      image: data[item].image,
      address: data[item].address,
      description: data[item].description,
    });
  }
  return array;
}
export async function GetAmount() {
  const data = await FetchData();
  return data.length;
}
