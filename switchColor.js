const buttons= document.querySelectorAll('.button')
const body= document.querySelector("body")

// buttons.forEach(function (button){
//     button.addEventListener('click', function(event){
//         if(event.target.id==='grey'){
//             body.style.backgroundColor=event.target.id;
//         }
//         else if(event.target.id==='white'){
//             body.style.backgroundColor=event.target.id;
//         }
//         else if(event.target.id==='blue'){
//             body.style.backgroundColor="rgb(56, 56, 139)";
//         }
//         else if(event.target.id==='orange'){
//             body.style.backgroundColor=event.target.id;
//         }
//     })                                                               
// })

//using switch case
buttons.forEach(function (button) {
    button.addEventListener('click', function(event) {
        switch (event.target.id) {
            case 'grey':
            case 'white':
            case 'orange':
                body.style.backgroundColor = event.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = "rgb(56, 56, 139)";
                break;
            default:
                break;
        }
    });
});
