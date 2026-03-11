import academy1 from "@/assets/academy-1.jpeg";
import academy2 from "@/assets/academy-2.jpeg";
import academy3 from "@/assets/academy-3.jpeg";
import academy4 from "@/assets/academy-4.jpeg";
import podcastCover from "@/assets/podcast-cover.jpg";
import cuclassLogo from "@/assets/cuclass-logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Mic, ExternalLink, Quote, MapPin } from "lucide-react";

export default function Academy() {
  const testimonials = [
    { text: "上課後真的覺得身心都放鬆了很多，連睡眠品質都改善了！", author: "台北市 林Ｘ恩" },
    { text: "課程超有趣，讓我對芳療產生更濃厚的興趣，回家還跟家人分享。", author: "新北市 陳Ｘ婷" },
    { text: "透過精油抓周，我終於聽見自己內心真實的聲音，這堂課不只是芳療，更是心靈的洗禮。", author: "台中市 張Ｘ豪" },
    { text: "以前總覺得精油化學很難，沒想到老師能講得這麼生動，現在調配方更有信心了！", author: "高雄市 李Ｘ君" },
    { text: "原本只是想學點生活應用，沒想到認識了更多芳療知識，還自己調出了專屬香氛！", author: "桃園市 王Ｘ凱" },
    { text: "幫孩子用精油按摩後，親子關係變得更親密，謝謝學苑提供這麼棒的課程。", author: "新竹縣 趙Ｘ瑋" },
    { text: "老師的講解深入淺出，搭配實作真的超有成就感！", author: "台南市 劉Ｘ雅" },
    { text: "考取證照的過程雖然辛苦，但有老師和同學的陪伴，讓我成功轉職，開啟第二人生！", author: "台北市 黃Ｘ諭" },
    { text: "這裡的學習氛圍好溫暖，每次來上課都被療癒，是我每週最期待的時光。", author: "宜蘭縣 吳Ｘ軒" },
    { text: "我們團隊很喜歡這堂課，之後還想持續邀請合作，讓更多同仁受惠。", author: "台中市 楊Ｘ如" },
    { text: "學習芳療後，更能覺察自己的情緒變化，也學會用香氣照顧身邊的家人朋友。", author: "花蓮縣 蔡Ｘ杰" },
    { text: "線上課程的畫質很清晰，實作包也很精緻，在家學習效果完全不打折！", author: "嘉義市 鄭Ｘ倫" },
    { text: "很喜歡客製化調香的環節，調出了屬於自己當下心情的味道，感覺被深深理解。", author: "台北市 許Ｘ心" },
    { text: "老師的實務經驗豐富，分享的案例都很實用，讓我在面對個案時不再手忙腳亂。", author: "新北市 謝Ｘ文" },
    { text: "不只學到技術，更學到了一種生活態度，讓生活充滿了儀式感與美好。", author: "桃園市 方Ｘ鳴" }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FDFCF8]">
      
      {/* Hero Section */}
      <div className="relative bg-[#899D5B]/10 py-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">芳心生活芳療學苑</h1>
          <p className="text-xl md:text-2xl text-[#899D5B] font-medium tracking-wide mb-8">專業 · 溫暖 · 生活化的芳香教育</p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            致力於將芳香療法融入生活，從基礎理論到專業應用，讓學員在知識、技巧與感受上全面成長。我們的課程結合理論、實作與情境應用，適合個人進修、專業發展，或作為團體與機構的紓壓方案。
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#899D5B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#899D5B]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 py-16 space-y-24">
        
        {/* Intro Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl w-full h-auto">
          <img src={academy1} alt="芳心生活芳療學苑環境" className="w-full h-full object-cover" />
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 relative inline-block">
              課程亮點
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#899D5B]/30" />
            </h2>
            <ul className="space-y-6">
              {[
                { title: "專業系統化", desc: "涵蓋精油化學、情緒芳療、調香技巧與產品製作。" },
                { title: "動手實作", desc: "每堂課皆能親手調製專屬產品，將知識轉化為生活應用。" },
                { title: "多元應用", desc: "從樂齡、親子、夫妻關係到學校多元服務課程，一應俱全。" },
                { title: "專業認證加值", desc: "可銜接 INA / CINA 專業芳療師證照課程。" }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-[#899D5B]/20 flex items-center justify-center text-[#899D5B]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-auto w-full rounded-2xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src={academy2} alt="課程實作" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-auto w-full rounded-2xl overflow-hidden shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src={academy3} alt="合作服務" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">合作與服務</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl text-[#899D5B] mb-2">企業團隊課程</h3>
                  <p className="text-muted-foreground">員工紓壓、專注力提升、團隊合作訓練。</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#899D5B] mb-2">社區與學校推廣</h3>
                  <p className="text-muted-foreground">樂齡芳療、親子課程、夫妻情感互動課程，以及情緒管理、壓力舒緩、專注力培養等多元服務課程。</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#899D5B] mb-2">社福與政府單位合作</h3>
                  <p className="text-muted-foreground">與協會、基金會合作，為社工員提供專業培訓，並為個案設計專屬舒壓與情緒調適課程。</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#899D5B] mb-2">客製化工作坊</h3>
                  <p className="text-muted-foreground">依需求設計內容與產品，滿足不同場合與族群需求。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Podcast & Online Course */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#899D5B] text-white border-none overflow-hidden relative flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden shadow-md bg-white">
                <img src={podcastCover} alt="Podcast Cover" className="w-full h-full object-cover" />
              </div>
              <div>
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <Mic className="w-6 h-6" /> Podcast《芳療AP》
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-4 flex-grow">
              <p className="text-white/90 leading-relaxed">
                沒時間上課也能感受芳療魅力！在《芳療AP》Podcast，我們聊精油化學、情緒療癒、生活應用與芳香故事，讓你在日常中也能遇見療癒的香氣。
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="sm" asChild className="rounded-full bg-white text-[#899D5B] hover:bg-white/90 border-none">
                  <a href="https://player.soundon.fm/p/c077ba47-cb8b-469f-b216-72d653ae77a0" target="_blank" rel="noopener">SoundOn</a>
                </Button>
                <Button variant="secondary" size="sm" asChild className="rounded-full bg-white text-[#899D5B] hover:bg-white/90 border-none">
                  <a href="https://podcast.kkbox.com/tw/channel/HYNtZLPNegHwEGitii" target="_blank" rel="noopener">KKBOX</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#aa8948] text-white border-none overflow-hidden relative flex flex-col">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-16 shrink-0 bg-white/10 rounded-lg p-2 flex items-center justify-center">
                 <img src={cuclassLogo} alt="CU Class Logo" className="h-full w-auto object-contain" />
              </div>
              <CardTitle className="font-serif text-2xl flex items-center gap-2">
                <ExternalLink className="w-6 h-6" /> 線上課程平台
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-4 flex-grow">
              <p className="text-white/90 leading-relaxed">
                想在家隨時隨地學芳療？我們的專業課程也同步上架至 CU Class 平台，讓你可以邊聽邊實作，輕鬆累積芳療知識與技能。
              </p>
              <Button size="sm" asChild className="rounded-full bg-[#899D5B] hover:bg-[#76894A] text-white border-none">
                <a href="https://school.cuclass.com/home?storeId=36110&teacherId=19360" target="_blank" rel="noopener">
                  立即前往 CU Class
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials - Card Style with Author Info */}
        <div className="py-12">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">學員回饋</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-border/50 relative hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <Quote className="w-8 h-8 text-[#899D5B]/20 absolute top-4 left-4" />
                  <p className="text-muted-foreground pt-6 relative z-10 leading-relaxed mb-6">
                    {item.text}
                  </p>
                </div>
                <div className="flex items-center justify-end text-sm text-[#899D5B] font-medium border-t border-border/30 pt-4">
                  <MapPin className="w-3 h-3 mr-1" />
                  {item.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Footer Image */}
        <div className="space-y-8">
          <div className="text-center space-y-6">
            <h2 className="font-serif text-3xl font-bold">更多課程資訊 & 合作洽詢</h2>
            <p className="text-muted-foreground">目前可透過以下粉絲專頁了解更多課程與合作訊息，並私訊聯絡我們：</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" asChild className="rounded-full border-[#899D5B] text-[#899D5B] hover:bg-[#899D5B] hover:text-white">
                <a href="https://www.facebook.com/funthinglife" target="_blank" rel="noopener">
                  Aling老師｜Facebook 粉專
                </a>
              </Button>
              <Button variant="outline" asChild className="rounded-full border-[#899D5B] text-[#899D5B] hover:bg-[#899D5B] hover:text-white">
                <a href="https://www.facebook.com/yumiaoaroma" target="_blank" rel="noopener">
                  Peggy 老師｜Facebook 粉專
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-auto">
            <img src={academy4} alt="芳療學苑結尾" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
}
