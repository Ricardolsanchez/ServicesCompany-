import axios from "axios";


export const SendEmail = async ({
    currentDate,
    fullName,
    email,
    message,
    address,
    issue,
    setSend,
}) => {
    try {
        const datas = { currentDate, fullName, email, message, address, issue };
        let res = await axios.post(
            `https://agile-brushlands-62499.herokuapp.com/send`, datas
        );
        if (res) {
            setSend(res.data);
        }
    } catch (error) {
        alert(error.response.data.message);
    }
};

 