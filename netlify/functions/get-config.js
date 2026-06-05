exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {"Access-Control-Allow-Origin": "*"},
    body: JSON.stringify({
      status: "ok",
      key: process.env.ANTHROPIC_API_KEY,
      gemini: !!process.env.GEMINI_API_KEY
    })
  };
};
