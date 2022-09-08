/*
		audiosynth.js - a thrid party module used for playing musical notes.
		find out more about it here: http://keithwhor.github.io/audiosynth/
		
		for this example the importants bits to know are this:
		
		Synth.createInstrument('piano') - Creates a piano object. that we can use to play notes.
		
		piano.play(note, octave, duration) - Generates the note waveform and plays it.
			paramaters: 
				note - one of ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'A#', 'C#', 'D#', 'F#', 'G#']
				octave - one of [3, 4, 5]
				duration - time in seconds the note should be held
*/
var piano = Synth.createInstrument('piano');

var all_notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'A#', 'C#', 'D#', 'F#', 'G#'];

var c_major = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
var d_major = ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D'];


var song = [
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'B', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'C#', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'B', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'C#', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'B', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'C#', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'C#', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'B', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .3},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .3},
];

var row_boat_song = [
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    
    {'note': 'E', 'octave': 4, 'length': 1.5, 'delay_before': .4},
    {'note': 'F#', 'octave': 4, 'length': 2, 'delay_before': .4},
    
    {'note': 'F#', 'octave': 4, 'length': 1.5, 'delay_before': .5},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .4},
    
    {'note': 'F#', 'octave': 4, 'length': 1.5, 'delay_before': .5},
    {'note': 'G', 'octave': 4, 'length': 1.5, 'delay_before': .4},
    
    {'note': 'A', 'octave': 4, 'length': 3, 'delay_before': .4},
    /*
    {'note': 'G', 'octave': 4, 'length': 1, 'delay_before': .5},
    {'note': 'D', 'octave': 4, 'length': 1, 'delay_before': .5},
    */
];

var twinkle_song = [
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': 1.4},
    
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': 1.4},
    
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': 1.4},
    
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': 1.4},
    
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': 1.4},
    
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .7},
];

function make_scale(scale_notes){
    var scale = [];
    scale_notes.forEach(function(note, index){
           var octave = 4;
           if (index == scale_notes.length - 1){
               octave = 5;
           }
           console.log(index + " " + note + " " + octave);
           
           scale.push({'note': note, 'octave': octave, 'length': 1, 'delay_before': .125})
    });
    return scale;
}

var cur_note = 0;
var other_cur_note = 0;

function play_cur_note(on_finished){
    
    console.log(song[cur_note]['note'], song[cur_note]['octave'], song[cur_note]['length']);
    piano.play(song[cur_note]['note'], song[cur_note]['octave'], song[cur_note]['length']);
	piano.play(song[cur_note]['note'], song[cur_note]['octave'] + 1, song[cur_note]['length']);
    cur_note++;
    if(cur_note < song.length){
        var next_call = play_cur_note;
        //console.log(arguments);
        setTimeout(function(){
            next_call.call(null,on_finished)
        }, song[cur_note-1]['delay_before'] * 1000);
    }else{
        cur_note = 0;
        console.log(typeof on_finished);
        if (typeof on_finished == "function"){
            on_finished();
        }
    }
}
/*
function play_cur_note_plus_or_something(on_finished){
    
    //console.log(song[cur_note]['note'], song[cur_note]['octave'], song[cur_note]['length']);
    piano.play(song[other_cur_note]['note'], song[other_cur_note]['octave'] - 1, song[other_cur_note]['length']);
    other_cur_note++;
    if(other_cur_note < song.length){
        var next_call = play_cur_note_plus_or_something;
        //console.log(arguments);
        setTimeout(function(){
            next_call.call(null,on_finished)
        }, song[other_cur_note-1]['delay_before'] * 1000);
    }else{
        other_cur_note = 0;
        console.log(typeof on_finished);
        if (typeof on_finished == "function"){
            on_finished();
        }
    }
}*/

function play_next(){
    song = make_scale(c_major);
    play_cur_note();
}

song = twinkle_song;
play_cur_note();
play_cur_note_plus_or_something();

//song = make_scale(d_major);
//play_cur_note(play_next);

//song = make_scale(d_major);
//play_cur_note();
