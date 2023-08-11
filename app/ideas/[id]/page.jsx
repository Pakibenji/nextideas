async function fetchIdea(id) {
    const URL = `http://localhost:3000/api/ideas/`;
    const res = await fetch(`${URL}/${id}`);
    const idea = res.json();
    return idea;
}

export default async function Page({params}) {
    const { id } = params ;
    const idea =  await fetchIdea(id);
    return (
        <main className="main">
            {JSON.stringify(idea, null, 2)}
        </main>
    )
}