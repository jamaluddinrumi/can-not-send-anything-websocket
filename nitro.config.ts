//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: '2025-03-06',
  experimental: {
    websocket: true
  }
});
