import * as dao from "./dao.js";
export default function UserRoutes(app) {
    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
        };    
    const signin = async (req, res) => {
        const { username, password } = req.body;
        const currentUser = await dao.findUserByCredentials(username, password);
        if (currentUser) {
        req.session["currentUser"] = currentUser;
        res.json(currentUser);
        } else {
        res.status(401).json({ message: "Unable to login. Try again later." });
        }
    };
    const signup = async (req, res) => {
        const user = await dao.findUserByUsername(req.body.username);
        if (user) {
        res.status(400).json({ message: "Username already taken" });
        return;
        }
        const currentUser = await dao.createUser(req.body);
        req.session["currentUser"] = currentUser;
        res.json(currentUser);
    };
    app.post("/api/users/signin", signin);
    app.post("/api/users/signup", signup);
}
