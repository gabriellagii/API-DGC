const url = "https://jsonplaceholder.typicode.com/users";
const getUsers = async (numberOfUsers = 10) => {
    const response = await fetch(url);
    const responseJson = await response.json()
    return responseJson.slice(0, numberOfUsers);
}

export { getUsers }