// Using pusher.com: When user is looking at any of the item views,
// we will be listening to events on the comment_event channel ("comment_event").
// When such an event comes in we receive item_id and count and
// we surgically update the DOM

var pusher = new Pusher('5e157d0652d97d9fa6d4');
var channel = pusher.subscribe('formdemo_channel');
channel.bind('comment_event', function(data) {
	var elt_id = 'comment-count-'+data.item_id;
  var elt = document.getElementById(elt_id);
	if (elt != null) {
    elt.innerHTML = data.count;
  }
});
