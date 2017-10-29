'use strict';

function harmlessRansomNote(noteText, magazineTeext) {
    var notesArray = noteText.split(" ");
    var magazineArray = magazineTeext.split(" ");

    var magazineObj = {};

    magazineArray.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    console.log(magazineObj, notesArray);
    var isNotesPossible = true;

    notesArray.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) isNotesPossible = false;
        } else {
            isNotesPossible = false;
        }
    });

    return isNotesPossible;
}


//test

var result = harmlessRansomNote('hello is', 'hello is the');

console.log(result);