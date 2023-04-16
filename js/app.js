$(".marquee").marquee({
  //speed in milliseconds of the marquee
  duration: 9000,
  //gap in pixels between the tickers
  gap: 0,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 0,
  //'left' or 'right'
  direction: "left",
  //true or false - should the marquee be duplicated to show an effect of continuous flow
  duplicated: true,
});
$(".marquee-reverse").marquee({
  //speed in milliseconds of the marquee
  duration: 9000,
  //gap in pixels between the tickers
  gap: 0,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 0,
  //'left' or 'right'
  direction: "right",
  //true or false - should the marquee be duplicated to show an effect of continuous flow
  duplicated: true,
});
