// import FetchCompileWasmTemplatePlugin from "webpack/lib/web/FetchCompileWasmTemplatePlugin";
import consumer from "./consumer"
import CableReady from "cable_ready"
consumer.subscriptions.create("TimelineChannel", {
  connected() {
    console.log("******** Subscription Created")
  },

  disconnected() {
    console.log("******** Subscription disconnected")
  },

  received(data) {
    console.log("******** Received data:", data.operations)
    if (data.cableReady) CableReady.perform(data.operations)
  }
});
