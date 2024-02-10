export async function POST(request: Request) {
  const requestBody = await request.json();
  if (!requestBody.modelUrl) {
    throw new Error("Missing Model");
  }
  if (!requestBody.input) {
    throw new Error("Missing input");
  }
  if (!process.env.USER_TOKEN) {
    throw new Error("Missing Access Token");
  }
  const modelUrl = requestBody.modelUrl;
  const input = requestBody.input;

  const response = await fetch(modelUrl, {
    headers: {
      Authorization: `Bearer ${process.env.USER_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ inputs: input }),
  });
  if (!response.ok) {
    throw new Error("Request Failed");
  }
  const imageData = await response.arrayBuffer();
  return new Response(imageData, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
