import encrypt from "encryptjs";
import Mains from "../Modals/user.js"; 

export const register = async (req,res) =>
{
    try{

        const {name,email,password,pin,role} = req.body

        var secretkey ='kunal'; 
        var plaintext = password;
        var plaintextforpin = pin;
        var ciphertext = encrypt.encrypt(plaintext,secretkey,256);
        var ciphertextforpin = encrypt.encrypt(plaintextforpin,secretkey,256);
        const main = new Mains
        ({
            name,
            email,
            password:ciphertext,
            pin:ciphertextforpin,
            role
        })
        await main.save();
        return res.send("Registration succesfull");
    }
    catch(err)
    {
        return res.send(err);
    }
}