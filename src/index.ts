const serverTimeHeader = document.getElementById("server-time") as HTMLElement;
if (serverTimeHeader) {
  serverTimeHeader.innerHTML = `Current server time: ${new Date().getUTCHours()}:${new Date().getUTCMinutes()}`
}
