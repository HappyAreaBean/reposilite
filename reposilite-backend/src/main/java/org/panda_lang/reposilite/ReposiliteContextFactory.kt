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
package org.panda_lang.reposilite

import io.javalin.http.Context
import io.javalin.plugin.openapi.annotations.HttpMethod
import io.javalin.websocket.WsContext
import net.dzikoysk.dynamiclogger.Journalist
import org.apache.http.HttpStatus
import org.panda_lang.reposilite.auth.AuthenticationFacade
import org.panda_lang.reposilite.failure.api.ErrorResponse
import org.panda_lang.reposilite.shared.errorResponse
import org.panda_lang.utilities.commons.function.Result
import org.panda_lang.utilities.commons.function.Result.ok

@Suppress("MoveLambdaOutsideParentheses")
class ReposiliteContextFactory internal constructor(
    private val journalist: Journalist,
    private val forwardedIpHeader: String,
    private val authenticationFacade: AuthenticationFacade
) {

    fun create(context: Context): Result<ReposiliteContext, ErrorResponse> {
        val normalizedUri = ReposiliteUtils.normalizeUri(context.req.requestURI)

        if (normalizedUri.isEmpty) {
            return errorResponse(HttpStatus.SC_BAD_REQUEST, "Invalid url");
        }

        val session = authenticationFacade.authenticateByHeader(context.headerMap())
            .map {
                authenticationFacade.createSession(it, normalizedUri.get(), HttpMethod.valueOf(context.method().uppercase()))
            }

        return ok(ReposiliteContext(
            journalist,
            normalizedUri.get(),
            context.method(),
            context.header(forwardedIpHeader) ?: context.req.remoteAddr,
            context.headerMap(),
            session,
            { context.req.inputStream }
        ))
    }

    fun create(context: WsContext): ReposiliteContext {
        return ReposiliteContext(
            journalist,
            context.host(),
            "SOCKET",
            context.header(forwardedIpHeader) ?: context.session.remoteAddress.toString(),
            context.headerMap(),
            errorResponse(HttpStatus.SC_UNAUTHORIZED, "WebSocket based context does not support sessions"),
            { throw UnsupportedOperationException("WebSocket based context does not support input stream") }
        )
    }

}