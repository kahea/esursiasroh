
function chart_amplitude(div, data) {

  var container = d3.select('#'+div);
  var div = div;
  var data = JSON.parse(data);
  var width = $('#'+div).width();
  var height = $('#'+div).height();
  var data_max = d3.max(data);
  var data_min = d3.min(data);
  var padding = { top: 20, right: 20, bottom: 20, left: 40 };
  var padding_x = padding.left + padding.right;
  var padding_y = padding.top + padding.bottom;
  var plot_width = width - padding_x;
  var plot_height = height - padding_y;

  xscale = d3.scale.linear()
  	.range([0, plot_width])
  	.domain([0, data.length]);

  yscale = d3.scale.linear()
  	.range([plot_height, 0])
  	.domain([data_min, data_max]);

  xaxis = d3.svg.axis()
  	.scale(xscale)
  	.orient('bottom')
  	.ticks(data.length/2);

  yaxis = d3.svg.axis()
  	.scale(yscale)
  	.orient('left');

  svg = container
    .append('svg')
      .attr({
      	width: width,
     		height: height,
     		transform: "translate(" + padding.left + "," + padding.top + ")"
     	});
    // .append('g')
      // .attr('transform', "translate(" + padding_x +  ")");

  svg.selectAll('circle')
  	.data(data)
  	.enter()
  	.append('circle')
    .style('fill', 'steelblue')
  	.attr({
  		cx: function(d, i) { return xscale(i) },
  		cy: function(d) { return (yscale(d) * 1) },
  		r: 3,
  	})

  svg.append('g')
  	.attr({
  		class: 'axis',
  		'stroke-width': 1,
  		transform: "translate(0," + (plot_height/2) + ")",
      ticks: 2
  	})
  	.call(xaxis);

  svg.selectAll('.tick')
  	.each(function(d) {
  		if (d === 0) { this.remove() };
  	});

  svg.append('g')
  	.attr({
  		class: 'axis',
  		'stroke-width': 1,
  	})
  	.call(yaxis);

  for (i in data) {
    svg.append('line')
      .style('stroke', 'black')
      .attr({
        x1: xscale(i),
        y1: (height/2) - padding.top,
        x2: xscale(i),
        y2: yscale(data[i]),
      })
  }

}

function chart_magnitude(div, data) {

  var container = d3.select('#'+div);
  var div = div;
  var data = JSON.parse(data);
  var width = $('#'+div).width();
  var height = $('#'+div).height();
  var data_max = d3.max(data);
  var data_min = d3.min(data);
  var padding = { top: 20, right: 20, bottom: 20, left: 40 };
  var padding_x = padding.left + padding.right;
  var padding_y = padding.top + padding.bottom;
  var plot_width = width - padding_x;
  var plot_height = height - padding_y;

  xscale = d3.scale.linear()
    .range([0, plot_width])
    .domain([0, data.length]);

  yscale = d3.scale.linear()
    .range([plot_height, 0])
    .domain([data_min , data_max ]);

  xaxis = d3.svg.axis()
    .scale(xscale)
    .orient('bottom')
    .ticks(data.length/2);

  yaxis = d3.svg.axis()
    .scale(yscale)
    .orient('left');

  svg = container
    .append('svg')
      .attr({
        width: width,
        height: height,
        transform: "translate(" + padding.left + "," + padding.top + ")"
      });
    // .append('g')
      // .attr('transform', "translate(" + padding_x +  ")");

  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .style('fill', 'red')
    .attr({
      cx: function(d, i) { return xscale(i) },
      cy: function(d) { return (yscale(d) * 1) },
      r: 3,
      // fill: red
      // fill: rgb(1,1,1)
    })

  svg.append('g')
    .attr({
      class: 'axis',
      'stroke-width': 1,
      transform: "translate(0," + plot_height + ")",
      ticks: 2
    })
    .call(xaxis);

  svg.selectAll('.tick')
    .each(function(d) {
      if (d === 0) { this.remove() };
    });

  svg.append('g')
    .attr({
      class: 'axis',
      'stroke-width': 1,
    })
    .call(yaxis);

  for (i in data) {
    svg.append('line')
      .style('stroke', 'black')
      .attr({
        x1: xscale(i),
        y1: plot_height,
        x2: xscale(i),
        y2: yscale(data[i]),
      })
  }

}

function chart_sound_graphic(div, width, height, data) {

  // var padding = { top: 20, right: 20, bottom: 20, left: 20 };
  // var padding_x = padding.left + padding.right;
  // var padding_y = padding.top + padding.bottom;
  // var plot_width = width - padding_x;
  // var plot_height = height - padding_y;

  // var width = $('#'+div).width();
  // var height = $('#'+div).height();

  // generate particle points
  

  var particle_density = new Array(); // 0 - 1.0

  spread = 10;

  for (i=0; i < width/spread; i++) {

    frequency = 1;
    rate = width/spread;
    n = i * spread

    console.log( Math.sin(2 * Math.PI * frequency * rate * n ) ) ;
  }

  var particle_data = new Array();
  spread = 0.3;
  for (i = 0; i < height/spread; i++) {
    particle_data[i] = i * spread;
  }

  xscale = d3.scale.linear()
    .range([0, width])
    .domain([0, particle_data.length]);

  yscale = d3.scale.linear()
    .range([0, height])
    .domain([0 , 20 ]);

  svg = d3.select('#'+div)
    .append('svg')
      .attr({
        width: width,
        height: height,
        //transform: "translate(" + padding.left + "," + padding.top + ")"
      });

  svg.selectAll('circle')
    .data(particle_data)
    .enter()
    .append('circle')
    .style('fill', 'black')
    .attr({
      cx: function(d, i) { return  30 },
      cy: function(d) { return yscale(d) },
      r: 3,
      // fill: red
      // fill: rgb(1,1,1)
    })

  console.log(particle_data);
}