App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    console.log("received pito");
    document.querySelector("textarea.form-control").value=this.renderMessage(data);
  },

  renderMessage: function(data) {
    return data.message;
  }
});
