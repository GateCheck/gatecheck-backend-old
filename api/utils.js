/**
 * Removes confidential information from documents passed down to the API and served to the user.
 * ensures sensitive data won't be shown when serving the data to the end user.
 * @param {Document} doc mongoose document
 * @param {Boolean} onlyPassword if true will only remove password from document json otherwise will remove ID and administrative level
 */
const removeConfidentialData = (doc, onlyPassword) => {
    const json = doc.toJSON();
    delete json.password;
    if (!onlyPassword) {
        delete json.id_number;
        delete json.administrative_level;
    }
    return json;
}

module.exports = {
    removeConfidentialData
}
