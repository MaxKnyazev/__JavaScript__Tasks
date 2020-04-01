(function(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://jsonplaceholder.typicode.com/users`, true);
    xhr.send();
    setTimeout(function(){
        if (xhr.status !== 200) {
            console.log(`ОШИБКА : статус = ${xhr.status} : ${xhr.statusText}`);
        } else {
            //console.dir(xhr.responseText);
            let userId = JSON.parse(xhr.response)[0].id;
            console.dir(`User = ${JSON.parse(xhr.response)[0].name}  (userId = ${userId})`);



            xhr.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${userId}`, true);
            xhr.send();
            setTimeout(function(){
                if (xhr.status !== 200) {
                    console.log(`ОШИБКА : статус = ${xhr.status} : ${xhr.statusText}`);
                } else {
                    //console.dir(xhr.responseText);
                    let postId = JSON.parse(xhr.response)[0].id;
                    console.dir(`Title = ${JSON.parse(xhr.response)[0].title} (postId = ${userId})`);



                    xhr.open('GET', `https://jsonplaceholder.typicode.com/comments?postId=${postId}`, true);
                    xhr.send();
                    setTimeout(function(){
                        if (xhr.status !== 200) {
                            console.log(`ОШИБКА : статус = ${xhr.status} : ${xhr.statusText}`);
                        } else {
                            //console.dir(xhr.response);
                            let comments = JSON.parse(xhr.response);
                            console.log('Comments :');
                            console.dir(comments);
                            comments.forEach((elem, i) => console.log(elem.body));




                        }
                    }, 1000);





                }
            }, 1000);





        }
    }, 1000);
})();



//https://jsonplaceholder.typicode.com
//https://jsonplaceholder.typicode.com/users  --> id (usersID)
// https://jsonplaceholder.typicode.com/posts?userId=1  --> id (postId)
// https://jsonplaceholder.typicode.com/comments?postId=1  --> comments

// let xhr = new XMLHttpRequest();
//
// xhr.open('GET', `https://jsonplaceholder.typicode.com/users`, true);
// xhr.send();
//
// setTimeout(function(){
//     if (xhr.status !== 200) {
//         console.log(`ОШИБКА : статус = ${xhr.status} : ${xhr.statusText}`);
//     } else {
//         //console.dir(xhr.responseText);
//         let userId = JSON.parse(xhr.response)[0].id;
//         console.log(`User = ${JSON.parse(xhr.response)[0].name}  userId = ${userId}`);
//
//     }
// }, 1000);
