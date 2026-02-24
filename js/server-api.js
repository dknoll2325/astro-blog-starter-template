export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/test" && request.method === "GET") {
      return Response.json({ message: "API is working!" });
    }

    if (url.pathname === "/api/echo" && request.method === "POST") {
      const body = await request.json();
      return Response.json({ youSent: body });
    }

    return new Response("Not found", { status: 404 });
  },
};