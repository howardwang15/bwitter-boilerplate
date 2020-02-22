const { admin } = require('./setup');
const db = admin.firestore();


/**
 * 
 * @param {string} id: bweet id 
 */
const findBweetById = id => {
    return new Promise(async (resolve, reject) => {
        // TODO: add code to query for bweet by bweet id
    })
};


const findAllBweets = () => {
    return new Promise(async (resolve, reject) => {
        const getDataFromDoc = (doc) => {
            // helper function to retrieve data from documents
            return doc.get().then(doc => {
                const data = doc.data();
                data.id = doc.id;
                return data;
            });
        };

        // TODO: add code to fetch all documents from bweets collection
    });
};


/**
 * 
 * @param {string} handle: handle for handle
 * 
 * @returns: promise containing all bweets posted by user handle, or error
 */
const findBweetByHandle = handle => {
    return new Promise(async (resolve, reject) => {
        const getDataFromQueryDocuments = (doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
        };

        // TODO: add code to query for all bweets by user handle
    });
};


/**
 * 
 * @param {Object} bweet: bweet object to add to collection
 */
const addBweet = bweet => {
    return new Promise(async (resolve, reject) => {
        // TODO: add code to add bweet to bweets collection
    });
}

module.exports = {
    findBweetById,
    findAllBweets,
    findBweetByHandle,
    addBweet
};
