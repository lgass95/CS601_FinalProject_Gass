let app = new Vue({ 
    el: '#app', 
    //function to return assets and text to populate page
    data: function(){ 
       return{
        display1: 'VueImages/Sunflowers.jpg',
        img1: 'VueImages/Sunflowers.jpg',
        img2: 'VueImages/Irises.jpg',
        display2: 'VueImages/SP1.jpg',
        img3: 'VueImages/SP1.jpg',
        img4: 'VueImages/SP2.jpg',
        link: "https://en.wikipedia.org/wiki/Vincent_van_Gogh",//link attaches to button to go to new page
        dates: "1853-1890",
        fontColor: 'white',
       };
    },
    //methods swap the two sets of images
    methods: {
        hoverOnOne(value){
            this.display1=value;
        },
        hoverOffOne(value){
            this.display1=value;
        },
        hoverOnTwo(value){
            this.display2=value;
        },
        hoverOffTwo(value){
            this.display2=value;
        }
    }
});