// API endpoint that returns a greeting
export async function onRequest(context) {
  return new Response(JSON.stringify({
    message: "Hello from the API!",
    timestamp: new Date().toISOString()
  }), {
    headers: {
      "content-type": "application/json"
    }
  });
}
