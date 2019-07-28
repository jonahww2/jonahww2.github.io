function myFunction() { /* Introduction */

    var data = [150, 230, 180, 90];
 
    var svg = d3.select("body")
                .append("svg")
                .attr("width", 300)
                .attr("height", 200);
     
    svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr({
        class : "bar",
        width : function(d) {return d;},
        height: "40",
        y : function(d, i) {return i*50 + 10;},
        x : "10"
       });
 }