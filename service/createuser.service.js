import { client } from '../index.js';

export async function hashpass(firstname, lastname, username, hashpassword, phoneNo) {
    return await client
        .db("moblies")
        .collection("signup")
        .insertOne({
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: hashpassword,
            phoneNo: phoneNo
        });
}

export async function getuserbyname(username, hashpassword) {
    return await client
        .db("moblies")
        .collection("signup")
        .findOne({
            username: username
        });
}