Vue.component('todo-item', {
    template: '<li> Its one objective in list</li>'
})

new Vue ({
    el: '#app'
})

Vue.component('list-item', {
    props: ['list'],
    template: '<li>{{list.text}}</li>'
})

new Vue ({
    el: '#app_1',
    data: {
        list_group: [
            {id:0, text: 'Eat'},
            {id:1, text: 'Beef'},
            {id:2, text: 'Beef'},
            {id:3, text: 'Beef'},
            {id:4, text: 'Beef'},
            {id:5, text: 'milk'},
            {id:6, text: 'bread'}
        ]
    }
})