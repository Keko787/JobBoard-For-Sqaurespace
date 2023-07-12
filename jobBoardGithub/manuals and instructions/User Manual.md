# User Manual:

## 1. To integrate the program into a sqaurespace webpage:

To add the code into the Sqaurespace web page, create a new section and select the blank layout. Then click edit, then click on the plus or add module or section. Select the "</> code" option.Remove the first line, and copy and paste the code for the job board program to embed it into the webpage.Use the "noHead" version of the jobboard in supported assets.

Make sure to remove the head and the tags for html and body if they are present, as this would make loading and processing slightly slower.

![sqp integration ex](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/1f471626-0842-4b08-b078-28f9c59ece96)

## 2. Making data CDN file:

In data file section of the code, go to your github repo-page and add a data file. Copy the example data from the data file in the folder, then make a new .js file for the data.

***KEEP NOTE***: DUE TO CACHING PROCEEDURES FROM THE CDN, YOU MUST CHANGE THE FILE NAME WHEN CHANGING/UPDATING DATA AND IT **MUST BE UNIQUE**

RECCOMENDED TO USE A NAMING SCHEME BASED ON DATE AND TIME FORMAT:[data-month-day-year-HourMinute.js]

EX of Naming Scheme:  [ data-6-22-2023-1020.js ]
     
Once done making the file and commiting it, fill out the the data file in the SRC link in the data file section and file the url that isnt commented. based on the format below.
<script src="https://cdn.jsdelivr.net/gh/user/repo@ver/path/file.js"></script> 

<br> here is an example below:

![data file help image](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/eff9d16d-644a-4af6-bf06-47facebc96d6)

## 3. To update or change data:

I CAN NOT STRESS THIS ENOUGH...

***KEEP NOTE***: DUE TO CACHING PROCEEDURES FROM THE CDN, YOU MUST CHANGE THE FILE NAME WHEN CHANGING/UPDATING DATA AND IT **MUST BE UNIQUE**.

RECCOMENDED TO USE A NAMING SCHEME BASED ON CURRENT DATE AND TIME FORMAT:[data-month-day-year-HourMinute.js]

EX of Naming Scheme:  [ data-6-22-2023-1020.js ]
     
Once done updating and changing the file name of the file and commiting it, fill out the the data file in the CDN SRC link in the data file section and file the url that isnt commented. based on the format below.

<script src="https://cdn.jsdelivr.net/gh/user/repo@latest/path/file.js"></script>

<br>**In this case**, make sure to just change the file name to the name that was changed in the github name change and commit. 

![sc of data ver2](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/2795290e-9e8e-4b70-b502-27a16e189c8d)

### 3.1 To change the name:

Navigate to the file page, click the pencil on the top right of the consol window, then above the consol window, the name will apear and can be edited to the new desired name.

It is suggested to do this first before making any changes to the file in case you forget to do it when submitting. Dont worry if this happens, you can reopen the editor to change the name of the file.

MAKE SURE TO COMMIT THE CHANGE.

### 3.2 Inputing data into data file:
	
You can add html elements like "<-strong>" to make text bold and "<-ul>" and "<-li>" to makes lists, the only exception is "<-p>" because it is the default in the modal window, but it would still be recognized so no worries.

It must stay in one line, but it there is no limit to how long the length of the line can be, so you can make the description as long as you want. It is recommended to use a notepad or text editor to create the description and paste it into the description value.

MAKE SURE TO KEEP THE QUOTATION MARKS **INTACT**.

The comments in the data file has an example of html you can add and perform in the job description.

Heres a link to basic html elements,code, and syntax: https://www.w3schools.com/html/html_elements.asp

### 3.3 job description styling
Refer to 4.2. to make the style classes

There is a variable called styles in the data file. This is for housing/calling each style class for each position that the job description is using.

The style classes themselves will be housed in the html codebase CSS section (AKA the rest of the program, in the style codeblock).

There is a section in the style block where you can make the classes for the styling of the job description pop up. Please refer to 4.2 in making styling for your job descriptions.

Once you are done making your style classes, or the first iteration, input the class name into it as shown...

![sc of data ver3](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/bebfb59e-2d82-4c4b-8acf-642b23202550)


## 4. Reformating/integrating your webpage design and styles/Changing CSS and styling:

### 4.1 Overwriting the reformatting style section in the codebase
In the CSS styling section (AKA the style code block, <style></style>), go to the sub-section of re-formating/integrating your sqaurespace style. 

From there you can delete all of the CSS style code **IN THE REFORMAT SECTION** to **overwrite them with your own**.

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

