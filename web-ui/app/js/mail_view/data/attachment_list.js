/*
 * Copyright (c) 2015 ThoughtWorks, Inc.
 *
 * Pixelated is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Pixelated is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Pixelated. If not, see <http://www.gnu.org/licenses/>.
 */

define(
    [
        'page/events'
    ],

    function (events) {
        'use strict';

        function attachmentList() {
            this.defaultAttrs({
                attachments: []
            });

            this.addAttachment = function (event, data) {
                this.attr.attachments.push(data);
            };

            this.after('initialize', function () {
                this.on(document, events.mail.appendAttachment, this.addAttachment);
            });
        }

        return attachmentList;
    });