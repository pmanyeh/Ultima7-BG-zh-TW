#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void runic_first_click 0x95F ();

void Func02CB shape#(0x2CB) ()
{
	var var0000;
	var var0001;
	var var000A;
	var var_chinese = "";
	var is_runic = true;

	if (!(event != 0x0001)) goto labelFunc02CB_0009;
	return;
labelFunc02CB_0009:
	var0000 = Func0908();
	var0001 = UI_get_item_quality(item);
	if (!(var0001 > 0x0066)) goto labelFunc02CB_0034;
	var000A = ["IS", "SIGN ZERO"];

	var_chinese = "零號招牌";

	is_runic = false;

	goto labelFunc02CB_0D71;
	goto labelFunc02CB_0D71;
labelFunc02CB_0034:
	if (!(var0001 == 0x0000)) goto labelFunc02CB_0057;
	var000A = ["here|lies", "john|doe", "buried", "where", "he|died"];

	var_chinese = "長眠於此的無名氏葬於他死去的所在";

	goto labelFunc02CB_0D71;
labelFunc02CB_0057:
	if (!(var0001 == 0x0001)) goto labelFunc02CB_0077;
	var000A = ["|garth|", "sorry", "about", "thy|(umb"];

	var_chinese = "加斯，對你的拇指感到抱歉";

	goto labelFunc02CB_0D71;
labelFunc02CB_0077:
	if (!(var0001 == 0x0002)) goto labelFunc02CB_0097;
	var000A = ["LADY M:", "YOUTH IS", "HERS", "FOREVER"];

	var_chinese = "M女士：青春永駐";

	is_runic = false;

	goto labelFunc02CB_0D71;
labelFunc02CB_0097:
	if (!(var0001 == 0x0003)) goto labelFunc02CB_00BA;
	var000A = ["|julius|", "may|his", "spirit", "re,", "forever"];

	var_chinese = "朱利葉斯，願他的靈魂永遠安息";

	goto labelFunc02CB_0D71;
labelFunc02CB_00BA:
	if (!(var0001 == 0x0004)) goto labelFunc02CB_00DD;
	var000A = ["here", "lies", "argent", "died|a", "sargeant"];

	var_chinese = "長眠於此的阿金特死時是個中士";

	goto labelFunc02CB_0D71;
labelFunc02CB_00DD:
	if (!(var0001 == 0x0005)) goto labelFunc02CB_0100;
	var000A = ["|darek|", "his", "days", "were", "numbered"];

	var_chinese = "達雷克，來日無多";

	goto labelFunc02CB_0D71;
labelFunc02CB_0100:
	if (!(var0001 == 0x0006)) goto labelFunc02CB_0123;
	var000A = ["|malc|", "his", "words", "remain", "wi(|us"];

	var_chinese = "馬爾克，他的話語與我們同在";

	goto labelFunc02CB_0D71;
labelFunc02CB_0123:
	if (!(var0001 == 0x0007)) goto labelFunc02CB_0146;
	var000A = ["|nina|", "may", "her", "spirit", "soar"];

	var_chinese = "妮娜，願她的靈魂高飛";

	goto labelFunc02CB_0D71;
labelFunc02CB_0146:
	if (!(var0001 == 0x0008)) goto labelFunc02CB_0166;
	var000A = ["|bart|", "he|never", "finished", "(e|joke"];

	var_chinese = "巴特，他從未講完那個笑話";

	goto labelFunc02CB_0D71;
labelFunc02CB_0166:
	if (!(var0001 == 0x0009)) goto labelFunc02CB_0186;
	var000A = ["|ann|", "a", "delicate", "flower"];

	var_chinese = "安，一朵嬌弱的花";

	goto labelFunc02CB_0D71;
labelFunc02CB_0186:
	if (!(var0001 == 0x000A)) goto labelFunc02CB_01A9;
	var000A = ["|dallas|", "went", "down", "wi(|(e", "ship"];

	var_chinese = "達拉斯，與船同沉";

	goto labelFunc02CB_0D71;
labelFunc02CB_01A9:
	if (!(var0001 == 0x000B)) goto labelFunc02CB_01C9;
	var000A = ["|alan|", "looked", "great|in", "pink"];

	var_chinese = "艾倫，穿粉紅色很好看";

	goto labelFunc02CB_0D71;
labelFunc02CB_01C9:
	if (!(var0001 == 0x000C)) goto labelFunc02CB_01EC;
	var000A = ["here", "lies", "ken", "killed|by", "a pen"];

	var_chinese = "長眠於此的肯，被一枝筆殺死";

	goto labelFunc02CB_0D71;
labelFunc02CB_01EC:
	if (!(var0001 == 0x000D)) goto labelFunc02CB_020C;
	var000A = ["|jeff|d|", "died|wi(", "a|pencil", "in|hand"];

	var_chinese = "傑夫·D，死時手中握著鉛筆";

	goto labelFunc02CB_0D71;
labelFunc02CB_020C:
	if (!(var0001 == 0x000E)) goto labelFunc02CB_022C;
	var000A = ["|martin|", "(e|notes", "were|too", "sharp"];

	var_chinese = "馬丁音符太過刺耳";

	goto labelFunc02CB_0D71;
labelFunc02CB_022C:
	if (!(var0001 == 0x000F)) goto labelFunc02CB_024C;
	var000A = ["|tony|b|", "a|credit", "to|his", "name"];

	var_chinese = "東尼·B，無愧於他的名聲";

	goto labelFunc02CB_0D71;
labelFunc02CB_024C:
	if (!(var0001 == 0x0010)) goto labelFunc02CB_026C;
	var000A = ["|philip|", "spells", "ma,ered", "him"];

	var_chinese = "菲利浦，魔法掌控了他";

	goto labelFunc02CB_0D71;
labelFunc02CB_026C:
	if (!(var0001 == 0x0011)) goto labelFunc02CB_028C;
	var000A = ["|chuckles|", "laughed", "till|(e", "end"];

	var_chinese = "查克爾斯，笑到最後";

	goto labelFunc02CB_0D71;
labelFunc02CB_028C:
	if (!(var0001 == 0x0012)) goto labelFunc02CB_02AC;
	var000A = ["|art|d|", "bit|(e|rump", "of|a|big|", "bad|gump"];

	var_chinese = "亞特·D，咬了一隻大壞甘普的屁股";

	goto labelFunc02CB_0D71;
labelFunc02CB_02AC:
	if (!(var0001 == 0x0013)) goto labelFunc02CB_02CC;
	var000A = ["|jim|g|", "he|was", "a|wonder", "to|us|all"];

	var_chinese = "吉姆·G，對我們所有人來說他都是個奇蹟";

	goto labelFunc02CB_0D71;
labelFunc02CB_02CC:
	if (!(var0001 == 0x0014)) goto labelFunc02CB_02EC;
	var000A = ["|will|", "he|was|a", "rebel|and", "a|runner"];

	var_chinese = "威爾，他是個叛逆者也是個逃跑者";

	goto labelFunc02CB_0D71;
labelFunc02CB_02EC:
	if (!(var0001 == 0x0015)) goto labelFunc02CB_030C;
	var000A = ["|mr|mike|", "lost|early", "from|a|bout", "with|gumps"];

	var_chinese = "邁克先生，在與甘普的搏鬥中英年早逝";

	goto labelFunc02CB_0D71;
labelFunc02CB_030C:
	if (!(var0001 == 0x0016)) goto labelFunc02CB_032F;
	var000A = ["|paul|", "odd|how", "awake", "sleep", "made|him"];

	var_chinese = "保羅，真奇怪，睡眠竟讓他如此清醒";

	goto labelFunc02CB_0D71;
labelFunc02CB_032F:
	if (!(var0001 == 0x0017)) goto labelFunc02CB_0352;
	var000A = ["|zack|", "he", "demanded", "atomic", "d+("];

	var_chinese = "柴克，他要求原子核毀滅";

	goto labelFunc02CB_0D71;
labelFunc02CB_0352:
	if (!(var0001 == 0x0018)) goto labelFunc02CB_0375;
	var000A = ["|phil|s|", "a|victim", "of", "venomous", "fate"];

	var_chinese = "菲爾·S，有毒命運的受害者";

	goto labelFunc02CB_0D71;
labelFunc02CB_0375:
	if (!(var0001 == 0x0019)) goto labelFunc02CB_0392;
	var000A = ["|jeff|w|", "danger", "radiation"];

	var_chinese = "傑夫·W，小心輻射";

	goto labelFunc02CB_0D71;
labelFunc02CB_0392:
	if (!(var0001 == 0x001A)) goto labelFunc02CB_03B2;
	var000A = ["|tony|z|", "a|good", "source", "for|gumps"];

	var_chinese = "東尼·Z，甘普的好來源";

	goto labelFunc02CB_0D71;
labelFunc02CB_03B2:
	if (!(var0001 == 0x001B)) goto labelFunc02CB_03D2;
	var000A = ["|bill|b|", "we|(ought", "he|was|only", "winged"];

	var_chinese = "比爾·B，我們以為他只是受了輕傷";

	goto labelFunc02CB_0D71;
labelFunc02CB_03D2:
	if (!(var0001 == 0x001C)) goto labelFunc02CB_03EF;
	var000A = ["|charles|c|", "guest", "victim"];

	var_chinese = "查爾斯·C，客串受害者";

	goto labelFunc02CB_0D71;
labelFunc02CB_03EF:
	if (!(var0001 == 0x001D)) goto labelFunc02CB_040C;
	var000A = ["|danny|", "dearly", "depainted"];

	var_chinese = "丹尼，深切哀悼";

	goto labelFunc02CB_0D71;
labelFunc02CB_040C:
	if (!(var0001 == 0x001E)) goto labelFunc02CB_042C;
	var000A = ["|bob|", "he|makes", "(e|grass", "greener"];

	var_chinese = "鮑勃，他讓草地更綠了";

	goto labelFunc02CB_0D71;
labelFunc02CB_042C:
	if (!(var0001 == 0x001F)) goto labelFunc02CB_044C;
	var000A = ["here|lies", "donna", "she|is|a", "gonna"];

	var_chinese = "長眠於此的唐娜，她已經不在了";

	goto labelFunc02CB_0D71;
labelFunc02CB_044C:
	if (!(var0001 == 0x0020)) goto labelFunc02CB_046C;
	var000A = ["|karl|", "a|portrait", "of", "talent"];

	var_chinese = "卡爾，才華的寫照";

	goto labelFunc02CB_0D71;
labelFunc02CB_046C:
	if (!(var0001 == 0x0021)) goto labelFunc02CB_048C;
	var000A = ["|chris|d|", "an", "explosive", "character"];

	var_chinese = "克里斯·D，一個爆炸性的角色";

	goto labelFunc02CB_0D71;
labelFunc02CB_048C:
	if (!(var0001 == 0x0022)) goto labelFunc02CB_04AC;
	var000A = ["|glen|", "went", "with|a", "smile"];

	var_chinese = "葛倫，帶著微笑離去";

	goto labelFunc02CB_0D71;
labelFunc02CB_04AC:
	if (!(var0001 == 0x0023)) goto labelFunc02CB_04CC;
	var000A = ["|bruce|l|", "had|a", "fantastic", "ending"];

	var_chinese = "布魯斯·L，有著奇幻的結局";

	goto labelFunc02CB_0D71;
labelFunc02CB_04CC:
	if (!(var0001 == 0x0024)) goto labelFunc02CB_04EC;
	var000A = ["|loubet|", "his", "last", "br+("];

	var_chinese = "盧貝特，他的最後一口氣";

	goto labelFunc02CB_0D71;
labelFunc02CB_04EC:
	if (!(var0001 == 0x0025)) goto labelFunc02CB_050C;
	var000A = ["|micael|p|", "lo*|time", "comi*|gone", "for|good"];

	var_chinese = "麥可·P，等待許久，一去不返";

	goto labelFunc02CB_0D71;
labelFunc02CB_050C:
	if (!(var0001 == 0x0026)) goto labelFunc02CB_052C;
	var000A = ["|jake|", "(e|party", "is", "over"];

	var_chinese = "傑克，派對結束了";

	goto labelFunc02CB_0D71;
labelFunc02CB_052C:
	if (!(var0001 == 0x0027)) goto labelFunc02CB_054C;
	var000A = ["|gary|w|", "man|of|a", "(ousand", "faces"];

	var_chinese = "蓋瑞·W，千面人";

	goto labelFunc02CB_0D71;
labelFunc02CB_054C:
	if (!(var0001 == 0x0028)) goto labelFunc02CB_056C;
	var000A = ["|(e|b+,|", "it|was|a", "full", "life"];

	var_chinese = "比恩，這是充實的一生";

	goto labelFunc02CB_0D71;
labelFunc02CB_056C:
	if (!(var0001 == 0x0029)) goto labelFunc02CB_058C;
	var000A = ["here|lies", "kirk|died", "from|too", "much|work"];

	var_chinese = "長眠於此的柯克，過勞而死";

	goto labelFunc02CB_0D71;
labelFunc02CB_058C:
	if (!(var0001 == 0x002A)) goto labelFunc02CB_05AC;
	var000A = ["|targ|", "a", "wor(y", "opponent"];

	var_chinese = "塔格，一個可敬的對手";

	goto labelFunc02CB_0D71;
labelFunc02CB_05AC:
	if (!(var0001 == 0x002B)) goto labelFunc02CB_05CF;
	var000A = ["here|lies", "my,ral", "shined", "like|a", "crystal"];

	var_chinese = "長眠於此的米斯特拉，閃耀如水晶";

	goto labelFunc02CB_0D71;
labelFunc02CB_05CF:
	if (!(var0001 == 0x002C)) goto labelFunc02CB_05EF;
	var000A = ["here|lies", "marc", "and|why", "not"];

	var_chinese = "長眠於此的馬克，有何不可";

	goto labelFunc02CB_0D71;
labelFunc02CB_05EF:
	if (!(var0001 == 0x002D)) goto labelFunc02CB_060F;
	var000A = ["|nenad|", "(e", "music", "maker"];

	var_chinese = "內納德，音樂創作者";

	goto labelFunc02CB_0D71;
labelFunc02CB_060F:
	if (!(var0001 == 0x002E)) goto labelFunc02CB_0632;
	var000A = ["here|lies", "john", "his", "work|was", "never|done"];

	var_chinese = "長眠於此的約翰，他的工作永遠做不完";

	goto labelFunc02CB_0D71;
labelFunc02CB_0632:
	if (!(var0001 == 0x002F)) goto labelFunc02CB_0652;
	var000A = ["|bruce|a|", "we", "killed", "him"];

	var_chinese = "布魯斯·A，我們殺了他";

	goto labelFunc02CB_0D71;
labelFunc02CB_0652:
	if (!(var0001 == 0x0030)) goto labelFunc02CB_0675;
	var000A = ["|eric|", "unaware", "(e|game", "was", "loaded"];

	var_chinese = "艾瑞克，沒發現遊戲已經載入了";

	goto labelFunc02CB_0D71;
labelFunc02CB_0675:
	if (!(var0001 == 0x0031)) goto labelFunc02CB_0695;
	var000A = ["|raymond|", "(e|world", "is|not", "enough"];

	var_chinese = "雷蒙德，世界還不夠";

	goto labelFunc02CB_0D71;
labelFunc02CB_0695:
	if (!(var0001 == 0x0032)) goto labelFunc02CB_06B5;
	var000A = ["|Beth|", "died", "by", "garriot"];

	var_chinese = "貝絲，死於加略特(Garriott)之手";

	goto labelFunc02CB_0D71;
labelFunc02CB_06B5:
	if (!(var0001 == 0x0033)) goto labelFunc02CB_06D5;
	var000A = ["|jack|", "+ten", "by", "di*os"];

	var_chinese = "傑克，被野狗吃掉";

	goto labelFunc02CB_0D71;
labelFunc02CB_06D5:
	if (!(var0001 == 0x0034)) goto labelFunc02CB_06F5;
	var000A = ["|michelle|", "hu*|for", "poisoni*", "lover"];

	var_chinese = "蜜雪兒，因毒殺情人而被絞死";

	goto labelFunc02CB_0D71;
labelFunc02CB_06F5:
	if (!(var0001 == 0x0035)) goto labelFunc02CB_0718;
	var000A = ["|scott|h|", "gone", "today", "gone", "tomorrow"];

	var_chinese = "史考特·H，今日離去，明日不再";

	goto labelFunc02CB_0D71;
labelFunc02CB_0718:
	if (!(var0001 == 0x0036)) goto labelFunc02CB_073B;
	var000A = ["|brian|", "swallowed", "by", "(e", "mon,er"];

	var_chinese = "布萊恩，被怪物吞噬";

	goto labelFunc02CB_0D71;
labelFunc02CB_073B:
	if (!(var0001 == 0x0037)) goto labelFunc02CB_075B;
	var000A = ["|sherry|c|", "managed", "until", "(e|end"];

	var_chinese = "雪莉·C，堅持到了最後";

	goto labelFunc02CB_0D71;
labelFunc02CB_075B:
	if (!(var0001 == 0x0038)) goto labelFunc02CB_077B;
	var000A = ["|karen|", "quality", "was|job", "one"];

	var_chinese = "凱倫，品質第一";

	goto labelFunc02CB_0D71;
labelFunc02CB_077B:
	if (!(var0001 == 0x0039)) goto labelFunc02CB_079B;
	var000A = ["|j|shelton", "here|i|lie", "but|,ill", "i|roam"];

	var_chinese = "J·謝爾頓，我長眠於此，但我依然徘徊";

	goto labelFunc02CB_0D71;
labelFunc02CB_079B:
	if (!(var0001 == 0x003A)) goto labelFunc02CB_07BB;
	var000A = ["|marco|", "underfed", "under|gun", "undergrnd"];

	var_chinese = "馬可，吃不飽，受威脅，葬地下";

	goto labelFunc02CB_0D71;
labelFunc02CB_07BB:
	if (!(var0001 == 0x003B)) goto labelFunc02CB_07DB;
	var000A = ["|lynn|", "she|had", "(e|grace", "of|a|swan"];

	var_chinese = "琳恩，她有著天鵝般的優雅";

	goto labelFunc02CB_0D71;
labelFunc02CB_07DB:
	if (!(var0001 == 0x003C)) goto labelFunc02CB_07FB;
	var000A = ["|chenault|", "me|puergo", "canus|meus", "urit"];

	var_chinese = "薛諾特，我的狗咬了我";

	goto labelFunc02CB_0D71;
labelFunc02CB_07FB:
	if (!(var0001 == 0x003D)) goto labelFunc02CB_081B;
	var000A = ["|j|crippen|", "to|dizzy", "and|tc", "cocopuff"];

	var_chinese = "J·克里彭，給 Dizzy 和 TC Cocopuff";

	goto labelFunc02CB_0D71;
labelFunc02CB_081B:
	if (!(var0001 == 0x003E)) goto labelFunc02CB_0838;
	var000A = ["|tim|", "(e|unknown", "tomb,one"];

	var_chinese = "提姆，無名墓碑";

	goto labelFunc02CB_0D71;
labelFunc02CB_0838:
	if (!(var0001 == 0x003F)) goto labelFunc02CB_0858;
	var000A = ["|na(an|", "blown|away", "by|grogs", "fireball"];

	var_chinese = "南森，被格羅格的火球炸飛";

	goto labelFunc02CB_0D71;
labelFunc02CB_0858:
	if (!(var0001 == 0x0040)) goto labelFunc02CB_0878;
	var000A = ["|james|n|", "last|words", "i|drank", "what"];

	var_chinese = "詹姆士·N，遺言：我喝了什麼？";

	goto labelFunc02CB_0D71;
labelFunc02CB_0878:
	if (!(var0001 == 0x0041)) goto labelFunc02CB_0898;
	var000A = ["here|lies", "Ben", "all|te,ed", "out"];

	var_chinese = "長眠於此的班，已經筋疲力盡";

	goto labelFunc02CB_0D71;
labelFunc02CB_0898:
	if (!(var0001 == 0x0042)) goto labelFunc02CB_08B8;
	var000A = ["|scott|", "buried|an", "axe|in", "his|h+d"];

	var_chinese = "史考特，頭上插了一把斧頭";

	goto labelFunc02CB_0D71;
labelFunc02CB_08B8:
	if (!(var0001 == 0x0043)) goto labelFunc02CB_08D8;
	var000A = ["|duke|", "veni", "vidi", "exii"];

	var_chinese = "公爵，我來，我見，我離去";

	goto labelFunc02CB_0D71;
labelFunc02CB_08D8:
	if (!(var0001 == 0x0044)) goto labelFunc02CB_08F8;
	var000A = ["|mike|h|", "every(i*", "fit|to", "print"];

	var_chinese = "邁克·H，一切都適合印刷";

	goto labelFunc02CB_0D71;
labelFunc02CB_08F8:
	if (!(var0001 == 0x0045)) goto labelFunc02CB_0918;
	var000A = ["|robin|", "she|gave", "sunshine", "to|us|all"];

	var_chinese = "羅賓，她給了我們所有人陽光";

	goto labelFunc02CB_0D71;
labelFunc02CB_0918:
	if (!(var0001 == 0x0046)) goto labelFunc02CB_093B;
	var000A = ["|andrew|", "|m|", "never", "got", "clued|in"];

	var_chinese = "安德魯·M，永遠搞不清楚狀況";

	goto labelFunc02CB_0D71;
labelFunc02CB_093B:
	if (!(var0001 == 0x0047)) goto labelFunc02CB_095B;
	var000A = ["|wayne|s|", "(e|food", "was", "gr+t"];

	var_chinese = "韋恩·S，食物很棒";

	goto labelFunc02CB_0D71;
labelFunc02CB_095B:
	if (!(var0001 == 0x0048)) goto labelFunc02CB_0978;
	var000A = ["|craig|c|", "was", "delivered"];

	var_chinese = "克雷格·C，被送走了";

	goto labelFunc02CB_0D71;
labelFunc02CB_0978:
	if (!(var0001 == 0x0049)) goto labelFunc02CB_0998;
	var000A = ["|jeff|f|", "fed|but", "never", "ate"];

	var_chinese = "傑夫·F，被餵食卻從未吃下";

	goto labelFunc02CB_0D71;
labelFunc02CB_0998:
	if (!(var0001 == 0x004A)) goto labelFunc02CB_09B8;
	var000A = ["|w|hagy", "food", "for", "(ought"];

	var_chinese = "W·哈吉，精神糧食";

	goto labelFunc02CB_0D71;
labelFunc02CB_09B8:
	if (!(var0001 == 0x004B)) goto labelFunc02CB_09D8;
	var000A = ["|m|", "|stevens|", "arrived", "wi(|gifts"];

	var_chinese = "M·史蒂文斯，帶著禮物到來";

	goto labelFunc02CB_0D71;
labelFunc02CB_09D8:
	if (!(var0001 == 0x004C)) goto labelFunc02CB_09FB;
	var000A = ["|michelle|", "|g|", "bringer", "of", "dinner"];

	var_chinese = "蜜雪兒·G，晚餐帶來者";

	goto labelFunc02CB_0D71;
labelFunc02CB_09FB:
	if (!(var0001 == 0x004D)) goto labelFunc02CB_0A1B;
	var000A = ["|brian|s|", "food", "was", "him"];

	var_chinese = "布萊恩·S，他就是食物";

	goto labelFunc02CB_0D71;
labelFunc02CB_0A1B:
	if (!(var0001 == 0x004E)) goto labelFunc02CB_0A3E;
	var000A = ["|jackie|", "d|", "as|in|d|", "for", "dinner"];

	var_chinese = "潔姬，D 代表晚餐";

	goto labelFunc02CB_0D71;
labelFunc02CB_0A3E:
	if (!(var0001 == 0x004F)) goto labelFunc02CB_0A61;
	var000A = ["|b|adams|", "spained", "a", "perfect", "record"];

	var_chinese = "B·亞當斯，保持著完美記錄";

	goto labelFunc02CB_0D71;
labelFunc02CB_0A61:
	if (!(var0001 == 0x0050)) goto labelFunc02CB_0A84;
	var000A = ["|hal|", "a|nice", "fellow", "who|is", "now|below"];

	var_chinese = "哈爾，一個現在在地下的大好人";

	goto labelFunc02CB_0D71;
labelFunc02CB_0A84:
	if (!(var0001 == 0x0051)) goto labelFunc02CB_0AA7;
	var000A = ["|rover|", "mans|best", "friend", "over|and", "over"];

	var_chinese = "羅孚，人類永遠最好的朋友";

	goto labelFunc02CB_0D71;
labelFunc02CB_0AA7:
	if (!(var0001 == 0x0052)) goto labelFunc02CB_0ACA;
	var000A = ["|felcore|", "age|old", "love", "never", "dies"];

	var_chinese = "費爾科爾，舊愛永生不滅";

	goto labelFunc02CB_0D71;
labelFunc02CB_0ACA:
	if (!(var0001 == 0x0053)) goto labelFunc02CB_0AED;
	var000A = ["heres", "tony", "morse", "hes|d+d", "of|course"];

	var_chinese = "東尼·莫爾斯在此，他當然死了";

	goto labelFunc02CB_0D71;
labelFunc02CB_0AED:
	if (!(var0001 == 0x0054)) goto labelFunc02CB_0B10;
	var000A = ["heres", "larry", "salamon", "|", "gross"];

	var_chinese = "拉里·薩拉蒙在此，真噁心";

	goto labelFunc02CB_0D71;
labelFunc02CB_0B10:
	if (!(var0001 == 0x0055)) goto labelFunc02CB_0B30;
	var000A = ["darren", "mcdonald", "who|is", "faltran"];

	var_chinese = "達倫·麥當勞，誰是法爾特蘭";

	goto labelFunc02CB_0D71;
labelFunc02CB_0B30:
	if (!(var0001 == 0x0056)) goto labelFunc02CB_0B53;
	var000A = ["|kevin|b|", "died", "away", "from|(e", "chiltons"];

	var_chinese = "凱文·B，死在遠離奇爾頓家的地方";

	goto labelFunc02CB_0D71;
labelFunc02CB_0B53:
	if (!(var0001 == 0x0057)) goto labelFunc02CB_0B76;
	var000A = ["|beth", "and", "michael|", "worm", "food"];

	var_chinese = "貝絲和邁克爾，蟲子的食物";

	goto labelFunc02CB_0D71;
labelFunc02CB_0B76:
	if (!(var0001 == 0x0058)) goto labelFunc02CB_0B93;
	var000A = ["|a|h|", "died", "honorably"];

	var_chinese = "A.H.，光榮地死去";

	goto labelFunc02CB_0D71;
labelFunc02CB_0B93:
	if (!(var0001 == 0x0059)) goto labelFunc02CB_0BB3;
	var000A = ["|john|t|", "gone", "and", "went"];

	var_chinese = "約翰·T，一去不復返";

	goto labelFunc02CB_0D71;
labelFunc02CB_0BB3:
	if (!(var0001 == 0x005A)) goto labelFunc02CB_0BD3;
	var000A = ["|rey|", "", "installed", "here"];

	var_chinese = "雷，安裝於此";

	goto labelFunc02CB_0D71;
labelFunc02CB_0BD3:
	if (!(var0001 == 0x005B)) goto labelFunc02CB_0BF6;
	var000A = ["|rhoode|", "a|more", "deservi*", "man|never", "died"];

	var_chinese = "羅德，從沒有比他更該死的人";

	goto labelFunc02CB_0D71;
labelFunc02CB_0BF6:
	if (!(var0001 == 0x005C)) goto labelFunc02CB_0C19;
	var000A = ["|jasner|", "every", "moment", "she|is", "missed"];

	var_chinese = "賈斯納，每時每刻都被思念著";

	goto labelFunc02CB_0D71;
labelFunc02CB_0C19:
	if (!(var0001 == 0x005D)) goto labelFunc02CB_0C3C;
	var000A = ["|wampol|", "here|he", "lied", "now|here", "he|lays"];

	var_chinese = "萬波爾，他曾在這說謊，現在他躺在這";

	goto labelFunc02CB_0D71;
labelFunc02CB_0C3C:
	if (!(var0001 == 0x005E)) goto labelFunc02CB_0C5F;
	var000A = ["|destra|", "wounded", "by|a", "lovers", "spurni*"];

	var_chinese = "德斯特拉，被愛人的拒絕所傷";

	goto labelFunc02CB_0D71;
labelFunc02CB_0C5F:
	if (!(var0001 == 0x005F)) goto labelFunc02CB_0C7F;
	var000A = ["|mendar|", "buried", "wi(|his", "boots|on"];

	var_chinese = "門達，穿著靴子下葬";

	goto labelFunc02CB_0D71;
labelFunc02CB_0C7F:
	if (!(var0001 == 0x0060)) goto labelFunc02CB_0CA2;
	var000A = ["|greghim|", "old|age", "never", "looked|so", "good"];

	var_chinese = "格雷格金，衰老從未看起來如此美好";

	goto labelFunc02CB_0D71;
labelFunc02CB_0CA2:
	if (!(var0001 == 0x0061)) goto labelFunc02CB_0CC5;
	var000A = ["|sarnan|", "was|not", "missed", "but|is", "now"];

	var_chinese = "薩爾南，過去沒被想念，但現在有了";

	goto labelFunc02CB_0D71;
labelFunc02CB_0CC5:
	if (!(var0001 == 0x0062)) goto labelFunc02CB_0CE8;
	var000A = ["|erlemar|", "gr+te,", "enchanter", "of|his", "day"];

	var_chinese = "埃爾勒馬，他那個時代最偉大的附魔師";

	goto labelFunc02CB_0D71;
labelFunc02CB_0CE8:
	if (!(var0001 == 0x0063)) goto labelFunc02CB_0D0B;
	var000A = ["|galler|", "came|", "saw|", "was", "conquered"];

	var_chinese = "加勒，我來，我見，我被征服";

	goto labelFunc02CB_0D71;
labelFunc02CB_0D0B:
	if (!(var0001 == 0x0064)) goto labelFunc02CB_0D2E;
	var000A = ["|elgele(|", "queen", "for|a|day", "worm|food", "forever"];

	var_chinese = "艾爾蓋萊絲，當了一天女王，永遠做蟲子的食物";

	goto labelFunc02CB_0D71;
labelFunc02CB_0D2E:
	if (!(var0001 == 0x0065)) goto labelFunc02CB_0D4E;
	var000A = ["|pantor|", "(e|si*i*", "never", "stops"];

	var_chinese = "潘托，歌聲永不停息";

	goto labelFunc02CB_0D71;
labelFunc02CB_0D4E:
	if (!(var0001 == 0x0066)) goto labelFunc02CB_0D71;
	var000A = ["here|lies", "beloved", "fa(er", "and", "ma,er"];

	var_chinese = "長眠於此的是敬愛的父親與大師";

	goto labelFunc02CB_0D71;
labelFunc02CB_0D71:
	var has_magic_book = UI_count_objects(0xFE9B, 0x0282, 149, 0);
	
	if (has_magic_book == 0 && var_chinese != "") {
		UI_display_runes(0x0032, var000A);
		if (is_runic) {
			runic_first_click();
		}
	} else if (has_magic_book > 0 && var_chinese != "") {
		UI_show_npc_face(UI_get_avatar_ref(), 0);
		message("墓碑載負逝者之嘆，化為新文躍然腦海：「" + var_chinese + "」");
		UI_display_runes(0x0032, var000A);
		UI_remove_npc_face(UI_get_avatar_ref());
	} else {
		UI_display_runes(0x0032, var000A);
	}
	return;
}


