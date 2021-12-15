Vue.component('my-list', {
    props: ['list'],
    template: '<li>{{list.listItem}}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        welcomeMessage: 'Welcome to VueJS',
        bindingMethod: 'You loaded this page on ' + new Date().toLocaleString(),
        ifCondition: true,
        isDisabled: true,
        listExample: [
            { id: 0, listItem: 'Apple', purchased : true },
            { id: 1, listItem: 'Banana', purchased : true },
            { id: 2, listItem: 'Mango', purchased : false },
        ],
        modelExample: 'Model Example',
        firstName: 'John',
        lastName: 'Doe',
        fullNameWatch: 'John Doe',
        isActive: true,
        hasError: false,
        multiClass: [
            {'text-warning' : false},
            {'small' : true}
        ],
        renderList : true,
        pageDetailObject: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
          },
          numbers: [1,2,3,4,5,6,7,8],

    },
    methods: {
        reverseMessage() {
            this.welcomeMessage = this.welcomeMessage.split('').reverse().join('');
        },
        changeDisability() {
            this.isDisabled = false;
        },
        even(numbers){
            return numbers.filter( function(num){
                return num % 2 === 0;
            });

        },
    },
    computed: {
        computedWelcomeMessage() {
            return this.computedWelcomeMessage = this.welcomeMessage.split('').reverse().join('');
        },
        fullNameComputed() {
            return this.firstName + ' ' + this.lastName;
        },
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            get: function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        },
        evenNumbers(){
            return this.numbers.filter( function(number){
                return number % 2 === 0;
            });
        },

    },
    watch: {
        firstName(val) {
            this.fullNameWatch = val + ' ' + this.lastName
        },
        lastName(val) {
            this.fullNameWatch = this.firstName + val;
        }
    },
    beforeCreate() {
        console.log('Before Create Element');
    },
    created() {
        console.log('Before Created');
    },
    mounted() {
        console.log('Mount');
    }
});