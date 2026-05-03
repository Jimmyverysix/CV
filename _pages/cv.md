---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
classes: sci-profile-page
redirect_from:
  - /resume
---

{% include base_path %}

## <i class="fas fa-id-card"></i> Personal Information

- **Name**: Yang Jinming
- **Gender**: Male
- **Date of Birth**: July 2003
- **Phone**: 15053817859
- **Email**: yangjinming@std.uestc.edu.cn
- **Political Affiliation**: Member of the Communist Party of China
- **Place of Origin**: Taian, Shandong

## <i class="fas fa-university"></i> Education

### University of Electronic Science and Technology of China
Master of Engineering (2025.09 - Present) (Chengdu, China)

Major: Computer Technology  
Supervisor: <a href="https://faculty.uestc.edu.cn/zhoutao1/zh_CN/index/280538/list/index.htm" target="_blank">Tao Zhou</a>

### Ulster University
Bachelor of Engineering (2024.09 - 2025.06) (Belfast, United Kingdom)

BACHELOR OF ENGINEERING with **first class** honours

### Shaanxi University of Science & Technology
Bachelor of Engineering (2021.09 - 2025.06) (Xi'an, China)

Major: Computer Science and Technology  
Ranking: First in major (1/92) (GPA: 4.05/5.00)

## <i class="fas fa-book"></i> Publications and Patents

### Journal Papers
- **EZYer: A simulacrum of high school with generative agent** (AgentIR, SIGIR 2025 Workshop) - First author and corresponding author  
  <a href="{{ '/files/EZYer A simulacrum of high school with generative agent.pdf' | absolute_url }}" target="_blank">PDF</a> <a href="https://jimmyverysix.github.io/EZYer/" target="_blank">Home Page</a> <a href="https://www.youtube.com/watch?v=NaXvu3mNdtc" target="_blank">Video</a>
- **Simulation Framework for Substation Siting Integrating Load, Land Use, Neighborhood, and Cost Analysis** (SCI Q4) - First author and corresponding author  
  <a href="{{ '/files/Simulation Framework for Substation Siting Integrating Load, Land Use, Neighborhood, and Cost Analysis.pdf' | absolute_url }}" target="_blank">PDF</a>
- **The Real-time High-voltage Switch Position Detection Method** (EI Conference) - First author and corresponding author  
  <a href="{{ '/files/The_Real-Time_High-Voltage_Switch_Position_Detection_Method.pdf' | absolute_url }}" target="_blank">PDF</a>
- **Simulation-Based Machine Learning for Predicting Academic Performance Using Big Data** (SCI Q4) - First author and corresponding author  
  <a href="files/Simulation-Based Machine Learning for Predicting Academic Performance Using Big Data.pdf" target="_blank">PDF</a>
- **Quantifying and Mitigating Self-Preference Bias of LLM Judges** (arXiv: 2604.22891) - First author  
  <a href="https://arxiv.org/pdf/2604.22891" target="_blank">PDF</a> <a href="https://arxiv.org/abs/2604.22891" target="_blank">Home Page</a>
- **Research on Individual Trait Clustering and Development Pathway Adaptation Based on the K-means Algorithm** (arXiv: 2603.22302) - Corresponding author  
  <a href="https://arxiv.org/pdf/2603.22302" target="_blank">PDF</a> <a href="https://arxiv.org/abs/2603.22302" target="_blank">Home Page</a>
- **Modeling Epistemic Uncertainty in Social Perception via Rashomon Set Agents** (arXiv: 2603.20750) - Co-first author  
  <a href="https://arxiv.org/pdf/2603.20750" target="_blank">PDF</a> <a href="https://arxiv.org/abs/2603.20750" target="_blank">Home Page</a>

### Invention Patents
- **Method and System for Generating LaTeX Beamer Teaching Slides Based on Large AI Models** (First Inventor) - Published
- **Track Strength Detection Device and Method** (Third Inventor) - Granted
- **Propeller Torque Detection Device and Method** (Third Inventor) - Published
- **Lighting System and Method for Amphibious Robots** (Third Inventor) - Published
- **Deep Learning-based Visual Segmentation Method and System for Hoisting Sandbag Rupture Detection** (Fourth Inventor) - Published

### Utility Model Patents
- **A Computer Cooling Device Facilitating Installation** (First Inventor) - Granted

### Software Copyrights
- Participated in writing 4 software copyrights related to project technology

## <i class="fas fa-briefcase"></i> Project Experience

### Quantifying and Mitigating Bias in LLM-based Evaluation
This project studies Self-Preference Bias (SPB) in LLM-as-a-Judge systems and develops an automated framework for measuring and mitigating such bias without relying on costly human gold annotations. The work disentangles evaluative bias from generation capability and proposes a structured multi-dimensional evaluation strategy to improve the reliability of automated assessment pipelines used in model alignment, leaderboard construction, and quality control.

<embed src="{{ '/images/framework.pdf' | absolute_url }}" type="application/pdf" width="100%" height="520px" />

- **Quantifying and Mitigating Self-Preference Bias of LLM Judges** (arXiv: 2604.22891) - First author  
  <a href="https://arxiv.org/pdf/2604.22891" target="_blank">PDF</a> <a href="https://arxiv.org/abs/2604.22891" target="_blank">Home Page</a>

### Generative Intelligent Agent for Mathematics Knowledge in Middle School
**Tsinghua University** Institute for AI Industry Research Winter Research Project (2024.12 - 2025.05) (Beijing, China)  
Supervisor: <a href="https://yuanchun-li.github.io/" target="_blank">Yuanchun Li</a>

<!-- 确保图片路径正确 -->
![Project Architecture Diagram]({{ '/images/面向中学教师与学生的数学知识生成式智能体图1.png' | absolute_url }})

As **Project Leader**, constructed a generative intelligent agent (EZYer), with core functions divided into three modules (Teacher Module, Student Module, Controller): The Teacher Module supports one-click generation of LaTeX Beamer lecture notes compliant with the Chinese high school mathematics curriculum, allowing users to customize the insertion of images; The Student Module dynamically generates structured learning notes through multi-role collaborative interaction between "teacher - teaching assistant - top student - struggling student - note taker"; The Controller is responsible for content review of uploaded and generated content to ensure compliance with user requirements.

- Paper "EZYer: A simulacrum of high school with generative agent" has been accepted by AgentIR (SIGIR 2025 Workshop) as first author and corresponding author  
  <!-- 确保 PDF 文件路径正确 -->
  <a href="{{ '/files/EZYer A simulacrum of high school with generative agent.pdf' | absolute_url }}" target="_blank">PDF</a> <a href="https://jimmyverysix.github.io/EZYer/" target="_blank">Home Page</a> <a href="https://www.youtube.com/watch?v=NaXvu3mNdtc" target="_blank">Video</a>

  <!-- 确保图片路径正确 -->
  ![Paper Figure 1]({{ '/images/面向中学教师与学生的数学知识生成式智能体图2.png' | absolute_url }})

### Digital Twin Smart Grid
The smart grid achieves digital transformation and optimization through the integration of digital twin technology with machine learning, real-time cloud communication, and edge computing. As **Project Leader**, responsible for the construction of the digital twin platform, the development of the machine learning model for substation siting (hierarchical clustering, genetic algorithm), and the writing of multiple papers.

<video controls width="50%">
  <source src="{{ '/images/视频1.mp4' | absolute_url }}" type="video/mp4">
  Your browser does not support the video tag.
</video>

- Paper "Simulation Framework for Substation Siting Integrating Load, Land Use, Neighborhood, and Cost Analysis" has been indexed by SCI (Q4) as first author and corresponding author  
  <!-- 确保 PDF 文件路径正确 -->
  <a href="{{ '/files/Simulation Framework for Substation Siting Integrating Load, Land Use, Neighborhood, and Cost Analysis.pdf' | absolute_url }}" target="_blank">PDF</a>
- Paper "The Real-time High-voltage Switch Position Detection Method" has been indexed by EI conference as first author and corresponding author  
  <!-- 确保 PDF 文件路径正确 -->
  <a href="{{ '/files/The_Real-Time_High-Voltage_Switch_Position_Detection_Method.pdf' | absolute_url }}" target="_blank">PDF</a>
- Participated in the writing of 4 software copyrights related to project technology

### Behavioral Feature Prediction Model for Academic Performance
The prediction model constructed a machine learning ensemble model to accurately predict college students' academic performance, achieving efficient student management. As **Project Leader**, engaged in algorithm model design and construction of the integrated model (fusion of K-means clustering, Apriori algorithm, random forest, gradient boosting tree, and XGBoost machine learning algorithms).

- Paper "Simulation-Based Machine Learning for Predicting Academic Performance Using Big Data" has been indexed by SCI (Q4) as first author and corresponding author  
  <a href="files/Simulation-Based Machine Learning for Predicting Academic Performance Using Big Data.pdf" target="_blank">PDF</a>
- **Research on Individual Trait Clustering and Development Pathway Adaptation Based on the K-means Algorithm** (arXiv: 2603.22302) - Corresponding author  
  <a href="https://arxiv.org/pdf/2603.22302" target="_blank">PDF</a> <a href="https://arxiv.org/abs/2603.22302" target="_blank">Home Page</a>

## <i class="fas fa-trophy"></i> Awards and Honors

A total of over 40 awards have been won, with some as follows:

### National Awards:
- 2023.10 National Funding for College Students' Innovation and Entrepreneurship Training Program
- 2024.10 National Funding for College Students' Innovation and Entrepreneurship Training Program
- 2023.12 Bronze Medal in the Sixth China "Internet+" Ecological Environment Innovation and Entrepreneurship Competition
- 2022.05 Merit Award in the Fifth China "Internet+" Ecological Environment Innovation and Entrepreneurship Competition
- 2024.11 Third Prize in the National College Students' Digital Media Technology Works and Creativity Competition
- 2025.05 S Award in the American College Students' Mathematical Modeling Competition (Student Advisor)
- 2025.11 Silver Prize in the 6th National College Student Algorithm Design and Programming Challenge

### Provincial and Ministerial Awards:
- 2023.07 Silver Medal in the Ninth "Internet+" College Students' Innovation and Entrepreneurship Competition
- 2024.11 Second Prize in the Shaanxi Province Regional Competition of the National College Students' Digital Media Technology Works and Creativity Competition
- 2024.06 Second Prize in the Northwest Regional Competition of the China College Students' Computer Design Competition
- 2023.05 Third Prize in the Northwest Regional Competition of the China College Students' Computer Design Competition
- 2025.05 Third Prize in the Northwest Regional Competition of the China College Students' Computer Design Competition
- 2023.12 Second Prize in the Shaanxi Province College Students' Industrial Design Competition

## <i class="fas fa-award"></i> Scholarships

- 2022.09 **National Scholarship** for Undergraduate Students (**First in the entire college**)
- 2025.05 <a href="https://mp.weixin.qq.com/s/RUU_IPnF5o2ajlXkcts0LA" target="_blank">**Zhi Cheng Zhi Bo Quan You Scholarship**</a> of Shaanxi University of Science & Technology (**First in the entire university**)  
- 2025.05 First-class Academic Scholarship of Shaanxi University of Science & Technology
- 2024.05 First-class Academic Scholarship of Shaanxi University of Science & Technology
- 2025.05 Outstanding Student Cadre Scholarship of Shaanxi University of Science & Technology
- 2024.05 Outstanding Student Cadre Scholarship of Shaanxi University of Science & Technology

## <i class="fas fa-briefcase"></i> Internship Experience

### Isoftstone Information Technology (Group) Co.,Ltd. Xi'an Branch
Development Intern (2024.05 - 2024.06) (Xi'an, China)

Engaged in learning about HarmonyOS system development and life sign monitoring instrument system development work

### Shaanxi Han Tang Zhongtian Information Technology Co., Ltd.
Product Intern (2024.08 - 2025.05) (Xi'an, China)

Engaged in AI tool development, AI tool workflow product development, and testing the application of new AI tools in generating new media content

## <i class="fas fa-user"></i> Other Experiences

### Student Cadre Experience:
- Served as Deputy Secretary of the College Party Branch, Deputy Secretary of the College Youth League (Student), Head of the Youth League Sci-Tech Department, and Class Monitor during the four years of undergraduate study

### Peer Review Experience:
- Serving as reviewer for journals and conferences such as Scientific Data, IJCNN, etc.

### Practical Experience:
- Legal Representative of Zhixian Computer Science and Technology (Taian) Co., Ltd.
- Collaborative Developer of Programmer's Inn
- HarmonyOS Application Developer Advanced Certification
