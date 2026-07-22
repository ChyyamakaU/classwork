// Write an asynchronous function that fetches data from:

// https://jsonplaceholder.typicode.com/posts
// Use an AbortController to cancel the request if it takes more than 2 seconds. If successful, convert the response to JSON and log the total number of posts. If cancelled, log: Request was cancelled. Call the function to run it.
// 1


async function fetchData() {

    let controller = new AbortController();


    let timeout = setTimeout(() => {
        controller.abort(new Error ("request was cancelled"))
    }, 2000)

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        })

        let result = await response.json()
        let count = 0;
        for (let i = 0; i < result.length; i++) {

            if (result[i].body) { count++ }

        }
        console.log(`The total number of post is ${count}`)
    }
    catch (error) {
        console.log(error.message)

    }
}
fetchData()




// Create an asynchronous function that downloads data from three JSON files at the same time using Promise.all().

// The files are:

// movie.json actors.json cinemas.json
// After all three files have been downloaded:

// Convert each response to JSON. Display the movie's title. Display the total number of actors. Display the total number of cinemas.
// Use the myDisplayer() function to display the results.
// 2



async function downloadData(){


fetch


}



