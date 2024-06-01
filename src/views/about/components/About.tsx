// async function fetchData() {
//     // URL ke file JSON di folder publik
//     const API_URL = 'http://localhost:3000/LatestProjects.json';

//     const response = await fetch(API_URL);
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
// };

export default async function About() {
  // const data = await fetchData();

  return <div>?</div>;
}
