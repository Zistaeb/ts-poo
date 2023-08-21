export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isconnect(name: string): boolean;
}

/*const driver: Driver = {
  database: '',
  password: '',
  port: 23
}*/



class PostgresDrive  implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number
  ) {}
  connect(): void {
    //code
  }
  disconnect(): void {
    //code
  }
  isconnect(name: string): boolean {
    return true
  }
}

class OracleDrive  implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number
  ) {}
    connect(): void {
      //code
    }
    disconnect(): void {
      //code
    }
    isconnect(name: string): boolean {
      return true
    }
}
