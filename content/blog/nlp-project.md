---
title: "NLP Project - Article Source Classification"
description: "Why is Reuters so dang easy to classify?"
date: "2018-12-17T22:22:50+01:00"
weight: 20
draft: false
fa: "fas fa-robot"
---

This is a draft, and will be updated over the next several days!

## The Class

This semester I had the privilege to take Professor David Chiang's "Natural
Language Processing" course, a class with very few spots that he only teaches
once every two years. I knew getting in would be near impossible for a Junior
like me, but thankfully he saved me a spot as I had done some undergraduate
research with him last Spring (something for another post), and he knew I 
really wanted to take this class (and that I had a great deal of interest in 
this field). I am super grateful that he did this for me - as this class easily
sits in the top 3 classes I have taken at Notre Dame. 

This class had a series of really cool homework projects that took the theory we
were learning in lectures, and made us apply them to solve common problems in
the field of NLP. The best part of this class (and the part that made it the
most challenging) was that we had to create these solutions from scratch. No
using NLTk or any existing libraries - we had to learn how to create our own
HMMs, apply different methods of smoothing to them, had to learn how to
construct different types of Grammars, etc all by hand. This forced me to really
learn what was going on underneath the abstraction that some libraries provide,
and was empowering when I realized I too could create these useful tools by
hand. It really pulled back the curtain on what the Part of Speech (POS) taggers
were *actually* doing and I enjoyed learning the different tradeoffs various
methods had. 

## The Project

This class culminated in a semester-long project on any topic in NLP that we
were interested in. After much debate, I came up with an idea that stuck with me
and my project partner, and that Prof. Chiang liked as well. My idea was to
create some kind of model that would try to figure out what news source an
article came from. In a perfect world it should be hard to distinguish what news
source an article came from - news should be bias free and impartial, and all
news sources should more or less be reporting on similar topics. However, we all
know that the real world is far from this platonic ideal, and this project could
reveal some interesting connections that news sources share. These connections
could be any combination of linguistic and non-linguistic features - the
challenge would be figuring these out.

The source code can be found on my
[GitHub](https://github.com/noyoshi/news_identifier)

### Part 1 - Naive Classifier

Our first step was to create some kind of baseline classifier to evaluate our
later models against. We first downloaded a dataset from Kaggle that contained
news articles published in recent years from 15 different news sites. Random
guessing would yield an accuracy of around 6.67%, so we had to make something
that would top that. 

The first model used **Cosine Similarity** to guess article sources. This is a
fancy implementation of a bag of words model. We would generate a large vector
for each of the news sources from our training data. Then, for each article we
wanted to classify, we would try to find the angle between the two vectors. The
idea is that if the two vectors are very similar, and have a very small angle
between them, the similarity will be closer to 1 (which is an exact match). We
did this and got an average accuracy of around 30%! That is a very impressive
metric as it is 5x better than average guessing. However, we noticed that the
cosine similarity between the highest model and the other models were very close
to each other. This was probably in some part due to the fact we did not remove
stop words from the articles, so words such as "a" and "the" made our articles
seems more similar than they otherwise should be. This was taken into
consideration for our next stage, where we attempted to beat the Cosine
Similarity model.
