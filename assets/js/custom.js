$(window).on('load', function() {

  var vm = new Vue({
    el: '#timeline',
    data: {
      analysis: "",
      events: [
      ]
    },
    methods: {
      changeTimeline: function (event) {
        // `this` inside methods points to the Vue instance
        // `event` is the native DOM event
        console.log(event.target.getAttribute("value"));
        if (event) {
          var country = event.target.getAttribute("value");
          vm.analysis = CONTENTS.analysis[country];
          vm.events = CONTENTS.eventsByCountry[country];
        }else{
          alert("Error occured!")
        }
      }
    }
  })

})
