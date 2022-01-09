import * as fs from 'fs';

function callback(err) {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
}


fs.copyFile("test.txt","copy.txt", callback)
