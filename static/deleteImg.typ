#set page(width: 30cm, height: 30cm)
#set align(center+horizon)

#let z-stack(align: left + top, ..contents) = (
  context {
    let max-width = calc.max(
      ..contents.pos().map(content => {
        measure(content).width
      }),
    )

    box(
      grid(
        align: align,
        columns: contents.pos().len() * (max-width,),
        column-gutter: -max-width,
        rows: 1,
        ..contents
      ),
    )
  }
)

#let rb = color.map.rainbow
#set page(
  fill: gradient.radial(..rb)
)

#z-stack(
  align: center,
  move(dy: -7cm, circle(
    radius: 5cm,
    stroke: gradient.conic(..rb, angle: 290deg)+1pt,
  )),

  move(dy: 4cm, circle(
    radius: 10cm,
    stroke: gradient.conic(..rb, angle: 200deg)+1pt,
  )),
)