const electron = require("electron");

const { BrowserWindow, app } = electron;

app.on("ready", () => {
  console.log("app is running");
});
