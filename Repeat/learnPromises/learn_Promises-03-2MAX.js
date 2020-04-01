//https://jsonplaceholder.typicode.com

//https://jsonplaceholder.typicode.com/users  --> id (usersID)
// https://jsonplaceholder.typicode.com/posts?userId=1  --> id (postId)
// https://jsonplaceholder.typicode.com/comments?postId=1  --> comments

let xhr = new XMLHttpRequest();

function getUser() {
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
        xhr.open('GET', `https://jsonplaceholder.typicode.com/comments?postId=${postId}`, true);
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

getUser()
    .then(function(userData) {
        let userId = JSON.parse(userData)[0].id;
        let userName = JSON.parse(userData)[0].name;
        console.log(`User = ${userName}  userId = ${userId}`);

        return getPost(userId);
    })
    .then(function(postData) {
        let postId = JSON.parse(postData)[0].id;
        let postTitle = JSON.parse(postData)[0].title;
        console.log(`Post = ${postTitle}  postId = ${postId}`);

        return getComments(postId);
    })
    .then(function(commentsData) {
        let comments = JSON.parse(commentsData);
        comments.forEach(function(elem) {
            console.log(elem.body);
        });

        console.dir(comments);
    })
    .catch(function(err) {
        console.dir(err)
    });