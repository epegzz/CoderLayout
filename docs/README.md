# Development

### Goal

1. Coder Layout MacOS Application
2. Public Websites

### Architecture

- Kernel Extension intercepts keyboard input
- KEXT pushes an event to socket and drops original event
- Userspace application reads event from socket
- Userspace application applies business logic on event
- Userspace application sends new events to socket
- KEXT reads event from socket and emulates hardware input event

### Milestones:

- Have KEXT loading and logging to Console.app
- Have gdb set up to debug the KEXT
- Have KEXT intercepting and logging a pressed key
- Have KEXT intercepting and dropping a specific pressed key
- Have App reading keyboards event from KEXT via socket
- Have KEXT reading event from App via socket
- Have KEXT creating a new keyboard event

## FAQ

**Q: Do I need a IO kit extension or a generic kernel extension to implement a virtual keyboard?**
A: IO kit extension 

Q: How is Unit Testing done with C++?



## Resources

[Kernel Architecture Overview](https://developer.apple.com/library/content/documentation/Darwin/Conceptual/KernelProgramming/Architecture/Architecture.html#//apple_ref/doc/uid/TP30000905-CH1g-CACDAEDC)
[Kernel Extension Overview](https://developer.apple.com/library/content/documentation/Darwin/Conceptual/KernelProgramming/Extend/Extend.html)
https://www.apriorit.com/dev-blog/430-macos-kext-development
