new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://google.com',
        completeLink: '<a href="https://google.com">Google</a>',
        count: '0',
        x: '0',
        y: '0',
        result: '',

    },
    methods: {
        sayHello: function () {
            this.title = 'hello!'
            return this.title;
        },
        counter: function () {
            this.count++;
            this.result = this.count > 5 ? 'green' : 'red'
        },
        updateCoordinate: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }

    }
})