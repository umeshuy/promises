const posts = [
    { title: 'Post one', body: 'body one' },
    { title: 'Post two', body: 'body two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

function deletePost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const lastPost = posts.pop()
                resolve(lastPost);
            }
            else {
                reject('Array is empty now');
            }
        }, 1000);
    });
}

createPost({ title: 'post three', body: 'body three' })
//createPost({ title: 'post four', body: 'body four' })
    .then(() => {
        getPosts()
        deletePost().then(() => {
            getPosts()
            deletePost().then(() => {
                getPosts()
                deletePost().then(() => {
                    getPosts()
                    deletePost().then(() => {})
                        .catch((err) => {
                            console.log('Inside catch block', err);
                        })
                })
                .catch((err) => {
                    console.log('Inside catch block', err);
                })
            })
            .catch((err) => {
                console.log('Inside catch block', err);
            })
        })
        .catch((err) => {
            console.log('Inside catch block', err);
        })
    })

    // promise.all
    const promise1 = Promise.resolve('Hello World');
    const promise2 = 10;
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve,2000,'GoodBye')
    });

    Promise.all([promise1,promise2,promise3]).then(values => console.log(values));