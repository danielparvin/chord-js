import { Note } from '../note';

export abstract class BaseChord {
  constructor(public notes: Note[]) {}

  public getNotes(): Note[] {
    return this.notes;
  }

  public root() {
    return this.getNotes()[0];
  }

  public second() {
    return this.getNotes()[1];
  }

  public third() {
    return this.getNotes()[2];
  }

  public fourth() {
    return this.getNotes()[3];
  }

  public isTriad(): boolean {
    return this.getNotes().length === 3;
  }

  public getTriad(): Note[] {
    return this.getNotes().slice(0, 3);
  }

  public isTetrad(): boolean {
    return this.getNotes().length === 4;
  }

  public abstract isMatch(): boolean;
  public abstract getName(): string;
}
