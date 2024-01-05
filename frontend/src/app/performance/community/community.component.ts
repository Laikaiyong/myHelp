import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
import * as d3 from "d3";
import { parse } from 'node-html-parser';

interface Data {
  date: Date | null;
  price: number;
}

interface Line {
  name: string;
  values: Data[];
}
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.createCourseLineChart();
    // this.createJobLineChart();
    // this.createApplicationLineChart();
    this.renderJupyter();
  }

  performanceKPI = [
    {
      icon: "star-outline",
      title: "TOTAL POINTS",
      subtitle: "100,000,000"
    },
    {
      icon: "book-outline",
      title: "TOTAL COURSE COMPLETION",
      subtitle: "85%"
    },
    {
      icon: "send-outline",
      title: "TOTAL PASSED ASSESSMENT",
      subtitle: "5000"
    },
  ]

  performanceKPI1 = [
    {
      icon: "star-outline",
      title: "TOTAL JOB APPLICATION",
      subtitle: "100,000"
    },
    {
      icon: "book-outline",
      title: "HIRING RATE",
      subtitle: "80%"
    },
  ]

  performanceKPI2 = [
    {
      icon: "pencil-outline",
      title: "TOTAL TRAINING APPLICATION",
      subtitle: "60,000"
    },
    {
      icon: "pencil-outline",
      title: "TOTAL GRANT APPLICATION",
      subtitle: "50,000"
    },
    {
      icon: "bulb-outline",
      title: "TOTAL SCHOLARSHIP APPLICATION",
      subtitle: "60,000"
    },
  ]
  private createCourseLineChart() {
    const parseDate = d3.timeParse("%Y-%m");

    const data: Line[] = [
      {
        name: "NAFTA",
        values: [
          { date: "2020-01", price: 0 },
          { date: "2020-02", price: 500 },
          { date: "2020-03", price: 1500 },
          { date: "2020-04", price: 3000 },
          { date: "2020-05", price: 3500 },
          { date: "2020-06", price: 4500 },
          { date: "2020-07", price: 4000 },
          { date: "2020-08", price: 4250 },
          { date: "2020-09", price: 5000 },
          { date: "2020-10", price: 3500 },
          { date: "2020-11", price: 4000 },
          { date: "2020-12", price: 4500 }
        ].map((line) => {
          const date = parseDate(line.date);
  
          return {
            date: date,
            price: line.price
          };
        })
      },
      {
        name: "Europe",
        values: [
          { date: "2020-01", price: 0 },
          { date: "2020-02", price: 400 },
          { date: "2020-03", price: 1200 },
          { date: "2020-04", price: 1700 },
          { date: "2020-05", price: 2100 },
          { date: "2020-06", price: 3500 },
          { date: "2020-07", price: 3000 },
          { date: "2020-08", price: 3250 },
          { date: "2020-09", price: 4500 },
          { date: "2020-10", price: 2200 },
          { date: "2020-11", price: 1300 },
          { date: "2020-12", price: 600 }
        ].map((line) => {
          const date = parseDate(line.date);
  
          return {
            date: date,
            price: line.price
          };
        })
      }
    ];
    const svg = d3.select("#courseLineChart");
    const width = 500;
    const height = 300;
    const margin = 20;
    const duration = 250;
    // const tooltip = { width: 100, height: 100, x: 10, y: -30 };
  
    const lineOpacity = "1";
    const lineOpacityHover = "0.85";
    const otherLinesOpacityHover = "0.1";
    const lineStroke = "3.5";
    const lineStrokeHover = "5";

    const circleOpacity = "0.85";
    const circleOpacityOnLineHover = "0.85";
    const circleRadius = 5;
    const circleRadiusHover = 6;
  
    /* Scale */
    const [minX, maxX]: [Date | undefined, Date | undefined] = d3.extent(data[0].values, (d) => d.date);
  
    const xScale = d3
      .scaleTime()
      .domain([minX!, maxX!])
      .range([0, width - margin]);
  
    const [minY, maxY] = d3.extent(data[0].values, (d) => d.price);
  
    const yScale = d3
      .scaleLinear()
      .domain([minY!, maxY!])
      .range([height - margin, 0]);
  
    /* Add SVG */
    svg
      .attr("width", width + margin + "px")
      .attr("height", height + margin + "px")
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);
  
    const xAxis = d3
      .axisBottom(xScale)
      .tickSize(height - margin)
      .tickSizeOuter(0)
      .tickFormat(d3.timeFormat("%b") as unknown as (dv: number | { valueOf(): number; }, i: number) => string)
      .tickPadding(15);
  
    const yAxis = d3
      .axisLeft(yScale)
      .tickSize(margin - width)
      .tickSizeOuter(0)
      .ticks(12)
      .tickPadding(20);
  
    // Add the X Axis
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(${margin}, ${margin})`)
      .attr("font-weight", "100")
      .attr("font-family", '"Roboto", "sans-serif"')
      .call(xAxis);
  
    // Add the Y Axis
    svg
      .append("g")
      .attr("class", "y axis")
      .attr("transform", `translate(${margin}, ${margin})`)
      .attr("font-weight", "100")
      .attr("font-family", '"Roboto", "sans-serif"')
      .call(yAxis)
      .append("text")
      .attr("y", 15)
      .attr("transform", "rotate(-90)");
  
    /* Add line into SVG */
    const line = d3
      .line<Data>()
      .x((d) => xScale(d.date!))
      .y((d) => yScale(d.price));
  
    const lines = svg
      .append("g")
      .attr("class", "lines")
      .attr("transform", `translate(${margin}, ${margin})`);
  
    // draws out line and different points
    lines
      .selectAll("line-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "line-group")
      .on("mouseover", function (_e: MouseEvent, d) {
        svg
          .append("text")
          .attr("class", "title-text")
          .style("fill", "#33BBFF")
          .text(d.name)
          .attr("text-anchor", "middle")
          .attr("x", (width - margin) / 2)
          .attr("y", 70);
      })
      .on("mouseout", function (d: Line) {
        svg.select(".title-text").remove();
      })
      .append("path")
      .attr("class", "line")
      .attr("d", (d) => line(d.values))
      // line color that connects dots
      .style("stroke", "#33BBFF")
      .style("fill", "none")
      .style("opacity", lineOpacity)
      .on("mouseover", function () {
        d3.selectAll(".line").style("opacity", otherLinesOpacityHover);
        d3.selectAll(".circle").style("opacity", circleOpacityOnLineHover);
        d3.select(this)
          .style("opacity", lineOpacityHover)
          .style("stroke-width", lineStrokeHover)
          .style("cursor", "pointer");
      })
      .on("mouseout", function () {
        d3.selectAll(".line").style("opacity", lineOpacity);
        d3.selectAll(".circle").style("opacity", circleOpacity);
        d3.select(this).style("stroke-width", lineStroke).style("cursor", "none");
      });
  
    // /* Add circles in the line */
    lines
      .selectAll("circle-group")
      .data(data)
      .enter()
      .append("g")
      .style("fill", "#33BBFF")
      .selectAll("circle")
      .data((d: Line) => d.values)
      .enter()
      .append("g")
      .attr("class", "circle")
      .on("mouseover", function (_e: MouseEvent, d) {
        // display amount on hovering of points
        d3.select<SVGGElement, Data>(this)
          .style("cursor", "pointer")
          .append("text")
          .attr("class", "text")
          .text(`${d.price}`)
          .attr("x", (d) => xScale(d.date!) + 5)
          .attr("y", (d) => yScale(d.price) - 10);
      })
      .on("mouseout", function () {
        d3.select(this)
          .style("cursor", "none")
          .transition()
          .duration(duration)
          .selectAll(".text")
          .remove();
      })
      .append("circle")
      .attr("cx", (d) => xScale(d.date!))
      .attr("cy", (d) => yScale(d.price))
      .attr("r", circleRadius)
      .style("opacity", circleOpacity)
      .on("mouseover", function () {
        d3.select(this)
          .transition()
          .duration(duration)
          .attr("r", circleRadiusHover);
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(duration).attr("r", circleRadius);
      });
  }

  private createJobLineChart() {
    const parseDate = d3.timeParse("%Y-%m");

    const data: Line[] = [
      {
        name: "NAFTA",
        values: [
          { date: "2020-01", price: 0 },
          { date: "2020-02", price: 500 },
          { date: "2020-03", price: 1500 },
          { date: "2020-04", price: 3000 },
          { date: "2020-05", price: 3500 },
          { date: "2020-06", price: 4500 },
          { date: "2020-07", price: 4000 },
          { date: "2020-08", price: 4250 },
          { date: "2020-09", price: 5000 },
          { date: "2020-10", price: 3500 },
          { date: "2020-11", price: 4000 },
          { date: "2020-12", price: 4500 }
        ].map((line) => {
          const date = parseDate(line.date);
  
          return {
            date: date,
            price: line.price
          };
        })
      },
      {
        name: "Europe",
        values: [
          { date: "2020-01", price: 0 },
          { date: "2020-02", price: 400 },
          { date: "2020-03", price: 1200 },
          { date: "2020-04", price: 1700 },
          { date: "2020-05", price: 2100 },
          { date: "2020-06", price: 3500 },
          { date: "2020-07", price: 3000 },
          { date: "2020-08", price: 3250 },
          { date: "2020-09", price: 4500 },
          { date: "2020-10", price: 2200 },
          { date: "2020-11", price: 1300 },
          { date: "2020-12", price: 600 }
        ].map((line) => {
          const date = parseDate(line.date);
  
          return {
            date: date,
            price: line.price
          };
        })
      }
    ];
    const svg = d3.select("#jobLineChart");
    const width = 500;
    const height = 300;
    const margin = 20;
    const duration = 250;
    // const tooltip = { width: 100, height: 100, x: 10, y: -30 };
  
    const lineOpacity = "1";
    const lineOpacityHover = "0.85";
    const otherLinesOpacityHover = "0.1";
    const lineStroke = "3.5";
    const lineStrokeHover = "5";

    const circleOpacity = "0.85";
    const circleOpacityOnLineHover = "0.85";
    const circleRadius = 5;
    const circleRadiusHover = 6;
  
    /* Scale */
    const [minX, maxX]: [Date | undefined, Date | undefined] = d3.extent(data[0].values, (d) => d.date);
  
    const xScale = d3
      .scaleTime()
      .domain([minX!, maxX!])
      .range([0, width - margin]);
  
    const [minY, maxY] = d3.extent(data[0].values, (d) => d.price);
  
    const yScale = d3
      .scaleLinear()
      .domain([minY!, maxY!])
      .range([height - margin, 0]);
  
    /* Add SVG */
    svg
      .attr("width", width + margin + "px")
      .attr("height", height + margin + "px")
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);
  
    const xAxis = d3
      .axisBottom(xScale)
      .tickSize(height - margin)
      .tickSizeOuter(0)
      .tickFormat(d3.timeFormat("%b") as unknown as (dv: number | { valueOf(): number; }, i: number) => string)
      .tickPadding(15);
  
    const yAxis = d3
      .axisLeft(yScale)
      .tickSize(margin - width)
      .tickSizeOuter(0)
      .ticks(12)
      .tickPadding(20);
  
    // Add the X Axis
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(${margin}, ${margin})`)
      .attr("font-weight", "100")
      .attr("font-family", '"Roboto", "sans-serif"')
      .call(xAxis);
  
    // Add the Y Axis
    svg
      .append("g")
      .attr("class", "y axis")
      .attr("transform", `translate(${margin}, ${margin})`)
      .attr("font-weight", "100")
      .attr("font-family", '"Roboto", "sans-serif"')
      .call(yAxis)
      .append("text")
      .attr("y", 15)
      .attr("transform", "rotate(-90)");
  
    /* Add line into SVG */
    const line = d3
      .line<Data>()
      .x((d) => xScale(d.date!))
      .y((d) => yScale(d.price));
  
    const lines = svg
      .append("g")
      .attr("class", "lines")
      .attr("transform", `translate(${margin}, ${margin})`);
  
    // draws out line and different points
    lines
      .selectAll("line-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "line-group")
      .on("mouseover", function (_e: MouseEvent, d) {
        svg
          .append("text")
          .attr("class", "title-text")
          .style("fill", "#eb4034")
          .text(d.name)
          .attr("text-anchor", "middle")
          .attr("x", (width - margin) / 2)
          .attr("y", 70);
      })
      .on("mouseout", function (d: Line) {
        svg.select(".title-text").remove();
      })
      .append("path")
      .attr("class", "line")
      .attr("d", (d) => line(d.values))
      // line color that connects dots
      .style("stroke", "#eb4034")
      .style("fill", "none")
      .style("opacity", lineOpacity)
      .on("mouseover", function () {
        d3.selectAll(".line").style("opacity", otherLinesOpacityHover);
        d3.selectAll(".circle").style("opacity", circleOpacityOnLineHover);
        d3.select(this)
          .style("opacity", lineOpacityHover)
          .style("stroke-width", lineStrokeHover)
          .style("cursor", "pointer");
      })
      .on("mouseout", function () {
        d3.selectAll(".line").style("opacity", lineOpacity);
        d3.selectAll(".circle").style("opacity", circleOpacity);
        d3.select(this).style("stroke-width", lineStroke).style("cursor", "none");
      });
  
    // /* Add circles in the line */
    lines
      .selectAll("circle-group")
      .data(data)
      .enter()
      .append("g")
      .style("fill", "#33BBFF")
      .selectAll("circle")
      .data((d: Line) => d.values)
      .enter()
      .append("g")
      .attr("class", "circle")
      .on("mouseover", function (_e: MouseEvent, d) {
        // display amount on hovering of points
        d3.select<SVGGElement, Data>(this)
          .style("cursor", "pointer")
          .append("text")
          .attr("class", "text")
          .text(`${d.price}`)
          .attr("x", (d) => xScale(d.date!) + 5)
          .attr("y", (d) => yScale(d.price) - 10);
      })
      .on("mouseout", function () {
        d3.select(this)
          .style("cursor", "none")
          .transition()
          .duration(duration)
          .selectAll(".text")
          .remove();
      })
      .append("circle")
      .attr("cx", (d) => xScale(d.date!))
      .attr("cy", (d) => yScale(d.price))
      .attr("r", circleRadius)
      .style("opacity", circleOpacity)
      .on("mouseover", function () {
        d3.select(this)
          .transition()
          .duration(duration)
          .attr("r", circleRadiusHover);
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(duration).attr("r", circleRadius);
      });
  }

