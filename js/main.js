function clickEvent(clicked_id) {
    var element = document.querySelector('#'+'clicked_id');
    ga('send', 'event', 'feature', clicked_id, 'Fall Campaign');
}