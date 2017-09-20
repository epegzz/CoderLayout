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

1. Have a kernel extension loading and logging to Console.app
2. Have gdb set up to debug the extension
3. Have a Swift app communicating with the KEXT
	-> press a button in the app and have KEXT logging a message


## FAQ

**Q: Do I need a IO kit extension or a generic kernel extension to implement a virtual keyboard?**
A: IO kit extension 

Q: How is Unit Testing done with C++?



## Resources

[Kernel Architecture Overview](https://developer.apple.com/library/content/documentation/Darwin/Conceptual/KernelProgramming/Architecture/Architecture.html#//apple_ref/doc/uid/TP30000905-CH1g-CACDAEDC)
[Kernel Extension Overview](https://developer.apple.com/library/content/documentation/Darwin/Conceptual/KernelProgramming/Extend/Extend.html)
https://www.apriorit.com/dev-blog/430-macos-kext-development
