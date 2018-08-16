// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: strong-error-handler
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

module.exports = function sendJson(res, data) {
    var content = (data.useEnvelop) ? JSON.stringify({error: data}) : JSON.stringify(data);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(content, 'utf-8');
};
