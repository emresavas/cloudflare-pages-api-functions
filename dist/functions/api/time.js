// API endpoint that returns the current server time
export async function onRequest(context) {
  const now = new Date();
  
  return new Response(JSON.stringify({
    time: now.toISOString(),
    formatted: now.toLocaleString(),
    unix: Math.floor(now.getTime() / 1000)
  }), {
    headers: {
      "content-type": "application/json"
    }
  });
}
