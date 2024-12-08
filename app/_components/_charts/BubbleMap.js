"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const BubbleMap = ({ data }) => {
	const svgRef = useRef();
	const [dimensions, setDimensions] = useState({ width: 800, height: 1000 });

	useEffect(() => {
		const handleResize = () => {
			const parent = svgRef.current.parentNode;
			setDimensions({
				width: parent.clientWidth,
				height: parent.clientHeight,
			});
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Set initial size
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	useEffect(() => {
		const { width, height } = dimensions;

		const svg = d3
			.select(svgRef.current)
			.attr("width", width)
			.attr("height", height);

		const simulation = d3
			.forceSimulation(data.nodes)
			.force(
				"link",
				d3
					.forceLink(data.links)
					.id((d) => d.id)
					.distance(100),
			)
			.force("charge", d3.forceManyBody().strength(-100))
			.force("center", d3.forceCenter(width / 2, height / 2))
			.force("collision", d3.forceCollide().radius(40))
			.on("tick", ticked);

		const link = svg
			.selectAll(".link")
			.data(data.links)
			.join("line")
			.attr("class", "link")
			.attr("stroke", "#ccc")
			.attr("stroke-width", 2);

		const node = svg
			.selectAll(".node")
			.data(data.nodes)
			.join("circle")
			.attr("class", "node")
			.attr("r", 20)
			.attr("fill", (d) => {
				switch (d.group) {
					case "frontend":
						return "#69b3a2";
					case "css":
						return "#ffa600";
					default:
						return "#8884d8";
				}
			})
			.call(drag(simulation));

		const text = svg
			.selectAll(".text")
			.data(data.nodes)
			.join("text")
			.attr("class", "text")
			.attr("dy", 4)
			.attr("text-anchor", "middle")
			.attr("fill", "#fff")
			.text((d) => d.id);

		function ticked() {
			link
				.attr("x1", (d) => d.source.x)
				.attr("y1", (d) => d.source.y)
				.attr("x2", (d) => d.target.x)
				.attr("y2", (d) => d.target.y);

			node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
			text.attr("x", (d) => d.x).attr("y", (d) => d.y);
		}

		function drag(simulation) {
			return d3
				.drag()
				.on("start", (event) => {
					if (!event.active) simulation.alphaTarget(0.3).restart();
					event.subject.fx = event.subject.x;
					event.subject.fy = event.subject.y;
				})
				.on("drag", (event) => {
					event.subject.fx = event.x;
					event.subject.fy = event.y;
				})
				.on("end", (event) => {
					if (!event.active) simulation.alphaTarget(0);
					event.subject.fx = null;
					event.subject.fy = null;
				});
		}
	}, [data]);

	return <svg ref={svgRef}></svg>;
};

export default BubbleMap;