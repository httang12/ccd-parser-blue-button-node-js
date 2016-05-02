/** 
*
* This script will parse an external CCD xml file and retrieve all data into a object based data structure
*
*/

// setup global ccd variables
var xml_path = "";

// Get the xml path from the arguements
process.argv.forEach(function (val, index, array) {
  if (index==2)
     xml_path = val;
});

// if arguement does not exist, exit script
if (xml_path==null || xml_path=="")
{
  console.log("Please specify the ICD document that will be processed.");
  process.exit(); 
}

// load the file system library
var fs = require('fs');

// load the bluebutton system
var BlueButton = require('bluebutton');

// load the ccd file path
var xml = fs.readFileSync(xml_path, 'utf-8');
var myRecord = BlueButton(xml);

// Log the demographics data
console.log(myRecord.data.demographics.json());
