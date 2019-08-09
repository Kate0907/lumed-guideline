# Lumed Guideline


## Prerequisites
1. Install Visual Studio Code and Visual Studio
2. Open FrontEnd folder with Visual Studio Code
3. Open BackEnd folder with Visual Studio

## How to deploy:
> Database
1. Copy `empty.json` and `guideline.json` to your local disk in order to read/write file. `empty.json` is an empty json file, `guideline.json` has some mock dataset in it.
2. Edit `Web.config` in BackEnd project to read and save data in the right place: <br>
<img src=".\readme.dir\webconfig.png" >
   
Open Web.config, under `appSettings`:
*  key `SavePath` is the path to save all the data when clicking `save to json` button. Replace the `value` with current location for `empty.json`.
   
* key `ReadPath` is the path to load all data when the app start. Replace the `value` with current location for `guideline.json` or `empty.json`. 


> Frontend
1. Find your IIS defualt web root. It should be in `C:\inetpub\wwwroot`.
2. Remove all files in folder `wwwroot` and create a new folder called `lumed-guideline-frontend`.<br>
   <img src=".\readme.dir\wwwroot1.png" width=400px >
3. In Angular CLI write: 
   ```javascript
   ng build --base-href "/lumed-guideline-frontend/" --prod
   ```
   `lumed-guideline-frontend` is the new folder name in `wwwroot` folder your just created 
4. Open your project's `dist`-->`lumed-angular2-guidelines` folder, copy all the contents inside `lumed-angular2-guidelines` folder into your IIS `wwwroot\lumed-guideline-frontend` folder.<br>
<img src=".\readme.dir\wwwroot-frontend.png" width=400px >

> Backend

1. Open BeckEnd folder with Visual Studio
2. Build `Guideline` project in Release mode.
3. Right click on `Guideline` project and click `Publish` .
Set the Target Location. Target Location is where the published files will be saved. <br>
<img src=".\readme.dir\publish.png" width=400px >
4. Create a new folder in `C:\inetpub\wwwroot` called `lumed-guideline-backend`.
Copy the files your just published from target location to new folder `C:\inetpub\wwwroot\lumed-guideline-backend`.
5.  In IIS manager, right click on `Sites` --> `Add Website` , <br>
Set:
- Site name: `Default Web Site`
- Application pool: `DefaultAppPool`
- Physical path: `%SystemDrive%\inetpub\wwwroot`
- Click `OK`.<br>
<img src=".\readme.dir\addWebsite.png" width=400px >

6. Click `Sites` --> `Default Web Site` -->right click `lumed-guideline-backend` --> `Convert to Application`
7. Open Chrome, open URL: `localhost/lumed-guideline/frontend` to run the app.

> For Login <br>

Username: abc <br>
Password: 000000
  

