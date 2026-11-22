// Zeliha Ece Sancaklı, 2024502135
import { renderToStaticMarkup } from 'react-dom/server'
function CardA(props) { return <section><h2>{props.title}</h2>{props.children}</section> }
function CardB({ title, children }) { return <section><h2>{title}</h2>{children}</section> }
console.log('P1:', renderToStaticMarkup(<CardA title="Hi">text</CardA>), renderToStaticMarkup(<CardB title="Hi">text</CardB>))
console.log('P2:', renderToStaticMarkup(<CardB title="Same">text</CardB>), renderToStaticMarkup(<CardB title="Same" children="text" />))
function Show({ children }) { return <div>{children}</div> }
console.log('P3:', renderToStaticMarkup(<Show>word</Show>), renderToStaticMarkup(<Show>{7}</Show>), renderToStaticMarkup(<Show><em>one</em></Show>), renderToStaticMarkup(<Show><b>A</b><i>B</i></Show>), renderToStaticMarkup(<Show>{undefined}</Show>), renderToStaticMarkup(<Show>{null}</Show>), renderToStaticMarkup(<Show>{false}</Show>), typeof (() => 'later'))
function Panel({ title, children, ...rest }) { return <section {...rest}><h2>{title}</h2>{children}</section> }
function PanelExplicit({ title, children, ...rest }) { return <section {...rest} className="explicit"><h2>{title}</h2>{children}</section> }
console.log('P4:', renderToStaticMarkup(<Panel title="Attrs" id="panel-1" data-kind="demo">Body</Panel>), renderToStaticMarkup(<PanelExplicit title="Wins" className="from-rest">Body</PanelExplicit>))
function Layout({ header, footer, children }) { return <article><header>{header}</header><main>{children}</main><footer>{footer}</footer></article> }
console.log('P5:', renderToStaticMarkup(<Layout header="H" footer="F">Content</Layout>), renderToStaticMarkup(<Layout><header>H</header><p>Content</p><footer>F</footer></Layout>))
function Badge({ label = 'default' }) { return <span>{label}</span> }
console.log('P6:', renderToStaticMarkup(<Badge />), renderToStaticMarkup(<Badge label={undefined} />), renderToStaticMarkup(<Badge label={null} />))
console.log('P7: JavaScript has no compile-time prop rejection; TypeScript checks the equivalent declarations.')
