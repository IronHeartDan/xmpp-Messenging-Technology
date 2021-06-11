const xmpp = require("simple-xmpp");

xmpp.on("online", (data) => {
  console.log(`Connected as ${data.jid.user}`);
  setTimeout(send, 5000);
});

xmpp.on("error", (err) => {
  console.log(err);
});

xmpp.on("chat", (from, msg) => {
  console.log(`Message from ${from} : ${msg}`);
});

function send() {
  setTimeout(send, 5000);
  xmpp.send("userone@localhost", `Hey!.. ${Date.now()}`);
}

xmpp.connect({
  jid: "usertwo@localhost",
  password: "121212",
  host: "localhost",
  port: "5222",
});
