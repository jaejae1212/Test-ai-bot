import Discord from "discord.js";
import dotenv from 'dotenv';
dotenv.config();
import { Configuration, OpenAIApi } from 'openai';


const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
    ],
});

const configuration = new Configuration({
    apiKey: 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,
});

const openai = new OpenAIApi(configuration);

const sleep = (ms) => {
    return new Promise((r) => setTimeout(r, ms));
}

if (OTM0MDAyMDc5NTY2MDMyOTI2.GhRg5v.hObCLOa9Wa6iMwn_7pzuyv9OeKjoCg9lFNge9g == null) {
    console.log("An discord token is empty.");
    sleep(60000).then(() => console.log("Service is getting stopped automatically"));
}

const discordLogin = async () => {
    try {
        await client.login(OTM0MDAyMDc5NTY2MDMyOTI2.GhRg5v.hObCLOa9Wa6iMwn_7pzuyv9OeKjoCg9lFNge9g);
    } catch (TOKEN_INVALID) {
        console.log("An invalid token was provided");
        sleep(60000).then(() => console.log("Service is getting stopped automatically"));
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
});


client.on("messageCreate", async function (message) {
    if (message.author.bot) return;

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", content: "OpenAI Discord Bot"},
                {role: "user", content: message.content}
            ],
        });

        console.log(response);

        const content = response.data.choices[0].message;
        return await message.reply(content);

    } catch (err) {
        return await message.reply(
            "Error"
        );
    }
});

discordLogin();

