import { Chord } from "../chord";

describe("Major Chords", () => {
  it("returns the name of the major chord", () => {
    expect(Chord.for("C E G")?.getName()).toEqual("C Major");
    expect(Chord.for("C# E# G#")?.getName()).toEqual("C# Major");
    expect(Chord.for("Db F Ab")?.getName()).toEqual("Db Major");
    expect(Chord.for("D F# A")?.getName()).toEqual("D Major");
    expect(Chord.for("Eb G Bb")?.getName()).toEqual("Eb Major");
    expect(Chord.for("E G# B")?.getName()).toEqual("E Major");
    expect(Chord.for("F A C")?.getName()).toEqual("F Major");
    expect(Chord.for("F# A# C#")?.getName()).toEqual("F# Major");
    expect(Chord.for("Gb Bb Db")?.getName()).toEqual("Gb Major");
    expect(Chord.for("G B D")?.getName()).toEqual("G Major");
    expect(Chord.for("G# B# D#")?.getName()).toEqual("G# Major");
    expect(Chord.for("Ab C Eb")?.getName()).toEqual("Ab Major");
    expect(Chord.for("A C# E")?.getName()).toEqual("A Major");
    expect(Chord.for("Bb D F")?.getName()).toEqual("Bb Major");
    expect(Chord.for("B D# F#")?.getName()).toEqual("B Major");
  });
});

describe("Minor Chords", () => {
  it("returns the name of the minor chord", () => {
    expect(Chord.for("C Eb G")?.getName()).toEqual("C minor");
    expect(Chord.for("C# E G#")?.getName()).toEqual("C# minor");
    expect(Chord.for("Db Fb Ab")?.getName()).toEqual("Db minor");
    expect(Chord.for("D F A")?.getName()).toEqual("D minor");
    expect(Chord.for("Eb Gb Bb")?.getName()).toEqual("Eb minor");
    expect(Chord.for("E G B")?.getName()).toEqual("E minor");
    expect(Chord.for("F Ab C")?.getName()).toEqual("F minor");
    expect(Chord.for("F# A C#")?.getName()).toEqual("F# minor");
    expect(Chord.for("G Bb D")?.getName()).toEqual("G minor");
    expect(Chord.for("G# B D#")?.getName()).toEqual("G# minor");
    expect(Chord.for("Ab Cb Eb")?.getName()).toEqual("Ab minor");
    expect(Chord.for("A C E")?.getName()).toEqual("A minor");
    expect(Chord.for("Bb Db F")?.getName()).toEqual("Bb minor");
    expect(Chord.for("B D F#")?.getName()).toEqual("B minor");
  });
});

describe("Inverted Major Chords", () => {
  it("returns the name of the inverted major chord", () => {
    expect(Chord.for("E G C")?.getName()).toEqual("C/E");
    expect(Chord.for("G C E")?.getName()).toEqual("C/G");
    expect(Chord.for("G# C# E#")?.getName()).toEqual("C#/G#");
    expect(Chord.for("E# G# C#")?.getName()).toEqual("C#/E#");
    expect(Chord.for("F Ab Db")?.getName()).toEqual("Db/F");
    expect(Chord.for("Ab Db F")?.getName()).toEqual("Db/Ab");
    expect(Chord.for("A D F#")?.getName()).toEqual("D/A");
    expect(Chord.for("F# A D")?.getName()).toEqual("D/F#");
    expect(Chord.for("G Bb Eb")?.getName()).toEqual("Eb/G");
    expect(Chord.for("Bb Eb G")?.getName()).toEqual("Eb/Bb");
    expect(Chord.for("G# B E")?.getName()).toEqual("E/G#");
    expect(Chord.for("B E G#")?.getName()).toEqual("E/B");
    expect(Chord.for("A C F")?.getName()).toEqual("F/A");
    expect(Chord.for("C F A")?.getName()).toEqual("F/C");
    expect(Chord.for("A# C# F#")?.getName()).toEqual("F#/A#");
    expect(Chord.for("C# F# A#")?.getName()).toEqual("F#/C#");
    expect(Chord.for("Bb Db Gb")?.getName()).toEqual("Gb/Bb");
    expect(Chord.for("Db Gb Bb")?.getName()).toEqual("Gb/Db");
    expect(Chord.for("B D G")?.getName()).toEqual("G/B");
    expect(Chord.for("D G B")?.getName()).toEqual("G/D");
    expect(Chord.for("B# D# G#")?.getName()).toEqual("G#/B#");
    expect(Chord.for("D# G# B#")?.getName()).toEqual("G#/D#");
    expect(Chord.for("C Eb Ab")?.getName()).toEqual("Ab/C");
    expect(Chord.for("Eb Ab C")?.getName()).toEqual("Ab/Eb");
    expect(Chord.for("C# E A")?.getName()).toEqual("A/C#");
    expect(Chord.for("E A C#")?.getName()).toEqual("A/E");
    expect(Chord.for("D F Bb")?.getName()).toEqual("Bb/D");
    expect(Chord.for("F Bb D")?.getName()).toEqual("Bb/F");
    expect(Chord.for("D# F# B")?.getName()).toEqual("B/D#");
    expect(Chord.for("F# B D#")?.getName()).toEqual("B/F#");
  });
});

