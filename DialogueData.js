let currentDialogue = null;
let currentSfx = null;
const daveBaseTransform = "scale(2.0) translate(-130%,600%)";

function moveDaveToX(offsetPx) {
  const dave = document.getElementById("dave");
  if (!dave) return;
  dave.style.transform = `${daveBaseTransform} translateX(${offsetPx}px)`;
}
function playSfx(src) {
  // nếu đang có sfx khác phát dở, dừng nó trước
  stopSfx();

  currentSfx = new Audio(src);
  currentSfx.play();
}

function stopSfx() {
  if (currentSfx) {
    currentSfx.pause();
    currentSfx.currentTime = 0; // reset về đầu file
    currentSfx = null;
  }
}
const dialogueData =[
  {sfx:"Maintheme.mp3",
    id: "greet",
  Name: "???",
  avatar: "Mon5.webp",
  text:"Xin chào!",
  options: [{label: "cô là ai vậy?", next: "greet1"},
    {label: "là Monika kìaaaa!?", next: "greetex"}, ]
  },
{
    id: "greet1",
  Name: "Monika",
  avatar: "Mon4.webp",
  text:"Tôi là Monika. Người hướng dẫn ở đây",
  next:"greet2" 
  },
{
    id: "greetex",
  Name: "Monika",
  avatar: "Mon11.webp",
  text:"Ôi chà... có vẻ như đây không phải lần đầu chúng ta gặp nhau nhỉ. Vậy tôi sẽ bỏ qua phần giới thiệu nhé",
  next:"greet2" 
  },
{
    id: "greet2",
  Name: "Monika",
  avatar: "Mon10.webp",
  text:"Như cậu đã thấy đó, muốn vào trang này phải nhập một chuỗi kí tự đặc biệt. Cái này quá dễ phải không?",
  next:"greet3" 
  },
{
    id: "greet3",
  Name: "Monika",
  avatar: "Mon8.webp",
  text:"Nhưng tất nhiên có một chuyện cần phải lưu ý. Con cá",
  options: [{label: "Con cá?", next: "greet4"},
    {label: "Cái gì cơ??", next: "greet4"}, ]
  },
{
    id: "greet4",
  Name: "Monika",
  avatar: "Mon7.webp",
  text:"Đúng vậy. Là con cá, có một thứ đang làm đảo lộn hết mọi thứ lên, và nó trông như một con cá",
   next: "greet5"
  },
{
    id: "greet5",
  Name: "Monika",
  avatar: "Mon9.webp",
  text:"Hãy nhớ: Không được tương tác với nó, không được nói chuyện với nó, không được tin bất kì lời nói nào của nó",
  options: [{label: "cô sợ một con cá sao?", next: "greet6"},
    {label: "một con cá thì có gì đáng sợ?", next: "greet7"}, ]
  },
{
    id: "greet6",
  Name: "Monika",
  avatar: "Mon3.webp",
  text:"Chà... chuyện này thật khó giải thích ",
 next: "greetend"
  },
{
    id: "greet7",
  Name: "Monika",
  avatar: "Mon1.webp",
  text:"Đừng có chủ quan như thế chứ... nếu nó không nguy hiểm tôi đã chẳng cảnh báo làm gì",
 next: "greetend"
  },
{
    id: "greetend",
  Name: "Monika",
  avatar: "Mon5.wepb",
  text:"Tạm thời như thế đi. Công việc của tôi ở đây cũng xong rồi, chúng ta sẽ gặp lại sau ",
      
},
 {
    id: "confuse",
  Name: "mồn lèo bối rối",
  avatar: "confuse.gif",
  text:"Hai thằng điên kia đứng đó tạo dáng làm gì vậy bây?",
  options: [
    {label: "cô là ai vậy?", next: "monikaBg2end"},
  {label: "Cẩn thận con cá?", next: "monikaBg2end"}]
  },
    {
      sfx:"Kako.mp3",
    id: "clash",
  Name: "Jotaro",
  avatar: "jotaro.gif",
  text:"ORA ORA ORA ORA ORA ORA ORA ORA",
   next: "clash1"   
  },
  {
    id: "clash1",
  Name: "Dio",
  avatar: "Diobg.gif",
  text:"MUDA MUDA MUDA MUDA MUDA MUDA MUDA",
   
  },
  { sfx:"Crysfx.mp3",
    id: "banana",
  Name: "mèo củ chuối",
  avatar: "Banana.gif",
  text:"Huhuhu, Remilia thua kèo rồi ông giáo ơi. Sakuya làm gì đi chứ...",
  },
  { sfx:"ronaldosfx.mp3",
    id: "pop",
  Name: "đèo quan tâm",
  avatar: "Pop.gif",
  text:"Mặc kệ đời. Bố ăn bắp rang",
  },
  {
    id: "monikaBg2",
  Name: "Monika",
  avatar: "Mon7.webp",
  text:"Chà, thật hỗn loạn quá đi mất. Họ quên mất cả việc phải thắp nến rồi...",
 next: "monikaBg2-1"
  },
  {
    id: "monikaBg2-1",
  Name: "Monika",
  avatar: "Mon1.webp",
  text:"Cậu có thể đi hỏi Sakuya thử xem. Dù sao cô ấy cũng là người chu đáo nhất ở đây, chắc hẳn là đã có chuẩn bị đầy đủ rồi ",
 next: "monikaBg2-2"
  },
  {
    id: "monikaBg2-2",
  Name: "Monika",
  avatar: "Mon8.webp",
  text:"Phải rồi còn một chuyện nữa. Còn nhớ việc tôi nhắc lúc nãy chứ?",
 options: [
    {label: "Cẩn thận con cá?", next: "monikaBg2end"},
    {label: "Cẩn thận con bìm bịp?", next: "monikaBg2-3"}]
  },
  {
    id: "monikaBg2-3",
  Name: "Monika",
  avatar: "Mon1.webp",
  text:"Trời đất ơi, không phải. Là con cá. C-O-N C-Á đó, hiểu chưa. Không được tin bất kì một lời nó nói",
    next: "monikaroll"
  },
  {
    id: "monikaBg2end",
  Name: "Monika",
  avatar: "Mon9.webp",
  text:"Chính xác. Không được phép tương tác với nó. Không được tin lời nó, một chữ cũng tuyệt đối không được tin",
    next: "monikaroll"
  },
    {
    id: "monikaroll",
  Name: "Monika",
  avatar: "Mon10.webp",
  text:"À phải rồi, thêm một điều nữa. Cậu có biết là ở đây có thể cuộn xuống được không?",
      onExit: () => {
        console.log("onExit CHẠY");
        document.body.style.overflowY = "auto";      document.documentElement.style.overflowY = "auto";
      }
  },
    {
    id: "sakuya",
  Name: "Sakuya Izayoi",
  avatar: "sakuyabg.png",
  text:"Xin chào. Tôi là Sakuya Izayoi - hầu gái trưởng của Hồng Ma Quán. Cô có cần gì không ạ?",
 options: [
    {label: "hai người kia đang làm trò gì vậy?", next: "sakuya1"},
    {label: "cô có thứ gì để thắp nến không?", next: "sakuyaend"}]
  },
  {
    id: "sakuyaend",
  Name: "Sakuya Izayoi",
  avatar: "sakuyabg.png",
  text:"A...thế mà tôi lại quên mất chuyện này. Nhưng hiện giờ tôi không có thứ gì như thế, xin thứ lỗi ạ",
  },
  { id: "sakuya1",
  Name: "Sakuya Izayoi",
  avatar: "sakuyabg.png",
  text:"Họ đang thử trò chơi mới ấy mà. Đánh nhau bằng tay thay vì dùng 'Luật bài phù' - đặc sản của Ảo Tưởng Hương. Rất vui đúng không ạ?",
 options: [
    {label: "Tôi thấy cô chủ cô đang bị ăn hành ngập mồm kìa...", next: "sakuya2"},
    {label: "Cô không định ngăn họ à?", next: "sakuya2"}]
  },
  {
    id: "sakuya2",
  Name: "Sakuya Izayoi",
  avatar: "sakuyabg.png",
  text:"Không sao đâu. Tiểu thư Remilia là một người kiên cường, cô ấy sẽ ổn thôi",
  },
  {
    sfx:"Tuturu.mp3",
    id: "Koishi",
  Name: "???",
  avatar: "Koishi.webp",
  text:"một cô gái kỳ lạ, mỗi lần nhìn cô ấy làm bạn tưởng chừng như không có một chút suy nghĩ gì đằng sau đôi mắt đó, có vẻ cô ấy khá thích cái nón của mình...",
  options: [
    {label: "hỏi về chiếc nón của cô ấy", next: "KoishiHat"},
    {label: "hỏi về bản thân cô ấy", next: "KoishiSelf"}, 
    {label: "xoa đầu cô ấy", next: "KoishiPat"} ]
  },
  {/* KoishiHat section*/
      id: "KoishiHat",
      Name: "Koishi",
      avatar: "Koishi.webp",
      text:"O ya? lạ thật đấy, chưa từng có ai hỏi tớ về nó cả",
      next: "KoishiHat1"
  },
    {
      id: "KoishiHat1",
      Name: "Koishi",
      avatar: "Koishi.webp",
      text:"Chiếc nón là bạn của tớ, nó giúp tớ thư giãn !",
      options: [{ label: "ờmmm...", next: null},
      {label: "(hình như đầu cô ấy hơi bị chập mạch)", next: null}
      ]
    },
    { /* KoishiSelf section*/
    id: "KoishiSelf",
      Name: "Koishi",
      avatar: "Koishi.webp",
      text:"tớ là Koishi, Koishi Komeji !",
      options: [{ label: "Chỉ vậy thôi sao?...", next: "KoishiSelf1"},
      {label: "Ngắn gọn đấy", next:"KoishiSelf1"}]
    },
    {
      id: "KoishiSelf1",
      Name: "Koishi",
      avatar: "Koishi.webp",
      text:"Và tớ thích việc không suy nghĩ",
      options: [{ label: "cũng hợp lý", next:null}]
    },
    {/* KoishiPat section*/
      id: "KoishiPat",
      Name: "Koishi",
      avatar: "Koishipat.gif",
      text:"Ehehe~...tuy không hiểu gì lắm nhưng Koishi cảm thấy rất ấm áp",
     next:null
    },
      {
    id: "keiki",
  Name: "Keiki Haniyasushin",
  avatar: "keikibg.webp",
  text:"Cô muốn thay đổi hình nền chứ?",
  },
    {
    sfx:"augh.mp3",
    id: "fih",
  Name: "Con cá đáng ngờ",
  avatar: "fih.gif",
  text:"Xin chào cô gái. Người đàn ông rất hân hạnh được gặp cô gái",
  options: [
    {label: "Monika đã bảo rằng...", next: "fih1"},
    {label: "ta không tin ngươi", next: "fihex"} ]
  },
  {id: "fih1",
  Name: "Con cá đáng tin (tự nhận)",
  avatar: "fih.gif",
  text:"Monika bảo không được tin người đàn ông, người đàn ông nói sự thật, Monika không thích sự thật",
  options: [
    {label: "nói cái gì vậy trời?", next: "fih2"},
    {label: "nói tiếng người đi...", next: "fih2"} ]
  },
    {id: "fihex",
  Name: "Con cá đáng tin (tự nhận)",
  avatar: "fih.gif",
  text:"Cô gái nghe lời Monika, cô gái hiểu lầm người đàn ông. Người đàn ông bị oan, người đàn ông buồn",
  options: [
    {label: "????", next: "fih2"},
    {label: "hôm nay ngày gì vậy bây?", next: "fih2"} ]
  },
  {id: "fih2",
  Name: "Con cá đáng tin (tự nhận)",
  avatar: "fih.gif",
  text:"Cô gái tin Monika?",
  options: [
    {label: "chứ chẳng lẽ tin con cá?", next: "fih3"},
    {label: "tôi không tin ai cả", next: "fih3"} ]
  },
  {id: "fih3",
  Name: "Con cá đáng tin (tự nhận)",
  avatar: "fih.gif",
  text:"Nên tin Monika, nhưng Monika giấu nhiều thứ, người đàn ông biết nhiều thứ, Monika không thích người đàn ông",
 next: "fih4"},
  {id: "fih4",
  Name: "Con cá đáng tin (tự nhận)",
  avatar: "fih.gif",
  text:"Năm nay an toàn để thổi tắt nến",
  },
  
  {id: "sans",
  Name: "Sans",
  avatar: "Sleep.gif",
  text:"ZZZZZ....",
  options: [
    {label: "ALO ALO!", next: "sans1"},
    {label: "tỉnh dậy đi bộ xương!", next: "sansex"} ]
  },
  {id: "sans1",
  Name: "Sans",
  avatar: "SanBG.gif",
  text:"Ê, không ai dạy nhóc là không được làm phiền giấc ngủ của người khác à?",
  options: [
    {label: "thì sao?", next: "sans2"}
   ]
  },
  {id: "sansex",
  Name: "Sans",
  avatar: "SanBG.gif",
  text:"Ê, không ai dạy nhóc là không được làm phiền giấc ngủ của người khác à? với lại ta không phải bộ xương, ta là Sans",
  options: [
    {label: "cũng có khác gì nhau?", next: "sans2"}
   ]
  },
  {id: "sans2",
  Name: "Sans",
  avatar: "San2.webp",
  text:"Thôi bỏ đi. Hết bị bà cô với nụ cười đáng sợ kia làm phiền lại đến nhóc. Rốt cuộc là có chuyện gì nào?",
  options: [
    {label: "'bà cô với nụ cười đáng sợ '?", next: "sansex2"},
    {label: "*giải thích về cây nến*", next: "sans3"}
   ]
  },
  {id: "sansex2",
  Name: "Sans",
  avatar: "San2.webp",
  text:"Đúng vậy, bà chị đó tự nhiên chui ra từ cái vết nứt. Ảo thật. Và ta bị ném xuống nơi kì lạ này, tóc vàng, cầm ô, không biết nhóc biết cô ta không nhỉ?",
  next: "sansex3"},
  {id: "sansex3",
  Name: "Sans",
  avatar: "San2.webp",
  text:"Nói chuyện phiếm thế đủ rồi. Túm cái váy lại cô nhóc đến đây làm gì nào?",
  options: [
    {label: "*giải thích về cây nến*", next: "sans3"}
   ]},
  {id: "sans3",
  Name: "Sans",
  avatar: "San2.webp",
  text:"Hehehe, mặc dù ta có thể dùng Gaster Blaster để thắp nến, nhưng chỉ sợ rằng cái bánh kem của nhóc sẽ cháy như người Do Thái mất",
  options: [
    {label: "thật vô dụng", next: "sansend"}
   ]},
  {id: "sansend",
  Name: "Sans",
  avatar: "shrug.png",
  text:"Ê này, nhưng ông bạn ở bên cạnh ta thì không đâu nhé",
   onExit:  () => { moveDaveToX(100); }
  },
    {sfx:"davesfx1.mp3",
      id: "dave",
  Name: "Dave điên",
  avatar: "Davebg.gif",
  text:"Wabby-wabbo!",
   options: [
    {label: "xin chào?", next: "dave1"},
     {label: "ông có thể giúp tôi được không?", next: "dave1"}
   ]
  },
  {sfx:"davesfx2.mp3",
    id: "dave1",
  Name: "Dave điên",
  avatar: "Davebg.gif",
  text:"Wabby-Ogigagigigoogigigagogoogah!",
onExit: () => { showItemPopup("jalapeno.gif", "Nhận được: Jalapeno!", 2500); 
                const sfx = document.getElementById("davesfx3");
  sfx.currentTime = 0; sfx.play();
                document.getElementById("pepper").style.display = "flex"; }
   
  },
  {id: "spicy",
  Name: "KhoySpicy",
  avatar: "Jalapeno.gif",
  text:"...",
   options: [
    {label: "Ê ông già!"},
     {label: "*chọc giận quả ớt*"}
   ],
   onExit: () => { 
  showFire2();
  const sfx = document.getElementById("jalasfx");
  sfx.currentTime = 0.5;   
  sfx.play();       document.getElementById("pepper").style.display = "none";   document.getElementById("fire").style.display = "block";
    document.getElementById("cake").onclick = onFireClick;
  }
  }
    ]
    
    /*effect logic*/
    let activeEffects ={
      body:[],
      dialogueBox:[],
      avatar:[],
    }
      
      const targets = {
        body: document.body,
        dialogueBox: document.getElementById(dialogueBox),
        avatar: document.getElementById(avatar)
      }
      
      function applyEffect(target,className) {
        targets[target].classList.add(className);
        activeEffects[target].push(className);
      }
      
      function clearEffect(target) {
        activeEffects[target].forEach(fx =>targets[target].classList.remove(fx));
        activeEffects[target] =[];
      }
      function removeEffect(target, className) {
      targets[target].classList.remove(className);
      activeEffects[target] = activeEffects[target].filter(fx => fx !== className);
      }
    
