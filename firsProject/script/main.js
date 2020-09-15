new Vue ({
    el: '#app',
    data: {
        message: 'Hello Vue'
    }
});

new Vue ({
    el: '#app_1',
    data: {
        message: 'You download this page' + new Date().toLocaleString()
    }
});

new Vue ({
    el: '#app_2',
    data: {
        seen: true
    }
})

new Vue ({
    el: '#app_3',
    data: {
        list:[
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Create something cool'}
        ]
    }
})

new Vue ({
    el: "#app_4",
    data: {
        message: 'Hi Vue!'
    },
    methods: {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('')
        }
        
    },
})

new Vue ({
    el: '#app_5',
    data: {
        message: 'Hi Vue'
    }
})