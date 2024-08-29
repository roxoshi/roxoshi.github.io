---
layout: post
title: Part 2 - Benchmarks for NLSQL models
---

## Benchmark datasets
To benchmark NLSQL models we require pairs of Natural language questions and the correct SQL query that answers the natural language question. There are few research initiative undertaking the massive task of creating these benchmark datasets. Three of the most popular among them are

1. [Spider 1.0](https://yale-lily.github.io/spider) — Huge collection with 200 databases and thousands of column. There is also a challenge associated with it as to who can get the best accuracy on the spider dataset. (Side note — most of my learnings on building SOTA NLSQL models comes from the research on the leaderboard on the spider benchmark
2. [BIRD](https://bird-bench.github.io/) — 90+ databases with about 13k question answer pairs. Apparently they left “dirty” in their collection to mock the real world which they say is an advantage :)
3. [KaggleDBQA](https://github.com/Chia-Hsuan-Lee/KaggleDBQA) — Widely used as a descent benchmark

## Benchmark methodologies
There are two common bench marking metrics for NLSQL models

1. Exact String match(ESM) — Compares whether two SQL queries have exactly same string representation
2. Execution match(EX) — Compares whether two SQL queries have same output after execution. Two queries can have an execution match even if they don’t have a string match but the reverse is not true.

## Limitations of benchmarking

### Ambiguity
There are three types of ambiguity frequently observed in these benchmark datasets

1. DB schema ambiguity — NL queries are correct but there might be ambiguity in the schema of the DB, e.g. -there might be two columns with similar meaning and the LLM will not know which one to pick when required to answer your NL query
2. DB values ambiguity — We don’t completely know what values are there in particular columns which leads to ambiguity, e.g. — NL Question — “Find all the order which are delivered in the last 90 days” — If there is a status column in a table we might want to put the filter status = "DELIVERED" but suppose in the table the status value for delivered orders is “CLOSED“ then we will have incorrect outcomes
3. Ambiguous language in NL query — If the question is framed in an ambiguous manner then results can be incorrect and they cannot be completed attributed to the model, e.g. Question — Get a list of the most active users in the last one month. Here “most active” can have many definitions like 1) people who logged in most of the time, 2) people who stayed on the website longest, 3) who placed most orders etc.

### Exact string match
The limitation of this benchmark metric is that there could be many ways an SQL query could be written and all of them are correct, e.g.

1. I can select my columns in different orders, it would fail string match because the select statement differs for the queries not
2. There are many data transformations where self joins or window functions can be used in place of one another. Same goes for joins and where statements (If you do not have a data analytics background skip over this point)
3. There might be different combinations of tables and columns which can retrieve the same transformed output data

### Execution match
It is generally considered a better metric than exact string match but not without its challenges -

1. When are two tables same? — If two table have values of all the columns exactly matching for each primary key then the are same. As long as we are adhering to this definition of match and ignoring mismatches because of ordering or rows and columns (unless explicitly asked for in the question) we are good to use this metric. It’s a good thought exercise to think of how you would build this checker?

### Annotator Consensus
THE biggest problem with benchmarking — ***Experts cannot agree on what is a correct SQL query for a natural language question***

Stick that line to anyone who asks why your text to SQL model is not good enough according to [this paper](https://www.cidrdb.org/cidr2024/papers/p74-floratou.pdf) from CIDR2024 the consensus between human annotators is about 62%. So expect your model to perform around this accuracy unless some major breakthroughs in this area

Next we start building out model and get into some coding…

**References**

[NLSQL is a solved problem…Not!](https://www.cidrdb.org/cidr2024/papers/p74-floratou.pdf)

[Spider](https://yale-lily.github.io/spider)