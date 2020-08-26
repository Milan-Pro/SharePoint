//Use "npm link" command in order to create symbolic link in you project about the library that you have created.
export class SpfxLibLibrary {
  public name(): string {
    return 'SpfxLibLibrary';
  }

  public Add(n1:number, n2:number):number{
    return n1 + n2;
  }
}
