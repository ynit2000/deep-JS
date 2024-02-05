// JavaScript Runtime Environment  

// Browser cotain { js engine (js end) , APi, event loop , MIcrotask Quene, callback Quene,}

// even Node.js have js runtime Environment 

// Going inside JS Engine  ( is not a Machine )

// 3 phase :  1. PARSING 2.COMPILATION 3. EXECTION

// phase 1 : (pAESING ) --> makes Tokens (let a = 1) for each
//                          Syntax Parser --> AST (ABSTRACT SYNTAX Tree)

// that "AST" pass to Phase 2:  // website for AST :(ASTEXPLORER.NET)

// BEFORE that 2 type of language : 
// 1. Interpretter(faster) ---> run line by line  t
// 2. Compiler (effective) ---> whole code is complile menas new optimal (run fast) code is create then 

// for JustInTimeComilation (have both type )

// phase 2 : ( COMPILATION ) --> AST --> Interpretter  as well as get compile at same time --> exected

// phase 3 : ( EXECTION ) -->  Happened in Memory Heap(all variable store) , CallStack 
  // mark& Sweep algo --> The Mark and Sweep algorithm is a garbage collection technique involving a two-phase process: marking reachable objects and subsequently sweeping and deallocating memory for unmarked, unreachable objects.
  //   Inlining        --> Inlining is a compilation-time optimization that involves inserting a small function of code into the calling function
  //   Copy elision    --> Copy elision is an optimization technique used by most C++ compilers to avoid unnecessary copying and moving of objects
  //   Inline Caching  --> Inline caching is a technique used by some language runtimes to speed up runtime method binding