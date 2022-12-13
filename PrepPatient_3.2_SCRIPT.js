//< script type="text/javascript" >
// For Prepared Patient LAUNCH - -> Prepared Patient 3.2
var landbotScope = this;
this.onLoad(function() {
    landbotScope.window.first_to_2ndP = function(str) {
        if (str.toLowerCase() == "no reply") {
            return ("no reply");
        }
        // var str = "I have a cat, a dog, and a goat.";
        // These arrays are Rows 3 and 4 of this google sheet: https: //docs.google.com/spreadsheets/d/1H2iYryoHnS5k8PwBBWXL9JTk7Xihhia-lSUcrochLP8/edit#gid=0
        var array1stPerson = ['We', 'Ours', 'Our', 'us', 'I\'m', 'I am', 'I was', 'I', 'Me', 'Myself', 'My', 'Ourselves', 'Mine', 'mates', 'pals', 'Dad', 'Pa', 'Mum', 'Mama', 'Mam', 'Ma', 'Granny', 'Gran', 'Nana', 'Nan', 'Grandpa', '0'];
        var array2ndPerson = ['you', 'yours', 'your', 'you', 'you are', 'you are', 'you were', 'you', 'you', 'yourself', 'your', 'yourselves', 'yours', 'friends', 'friends', 'father', 'father', 'mother', 'mother', 'mother', 'mother', 'grandmother', 'grandmother', 'grandmother', 'grandmother', 'grandfather', '0'];
        var orig = array1stPerson[0];
        var swap = array2ndPerson[0];
        //console.log(" Reading : " & orig & " and : " & swap);

        for (var i in array1stPerson) {
            // console.log(i);
            var orig = array1stPerson[i];
            var swap = array2ndPerson[i];
            //console.log(" Swapping : " & orig & " for : " & swap);
            var re = new RegExp('\\b' + orig + '\\b', "ig");
            str = str.replace(re, swap);

        };
        str = str.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c) {
            return c.toUpperCase()
        });
        return (str);
    }

    function lowerCaseFirstLetter(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

});

//<script>