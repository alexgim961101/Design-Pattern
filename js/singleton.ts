class Logger {
  private static instance: Logger;
  private data: string;

  private constructor() {
    this.data = "";
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      this.instance = new Logger();
    }
    return Logger.instance;
  }

  public setData(data: string): void {
    this.data = data;
  }

  public getData(): string {
    return this.data;
  }
}

const l1 = Logger.getInstance();
const L2 = Logger.getInstance();

l1.setData("Hello");
console.log(l1.getData()); // Hello
console.log(L2.getData()); // Hello
