var hours = process.argv[2];
var minutes = process.argv[3];
var romanArray = [];
var toRoman = {

    analyze: function (number) {
        romanArray = [];
        if (number == 0) {
            romanArray.push('N')
            return romanArray.join('');
        } else if (number >= 10) {
            return this.tens(number);
        } else {
            return this.units(number);
        }
    },

    tens: function (number) {
        var remainder = number % 10;
        var tens = Math.floor(number / 10);
        if (tens == 4) {
            romanArray.push('XL');
        } else if (tens == 9) {
            romanArray.push('XC');
        } else if (tens >= 5 && tens < 9) {
            romanArray.push('L');
            for (var i = 0; i < (tens % 5); i++) {
                romanArray.push('X');
            }
        } else if (tens > 0 && tens < 4) {
            for (var e = 0; e < tens; e++) {
                romanArray.push('X');
            }
        } else {

        }
        return this.units(remainder);
    },

    units: function (number) {

        if (number == 4) {
            romanArray.push('IV');
        } else if (number == 9) {
            romanArray.push('IX');
        } else if (number >= 5 && number < 9) {
            romanArray.push('V');
            var remainder = number % 5;
            for (var i = 0; i < remainder; i++) {
                romanArray.push('I');
            }
        } else if (number > 0 && number < 4) {
            for (var e = 0; e < number; e++) {
                romanArray.push('I');
            }
        } else {

        }
        return romanArray.join('');
    }
};

function swapChar(rNumber) {
    var art = new Array();
    switch (rNumber) {
        case 'N':
            art[0] = ' |\\ |';
            art[1] = ' | \\|';
            return art;
        case 'I':
            art[0] = ' |';
            art[1] = ' |';
            return art;
        case 'V':
            art[0] = ' \\ /';
            art[1] = '  v ';
            return art;
        case 'X':
            art[0] = ' \\/';
            art[1] = ' /\\';
            return art;
        case 'L':
            art[0] = ' |  ';
            art[1] = ' |__';
            return art;
        case ':':
            art[0] = ' *';
            art[1] = ' *';
            return art;
    }
}

function toArt(a) {
    var art = ['', ''];
    for (var i = 0; i < a.length; i++) {
        var artRow = swapChar(a.charAt(i));
        for (var j = 0; j < art.length; j++)
        art[j] += artRow[j];
    }
    for (var i = 0; i < art.length; i++)
    console.log(art[i]);
}


if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0) {
    console.log('format err')
} else {
    console.log(toRoman.analyze(hours) + ':' + (toRoman.analyze(minutes)));
    toArt(toRoman.analyze(hours) + ':' + (toRoman.analyze(minutes)));
};
