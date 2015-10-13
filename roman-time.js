var hours = process.argv[2];
var minutes = process.argv[3];
var romanArray = [];
var toRoman = {

    analyze: function (number) {
        romanArray = [];
        number = Number(number);
        switch (number) {
            case 0:
                romanArray.push('N');
                return romanArray.join('');
                break;
            case (number >= 10):
                return this.tens(number);
                break;
            default:
                return this.units(number);
        }
    },

    tens: function (number) {
        var remainder = number % 10;
        var tens = Math.floor(number / 10);
        switch (tens) {
            case 4:
                romanArray.push('XL');
                break;
            case 9:
                romanArray.push('XC');
                break;
            case (tens >= 5 && tens < 9):
                romanArray.push('L');
                for (var i = 0; i < (tens % 5); i++) {
                    romanArray.push('X');
                }
                break;
            case (tens > 0 && tens < 4):
                for (var e = 0; e < tens; e++) {
                    romanArray.push('X');
                }
        }
        return this.units(remainder);
    },

units: function (number) {
        switch (number) {
            case 4:
                romanArray.push('IV');
                break;
            case 9:
                romanArray.push('IX');
                break;
            case (number >= 5 && number < 9):
                romanArray.push('V');
                var remainder = number % 5;
                for (var i = 0; i < remainder; i++) {
                    romanArray.push('I');
                };
                break;
            case (number > 0 && number < 4):
                for (var e = 0; e < number; e++) {
                    romanArray.push('I');
                }
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
