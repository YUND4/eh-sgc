export abstract class BaseModel {
  private _valid: boolean;

  constructor(input: any) {
    Object.assign(this, input);
    return this;
  }

  toJson(): string {
    return JSON.stringify(this);
  };

  fromJson(json: string): this {
    return JSON.parse(json);
  };

  valid(): boolean {
    this._valid = true;
    this.requiredFields().forEach((v) => {
      if (!eval(v)) {
        this._valid = false;
      }
    });
    return this._valid;
  }

  fields(): string[] {
    return Object.keys(this)
  }


  requiredFields(): string[] {
    return []
  };

  forEach(callback: (key: string, value: any) => void): void {
    this.fields().forEach(key => {
      callback(key, this[key]);
    });
  }
}
