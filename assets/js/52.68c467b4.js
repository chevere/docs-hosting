(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{366:function(a,t,s){"use strict";s.r(t);var e=s(25),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"varsupport"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#varsupport"}},[a._v("#")]),a._v(" VarSupport")]),a._v(" "),t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[a._v("#")]),a._v(" Summary")]),a._v(" "),t("p",[a._v("Extra tools for handling variables.")]),a._v(" "),t("h2",{attrs:{id:"installing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[a._v("#")]),a._v(" Installing")]),a._v(" "),t("p",[a._v("VarSupport is available through "),t("a",{attrs:{href:"https://packagist.org/packages/chevere/var-support",target:"_blank",rel:"noopener noreferrer"}},[a._v("Packagist"),t("OutboundLink")],1),a._v(" and the repository source is at "),t("a",{attrs:{href:"https://github.com/chevere/var-support",target:"_blank",rel:"noopener noreferrer"}},[a._v("chevere/var-support"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"objectvariable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objectvariable"}},[a._v("#")]),a._v(" ObjectVariable")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("ObjectVariable")]),a._v(" component is in charge of handling an object variable.")]),a._v(" "),t("h3",{attrs:{id:"creating-objectvariable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-objectvariable"}},[a._v("#")]),a._v(" Creating ObjectVariable")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Chevere"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("VarSupport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("ObjectVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$object")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$object")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("variable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"assert-clonable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assert-clonable"}},[a._v("#")]),a._v(" Assert clonable")]),a._v(" "),t("p",[a._v("Use "),t("code",[a._v("assertClonable")]),a._v(" to assert if the object variable can be cloned.")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$object")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("assertClonable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"storablevariable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storablevariable"}},[a._v("#")]),a._v(" StorableVariable")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("StorableVariable")]),a._v(" component is in charge of handling a variable that can be stored (state).")]),a._v(" "),t("p",[a._v("A storable variable for Chevere is any PHP variable that can be stored as a string representation. All variable types can be stored with the exception of type "),t("code",[a._v("resource")]),a._v(".")]),a._v(" "),t("h3",{attrs:{id:"creating-storablevariable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-storablevariable"}},[a._v("#")]),a._v(" Creating StorableVariable")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Chevere"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("VarSupport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("StorableVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$storable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StorableVariable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$storable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("variable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"export"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[a._v("#")]),a._v(" Export")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("toExport")]),a._v(" method exports the variable, this return value should be used when creating a file return.")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("$export = $storable->toExport();\nfile_put_contents(\n    'file-return.php',\n    '<?php return '.$export.';'\n);\n")])])]),t("h3",{attrs:{id:"serialize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serialize"}},[a._v("#")]),a._v(" Serialize")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("toSerialize")]),a._v(" method provides a shortcut for "),t("code",[a._v("serialize($var)")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$string")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$storable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toSerialize")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);