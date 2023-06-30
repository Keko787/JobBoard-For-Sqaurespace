# User Manual:

## To integrate the program into a sqaurespace webpage:

To add the code into the Sqaurespace web page, create a new section and select the blank layout. Then click edit, then click on the plus or add module or section. Select the "</> code" option.Remove the first line, and copy and paste the code for the job board program to embed it into the webpage.Use the "noHead" version of the jobboard in supported assets.

Make sure to remove the head and the tags for html and body if they are present, as this would make loading and processing slightly slower.

![sqp integration ex](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/1f471626-0842-4b08-b078-28f9c59ece96)

## Making data CDN file:

In data file section of the code, go to your github repo-page and add a data file. Copy the example data from the data file in the folder, then make a new .js file for the data.

***KEEP NOTE***: DUE TO CACHING PROCEEDURES FROM THE CDN, YOU MUST CHANGE THE FILE NAME WHEN CHANGING/UPDATING DATA AND IT **MUST BE UNIQUE**

RECCOMENDED TO USE A NAMING SCHEME BASED ON DATE AND TIME FORMAT:[data-month-day-year-HourMinute.js]

EX of Naming Scheme:  [ data-6-22-2023-1020.js ]
     
Once done making the file and commiting it, fill out the the data file in the SRC link in the data file section and file the url that isnt commented. based on the format below.
<script src="https://cdn.jsdelivr.net/gh/user/repo@ver/path/file.js"></script> 

<br> here is an example below:

![data file help image](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/eff9d16d-644a-4af6-bf06-47facebc96d6)

## To update or change data:

I CAN NOT STRESS THIS ENOUGH...

***KEEP NOTE***: DUE TO CACHING PROCEEDURES FROM THE CDN, YOU MUST CHANGE THE FILE NAME WHEN CHANGING/UPDATING DATA AND IT **MUST BE UNIQUE**.

RECCOMENDED TO USE A NAMING SCHEME BASED ON CURRENT DATE AND TIME FORMAT:[data-month-day-year-HourMinute.js]

EX of Naming Scheme:  [ data-6-22-2023-1020.js ]
     
Once done updating and changing the file name of the file and commiting it, fill out the the data file in the CDN SRC link in the data file section and file the url that isnt commented. based on the format below.

<script src="https://cdn.jsdelivr.net/gh/user/repo@latest/path/file.js"></script>

<br>**In this case**, make sure to just change the file name to the name that was changed in the github name change and commit.

![data file image](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/bd74964d-119f-4a77-8b5c-443a787b0891)

### To change the name:

Navigate to the file page, click the pencil on the top right of the consol window, then above the consol window, the name will apear and can be edited to the new desired name.

It is suggested to do this first before making any changes to the file in case you forget to do it when submitting. Dont worry if this happens, you can reopen the editor to change the name of the file.

MAKE SURE TO COMMIT THE CHANGE.

### Inputing data into data file:
	
You can add html elements like "<-strong>" to make text bold and "<-ul>" and "<-li>" to makes lists, the only exception is "<-p>" because it is the default in the modal window, but it would still be recognized so no worries.

It must stay in one line, but it there is no limit to how long the length of the line can be, so you can make the description as long as you want. It is recommended to use a notepad or text editor to create the description and paste it into the description value.

MAKE SURE TO KEEP THE QUOTATION MARKS **INTACT**.

The comments in the data file has an example of html you can add and perform in the job description.

Heres a link to basic html elements,code, and syntax: https://www.w3schools.com/html/html_elements.asp


## Reformating/integrating your webpage design and styles/Changing CSS and styling:
	
In the CSS styling section, go to the sub-section of re-formating/integrating your sqaurespace style. 

From there you can delete all of the CSS style code to **overwrite them with your own**.

If you wish to implement the styles from your sqaurespace design:

- Disable the preview mode of the program or copy and cut the code temporarily. 

- Then **inspect element** of the page or text via right clicking on the desired text or content and selecting "inspect element" or "inpsect." 

- Then on the bottom of the console, there would be a console window tab called "styles" From there, copy the CSS styles based on comments in the code section.

- Then paste the CSS code in the style block based on where the comments dictate where each style block should go. If it is not listed, then place in at the bottom of the style block

- FYI the style block looks like this. <style></style>

<br> Here are some examples:
![css styling help](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/af834d1c-7f4d-423c-bfeb-59f62ad0dbf0)

![css styling help 1](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/05f942e7-bfda-4df0-87b5-ffdfec77cd2e)

![css styling help-2](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/e15bbd37-406f-4592-87f7-38c2fe651694)

