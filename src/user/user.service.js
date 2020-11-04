import { client } from '../util/client.util';
import { USER_API } from '../config/constants';
import winston from '../config/winston';
import { User } from '../models';
import { secret } from '../config/auth.config';

export const login = async ({ email, password }, context) => {
    try {
        const user = User.findOne({ email: req.body.email })
                        .populate("role", "-__v")
                        .populate("addresses")

        if(!user) return { message: "Invalid Credentials" }

        const existingRole = await Role.find({ name: role })

        if (!existingRole) return { message: "Invalid Credentials" }

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
          );
    
        if (!passwordIsValid) return { message: "Invalid Credentials" }
    
          const token = jwt.sign({
            id: user.id, 
            role: user.role
          }, 
          Buffer.from(secret, 'base64'), 
          { expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) }
          );

        const user = new User({
            username,
            email,
            phoneNumber,
            password: bcrypt.hashSync(password, 8),
            role: existingRole._id
        });

        return {
            id: user._id,
            firstName: user.firstName || null,
            lastName: user.lastName || null,
            username: user.username || null,
            email: user.email,
            phoneNumber: user.phoneNumber || null,
            addresses: user.addresses,
            bio: user.bio || null,
            avatar: user.avatar || null,
            role: user.role,
            accessToken: token
        }

    } catch (error) {
        winston.error(error);
        return error;
    }
}   

export const signUp = async ({ role, username, email, phoneNumber, password }, context) => {
    try {
        const existingRole = await Role.find({name: role})

        if(!role) return "Invalid data provided"

        const user = new User({
            username,
            email,
            phoneNumber,
            password: bcrypt.hashSync(password, 8),
            role: existingRole._id
        });

        const saved = await user.save();

        return { message: "User was registered successfully!" }

    } catch (error) {
        winston.error(error);
        return error;
    }
}

export const getCurrentUser = async (args, context) => {
    const res = await client(context.token)
        .get(`${USER_API}/user/getCurrentUser`);
    return res.data;
}

export const getAllUsers = async (args,context) => {
    const res = await client(context.token)
        .get(`${USER_API}/user/getAllUsers`);
    return res.data;
}

export const editUserProfile = async (args, context) => {
    const res = await client(context.token)
        .post(`${USER_API}/user/edit`, args);
    return res.data;
}

export const editUserAddress = async (args, context) => {
    const res = await client(context.token)
        .post(`${USER_API}/user/address/edit`, args);
    return res.data;
}

export const getUserDetails = async ({ id }, context) => {
    const res = await client(context.token)
        .get(`${USER_API}/user/getUserDetails/${id}`);
    return res.data;
}
