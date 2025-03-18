#let pxToPt = (size) => {return size * 3 / 4 * 1pt;}
#set page(width: pxToPt(630), height: pxToPt(630))
#set page(width: pxToPt(1200), height: pxToPt(630))

#set page(fill: rgb("#f3f4f6"))
#set text(
  font: "Harano Aji Gothic",
)

#set align(center+horizon)
#box()[
#set align(left+top)
#stack(
  dir: ltr,
  image("icon-192x192.png", width: pxToPt(80), ),
  [\@saiun_onearth],
)
#set align(center+horizon)
#text(size: 3em)[
  SF短編
  『未来より』
]
]