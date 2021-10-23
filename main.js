//Variaveis: let ou const
//let são variáveis que podem mudar de valor.
//const são variáveis constantes, ou seja, o mesmo valor inicial.
//camelCase
//PascalCase
//snake_case

let accept = true
let user = {
  name: 'Myckael Brenno',
  phone: 123456789
}

const linksSocialMedia = {
  github: 'MyckaelBrenno',
  youtube: 'channel/UCkfnZjPhrS9beYcGIvc-DaQ',
  facebook: 'myckaelbrenno',
  instagram: 'myckaelbrenno',
  twitter: 'myckaelbrenno'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class') //const altera valor pq está dentor do for (variavel de escopo)

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href) //Dentro da li pega o 1º filho em href
  }

  //document.getElementById('userName').textContent = 'Olivia'
  userName.textContent = 'Rafael'
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

  //fetch pega alguma resposta da url, ou seja, o json
  //then() é uma promisse
  //alert(url)
}
getGitHubProfileInfos()
//alert(user.name)

//Arrow Functions
//Passa um argumento, depois => e as chaves {}
//ex: argumento => {}
