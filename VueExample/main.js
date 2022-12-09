let app = new Vue({ 
    el: '#app', 
    data: { 
        appName: 'My Vue Demonstration',
        link: 'https://www.bu.edu/csmet/academic-programs/courses/cs601/',
        logoSrc: 'VueImages/Sunflowers.jpg',
        offeredOnline: true,
        offeredBlended: true,
        isOpen: true,
        prerequisites: [
            'CS200',
            'CS231',
            'CS232',
            'CS300'
        ],
        
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontColor: '#dc143c'
    },
    methods: {
        goToStudentLink: function() {
            alert('You will be redirected to Student Link.')
            window.location.href='https://www.bu.edu/link/bin/uiscgi_studentlink.pl/uismpl/?ModuleName=menu.pl&NewMenu=Home'
        }
    }
})