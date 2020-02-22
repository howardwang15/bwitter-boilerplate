const { admin, firebase } = require('./setup');

const db = admin.firestore();
const auth = admin.auth();


/**
 * 
 * @param {string} id: ID of user 
 */
const findUserById = id => {
    return new Promise(async (resolve, reject) => {
        // TODO: add code to query for user by ID
    });
};


const findAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        const getDataFromDoc = (doc) => {
            return doc.get().then(doc => {
                const data = doc.data();
                data.id = doc.id;
                return data;
            });
        };

        // TODO: add code to fetch all users from user collection
    });
};


/**
 * 
 * @param {string} handle: user handle  
 */
const findUserByHandle = handle => {
    return new Promise(async (resolve, reject) => {
        const getDataFromQueryDocuments = (doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
        };

        // TODO: add code to query for user by user handle
    });
};


const login = user => {
    return new Promise(async (resolve, reject) => {
        // TODO: add code to verify user using bcrypt
    })
};


const create = user => {
    return new Promise(async (resolve, reject) => {
        // TODO: add code to check for duplicate users, use bcrypt to hash passwords and add to user collection
    });
};


const logout = user => {
    return new Promise(async (resolve, reject) => {
        try {
            firebase.auth().signOut().then(() => console.log('signed out'));
        } catch(e) {
            reject(e);
        }
    });
};


// TODO: add JWT code to sign user data
const createToken = hashedUser => {

}


module.exports = {
    findUserById,
    findUserByHandle,
    findAllUsers,
    login,
    create,
    logout
};
