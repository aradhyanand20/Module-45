// Create an asynchronous function that retrieves data from two different API endpoints: "https://
// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
// a to-do task, while the second API provides post details. The function should combine the results from both APIs
// and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
// responses from the respective APIs.

async function combineData(){
    try{
        const todoResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const todoData = await todoResponse.json();

        
        const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const postData = await postResponse.json();
        const combinedData = {
            todo :todoData,
            post: postData
        };
        console.log(combinedData);
    }catch{
        console.error('error:',error);
    }
}
combineData();