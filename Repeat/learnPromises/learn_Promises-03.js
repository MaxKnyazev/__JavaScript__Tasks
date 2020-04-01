(function(){
//https://jsonplaceholder.typicode.com
//https://jsonplaceholder.typicode.com/users  --> id (usersID)
// https://jsonplaceholder.typicode.com/posts?userId=1  --> id (postId)
// https://jsonplaceholder.typicode.com/comments?postId=1  --> comments

    let xhr = new XMLHttpRequest();

    function getUser() {
        return new Promise(function(resolve, reject){
            xhr.open('GET', `https://jsonplaceholder.typicode.com/users`, true);
            xhr.send();
            setTimeout(function(){
                if (xhr.status !== 200) {
                    reject(`ОШИБКА : статус = ${xhr.status} : ${xhr.statusText}`);
                } else {
                    resolve(xhr.response);
                }
            }, 1000);
        })
    }

    function getPost(userId) {
        return new Promise(function(resolve, reject){
            xhr.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${userId}`, true);
            xhr.send();
            setTimeout(function(){
                if (xhr.status !== 200) {
                    reject(`ОШИБКА : статус = ${xhr.status} : ${xhr.statusText}`);
                } else {
                    resolve(xhr.response);
                }
            }, 1000);
        })
    }

    function getComments(postId) {
        return new Promise(function(resolve, reject){
            xhr.open('GET', `https://jsonplaceholder.typicode.com/comments?postId=${postId}`, true);
            xhr.send();
            setTimeout(function(){
                if (xhr.status !== 200) {
                    reject(`ОШИБКА : статус = ${xhr.status} : ${xhr.statusText}`);
                } else {
                    let comments = JSON.parse(xhr.response);
                    resolve(comments);
                }
             }, 1000);
        })
    }

    getUser()
        .then(function(dataUser){
            let userId = JSON.parse(dataUser)[0].id;
            let userName = JSON.parse(dataUser)[0].name;
            console.dir(`User = ${userName}  (userId = ${userId})`);
            return getPost(userId);
        })
        .then(function(dataPost){
            let postId = JSON.parse(dataPost)[0].id;
            let postTitle = JSON.parse(dataPost)[0].title;
            console.dir(`Title = ${postTitle} (postId = ${postId})`);
            return getComments(postId);
        })
        .then(function(comments){
            console.log('Comments :');
            console.dir(comments)
            comments.forEach((elem, i) => console.log(elem.body));
        })
        .catch(function(err){
            console.dir(err)
        });

})();
