---
title: "Hello World?"
description: "Notes on basic computer architecture."
pubDatetime: 2025-01-02T00:00:00Z
updatedDatetime: 2025-01-02T00:00:00Z
tags: ["computer architecture", "basics"]
cover: ""
---

## hello world?

Notes on basic computer architecture.

### Basics

Phases of running a program
- preprocessing phase
- compiling phase
- assembly phase
- linking phase

Why learn compilers and computer architecture
- Helps optimize program performance
- Understanding error - most prominent linker errors
- Avoiding security vulnerabilities

Hardware organization of a system
- Buses
    - Central electrical conduits running through the system
    - The I/O devices, CPU, memory etc are all attached to the bus
- Main Memory
    - Main memory is the temp storage device that hols both a program and the data it manipulates while the processor is executing the program
    - Physically, the main memory is a collection of dynamic RAM(DRAM)
    - Logically, memory is organized as a linear array of bytes
- Processor
     - has a word-size storage device(register) called program counter(PC)
     - At any point in time, PC points at some instruction in the memory

**Caching**

General caching process
- Move machine instructions from disk to main memory
- copy instructions from main memory to processor
- copy data string ("hello world\n") from disk to main memory
- copy data string from main memory to display device

Caches are some additional memory units to support the processor register memory
- L1 cache is memory on the processor chip
- L2 cache is memory connected to the processor with a special bus

... (content truncated for brevity, full content migrated)

- Thread level concurrency
    - Modern computers have multiple cores; each core has its own register, ALU, cache etc
    - Also, each core has multiple threads that can simulataneously run two control flows(if 2 threads per core) in parallel
    - i.e., if a computer has 4 cores then it has 8 threads and it can run 8 processes in parallel
    - All the core have their own independent cache and also share a common cache
