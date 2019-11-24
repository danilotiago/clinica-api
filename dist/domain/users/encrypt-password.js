"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = function (user, next) {
    if (!user.isModified('password')) {
        return next();
    }
    user.password = generateHashByPassword(user);
    return next();
};
const generateHashByPassword = (user) => {
    // chamar as funcoes do bcrypt
    return user.password + '_SENHA-ENCRIPTOGRAFADA';
};
