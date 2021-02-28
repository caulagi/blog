---
title: 'First look at golang'
excerpt: 'I spent the weekend playing with Go. Specifically, I built a simple HTTP static file server. I have some first impressions.'
coverImage: 'https://user-images.githubusercontent.com/222507/109426713-51b6a100-79ef-11eb-8a45-a528f9be945b.png'
date: '2014-07-20T15:35:07.322Z'
ogImage:
  url: 'https://user-images.githubusercontent.com/222507/109426713-51b6a100-79ef-11eb-8a45-a528f9be945b.png'
---

I spent the weekend playing with Go. Specifically, I built a simple HTTP static file server. I have some first impressions.

<script src="https://gist.github.com/caulagi/81decc6abc55c48ad1f8cd6c6026d430.js"></script>

### Types

![](https://user-images.githubusercontent.com/222507/109426660-11572300-79ef-11eb-8165-65899ed34d05.png)

I am a recent convert from a dynamic languages advocate to the need for static typing. I have recently spent far too much time than I would have liked fixing problems in production that should have been fixed at compile time. The compile errors and function signatures like this are almost musical —

```
func serveFile(w ResponseWriter,
               r *Request,
               fs FileSystem,
               name string,
               redirect bool)
```

### Stdlib

<blockquote class="flex flex-wrap flex-col bg-white text-gray-700 border-l-8 italic border-gray-400 px-4 py-3">
Talk small and carry a big class library
<span class="flex justify-end text-sm text-indigo-400 font-semibold pt-2">James Robertson, about Smalltalk.</span>
</blockquote>

Go is frequently said to be a modern language. This is evident in the standard libraries that come with the language. compress, crypt, html, etc are all libraries any program today would invariably use. In fact, you will notice that the static file server earlier is really tiny. It is due to the fact that stdlib has a complete implementation of a HTTP server with parts that can be easily customized.

### Concurrency

This was probably the single biggest reason to try Go. To write a concurrent program. And while there are a few awesome videos describing the constructs, there are not sufficient real-time examples on the web to make this easy. Furthermore, it is not easy breaking a mostly sequential program into concurrent pieces in Go. Consider the problem of getting some data from a database in a request-response cyle in a web application. This would be some example Nodejs (find a user asynchronously from the database. If that succeeds, return the user. Else return the error) -

<script src="https://gist.github.com/caulagi/1f6357bc52e2dee684e60465b23160e6.js"></script>

It is not clear how to break this into idiomatic Go code. Perhaps I need to spend more time with Go.

### REPL

As far as I can tell, there is no REPL for GO. This is something I missed terribly. Especially when you are learning a new language and want to try little snippets. No, I don’t want to use [play](http://play.golang.org/). I am far too used to the terminal.

There are a couple of other minor points. Having programmed in an interpreted language mostly, it was hard to switch over to the compiled mindset. In particular, the compile and restart server was pretty annoying. The other point is that it is not possible to change/add code to stdlib. I tend to add log lines quite a lot initially to understand an idea/concept. But this was ruled out for Go.

All in all, it was an interesting weekend. But it wasn’t love at first sight. :|

Don’t forget that these are my impressions after using Go for only 2 days. Also, these are my personal opinions. Feel free to disagree/discuss on [twitter](https://twitter.com/caulagi).
