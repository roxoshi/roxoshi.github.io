## `hello world`?

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


### Caching
General caching process
- Move machine instructions from disk to main memory
- copy instructions from main memory to processor
- copy data string ("hello world\n") from disk to main memory
- copy data string from main memory to display device

Caches are some additional memory units to support the processor register memory
- L1 cache is memory on the processor chip
- L2 cache is memory connected to the processor with a special bus
- L1 is faster and hold less data, vice versa for L2 cache
- Both are implemented with a hardware technology known as **static random access memory(SRAM)**