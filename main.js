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
        attachRed: false,
        fruits: ['Apple', 'Banana', 'Orange', 'Pineapple'],
        persons: [{
                name: 'John',
                age: 22,
                location: 'USA'
            },
            {
                name: 'Miles',
                age: 62,
                location: 'Canada'
            },
            {
                name: 'David',
                age: 32,
                location: 'United Kingdom'
            }
        ],
        condition: true,

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
        },
        switchCondition: function () {

        }
    },
    watch: {
        count: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.count = 0;
            }, 2000);
        }
    }
})