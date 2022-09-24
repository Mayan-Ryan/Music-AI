const scribble= require('scribbletune');

const data= [1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1];
const min= Math.min(...data);
const octaves= [...Array(5)].map((d,i) => i+1);

const notes= octaves.reduce((res,octave) =>
res.concat(scribble.scale('c', 'whole tone', octave, false)), []);

const midiData= scribble.clip({
    notes: data.map(value=> notes[value - min]),
    pattern: 'x',
    noteLength: '1/16',
});

scribble.midi(midiData, 'data-sonification.mid');
