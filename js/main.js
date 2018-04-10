
// modal funnality va
var body = document.getElementsByTagName("BODY")[0]
var modal = document.querySelector('.modal');
var featureBtns = document.querySelectorAll('.feature-btn');
var closeBtns = document.querySelectorAll('.close');
var featureDetailS = document.querySelectorAll('.feature-detail');

// Open pop-up buttons behavior: pop-up feature description and show the specific feature detail
for (var i = 0; i < featureBtns.length; i++){ 
    featureBtns[i].addEventListener('click', function(){
        body.classList.add('scroll-lock');
        modal.style.display = "block";
        featureDetail = document.querySelectorAll('#'+this.id)[1]; //use the id of the button to get the correspond modal content
        featureDetail.style.display = 'block'; // show clicked feature detail
    });
}

// Closed pop-up buttons behaviors
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click',function(){
        body.classList.remove('scroll-lock');
        modal.style.display = "none";
        for (var i = 0; i < featureDetailS.length; i++) {
            featureDetailS[i].style.display = 'none'; // set the clicked feature display attribute back to "None" once the pop-up closed
        }
    });
}

// Closed pop-up buttons behaviors: when clicking outside the pop-up content, the pop-up will close
window.onclick = function (event) {
    if (event.target == modal) {
        body.classList.remove('scroll-lock');
        modal.style.display = "none";
        for (var i = 0; i < featureDetailS.length; i++){
            featureDetailS[i].style.display = 'none'; // set the clicked feature display attribute back to "None" once the pop-up closed
        }
    }
} 

// Google Analytics Btn behavior
function clickEvent(action, event_category, event_label) {
    // var element = document.querySelector('#'+'clicked_id');
    gtag('event', action, {
        'event_category': event_category,
        'event_label': event_label
    });

}