// document
// #document (http://127.0.0.1:3000/38.DOM/index.html?vscode-livepreview=true)#top-layer

// document.body
// <body>​…​</body>​<div class=​"container">​…​</div>​<table>​…​</table>​<script src=​"script.js">​</script>​<veepn-lock-screen>​…​</veepn-lock-screen>​</body>​

// document.body.childNodes
// NodeList(8) [text, div.container, text, table, text, script, text, veepn-lock-screen]

// document.body.childNodes[1]
// <div class=​"container">​<!-- this is me  --><div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​<div class=​"box">​Box5​</div>​</div>​

// document.body.childNodes[0]
// #text
// document.body.childNodes[1].childNodes
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// document.body.childNodes[1].firstChild
// #text

// document.body.childNodes[1].lastChild
// #text

// document.body.childNodes[1].firstElementChild
// <div class=​"box">​Box1​</div>​

// document.body.childNodes[1].lastElementChild
// <div class=​"box">​Box5​</div>​

// let c = document.body.childNodes[1]
// undefined

// c.firstChild
// #text

// c.firstElementChild
// <div class=​"box" style=​"background-color:​ red;​">​Box1​</div>

// c.firstElementChild.style.color
// ''

// c.firstElementChild.style.backgroundColor = "red"
// 'red'

// let c = document.body.childNodes[1]
// undefined

// c.childNodes
// NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

// c.lastElementChild
// <div class=​"box">​Box5​</div>​

// c.lastElementChild.parentElement
// <div class=​"container">​…​</div>​

// c.lastElementChild.nextElementSibling
// null

// c.lastElementChild.nextSibling
// #text

// c.childNodes[5]
// <div class=​"box">​Box2​</div>​

// c.childNodes[5].nextElementSibling
// <div class=​"box">​Box3​</div>​

// c.childNodes[5].previousElementSibling
// <div class=​"box">​Box1​</div>​

// document.body.firstChild
// #text

// document.body.firstElementChild
// <div class=​"container">​…​</div>​

// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]