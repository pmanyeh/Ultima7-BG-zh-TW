// 盧恩古文初次點擊事件腳本
extern var Func090A 0x90A ();

void runic_first_click 0x95F ()
{
	var party;
	var p_count;
	var p_first;
	var ans;
	
	if (gflags[0x0345]) {
		return;
	}
	gflags[0x0345] = true;
	
	party = UI_get_party_list();
	p_count = UI_get_array_size(party);
	
	if (p_count > 1) {
		// 在 Exult 中，隊伍陣列的索引可能是 1-based 且 [1] 是聖者。
		// 加上安全判斷，如果抓到的是聖者，就改抓下一個（第一位夥伴）
		p_first = party[1];
		if (p_first == UI_get_avatar_ref()) {
			p_first = party[2];
		}
		
		UI_show_npc_face(p_first, 0);
		message("「盧恩古文～現在大概也只剩這些『復古風』的牌子在用了吧！」");
		say();
		message("「平時沒在用…我都快看不懂了！」");
		say();
		message("「還記得怎麼讀嗎，聖者？」");
		say();
		
		ans = Func090A();
		if (ans) {
			message("「真不負聖者之名！」");
			say();
			message("「但如果有需要，我聽說不列顛王有一本『古文譯本』，可以快速翻譯出古文的意義！」");
			say();
		} else {
			message("「我想也是～不過，我聽說不列顛王有一本『古文譯本』，可以解決這個問題。」");
			say();
			message("「下次見到不列顛王時，可以跟他詢問看看。」");
			say();
		}
		UI_remove_npc_face(p_first);
	} else {
		UI_show_npc_face(UI_get_avatar_ref(), 0);
		message("「盧恩古文……現在還有人在用？」");
		say();
		message("「嗯……有點難解讀……下次問問夥伴有無其他法子。」");
		say();
		UI_remove_npc_face(UI_get_avatar_ref());
	}
}
