$(document).ready(function() {
		$("#unboxed_plus").hide();
		$("#unboxed").hide();
		$("#like_new").hide();
		$("#well_used").hide();
		$("#sanyo").hide();
		$("#sony").hide();
		$("#micromax").hide();
		$("#philips").hide();
		$("#20-30").hide();
		$("#30-40").hide();
		$("#40-50").hide();
		$("#50").hide();
		$("#popularity").hide();
		$("#plth").hide();
		$("#phtl").hide();
		$("#newarrivals").hide();

        $(".filterbox").click(function(event) {
            if($(this).is(":checked")) {
                $("#"+event.target.value).show();
            } 
            else {
                $("#"+event.target.value).hide();
            }
        });
        $("#clear").click(function(event) {
        	$("#unboxed_plus").hide();
			$("#unboxed").hide();
			$("#like_new").hide();
			$("#well_used").hide();
			$("#sanyo").hide();
			$("#sony").hide();
			$("#micromax").hide();
			$("#philips").hide();
			$("#20-30").hide();
			$("#30-40").hide();
			$("#40-50").hide();
			$("#50").hide();
			$("#popularity").hide();
			$("#plth").hide();
			$("#phtl").hide();
			$("#newarrivals").hide();
	    });
      });