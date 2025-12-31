const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");

Sentry.init({
  dsn: "https://0e45d3f4bb156133f6bf732c52f7439d@o4510625153548288.ingest.us.sentry.io/4510625501478912",
  integrations: [nodeProfilingIntegration()],
  // Tracing
  // Capture 100% of the transactions
  tracesSampleRate: 1.0,
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