describe("Inverted Minor Chords", () => {
  it("returns the name of the inverted minor chord", () => {
    expect(Chord.for("Eb G C")?.getName()).toEqual("Cm/Eb");
    expect(Chord.for("G C Eb")?.getName()).toEqual("Cm/G");
    expect(Chord.for("E G# C#")?.getName()).toEqual("C#m/E");
    expect(Chord.for("G# C# E")?.getName()).toEqual("C#m/G#");
    expect(Chord.for("Fb Ab Db")?.getName()).toEqual("Dbm/Fb");
    expect(Chord.for("Ab Db Fb")?.getName()).toEqual("Dbm/Ab");
    expect(Chord.for("F A D")?.getName()).toEqual("Dm/F");
    expect(Chord.for("A D F")?.getName()).toEqual("Dm/A");
    expect(Chord.for("Gb Bb Eb")?.getName()).toEqual("Ebm/Gb");
    expect(Chord.for("Bb Eb Gb")?.getName()).toEqual("Ebm/Bb");
    expect(Chord.for("G B E")?.getName()).toEqual("Em/G");
    expect(Chord.for("B E G")?.getName()).toEqual("Em/B");
    expect(Chord.for("Ab C F")?.getName()).toEqual("Fm/Ab");
    expect(Chord.for("C F Ab")?.getName()).toEqual("Fm/C");
    expect(Chord.for("A C# F#")?.getName()).toEqual("F#m/A");
    expect(Chord.for("C# F# A")?.getName()).toEqual("F#m/C#");
    expect(Chord.for("Bb D G")?.getName()).toEqual("Gm/Bb");
    expect(Chord.for("D G Bb")?.getName()).toEqual("Gm/D");
    expect(Chord.for("B D# G#")?.getName()).toEqual("G#m/B");
    expect(Chord.for("D# G# B")?.getName()).toEqual("G#m/D#");
    expect(Chord.for("Cb Eb Ab")?.getName()).toEqual("Abm/Cb");
    expect(Chord.for("Eb Ab Cb")?.getName()).toEqual("Abm/Eb");
    expect(Chord.for("C E A")?.getName()).toEqual("Am/C");
    expect(Chord.for("E A C")?.getName()).toEqual("Am/E");
    expect(Chord.for("Db F Bb")?.getName()).toEqual("Bbm/Db");
    expect(Chord.for("F Bb Db")?.getName()).toEqual("Bbm/F");
    expect(Chord.for("D F# B")?.getName()).toEqual("Bm/D");
    expect(Chord.for("F# B D")?.getName()).toEqual("Bm/F#");
  });
});

describe("Suspended Chords", () => {
  it("returns the name of the suspended chord", () => {
    expect(Chord.for("C F G")?.getName()).toEqual("Csus");
    expect(Chord.for("C# F# G#")?.getName()).toEqual("C#sus");
    expect(Chord.for("Db Gb Ab")?.getName()).toEqual("Dbsus");
    expect(Chord.for("Eb Ab Bb")?.getName()).toEqual("Ebsus");
    expect(Chord.for("E A B")?.getName()).toEqual("Esus");
    expect(Chord.for("F Bb C")?.getName()).toEqual("Fsus");
    expect(Chord.for("F# B C#")?.getName()).toEqual("F#sus");
    expect(Chord.for("G C D")?.getName()).toEqual("Gsus");
    expect(Chord.for("Ab Db Eb")?.getName()).toEqual("Absus");
    expect(Chord.for("A D E")?.getName()).toEqual("Asus");
    expect(Chord.for("Bb Eb F")?.getName()).toEqual("Bbsus");
    expect(Chord.for("B E F#")?.getName()).toEqual("Bsus");
  });
});

