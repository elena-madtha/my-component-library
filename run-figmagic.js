const { exec } = require("child_process");

// Manually trimmed config
const FIGMA_URL = "NFIkALbbytjXy4O2m6Xo2t".trim();
const FIGMA_TOKEN = "figd_xvOeQnTRT3ATb33eHQVwH96Ne_puXsyDaN1wVHO".trim();

// Set as environment variables and run figmagic
process.env.FIGMA_URL = FIGMA_URL;
process.env.FIGMA_TOKEN = FIGMA_TOKEN;

exec("npx figmagic --debug", (err, stdout, stderr) => {
  if (err) {
    console.error("❌ Error:", err);
    return;
  }
  if (stderr) {
    console.error("⚠️ stderr:", stderr);
  }
  console.log("✅ Output:\n", stdout);
});
