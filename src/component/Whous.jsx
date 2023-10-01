import React from "react";
import AutoScrollDivs from "./AutoScrollDivs";

function Whous() {
  const divsData = [
    <div>
      <h1>من نحن</h1>
    </div>,
    <div>
      <h2>
        بنان منظومة إلكترونية سحابية، لإدارة شركات و مكاتب تأجير السيارات
        بالمملكة العربية السعودية من خلال وسائل وآليات دقيقة تحقق أعلى مستويات
        التنظيم والدقة والفاعلية
      </h2>
    </div>,
    <div>
      <h1>رؤيتنا</h1>
    </div>,
    <div>
      <h2>
        أن نكون محل ثقة المستثمرين بصناعة تأجير السيارات بالمملكة العربية
        السعودية من خلال العمل على المساندة الفنية و التطوير المستمر الذي يذلل
        المعوقات و التحديات التي تواجه المتغيرات و المستجدات التي تطرأ على
        التطوير و الاحترافية بالصناعة
      </h2>
    </div>,
    <div>
      <h1>مهمتنا</h1>
    </div>,
    <div>
      <h2>
        نسعى في بنان إلى الارتقاء وأتمته شركات ومكاتب تأجير السيارات بكل
        احترافيه و مرونة و دقة
      </h2>
    </div>,

    // Add more content as needed
  ];
  return (
    <div className="whous">
      <div className="container-whous">
        <AutoScrollDivs divsData={divsData} />

        <img
          src={require("../images/key man.png")}
          className="whous-img"
          alt="car"
        />
      </div>
    </div>
  );
}

export default Whous;
