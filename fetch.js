// async function getData() {
//   url =
//     "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json";
//   fetch(url)
//     .then((res) => {
//       console.log(res.json);
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
// getData();

async function get() {
  const res = await fetch(
    "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json"
  );
  var data = await res.json();
  console.log(data);
}
get();
