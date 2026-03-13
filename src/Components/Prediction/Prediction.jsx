import React, { useState } from "react";
import axios from "axios";
import "./Prediction.css";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Prediction() {

const unitStyle = {
position: "absolute",
right: "12px",
top: "50%",
transform: "translateY(-55%)",
color: "#777",
fontSize: "14px",
pointerEvents: "none"
};

const conditionDrugMap = {
"Depression": ["Sertraline","Escitalopram","Citalopram","Venlafaxine","Duloxetine","Lexapro","Zoloft"],
"Major Depressive Disorde": ["Sertraline","Escitalopram","Citalopram","Venlafaxine","Duloxetine"],
"Anxiety": ["Sertraline","Escitalopram","Citalopram","Venlafaxine","Clonazepam"],
"Anxiety and Stress": ["Sertraline","Escitalopram","Clonazepam","Venlafaxine"],
"Generalized Anxiety Disorde": ["Sertraline","Escitalopram","Venlafaxine","Clonazepam"],
"Panic Disorde": ["Clonazepam","Sertraline","Venlafaxine"],
"Social Anxiety Disorde": ["Sertraline","Escitalopram","Venlafaxine"],
"Bipolar Disorde": ["Quetiapine"],
"Insomnia": ["Quetiapine","Clonazepam"],
"Pain": ["Tramadol","Gabapentin"],
"Chronic Pain": ["Tramadol","Gabapentin","Duloxetine"],
"ibromyalgia": ["Duloxetine","Gabapentin","Tramadol"],
"Obesity": ["Phentermine","Bupropion / naltrexone","Contrave"],
"Weight Loss": ["Phentermine","Contrave"],
"Birth Control": [
"Levonorgestrel","Drospirenone / ethinyl estradiol",
"Ethinyl estradiol / levonorgestrel",
"Ethinyl estradiol / norethindrone",
"Ethinyl estradiol / norgestimate",
"Etonogestrel","Implanon","Nexplanon","Skyla","Mirena"
],
"Emergency Contraception": ["Levonorgestrel"],
"Abnormal Uterine Bleeding": ["Medroxyprogesterone","Depo-Provera"],
"Bacterial Vaginitis": ["Metronidazole"],
"Vaginal Yeast Infection": ["Miconazole"],
"Acne": [
"Ethinyl estradiol / norgestimate",
"Drospirenone / ethinyl estradiol"
]
};

const [availableDrugs, setAvailableDrugs] = useState([]);

const [formData, setFormData] = useState({
age:"",
sex:"",
height:"",
weight:"",
blood_pressure:"",
cholesterol:"",
heart_rate:"",
triglycerides:"",
glucose:"",
smoking:"",
diabetes:"",
family_history:"",
alcohol_consumption:"",
physical_activity:"",
sleep_duration:"",
stress_level:"",
condition:"",
drug_name:""
});

const [result,setResult] = useState(null);
const [loading,setLoading] = useState(false);

const [snackbar,setSnackbar] = useState({
open:false,
message:"",
severity:"success"
});

const handleSnackbarClose = ()=>{
setSnackbar({...snackbar,open:false});
};

const handleChange = (e)=>{
const {name,value} = e.target;

if(name==="condition"){
  const drugs = conditionDrugMap[value] || [];
  setAvailableDrugs(drugs);

  setFormData({
    ...formData,
    condition:value,
    drug_name:""
  });

}else{
  setFormData({
    ...formData,
    [name]:value
  });
}

};

const handleSubmit = async (e)=>{
e.preventDefault();

setLoading(true);
setResult(null);

/* EMPTY INPUT VALIDATION */

for(const key in formData){
if(!formData[key]){
setSnackbar({
open:true,
message:"Please enter all inputs.",
severity:"warning"
});
setLoading(false);
return;
}
}

/* BLOOD PRESSURE FORMAT */

const bpPattern = /^\d+\/\d+$/;

if(!bpPattern.test(formData.blood_pressure)){
setSnackbar({
open:true,
message:"Blood pressure must be in format 120/80.",
severity:"warning"
});
setLoading(false);
return;
}

/* NEGATIVE VALUE VALIDATION */

if(
formData.age <=0 ||
formData.height <=0 ||
formData.weight <=0 ||
formData.heart_rate <=0 ||
formData.cholesterol <=0 ||
formData.triglycerides <=0
){
setSnackbar({
open:true,
message:"Values must be positive numbers.",
severity:"warning"
});
setLoading(false);
return;
}

/* ALCHOHAL CONSUMPTION RANGE VALIDATION */

if(formData.alcohol_consumption < 0 || formData.alcohol_consumption > 5){
setSnackbar({
open:true,
message:"Alcohol consumption values must be between 0 and 5.",
severity:"warning"
});
setLoading(false);
return;
}

try{

const response = await axios.post(
"http://127.0.0.1:8000/api/predict/",
formData,
{timeout:10000}
);

setResult(response.data);

setSnackbar({
open:true,
message:"Prediction successful.",
severity:"success"
});

}catch(err){

if(err.code==="ERR_NETWORK"){
setSnackbar({
open:true,
message:"Server not connected.",
severity:"error"
});
}
else{
setSnackbar({
open:true,
message:"Prediction failed (backend issue).",
severity:"error"
  });
}}
setLoading(false);
};


const MenuPropsUp = {
  anchorOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
};


return (

<div className="prediction-page">

{/* FLOATING BACKGROUND BUBBLES */}

<div className="bubbles">
{Array.from({ length: 20 }).map((_, i) => (
  <span key={i}></span>
))}
</div>

<div className="prediction-container">

<h1 className="page-title">CuraPredict AI Health Risk Analysis</h1>

<div className="prediction-layout">

<form className="prediction-form" onSubmit={handleSubmit}>

<h2>Patient Information</h2>

<div className="form-grid">

{/* AGE */}
<div style={{position:"relative"}}>
<TextField label="Age" name="age" variant="outlined" size="small" onChange={handleChange} fullWidth sx={{"& input":{paddingRight:"40px"}}}/>
<span style={unitStyle}>yrs</span>
</div>
{/* GENDER */}
<FormControl fullWidth size="small">
  <InputLabel id="gender-label">Gender</InputLabel>

  <Select
    labelId="gender-label"
    name="sex"
    value={formData.sex}
    label="Gender"
    onChange={handleChange}
    input={<OutlinedInput label="Gender" />}
  >
    <MenuItem value="Male">Male</MenuItem>
    <MenuItem value="Female">Female</MenuItem>
  </Select>
</FormControl>

{/* HEIGHT */}
<div style={{position:"relative"}}>
<TextField label="Height" name="height" variant="outlined" size="small" onChange={handleChange} fullWidth sx={{"& input":{paddingRight:"40px"}}}/>
<span style={unitStyle}>cm</span>
</div>

{/* WEIGHT */}
<div style={{position:"relative"}}>
<TextField label="Weight" name="weight" variant="outlined" size="small" onChange={handleChange} fullWidth sx={{"& input":{paddingRight:"40px"}}}/>
<span style={unitStyle}>kg</span>
</div>

{/* BLOOD PRESSURE */}
<div style={{position:"relative"}}>
<TextField label="Blood Pressure" name="blood_pressure" variant="outlined" size="small" placeholder="120/80" onChange={handleChange} fullWidth/>
<span style={unitStyle}>mm/Hg</span>
</div>

{/* CHOLESTEROL */}
<div style={{ position: "relative" }}>

<TextField
  label="Cholesterol"
  name="cholesterol"
  variant="outlined"
  size="small"
  onChange={handleChange}
  fullWidth
  sx={{ "& input": { paddingRight: "95px" } }}
/>

<span style={{ ...unitStyle, right: "32px" }}>mg/dL</span>

<Tooltip title="Cholesterol is a fat-like substance in the blood. High levels increase heart disease risk.">
  <InfoOutlinedIcon
    style={{
      position: "absolute",
      right: "6px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#777"
    }}
  />
</Tooltip>

</div>

{/* HEART RATE */}
<div style={{position:"relative"}}>
<TextField label="Heart Rate" name="heart_rate" variant="outlined" size="small" onChange={handleChange} fullWidth sx={{"& input":{paddingRight:"45px"}}}/>
<span style={unitStyle}>bpm</span>
</div>

{/* TRIGLYCERIDES */}
<div style={{ position: "relative" }}>

<TextField
  label="Triglycerides"
  name="triglycerides"
  variant="outlined"
  size="small"
  onChange={handleChange}
  fullWidth
  sx={{ "& input": { paddingRight: "95px" } }}
/>

<span style={{ ...unitStyle, right: "34px" }}>mg/dL</span>

<Tooltip title="Triglycerides are fats in the blood. High levels can increase the risk of heart disease. Normal level: below 150 mg/dL.">
  <InfoOutlinedIcon
    style={{
      position: "absolute",
      right: "6px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#777"
    }}
  />
</Tooltip>

</div>

{/* GLUCOSE */}
<div style={{ position: "relative" }}>

<TextField
  label="Glucose"
  name="glucose"
  variant="outlined"
  size="small"
  onChange={handleChange}
  fullWidth
  sx={{ "& input": { paddingRight: "95px" } }}
/>

<span style={{ ...unitStyle, right: "34px" }}>mg/dL</span>

<Tooltip title="Glucose measures blood sugar level. Normal fasting level: 70–100 mg/dL.">
  <InfoOutlinedIcon
    style={{
      position: "absolute",
      right: "6px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#777"
    }}
  />
</Tooltip>

</div>

{/* SMOKING */}
<FormControl fullWidth size="small">
  <InputLabel id="smoking-label">Smoking</InputLabel>

  <Select
    labelId="smoking-label"
    name="smoking"
    value={formData.smoking}
    label="Smoking"
    onChange={handleChange}
    input={<OutlinedInput label="Smoking" />}
  >
    <MenuItem value="Yes">Yes</MenuItem>
    <MenuItem value="No">No </MenuItem>
  </Select>
</FormControl>

{/* DIABETES */}
<FormControl fullWidth size="small">
  <InputLabel id="diabetes-label">Diabetes</InputLabel>

  <Select
    labelId="diabetes-label"
    name="diabetes"
    value={formData.diabetes}
    label="Diabetes"
    onChange={handleChange}
    input={<OutlinedInput label="Diabetes" />}
  >
    <MenuItem value="Yes">Yes</MenuItem>
    <MenuItem value="No">No </MenuItem>
  </Select>
</FormControl>

{/* FAMILY HISTORY */}
<FormControl fullWidth size="small">
  <InputLabel id="family-label">Family History</InputLabel>

  <Select
    labelId="family-label"
    name="family_history"
    value={formData.family_history}
    label="Family History"
    onChange={handleChange}
    input={<OutlinedInput label="Family History" />}
  >
    <MenuItem value="Yes">Yes</MenuItem>
    <MenuItem value="No">No </MenuItem>
  </Select>
</FormControl>

{/* ALCOHOL */}
<div style={{position:"relative"}}>
<TextField label="Alcohol Consumption" name="alcohol_consumption" variant="outlined" size="small" onChange={handleChange} fullWidth sx={{"& input":{paddingRight:"60px"}}}/>
<span style={unitStyle}>/week</span>
</div>

{/* PHYSICAL ACTIVITY */}
<div style={{position:"relative"}}>
<TextField label="Physical Activity" name="physical_activity" variant="outlined" size="small" onChange={handleChange} fullWidth sx={{"& input":{paddingRight:"75px"}}}/>
<span style={unitStyle}>hrs/week</span>
</div>

{/* SLEEP */}
<div style={{position:"relative"}}>
<TextField label="Sleep Duration" name="sleep_duration" variant="outlined" size="small" onChange={handleChange} fullWidth sx={{"& input":{paddingRight:"45px"}}}/>
<span style={unitStyle}>hrs</span>
</div>

{/* STRESS */}
<div style={{position:"relative"}}>
<TextField label="Stress Level" name="stress_level" variant="outlined" size="small" onChange={handleChange} fullWidth sx={{"& input":{paddingRight:"40px"}}}/>
<span style={unitStyle}>/10</span>
</div>

</div>

{/* SELECT CONDITION */}
<FormControl fullWidth size="small">
  <InputLabel id="condition-label">Condition</InputLabel>

  <Select
    labelId="condition-label"
    name="condition"
    value={formData.condition}
    label="Condition"
    onChange={handleChange}
    input={<OutlinedInput label="Condition" />}
    MenuProps={MenuPropsUp}
  >
    <MenuItem value="">
      <em>Select Condition</em>
    </MenuItem>

    {Object.keys(conditionDrugMap).map((cond) => (
      <MenuItem key={cond} value={cond}>
        {cond}
      </MenuItem>
    ))}
  </Select>
</FormControl>

{/* SELECT DRUG */}
<FormControl fullWidth size="small">
  <InputLabel id="drug-label">Drug</InputLabel>

  <Select
    labelId="drug-label"
    name="drug_name"
    value={formData.drug_name}
    label="Drug"
    onChange={handleChange}
    input={<OutlinedInput label="Drug" />}
    MenuProps={MenuPropsUp}
    disabled={!availableDrugs.length}
  >
    <MenuItem value="">
      <em>Select Drug</em>
    </MenuItem>

    {availableDrugs.map((drug) => (
      <MenuItem key={drug} value={drug}>
        {drug}
      </MenuItem>
    ))}
  </Select>
</FormControl>

<button type="submit" disabled={loading}>
{loading ? "Running AI Prediction..." : "Run AI Prediction"}
</button>

</form>

{result && (
<div className="result-box">

<h2>Prediction Result</h2>

<div className="risk-grid">

<div className="risk-card">
<span>General Risk</span>
<h3>{result.general_health_risk}%</h3>
</div>

<div className="risk-card">
<span>Heart Attack Risk</span>
<h3>{result.heart_attack_risk}%</h3>
</div>

<div className="risk-card">
<span>Drug Effectiveness</span>
<h3>{result.drug_effectiveness}%</h3>
</div>

<div className="risk-card">
<span>Hospitalization</span>
<h3>{result.hospitalization_risk}%</h3>
</div>

<div className="risk-card">
<span>Health Score</span>
<h3>{result.overall_health_score}%</h3>
</div>

</div>

<div className={`severity ${result.disease_severity}`}>
Disease Severity: {result.disease_severity}
</div>

<h3>Recommended Drugs</h3>

<div className="drug-section">
{result?.recommended_drugs?.map((drug,i)=>(
<div key={i} className="drug-card">
<span>{drug.drug}</span>
<span>{drug.effectiveness}%</span>
</div>
))}
</div>

<h3>Lifestyle Recommendations</h3>

<div className="recommendations">
{result?.lifestyle_recommendations?.map((rec,i)=>(
<div key={i} className="recommendation">{rec}</div>
))}
</div>

</div>
)}


</div>
</div>
<Snackbar
open={snackbar.open}
autoHideDuration={3000}
onClose={handleSnackbarClose}
anchorOrigin={{vertical:"bottom",horizontal:"center"}}
>

<Alert
onClose={handleSnackbarClose}
severity={snackbar.severity}
variant="filled"
sx={{width:"100%"}}
>

{snackbar.message}

</Alert>

</Snackbar>
</div>
);
}

export default Prediction;