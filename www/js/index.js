var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        var startButton = document.getElementById('start');
        startButton.addEventListener('click', function() {
            navigator.notification.alert('oh hello!');
        });
    },
};

app.initialize();
