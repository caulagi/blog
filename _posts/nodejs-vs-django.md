---
title: 'Nodejs vs Django'
excerpt: 'We have been using both Django and Nodejs at WWStay- We use Django for the customer dashboard and Nodejs for the web application that aggregates different hotel rates from various vendors. Based on my experiences, I have a checklist that I use to determine what framework to use.'
coverImage: 'https://user-images.githubusercontent.com/222507/109427622-7ad93080-79f3-11eb-8411-519e3a696f6f.png'
date: '2013-12-24T05:35:07.322Z'
ogImage:
  url: 'https://user-images.githubusercontent.com/222507/109427622-7ad93080-79f3-11eb-8411-519e3a696f6f.png'
---

<blockquote class="flex flex-wrap flex-col bg-white text-gray-700 border-l-8 italic border-gray-400 px-4 py-3">
The table was a large one, but the three were all crowded together at one corner of it: `No room! No room!’ they cried out when they saw Alice coming. `There’s PLENTY of room!’ said Alice indignantly, and she sat down in a large arm-chair at one end of the table.
<span class="flex justify-end text-sm text-indigo-400 font-semibold pt-2">A mad tea party, Alice in Wonderland</span>
</blockquote>

We have been using both Django and Nodejs at <a href="http://wwstay.com" class="text-purple-600">WWStay</a>. We use Django for the customer dashboard and backoffice applications. We use Nodejs for the web application that aggregates different hotel rates from various vendors and presents it to the frontend. Of course, I have used Django and Nodejs for several hobby projects as well. I have spent quite a bit of time recently in building <strike><a href="http://www.hattira.com" class="text-purple-600">a simple webapp for finding interesting events around you</a></strike> (Update [28 Feb 2021]: I stopped working in this project and the domain belongs to somebody else now).

Based on my experiences, I have a checklist that I use to determine what framework to use.

- **Homogeneous** — The system should be homogeneous, as far as is practically possible. In real life, you will never have a truly homogeneous system. The webserver (like nginx) and persistence is most probably C and the frontend uses a JavaScript MVC framework. At some point, you will most probably have to start digging really deep into some of these layers. So you want to make sure that when adding additional layers like caching or an asynchronous task queue, you try to keep the number of languages to a minimum. Or to put it the other way round, if I am not happy with the asynchronous task queues available in JavaScript, I will just use Python (<a href="http://www.celeryproject.org/" class="text-purple-600">Celery</a>) instead.

- **Community** — It is nice to be able to talk to the really senior developers of a project on that rare occasion when your application mysteriously start misbehaving in production. Like for instance, when <a href="http://eng.yammer.com/scala-at-yammer" class="text-purple-600">Yammer had problems with their Scala use</a>. So if the <a href="http://blog.nodejs.org/2013/12/03/bnoordhuis-departure/" class="text-purple-600">core team itself has issues</a>, I would be very cautious choosing such a project.

- **Fun** — In a simplified sense, this would be something that appeals to my ‘artistic sense’. <a class="text-purple-600" href="http://hammerprinciple.com/therighttool">Hammerprinciple</a> says this as — I enjoy using this language; this language is good for distributed computing; I find code written in this language very elegant. Honestly, neither JavaScript nor Python are as much fun **today **as they were some years back. Just on the fun quotient alone, I would today pick Go or Haskell. But between the frameworks we are talking about, Nodejs is slightly more interesting in this regard because everything can be asynchronous and event driven.

In addition to the above checklist, each framework is a natural solution for certain problems.

**Django** is a great choice when you need to use a relational database. You will need a relational database when you want ACID properties on your transactions, like when processing payments. In addition to a powerful ORM, Django has sessions, security against common exploits like XSS and CSRF, form handling, cache system, templating system, admin interface, etc. In fact, I often think that Django has neatly packaged the best of web development in a very convenient project.

**Nodejs** is similarly a great choice when you can have an asynchronous, evented stack — from the webserver all the way to your persistence and the intermediate libraries along the way. Nodejs is great in this case because the async nature will help us handle more requests with the same hardware. The other situation where I have used Nodejs is when I had to use Mongodb for persistence. Mongodb has excellent <a class="text-purple-600" href="http://docs.mongodb.org/manual/reference/operator/query-geospatial/">geospatial support</a> or doubles as a <a class="text-purple-600" href="http://en.wikipedia.org/wiki/Spatial_database">spatial database</a>. This is useful when you want to run queries like — show me events near a city, like in hattira.

So as with questions of this nature and probably as an anti-climax, my answer to Nodejs vs Django is — it depends. As Fred Brooks has noted years ago, there are no silver bullets. Even today.