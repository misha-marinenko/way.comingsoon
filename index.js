var app = new Vue({
    el: "main",
    data: {
        countdown: ""
    }
});
setInterval(
    function(){
        app.countdown = countdown(new Date(2018, 3, 22)).toString()
    }, 500
)