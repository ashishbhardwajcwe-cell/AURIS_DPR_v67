exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: { "Access-Control-Allow-Origin": "*" }, body: "Method Not Allowed" };
  }
  var key = process.env.GEMINI_API_KEY;
  if (!key) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: { message: "Server is missing GEMINI_API_KEY." } })
    };
  }
  try {
    var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=" + encodeURIComponent(key);
    var r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
