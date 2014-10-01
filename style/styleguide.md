<h1 class="kss-title kss-title-main"> Zoomdata Styleguide </h1>

This is the Zoomdata Styleguide.

Zoomdata's CSS Framework - This project is meant to be a framework for commonly used UI elements in the Zoomdata interface.
The code is written in [Sass](http://sass-lang.com/), built using [Grunt.js](http://gruntjs.com/) and commented using [KSS](http://warpspire.com/kss/). [Inuit.css](https://github.com/inuitcss) was also minimally used as a starting point with custom objects imported after that in the `main.scss` file. Custom Zoomdata Symbol fonts are included in the fonts directory.

## Getting Started
* clone the repo and cd to the created directory
* run `npm install` to install all grunt plugin dependencies
* run `grunt` to build the [KSS](http://warpspire.com/kss/) documentation and watch for changes

## Folders structure
* package.json : This file is used by npm to store metadata for projects published as npm modules. You will list grunt and the Grunt plugins your project needs as devDependencies in this file.
* Gruntfile.js : This file is named Gruntfile.js or Gruntfile.coffee and is used to configure or define tasks and 	load Grunt plugins.
* style : This folder contains main code separated by next folders and files:
	* fonts : This folder contains set of project fonts.
	* inuit : Folder with a collection of pre-alpha modules to form the new, improved css. Based on inuit project: https://github.com/inuitcss.
	* objects : Folder with files which contains main css rules written and commented using KSS and separated by corresponding categroies (buttons, icons, forms, etc.).
	* main.scss : Inuit starting point file where it's modules imported.
	* styleguide.md : File with project description.
* styleguide : Automatically generated folder with html files which represent framework sections (managed by KSS).
* template : Folder which contains basic UI template of framework which is used by KSS during sections rendering.

## Sass for Sublime Text 2
It may be useful to have syntax highlighting to work with Sass and SCSS files. Sublime Text 2 is a good tool for this. There is steps how to install corresponding plugin:
* Sublime Package Control should be installed first. The easiest way to do this is just to open sublime console and run a code:
	
	`import urllib2,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')`
  
  More detailed instruction on Package Control placed here: https://sublime.wbond. net/installation#st2	

* Use plugin from git-project: https://github.com/n00ge/sublime-text-haml-sass
	
	INSTALLATION:

	* Go to menu bar: "Sublime Text 2 > Preferences > Browse Packages..."
	* Alternate method, on OS X, in Terminal:
	$ cd ~/Library/Application\ Support/Sublime\ Text\ 2/Packages
	Once that folder is open, close Sublime Text 2.
	* Move the two directories: /SASS/, and /Ruby Haml/ to that folder.
	* Restart Sublime Text 2.