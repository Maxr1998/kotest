"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[148],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return n?s.createElement(d,a(a({ref:t},u),{},{components:n})):s.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3434:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var s=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],i={id:"index",title:"Assertions",slug:"assertions.html"},l=void 0,c={unversionedId:"assertions/index",id:"assertions/index",isDocsHomePage:!1,title:"Assertions",description:"Kotest is split into several subprojects which can be used independently. One of these subprojects is",source:"@site/docs/assertions/index.md",sourceDirName:"assertions",slug:"/assertions/assertions.html",permalink:"/docs/assertions/assertions.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Assertions",slug:"assertions.html"},sidebar:"assertions",next:{title:"Matchers",permalink:"/docs/assertions/matchers.html"}},u=[{value:"Multitude of Matchers",id:"multitude-of-matchers",children:[],level:2},{value:"Clues",id:"clues",children:[],level:2},{value:"Inspectors",id:"inspectors",children:[{value:"Custom Matchers",id:"custom-matchers",children:[],level:3}],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kotest is split into several subprojects which can be used independently. One of these subprojects is\nthe comprehensive assertion / matchers support. These can be used with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/framework/framework.html"},"Kotest test framework"),",\nor with another test framework like JUnit or Spock."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:io.kotest"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest/kotest-assertions-core-jvm.svg?label=release",alt:"version badge"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest/kotest-assertions-core-jvm.svg?label=snapshot",alt:"version badge"}))),(0,o.kt)("p",null,"The core functionality of the assertion modules are functions that test state. Kotest calls these types of state\nassertion functions ",(0,o.kt)("em",{parentName:"p"},"matchers"),". There are ",(0,o.kt)("a",{parentName:"p",href:"/docs/assertions/matchers.html"},"core")," matchers and matchers for third party libraries."),(0,o.kt)("p",null,"There are also many other utilities for writing tests, such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/assertions/exceptions.html"},"testing for exceptions"),", functions to\nhelp test ",(0,o.kt)("a",{parentName:"p",href:"/docs/assertions/non-deterministic-testing.html"},"non-determistic code"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/assertions/inspectors.html"},"inspectors")," for collections, and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/assertions/soft-assertions.html"},"soft assertions")," to group assertions."),(0,o.kt)("h2",{id:"multitude-of-matchers"},"Multitude of Matchers"),(0,o.kt)("p",null,"For example, to assert that a variable has an expected value, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldBe")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'name shouldBe "sam"\n')),(0,o.kt)("p",null,"There are general purpose matchers, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldBe")," as well as matchers for many other specific scenarios,\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"str.shouldHaveLength(10)")," for testing the length of a string, and ",(0,o.kt)("inlineCode",{parentName:"p"},"file.shouldBeDirectory()")," which test\nthat a particular file points to a directory. They come in both infix and regular variants."),(0,o.kt)("p",null,"Assertions can generally be chained, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'"substring".shouldContain("str")\n           .shouldBeLowerCase()\n\nmyImageFile.shouldHaveExtension(".jpg")\n           .shouldStartWith("https")\n')),(0,o.kt)("p",null,"There are over 350 matchers spread across multiple modules. Read about all the ",(0,o.kt)("a",{parentName:"p",href:"/docs/assertions/matchers.html"},"matchers here"),"."),(0,o.kt)("h2",{id:"clues"},"Clues"),(0,o.kt)("p",null,"Sometimes a failed assertion does not contain enough information to know exactly what went wrong."),(0,o.kt)("p",null,"For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"user.name shouldNotBe null\n")),(0,o.kt)("p",null,"If this failed, you would simply get:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<null> should not equal <null>\n")),(0,o.kt)("p",null,"Which isn't particularly helpful. We can add extra context to failure messages through the use of ",(0,o.kt)("a",{parentName:"p",href:"/docs/assertions/clues.html"},"clues"),"."),(0,o.kt)("h2",{id:"inspectors"},"Inspectors"),(0,o.kt)("p",null,"Inspectors allow us to test elements in a collection, and assert the quantity of elements that should be\nexpected to pass (all, none, exactly k and so on). For example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'mylist.forExactly(3) {\n    it.city shouldBe "Chicago"\n}\n')),(0,o.kt)("p",null,"Read about ",(0,o.kt)("a",{parentName:"p",href:"/docs/assertions/inspectors.html"},"inspectors here")),(0,o.kt)("h3",{id:"custom-matchers"},"Custom Matchers"),(0,o.kt)("p",null,"It is easy to add your own matchers. Simply extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"Matcher<T>")," interface, where T is the type you wish to match against.\nThe Matcher interface specifies one method, ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),", which you must implement returning an instance of Result.\nThe Result contains a boolean to indicate if the test passed or failed, and two messages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface Matcher<in T> {\n   fun test(value: T): MatcherResult\n}\n")),(0,o.kt)("p",null,"Matcher is ",(0,o.kt)("em",{parentName:"p"},"contravariant")," so a matcher for Number can be used to test an Int, for example."),(0,o.kt)("p",null,'The first message should always be in the positive, ie, indicate what "should" happen, and the second message\nis used when the matcher is used with ',(0,o.kt)("em",{parentName:"p"},"not"),"."),(0,o.kt)("p",null,'For example to create a matcher that checks that a string contains the substring "foo", we can do the following:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun containFoo() = object : Matcher<String> {\n  override fun test(value: String) = MatcherResult(value.contains("foo"), "String $value should include foo", "String $value should not include foo")\n}\n')),(0,o.kt)("p",null,"This matcher could then be used as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'"hello foo" should containFoo()\n"hello bar" shouldNot containFoo()\n')),(0,o.kt)("p",null,"And we should then create an extension function version, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun String.shouldContainFoo() = this should containFoo()\nfun String.shouldNotContainFoo() = this shouldNot containFoo()\n")))}h.isMDXComponent=!0}}]);