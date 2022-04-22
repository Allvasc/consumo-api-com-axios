const url = "http://localhost:5500/api";

const newUser =  {
    name: "Allison Vasconcelos",
    avatar: "https://scontent.fjdo10-1.fna.fbcdn.net/v/t31.18172-8/15676263_1125513330880469_8050575782813990556_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=V_65_deHOGYAX-9fq6u&_nc_ht=scontent.fjdo10-1.fna&oh=00_AT97EQleFnnLERg-h4vCPHR1xY_jYm1GTICw7Z5sFbWs5g&oe=6289E99D",
    city: "Fortaleza"
}

const updateUser =  {
    name: "José Henrique",
    avatar: "https://cf.shopee.com.br/file/71104d0aad4139387b12e7e13c7a99a5",
    city: "Fortaleza"
}

function getUser() {
    axios.get(url)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
getUser()

function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        alert(JSON.stringify(response.data))
        })
    .catch(error => console.log(error))
}
// addNewUser()

function upDateUser(){
    axios.put(`${url}/4`, updateUser)
    .then(response => {alert(JSON.stringify(response.data))})
    .catch(error => console.log(error))
}
// upDateUser()

function deleteUser(){
    axios.delete(`${url}/5`)
    .then(response => {alert(JSON.stringify(response.data))})
    .catch(error => console.log(error))
}
// deleteUser()


function getOneUser() {
    axios.get(`${url}/3`)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
// getOneUser()