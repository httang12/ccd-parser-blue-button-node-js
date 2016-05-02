/** 
*
* This script will parse an external CCD xml file and retrieve all data into a object based data structure
*
*/

// setup global ccd variables
var xml_path = "/var/www/html/ccd_parser/data_sample/xml/ccd_tang.xml";

// load the file system library
var fs = require('fs');

// load the bluebutton system
var BlueButton = require('bluebutton');

// load the ccd file path
var xml = fs.readFileSync(xml_path, 'utf-8');
var myRecord = BlueButton(xml);

// Log the demographics data
console.log(myRecord.data.demographics.json());
