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

export async function POST(request: Request) {}
