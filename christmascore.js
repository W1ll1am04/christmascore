class christmascore {
    utils = null;
    debug = true;

    constructor(christmasday, debug) {
        if (christmasday != undefined) { this.christmasday = christmasday; }
        else { this.christmasday = "24"; }
        if (debug != undefined) { this.debug = debug; }
        else { this.debug = false; }

        if (typeof christmascoreutils === 'function') {
            this.utils = new christmascoreutils();
        }
    }

    UntilChristmas(udate) {
        try {
            var date;
            if (udate === undefined) { date=new Date(); }
            else { date = new Date(udate); }

            var cmas=new Date(date.getFullYear(), 11, this.christmasday);
            if (date.getMonth()==11 && date.getDate()>this.christmasday) {
                cmas.setFullYear(cmas.getFullYear()+1); 
            }
            var one_day=1000*60*60*24;
            return (Math.ceil((cmas.getTime()-date.getTime())/(one_day)));
        }
        catch (err) {
            if (this.utils !== null) { this.utils.HandleExcp(this.utils.levels.EXCEPTION, "christmascore", "UntilChristmas", err); }
            else { console.error("christmascore: " + err); }
        }
    }

    UntilDecemeber(year) {
        try {
            if (year == undefined) { year = new Date().getFullYear(); }
            var date = [24*60*60*1000, new Date("December 1 " + year), new Date()];
            return Math.round(Math.abs((date[1].getTime() - date[2].getTime())/(date[0])));    
        }
        catch (err) {
            if (this.utils !== null) { this.utils.HandleExcp(this.utils.levels.EXCEPTION, "christmascore", "UntilDecemeber", err); }
            else { console.error("christmascore: " + err); }
        }
    }

    SecretSantaSelector(participants) {
        try {
            function hasDuplicates(array) {
                var seen = [];
                for (var i = 0; i < array.length; ++i) {
                    var value = array[i];
                    if (seen.indexOf(value) !== -1) { return true; }
                    seen.push(value);
                }
                return false;
            }
            
            if (participants.length%2 ==0) {
                if (!hasDuplicates(participants)) {
                    if (this.debug) { console.debug("Debug: Even amount participants"); }
                    var json = {}
                    var arr1 = participants.slice(),
                    arr2 = participants.slice();
                    
                    arr1.sort(function() { return 0.5 - Math.random();});
                    arr2.sort(function() { return 0.5 - Math.random();});
                    
                    while (arr1.length) {
                        var name1 = arr1.pop(),
                        name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
                        
                        json[name1] = name2;
                    }
                    for (var key in json) {
                        if (json.hasOwnProperty(key)) {
                            if (key === json[key]) { return this.SecretSantaSelector(participants); }
                        }
                    }
                    return json;
                }
                else {
                    if (this.utils !== null) { this.utils.HandleExcp(this.utils.levels.ERROR, "christmascore", "SecretSantaSelector", "You cannot enter a participant twice."); }
                    else { console.error("christmascore: You cannot enter a participant twice."); }
                }
            }
            else {
                if (this.utils !== null) { this.utils.HandleExcp(this.utils.levels.ERROR, "christmascore", "SecretSantaSelector", "participants is uneven."); }
                else { console.error("christmascore: participants is uneven."); }
            }
        }
        catch (err) {
            if (this.utils !== null) { this.utils.HandleExcp(this.utils.levels.EXCEPTION, "christmascore", "SecretSantaSelector", err); }
            else { console.error("christmascore: " + err); }
        }
    }

    Isitdecember() {
        try {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
            return months[new Date().getMonth()] == "December";
        }
        catch (err) {
            if (this.utils !== null) { this.utils.HandleExcp(this.utils.levels.EXCEPTION, "christmascore", "Isitdecember", err); }
            else { console.error("christmascore: " + err); }
        }
    }

    Greeting(greetings) {
        try {
            if (greetings === undefined) { greetings = ["Happy christmas", "Merry Christmas", "Happy Holidays", "Let it snow, Let it snow, Let it snow"]; }
            return greetings[Math.floor(Math.random() * greetings.length)];
        }
        catch (err) {
            if (this.utils !== null) { this.utils.HandleExcp(this.utils.levels.EXCEPTION, "christmascore", "Greeting", err); }
            else { console.error("christmascore: " + err); }
        }
    }
}