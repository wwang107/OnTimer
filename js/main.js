var modal = document.querySelector('.modal');
var btns = document.querySelectorAll('.feature-btn');
var closeBtns = document.querySelectorAll('.close');
var ps = document.querySelectorAll('.feature-detail');
// Add buttons behavior: pop-up feature description and show the specific feature detail
for (var i = 0; i < btns.length; i++){ 
    btns[i].addEventListener('click', function(){
        modal.style.display = "block";
        p = document.querySelectorAll('#'+this.id)[1];
        p.style.display = 'block'; // show clicked feature detail
    });
}

for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click',function(){
        modal.style.display = "none";
        for (var i = 0; i < ps.length; i++) {
            ps[i].style.display = 'none'; // set the clicked feature display attribute back to "None" once the pop-up closed
        }
    });
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        for (var i=0; i<ps.length; i++){
            ps[i].style.display = 'none'; // set the clicked feature display attribute back to "None" once the pop-up closed
        }
    }
} 

// // Google Analytics Btn behavior
// function clickEvent(clicked_id) {
//     var element = document.querySelector('#'+'clicked_id');
//     ga('send', 'event', 'feature', clicked_id, 'Fall Campaign');
// }