import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log("****** recevied ");
    var div = document.createElement('div')
    div.innerHTML = data.content.trim();
    document.querySelector("div.message_list").appendChild(div);
    document.querySelector(".field.create textarea").value="";
    document.querySelector(".field.create textarea").focus();
  }
});
