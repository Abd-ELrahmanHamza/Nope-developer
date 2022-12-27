
# [Nope Developer]()



<p align="center"><img src="Images/logo.png" alt="Nope" width="96" align="center"/></p>

**Nope developer** is a Low-code / No-code opensource platform to build full web or mobile apps. Easy and Fast development where the user can make his own application with no need of a strong coding background, the user can design it by draging and droping the different widgets, show and edit its code, save it for later editing and download it as a zip folder.  (currently, you can design a **web applicaton** with **HTML/CSS and Js**)  


## Table of Contents

- [Built with](#built-with)
- [File Structure](#file-structure)
- [Features](#features)
- [Development](#development)
- [API](#api)
- [License](#license)


## Built with

- [React JS](https://reactjs.org/)
- [react-router-dom](https://reactrouter.com/en/v6.3.0)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [bootstrap](https://getbootstrap.com/)
- [react-ace](https://www.npmjs.com/package/react-ace)
- [react-icons](https://react-icons.github.io/react-icons/)


<details><summary>Detailed Structure</summary>
<p>

```bash
├───buildJson
├───data
├───docs
│   ├───fonts
│   ├───scripts
│   │   └───prettify
│   └───styles
├───public
└───src
    ├───Assets
    │   └───images
    │       ├───services
    │       └───work
    ├───Authentication
    ├───Code snippets
    ├───Components
    │   ├───DesignGroup
    │   ├───DesignMetaDate
    │   ├───Footer
    │   ├───home
    │   │   ├───about
    │   │   ├───homes
    │   │   └───services
    │   ├───Image
    │   ├───Navbar
    │   ├───OptionList
    │   ├───Project
    │   ├───ProjectModal
    │   ├───Projects
    │   ├───SideBar
    │   ├───StyleBar
    │   ├───Widgets
    │   │   ├───Body
    │   │   └───Widget
    │   ├───WidgetSide
    │   └───WorkspaceNavBar
    ├───Containers
    │   ├───Dashboard
    │   ├───EditPage
    │   ├───LandingPage
    │   ├───Login
    │   ├───LoginSignupContainer
    │   ├───PreviewPage
    │   ├───SignUp
    │   └───Workspace
    ├───Contexts
    ├───Helpers
    └───Hooks
  
  
```
  </p>
</details>



## Features
* **Design Page**

| NavBar |
|--|
|<img  src="Features/NavBar.png"  alt="Droopy - NavBar" align="center"/>|

| WorkSpace |
|--|
|<img  src="Features/emptyWorkSpace.png"  alt="Droopy - WorkSpace" align="center"/>|


| Widgets | Layout | Templates | 
|--|----|--|
|<img  src="Features/WIdgets.png"  alt="Droopy - Widgets"  height="400"  align="center"/>|<img  src="Features/layouts.png"  alt="Droopy - Layout"  height="400"  align="center"/>|<img  src="Features/Pages.png"  alt="Droopy - Pages"  height="400"  align="center"/>|



| Style | Attributes | Tree of widgets |
|--|--|--|
|<img  src="Features/Changestyle.png"  alt="Droopy - Style"  height="400"  align="center"/>|<img  src="Features/Attributes.png"  alt="Droopy - Widget Attributes"  height="400"  align="center"/>|<img  src="Features/Treeofwidgets.png"  alt="Droopy - Tree of widgets"  height="400"  align="center"/>|




| Upload Image | Show/Edit code |
|--|--|
|<img  src="Features/uploadeimage.png"  alt="Droopy - UploadImg"  align="center"/>|<img  src="Features/edithtmlcode.png"  alt="Droopy - Show/Edit code"   align="center"/>|




| Download Files | Preview | 
|--|----|
|<img  src="Features/Downloadedfiles.png"  alt="Droopy - Style"  width="500"  align="center"/>|<img  src="Features/Previewpage.png"  alt="Droopy - Preview"  width="500" align="center"/>|


---
## Development

Clone the repository and install all the necessary dependencies (`npm` is highly recommended)

```sh
$ git clone https://github.com/itworx/ITWorx_LCNC_Tool_Frontend.git
$ cd ITWorx_LCNC_Tool_Frontend
$ npm i
```
Start the dev server

```sh
 npm start
```


- Change backend link in [./src/Helpers/EndPoint.js](./src/Helpers/EndPoint.js) with the deployment link


## API
API Repository could be found here:  https://github.com/itworx/ITWorx_LCNC_Tool_Backend



## License

> This software is licensed under Apache License 2.0 License, See [License](./LICENSE)

