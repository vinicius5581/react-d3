import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
    componentDidMount() {
      this.drawChart();
    }
      
    drawChart() {
        const data = this.props.data;

    //   let w, h;
      
    //   const svg = d3.select("body")
    //   .append("svg")
    //   .attr("width", w)
    //   .attr("height", h)
    //   .style("margin-left", 100);

    const svg = d3
        .select(`#${this.props.id}`)
        .append("svg")
        .attr("width", this.props.width)
        .attr("height", this.props.height);

                    
    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => this.props.height - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green")

    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => this.props.height - (10 * d) - 3)
    }
          
    render(){
      return <div id={this.props.id}></div>
    }
  }
      

export default BarChart;