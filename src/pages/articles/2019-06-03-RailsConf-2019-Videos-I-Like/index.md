---
title: Rails Conf 2019 Videos & Takeaways
date: "2019-06-08T16:51:00.000Z"
layout: post
draft: false
path: "/posts/rails-conf-2019-talk-highlights/"
category: "Talks"
tags:
  - "ruby"
  - "rails"
  - "railsconf"
  - "talks"
description: "Rails Conf 2019 Videos I enjoyed with takeaways"
---

In 2016 I went to Rails Conf and really had my mind opened. So many good and interesting talks. Every year I have a tradition where I watch every video I'm even remotely interested at for 2 minutes at 2x and then if it passes that test, just regular. Every year there are 5-10 that really expand my mind. I haven't been able to get all of them this year, but here are the highlights

* [Refactoring Live: Primitive Obsession by James Dabbs](https://www.youtube.com/watch?v=LhX5COR8WXc&list=PLE7tQUdRKcyaOq3HlRm9h_Q_WhWKqm5xc&index=7&t=0s)
		`youtube:https://www.youtube.com/embed/LhX5COR8WXc`
    * Nice techniques that simplified everything, really cool to see by-the-book refactoring in practice. It's a technique that is really magical when done well
    * Really loved the touch of seeing the changes with Guard to run the tests
    * I did a version of this talk for my team, how to use the Primitive Obsession smell to improve your code, but this talk is just so much better than mine. He goes deeper and has a more interesting class extracted and explains how and why better than I did. Very impressive

* [The Selfish Programmer by Justin Searls](https://www.youtube.com/watch?v=k5thkp4ZXSI&list=PLE7tQUdRKcyaOq3HlRm9h_Q_WhWKqm5xc&index=6&t=0s)
		`youtube:https://www.youtube.com/embed/k5thkp4ZXSI`
    * breaking things down. totally relate to the concept of getting overwhelmed by the ambition of a personal project
    * love the design of Justin Searls talks
    * I think of Searls as one of Ruby’s Very Opinionated People. What’s interesting is that other other language community I am a part of is Javascript or React doesn’t have figures like this. There are disagreements and orthodoxies, but Ruby seems to have certain characters around it that really get you to think holistically about software. I find myself alternately going ‘bleh’ and :praise_hands: when I hear his talks or others in this group (dhh, no one in particular but thoughtbot as an org, et al)

* [Cache is King by Molly Struve](https://www.youtube.com/watch?v=yN1rGZbwn9k&list=PLE7tQUdRKcyaOq3HlRm9h_Q_WhWKqm5xc&index=15&t=0s)
		`youtube:https://www.youtube.com/embed/yN1rGZbwn9k`
    * Simple strategies for performance and caching in Rails, some I knew and some I didn’t, but very clearly put and articulated in an entertaining manner

* [RailsConf 2019 - The Elusive Attribute by Chris Salzberg - YouTube](https://www.youtube.com/watch?v=PNNrmNTQx2s&list=PLE7tQUdRKcyaOq3HlRm9h_Q_WhWKqm5xc&index=26&t=0s)
		`youtube:https://www.youtube.com/embed/PNNrmNTQx2s`
  * In this, Salzberg digs deep into how attributes work. He uses a bike metaphor to describe how we should try to understand and poke and prod at libraries and codebases to find the logical flaws and also understand why they were designed the way they were. This makes sense but I’m not sure I completely agree with all his critiques, since a feature like attributes doesn't get built in a vacuum, it develops over time and we want it to work in a consistent manner that only changes if it absolutely needs to. In 99.99% of the contexts what is important to know about attributes is that they work and are performant enough.
  * Objects, systems, etc tend to get the level of optimization that they warrant and ask for. Bicycles are optimized because they have to be. For software, things are more complicated, it would be wonderful if it was optimized for clarity, but if it works, is performant and a large change would be a lot of work done for free, does it *need* to be done?
	* However despite not buying his thesis (or perhaps my thoughts about what his thesis might mean), the digging deep into how attributes worked in Rails was pretty fascinating.  He explained complicated code well and explained the reasoning behind the complications clearly, which is very valuable and an impressive thing to do.
* [RailsConf 2019 - The 30-Month Migration by Glenn Vanderburg - YouTube](https://www.youtube.com/watch?v=Nz-aU3vOFbw)
		`youtube:https://www.youtube.com/embed/Nz-aU3vOFbw`
	* I like this because these kind of changes can feel impossible, I like how he methodically goes through how to do them
	* the insight about having a metric that holds you accountable and the whole company can see is really good