describe("Suspended Second Chords", () => {
  it("returns the name of the suspended chord", () => {
    expect(Chord.for("C D G")?.getName()).toEqual("Csus2");
    expect(Chord.for("C# D# G#")?.getName()).toEqual("C#sus2");
    expect(Chord.for("Db Eb Ab")?.getName()).toEqual("Dbsus2");
    expect(Chord.for("Eb F Bb")?.getName()).toEqual("Ebsus2");
    expect(Chord.for("E F# B")?.getName()).toEqual("Esus2");
    expect(Chord.for("F G C")?.getName()).toEqual("Fsus2");
    expect(Chord.for("F# G# C#")?.getName()).toEqual("F#sus2");
    expect(Chord.for("G A D")?.getName()).toEqual("Gsus2");
    expect(Chord.for("Ab Bb Eb")?.getName()).toEqual("Absus2");
    expect(Chord.for("A B E")?.getName()).toEqual("Asus2");
    expect(Chord.for("Bb C F")?.getName()).toEqual("Bbsus2");
    expect(Chord.for("B C# F#")?.getName()).toEqual("Bsus2");
  });
});

describe("Augmented Chords", () => {
  it("returns the name of the augmented chord", () => {
    expect(Chord.for("C E G#")?.getName()).toEqual("Caug");
    expect(Chord.for("C# E# A")?.getName()).toEqual("C#aug");
    expect(Chord.for("Db F A")?.getName()).toEqual("Dbaug");
    expect(Chord.for("D F# A#")?.getName()).toEqual("Daug");
    expect(Chord.for("Eb G B")?.getName()).toEqual("Ebaug");
    expect(Chord.for("E G# C")?.getName()).toEqual("Eaug");
    expect(Chord.for("F A C#")?.getName()).toEqual("Faug");
    expect(Chord.for("F# A# D")?.getName()).toEqual("F#aug");
    expect(Chord.for("Gb Bb D")?.getName()).toEqual("Gbaug");
    expect(Chord.for("G B D#")?.getName()).toEqual("Gaug");
    expect(Chord.for("G# B# E")?.getName()).toEqual("G#aug");
    expect(Chord.for("Ab C E")?.getName()).toEqual("Abaug");
    expect(Chord.for("A C# F")?.getName()).toEqual("Aaug");
    expect(Chord.for("Bb D F#")?.getName()).toEqual("Bbaug");
    expect(Chord.for("B D# G")?.getName()).toEqual("Baug");
  });
});

describe("Diminished Chords", () => {
  it("returns the name of the diminished chord", () => {
    expect(Chord.for("C Eb Gb")?.getName()).toEqual("Cdim");
    expect(Chord.for("C# E G")?.getName()).toEqual("C#dim");
    expect(Chord.for("Db Fb G")?.getName()).toEqual("Dbdim");
    expect(Chord.for("D F Ab")?.getName()).toEqual("Ddim");
    expect(Chord.for("Eb Gb A")?.getName()).toEqual("Ebdim");
    expect(Chord.for("E G Bb")?.getName()).toEqual("Edim");
    expect(Chord.for("F Ab Cb")?.getName()).toEqual("Fdim");
    expect(Chord.for("F# A C")?.getName()).toEqual("F#dim");
    expect(Chord.for("G Bb Db")?.getName()).toEqual("Gdim");
    expect(Chord.for("G# B D")?.getName()).toEqual("G#dim");
    expect(Chord.for("Ab Cb D")?.getName()).toEqual("Abdim");
    expect(Chord.for("A C Eb")?.getName()).toEqual("Adim");
    expect(Chord.for("Bb Db Fb")?.getName()).toEqual("Bbdim");
    expect(Chord.for("B D F")?.getName()).toEqual("Bdim");
  });
});
