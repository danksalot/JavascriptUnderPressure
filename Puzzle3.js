function getFileExtension(i) {
    
    // i will be a string, but it may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false
    
    return i.split('.')[1] || false
    
}

/*

Unit Tests:
getFileExtension('blatherskite.png');                   // png
getFileExtension('perfectlylegal.torrent');             // torrent
getFileExtension('spaces are fine in file names.txt');  // txt
getFileExtension('this does not have one');             // false
getFileExtension('.htaccess');                          // htaccess

*/
