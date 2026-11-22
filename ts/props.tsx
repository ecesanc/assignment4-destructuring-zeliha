// Zeliha Ece Sancaklı, 2024502135
import type { ComponentProps, PropsWithChildren, ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
type CardProps = { title: string; children?: ReactNode }
function Card({ title, children }: CardProps) { return <section><h2>{title}</h2>{children}</section> }
function CardPropsObject(props: CardProps) { return <section><h2>{props.title}</h2>{props.children}</section> }
console.log('P1:', renderToStaticMarkup(<Card title="Hi">text</Card>), renderToStaticMarkup(<CardPropsObject title="Hi">text</CardPropsObject>))
console.log('P2:', renderToStaticMarkup(<Card title="Same">text</Card>), renderToStaticMarkup(<Card title="Same" children="text" />))
function Show({ children }: PropsWithChildren) { return <div>{children}</div> }
console.log('P3:', renderToStaticMarkup(<Show>word</Show>), renderToStaticMarkup(<Show>{7}</Show>), renderToStaticMarkup(<Show><em>one</em></Show>), renderToStaticMarkup(<Show><b>A</b><i>B</i></Show>), renderToStaticMarkup(<Show>{null}</Show>), renderToStaticMarkup(<Show>{false}</Show>))
type PanelProps = { title: string; id?: string; children?: ReactNode }
function Panel({ title, children, ...rest }: PanelProps) { return <section {...rest}><h2>{title}</h2>{children}</section> }
console.log('P4:', renderToStaticMarkup(<Panel title="Attrs" id="panel-1">Body</Panel>))
function Layout({ header, footer, children }: { header: ReactNode; footer: ReactNode } & PropsWithChildren) { return <article><header>{header}</header><main>{children}</main><footer>{footer}</footer></article> }
console.log('P5:', renderToStaticMarkup(<Layout header="H" footer="F">Content</Layout>), renderToStaticMarkup(<Layout header={<header>H</header>} footer={<footer>F</footer>}><p>Content</p></Layout>))
function Badge({ label = 'default' }: { label?: string | null }) { return <span>{label}</span> }
console.log('P6:', renderToStaticMarkup(<Badge />), renderToStaticMarkup(<Badge label={undefined} />), renderToStaticMarkup(<Badge label={null} />))
type ButtonProps = ComponentProps<'button'>
function ActionButton(props: ButtonProps) { return <button {...props} /> }
console.log('P7:', renderToStaticMarkup(<ActionButton type="button" disabled>Save</ActionButton>), 'ReactNode accepts strings, numbers and elements; ComponentProps accepts native button attributes.')
// @ts-expect-error: type must be a valid button type.
const invalidButton = <ActionButton type="not-a-button-type">Bad</ActionButton>
console.log('P7-check:', invalidButton.type)
