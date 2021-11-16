package io.kotest.core.spec.style.scopes

import io.kotest.core.test.TestCase
import io.kotest.core.test.TestScope
import kotlin.coroutines.CoroutineContext

class FreeSpecTerminalScope(val testScope: TestScope) : TestScope {

   override val testCase: TestCase = testScope.testCase
   override val coroutineContext: CoroutineContext = testScope.coroutineContext

   // exists to stop nesting
   @Deprecated("Cannot nest leaf test inside another leaf test", level = DeprecationLevel.ERROR)
   suspend infix operator fun String.invoke(test: suspend TestScope.() -> Unit) {
   }
}