private createApplicationLineChart() {
    const parseDate = d3.timeParse("%Y-%m");

    const data: Line[] = [
      {
        name: "NAFTA",
        values: [
          { date: "2020-01", price: 0 },
          { date: "2020-02", price: 500 },
          { date: "2020-03", price: 1500 },
          { date: "2020-04", price: 3000 },
          { date: "2020-05", price: 3500 },
          { date: "2020-06", price: 4500 },
          { date: "2020-07", price: 4000 },
          { date: "2020-08", price: 4250 },
          { date: "2020-09", price: 5000 },
          { date: "2020-10", price: 3500 },
          { date: "2020-11", price: 4000 },
          { date: "2020-12", price: 4500 }
        ].map((line) => {
          const date = parseDate(line.date);
  
          return {
            date: date,
            price: line.price
          };
        })
      },
      {
        name: "Europe",
        values: [
          { date: "2020-01", price: 0 },
          { date: "2020-02", price: 400 },
          { date: "2020-03", price: 1200 },
          { date: "2020-04", price: 1700 },
          { date: "2020-05", price: 2100 },
          { date: "2020-06", price: 3500 },
          { date: "2020-07", price: 3000 },
          { date: "2020-08", price: 3250 },
          { date: "2020-09", price: 4500 },
          { date: "2020-10", price: 2200 },
          { date: "2020-11", price: 1300 },
          { date: "2020-12", price: 600 }
        ].map((line) => {
          const date = parseDate(line.date);
  
          return {
            date: date,
            price: line.price
          };
        })
      }
    ];
    const svg = d3.select("#applicationLineChart");
    const width = 500;
    const height = 300;
    const margin = 20;
    const duration = 250;
    // const tooltip = { width: 100, height: 100, x: 10, y: -30 };
  
    const lineOpacity = "1";
    const lineOpacityHover = "0.85";
    const otherLinesOpacityHover = "0.1";
    const lineStroke = "3.5";
    const lineStrokeHover = "5";

    const circleOpacity = "0.85";
    const circleOpacityOnLineHover = "0.85";
    const circleRadius = 5;
    const circleRadiusHover = 6;
  
    /* Scale */
    const [minX, maxX]: [Date | undefined, Date | undefined] = d3.extent(data[0].values, (d) => d.date);
  
    const xScale = d3
      .scaleTime()
      .domain([minX!, maxX!])
      .range([0, width - margin]);
  
    const [minY, maxY] = d3.extent(data[0].values, (d) => d.price);
  
    const yScale = d3
      .scaleLinear()
      .domain([minY!, maxY!])
      .range([height - margin, 0]);
  
    /* Add SVG */
    svg
      .attr("width", width + margin + "px")
      .attr("height", height + margin + "px")
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);
  
    const xAxis = d3
      .axisBottom(xScale)
      .tickSize(height - margin)
      .tickSizeOuter(0)
      .tickFormat(d3.timeFormat("%b") as unknown as (dv: number | { valueOf(): number; }, i: number) => string)
      .tickPadding(15);
  
    const yAxis = d3
      .axisLeft(yScale)
      .tickSize(margin - width)
      .tickSizeOuter(0)
      .ticks(12)
      .tickPadding(20);
  
    // Add the X Axis
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(${margin}, ${margin})`)
      .attr("font-weight", "100")
      .attr("font-family", '"Roboto", "sans-serif"')
      .call(xAxis);
  
    // Add the Y Axis
    svg
      .append("g")
      .attr("class", "y axis")
      .attr("transform", `translate(${margin}, ${margin})`)
      .attr("font-weight", "100")
      .attr("font-family", '"Roboto", "sans-serif"')
      .call(yAxis)
      .append("text")
      .attr("y", 15)
      .attr("transform", "rotate(-90)");
  
    /* Add line into SVG */
    const line = d3
      .line<Data>()
      .x((d) => xScale(d.date!))
      .y((d) => yScale(d.price));
  
    const lines = svg
      .append("g")
      .attr("class", "lines")
      .attr("transform", `translate(${margin}, ${margin})`);
  
    // draws out line and different points
    lines
      .selectAll("line-group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "line-group")
      .on("mouseover", function (_e: MouseEvent, d) {
        svg
          .append("text")
          .attr("class", "title-text")
          .style("fill", "#d634eb")
          .text(d.name)
          .attr("text-anchor", "middle")
          .attr("x", (width - margin) / 2)
          .attr("y", 70);
      })
      .on("mouseout", function (d: Line) {
        svg.select(".title-text").remove();
      })
      .append("path")
      .attr("class", "line")
      .attr("d", (d) => line(d.values))
      // line color that connects dots
      .style("stroke", "#d634eb")
      .style("fill", "none")
      .style("opacity", lineOpacity)
      .on("mouseover", function () {
        d3.selectAll(".line").style("opacity", otherLinesOpacityHover);
        d3.selectAll(".circle").style("opacity", circleOpacityOnLineHover);
        d3.select(this)
          .style("opacity", lineOpacityHover)
          .style("stroke-width", lineStrokeHover)
          .style("cursor", "pointer");
      })
      .on("mouseout", function () {
        d3.selectAll(".line").style("opacity", lineOpacity);
        d3.selectAll(".circle").style("opacity", circleOpacity);
        d3.select(this).style("stroke-width", lineStroke).style("cursor", "none");
      });
  
    // /* Add circles in the line */
    lines
      .selectAll("circle-group")
      .data(data)
      .enter()
      .append("g")
      .style("fill", "#33BBFF")
      .selectAll("circle")
      .data((d: Line) => d.values)
      .enter()
      .append("g")
      .attr("class", "circle")
      .on("mouseover", function (_e: MouseEvent, d) {
        // display amount on hovering of points
        d3.select<SVGGElement, Data>(this)
          .style("cursor", "pointer")
          .append("text")
          .attr("class", "text")
          .text(`${d.price}`)
          .attr("x", (d) => xScale(d.date!) + 5)
          .attr("y", (d) => yScale(d.price) - 10);
      })
      .on("mouseout", function () {
        d3.select(this)
          .style("cursor", "none")
          .transition()
          .duration(duration)
          .selectAll(".text")
          .remove();
      })
      .append("circle")
      .attr("cx", (d) => xScale(d.date!))
      .attr("cy", (d) => yScale(d.price))
      .attr("r", circleRadius)
      .style("opacity", circleOpacity)
      .on("mouseover", function () {
        d3.select(this)
          .transition()
          .duration(duration)
          .attr("r", circleRadiusHover);
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(duration).attr("r", circleRadius);
      });
  }


  private async renderJupyter()  {
    const response = await fetch('../../assets/models/Malaysia_Poverty_Heatmap.html');
    const text = await response.text();
    var x = document.getElementById('heatmap');
    x!.innerHTML = text;

    const response1 = await fetch('../../assets/models/Malaysia_Poverty_Indicator_Correlation_aka_Causes_of_Poverty.html');
    const text1 = await response1.text();
    var y = document.getElementById('correlation');
    y!.innerHTML = text1;

  };





  // lineChart = new Chart({
  //   chart: {
  //     type: 'line'
  //   },
  //   title: {
  //     text: 'Overall Course Performance'
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   series: [
  //     {
  //       name: 'Total Course Commencement',
  //       data: [10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
  //     },
  //     {
  //       name: 'Total Course Completion',
  //       data: [5, 8, 12, 15, 20, 25, 18, 14, 10, 6, 3]
  //     },
  //     {
  //       name: 'Total Points',
  //       data: [15, 10, 8, 14, 25, 22, 30, 18, 12, 9, 5]
  //     }
  //   ]
}
