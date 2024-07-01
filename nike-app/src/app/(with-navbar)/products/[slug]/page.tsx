export default function DetailProduct({
  params,
}: {
  readonly params: { slug: string };
}) {
  return <h1>Detail Product {params.slug}</h1>;
}
