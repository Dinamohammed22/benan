import React, { Component } from "react";
import Animation from "./Animation";
import "./App.css";
// import { NavLink } from "react-router-dom";
export default class Mainpage extends Component {
  render() {
    return (
      <div className="main-page">
        {/* main page start */}

        <div id="first-sec" className="first-sec">
          {/* first section start */}
          <div className="container-">
            {/* container- start */}

            <img
              src={require("../images/Rectangle 17.png")}
              className="car-img"
              alt="car"
            />
            <h2>
              <b>بنان,</b> يكفيك الكثير
              <br />
              نعمل للارتقاء{" "}
              <b>
                بقطاع تأجير السيارات
                <br />
              </b>
              وتوفير تقنية متقدمة
            </h2>
            {/* container- end */}
          </div>
          {/* first section start */}
        </div>
        <div className="second-sec">
          {/* second section start */}
          <div className="container-">
            {/* container- start */}

            <img
              src={require("../images/185 1.png")}
              className="benan-img-sec-siction"
              alt="car"
            />
            <div className="text-second-sec">
              <h2>بنان, خيار لإدارة شركات و مكاتب تأجير السيارات</h2>
              <p>
                يوفر نظام بنان احتياجات شركات و مكاتب تأجير السيارات مع خاصية
                الربط الألي مع الجهات ذات العلاقة و تحويل المنشأة إلى نظام آلي
                متكامل، و نعتني بوجود كافة البيانات، ورفع حالة جميع الوثائق من
                تصاريح ورخص، مع بيان حالة استيفائها، ومواعيد تجديدها أو انتهائها
                ، الإحاطة الشاملة مع توفير كافة البيانات المتعلقة بوثائق
                السيارات وحالة تأمينها وسريان فحصها.
              </p>
            </div>
            {/* container- end */}
          </div>
          {/* second section start */}
        </div>
        <div id="third-sec" className="third-sec">
        <h1>لماذا بنان ؟</h1>
          {/* third section start */}
          <div className="container-">
            {/* container- start */}
            
            <Animation/>
            {/* container- end */}
          </div>
          {/* third section start */}
        </div>
        <div id="fourth-sec" className="fourth-sec">
          {/* fourth section start */}
          <h1>مميزاتنا</h1>
          <div className="container-">
            {/* container- start */}

            {/* collumn one start */}

            <div className="collumn-four-sec">
              <div className="box-four-sec">
                <img
                  src={require("../images/Rectangle 26.png")}
                  className="img-four"
                  alt="car"
                />
                <h2>تقارير تفصيلية إدارية و مالية</h2>
              </div>

              <div className="box-four-sec">
                <img
                  src={require("../images/Rectangle 34.png")}
                  className="img-four"
                  alt="car"
                />
                <h2>إضافة الخدمات المصاحبة للعقد</h2>
              </div>
            </div>
            {/* collumn one end */}

            {/* collumn two start */}

            <div className="collumn-four-sec   col2">
              <div className="box-four-sec">
                <img
                  src={require("../images/Rectangle 28.png")}
                  className="img-four"
                  alt="car"
                />
                <h2>
                  الفحص الظاهري بتصوير حالة السيارة ميدانيا ورفع تلك الصور من
                  ضمن العقد
                </h2>
              </div>

              <div className="box-four-sec">
                <img
                  src={require("../images/Rectangle 33.png")}
                  className="img-four"
                  alt="car"
                />
                <h2>
                  إدارة متكاملة لكافة الفروع و السيارات و العقود و المستأجرين
                  والمستخدمين
                </h2>
              </div>
            </div>
            {/* collumn two end */}

            {/* collumn three start */}

            <div className="collumn-four-sec">
              <div className="box-four-sec">
                <img
                  src={require("../images/Rectangle 27.png")}
                  className="img-four"
                  alt="car"
                />
                <h2>نظام رسائل ذكية للدعاية والتهنئة و تنبيهه للمستأجر</h2>
              </div>

              <div className="box-four-sec">
                <img
                  src={require("../images/Rectangle 29.png")}
                  className="img-four"
                  alt="car"
                />
                <h2>يدعم احتساب القيمة المضافة</h2>
              </div>
            </div>
            {/* collumn three end */}

            {/* container- end */}
          </div>
          {/* fourth section start */}
        </div>
        <div id="fifth-sec" className="fifth-sec">
          <h1>شركاؤنا</h1>
          {/* fifth section start */}
          <div className="container-">
            {/* container- start */}
            <div className="collumn-fifth-sec">
              <img
                src={require("../images/شريك2.png")}
                className="img-five"
                alt="car"
              />
            </div>
            <div className="collumn-fifth-sec col-bottom">
              <img
                src={require("../images/Rectangle 24.png")}
                className="img-five"
                alt="car"
              />
            </div>
            <div className="collumn-fifth-sec">
              <img
                src={require("../images/شريك3.png")}
                className="img-five"
                alt="car"
              />
            </div>
            <div className="collumn-fifth-sec col-bottom">
              <img
                src={require("../images/Rectangle 25.png")}
                className="img-five"
                alt="car"
              />
            </div>
            {/* container- end */}
          </div>
          {/* fifth section start */}
        </div>

        {/* main page end*/}
      </div>
    );
  }
}
