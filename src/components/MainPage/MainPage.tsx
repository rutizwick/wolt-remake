import React from 'react';
import s from './MainPage.scss';

export default function MainPage() {
  return (
    <div className={s.banner}>
      <div className={s.leftBanner}>
        <div>
          Craving Sushi?
        </div>
        <div>
          <p>Delivery address</p>
          <input/>
          <button>Search</button>
        </div>
      </div>
      <img
      className={s.rightBanner}
        src="https://cdn.wolt.com/frontpage-assets/hero-images/0_Sunday.jpg"
        srcSet="
                https://cdn.wolt.com/frontpage-assets/hero-images/0_Sunday@0.5x.jpg 640w,
                https://cdn.wolt.com/frontpage-assets/hero-images/0_Sunday.jpg 1100w,
                https://cdn.wolt.com/frontpage-assets/hero-images/0_Sunday@2x.jpg 4000w,
              "
        alt="woman with chia"
        style={{height: '50rem'}}
      ></img>
    </div>
  );
}
