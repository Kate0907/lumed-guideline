# For the frontend:
1. Find your IIS defualt web root. It should be in C:\inetpub\wwwroot.
2. Remove all files in folder 'wwwroot' and create a new folder called 'lumed-guideline-frontend'.
3. In Angular cli write: ng build --base-href "/lumed-guideline-frontend/" --prod
   (lumed-guideline-frontend is the new folder name in 'wwwroot' folder your just created) 
4. Open your project's 'dist' folder, then open'lumed-angular2-guidelines' folder, copy all the contents inside 'lumed-angular2-guidelines' folder into your IIS wwwroot\lumed-guideline-frontend folder.

# For the backend:
1. Copy 'empty.json' and 'guideline.json' to your local disk in order to read/write file.
'empty.json' is an empty json file, 'guideline.json' has the mock dataset in it.
2. Edit Web.config to read and save data:
Open Web.config, in 'appSettings':
*  key 'SavePath' is the path to save current data into a json file when clicking button 'save to json'. Current value is 'c:\Source\lumed-guidelines\empty.json'. Replace with a new one.
   
* key 'ReadPath' is the path to load data from local json file when the app start. Current value is 'c:\Source\lumed-guidelines\guideline.json'. Replace with a new one.
3. Build ASP.NET Web API project in Release mode.
4. Right click on Web API project and click "Publish" .
Set the Target Location. Target Location is where the published files will be saved to. I just saved to a new folder on desktop.
5. Create a new folder in C:\inetpub\wwwroot called 'lumed-guideline-backend'.
Copy the files your just published from target location to new folder 'C:\inetpub\wwwroot\lumed-guideline-backend'.
6.  In IIS manager, right click on 'Sites' --> AddWebsite , Set:
Site name: Default Web Site
Application pool: DefaultAppPool
Physical path: %SystemDrive%\inetpub\wwwroot
Click OK.
7. Click 'Sites' --> 'Default Web Site' -->right click 'lumed-guideline-backend' --> 'Convert to Application'
8. Open Chrome, open URL: 'localhost/lumed-guideline' to run the app.

# For Login
Username: abc <br>
Password: 000000
  

