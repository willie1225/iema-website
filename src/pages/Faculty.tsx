// src/pages/Faculty.tsx - Refactored to fetch from Supabase
import facultyHuang from "@/assets/faculty-huang.jpeg";
import facultyWu from "@/assets/faculty-wu.jpeg";
import facultyNishamah from "@/assets/faculty-nishamah.jpeg";
import facultyLuo from "@/assets/faculty-luo.jpeg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Faculty as FacultyType } from "@/lib/supabase";

// Fallback data
const defaultFacultyList: FacultyType[] = [
  {
    id: '1',
    name: "黃于玲",
    title: "芳心生活芳療學苑創辦人",
    description: "身心靈結合芳療，但用更多心理學基礎跟理論科學概念幫助大家更能快速上手，所以主要以情緒心理結合芳療為主的課程的推廣",
    image_url: facultyHuang,
    details: `
      經歷：
      ．芳心生活芳療學苑講師/創辦人
      ．中華國際自然醫學協會/常務理事
      ．中華身心靈美學技能發展協會/情緒芳療講師
      ．衛福部中醫藥研究所教學藥園導覽員
      ．薰喬國際有限公司/負責人
      ．好行整合行銷顧問有限公司/芳療特約講師

      證照：
      ．中華國際自然醫學協會 自然醫學保健師
      ．美國NAHA國際芳療師證照
      ．英國TAS芳療照護師
      ．美國自然醫學會中醫芳療證照
      ．HBC認證情緒芳療師
      ．教育部CPA芳療應用師乙級證照
    `
  },
  {
    id: '2',
    name: "吳佩瑩",
    title: "芳心生活芳療學苑創辦人",
    description: "我們相信，植物的芳香有療癒人心的力量。透過芳療的陪伴，引導大家在日常中慢慢找回平衡，與自然連結，與自己靠近。",
    image_url: facultyWu,
    details: `
      經歷：
      ．芳心生活芳療學苑講師/創辦人
      ．中華國際自然醫學協會/常務理事
      ．中華亞健康世界總會/常務理事
      ．立信生醫科技有限公司/負責人
      ．御臨生醫科技股份有限公司/經理
      ．倍加萊生醫科技股份有限公司/經理
      ．花蓮縣政府社會處新移民家庭福利服務中心/督導
      ．花蓮縣政府社會處單親福利服務中心/社工員
      ．東海大學社會工作學系/助教

      證照：
      ．中華國際自然醫學協會 INA整體芳療師
      ．NAHA美國整體芳療協會芳療師證照
      ．IFPA芳療與治療性按摩證照
      ．USANMA 美國整體健康照護芳療專業認證
      ．GATA高階科學芳香調理師證照
      ．HBC情緒芳療師
      ．CPA 芳香療法應用師證照
    `
  },
  {
    id: '3',
    name: "Nishamah",
    title: "Φως του Έρωτα®️愛之光能量執行師",
    description: "我相信，療癒不是神秘的奇蹟，而是一次次願意選擇回到自己。不論年紀、經歷，只要你願意，都能走上重新與生活相愛的路。",
    image_url: facultyNishamah,
    details: `
      經歷/資格：
      ．美國西塔療癒認證療癒師資格 (基礎DNA、進階DNA、深度挖掘、造物主與我、伴侶與我、靈魂伴侶、人際內圈、生活贏家、地球與我)
      ．英國黛安娜庫柏白光學校獨角獸Master培訓教師資格
      ．英國黛安娜庫柏白光學校合格講師系列 (獨角獸、龍族、翻轉人生)
      ．美國金錢金錢靈氣三階段認證講師
      ．獨創全方位突破豐盛能量符號傳授師
      ．情緒芳療師
      ．芳療洞悉卡解讀師
      ．彩虹靈魂數字解讀師
    `
  },
  {
    id: '4',
    name: "羅子婕",
    title: "體能訓練師",
    description: "透過芳香療法讓高壓力、高張力的運動員得到身心靈緩解。不僅是在身體上的療癒，藉由芳療的緩解作用能夠提升運動表現！",
    image_url: facultyLuo,
    details: `
      經歷：
      ．1992-1994年 中興俱樂部健身教練
      ．1993-2003年 中興健身樂部、雅姿韻律世界、台北聯誼會等俱樂部有氧舞蹈教師
      ．1996-1999年 台北聯誼會體適能主任
      ．2000-2001年 五常國中體育實習老師
      ．2004年 中華職棒中信鯨隊體能教練
      ．2005-2007年 中華職棒La New熊隊體能教練
      ．2006年 第二屆亞洲職棒大賽中華職棒La New熊隊
      ．2009年 美國大聯盟休士頓太空人隊秋訓邀請
      ．2009年 Annika Academy 授證
      ．2011年 美國Titleist Performance Institute workshop
      ．2011年 Red cord懸吊系統講師至今
      ．2012年 大陸北京高爾夫球學院體能訓練師至今
      ．2012年 台北體育學院球類系及動態藝術系兼任老師至今
      ．2013年 開南大學棒球隊專任體能訓練師
      ．2018年 花納自然療癒空間芳療師至今
      ．2022-2023年 開南大學棒球隊專任體能訓練師及防護員

      證照：
      ．美國R.T.S阻力訓練合格證照
      ．挪威S.E.T Basie Course
      ．Redcord Active/Sport Intro證照
      ．ANNIKA ACADEMY 課程認證
      ．GRAVITY Personal Training Instructor
      ．傳統整復員證書
      ．C級游泳教練證、C級游泳救生證
      ．CPR證書
      ．NAHA高階芳療師
      ．中醫芳療實證師
    `
  }
];

