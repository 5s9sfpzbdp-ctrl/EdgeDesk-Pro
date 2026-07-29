export default {
  async fetch(request, env) {

    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return Response.json({
        status: "ok",
        app: "EdgeDesk Pro",
        version: "2.0.0",
        time: new Date().toISOString()
      });
    }

    if (url.pathname === "/api/matches") {

      // Nei prossimi blocchi qui useremo Football Data API

      return Response.json({
        success: true,
        matches: []
      });

    }

    if (url.pathname === "/api/predictions") {

      return Response.json({
        success: true,
        predictions: []
      });

    }

    return new Response("Not Found", {
      status: 404
    });

  }
}