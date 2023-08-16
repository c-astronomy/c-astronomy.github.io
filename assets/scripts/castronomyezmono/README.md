CAstronomyEz is a simple script that automates the boring part of editing.
  
WHAT YOU NEED:  
SHO subs or an RGB image taken with DUAL-NARROWBAND filter.  
RC-blurX / noiseX / starX *You can run the program without them if you don't tick the boxes!  
By using an RBG image it will automaticly put the script in OSC-DUONARROWBAND mode and create a fake SHO/HUBBLE image if named rgb  
  
INSTRUCTIONS:  
Mono: Add your SHO subs. Name them: s h o (lowercase is important)  
Tick the boxes you want to use  
Execute  
  
Rgb: Add your rgb image. Name it rgb (lowercase is important)  
This mode ignores crop/abe and the palette settings and creates a fake SHO/HUBBLE palette!  
Tick the boxes you want to use  
Execute  
  
KNOWN BUGS IN CURRENT VERSION:  
HOO palette with only H and O sub is disabled atm, HOO palette will still work fine if you add s sub tho. you can walk around it by copy any of the subs and name it s.  
StarX - stars might have some odd stretch to them.  
BlurX and NoiseX settings can be too aggressive.  
Tiltshift might stop the script, since i can't test the repository install i don't know where the files are stored thus resulting in some path errors.  
Tiltshift in MONO mode doesn't perform well atm.  
Tiltshift when run solo on an already processed RGB image tries to make a fake hubble palette gain(I will fix this asap so you can use that function alone).  
Tiltshift sharpening and convolution is too aggressive.  
RGB-mode abe results are sometimes very bad.  
Triangle GUI button is not finished, don't use it.  
  
COMMING:  
I might add a slider to tune some settings, but i want this script to be very simple so i'm still just considering this, might try it out in an update soon!  
I already got code in here for many more palettes, i might activate them soon!  
I have a whole other flow that is made with only stock Pixinsight plugins as well, i might try to implement that flow in the script or maybe make a separate version for that.  
  
-------------------------------------------------------------------------------------------------------------------------------------------------  
  
I have had problems with the correct settings for repository, earlier versions have been known to brick Pixinsight installs so use this at your own risk!  
If you are a developer and can give me pointer on how do to do it correct i'd appreciate that a lot.  
Feedback in general is very welcomed, there's many bug and i can't test for all things my self.  
  
Safe to use with manual install:  
https://github.com/c-astronomy/CAstronomyEzMono    
  
***REPOSITORY LINK, USE AT YOUR OWN RISK***  
https://c-astronomy.github.io/assets/scripts/castronomyezmono/    
  
The is script is in a very an early stage and have many bugs, the script will be changing a lot during development.  
  
--------------------------------------------------------------------------------------------------------------------------------------------------
