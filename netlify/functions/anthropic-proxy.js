exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: { "Access-Control-Allow-Origin": "*" }, body: "Method Not Allowed" };
  }
  var key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: { message: "Server is missing ANTHROPIC_API_KEY." } })
    };
  }
  try {
    var r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01"
      },
      body: event.body
    });
    var text = await r.text();
    return {
      statusCode: r.status,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: text
    };
  } catch (e) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: { message: "Upstream request failed: " + (e && e.message ? e.message : String(e)) } })
    };
  }
};
