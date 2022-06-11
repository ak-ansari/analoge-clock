const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`<h1>wellcome</h1>
 <img src="https://c.tenor.com/RrSU5O63HewAAAAd/arvind-kejriwal-andar-aa-sakta-hun.gif">
    <button onclick="window.location.href='/about'" style="background-color:blue; width:100px; height:30px; color:white; font-size:20px;"> about </button>`);
  }
   else if (req.url === "/about") {
    res.end(`<div><img src="https://c.tenor.com/U7IUdUSV99oAAAAC/mai-kya-karega-baba-jaankey-paresh-rawal-baburao.gif">
    <button onclick="window.location.href='/'" style="background-color:blue; width:100px; height:30px; color:white; font-size:20px;">back to home</button>
    <h2> me ky krega re baba jan k</h2></div>`);
    }
 else
 { res.end(`<h1>oops!</h1>
 <img src="https://c.tenor.com/D_XupI_usHsAAAAd/tu-pagal-hai-kya-carryminati.gif">
    <p> abe page nhi h wapas ja</p>
    <a href='/'> bake to home</a>`);};
});
server.listen(2000);