export default function Faculty() {
  const [facultyMembers, setFacultyMembers] = useState<FacultyType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const { data, error } = await supabase
          .from('faculty')
          .select('*')
          .order('display_order', { ascending: true });

        if (error) {
          console.error("Failed to fetch faculty:", error);
          setFacultyMembers(defaultFacultyList);
        } else if (data && data.length > 0) {
          setFacultyMembers(data as FacultyType[]);
        } else {
          setFacultyMembers(defaultFacultyList);
        }
      } catch (err) {
        console.error("Exception fetching faculty:", err);
        setFacultyMembers(defaultFacultyList);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  const displayList = facultyMembers.length > 0 ? facultyMembers : (loading ? [] : defaultFacultyList);

  if (loading && facultyMembers.length === 0) {
      return (
        <div className="w-full min-h-screen bg-[#F0EFEB] py-16 flex justify-center items-center">
            <p>載入師資陣容中...</p>
        </div>
      );
  }

  return (
    <div className="w-full min-h-screen bg-[#F0EFEB] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-center font-serif text-4xl font-bold text-foreground mb-16 tracking-wider">
          師資陣容
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {displayList.map((faculty, index) => (
            <div key={index} className="flex flex-col gap-6 group">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Image */}
                <div className="shrink-0 w-full sm:w-[180px] aspect-square rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src={faculty.image_url} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 space-y-3">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-1">
                      {faculty.name}
                    </h2>
                    <p className="text-sm font-bold text-foreground/80 mb-3">
                      {faculty.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                      {faculty.description}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="bg-[#899D5B] hover:bg-[#76894A] text-white rounded-full px-6 py-2 h-auto text-sm font-medium shadow-sm transition-all hover:shadow-md flex items-center gap-2 w-fit"
                        >
                          點我看更多 <MessageCircle className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md max-h-[80vh]">
                        <DialogHeader>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                               <img src={faculty.image_url} alt={faculty.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <DialogTitle className="text-xl font-serif font-bold">{faculty.name}</DialogTitle>
                                <DialogDescription className="text-sm text-muted-foreground">{faculty.title}</DialogDescription>
                            </div>
                          </div>
                        </DialogHeader>
                        <ScrollArea className="h-[50vh] pr-4">
                          <div className="whitespace-pre-line text-sm leading-loose text-muted-foreground">
                            {faculty.details}
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-stone-300/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