### 4.2 Styling the job description pop up
In the job description data, styling can be added only through css classes, the class name will be called depending on what position is accessed. 

to add classes for the job description, go to the style code block, then go to the job description data section.

Since you can only add styles to job desc. through classes, here are some methods of advance CSS to help with your troubles.

here are some examples of how to make a CSS class, how to make a class selector, AND how to overwrite styles of certain element sections that need different or more styles. All within the css file to look more closely.

![sc of css ver1](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/52afa419-f9ee-4be6-8835-3a4b70417a96)

In line 91. The red arrow shows what a css class looks like.

In line 121. The red underline shows the the class, the grey underline shows the selector.

In line 125. The green underline shows how to select certain elements of that element type.

## 5. Scripts

### 5.1 Making and formating the script CDN file
**NOTE: THIS IS ONLY FOR IF YOU WISH TO MAKE THE INTERNAL SCRIPT INTO A CDN**
This would rarely need to be changed unless you are planning to change or add features to the program.

To add in the script, the same method will be applied as the data file and CSS file.

This also means that the same rules applied and you must follow the same format.

remember to change the name when updating the script based on the instructions and format in the example. 

Refer to the example.
![sc of scrpt ver1](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/69e8dfe0-8ec8-4fd4-8427-777aab104748)

### 5.2 Just filtering departments or locations

If you wish to have only the department or location filter to show, heres how.

First, go to the code base, then go to the html code block (the first one)

then go to either to the "Location filter" or "Department filter" section (should be close to the top of the html section)

once there, you need to **comment out** the section using the <!--  --> operator.

The [ <!-- ] part is where the comment starts, the [ --> ] is where the comment.

Then use the comment opperator to turn that section into comment which means that it wont be functioning, make sure its only that section.

refer to the example:
![sc of html ver1](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/d35b6625-e483-48c6-9ffd-c610741ec5c1)

You can also just delete that section if you wish. I suggest not to do that in case you need to reuse it.

#### 5.2.1 Adding in preselected locations or departments

If you want to show only positions with a specific location or department, go to the script-set folder.

Then, in the data section (starts at line 2) find either "selectedDepartments: []" if you want to specify the department, "selectedLocations: []" if you want to specify the location.

Then, put the department or location you wish to specify in the [] with quotation marks surrounding the name. This must be based off the information in the data FILE.

ex: selectedDepartments: ["Drafting"]

ex: selectedLocations: ["Pittsburgh, PA"]

If you want to specify more than one location or department, just add a "," in the bracket like so. EX: selectedDepartments: ["Drafting", "Front-end"]  

refer to the example:
![sc of data](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/7a18d46d-e9e7-4953-b00f-635765a8f197)

### 5.3 changing application link
in the job positon entries section in the **html block**, look for the comment that says "Link to application page".

beside it, in the href variable is the URL for the supposed application page. Change the example.com url to the website of your choosing.

You can mess with the formula on how the url and slugs or formed, the variables and values are based off the information from the position data. I suggest using the info from the job data to make the url formula if you need to make multiple application webpages.

Make sure to properly make the url with the right syntax. Instead of spaces, use a "-" .

make sure you change the one in the modal pop-up section as well.

refer to the example:
![sc of links stuff](https://github.com/Keko787/JobBoard-For-Sqaurespace/assets/73184531/8dc69a7a-d822-48bc-9f1e-6b0217b9f4b8)

What that formula does is add in the rest of the url to go to a specific webpage, this is good if you are planning on having multiple applications but do not want it to be on the same page.

the job.

## 6. Debug

### 6.1 If your data or script hasnt been updated

make sure that you've changed the name of the file when updating, and make sure to change the name of file in the CDN link according to the file.

If there is still a problem, double check spelling and the link format.


## 6.2 If the job board is not appearing

based on how the program is developed, it is entirely dependent on the data that populates the position, without the data nothing will be shown because the filter menu, 
position cards, and pop-ups depend on the data to populate those sections.

The same thing can also occur if there is broken syntax in the data, make sure that your html tags and syntax are proper as well. To ensure that it is proper check to see if there are incompleted quotations, bad info, or incompleted html tags in the description

Once again, having a blank screen or section where the job board should be indicates that there is something wrong with the the data file or data section.


### 6.3 the program overwriting the whole webpages style
This occured because you either never replaced the reformating section with your own styles from the website, or you incorrectly made a class that started affecting the webpage (which means that you made a conflicting class name or just used only an html element as the name)

Refer to section 4.1

### 6.4 please contact author if problem still consist
contact through github comments or email.

### 6.5 general notes

make sure your application page url link is properly written.
