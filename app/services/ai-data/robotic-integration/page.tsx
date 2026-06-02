"use client";

import React from "react";
import { ServiceDetailTemplate } from "@/components/ui/ServiceDetailTemplate";

export default function RoboticIntegrationPage() {
  return (
    <ServiceDetailTemplate
      categoryName="AI & Data / Subservice"
      title="Cognitive edge &"
      highlightedWord="Robotic Integration"
      subtitle="Integrating neural network models directly with hardware processors, IoT devices, and edge nodes."
      overviewHeading="Deploy cognitive models directly onto device physical hardware"
      overviewDesc1="We build pipelines to run machine learning models on physical edge nodes, robots, and IoT controllers. We specialize in compilation steps, resource usage optimizations, and hardware-accelerated drivers."
      overviewDesc2="Our services connect computer vision systems, robotic controls, and sensory inputs with private neural networks. We optimize execution files to fit tight device memory spaces while maintaining low latencies."
      heroImage="/assets/herocard/insightspage.png"
      benefits={[
        "Edge compilation optimization",
        "Computer vision pipelines",
        "Sensory neural networks",
        "Private device deployments"
      ]}
      capabilities={[
        {
          title: "Edge ML Compilation",
          desc: "Converting large deep learning structures to run on TensorRT or specialized device kernels."
        },
        {
          title: "Computer Vision Nodes",
          desc: "Developing real-time image analysis, object labeling, and path tracking nodes on edge devices."
        },
        {
          title: "Sensory Data Capture",
          desc: "Indexing sensory parameters and cleaning noises before sending data to local classification loops."
        },
        {
          title: "Firmware Communication",
          desc: "Writing low-level hardware drivers to hook up model commands with physical actuators."
        }
      ]}
      techs={[
        {
          name: "C++ / CUDA",
          desc: "Core runtime languages for low-level memory control and fast parallel execution."
        },
        {
          name: "NVIDIA TensorRT",
          desc: "Deep learning optimization engine used to accelerate network evaluations."
        },
        {
          name: "ROS (Robot Operating System)",
          desc: "Specialized middleware layer used to coordinate motor commands and sensor loops."
        },
        {
          name: "Python / PyTorch",
          desc: "High-level training environments used to shape convolutional networks."
        }
      ]}
      process={[
        {
          step: "01",
          title: "Hardware Profile",
          desc: "Evaluate device CPU limits, RAM constraints, and processor capabilities."
        },
        {
          step: "02",
          title: "Model Optimization",
          desc: "Compress neural weights using pruning and quantization matrices."
        },
        {
          step: "03",
          title: "Runtime Compilation",
          desc: "Compile the compressed model using TensorRT or ONNX runtimes."
        },
        {
          step: "04",
          title: "Driver Development",
          desc: "Write ROS message nodes to link model decisions to physical hardware joints."
        },
        {
          step: "05",
          title: "Safety Validation",
          desc: "Conduct simulation trials to test hardware behavior and fail-safe protocols."
        }
      ]}
      metrics={[
        {
          value: "15ms",
          label: "Average inference latency"
        },
        {
          value: "85%",
          label: "Model weight size reduced"
        },
        {
          value: "500+",
          label: "Edge nodes actively deployed"
        }
      ]}
      caseStudyTitle="Autonomous navigation computer vision for warehouse robot systems."
      caseStudyDesc="We engineered a computer vision pipeline running on physical warehouse loader robots. The model performs real-time object tracking and obstacle classification, directing steering mechanisms with an average inference time under 15 milliseconds."
      caseStudyHighlights={[
        "Pruned and quantized a custom object detection model",
        "Integrated with ROS nodes to direct steering commands",
        "Achieved sub-15ms local decision times on NVIDIA edge boards"
      ]}
      faqs={[
        {
          q: "What hardware platforms do you support?",
          a: "We regularly work with NVIDIA Jetson boards, Raspberry Pi controllers, specialized industrial controllers, and ARM Cortex processors."
        },
        {
          q: "How do you handle model updates on edge devices?",
          a: "We construct secure over-the-air (OTA) update pipelines. Devices download compressed model files in background threads, swap them during idle cycles, and run rollback tests if any exceptions are caught."
        }
      ]}
      ctaTitle="Bring intelligence to the"
      ctaHighlight="Edge physical"
      ctaDesc="Get in touch with our robotics architects to discuss edge hardware, model optimization, and safety protocols."
      ctaBtnText="Request Robotics Scoping"
    />
  );
}
