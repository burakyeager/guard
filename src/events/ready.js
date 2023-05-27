module.exports = async (client) => {
  client.on("ready", async () => {
    console.log(`${client.user.tag} Has Logged In!\nEmoji Server: https://discord.gg/fU7YdD2dQ6\nSubscribe to NitrixExE`)
    client.user.setPresence({
      activities: [{
        name: `${client.config.prefix}help`,
        type: "WATCHING"
      }],
      status: "online"
    });
  });
};