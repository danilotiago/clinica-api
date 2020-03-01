"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_repository_1 = require("../users/users.repository");
class EmailsService {
    emailUsed(req, resp, next) {
        return users_repository_1.usersRepository.findByEmail(req.params.email)
            .then(user => {
            let emailUsed = false;
            if (user) {
                emailUsed = true;
            }
            resp.send({ emailUsed: emailUsed });
            return next();
        })
            .catch(err => next(err));
    }
}
exports.emailsService = new EmailsService();
