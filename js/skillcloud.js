$(document).ready(function ()
{
	makeSkillCloud();
});

function makeSkillCloud() {
    wordlist = [

        /*Primary Skills*/
        {word: 'C++', weight: 10, color: 'rgba(0, 0, 0, 0.5)'},
        {word: 'Java', weight: 15, color: '#33b5e5'},
        {word: 'VB.net', weight: 10, color: '#33b5e5'},
        {word: 'HTML5', weight: 30, color: '#33b5e5'},
        {word: 'CSS3', weight: 30, color: '#33b5e5'},
        {word: 'Bootstrap', weight: 30, color: '#33b5e5'},
        {word: 'JavaScript', weight: 30, color: '#33b5e5'},
        {word: 'jQuery', weight: 30, color: '#33b5e5'},
        {word: 'Ajax', weight: 30, color: '#33b5e5'},
        {word: 'PHP', weight: 17, color: '#33b5e5'},
        {word: 'CodeIgniter', weight: 45, color: "#33b5e5"},
        {word: 'Laravel', weight: 20, color: '#33b5e5'},
        {word: 'MySQL', weight: 30, color: '#33b5e5'},
        {word: 'Oracle', weight: 20, color: '#33b5e5'},
        {word: 'Git', weight: 20, color: '#33b5e5'},
        {word: 'Vagrant', weight: 20, color: '#33b5e5'},

        /*Secondary Skills*/
        {word: 'Inkscape', weight: 11, color: '#33b5e5'},
        {word: 'SVG', weight: 11, color: '#33b5e5'},

        /*Extras*/
        {word: 'Drupal', weight: 12, color: '#33b5e5'},
        {word: 'VirtualBox', weight: 20, color: '#33b5e5'}

    ];

    var tnt = $("body").data('tint');
    console.log(tnt);
    var indx = 0;
    for (var wordItem in wordlist) {

        opacity = wordlist[indx].weight / 100 + 0.4;

        //change color here
        wordlist[indx].color = "rgba(50,50,50, " + opacity + ")"; //For blue
        
        
        indx++;
        console.log(wordlist[indx]);
    }


    $("#wordCloud").jQWCloud({
        words: wordlist,
        //cloud_color: 'yellow',		
        minFont: 20,
        maxFont: 50,
//        fontOffset: 5,
//        cloud_font_family: 'Open Sans',
        cloud_font_family: 'Ubuntu',
        //verticalEnabled: false,
//        padding_left: 5,
//        showSpaceDIV: true,
//        spaceDIVColor: 'white',
        word_common_classes: 'WordClass',
        word_mouseEnter: function () {
//            $(this).css("text-decoration", "underline");
        },
        word_mouseOut: function () {
//            $(this).css("text-decoration", "none");
        },
        word_click: function () {
//            alert("You have selected:" + $(this).text());
            $("#skillModalLabel").html($(this).text());
            $('#skillModal').modal('show');
        },
        beforeCloudRender: function () {
//            date1 = new Date();
        },
        afterCloudRender: function () {
//            var date2 = new Date();
//            console.log("Cloud Completed in " + (date2.getTime() - date1.getTime()) + " milliseconds");
        }
    });
}
