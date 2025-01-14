
import React, { useState } from 'react';

function AISyllabusStatementBuilder() {
const [selections, setSelections] = useState({
generalPolicy: "",
tools: [],
conditions: [],
processes: [],
rationale: "",
consequences: "",
support: "",
positionStatement: "",
});

const generalPolicyOptions = [
"Students are allowed to use AI tools freely as they choose.",
"Students are only allowed to use AI tools in the limited ways described below.",
"Students are not allowed to use AI tools, except when certain conditions are met as described below.",
"Students are never allowed to use AI tools.",
];

const toolsOptions = [
"AI chatbots (e.g., ChatGPT, Google Gemini, Claude, CoPilot).",
"AI image generators (e.g., DALL-E, Midjourney, Stable Diffusion).",
"AI code generators (e.g., CoPilot, Tabnine, Cody).",
"AI audio or music generators (e.g., Amper, AIVA, Soundful).",
];

const conditionsOptions = [
"Only for specified assignments.",
"Only with proper citations and acknowledgment.",
"Only under supervision during class.",
"Only by request and with instructor approval.",
"Only for reflection, studying, and ideation.",
];

const processesOptions = [
"Students must disclose the use of AI in their work, citing the system(s) used.",
"Students must include an author’s statement describing how AI output was reviewed.",
"Students must cite all AI outputs following standard citation guidelines (APA/MLA).",
"Students are responsible for identifying and addressing any inaccurate or biased AI content.",
];

const rationaleOptions = [
"I consider learning to use AI tools an important skill in the discipline.",
"Content in this course is private, so AI tools must be used only with caution.",
"As AI tools evolve, the teaching team needs more time to adapt the course properly.",
];

const consequencesOptions = [
"If a student is suspected of not following this policy, the matter shall be referred to administration.",
"Student work lacking required elements (citations, statements, etc.) shall receive a grade penalty.",
];

const supportOptions = [
"AI use is not required and is entirely optional. Equivalent alternatives are provided.",
"We will go over in class how to access and responsibly use any specified AI tools.",
];

const positionStatements = [
"If you feel pressure in this course, please reach out instead of resorting to chatbots as a shortcut.",
"A major goal for this course is for you to develop your creative voice and style. I want you to be critical of AI.",
"We respect your concerns about privacy; you may opt out of AI usage and request alternative assignments.",
"Generative AI tools come with a responsibility to verify the accuracy and integrity of AI output.",
"Thoughtful and responsible use of generative AI applies to everyone, including me as your instructor.",
];

const handleRadioChange = (category, value) => {
setSelections(prev => ({ ...prev, [category]: value }));
};

const handleCheckboxChange = (category, value) => {
setSelections(prev => {
const currentVals = [...prev[category]];
if (currentVals.includes(value)) {
return { ...prev, [category]: currentVals.filter(item => item !== value) };
} else {
return { ...prev, [category]: [...currentVals, value] };
}
});
};

const generateParagraph = () => {
const {
generalPolicy,
tools,
conditions,
processes,
rationale,
consequences,
support,
positionStatement
} = selections;

clojure
Copy
const sentences = [];

if (generalPolicy) {
  sentences.push(`General policy about AI use in this course: ${generalPolicy}`);
}
if (tools.length > 0) {
  sentences.push(`This policy specifically applies to: ${tools.join(" ")}`);
}
if (conditions.length > 0) {
  sentences.push(`AI tools may be used under the following conditions: ${conditions.join(" ")}`);
}
if (processes.length > 0) {
  sentences.push(`In addition, the following processes are required: ${processes.join(" ")}`);
}
if (rationale) {
  sentences.push(`Rationale: ${rationale}`);
}
if (consequences) {
  sentences.push(`Consequences for non-compliance: ${consequences}`);
}
if (support) {
  sentences.push(`Support resources: ${support}`);
}
if (positionStatement) {
  sentences.push(`Additional statement: ${positionStatement}`);
}

return sentences.join(". ") + ".";
};

return (
<div className="max-w-4xl mx-auto p-4">
<h1 className="text-2xl font-bold mb-4">
AI Syllabus Statement Builder (Sample Web App)
</h1>
<div className="mb-6">
<h2 className="font-semibold mb-2">1. General Policy about AI Use</h2>
{generalPolicyOptions.map((option) => (
<div key={option} className="flex items-center mb-2">
<input
type="radio"
name="generalPolicy"
value={option}
checked={selections.generalPolicy === option}
onChange={() => handleRadioChange("generalPolicy", option)}
className="mr-2"
/>
<label>{option}</label>
</div>
))}
</div>
<div className="mb-6">
<h2 className="font-semibold mb-2">2. The Policy Applies to These AI Tools</h2>
{toolsOptions.map((option) => (
<div key={option} className="flex items-center mb-2">
<input
type="checkbox"
value={option}
checked={selections.tools.includes(option)}
onChange={() => handleCheckboxChange("tools", option)}
className="mr-2"
/>
<label>{option}</label>
</div>
))}
</div>
<div className="mb-6">
<h2 className="font-semibold mb-2">3. Conditions for Using AI Tools</h2>
{conditionsOptions.map((option) => (
<div key={option} className="flex items-center mb-2">
<input
type="checkbox"
value={option}
checked={selections.conditions.includes(option)}
onChange={() => handleCheckboxChange("conditions", option)}
className="mr-2"
/>
<label>{option}</label>
</div>
))}
</div>
<div className="mb-6">
<h2 className="font-semibold mb-2">4. Required Processes for Students</h2>
{processesOptions.map((option) => (
<div key={option} className="flex items-center mb-2">
<input
type="checkbox"
value={option}
checked={selections.processes.includes(option)}
onChange={() => handleCheckboxChange("processes", option)}
className="mr-2"
/>
<label>{option}</label>
</div>
))}
</div>
<div className="mb-6">
<h2 className="font-semibold mb-2">5. Rationale</h2>
{rationaleOptions.map((option) => (
<div key={option} className="flex items-center mb-2">
<input
type="radio"
name="rationale"
value={option}
checked={selections.rationale === option}
onChange={() => handleRadioChange("rationale", option)}
className="mr-2"
/>
<label>{option}</label>
</div>
))}
</div>
<div className="mb-6">
<h2 className="font-semibold mb-2">6. Consequences for Non-compliance</h2>
{consequencesOptions.map((option) => (
<div key={option} className="flex items-center mb-2">
<input
type="radio"
name="consequences"
value={option}
checked={selections.consequences === option}
onChange={() => handleRadioChange("consequences", option)}
className="mr-2"
/>
<label>{option}</label>
</div>
))}
</div>
<div className="mb-6">
<h2 className="font-semibold mb-2">7. Support Resources</h2>
{supportOptions.map((option) => (
<div key={option} className="flex items-center mb-2">
<input
type="radio"
name="support"
value={option}
checked={selections.support === option}
onChange={() => handleRadioChange("support", option)}
className="mr-2"
/>
<label>{option}</label>
</div>
))}
</div>
<div className="mb-6">
<h2 className="font-semibold mb-2">
8. Additional Position or Supportive Statement
</h2>
{positionStatements.map((option) => (
<div key={option} className="flex items-center mb-2">
<input
type="radio"
name="positionStatement"
value={option}
checked={selections.positionStatement === option}
onChange={() => handleRadioChange("positionStatement", option)}
className="mr-2"
/>
<label>{option}</label>
</div>
))}
</div>
<div className="mb-6">
<button
onClick={() => {}}
className="py-2 px-4 bg-blue-600 text-white font-semibold rounded shadow mr-3"
>
Preview Below
</button>
</div>
<div className="p-4 border rounded bg-gray-100">
<p className="font-semibold">Preview of Your Syllabus Statement:</p>
<hr className="my-2" />
<p>{generateParagraph()}</p>
</div>
</div>
);
}

export default AISyllabusStatementBuilder;