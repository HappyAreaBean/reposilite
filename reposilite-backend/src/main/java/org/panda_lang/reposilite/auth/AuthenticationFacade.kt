/*
 * Copyright (c) 2021 dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.panda_lang.reposilite.auth

import io.javalin.plugin.openapi.annotations.HttpMethod
import net.dzikoysk.dynamiclogger.Journalist
import net.dzikoysk.dynamiclogger.Logger
import org.apache.http.HttpStatus
import org.panda_lang.reposilite.failure.api.ErrorResponse
import org.panda_lang.reposilite.token.api.AccessToken
import org.panda_lang.utilities.commons.function.Result

class AuthenticationFacade internal constructor(
    private val journalist: Journalist,
    private val authenticator: Authenticator,
    private val sessionService: SessionService
) : Journalist {

    fun authenticateByHeader(headers: Map<String, String>): Result<AccessToken, ErrorResponse> =
        authenticator.authByHeader(headers)
            .mapErr { error -> ErrorResponse(HttpStatus.SC_UNAUTHORIZED, error) }

    fun authenticateByCredentials(credentials: String): Result<AccessToken, ErrorResponse> =
        authenticator.authByCredentials(credentials)
            .mapErr { error -> ErrorResponse(HttpStatus.SC_UNAUTHORIZED, error) }

    fun createSession(accessToken: AccessToken, path: String, method: HttpMethod): Session =
        sessionService.createSession(accessToken, path, method)

    override fun getLogger(): Logger =
        journalist.logger

}