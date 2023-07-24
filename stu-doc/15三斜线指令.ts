// 三斜线指令是包涵单个xml标签的单行注释。注释的内容会作为编辑器指令使用
// 三斜线指令仅可放在它包含的文件的最顶端，一个三斜线指令的前面只能出现单行或多行注释，这包括其他的三斜线指令
// 如果他们出现在一个语句或声明之后，那么他们会被当作普通的单行注释，并且不具备特殊的含义
// /// <reference path="" /> 指令是三斜线指令最常见的一种，它用于声明文件间的依赖
// 三斜线引用告诉编辑器在编译过程中要进入的额外的文件
// 可以把它理解能import，它可以告诉编译器在编译过程中要引入的额外的文件
///<reference types="node" />
