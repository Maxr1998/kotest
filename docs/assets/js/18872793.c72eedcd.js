"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3733],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2934:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"multiplatform",title:"Multiplatform Testing",slug:"multiplatform.html"},s=void 0,p={unversionedId:"framework/multiplatform",id:"framework/multiplatform",isDocsHomePage:!1,title:"Multiplatform Testing",description:"Experimental Feature",source:"@site/docs/framework/mpp.md",sourceDirName:"framework",slug:"/framework/multiplatform.html",permalink:"/docs/framework/multiplatform.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/mpp.md",tags:[],version:"current",frontMatter:{id:"multiplatform",title:"Multiplatform Testing",slug:"multiplatform.html"}},u=[{value:"Gradle Plugin",id:"gradle-plugin",children:[],level:3},{value:"Engine Dependency",id:"engine-dependency",children:[],level:3},{value:"Executing tests",id:"executing-tests",children:[],level:3},{value:"Caveats",id:"caveats",children:[],level:3}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Experimental Feature")),(0,o.kt)("p",null,"Kotest 5.0 supports full multiplatform testing - JVM, JS and native.\nThis page describes how to use Kotest with Kotlin multiplatform."),(0,o.kt)("p",null,"This is a beta feature first released in 5.0.0.M1"),(0,o.kt)("p",null,"Note: Only IR mode is supported for Javascript - Legacy is discontinued."),(0,o.kt)("h3",{id:"gradle-plugin"},"Gradle Plugin"),(0,o.kt)("p",null,"Add the ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/io.kotest.multiplatform"},"Kotest multiplatform gradle plugin")," to your build."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n   id("io.kotest.multiplatform") version "5.0.0"\n}\n')),(0,o.kt)("h3",{id:"engine-dependency"},"Engine Dependency"),(0,o.kt)("p",null,"Add the Kotest engine module to your build - either as a common dependency or as a platform specific dependency."),(0,o.kt)("p",null,"For example, either:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val commonTest by getting {\n   dependencies {\n      implementation("io.kotest:kotest-framework-engine:5.0.0.RC")\n   }\n}\n')),(0,o.kt)("p",null,"Or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val jsTest by getting {\n   dependencies {\n      implementation("io.kotest:kotest-framework-engine-js:5.0.0.RC")\n   }\n}\n')),(0,o.kt)("p",null,"Or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val linuxX64Test by getting {\n   dependencies {\n      implementation("io.kotest:kotest-framework-engine-linuxx64:5.0.0.RC")\n   }\n}\n')),(0,o.kt)("p",null,"Note: The JUnit runner dependency (",(0,o.kt)("inlineCode",{parentName:"p"},"io.kotest:kotest-runner-junit5-jvm"),") is still required for JVM tests as on the JVM\nthe tests run via JUnit platform."),(0,o.kt)("h3",{id:"executing-tests"},"Executing tests"),(0,o.kt)("p",null,"When using multiplatform you must use the ",(0,o.kt)("inlineCode",{parentName:"p"},"check")," task and not the ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," task."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./gradlew check")),(0,o.kt)("h3",{id:"caveats"},"Caveats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Javascript and Native test engines are more feature limited than the JVM test engine. For example, concurrent tests and annotation based configuration. Kotlin doesn't expose annotations to non-reflection targets.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Legacy support for JS (present in 4.x) has been dropped and only IR is supported moving forward. This is because in\n5.0 the MPP support works via compiler plugins, which are different between IR and legacy, and we will not support a\ndeprecated backend (legacy) in new code.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tests for Javascript can only use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FunSpec"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ShouldSpec")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"StringSpec")," spec styles. This is\nsomewhat ironic since ",(0,o.kt)("inlineCode",{parentName:"p"},"DescribeSpec")," is in fact inspired by Javascript testing frameworks."),(0,o.kt)("p",{parentName:"li"},'The reason is that JS testing libraries (which are used by Kotlin/JS under the hood) do not support promises in "parent" tests, but Kotest does (suspend). So\neither the DSL would need to have a breaking change so that parent tests are not suspendable (a breaking change and\nundesirable for writing JVM tests) or we just disallow those spec styles in JS. You will see a warning in output if\nyou use them for JS tests.'))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The IntelliJ plugin will not allow you to run common, native or JS tests from the IDE. You will need to use\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"gradle check")," task.")))}m.isMDXComponent=!0}}]);