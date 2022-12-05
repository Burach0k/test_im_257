const CLIENT_ID = 'Dd7OKj6A4QfnqzXWd07FEZjTbR7dhWf2'
const REDIRECT_URI = 'https://burach0k.github.io/test_im_257'

fetch("https://auth.atlassian.com/authorize?"+
"audience=api.atlassian.com&" +
`client_id=${CLIENT_ID}&` +
"scope=read%3Ame%20read%3Aaccount&"+
`redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
// "redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback&" +
"state=burak&" +
"response_type=code&" +
"prompt=consent").then(console.log)

// const jira_cloud_instance_name = ''
// const CLIENT_ID = ''
// const REDIRECT_URI = ''
// const CLIENT_SECRET = ''

// fetch(`https://${jira_cloud_instance_name}.atlassian.net/plugins/servlet/ac/io.tempo.jira/oauth-authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`,
// {
//     method: "GET"
// }).then((a) => {
//     console.log(a)
//     const CODE = ''

//     fetch('https://api.tempo.io/oauth/token/',
//     {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `grant_type = "authorization_code"
//         client_id = "${CLIENT_ID}"
//         client_secret = "${CLIENT_SECRET}"
//         redirect_uri = "${REDIRECT_URI}"
//         code = "${CODE}"`
//     }).then((a) => {
//         console.log(a)

//         const ACCESS_TOKEN = ''

//         fetch('https://app.tempo.io/rest/tempo-timesheets/4/worklogs/search',
//             {
//                 headers: {
//                     Authorization: `Bearer ${ACCESS_TOKEN}`
//                 },
//                 method: "POST",
//                 host: 'imedia24.atlassian.net',
//                 body: JSON.stringify({"from":"2022-11-01", "to":"2022-11-30"})
//             }).then((a) => {
//                 console.log(a)
//             })
//     })
// })




// // fetch('https://imedia24.atlassian.net/rest/tempo-timesheets/4/worklogs/search', {
// //   method: 'GET',
// //   headers: {
// //     'Authorization': `Basic 'email@example.com:<api_token>'`,
// //     'Accept': 'application/json',
// //     'Cache-Control': 'no-cache',
// //     'User-Agent': 'PostmanRuntime/7.29.2',
// //     'Accept': '*/*',
// //     'Accept-Encoding': 'gzip, deflate, br',
// //   }
// // })
// //   .then(response => {
// //     console.log(
// //       `Response: ${response.status} ${response.statusText}`
// //     );
// //     return response.text();
// //   })
// //   .then(text => console.log(text))
// //   .catch(err => console.error(err));