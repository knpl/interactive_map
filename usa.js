$(function() {
  var state_map = {
    "AL":{"name":"Alabama","capital":"Montgomery"},
    "AK":{"name":"Alaska","capital":"Juneau"},
    "AZ":{"name":"Arizona","capital":"Phoenix"},
    "AR":{"name":"Arkansas","capital":"Little Rock"},
    "CA":{"name":"California","capital":"Sacramento"},
    "CO":{"name":"Colorado","capital":"Denver"},
    "CT":{"name":"Connecticut","capital":"Hartford"},
    "DE":{"name":"Delaware","capital":"Dover"},
    "FL":{"name":"Florida","capital":"Tallahassee"},
    "GA":{"name":"Georgia","capital":"Atlanta"},
    "HI":{"name":"Hawaii","capital":"Honolulu"},
    "ID":{"name":"Idaho","capital":"Boise"},
    "IL":{"name":"Illinois","capital":"Springfield"},
    "IN":{"name":"Indiana","capital":"Indianapolis"},
    "IA":{"name":"Iowa","capital":"Des Moines"},
    "KS":{"name":"Kansas","capital":"Topeka"},
    "KY":{"name":"Kentucky","capital":"Frankfort"},
    "LA":{"name":"Louisiana","capital":"Baton Rouge"},
    "ME":{"name":"Maine","capital":"Augusta"},
    "MD":{"name":"Maryland","capital":"Annapolis"},
    "MA":{"name":"Massachusetts","capital":"Boston"},
    "MI":{"name":"Michigan","capital":"Lansing"},
    "MN":{"name":"Minnesota","capital":"Saint Paul"},
    "MS":{"name":"Mississippi","capital":"Jackson"},
    "MO":{"name":"Missouri","capital":"Jefferson City"},
    "MT":{"name":"Montana","capital":"Helena"},
    "NE":{"name":"Nebraska","capital":"Lincoln"},
    "NV":{"name":"Nevada","capital":"Carson City"},
    "NH":{"name":"New Hampshire","capital":"Concord"},
    "NJ":{"name":"New Jersey","capital":"Trenton"},
    "NM":{"name":"New Mexico","capital":"Santa Fe"},
    "NY":{"name":"New York","capital":"Albany"},
    "NC":{"name":"North Carolina","capital":"Raleigh"},
    "ND":{"name":"North Dakota","capital":"Bismarck"},
    "OH":{"name":"Ohio","capital":"Columbus"},
    "OK":{"name":"Oklahoma","capital":"Oklahoma City"},
    "OR":{"name":"Oregon","capital":"Salem"},
    "PA":{"name":"Pennsylvania","capital":"Harrisburg"},
    "RI":{"name":"Rhode Island","capital":"Providence"},
    "SC":{"name":"South Carolina","capital":"Columbia"},
    "SD":{"name":"South Dakota","capital":"Pierre"},
    "TN":{"name":"Tennessee","capital":"Nashville"},
    "TX":{"name":"Texas","capital":"Austin"},
    "UT":{"name":"Utah","capital":"Salt Lake City"},
    "VT":{"name":"Vermont","capital":"Montpelier"},
    "VA":{"name":"Virginia","capital":"Richmond"},
    "WA":{"name":"Washington","capital":"Olympia"},
    "WV":{"name":"West Virginia","capital":"Charleston"},
    "WI":{"name":"Wisconsin","capital":"Madison"},
    "WY":{"name":"Wyoming","capital":"Cheyenne"}
  };

  var tt = $("#tooltip");
  var tt_state_name = $("#state_name", tt);
  var tt_state_capital = $("#state_capital", tt);

  function set_tooltip_pos(e) {
      var x = e.clientX;
      var y = e.clientY;
      tt.css({"left": x, "top": y});
  };

  function mouseover() {
   window.onmousemove = set_tooltip_pos;
   var state = state_map[$(this).attr("id")];
   tt_state_name.text(state.name);
   tt_state_capital.text(state.capital);
   tt.css("display", "block");
  };

  function mouseout() {
   window.onmousemove = undefined;
   tt.css("display", "none");
  };

  $("g.state").each(function() {
    var g = $(this);
    g.attr("title", "");
    g.mouseover(mouseover);
    g.mouseout(mouseout);
  });
});
