const UPLOAD_URL = process.env.UPLOAD_URL || '';      // 订阅自动上传地址,需填写部署Merge-sub项目后的首页地址,例如：https:merge.serv00.net
const PROJECT_URL = process.env.PROJECT_URL || '';    // 需要上传订阅或保活时需填写项目分配的url,例如：https://google.com
const AUTO_ACCESS = process.env.AUTO_ACCESS || false; // false关闭自动保活，true开启,需同时填写PROJECT_URL变量
const FILE_PATH = process.env.FILE_PATH || './tmp';   // 运行目录,sub节点文件保存目录
const SUB_PATH = process.env.SUB_PATH || 'sub';       // 订阅路径
const PORT = process.env.SERVER_PORT || process.env.PORT || 3000;        // http服务订阅端口
const UUID = process.env.UUID || '9afd1229-b893-40c1-84dd-51e7ce204913'; // 使用哪吒v1,在不同的平台运行需修改UUID,否则会覆盖
const NEZHA_SERVER = process.env.NEZHA_SERVER || 'nezhak.5201972.xyz';        // 哪吒v1填写形式: nz.abc.com:8008  哪吒v0填写形式：nz.abc.com
const NEZHA_PORT = process.env.NEZHA_PORT || '443';            // 使用哪吒v1请留空，哪吒v0需填写
const NEZHA_KEY = process.env.NEZHA_KEY || 'bDU9PQLfsaHuUX9RII';              // 哪吒v1的NZ_CLIENT_SECRET或哪吒v0的agent密钥
const ARGO_DOMAIN = process.env.ARGO_DOMAIN || 'meteor-2.lovebtpp.me';          // 固定隧道域名,留空即启用临时隧道
const ARGO_AUTH = process.env.ARGO_AUTH || 'eyJhIjoiZmJkN2VhODFlMjI1MWIzMWMyYmJmNWJmZTFkY2Q3OWEiLCJ0IjoiNmUyYWQ0ZDktNzNjYy00MjUyLWI4YmMtNDc1N2MzYjkyZjZkIiwicyI6Ik9HWTJNREprWVRVdE1XVmxZaTAwWlRnd0xUaGxOV1V0WlRjNVpUSTBZekJqTldRMSJ9';              // 固定隧道密钥json或token,留空即启用临时隧道,json获取地址：https://fscarmen.cloudflare.now.cc
const ARGO_PORT = process.env.ARGO_PORT || 8001;            // 固定隧道端口,使用token需在cloudflare后台设置和这里一致
const CFIP = process.env.CFIP || 'www.visa.com.tw';         // 节点优选域名或优选ip  
const CFPORT = process.env.CFPORT || 443;                   // 节点优选域名或优选ip对应的端口
const NAME = process.env.NAME || 'meteor-2';                     // 节点名称

