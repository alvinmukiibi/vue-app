
Vue.component('message', {
    template: `
        
        <article class="message" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" @click="hideMessage" aria-label="delete"></button>
            </div>
            <div class="message-body">
               {{ body  }}     
            </div> 
        </article> 
    
    `,
    data(){
        return {
            isVisible: true
        }
    },
    props: ['title', 'body'],
    methods: {
        hideMessage(){
            this.isVisible = false;
        }
    }
})



Vue.component('coupon',{
    template: `
        <div class="field">
            <div class="control">
                <input type="text" placeholder="Enter your coupon" class="input is-primary" v-model="inputValue" @blur="innerCouponApplied"/>
            </div>
        </div>
    `,
    data(){
        return {
            inputValue: ''
        }
    },
    methods: {
        innerCouponApplied(){
            // emitting an event 'applied' allows it to travel to other components that are listening fot it

            this.$emit('applied', this.inputValue); // this is a custom event that we name ourselves
        }
    }
});


$options = {
    el: '.container',
    data: {
        couponApplied: false,
        inputValue: 'l'
    },
    methods: {
        onCouponApplied(){
            this.couponApplied = true;
        }
    }


}

const blog = new Vue($options);