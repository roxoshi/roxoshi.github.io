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


### Operating System

Operating system is a layer of software between the application program and the hardware and it has two primary purposes,
- to protect the hardware from misuse by runaway applications
- to provide applications with simple and uniform mechanisms for manipulating complicated and often wildly different low level hardware devices

**Processes**

Processes are abstractions over I/O devices, main memory and the processor.

- context switching: running multiple processes on a single processor by saving the context of one process when it is stopped and then loading the context of another process so that the procesor can continue to run it from where it was left. Context switching pass the control flow of processer to different processes
- system call: a special function that passes control to the operating system
- kernel: it is the portion of the operating system code that is always resident in the memory. 
    - When an application program requires some action by the OS, liek read/write file, it executes a special system call instruction, transferring control to the kernel
    - kernel is not a separate process, it is a collection of code and data structures that the system uses to manage all the processes

**Threads**

A process in modern systems consists of multiple execution units, called threads, each running in the context of the processand sharing the same code and global data.

Threads are important for concurrency in network servers, as it is easier to share data between multiple threads than between multiple processes, and threads are more efficient than processes

**Virtual memory**

It is an abstraction that provides each process with the illusion that it has exclusive use of the main memory. Each process has the same uniform view of the memory, which is known as its *virtual address space*. There are some well defined areas in the virtual memory for specific purposes,
- *Program code and data*: has the code, data and gloabl C variables, initialize directly from the contents of the executable object
- *Heap*: this is the runtime heap; expands dynamically at runtime based on malloc and free calls
- *Shared libraries*: holds the C standard libraries
- *Stack*: It's at the top of user's virtual address; it expands and contracts with function calls and returns respectively
- *Kernel virutal memory*: reserved for kernel only, application programs cannot access this area. They must invoke the kernel to perform these operations

**Files**

A file is a sequence of bytes. Every I/O device, including disks, keyboards, displays, and even networks, is modeled as a file. 


