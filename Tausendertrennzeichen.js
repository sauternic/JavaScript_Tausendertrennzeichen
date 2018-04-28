// Format Methode auch statisch siehe ganz unten

/*  
    Anleitung:
    1. Code in das Script Einbinden
    2. Einfach an den gewünschten 'Wert' .format() Anhängen.
    
    z.B. =>
    - String_mit_Tausendertrennzeichen = Wert.format();


    oder:


    - String_mit_Tausendertrennzeichen = Number.format(Wert)
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// => prototype.format()
// Für Typ:
// - Number
// - String
// - BigInteger
// - BigNumber
// - Statisch nur für Number und String => Number.format(wert)

// 
// Setzt Tausendertrennzeichen und 'geht' mit Nachkommastellen die mit .(Punkt als Dezimaltrennzeichen) 
// getrennt sind
Number.prototype.format = function(){
    // Zahl in String Konvertieren
    var str =  this.toString();
    
    //Wenn Nachkommastellen mit .
    if (str.indexOf('.') > -1){
        // Gibt 2 Teile [0] und [1]
        var str_split = str.split('.')
        //Nur Vorkommateil zur Weiterverabeitung
        str = str_split[0];
    }

    var strArr = str.split('');
    
    var str_temp = '';
    while(strArr.length > 0){
        for (var y = 0; y < 3; y++) {
                if(strArr.length > 0)
                //Zusammenbau des neuen Strings in str_temp
                str_temp = strArr.pop() + str_temp;              
        }
        if(strArr.length > 0)
        //Tausendertrennzeichen ' von links Einfügen
        str_temp = "'" + str_temp;
    }
    //str_split[1] ist Nachkommateil -> wieder Anhängen
    if(str_split){
        return str_temp += '.' + str_split[1] 
    }
    return str_temp;
}

//Nochmals fast das gleiche wie oben für String Typ
String.prototype.format = function(){

    var str =  this; 
    
    //Wenn Nachkommastellen mit .
    if (str.indexOf('.') > -1){
        // Gibt 2 Teile [0] und [1]
        var str_split = str.split('.')
        //Nur Vorkommateil zur Weiterverabeitung
        str = str_split[0];
    }

    var strArr = str.split('');
    
    var str_temp = '';
    while(strArr.length > 0){
        for (var y = 0; y < 3; y++) {
                if(strArr.length > 0)
                //Zusammenbau des neuen Strings in str_temp
                str_temp = strArr.pop() + str_temp;              
        }
        if(strArr.length > 0)
        //Tausendertrennzeichen ' von links Einfügen
        str_temp = "'" + str_temp;
    }
    //str_split[1] ist Nachkommateil -> wieder Anhängen
    if(str_split){
        return str_temp += '.' + str_split[1] 
    }
    return str_temp;
}

//Nochmals fast das gleiche wie oben für BigInteger Typ
BigInteger.prototype.format = function(){

    var str =  this.toString(); 
    
    //Wenn Nachkommastellen mit .
    if (str.indexOf('.') > -1){
        // Gibt 2 Teile [0] und [1]
        var str_split = str.split('.')
        //Nur Vorkommateil zur Weiterverabeitung
        str = str_split[0];
    }

    var strArr = str.split('');
    
    var str_temp = '';
    while(strArr.length > 0){
        for (var y = 0; y < 3; y++) {
                if(strArr.length > 0)
                //Zusammenbau des neuen Strings in str_temp
                str_temp = strArr.pop() + str_temp;              
        }
        if(strArr.length > 0)
        //Tausendertrennzeichen ' von links Einfügen
        str_temp = "'" + str_temp;
    }
    //str_split[1] ist Nachkommateil -> wieder Anhängen
    if(str_split){
        return str_temp += '.' + str_split[1] 
    }
    return str_temp;
}

//Nochmals das gleiche wie oben für BigNumber Typ
BigNumber.prototype.format = function(){

    var str =  this.toString(); 
    
    //Wenn Nachkommastellen mit .
    if (str.indexOf('.') > -1){
        // Gibt 2 Teile [0] und [1]
        var str_split = str.split('.')
        //Nur Vorkommateil zur Weiterverabeitung.
        str = str_split[0];
    }

    var strArr = str.split('');
    
    var str_temp = '';
    while(strArr.length > 0){
        for (var y = 0; y < 3; y++) {
                if(strArr.length > 0)
                //Zusammenbau des neuen Strings in str_temp
                str_temp = strArr.pop() + str_temp;              
        }
        if(strArr.length > 0)
        //Tausendertrennzeichen ' von links Einfügen
        str_temp = "'" + str_temp;
    }
    //str_split[1] ist Nachkommateil -> wieder Anhängen.
    if(str_split){
        return str_temp += '.' + str_split[1] 
    }
    return str_temp;
}


//********************************************************************** */

//Eine static Variante! :)
Number.format = function(wert){
    //Zahl in String Konvertieren.
    // Oder Sring bleibt String!
    var str =  wert.toString();
    
    //Wenn Nachkommastellen mit .
    if (str.indexOf('.') > -1){
        // Gibt 2 Teile [0] und [1]
        var str_split = str.split('.')
        //Nur Vorkommateil zur Weiterverabeitung.
        str = str_split[0];
    }

    var strArr = str.split('');
    
    var str_temp = '';
    while(strArr.length > 0){
        for (var y = 0; y < 3; y++) {
                if(strArr.length > 0)
                //Zusammenbau des neuen Strings in str_temp
                str_temp = strArr.pop() + str_temp;              
        }
        if(strArr.length > 0)
        //Tausendertrennzeichen ' von links Einfügen
        str_temp = "'" + str_temp;
    }
    //str_split[1] ist Nachkommateil -> wieder Anhängen.
    if(str_split){
        return str_temp += '.' + str_split[1] 
    }
    return str_temp;
}

