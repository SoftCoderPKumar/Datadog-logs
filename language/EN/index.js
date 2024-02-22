'use strict'
/**
 * English language file
 * Author: - pkumar Soni
 */

//example key and value
//$displayMessage('get_xyz_template_msg', {'name':'rahul','email':'rahul@gamil.com'});
//get_xyz_template_msg: `name {{name}} email {{email}} not found.`,

const exportData = {};

const messages = {
    lang: 'English',
    app_listening: ` App listening at http://{{host}}:{{port}}`,
    db_close: "Database connection was closed.",
    db_many_connections: "Database has too many connections.",
    db_connections_refused: "Database connection was refused.",
    db_connected: "Database connected!",
    page_not_found: `Page {{url}} not found.`,
    wrong: "Something went wrong.",
    api_token: "Get api token.",
    unauthorized: "Unauthorized access.",
    enter_api_token: "Please insert api token.",
    valid_api_token: "Please insert valid api token.",
    enter_api_platform: "Please insert source request platform.",
    valid_api_platform: "Please enter valid source request platform.",
    enter_app_version: "Please insert mobile app version.",
    in_route_msg: "in side {{route}} get route"
};

exportData.getMessage = (key) => {
    return messages[key] || "undefined message.";
}

module.exports = exportData;