(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{329:function(a,t,s){"use strict";s.r(t);var e=s(17),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[a._v("#")]),a._v(" Cache")]),a._v(" "),t("p",[a._v("Namespace "),t("code",[a._v("Chevere\\Cache")])]),a._v(" "),t("p",[a._v("The Cache package provides a filesystem-based cache for PHP. Its purpose is to enable a richer abstraction around file returns which are cached with "),t("a",{attrs:{href:"https://www.php.net/opcache",target:"_blank",rel:"noopener noreferrer"}},[a._v("OPcache"),t("OutboundLink")],1),a._v(". It is intended to be used to cache and accelerate application state.")]),a._v(" "),t("h2",{attrs:{id:"installing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[a._v("#")]),a._v(" Installing")]),a._v(" "),t("p",[a._v("Cache is available through "),t("a",{attrs:{href:"https://packagist.org/packages/chevere/cache",target:"_blank",rel:"noopener noreferrer"}},[a._v("Packagist"),t("OutboundLink")],1),a._v(" and the repository source is at "),t("a",{attrs:{href:"https://github.com/chevere/cache",target:"_blank",rel:"noopener noreferrer"}},[a._v("chevere/cache"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require chevere/cache\n")])])]),t("h2",{attrs:{id:"creating-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-cache"}},[a._v("#")]),a._v(" Creating Cache")]),a._v(" "),t("p",[a._v("Create a Cache repository by passing the cache working directory. The system will read and write cache from files stored in this directory.")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Chevere"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Cache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Chevere"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Filesystem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("directoryForPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$directory")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("directoryForPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("__DIR__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cache")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$directory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"with-put"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-put"}},[a._v("#")]),a._v(" With Put")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("withPut")]),a._v(" method is used to cache PHP "),t("RouterLink",{attrs:{to:"/packages/var-support.html#storablevariable"}},[a._v("storable variable")]),a._v(".")],1),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Chevere"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Cache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Chevere"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("VariableSupport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("StorableVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$storable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StorableVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cache")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cache")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("withPut")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token argument-name"}},[a._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$storable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"puts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#puts"}},[a._v("#")]),a._v(" Puts")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("puts")]),a._v(" method provides access to an "),t("code",[a._v("array")]),a._v(" containing details about "),t("a",{attrs:{href:"#with-put"}},[a._v("With Put")]),a._v(" operations on the Cache repository.")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$array")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cache")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("puts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"exists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exists"}},[a._v("#")]),a._v(" Exists")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("exists")]),a._v(" method is used to determine if cache exists for "),t("code",[a._v("$key")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cache")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("exists")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"get-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-item"}},[a._v("#")]),a._v(" Get Item")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("get")]),a._v(" method is used to retrieve a cached Item at the given "),t("code",[a._v("$key")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$item")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cache")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"get-item-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-item-variable"}},[a._v("#")]),a._v(" Get Item variable")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("get")]),a._v(" method returns the PHP variable for the Cache Item.")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$mixed")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$item")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"get-item-variable-typed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-item-variable-typed"}},[a._v("#")]),a._v(" Get Item variable typed")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("get<Type>")]),a._v(" methods does the same as "),t("a",{attrs:{href:"#get-item-variable"}},[a._v("get")]),a._v(", but it type-hint the return value.")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$array")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$item")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getArray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$item")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBoolean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$float")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$item")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getFloat")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$integer")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$item")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInteger")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$object")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$item")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$string")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$item")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"with-remove"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-remove"}},[a._v("#")]),a._v(" With Remove")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("withRemove")]),a._v(" method is used to remove a Item from the Cache repository at the given "),t("code",[a._v("$key")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cache")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$cache")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("withRemove")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);