Vue.directive('blink', {
    bind(el) {
    let isVisible = true;
    setInterval(() => {
    isVisible = !isVisible;
    el.style.visibility = isVisible ? 'visible' : 'hidden';
    }, 1000);
    }
    });
Vue.component('task', {
    template: '<li><slot></slot></li>',
});
Vue.component('task-list', {
    // We use a div below because a component netted in another must have a single root element
    template: '<div><task v-for="task in mytasks" v-text="task.description"></task></div>',
    data(){
        return{
            mytasks: [
                {id: 1,description: 'Catch fish', completed: false},
                {id: 2,description: 'Take daughter to school', completed: true},
                {id: 3,description: 'Go see grandma', completed: true},
                {id: 4,description: 'Call Jackie', completed: false},
                {id: 5,description: 'Kill some goats', completed: true},
                {id: 6,description: 'Watch WWE', completed: false},
                {id: 7,description: 'Listen to country music', completed: true}, 
            ]
           
        }
    }
})
Vue.component('positive-numbers', {
    template: '<p :style="mystyle">{{ positiveNumbers.length }} positive numbers and the count is <span>{{ count }} and the price is {{ priceOfFuel }} {{ unit }}</span></p>',
    // The data property here is a function that must return an object
    data() {
        return{
            numbers: [-5, 0, 2, -1, 1, 0.5]
        }
        
    },
    // props: ['color'],
    props: {
        color: String,
        // count: Number
        count: [Number, String],
        // specifying if a prop is required
        priceOfFuel: {
            type: [Number, String],
            required: true
        },
        unit: {
            type: String,
            default: '$'
        }
    },
    computed: {
        positiveNumbers(){
            return this.numbers.filter(number => number >= 0);
        },
        mystyle(){
            return {color: this.color};
        }
    }
});
const CustomButton = {
    template: '<button class="btn btn-secondary">BUTTON COMPONENT</button>',
    
}

$options =  {
    el: '.container',
    data: {
        message: 'Hello world',
        hours: 12,
        dogs: ['max', 'picky', 'jack'],
        averageRent: {
            london: 3442,
            paris: 2003,
            NYC: 2300
        },
        classValue: 'btn btn-primary',
        isDisabled: true,
        seconds: 0,
        inputText: 'hdey',
        value: 'two',
        myHtml: '<p class="text-danger">Yoo bro tsup</p>',
        numbers: [-4,5,3,0,-2, -1,9,-4],
        newDog: '',
        formData: {
            username: 'jack'
        },
        productOneCost: 4589,
        productTwoCost: 3562,
        productThreeCost: 1278,
        isSuccess: true,
        tasks: [
            {id: 1, description: 'Catch fish', completed: false},
            {id: 2,description: 'Take daughter to school', completed: true},
            {id: 3,description: 'Go see grandma', completed: true},
            {id: 4,description: 'Call Jackie', completed: false},
            {id: 5,description: 'Kill some goats', completed: true},
            {id: 6,description: 'Watch WWE', completed: false},
            {id: 7,description: 'Listen to country music', completed: true}, 
        ],
        attributeName: "href",
        attributeValue: "http://mukiibi.com",

    },
    methods: {
        filterPositive(numbers){
            return numbers.filter(number => number >= 0 )
        },
        addDog(event){
            this.dogs.push(this.newDog);
            this.newDog = '';
        },
        toggleClass(){
            this.isSuccess = !this.isSuccess;
        }

    },
    computed: {
        numberTotal(){
            return this.filterPositive(this.numbers).reduce((sum, val) => sum + val)
        },
        uncompletedTasks(){
            return this.tasks.filter(task => !task.completed);
        }
    },
    watch: {
        inputText(){
            console.log(this.inputText); // will be invokes everytime the value of the inputText changes
            
        },
        // watchers also receive the newval and the oldval
        'formData.username'(newVal, oldVal){
            console.log(newVal, oldVal);
        },
        // ,making a deep watch for a whole object not just its property
        formData: {
            handler(){
                console.log(newVal, oldVal);
            },
            deep: true
        }
    },
    filters: {
        formatCost(value, symbole){
            return symbole + (value / 100).toFixed(2);
        }
    },
    created(){
        setInterval(() => {
            this.seconds++;
            this.isDisabled = !this.isDisabled;
        }, 1000)
    },
    mounted(){

        this.$nextTick(() => {
            // in here the element has certainly been mounted to the DOM
        })

    },
    updated(){

    },
    destroyed(){

    },
    components: {
        CustomButton
    }

};


const app =new Vue($options);
app.$el === document.querySelector('.container'); // evaluates to true
app.$data; // this is how we access instance methods and variables on the Vue instance