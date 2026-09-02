"use client";

import { useEffect } from "react";
import ReactFlow, { Background, Edge, Node, Position, MarkerType, useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  { id: "start", position: { x: 250, y: 0 }, data: { label: "START" }, type: "input", sourcePosition: Position.Bottom, className: "bg-mineral text-ivory border-none rounded-md px-6 py-2 shadow-lg font-mono text-xs" },
  { id: "validate", position: { x: 250, y: 80 }, data: { label: "VALIDATE" }, sourcePosition: Position.Bottom, targetPosition: Position.Top, className: "bg-indigo text-ivory border-none rounded-md px-4 py-2 shadow-lg font-mono text-xs" },
  { id: "condition", position: { x: 250, y: 160 }, data: { label: "CONDITION" }, sourcePosition: Position.Bottom, targetPosition: Position.Top, className: "bg-gold text-indigo border-none rounded-md px-4 py-2 shadow-lg font-mono text-xs font-semibold" },
  { id: "info_req", position: { x: 450, y: 240 }, data: { label: "INFO REQUEST" }, sourcePosition: Position.Bottom, targetPosition: Position.Top, className: "bg-copper text-ivory border-none rounded-md px-4 py-2 shadow-lg font-mono text-xs" },
  { id: "parallel", position: { x: 150, y: 260 }, data: { label: "PARALLEL APPROVALS" }, sourcePosition: Position.Bottom, targetPosition: Position.Top, className: "bg-violet text-ivory border-none rounded-md px-4 py-2 shadow-lg font-mono text-xs" },
  { id: "mentor", position: { x: 0, y: 360 }, data: { label: "MENTOR" }, sourcePosition: Position.Bottom, targetPosition: Position.Top, className: "bg-indigo/80 text-ivory border-none rounded-md px-4 py-2 shadow-lg font-mono text-xs" },
  { id: "year_incharge", position: { x: 150, y: 360 }, data: { label: "YEAR INCHARGE" }, sourcePosition: Position.Bottom, targetPosition: Position.Top, className: "bg-indigo/80 text-ivory border-none rounded-md px-4 py-2 shadow-lg font-mono text-xs" },
  { id: "hod", position: { x: 300, y: 360 }, data: { label: "HOD" }, sourcePosition: Position.Bottom, targetPosition: Position.Top, className: "bg-indigo/80 text-ivory border-none rounded-md px-4 py-2 shadow-lg font-mono text-xs" },
  { id: "merge", position: { x: 150, y: 460 }, data: { label: "MERGE" }, sourcePosition: Position.Bottom, targetPosition: Position.Top, className: "bg-violet text-ivory border-none rounded-md px-6 py-2 shadow-lg font-mono text-xs" },
  { id: "complete", position: { x: 150, y: 560 }, data: { label: "COMPLETED" }, type: "output", targetPosition: Position.Top, className: "bg-mineral text-ivory border-none rounded-md px-6 py-2 shadow-lg font-mono text-xs" },
];

const defaultEdgeOptions = {
  type: "smoothstep",
  animated: false,
  style: { stroke: "rgba(255,255,255,0.1)", strokeWidth: 2, transition: "stroke 0.3s, opacity 0.3s" },
  markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(255,255,255,0.1)" },
};

const initialEdges: Edge[] = [
  { id: "e1", source: "start", target: "validate", ...defaultEdgeOptions },
  { id: "e2", source: "validate", target: "condition", ...defaultEdgeOptions },
  { id: "e3", source: "condition", target: "parallel", label: "TRUE", ...defaultEdgeOptions },
  { id: "e4", source: "condition", target: "info_req", label: "FALSE", ...defaultEdgeOptions },
  { id: "e5", source: "info_req", target: "validate", label: "RESUBMIT", ...defaultEdgeOptions },
  { id: "e6", source: "parallel", target: "mentor", ...defaultEdgeOptions },
  { id: "e7", source: "parallel", target: "year_incharge", ...defaultEdgeOptions },
  { id: "e8", source: "parallel", target: "hod", ...defaultEdgeOptions },
  { id: "e9", source: "mentor", target: "merge", ...defaultEdgeOptions },
  { id: "e10", source: "year_incharge", target: "merge", ...defaultEdgeOptions },
  { id: "e11", source: "hod", target: "merge", ...defaultEdgeOptions },
  { id: "e12", source: "merge", target: "complete", ...defaultEdgeOptions },
];

export function FlowForgeHeroGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      setEdges((eds) =>
        eds.map((e) => {
          let isActive = false;
          let color = "#7161B5"; // Violet default active

          // Animation Sequence
          if (step === 0 && e.id === "e1") isActive = true;
          if (step === 1 && e.id === "e2") isActive = true;
          if (step === 2 && e.id === "e3") { isActive = true; color = "#8FA9B2"; } // Mineral for TRUE path
          if (step === 3 && ["e6", "e7", "e8"].includes(e.id)) isActive = true; // Parallel execution
          if (step === 4 && ["e9", "e10", "e11"].includes(e.id)) isActive = true; // Merge sync
          if (step === 5 && e.id === "e12") { isActive = true; color = "#C7A45A"; } // Gold for completion

          if (isActive) {
            return {
              ...e,
              animated: true,
              style: { stroke: color, strokeWidth: 2 },
              markerEnd: { type: MarkerType.ArrowClosed, color: color },
            };
          }
          return {
            ...e,
            animated: false,
            style: { stroke: "rgba(255,255,255,0.1)", strokeWidth: 1 },
            markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(255,255,255,0.1)" },
          };
        })
      );

      // Node highlights
      setNodes((nds) => 
        nds.map((n) => {
          let highlight = false;
          if (step === 0 && n.id === "start") highlight = true;
          if (step === 1 && n.id === "validate") highlight = true;
          if (step === 2 && n.id === "condition") highlight = true;
          if (step === 3 && n.id === "parallel") highlight = true;
          if (step === 4 && ["mentor", "year_incharge", "hod"].includes(n.id)) highlight = true;
          if (step === 5 && n.id === "merge") highlight = true;
          if (step === 6 && n.id === "complete") highlight = true;

          return {
            ...n,
            style: highlight ? { boxShadow: "0 0 20px rgba(143,169,178,0.5)" } : {},
          };
        })
      );

      step = (step + 1) % 8; // Loops sequence with a small pause at end
    }, 1200);

    return () => clearInterval(interval);
  }, [setEdges, setNodes]);

  return (
    <div className="w-full h-full bg-indigo/80">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        className="touch-none"
      >
        <Background color="#8FA9B2" gap={24} size={1} style={{ opacity: 0.1 }} />
      </ReactFlow>
    </div>
  );
}




