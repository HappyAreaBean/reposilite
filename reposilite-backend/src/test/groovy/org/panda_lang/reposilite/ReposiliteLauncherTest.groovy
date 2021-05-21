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

import groovy.transform.CompileStatic
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.io.TempDir

import static org.junit.jupiter.api.Assertions.assertFalse
import static org.junit.jupiter.api.Assertions.assertTrue

@CompileStatic
class ReposiliteLauncherTest {

    @TempDir
    protected File workingDirectory

    @Test
    void 'should print version' () {
        assertFalse ReposiliteLauncher.create("--version").isPresent()
    }

    @Test
    void 'should print help' () {
        assertFalse ReposiliteLauncher.create("--help").isPresent()
    }

    @Test
    void 'should return reposilite' () {
        assertTrue ReposiliteLauncher.create("-wd=" + workingDirectory.getAbsolutePath()).isPresent()
    }

}