let tasks = [
  { id: 1, name: "Task1" },
  { id: 2, name: "Task2" },
];
export async function GET(request: Request) {
  // For example, fetch data from your DB here

  return new Response(JSON.stringify(tasks), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const { name } = await request.json();
  const newTask = { id: tasks.length + 1, name };
  tasks.push(newTask);
  return new Response(JSON.stringify(newTask), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
