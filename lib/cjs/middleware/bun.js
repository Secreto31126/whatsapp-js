"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var bun_exports = {};
__export(bun_exports, {
  WhatsAppAPI: () => WhatsAppAPI
});
module.exports = __toCommonJS(bun_exports);
var import_web_standard = require("./web-standard.js");
class WhatsAppAPI extends import_web_standard.WhatsAppAPI {
  /**
   * POST request handler for Bun server
   *
   * @example
   * ```ts
   * import { WhatsAppAPI } from "whatsapp-api-js/middleware/bun";
   *
   * const Whatsapp = new WhatsAppAPI({
   *     token: "YOUR_TOKEN",
   *     appSecret: "YOUR_APP_SECRET",
   *     webhookVerifyToken: "YOUR_WEBHOOK_VERIFY_TOKEN"
   * });
   *
   * Bun.serve({
   *     fetch: async (req) => {
   *         if (req.url === "/message" && req.method === "POST") {
   *             req.respond({ status: await Whatsapp.handle_post(req) });
   *         }
   *     }
   * });
   * ```
   *
   * @param req - The request object
   * @returns The status code to be sent to the client
   */
  async handle_post(req) {
    return super.handle_post(req);
  }
  /**
   * GET request handler for Bun server
   *
   * @example
   * ```ts
   * import { WhatsAppAPI } from "whatsapp-api-js/middleware/bun";
   *
   * const Whatsapp = new WhatsAppAPI({
   *     token: "YOUR_TOKEN",
   *     appSecret: "YOUR_APP_SECRET",
   *     webhookVerifyToken: "YOUR_WEBHOOK_VERIFY_TOKEN"
   * });
   *
   * Bun.serve({
   *     fetch: (req) => {
   *         try {
   *             return new Response(Whatsapp.handle_get(req));
   *         } catch (e) {
   *             return new Response(null, { status: e as number });
   *         }
   *     }
   * });
   * ```
   *
   * @param req - The request object
   * @returns The challenge string to be sent to the client
   * @throws The error code
   */
  handle_get(req) {
    return super.handle_get(req);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WhatsAppAPI
});
//# sourceMappingURL=bun.js.map