declare module 'xterm' {
    export class Terminal {
      constructor(options?: any);
      open(container: HTMLElement): void;
      writeln(data: string): void;
      write(data: string): void;
      onData(callback: (data: string) => void): void;
      clear(): void;
    }
  }
  