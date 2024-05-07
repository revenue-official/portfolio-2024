async function fetchData() {
    // URL ke file JSON di folder publik
    const API_URL = 'http://localhost:3000/LatestProjects.json';

    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
};

export default async function About() {
    const data = await fetchData();

    return (
        <div>
            <h1>Latest Projects</h1>
            <ul>
                {data.map((project: any, index: number) => (
                    <li key={index}>
                        <p><strong>ID:</strong> {project.id}</p>
                        <p><strong>Name:</strong> {project.name}</p>
                        <p><strong>Description:</strong> {project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}