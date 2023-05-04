/**
 * @module setup
 *
 * @description
 * Simplify the setup proccess of the WhatsAppAPI for different platforms
 *
 * @example
 * ```ts
 * import WhatsAppAPI from "whatsapp-api-js";
 * import { NodeNext } from "whatsapp-api-js/setup/node";
 *
 * const api = new WhatsAppAPI(NodeNext({
 *     token: "YOUR_TOKEN",
 *     appSecret: "YOUR_APP_SECRET"
 * }));
 * ```
 */
export { default as Bun } from "./bun.js";
export { default as Deno } from "./deno.js";
export { default as Web } from "./web.js";
export * from "./node.js";
//# sourceMappingURL=index.d.ts.map