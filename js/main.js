var modal = document.querySelector('.modal');
// var btn = document.querySelector('#feature-btn-deposit');
var btns = document.querySelectorAll('.feature-btn');
// add button behavior to modal buttons
var ps = document.querySelectorAll('.feature-detail');
console.log(ps);
for (var i = 0; i < btns.length; i++){ 
    btns[i].addEventListener('click', function(){
        modal.style.display = "block";
        p = document.querySelectorAll('#'+this.id)[1];
        p.style.display = 'block';
    });
}
// When the user clicks on the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }
// // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        for (var i=0; i<ps.length; i++){
            ps[i].style.display = 'none';
        }
    }
} 

// // Google Analytics Btn behavior
// function clickEvent(clicked_id) {
//     var element = document.querySelector('#'+'clicked_id');
//     ga('send', 'event', 'feature', clicked_id, 'Fall Campaign');
// }