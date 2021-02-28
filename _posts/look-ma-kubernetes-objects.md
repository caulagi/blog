---
title: 'Look ma, kubernetes objects'
excerpt: 'I suggest that we should use kubernetes to provision infrastructure so that we can build a platform that fixes itself when there are problems and we can spend the idle time on an island.'
coverImage: 'https://user-images.githubusercontent.com/222507/109411007-21dfad00-799f-11eb-8ac8-b89cd3f8c2c0.jpg'
date: '2021-02-17T05:35:07.322Z'
ogImage:
  url: 'https://user-images.githubusercontent.com/222507/109411007-21dfad00-799f-11eb-8ac8-b89cd3f8c2c0.jpg'
---

In Structure and Interpretation of Computer Program, Abelson, Sussman, and Sussman suggest asking three questions when trying to understand a programming language —

- What are the primitive elements?
- What are the means of abstraction?
- What are the means of combination?

These are my favorite questions to ask when looking at and trying to understand systems as well.

In my previous role, I was working as a backend engineer and spent a few months making sure our rest-based microservices worked in Kubernetes. I made sure the applications worked well in containers, fixed logging and error reporting and health endpoints. My only motivation for all these changes was to be able to run these applications on Kubernetes. In hind sight, I had the correct goal but the wrong motivation. What I wanted to **achieve** was **operational simplicity**. I wanted to achieve a state where the applications will use resources optimally (small containers tightly packed together on nodes), scale up if traffic grows, heal automatically on errors, etc. I wanted to achieve this declaratively, so I can focus on the what (scale up if response times is more than 500ms) and not worry about the how. I wanted these guarantees constantly applied and the differences fixed.

Today I work as a Site Reliability Engineer. The goal of our team is to provide a stable platform for the development teams. I work with a mix of infrastructure — some in Google cloud and some in our datacenters. So on a typical day, our team might be defining how the network should look, change firewall rules, add/modify DNS entries, create rules in loadbalancers, provision VMs/Kubernetes clusters/managed-services, etc. Of course, we can argue that infrastructure is special and we need tools like Terraform to solve the above problems. But if we go back to Kubernetes…

There is one fundamental abstraction in Kubernetes applied uniformly from how I think about it. That of a [Kubernetes Resource Model (KRM)](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/architecture/resource-management.md). When you represent something as a KRM, it means two things —

**Declarative**: We focus on specifying the intent/what.

**Reconciliation loop**: There is a controller that will reconcile the intent with the observed state constantly.

There are already projects like [`config-connector`](https://cloud.google.com/config-connector/docs/overview) and [`crossplane`](https://github.com/crossplane/crossplane) that allow us to manage infrastructure with this approach to varying degrees. In this design, there is no distinction between an infrastructure component and an application component. Everything is represented uniformly as a KRM (which means declarative and reconciliation) and the same tools are applied to manage infrastructure and applications. So perhaps a modern way to provision infrastructure is to provision a Kubernetes cluster which will provision your infrastructure and your Kubernetes clusters which will run applications.

What I want to achieve is a platform that will fix itself when there are problems so I can have beers on an island. Occasionally the system can’t fix itself and I will write some more yaml’s.

What do you think? Happy to hear thoughts/comments/critique [`on twitter`](https://twitter.com/caulagi)
