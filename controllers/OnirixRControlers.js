import { Bard } from "../dardo/index.js";

let cookies = `__Secure-1PSID=WQh1u-GBCsXSYdLqgSwpjILyb7us-J1FphF1gZUNXZCGiT5G8ctgf6srZvuAQ9fQ3V-A_A.`;

let bot = new Bard(cookies);

const getResponseByOnirix =  async (req  , res) => {

    const pastContext = req.body.pastContext;
    const currentContext = req.body.currentContext;

    const prompt = `
        CONTEXT : "
           ${pastContext  || "Imagine you are a guru, and you know all the meanings of all dreams. , Explain my dream"}
        ",
        "${currentContext}"
    `

    try {
        bot.ask(prompt).then(response => {
            res.status(200).json(
                {
                    message : response
                }
            );
        })

    } catch (_err) {
        res.status(500).json({
            error : "something went wrong"
        })
    }
};


export {getResponseByOnirix};