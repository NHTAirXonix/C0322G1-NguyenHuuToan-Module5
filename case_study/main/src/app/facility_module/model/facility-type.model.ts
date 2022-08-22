export class FacilityType {
  private id: number;
  private name: string;


  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }


  getid(): number {
    return this.id;
  }

  setid(value: number) {
    this.id = value;
  }

  getname(): string {
    return this.name;
  }

  setname(value: string) {
    this.name = value;
  }
}
