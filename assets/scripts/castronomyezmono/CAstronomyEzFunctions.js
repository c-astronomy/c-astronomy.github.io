#define DEFAULT_AUTOSTRETCH_SCLIP  -2.80
#define DEFAULT_AUTOSTRETCH_TBGND   0.25
#define DEFAULT_AUTOSTRETCH_CLINK   false

var _0x294730=_0x518b;(function(_0x15e68b,_0x29f81f){var _0x1a2660=_0x518b,_0xf14cb2=_0x15e68b();while(!![]){try{var _0x4e5ca9=parseInt(_0x1a2660(0x175))/0x1*(parseInt(_0x1a2660(0xdb))/0x2)+parseInt(_0x1a2660(0xe8))/0x3*(parseInt(_0x1a2660(0x18d))/0x4)+-parseInt(_0x1a2660(0x136))/0x5+parseInt(_0x1a2660(0x192))/0x6+parseInt(_0x1a2660(0x13d))/0x7+-parseInt(_0x1a2660(0xd5))/0x8*(parseInt(_0x1a2660(0xfc))/0x9)+-parseInt(_0x1a2660(0x11c))/0xa*(parseInt(_0x1a2660(0x16a))/0xb);if(_0x4e5ca9===_0x29f81f)break;else _0xf14cb2['push'](_0xf14cb2['shift']());}catch(_0x5bd89b){_0xf14cb2['push'](_0xf14cb2['shift']());}}}(_0x40bb,0x8e228),console[_0x294730(0xd1)](_0x294730(0x164)),console[_0x294730(0xd1)]('Start'));var identifierName='h',targetWindow=null,cleanup=!![],useScnr=![],usePixelMath=!![],palette=_0x294730(0xef),useSHO=!![],useHUBBLE=![],useHOO=![],removeMagentaStars=![],useBlurX=![],useNoiseX=![],useStarX=![],useAbe=!![],useCrop=!![],createSuperLum=![],useIntegerResample=![],noS=![],osc=![],mono=![];function integerResample(_0x32eb64){var _0x5001a7=_0x294730,_0x1b22dd=new IntegerResample();_0x1b22dd[_0x5001a7(0x127)]=-0x2,_0x1b22dd[_0x5001a7(0x196)]=IntegerResample[_0x5001a7(0x17c)]['Average'],_0x1b22dd[_0x5001a7(0x15a)]=0x48,_0x1b22dd[_0x5001a7(0xe3)]=0x48,_0x1b22dd[_0x5001a7(0xb7)]=![],_0x1b22dd[_0x5001a7(0xd4)]=![],_0x1b22dd[_0x5001a7(0xb3)]=![],_0x1b22dd[_0x5001a7(0x193)]=![],_0x1b22dd[_0x5001a7(0xfa)](_0x32eb64);}function blurX(_0x5077ee){var _0x43376e=_0x294730;console[_0x43376e(0xd1)](_0x43376e(0x153)+_0x5077ee['id']);var _0x1dd644=new BlurXTerminator();_0x1dd644[_0x43376e(0xbe)]=_0x43376e(0xd8),_0x1dd644['correct_only']=![],_0x1dd644['correct_first']=![],_0x1dd644[_0x43376e(0x14e)]=![],_0x1dd644['lum_only']=![],_0x1dd644[_0x43376e(0xcc)]=0.25,_0x1dd644[_0x43376e(0x114)]=0x0,_0x1dd644['nonstellar_psf_diameter']=0x0,_0x1dd644['auto_nonstellar_psf']=!![],_0x1dd644[_0x43376e(0x178)]=0.9,_0x1dd644[_0x43376e(0xfa)](_0x5077ee);}function noiseX(_0x5cf858){var _0x3bca71=_0x294730;console['writeln']('\x20Run\x20noiseX\x20on\x20image:\x20'+_0x5cf858['id']);var _0x37e97b=new NoiseXTerminator();_0x37e97b[_0x3bca71(0x18f)]=0.9,_0x37e97b['detail']=0.15,_0x37e97b['executeOn'](_0x5cf858);}function starX(_0x190096){var _0x17c7dd=_0x294730;console['writeln'](_0x17c7dd(0x168)+_0x190096['id']);var _0x45e3c3=new StarXTerminator();_0x45e3c3[_0x17c7dd(0x181)]=!![],_0x45e3c3[_0x17c7dd(0xcb)]=![],_0x45e3c3[_0x17c7dd(0xf0)]=0.2,_0x45e3c3[_0x17c7dd(0xfa)](_0x190096);}function _0x518b(_0x6bef48,_0x365d9e){var _0x40bb81=_0x40bb();return _0x518b=function(_0x518bc8,_0x26ab81){_0x518bc8=_0x518bc8-0xaa;var _0x4b63e1=_0x40bb81[_0x518bc8];return _0x4b63e1;},_0x518b(_0x6bef48,_0x365d9e);}function stfReset(_0x48f58b){var _0x1c9b6f=_0x294730;console[_0x1c9b6f(0xd1)](_0x1c9b6f(0x199)+_0x48f58b['id']);var _0x9a2ec1=new ScreenTransferFunction();_0x9a2ec1[_0x1c9b6f(0xaf)]=[[0x0,0x1,0.5,0x0,0x1],[0x0,0x1,0.5,0x0,0x1],[0x0,0x1,0.5,0x0,0x1],[0x0,0x1,0.5,0x0,0x1]],_0x9a2ec1[_0x1c9b6f(0xbf)]=ScreenTransferFunction['prototype'][_0x1c9b6f(0x15d)],_0x9a2ec1['executeOn'](_0x48f58b);}function channelExtract(_0x1363be){var _0x271db8=_0x294730;console['writeln']('\x20\x20Extract\x20L\x20on\x20'+_0x1363be['id']);var _0x5d080f=new ChannelExtraction();_0x5d080f[_0x271db8(0x151)]=ChannelExtraction[_0x271db8(0x17c)]['CIELab'],_0x5d080f[_0x271db8(0xb1)]=[[!![],''],[![],''],[![],'']],_0x5d080f['sampleFormat']=ChannelExtraction[_0x271db8(0x17c)][_0x271db8(0x15f)],_0x5d080f[_0x271db8(0xfa)](_0x1363be);}function scnr(_0x59eee4){var _0x626cee=_0x294730;console['writeln'](_0x626cee(0xd7)+_0x59eee4['id']);var _0x45ae09=new SCNR();_0x45ae09[_0x626cee(0x132)]=0x1,_0x45ae09[_0x626cee(0x15e)]=SCNR[_0x626cee(0x17c)]['AverageNeutral'],_0x45ae09[_0x626cee(0x189)]=SCNR[_0x626cee(0x17c)][_0x626cee(0x11d)],_0x45ae09[_0x626cee(0x14a)]=!![],_0x45ae09[_0x626cee(0xfa)](_0x59eee4);}function alignment(){var _0x399849=_0x294730;console[_0x399849(0xd1)]('\x20Aligning\x20images!');var _0x3cd2a3=new StarAlignment();_0x3cd2a3[_0x399849(0xb6)]=0x5,_0x3cd2a3['noiseLayers']=0x0,_0x3cd2a3[_0x399849(0xe4)]=0x1,_0x3cd2a3[_0x399849(0x16e)]=0x0,_0x3cd2a3['minStructureSize']=0x0,_0x3cd2a3['sensitivity']=0.5,_0x3cd2a3[_0x399849(0xb9)]=0.5,_0x3cd2a3[_0x399849(0x11f)]=0x3,_0x3cd2a3[_0x399849(0x18e)]=0.6,_0x3cd2a3[_0x399849(0xf5)]=![],_0x3cd2a3['localMaximaDetectionLimit']=0.75,_0x3cd2a3[_0x399849(0xb0)]=0x1,_0x3cd2a3['invert']=![],_0x3cd2a3[_0x399849(0x142)]='',_0x3cd2a3[_0x399849(0x13e)]=![],_0x3cd2a3[_0x399849(0xed)]=![],_0x3cd2a3['distortionMaxIterations']=0x14,_0x3cd2a3[_0x399849(0x18b)]=0.005,_0x3cd2a3[_0x399849(0x156)]=0x2,_0x3cd2a3[_0x399849(0x119)]=!![],_0x3cd2a3['localDistortionScale']=0x100,_0x3cd2a3[_0x399849(0xc7)]=0.05,_0x3cd2a3[_0x399849(0x10a)]=2.5,_0x3cd2a3[_0x399849(0x13f)]=0x40,_0x3cd2a3[_0x399849(0x12d)]=0.01,_0x3cd2a3[_0x399849(0xc5)]=0.05,_0x3cd2a3[_0x399849(0xfb)]=0x2,_0x3cd2a3['ransacMaxIterations']=0x7d0,_0x3cd2a3[_0x399849(0x129)]=0x1,_0x3cd2a3[_0x399849(0xd2)]=0x1,_0x3cd2a3[_0x399849(0x191)]=0x1,_0x3cd2a3[_0x399849(0xee)]=0x1,_0x3cd2a3[_0x399849(0xc9)]=0x0,_0x3cd2a3[_0x399849(0x10d)]=StarAlignment[_0x399849(0x17c)][_0x399849(0xf4)],_0x3cd2a3[_0x399849(0x13b)]=0.5,_0x3cd2a3[_0x399849(0xf8)]=![],_0x3cd2a3[_0x399849(0x160)]=0x5,_0x3cd2a3[_0x399849(0x115)]=0x14,_0x3cd2a3[_0x399849(0x198)]=!![],_0x3cd2a3[_0x399849(0x12e)]=StarAlignment['prototype'][_0x399849(0x15c)],_0x3cd2a3[_0x399849(0x185)]=![],_0x3cd2a3[_0x399849(0x10f)]=![],_0x3cd2a3[_0x399849(0x135)]=0.1,_0x3cd2a3[_0x399849(0x186)]=![],osc==!![]&&(_0x3cd2a3[_0x399849(0x150)]='r',_0x3cd2a3[_0x399849(0xf2)]=[[!![],![],'g'],[!![],![],'b']]),mono==!![]&&(_0x3cd2a3[_0x399849(0x150)]='h',noS==!![]?_0x3cd2a3[_0x399849(0xf2)]=[[!![],![],'o']]:_0x3cd2a3[_0x399849(0xf2)]=[[!![],![],'o'],[!![],![],'s']]),_0x3cd2a3[_0x399849(0xae)]='',_0x3cd2a3[_0x399849(0x177)]='',_0x3cd2a3[_0x399849(0xcd)]=StarAlignment[_0x399849(0x17c)][_0x399849(0x162)],_0x3cd2a3[_0x399849(0x13a)]=!![],_0x3cd2a3[_0x399849(0x128)]=![],_0x3cd2a3[_0x399849(0x155)]=!![],_0x3cd2a3['generateDistortionMaps']=![],_0x3cd2a3[_0x399849(0x179)]=![],_0x3cd2a3[_0x399849(0xba)]=![],_0x3cd2a3['noGUIMessages']=!![],_0x3cd2a3[_0x399849(0x172)]=![],_0x3cd2a3['extrapolateLocalDistortion']=!![],_0x3cd2a3['splineSmoothness']=0.05,_0x3cd2a3[_0x399849(0xfd)]=StarAlignment[_0x399849(0x17c)][_0x399849(0x120)],_0x3cd2a3['clampingThreshold']=0.3,_0x3cd2a3['outputDirectory']='',_0x3cd2a3[_0x399849(0x13c)]='.xisf',_0x3cd2a3[_0x399849(0xc4)]='',_0x3cd2a3['outputPostfix']='_r',_0x3cd2a3[_0x399849(0x111)]='_m',_0x3cd2a3[_0x399849(0x184)]=_0x399849(0x169),_0x3cd2a3['outputSampleFormat']=StarAlignment['prototype'][_0x399849(0x147)],_0x3cd2a3[_0x399849(0x12b)]=![],_0x3cd2a3[_0x399849(0x10c)]=StarAlignment[_0x399849(0x17c)][_0x399849(0x17f)],_0x3cd2a3[_0x399849(0x166)]=!![],_0x3cd2a3['fileThreadOverload']=0x1,_0x3cd2a3[_0x399849(0x108)]=0x0,_0x3cd2a3[_0x399849(0x138)]=0x0,_0x3cd2a3[_0x399849(0x159)]=!![],_0x3cd2a3[_0x399849(0x139)]=0.85,_0x3cd2a3['executeGlobal']();}function target(_0x4c95d6){targetWindow=ImageWindow['windowById'](_0x4c95d6),targetWindow['bringToFront']();}function subIterator(_0x33a304){}function linearDenoise(_0x277b6a){var _0x4fc3ae=_0x294730;console[_0x4fc3ae(0xd1)](_0x4fc3ae(0x11b)+_0x277b6a['id']);var _0x2fdbd0=new MultiscaleLinearTransform();_0x2fdbd0[_0x4fc3ae(0xc6)]=[[!![],!![],0x0,!![],21.5,0x1,0x1],[!![],!![],0x0,!![],0x10,0x1,0x1],[!![],!![],0x0,!![],12.5,0x1,0x1],[!![],!![],0x0,!![],6.5,0x1,0x1],[!![],!![],0x0,![],0x3,0x1,0x1]],_0x2fdbd0[_0x4fc3ae(0xb4)]=MultiscaleLinearTransform[_0x4fc3ae(0x17c)][_0x4fc3ae(0x18c)],_0x2fdbd0[_0x4fc3ae(0x106)]=0x0,_0x2fdbd0[_0x4fc3ae(0x190)]=[0.25,0.5,0.25,0.5,0x1,0.5,0.25,0.5,0.25],_0x2fdbd0[_0x4fc3ae(0xf7)]=[0.5,0x1,0.5],_0x2fdbd0[_0x4fc3ae(0x17d)]=[0.5,0x1,0.5],_0x2fdbd0[_0x4fc3ae(0x11e)]=[0.8003,0.2729,0.1198,0.0578,0.0287,0.0143,0.0072,0.0036,0.0019,0.001],_0x2fdbd0[_0x4fc3ae(0x154)]='Linear\x20Interpolation\x20(3)',_0x2fdbd0['linearMask']=![],_0x2fdbd0[_0x4fc3ae(0x16c)]=0x64,_0x2fdbd0[_0x4fc3ae(0xc0)]=0x1,_0x2fdbd0[_0x4fc3ae(0x152)]=!![],_0x2fdbd0[_0x4fc3ae(0x109)]=![],_0x2fdbd0[_0x4fc3ae(0xad)]=MultiscaleLinearTransform['prototype'][_0x4fc3ae(0x105)],_0x2fdbd0[_0x4fc3ae(0x149)]=0.75,_0x2fdbd0[_0x4fc3ae(0x171)]=![],_0x2fdbd0['noiseThresholdingAmount']=0x1,_0x2fdbd0[_0x4fc3ae(0x170)]=0x3,_0x2fdbd0[_0x4fc3ae(0xbb)]=!![],_0x2fdbd0[_0x4fc3ae(0x131)]=![],_0x2fdbd0[_0x4fc3ae(0xce)]=![],_0x2fdbd0[_0x4fc3ae(0x146)]=0.1,_0x2fdbd0[_0x4fc3ae(0xe9)]=0x0,_0x2fdbd0[_0x4fc3ae(0x180)]=![],_0x2fdbd0[_0x4fc3ae(0xbd)]=0x0,_0x2fdbd0[_0x4fc3ae(0x118)]=0x0,_0x2fdbd0[_0x4fc3ae(0x113)]=MultiscaleLinearTransform[_0x4fc3ae(0x17c)][_0x4fc3ae(0x173)],_0x2fdbd0[_0x4fc3ae(0x134)]=0x0,_0x2fdbd0[_0x4fc3ae(0x15b)]=!![],_0x2fdbd0[_0x4fc3ae(0xb8)]=!![],_0x2fdbd0[_0x4fc3ae(0xca)]=![],_0x2fdbd0['executeOn'](_0x277b6a),targetWindow=ImageWindow[_0x4fc3ae(0x10b)],targetWindow&&(console[_0x4fc3ae(0xd1)](_0x4fc3ae(0xc1)+identifierName),targetWindow[_0x4fc3ae(0xe7)]());}function chanelExtract(_0x42d18c){var _0x1d081f=_0x294730;console[_0x1d081f(0xd1)](_0x1d081f(0x107)+_0x42d18c['id']);var _0x1ff2b1=new ChannelExtraction();_0x1ff2b1[_0x1d081f(0x151)]=ChannelExtraction['prototype'][_0x1d081f(0x100)],_0x1ff2b1[_0x1d081f(0xb1)]=[[!![],''],[![],''],[![],'']],_0x1ff2b1[_0x1d081f(0xc2)]=ChannelExtraction[_0x1d081f(0x17c)][_0x1d081f(0x15f)],_0x1ff2b1['executeOn'](_0x42d18c),targetWindow=ImageWindow['activeWindow'],targetWindow&&(console[_0x1d081f(0xd1)](_0x1d081f(0xc1)+identifierName),targetWindow[_0x1d081f(0xe7)]());}function invert(_0xcbe211){var _0x3145b8=_0x294730;console[_0x3145b8(0xd1)](_0x3145b8(0x157)+_0xcbe211['id']);var _0xecb383=new Invert();_0xecb383['executeOn'](_0xcbe211),targetWindow=ImageWindow[_0x3145b8(0x10b)],targetWindow&&(console['writeln'](_0x3145b8(0xc1)+identifierName),targetWindow[_0x3145b8(0xe7)]());}function extractRGB(_0x2ce33d){var _0xf7603=_0x294730,_0x1ba710=new ChannelExtraction();_0x1ba710['colorSpace']=ChannelExtraction['prototype'][_0xf7603(0x121)],_0x1ba710[_0xf7603(0xb1)]=[[!![],'r'],[!![],'g'],[!![],'b']],_0x1ba710[_0xf7603(0xc2)]=ChannelExtraction[_0xf7603(0x17c)][_0xf7603(0x15f)],_0x1ba710[_0xf7603(0x17e)]=!![],_0x1ba710[_0xf7603(0xfa)](_0x2ce33d);}function fakeS(_0x8886a0){var _0x40fa57=_0x294730,_0x406b24=new PixelMath();_0x406b24[_0x40fa57(0x158)]=_0x40fa57(0x12f),_0x406b24[_0x40fa57(0x130)]='',_0x406b24[_0x40fa57(0xde)]='',_0x406b24['expression3']='',_0x406b24[_0x40fa57(0xb2)]='gS',_0x406b24[_0x40fa57(0x110)]=![],_0x406b24[_0x40fa57(0x12c)]='',_0x406b24[_0x40fa57(0xdc)]=![],_0x406b24[_0x40fa57(0x163)]=![],_0x406b24[_0x40fa57(0xe0)]=!![],_0x406b24['singleThreaded']=![],_0x406b24[_0x40fa57(0xea)]=!![],_0x406b24[_0x40fa57(0xdd)]=![],_0x406b24[_0x40fa57(0xdf)]=![],_0x406b24[_0x40fa57(0x17a)]=0x0,_0x406b24[_0x40fa57(0x12a)]=0x1,_0x406b24['truncate']=!![],_0x406b24['truncateLower']=0x0,_0x406b24[_0x40fa57(0x141)]=0x1,_0x406b24['createNewImage']=!![],_0x406b24[_0x40fa57(0xbc)]=!![],_0x406b24[_0x40fa57(0x188)]=0x0,_0x406b24[_0x40fa57(0x18a)]=0x0,_0x406b24[_0x40fa57(0x195)]=![],_0x406b24['newImageColorSpace']=PixelMath[_0x40fa57(0x17c)][_0x40fa57(0x122)],_0x406b24[_0x40fa57(0x116)]=PixelMath[_0x40fa57(0x17c)][_0x40fa57(0x147)],_0x406b24[_0x40fa57(0xfa)](_0x8886a0),targetWindow=ImageWindow['activeWindow'],targetWindow&&(console[_0x40fa57(0xd1)](_0x40fa57(0xc1)+identifierName),targetWindow[_0x40fa57(0xe7)]());}function pixelMathCombination(_0x25b450,_0x22788b){var _0x59bb45=_0x294730,_0x228b68=new PixelMath();_0x22788b=='rgbHubble'&&(_0x228b68[_0x59bb45(0x158)]='r',_0x228b68[_0x59bb45(0x130)]='gS',_0x228b68['expression2']='b',_0x228b68[_0x59bb45(0x112)]='',_0x228b68[_0x59bb45(0xb2)]=_0x59bb45(0x124)),_0x22788b=='sho'&&(_0x228b68['expression']='s_registered',_0x228b68[_0x59bb45(0x130)]='h',_0x228b68[_0x59bb45(0xde)]=_0x59bb45(0xe5),_0x228b68[_0x59bb45(0x112)]='',_0x228b68['newImageId']='sho'),_0x22788b==_0x59bb45(0xc3)&&(_0x228b68[_0x59bb45(0x158)]='s_registered',_0x228b68['expression1']='h',_0x228b68[_0x59bb45(0xde)]=_0x59bb45(0xe5),_0x228b68[_0x59bb45(0x112)]='',_0x228b68[_0x59bb45(0xb2)]='hubble'),_0x22788b==_0x59bb45(0x183)&&(_0x228b68[_0x59bb45(0x158)]='h',_0x228b68['expression1']=_0x59bb45(0xf1),_0x228b68[_0x59bb45(0xde)]=_0x59bb45(0xe5),_0x228b68['expression3']='',_0x228b68[_0x59bb45(0xb2)]='hso'),_0x22788b==_0x59bb45(0x16d)&&(_0x228b68['expression']='h',_0x228b68[_0x59bb45(0x130)]=_0x59bb45(0xe5),_0x228b68[_0x59bb45(0xde)]=_0x59bb45(0xf1),_0x228b68[_0x59bb45(0x112)]='',_0x228b68[_0x59bb45(0xb2)]=_0x59bb45(0x16d)),_0x22788b==_0x59bb45(0xf6)&&(_0x228b68[_0x59bb45(0x158)]='h',_0x228b68[_0x59bb45(0x130)]=_0x59bb45(0xe5),_0x228b68[_0x59bb45(0xde)]=_0x59bb45(0xe5),_0x228b68[_0x59bb45(0x112)]='',_0x228b68[_0x59bb45(0xb2)]='hoo'),_0x228b68['useSingleExpression']=![],_0x228b68[_0x59bb45(0x12c)]='',_0x228b68[_0x59bb45(0xdc)]=![],_0x228b68['cacheGeneratedImages']=![],_0x228b68[_0x59bb45(0xe0)]=!![],_0x228b68[_0x59bb45(0x143)]=![],_0x228b68['optimization']=!![],_0x228b68['use64BitWorkingImage']=![],_0x228b68[_0x59bb45(0xdf)]=![],_0x228b68[_0x59bb45(0x17a)]=0x0,_0x228b68[_0x59bb45(0x12a)]=0x1,_0x228b68[_0x59bb45(0x140)]=!![],_0x228b68[_0x59bb45(0xfe)]=0x0,_0x228b68['truncateUpper']=0x1,_0x228b68[_0x59bb45(0x17b)]=!![],_0x228b68['showNewImage']=!![],_0x228b68[_0x59bb45(0x188)]=0x0,_0x228b68[_0x59bb45(0x18a)]=0x0,_0x228b68['newImageAlpha']=![],_0x228b68[_0x59bb45(0x14f)]=PixelMath[_0x59bb45(0x17c)]['RGB'],_0x228b68[_0x59bb45(0x116)]=PixelMath[_0x59bb45(0x17c)][_0x59bb45(0x147)],_0x228b68[_0x59bb45(0xfa)](_0x25b450),targetWindow=ImageWindow['activeWindow'],targetWindow&&(console['writeln']('Found\x20the\x20window:\x20'+identifierName),targetWindow[_0x59bb45(0xe7)]());}function applySTF(_0x19188e,_0x3db90d,_0x436107){var _0x3df5b1=_0x294730;console[_0x3df5b1(0xd1)](_0x3df5b1(0x176)+_0x19188e['id']);var _0x17d249=new HistogramTransformation();_0x436107?_0x17d249['H']=[[_0x3db90d[0x0][0x1],_0x3db90d[0x0][0x0],_0x3db90d[0x0][0x2],_0x3db90d[0x0][0x3],_0x3db90d[0x0][0x4]],[_0x3db90d[0x1][0x1],_0x3db90d[0x1][0x0],_0x3db90d[0x1][0x2],_0x3db90d[0x1][0x3],_0x3db90d[0x1][0x4]],[_0x3db90d[0x2][0x1],_0x3db90d[0x2][0x0],_0x3db90d[0x2][0x2],_0x3db90d[0x2][0x3],_0x3db90d[0x2][0x4]],[0x0,0.5,0x1,0x0,0x1]]:_0x17d249['H']=[[0x0,0.5,0x1,0x0,0x1],[0x0,0.5,0x1,0x0,0x1],[0x0,0.5,0x1,0x0,0x1],[_0x3db90d[0x0][0x1],_0x3db90d[0x0][0x0],_0x3db90d[0x0][0x2],_0x3db90d[0x0][0x3],_0x3db90d[0x0][0x4]]],_0x17d249[_0x3df5b1(0xfa)](_0x19188e,![]);}function histogramBugFix(){var _0xdd2f49=_0x294730,_0x19ba51=new HistogramTransformation();_0x19ba51['H']=[[0x0,0.5,0x1,0x0,0x1],[0x0,0.5,0x1,0x0,0x1],[0x0,0.5,0x1,0x0,0x1],[0x0,0.5,0x1,0x0,0x1],[0x0,0.5,0x1,0x0,0x1]],_0x19ba51[_0xdd2f49(0xfa)](view);};function STFAutoStretch(_0x1179e3,_0x37e963,_0x40901f,_0xd312f4){var _0x204360=_0x294730;if(_0x37e963==undefined)_0x37e963=DEFAULT_AUTOSTRETCH_SCLIP;if(_0x40901f==undefined)_0x40901f=DEFAULT_AUTOSTRETCH_TBGND;if(_0xd312f4==undefined)_0xd312f4=DEFAULT_AUTOSTRETCH_CLINK;var _0x3b806e=new ScreenTransferFunction(),_0x2707e3=_0x1179e3[_0x204360(0xf9)][_0x204360(0x137)]?0x3:0x1,_0x146cea=_0x1179e3[_0x204360(0x182)](_0x204360(0xd0)),_0x1c76bc=_0x1179e3[_0x204360(0x182)](_0x204360(0x103));_0x1c76bc[_0x204360(0x126)](1.4826);if(_0xd312f4){var _0x57fe30=0x0;for(var _0x26c897=0x0;_0x26c897<_0x2707e3;++_0x26c897)if(_0x146cea['at'](_0x26c897)>0.5)++_0x57fe30;if(_0x57fe30<_0x2707e3){var _0x5e1981=0x0,_0x51264e=0x0;for(var _0x26c897=0x0;_0x26c897<_0x2707e3;++_0x26c897){if(0x1+_0x1c76bc['at'](_0x26c897)!=0x1)_0x5e1981+=_0x146cea['at'](_0x26c897)+_0x37e963*_0x1c76bc['at'](_0x26c897);_0x51264e+=_0x146cea['at'](_0x26c897);}_0x5e1981=Math['range'](_0x5e1981/_0x2707e3,0x0,0x1),_0x51264e=Math[_0x204360(0x165)](_0x40901f,_0x51264e/_0x2707e3-_0x5e1981),_0x3b806e[_0x204360(0xaf)]=[[_0x5e1981,0x1,_0x51264e,0x0,0x1],[_0x5e1981,0x1,_0x51264e,0x0,0x1],[_0x5e1981,0x1,_0x51264e,0x0,0x1],[0x0,0x1,0.5,0x0,0x1]];}else{var _0x5486f8=0x0,_0x51264e=0x0;for(var _0x26c897=0x0;_0x26c897<_0x2707e3;++_0x26c897){_0x51264e+=_0x146cea['at'](_0x26c897);if(0x1+_0x1c76bc['at'](_0x26c897)!=0x1)_0x5486f8+=_0x146cea['at'](_0x26c897)-_0x37e963*_0x1c76bc['at'](_0x26c897);else _0x5486f8+=0x1;}_0x5486f8=Math[_0x204360(0x148)](_0x5486f8/_0x2707e3,0x0,0x1),_0x51264e=Math[_0x204360(0x165)](_0x5486f8-_0x51264e/_0x2707e3,_0x40901f),_0x3b806e[_0x204360(0xaf)]=[[0x0,_0x5486f8,_0x51264e,0x0,0x1],[0x0,_0x5486f8,_0x51264e,0x0,0x1],[0x0,_0x5486f8,_0x51264e,0x0,0x1],[0x0,0x1,0.5,0x0,0x1]];}}else{var _0x72511d=[[0x0,0x1,0.5,0x0,0x1],[0x0,0x1,0.5,0x0,0x1],[0x0,0x1,0.5,0x0,0x1],[0x0,0x1,0.5,0x0,0x1]];for(var _0x26c897=0x0;_0x26c897<_0x2707e3;++_0x26c897){if(_0x146cea['at'](_0x26c897)<0.5){var _0x5e1981=0x1+_0x1c76bc['at'](_0x26c897)!=0x1?Math[_0x204360(0x148)](_0x146cea['at'](_0x26c897)+_0x37e963*_0x1c76bc['at'](_0x26c897),0x0,0x1):0x0,_0x51264e=Math[_0x204360(0x165)](_0x40901f,_0x146cea['at'](_0x26c897)-_0x5e1981);_0x72511d[_0x26c897]=[_0x5e1981,0x1,_0x51264e,0x0,0x1];}else{var _0x5486f8=0x1+_0x1c76bc['at'](_0x26c897)!=0x1?Math[_0x204360(0x148)](_0x146cea['at'](_0x26c897)-_0x37e963*_0x1c76bc['at'](_0x26c897),0x0,0x1):0x1,_0x51264e=Math[_0x204360(0x165)](_0x5486f8-_0x146cea['at'](_0x26c897),_0x40901f);_0x72511d[_0x26c897]=[0x0,_0x5486f8,_0x51264e,0x0,0x1];}}_0x3b806e['STF']=_0x72511d;}for(var _0x26c897=0x0;_0x26c897<_0x2707e3;++_0x26c897){console[_0x204360(0xd1)]('channel\x20#',_0x26c897),console['writeln'](format(_0x204360(0x194),_0x3b806e['STF'][_0x26c897][0x0])),console[_0x204360(0xd1)](format('m\x20\x20=\x20%.6f',_0x3b806e['STF'][_0x26c897][0x2])),console['writeln'](format(_0x204360(0x161),_0x3b806e[_0x204360(0xaf)][_0x26c897][0x1]));}_0x3b806e[_0x204360(0xfa)](_0x1179e3);}function abe(_0xfe561d){var _0x5f51e8=_0x294730;console[_0x5f51e8(0xd1)]('\x20Apply\x20ABE\x20on\x20image:\x20'+_0xfe561d['id']);var _0x52d974=new AutomaticBackgroundExtractor();_0x52d974['tolerance']=0x1,_0x52d974['deviation']=0.8,_0x52d974['unbalance']=1.8,_0x52d974[_0x5f51e8(0x123)]=0.05,_0x52d974['maxBackground']=0x1,_0x52d974[_0x5f51e8(0xd3)]=0x0,_0x52d974[_0x5f51e8(0x187)]=![],_0x52d974[_0x5f51e8(0xcf)]=0x4,_0x52d974[_0x5f51e8(0x104)]=0x5,_0x52d974[_0x5f51e8(0xf3)]=0x5,_0x52d974[_0x5f51e8(0x14c)]=AutomaticBackgroundExtractor[_0x5f51e8(0x17c)][_0x5f51e8(0x14d)],_0x52d974[_0x5f51e8(0x16f)]=0x2,_0x52d974[_0x5f51e8(0xb5)]=![],_0x52d974[_0x5f51e8(0xab)]=![],_0x52d974[_0x5f51e8(0x11a)]=AutomaticBackgroundExtractor['prototype'][_0x5f51e8(0xe6)],_0x52d974['normalize']=![],_0x52d974['discardModel']=!![],_0x52d974[_0x5f51e8(0xec)]=!![],_0x52d974['correctedImageId']='',_0x52d974[_0x5f51e8(0xaa)]=AutomaticBackgroundExtractor[_0x5f51e8(0x17c)]['SameAsTarget'],_0x52d974[_0x5f51e8(0x144)]=![],_0x52d974[_0x5f51e8(0x117)]=![],_0x52d974[_0x5f51e8(0xd9)]=0xa,_0x52d974['executeOn'](_0xfe561d),targetWindow=ImageWindow[_0x5f51e8(0x10b)],targetWindow&&(console['writeln'](_0x5f51e8(0xc1)+identifierName),targetWindow[_0x5f51e8(0xe7)]());}function crop(_0x2a2b2d){var _0x3499d5=_0x294730,_0x1d2354=new Crop();_0x1d2354[_0x3499d5(0xff)]=-0x184,_0x1d2354[_0x3499d5(0x101)]=-0x102,_0x1d2354[_0x3499d5(0xd6)]=-0x184,_0x1d2354[_0x3499d5(0x10e)]=-0x102,_0x1d2354[_0x3499d5(0xcd)]=Crop[_0x3499d5(0x17c)]['AbsolutePixels'],_0x1d2354['xResolution']=0x64,_0x1d2354[_0x3499d5(0xe3)]=0x64,_0x1d2354[_0x3499d5(0xb7)]=![],_0x1d2354[_0x3499d5(0xd4)]=![],_0x1d2354[_0x3499d5(0x16b)]=0x0,_0x1d2354[_0x3499d5(0xe1)]=0x0,_0x1d2354[_0x3499d5(0x102)]=0x0,_0x1d2354[_0x3499d5(0x167)]=0x1,_0x1d2354[_0x3499d5(0x193)]=![],_0x1d2354[_0x3499d5(0xfa)](_0x2a2b2d),targetWindow=ImageWindow[_0x3499d5(0x10b)],targetWindow&&(console[_0x3499d5(0xd1)](_0x3499d5(0xc1)+identifierName),targetWindow[_0x3499d5(0xe7)]());}function checkSubs(){var _0x109f95=_0x294730,_0x5b548a=!![],_0x1571e1=!![],_0x56712b=!![],_0x5d9a5f=!![];try{target('s');}catch(_0x24233c){noS=!![],_0x5b548a=![],console['writeln']('Didn\x27t\x20find\x20sub:\x20s');}try{target('h');}catch(_0x39afb0){_0x1571e1=![],console['writeln'](_0x109f95(0x133));}try{target('s');}catch(_0x345f15){_0x56712b=![],console[_0x109f95(0xd1)](_0x109f95(0xac));}try{target(_0x109f95(0x174));}catch(_0xa25929){_0x5d9a5f=![],console[_0x109f95(0xd1)](_0x109f95(0x145));}_0x1571e1==!![]&&(_0x56712b==!![]&&(_0x5b548a==!![]?mono=!![]:(mono=!![],noS=!![])));;_0x5d9a5f==!![]&&(osc=!![]);}function _0x40bb(){var _0x5ae689=['Inverting\x20image\x20and\x20removing\x20magenta\x20stars!','replaceTarget','distortionCorrection','ransacMinimizeError','sho','overlap','s_registered','targets','boxSeparation','FitPSF_DistortionOnly','allowClusteredSources','hoo','scalingFunctionRowFilter','useTriangles','image','executeOn','ransacTolerance','9DmeWJc','pixelInterpolation','truncateLower','leftMargin','CIELab','topMargin','blue','MAD','boxSize','NoFunction','scaleDelta','\x20Extract\x20L\x20from\x20image:\x20','maxFileReadThreads','linearMaskPreview','localDistortionRejection','activeWindow','onError','fitPSF','bottomMargin','useScaleDifferences','useSingleExpression','maskPostfix','expression3','previewMode','adjust_halos','descriptorsPerStar','newImageSampleFormat','compareModel','highRange','localDistortion','targetCorrection','\x20Denoise\x20image:\x20','10NmkULO','Green','scalingFunctionNoiseSigma','brightThreshold','Auto','RGB','Gray','minBoxFraction','rgbHubble','iconize','mul','zoomFactor','generateMasks','ransacMaximizeInliers','rescaleUpper','overwriteExistingFiles','symbols','localDistortionRegularization','intersection','r*0.7+b*0.3','expression1','useMultiresolutionSupport','amount','Didn\x27t\x20find\x20sub:\x20h','previewLayer','scaleTolerance','3802815ouxtEe','isColor','maxFileWriteThreads','memoryLoadLimit','writeKeywords','psfTolerance','outputExtension','3967740sHMJWt','undistortedReference','localDistortionRejectionWindow','truncate','truncateUpper','distortionModel','singleThreaded','verboseCoefficients','Didn\x27t\x20find\x20sub:\x20rgb','deringingDark','SameAsTarget','range','curveBreakPoint','preserveLightness','currentView','modelImageSampleFormat','f32','nonstellar_then_stellar','newImageColorSpace','referenceImage','colorSpace','linearMaskInverted','\x20Run\x20blurX\x20on\x20image:\x20','scalingFunctionName','generateDrizzleData','distortionAmplitude','\x20Inverting\x20image:\x20','expression','memoryLoadControl','xResolution','toLuminance','MosaicOnly','SeparateChannels','protectionMethod','SameAsSource','polygonSides','c1\x20=\x20%.6f','RegisterMatch','cacheGeneratedImages','C\x20Astronomy\x20stream\x20script','mtf','useFileThreads','alpha','\x20Run\x20starX\x20on\x20image:\x20','_dm','18939811eSmsZh','red','linearMaskAmpFactor','hos','noiseReductionFilterRadius','abeDownsample','noiseThreshold','noiseThresholding','useSurfaceSplines','Disabled','rgb','1YSdWAt','\x20\x20Apply\x20STF\x20on\x20','outputHints','sharpen_nonstellar','frameAdaptation','rescaleLower','createNewImage','prototype','scalingFunctionColFilter','inheritAstrometricSolution','Continue','outputDeringingMaps','stars','computeOrFetchProperty','hso','distortionMapPostfix','useBrightnessRelations','referenceIsFile','useBrightnessLimits','newImageWidth','colorToRemove','newImageHeight','distortionTolerance','MultiscaleLinearTransform','20ZTLazy','maxStarDistortion','denoise','scalingFunctionData','ransacMaximizeRegularity','5586876QgeeiR','noGUIMessages','c0\x20=\x20%.6f','newImageAlpha','downsamplingMode','forceClose','restrictToPreviews','\x20\x20Reset\x20STF\x20on\x20image:\x20','correctedImageSampleFormat','justTrySamples','Didn\x27t\x20find\x20sub:\x20o','largeScaleFunction','inputHints','STF','upperLimit','channels','newImageId','gammaCorrection','transform','writeSampleBoxes','structureLayers','metric','toChrominance','peakResponse','randomizeMosaic','softThresholding','showNewImage','lowRange','ai_file','interaction','linearMaskSmoothness','Found\x20the\x20window:\x20','sampleFormat','hubble','outputPrefix','matcherTolerance','layers','localDistortionTolerance','Script\x20DONE','maxStars','linear','unscreen','sharpen_stars','mode','deringing','polyDegree','Median','writeln','ransacMaximizeOverlapping','minBackground','forceResolution','1851016IRxRvD','rightMargin','\x20Applying\x20SCNR\x20on\x20image:\x20','C:\x5cProgram\x20Files\x5cPixInsight\x5clibrary\x5cBlurXTerminator.2.pb','compareFactor','stf','1818578JsGLLv','clearImageCacheAndExit','use64BitWorkingImage','expression2','rescale','generateOutput','green','Scnr\x20100%\x20on\x20image\x20for\x20the\x20Hubble\x20look!','yResolution','hotPixelFilterRadius','o_registered','Subtract','bringToFront','533202mCfMWW','deringingBright','optimization'];_0x40bb=function(){return _0x5ae689;};return _0x40bb();};function runOSCDualNarrowband(){};function run(){var _0x4abd5f=_0x294730;checkSubs();if(osc==!![]){target(_0x4abd5f(0x174)),extractRGB(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);useIntegerResample==!![]&&(target('r'),integerResample(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]),target('g'),integerResample(ImageWindow[_0x4abd5f(0x10b)]['currentView']),target('b'),integerResample(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]));target(_0x4abd5f(0x174)),fakeS(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),palette='rgbHubble',pixelMathCombination(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)],palette),target(_0x4abd5f(0x124));useCrop==!![]&&crop(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);;useAbe==!![]&&abe(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]);;useBlurX==!![]&&blurX(ImageWindow['activeWindow']['currentView']);;useStarX==!![]&&starX(ImageWindow['activeWindow']['currentView']);;STFAutoStretch(ImageWindow[_0x4abd5f(0x10b)]['currentView']),applySTF(ImageWindow['activeWindow'][_0x4abd5f(0x14b)],ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]['stf'],!![]),stfReset(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);removeMagentaStars==!![]&&(console[_0x4abd5f(0xd1)](_0x4abd5f(0xeb)),invert(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),scnr(ImageWindow['activeWindow']['currentView']),invert(ImageWindow[_0x4abd5f(0x10b)]['currentView']));;createSuperLum==!![]&&(chanelExtract(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]),target(_0x4abd5f(0x124)));;useScnr==!![]&&(console['writeln'](_0x4abd5f(0xe2)),scnr(ImageWindow[_0x4abd5f(0x10b)]['currentView']));;scnr(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);useNoiseX==!![]&&noiseX(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);;cleanup==!![]&&(target('r'),targetWindow[_0x4abd5f(0x197)](),target('g'),targetWindow[_0x4abd5f(0x197)](),target('b'),targetWindow[_0x4abd5f(0x197)](),target('gS'),targetWindow['forceClose']());};if(mono==!![]){if(useIntegerResample==!![]){noS==!![]?(target('h'),integerResample(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),target('o'),integerResample(ImageWindow[_0x4abd5f(0x10b)]['currentView'])):(target('h'),integerResample(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]),target('s'),integerResample(ImageWindow[_0x4abd5f(0x10b)]['currentView']),target('o'),integerResample(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]));;}alignment();noS==!![]?(target('h'),target('h'),abe(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]),targetWindow[_0x4abd5f(0x125)](),target('o'),target(_0x4abd5f(0xe5)),abe(ImageWindow[_0x4abd5f(0x10b)]['currentView']),targetWindow[_0x4abd5f(0x125)]()):(target('s'),target(_0x4abd5f(0xf1)),abe(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]),targetWindow[_0x4abd5f(0x125)](),target('h'),target('h'),abe(ImageWindow[_0x4abd5f(0x10b)]['currentView']),targetWindow[_0x4abd5f(0x125)](),target('o'),target('o_registered'),abe(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]),targetWindow[_0x4abd5f(0x125)]());if(useSHO){palette=_0x4abd5f(0xef),pixelMathCombination(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)],palette),target(_0x4abd5f(0xef));useCrop==!![]&&crop(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);;useAbe==!![]&&abe(ImageWindow[_0x4abd5f(0x10b)]['currentView']);;useBlurX==!![]&&blurX(ImageWindow[_0x4abd5f(0x10b)]['currentView']);;useStarX==!![]&&(starX(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),target(_0x4abd5f(0xef)));;STFAutoStretch(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),applySTF(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)],ImageWindow['activeWindow']['currentView']['stf'],!![]),stfReset(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);removeMagentaStars==!![]&&(console[_0x4abd5f(0xd1)](_0x4abd5f(0xeb)),invert(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),scnr(ImageWindow[_0x4abd5f(0x10b)]['currentView']),invert(ImageWindow[_0x4abd5f(0x10b)]['currentView']));;createSuperLum==!![]&&(chanelExtract(ImageWindow[_0x4abd5f(0x10b)]['currentView']),target(_0x4abd5f(0xef)));;useScnr==!![]&&(console['writeln'](_0x4abd5f(0xe2)),scnr(ImageWindow[_0x4abd5f(0x10b)]['currentView']));;abe(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]);useNoiseX==!![]&&noiseX(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);;};if(useHUBBLE){palette=_0x4abd5f(0xc3),pixelMathCombination(ImageWindow[_0x4abd5f(0x10b)]['currentView'],palette),target(_0x4abd5f(0xc3));useCrop==!![]&&crop(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);;useAbe==!![]&&abe(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);;useBlurX==!![]&&blurX(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);;useStarX==!![]&&(starX(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),target('hubble'));;STFAutoStretch(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),applySTF(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)],ImageWindow[_0x4abd5f(0x10b)]['currentView'][_0x4abd5f(0xda)],!![]),stfReset(ImageWindow['activeWindow']['currentView']),console['writeln'](_0x4abd5f(0xeb)),invert(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),scnr(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]),invert(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);createSuperLum==!![]&&(chanelExtract(ImageWindow['activeWindow']['currentView']),target(_0x4abd5f(0xc3)));;console[_0x4abd5f(0xd1)](_0x4abd5f(0xe2)),scnr(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]);useNoiseX==!![]&&noiseX(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);;};if(useHOO){palette='hoo',pixelMathCombination(ImageWindow['activeWindow'][_0x4abd5f(0x14b)],palette),target(_0x4abd5f(0xf6));useCrop==!![]&&crop(ImageWindow[_0x4abd5f(0x10b)]['currentView']);;useAbe==!![]&&abe(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]);;useBlurX==!![]&&blurX(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]);;useStarX==!![]&&(starX(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),target(_0x4abd5f(0xf6)));;STFAutoStretch(ImageWindow[_0x4abd5f(0x10b)]['currentView']),applySTF(ImageWindow['activeWindow'][_0x4abd5f(0x14b)],ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)][_0x4abd5f(0xda)],!![]),stfReset(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);removeMagentaStars==!![]&&(console[_0x4abd5f(0xd1)](_0x4abd5f(0xeb)),invert(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),scnr(ImageWindow[_0x4abd5f(0x10b)]['currentView']),invert(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]));;createSuperLum==!![]&&(chanelExtract(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]),target(_0x4abd5f(0xf6)));;console['writeln'](_0x4abd5f(0xe2)),scnr(ImageWindow[_0x4abd5f(0x10b)][_0x4abd5f(0x14b)]);useNoiseX==!![]&&noiseX(ImageWindow['activeWindow'][_0x4abd5f(0x14b)]);;};cleanup==!![]&&(noS==!![]?(target('h'),targetWindow['forceClose'](),target('o'),targetWindow[_0x4abd5f(0x197)](),target(_0x4abd5f(0xe5)),targetWindow[_0x4abd5f(0x197)]()):(target('s'),targetWindow['forceClose'](),target(_0x4abd5f(0xf1)),targetWindow['forceClose'](),target('h'),targetWindow[_0x4abd5f(0x197)](),target('o'),targetWindow['forceClose'](),target(_0x4abd5f(0xe5)),targetWindow[_0x4abd5f(0x197)]()));;};console[_0x4abd5f(0xd1)](_0x4abd5f(0xc8));};