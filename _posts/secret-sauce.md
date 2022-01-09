---
title: 'The secret sauce'
excerpt: 'I argue that the most important component in a microservices architecture is error-reporting.'
coverImage:
  src: 'https://user-images.githubusercontent.com/222507/148699983-b2feab34-67f9-48ca-bbe2-efc6269db789.png'
  authorName: Mike Mozart
  authorUrl: https://www.flickr.com/photos/39160147@N03/17169513396
date: '2022-01-08T20:35:07.322Z'
ogImage:
  url: 'https://user-images.githubusercontent.com/222507/109426713-51b6a100-79ef-11eb-8a45-a528f9be945b.png'
---

In one of my previous roles, I was working as a backend engineer for a microservices based system.
We used some/all of these technologies for a given HTTP request -

- Route53 for DNS
- Highly available HAProxy
- A customized Python based web framework
- [RDS](https://aws.amazon.com/rds/) instances
- [ElastiCache](https://aws.amazon.com/elasticache/)
- Highly available Rabbitmq

Can you guess which of the above technologies didn't have **any errors**?

No. Try again. Take a momemt to think.

None of them. In other words, all of the above services had occasional errors.
Yes, even the managed services that were thousands of US dollars every month.
DNS lookup failed, we were unable to connect to database, keylookup failed,
publishing to Rabbitmq failed, rendering templates from local disk failed, etc.
In fact, we will **always** have some service failing occasionally in a
distributed system. Which is why we need **error-reporting** to be front and center.

I want to clarify what I mean by `error-reporting`. To me, it means -

- All stakeholders get **real-time/instant** notifications of errors in the system.
- The errors are actionable. I.e. there is enough information in error reports to
  - Identify the severity (how many users, how often in the last 5 minutes, etc)
  - Identify potential solution - not just the exception/stacktrace but
    also capture the context (variables, etc) when the error happens

In simple terms, the error-reporting system should give me the debugging experience
of an IDE but built for scale of a distributed system.

Typically, I have seen cloud-providers and several others build error-reporting on top
of a logging system. There are several problems, with this approach, IMO
(I would even go all the way and say these solutions are wrong).

- When an error/exception happens in an application, the application has all the context.
  It is important for this entire context to be captured for it to be actionable. But logging
  solutions typically don't capture this context.
- The other problem with this approach is where we are solving the problem. A logging based
  approach is typically trying to identify the problem at the infrastructure level (which is
  why we loose context also) - one level higher than where the error happened. So we are not
  shipping logs for sometime (errors **will** happen), we will not receive error reports also!

Some of the current solutions that fit my description of error-reporting are:
[sentry](https://sentry.io/), [rollbar](https://rollbar.com/), [airbrake](https://airbrake.io/).

With that, my preferred observability story would look something like this -

- A monitoring system like prometheus based on key metrics - number of logins,
  number of database connections, 50x errors, response times etc. All alerting would happen from this level.

- One of the error-reporting system above. When there is an alert, I login here
  to identify and work with the problem.

- A logging solution only for debugging - if a user got banned or there is a payment question
  from support or a card got declined, etc.

In other words, for a 'primitive' observability story, I only need error-reporting to support a distributed sytem!
