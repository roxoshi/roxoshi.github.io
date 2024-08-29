---
layout: post
title: Part 1 - Natural language to SQL with LLMs
---

## Introduction
Natural language to SQL(NLSQL) is an application of NLP techniques to generate SQL queries that answer business questions. For example — I have two tables Logins and Users

`Logins (login_date Datetime, userid Int)`

`Users (userid Int, first_name String, last_name String, active_flag Bool)`

*Question* — Get names of all the users who logged on in the last 30 days

```sql
SELECT b.first_name + b.last_name AS name
FROM Logins a
LEFT JOIN Users b
ON a.userid = b.userid
WHERE DATEDIF(day, CURRENT_DATE(), login_date) <= 30;
```

Assuming the query is correct for now, this is what we want our NLSQL model to achieve, but in much more complex scenarios. In summary we have three components

*Input*: A text of natural language question or statement (mostly asked by a non-technical user)

*Output*: A syntactically and logically correct SQL query

*Process*: Our LLM based NLSQL model

## Applications of NLSQL

1. Provide capability to non technical users to interact with their data without bothering the data analysts and data engineers for everything. Example below

```
Manager: Hey can you pull a list of top 10 users who made the most purchases on our platform last month

Data Analyst: You can use the automatic query tool that Rajat built for us

Manager: Nevermind, I can do it faster in excel
```

2. Making text to SQL bots part of your application — e.g. customer can ask queries about their past order on the Amazon app.

3. You are an executive who took VC money saying you will revolutionize data analytics with AI so you decide to lay off some of the data analysts in your team and replace them with this tool. An example

```
VC backed CEO: What is the 3 months rolling average of sales for my company in the last 12 months

Bot: cries in window functions
```

## Challenges
1. **An LLM is NOT trained on your database** — Even LLMs built specifically for coding like code-llama, copilot etc do not out-of-the-box understand your database and what is the relationship between the entities in it
2. **Complexity** — LinkedIn and Medium are filled with half baked articles on building text to sql with RAG. But the examples the shown are generally very pristine working cases. Many database schemas are not that well maintained. Many queries go beyond a simple join and aggregate which the text-to-SQL models fail really fast
3. **Annotation**: This is the elephant in the room for all NLSQL solution. LLMs are not different than machine learning and deep learning models when it comes to affinity for quality data for its effective performance. With the current state of NLSQL framework there is no way you can achieve maximum accuracy in NLSQL without investing in annotating your schemas, tables and columns. This is a huge one time (sometimes recurring) human investment which organisations should consider before pursuing a NLSQL model

## What Next?
I’ll show in the upcoming articles on how to overcome all of these challenges and go to the edge of NL-SQL for a database. I have to cover a couple of fundamental concepts before we dive into the coding part of it.

[Part 2 - Benchmarks for NLSQL models](2024-7-23-benchmark_nlsql_models.md)