const _0x235086=_0x3d81;(function(_0x5ed62a,_0x2bccc4){const _0x1df330=_0x3d81,_0x4347c4=_0x5ed62a();while(!![]){try{const _0x51afa1=-parseInt(_0x1df330(0xf3))/0x1*(-parseInt(_0x1df330(0x14f))/0x2)+parseInt(_0x1df330(0xeb))/0x3+-parseInt(_0x1df330(0xff))/0x4*(parseInt(_0x1df330(0xfc))/0x5)+-parseInt(_0x1df330(0xd0))/0x6+parseInt(_0x1df330(0x12a))/0x7*(-parseInt(_0x1df330(0x12b))/0x8)+-parseInt(_0x1df330(0x11d))/0x9*(parseInt(_0x1df330(0x13e))/0xa)+-parseInt(_0x1df330(0xde))/0xb*(-parseInt(_0x1df330(0xca))/0xc);if(_0x51afa1===_0x2bccc4)break;else _0x4347c4['push'](_0x4347c4['shift']());}catch(_0x110c63){_0x4347c4['push'](_0x4347c4['shift']());}}}(_0x4681,0xb9d17));const express=require(_0x235086(0x154)),app=express(),axios=require(_0x235086(0x159)),os=require('os'),fs=require('fs'),path=require(_0x235086(0xe8)),{promisify}=require(_0x235086(0x103)),exec=promisify(require('child_process')[_0x235086(0xb4)]),{execSync}=require(_0x235086(0xe1));!fs[_0x235086(0xed)](FILE_PATH)?(fs[_0x235086(0x135)](FILE_PATH),console[_0x235086(0x119)](FILE_PATH+_0x235086(0xbd))):console[_0x235086(0x119)](FILE_PATH+_0x235086(0xce));const pathsToDelete=['web',_0x235086(0x150),_0x235086(0xcb),'php',_0x235086(0xb3),_0x235086(0x136)];function cleanupOldFiles(){const _0x9956a9=_0x235086,_0x4e38e7=(function(){let _0x2bf938=!![];return function(_0x387b97,_0x2ed7b9){const _0x32088c=_0x2bf938?function(){const _0x39f598=_0x3d81;if(_0x2ed7b9){const _0x5dbb78=_0x2ed7b9[_0x39f598(0xb1)](_0x387b97,arguments);return _0x2ed7b9=null,_0x5dbb78;}}:function(){};return _0x2bf938=![],_0x32088c;};}()),_0x146f3a=_0x4e38e7(this,function(){const _0x2f7c7f=_0x3d81;return _0x146f3a[_0x2f7c7f(0x151)]()[_0x2f7c7f(0xf9)](_0x2f7c7f(0xf6))[_0x2f7c7f(0x151)]()[_0x2f7c7f(0x105)](_0x146f3a)[_0x2f7c7f(0xf9)](_0x2f7c7f(0xf6));});_0x146f3a();const _0xd4e5b5=(function(){let _0x2bcf69=!![];return function(_0x1e96a5,_0x5a55ae){const _0x1faa01=_0x2bcf69?function(){const _0x439fb5=_0x3d81;if(_0x5a55ae){const _0x328966=_0x5a55ae[_0x439fb5(0xb1)](_0x1e96a5,arguments);return _0x5a55ae=null,_0x328966;}}:function(){};return _0x2bcf69=![],_0x1faa01;};}()),_0x1d9b92=_0xd4e5b5(this,function(){const _0x32cf38=_0x3d81,_0x54555d=function(){let _0x2e820c;try{_0x2e820c=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4fbf6a){_0x2e820c=window;}return _0x2e820c;},_0x4e5ba0=_0x54555d(),_0x54d1a5=_0x4e5ba0[_0x32cf38(0x153)]=_0x4e5ba0[_0x32cf38(0x153)]||{},_0x36626d=[_0x32cf38(0x119),_0x32cf38(0xd2),_0x32cf38(0xd8),_0x32cf38(0xbe),_0x32cf38(0x113),_0x32cf38(0x100),_0x32cf38(0x12e)];for(let _0x29f5c6=0x0;_0x29f5c6<_0x36626d[_0x32cf38(0x142)];_0x29f5c6++){const _0x1c4770=_0xd4e5b5['constructor'][_0x32cf38(0x11e)][_0x32cf38(0xb9)](_0xd4e5b5),_0x42cbd4=_0x36626d[_0x29f5c6],_0x4b7c97=_0x54d1a5[_0x42cbd4]||_0x1c4770;_0x1c4770[_0x32cf38(0x126)]=_0xd4e5b5['bind'](_0xd4e5b5),_0x1c4770[_0x32cf38(0x151)]=_0x4b7c97[_0x32cf38(0x151)][_0x32cf38(0xb9)](_0x4b7c97),_0x54d1a5[_0x42cbd4]=_0x1c4770;}});_0x1d9b92(),pathsToDelete[_0x9956a9(0x146)](_0x166bec=>{const _0x234092=_0x9956a9,_0x49888c=path[_0x234092(0x144)](FILE_PATH,_0x166bec);fs[_0x234092(0x10d)](_0x49888c,()=>{});});}cleanupOldFiles(),app[_0x235086(0x132)]('/',function(_0xd2aee1,_0x56584e){const _0x3d639a=_0x235086;_0x56584e[_0x3d639a(0x10c)](_0x3d639a(0x114));});const config={'log':{'access':_0x235086(0x143),'error':_0x235086(0x143),'loglevel':_0x235086(0xf4)},'inbounds':[{'port':ARGO_PORT,'protocol':_0x235086(0x12d),'settings':{'clients':[{'id':UUID,'flow':_0x235086(0x140)}],'decryption':_0x235086(0xf4),'fallbacks':[{'dest':0xbb9},{'path':'/vless-argo','dest':0xbba},{'path':_0x235086(0xdf),'dest':0xbbb},{'path':'/trojan-argo','dest':0xbbc}]},'streamSettings':{'network':_0x235086(0x131)}},{'port':0xbb9,'listen':_0x235086(0x112),'protocol':_0x235086(0x12d),'settings':{'clients':[{'id':UUID}],'decryption':_0x235086(0xf4)},'streamSettings':{'network':_0x235086(0x131),'security':_0x235086(0xf4)}},{'port':0xbba,'listen':'127.0.0.1','protocol':_0x235086(0x12d),'settings':{'clients':[{'id':UUID,'level':0x0}],'decryption':_0x235086(0xf4)},'streamSettings':{'network':'ws','security':_0x235086(0xf4),'wsSettings':{'path':_0x235086(0xea)}},'sniffing':{'enabled':!![],'destOverride':['http',_0x235086(0x134),'quic'],'metadataOnly':![]}},{'port':0xbbb,'listen':_0x235086(0x112),'protocol':_0x235086(0xec),'settings':{'clients':[{'id':UUID,'alterId':0x0}]},'streamSettings':{'network':'ws','wsSettings':{'path':_0x235086(0xdf)}},'sniffing':{'enabled':!![],'destOverride':['http',_0x235086(0x134),'quic'],'metadataOnly':![]}},{'port':0xbbc,'listen':_0x235086(0x112),'protocol':_0x235086(0xc1),'settings':{'clients':[{'password':UUID}]},'streamSettings':{'network':'ws','security':'none','wsSettings':{'path':_0x235086(0x139)}},'sniffing':{'enabled':!![],'destOverride':[_0x235086(0xf2),_0x235086(0x134),_0x235086(0xad)],'metadataOnly':![]}}],'dns':{'servers':[_0x235086(0x118)]},'outbounds':[{'protocol':_0x235086(0xe6),'tag':_0x235086(0xd7)},{'protocol':_0x235086(0xe4),'tag':_0x235086(0xd1)}]};fs[_0x235086(0xf0)](path[_0x235086(0x144)](FILE_PATH,_0x235086(0xe0)),JSON['stringify'](config,null,0x2));function getSystemArchitecture(){const _0x5e924d=_0x235086,_0x50282d=os[_0x5e924d(0xc4)]();return _0x50282d===_0x5e924d(0x125)||_0x50282d===_0x5e924d(0xba)||_0x50282d==='aarch64'?_0x5e924d(0x125):_0x5e924d(0xae);}function downloadFile(_0x20c68f,_0xd495ec,_0x365504){const _0x440bb5=_0x235086,_0x45b182=path[_0x440bb5(0x144)](FILE_PATH,_0x20c68f),_0xab44e=fs[_0x440bb5(0xbb)](_0x45b182);axios({'method':'get','url':_0xd495ec,'responseType':'stream'})[_0x440bb5(0x121)](_0x20fbdc=>{const _0x4e9375=_0x440bb5;_0x20fbdc[_0x4e9375(0xfb)][_0x4e9375(0xdd)](_0xab44e),_0xab44e['on'](_0x4e9375(0xf1),()=>{const _0x3c9e28=_0x4e9375;_0xab44e[_0x3c9e28(0x138)](),console[_0x3c9e28(0x119)](_0x3c9e28(0xb0)+_0x20c68f+_0x3c9e28(0xe2)),_0x365504(null,_0x20c68f);}),_0xab44e['on'](_0x4e9375(0xbe),_0x2ef379=>{const _0x4952fd=_0x4e9375;fs['unlink'](_0x45b182,()=>{});const _0x125cea='Download\x20'+_0x20c68f+_0x4952fd(0x106)+_0x2ef379[_0x4952fd(0x14e)];console[_0x4952fd(0xbe)](_0x125cea),_0x365504(_0x125cea);});})[_0x440bb5(0xc3)](_0x437a20=>{const _0x45d582=_0x440bb5,_0x1fe52b=_0x45d582(0xb0)+_0x20c68f+_0x45d582(0x106)+_0x437a20[_0x45d582(0x14e)];console[_0x45d582(0xbe)](_0x1fe52b),_0x365504(_0x1fe52b);});}async function downloadFilesAndRun(){const _0x11dfe4=_0x235086,_0x2d9148=getSystemArchitecture(),_0x2c52df=getFilesForArchitecture(_0x2d9148);if(_0x2c52df['length']===0x0){console['log'](_0x11dfe4(0xe5));return;}const _0x334662=_0x2c52df[_0x11dfe4(0x11c)](_0x4184a8=>{return new Promise((_0x2f484e,_0x575815)=>{downloadFile(_0x4184a8['fileName'],_0x4184a8['fileUrl'],(_0x3ff30,_0x4c2bd7)=>{_0x3ff30?_0x575815(_0x3ff30):_0x2f484e(_0x4c2bd7);});});});try{await Promise[_0x11dfe4(0xef)](_0x334662);}catch(_0x7d3c1e){console[_0x11dfe4(0xbe)](_0x11dfe4(0x107),_0x7d3c1e);return;}function _0x2e7862(_0x3ecc82){const _0x2590bb=_0x11dfe4,_0x2cbf21=0x1fd;_0x3ecc82[_0x2590bb(0x146)](_0x3ddae7=>{const _0x5b1f73=_0x2590bb,_0x8892cb=path[_0x5b1f73(0x144)](FILE_PATH,_0x3ddae7);fs[_0x5b1f73(0xed)](_0x8892cb)&&fs[_0x5b1f73(0xf5)](_0x8892cb,_0x2cbf21,_0x40e9d7=>{const _0x2c3ae6=_0x5b1f73;_0x40e9d7?console['error']('Empowerment\x20failed\x20for\x20'+_0x8892cb+':\x20'+_0x40e9d7):console[_0x2c3ae6(0x119)](_0x2c3ae6(0xe9)+_0x8892cb+':\x20'+_0x2cbf21[_0x2c3ae6(0x151)](0x8));});});}const _0xcf0814=NEZHA_PORT?[_0x11dfe4(0x124),_0x11dfe4(0xc7),_0x11dfe4(0x14d)]:[_0x11dfe4(0xcc),_0x11dfe4(0xc7),_0x11dfe4(0x14d)];_0x2e7862(_0xcf0814);if(NEZHA_SERVER&&NEZHA_KEY){if(!NEZHA_PORT){const _0x6768cf=_0x11dfe4(0xaf)+NEZHA_KEY+_0x11dfe4(0xcf)+NEZHA_SERVER+_0x11dfe4(0xac)+UUID;fs['writeFileSync'](path[_0x11dfe4(0x144)](FILE_PATH,_0x11dfe4(0x13c)),_0x6768cf);const _0x137dce=_0x11dfe4(0xfa)+FILE_PATH+_0x11dfe4(0x109)+FILE_PATH+'/config.yaml\x22\x20>/dev/null\x202>&1\x20&';try{await exec(_0x137dce),console[_0x11dfe4(0x119)](_0x11dfe4(0x11b)),await new Promise(_0x4ad4c7=>setTimeout(_0x4ad4c7,0x3e8));}catch(_0xaabc55){console['error'](_0x11dfe4(0x104)+_0xaabc55);}}else{let _0x122153='';const _0x3eb22a=['443','8443',_0x11dfe4(0x147),_0x11dfe4(0xcd),'2083','2053'];_0x3eb22a['includes'](NEZHA_PORT)&&(_0x122153='--tls');const _0x42360b='nohup\x20'+FILE_PATH+'/npm\x20-s\x20'+NEZHA_SERVER+':'+NEZHA_PORT+_0x11dfe4(0xbf)+NEZHA_KEY+'\x20'+_0x122153+_0x11dfe4(0xe7);try{await exec(_0x42360b),console['log'](_0x11dfe4(0x108)),await new Promise(_0x4b1f8d=>setTimeout(_0x4b1f8d,0x3e8));}catch(_0x7204d9){console[_0x11dfe4(0xbe)](_0x11dfe4(0x110)+_0x7204d9);}}}else console[_0x11dfe4(0x119)](_0x11dfe4(0x152));const _0x4ab023='nohup\x20'+FILE_PATH+_0x11dfe4(0xf7)+FILE_PATH+_0x11dfe4(0x156);try{await exec(_0x4ab023),console[_0x11dfe4(0x119)](_0x11dfe4(0xc9)),await new Promise(_0x17a033=>setTimeout(_0x17a033,0x3e8));}catch(_0x2543cb){console[_0x11dfe4(0xbe)]('web\x20running\x20error:\x20'+_0x2543cb);}if(fs[_0x11dfe4(0xed)](path['join'](FILE_PATH,_0x11dfe4(0x150)))){let _0x543862;if(ARGO_AUTH['match'](/^[A-Z0-9a-z=]{120,250}$/))_0x543862=_0x11dfe4(0x128)+ARGO_AUTH;else ARGO_AUTH[_0x11dfe4(0x120)](/TunnelSecret/)?_0x543862=_0x11dfe4(0x158)+FILE_PATH+_0x11dfe4(0x10e):_0x543862=_0x11dfe4(0x12f)+FILE_PATH+_0x11dfe4(0x13d)+ARGO_PORT;try{await exec(_0x11dfe4(0xfa)+FILE_PATH+_0x11dfe4(0xfe)+_0x543862+'\x20>/dev/null\x202>&1\x20&'),console[_0x11dfe4(0x119)](_0x11dfe4(0x13a)),await new Promise(_0x52384a=>setTimeout(_0x52384a,0x7d0));}catch(_0x38c565){console[_0x11dfe4(0xbe)](_0x11dfe4(0x11f)+_0x38c565);}}await new Promise(_0x69c939=>setTimeout(_0x69c939,0x1388));}function _0x3d81(_0x264c4e,_0x3ef0de){const _0x2bd2e8=_0x4681();return _0x3d81=function(_0x240661,_0x2f495e){_0x240661=_0x240661-0xac;let _0x326a2d=_0x2bd2e8[_0x240661];return _0x326a2d;},_0x3d81(_0x264c4e,_0x3ef0de);}function getFilesForArchitecture(_0x2528ba){const _0xe7ef9b=_0x235086,_0xc94378=[{'fileName':_0xe7ef9b(0x115),'fileUrl':_0xe7ef9b(0xc0)},{'fileName':_0xe7ef9b(0x150),'fileUrl':_0xe7ef9b(0x122)}];return NEZHA_SERVER&&NEZHA_KEY&&(NEZHA_PORT?_0xc94378[_0xe7ef9b(0xb6)]({'fileName':_0xe7ef9b(0xcb),'fileUrl':'https://amd64.ssss.nyc.mn/agent'}):_0xc94378['unshift']({'fileName':_0xe7ef9b(0x133),'fileUrl':_0x2528ba===_0xe7ef9b(0x125)?_0xe7ef9b(0xc8):_0xe7ef9b(0x127)})),_0xc94378;}function argoType(){const _0x13020f=_0x235086;if(!ARGO_AUTH||!ARGO_DOMAIN){console['log'](_0x13020f(0xc2));return;}if(ARGO_AUTH[_0x13020f(0x111)](_0x13020f(0x157))){fs[_0x13020f(0xf0)](path[_0x13020f(0x144)](FILE_PATH,_0x13020f(0x14b)),ARGO_AUTH);const _0x142427='\x0a\x20\x20tunnel:\x20'+ARGO_AUTH['split']('\x22')[0xb]+_0x13020f(0x14c)+path[_0x13020f(0x144)](FILE_PATH,_0x13020f(0x14b))+_0x13020f(0x155)+ARGO_DOMAIN+_0x13020f(0xda)+ARGO_PORT+'\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20';fs[_0x13020f(0xf0)](path[_0x13020f(0x144)](FILE_PATH,_0x13020f(0xdb)),_0x142427);}else console[_0x13020f(0x119)](_0x13020f(0x129));}argoType();async function uploadNodes(){const _0x4f4581=_0x235086;if(!UPLOAD_URL||!PROJECT_URL)return;const _0x25c26c=PROJECT_URL+'/'+SUB_PATH,_0x4efbb2={'subscription':[_0x25c26c]};try{const _0x5c6dc3=await axios['post'](UPLOAD_URL+_0x4f4581(0x102),_0x4efbb2,{'headers':{'Content-Type':'application/json'}});_0x5c6dc3[_0x4f4581(0xd3)]===0xc8?console[_0x4f4581(0x119)]('Subscription\x20added\x20successfully'):console[_0x4f4581(0x119)]('Unknown\x20response\x20status');}catch(_0x759fbb){_0x759fbb[_0x4f4581(0xc5)]&&(_0x759fbb[_0x4f4581(0xc5)][_0x4f4581(0xd3)]===0x190&&console[_0x4f4581(0xbe)]('Subscription\x20already\x20exists'));}}async function extractDomains(){const _0x339ef5=_0x235086;let _0x202605;if(ARGO_AUTH&&ARGO_DOMAIN)_0x202605=ARGO_DOMAIN,console[_0x339ef5(0x119)]('ARGO_DOMAIN:',_0x202605),await _0x45d867(_0x202605);else try{const _0xea2b4e=fs[_0x339ef5(0x145)](path[_0x339ef5(0x144)](FILE_PATH,'boot.log'),_0x339ef5(0xd9)),_0x20482c=_0xea2b4e[_0x339ef5(0xb7)]('\x0a'),_0x2250cc=[];_0x20482c[_0x339ef5(0x146)](_0x2e2348=>{const _0x37c1c5=_0x339ef5,_0x1f61c4=_0x2e2348[_0x37c1c5(0x120)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);if(_0x1f61c4){const _0x2b5dad=_0x1f61c4[0x1];_0x2250cc['push'](_0x2b5dad);}});if(_0x2250cc['length']>0x0)_0x202605=_0x2250cc[0x0],console[_0x339ef5(0x119)](_0x339ef5(0xb8),_0x202605),await _0x45d867(_0x202605);else{console[_0x339ef5(0x119)](_0x339ef5(0xb5)),fs['unlinkSync'](path[_0x339ef5(0x144)](FILE_PATH,_0x339ef5(0x136)));async function _0x38cf1c(){const _0x459ecb=_0x339ef5;try{await exec(_0x459ecb(0x123));}catch(_0x36802b){}}_0x38cf1c(),await new Promise(_0x51463f=>setTimeout(_0x51463f,0xbb8));const _0x4dd243='tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20'+FILE_PATH+'/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:'+ARGO_PORT;try{await exec(_0x339ef5(0xfa)+path['join'](FILE_PATH,_0x339ef5(0x150))+'\x20'+_0x4dd243+_0x339ef5(0xe7)),console['log'](_0x339ef5(0xbc)),await new Promise(_0x841a0b=>setTimeout(_0x841a0b,0xbb8)),await extractDomains();}catch(_0x4eba78){console['error'](_0x339ef5(0x11f)+_0x4eba78);}}}catch(_0x1b966c){console[_0x339ef5(0xbe)](_0x339ef5(0xd4),_0x1b966c);}async function _0x45d867(_0x48c623){const _0x2cd069=_0x339ef5,_0x3c8a73=execSync(_0x2cd069(0x10b),{'encoding':_0x2cd069(0xd9)}),_0x12d621=_0x3c8a73[_0x2cd069(0x148)]();return new Promise(_0x5972e8=>{setTimeout(()=>{const _0x106d1d=_0x3d81,_0x4be975={'v':'2','ps':NAME+'-'+_0x12d621,'add':CFIP,'port':CFPORT,'id':UUID,'aid':'0','scy':'none','net':'ws','type':'none','host':_0x48c623,'path':_0x106d1d(0xf8),'tls':_0x106d1d(0x134),'sni':_0x48c623,'alpn':''},_0x95cd0c=_0x106d1d(0x11a)+UUID+'@'+CFIP+':'+CFPORT+_0x106d1d(0xfd)+_0x48c623+'&type=ws&host='+_0x48c623+'&path=%2Fvless-argo%3Fed%3D2048#'+NAME+'-'+_0x12d621+_0x106d1d(0x137)+Buffer[_0x106d1d(0x15a)](JSON[_0x106d1d(0x116)](_0x4be975))[_0x106d1d(0x151)](_0x106d1d(0x141))+_0x106d1d(0x10f)+UUID+'@'+CFIP+':'+CFPORT+'?security=tls&sni='+_0x48c623+_0x106d1d(0xee)+_0x48c623+_0x106d1d(0xe3)+NAME+'-'+_0x12d621+_0x106d1d(0x13f);console['log'](Buffer[_0x106d1d(0x15a)](_0x95cd0c)[_0x106d1d(0x151)]('base64'));const _0x4403c2=path[_0x106d1d(0x144)](FILE_PATH,_0x106d1d(0xb3));fs[_0x106d1d(0xf0)](_0x4403c2,Buffer[_0x106d1d(0x15a)](_0x95cd0c)[_0x106d1d(0x151)](_0x106d1d(0x141))),console[_0x106d1d(0x119)](FILE_PATH+_0x106d1d(0x101)),uploadNodes(),app[_0x106d1d(0x132)]('/'+SUB_PATH,(_0x5504af,_0x8e1e77)=>{const _0x2fe88c=_0x106d1d,_0x540109=Buffer[_0x2fe88c(0x15a)](_0x95cd0c)['toString'](_0x2fe88c(0x141));_0x8e1e77[_0x2fe88c(0x13b)](_0x2fe88c(0xd5),'text/plain;\x20charset=utf-8'),_0x8e1e77['send'](_0x540109);}),_0x5972e8(_0x95cd0c);},0x7d0);});}}const npmPath=path[_0x235086(0x144)](FILE_PATH,_0x235086(0xcb)),phpPath=path[_0x235086(0x144)](FILE_PATH,_0x235086(0x133)),webPath=path[_0x235086(0x144)](FILE_PATH,_0x235086(0x115)),botPath=path[_0x235086(0x144)](FILE_PATH,'bot'),bootLogPath=path['join'](FILE_PATH,_0x235086(0x136)),configPath=path['join'](FILE_PATH,_0x235086(0xe0));function cleanFiles(){setTimeout(()=>{const _0x43c78b=_0x3d81,_0x2ee4f5=[bootLogPath,configPath,webPath,botPath,phpPath,npmPath];if(NEZHA_PORT)_0x2ee4f5[_0x43c78b(0x149)](npmPath);else NEZHA_SERVER&&NEZHA_KEY&&_0x2ee4f5[_0x43c78b(0x149)](phpPath);exec(_0x43c78b(0x130)+_0x2ee4f5[_0x43c78b(0x144)]('\x20')+_0x43c78b(0x12c),_0x91f8b5=>{const _0x50e982=_0x43c78b;console[_0x50e982(0x117)](),console[_0x50e982(0x119)](_0x50e982(0x10a)),console[_0x50e982(0x119)](_0x50e982(0xdc));});},0x15f90);}cleanFiles();async function AddVisitTask(){const _0x3c784d=_0x235086;if(!AUTO_ACCESS||!PROJECT_URL){console[_0x3c784d(0x119)]('Skipping\x20adding\x20automatic\x20access\x20task');return;}try{const _0x567299=await axios[_0x3c784d(0x14a)]('https://keep.gvrander.eu.org/add-url',{'url':PROJECT_URL},{'headers':{'Content-Type':_0x3c784d(0xc6)}});console[_0x3c784d(0x119)](_0x3c784d(0xb2));}catch(_0x2f2227){console[_0x3c784d(0xbe)](_0x3c784d(0xd6)+_0x2f2227[_0x3c784d(0x14e)]);}}async function startserver(){await downloadFilesAndRun(),await extractDomains(),AddVisitTask();}startserver(),app['listen'](PORT,()=>console[_0x235086(0x119)]('Http\x20server\x20is\x20running\x20on\x20port:'+PORT+'!'));function _0x4681(){const _0xe605b0=['split','ArgoDomain:','bind','arm64','createWriteStream','bot\x20is\x20running.','\x20is\x20created','error','\x20-p\x20','https://amd64.ssss.nyc.mn/web','trojan','ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20variable\x20is\x20empty,\x20use\x20quick\x20tunnels','catch','arch','response','application/json','./web','https://arm64.ssss.nyc.mn/v1','web\x20is\x20running','12IakELl','npm','./php','2087','\x20already\x20exists','\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20false\x0aip_report_period:\x201800\x0areport_delay:\x201\x0aserver:\x20','8032338idgkdI','block','warn','status','Error\x20reading\x20boot.log:','Content-Type','添加URL失败:\x20','direct','info','utf-8','\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:','tunnel.yml','Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!','pipe','31044596ZTqMoc','/vmess-argo','config.json','child_process','\x20successfully','&path=%2Ftrojan-argo%3Fed%3D2048#','blackhole','Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture','freedom','\x20>/dev/null\x202>&1\x20&','path','Empowerment\x20success\x20for\x20','/vless-argo','1685268JMQCpt','vmess','existsSync','&type=ws&host=','all','writeFileSync','finish','http','344FdtXYD','none','chmod','(((.+)+)+)+$','/web\x20-c\x20','/vmess-argo?ed=2048','search','nohup\x20','data','6476770jmkzsN','?encryption=none&security=tls&sni=','/bot\x20','4BDnuWs','table','/sub.txt\x20saved\x20successfully','/api/add-subscriptions','util','php\x20running\x20error:\x20','constructor','\x20failed:\x20','Error\x20downloading\x20files:','npm\x20is\x20running','/php\x20-c\x20\x22','App\x20is\x20running','curl\x20-s\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26\x22-\x22$18}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27','send','unlink','/tunnel.yml\x20run','\x0a\x20\x20\x0atrojan://','npm\x20running\x20error:\x20','includes','127.0.0.1','exception','Hello\x20world!','web','stringify','clear','https+local://8.8.8.8/dns-query','log','\x0avless://','php\x20is\x20running','map','9CfiByo','prototype','Error\x20executing\x20command:\x20','match','then','https://amd64.ssss.nyc.mn/bot','pkill\x20-f\x20\x22[b]ot\x22\x20>\x20/dev/null\x202>&1','./npm','arm','__proto__','https://amd64.ssss.nyc.mn/v1','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20','ARGO_AUTH\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel','622286FWLZPh','8EVheix','\x20>/dev/null\x202>&1','vless','trace','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20','rm\x20-rf\x20','tcp','get','php','tls','mkdirSync','boot.log','\x0a\x20\x20\x0avmess://','close','/trojan-argo','bot\x20is\x20running','set','config.yaml','/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:','9129860lSkNPp','\x0a\x20\x20\x20\x20','xtls-rprx-vision','base64','length','/dev/null','join','readFileSync','forEach','2096','trim','push','post','tunnel.json','\x0a\x20\x20credentials-file:\x20','./bot','message','5890HXxSZL','bot','toString','NEZHA\x20variable\x20is\x20empty,skip\x20running','console','express','\x0a\x20\x20protocol:\x20http2\x0a\x20\x20\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20','/config.json\x20>/dev/null\x202>&1\x20&','TunnelSecret','tunnel\x20--edge-ip-version\x20auto\x20--config\x20','axios','from','\x0askip_connection_count:\x20false\x0askip_procs_count:\x20false\x0atemperature:\x20false\x0atls:\x20false\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20','quic','amd','\x0aclient_secret:\x20','Download\x20','apply','automatic\x20access\x20task\x20added\x20successfully','sub.txt','exec','ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain','unshift'];_0x4681=function(){return _0xe605b0;};return _0x4681();}
