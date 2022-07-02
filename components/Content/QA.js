import React from "react";

const style = {
  wrapper: "p-4",
  qaContainer: "",
  question:'text-[#ffc900] text-3xl md:text-3xl my-7',
  answer:'text-gray-100'
};
const QA = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.qaContainer}>
        <h2 className={style.question}>
          Do you wish to be a part of this group?
        </h2>
        <p className={style.answer}>
          Play the Power Ranger Games Free online without download and become a
          part of the action! Prepare for war by donning your armour! To begin a
          Power Ranger combat, what is the first step? <br/>
           I'm referring, of course,
          to putting on your custom suit!<br/> It is a tight spandex suit with an
          opaque visor and a helmet of the same colour as the outfit.<br/> As a
          result, the public has no idea who the Rangers are. <br/>Play Power Rangers
          Games without Flash player the Samurai Games. As a Power Ranger,
          you're expected to follow this rule! <br/>The wearer's strength,
          durability, agility, and combat skill are all improved thanks to the
          suit. Other special skills include invisibility and telepathic powers,
          while specific Rangers have super speed. Do you believe you have what
          it takes to wear the Ranger suit and wield its immense authority and
          authority? You can get a glimpse of costume designs from various
          series by playing Super Megaforce: Legacy. <br/>Since the very beginning,
          Jason Lee Scott has been regarded as one of the show's most beloved
          characters.<br/> With the Power Rangers 20th Anniversary: Forever Red game,
          you can now play numerous versions of this well-known Ranger.
        </p>
      </div>
      <div className={style.qaContainer}>
        <h2 className={style.question}>
          Among these, which one is your top pick?
        </h2>
        <p className={style.answer}>
          Do you have what it takes to take on the Universe's most dreadful
          villains? The Power Rangers' primary mission, like that of any other
          well-known superhero team, is to keep the forces of evil at bay. The
          series' antagonists perfectly match the show's exaggerated and
          fast-paced fighting style.
        </p>
      </div>
      <div className={style.qaContainer}>
        <h2 className={style.question}>
          Do you wish to be the pilot of such an amazing machine?
        </h2>
        <p className={style.answer}>
          To take on villains like Scaraba and Virox, play the Zords of Fury
          video game. Even while each Ranger has tremendous power and learns a
          wide range of skills on his own, everyone can benefit from a helping
          hand now and again! A few of the baddies in this film are deadly!
          Fighting in teams of 2 or 3 or more is predicted as a result! Their
          amazing powers, in fact, often require a partner to work. Never
          Surrender will teach you how to be a good friend and a great hero.
        </p>
      </div>
      <div className={style.qaContainer}>
        <h2 className={style.question}>
          Is it possible to put together a Power Ranger squad that succeeds?
        </h2>
        <p className={style.answer}>
          You never know what kind of foes you're going to run against when
          watching Power Rangers. It's important to keep an open mind and be
          prepared for anything that comes your way!
        </p>
      </div>
    </div>
  );
};

export default QA;
